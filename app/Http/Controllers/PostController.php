<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        return Inertia::render('Publish');
    }

    public function explore()
    {
        $posts = Post::with('user:id,photo,name,is_verified', 'postAssets')
            ->orderBy('created_at', 'desc')
            ->limit(10)
            ->get();

        return Inertia::render('Explore', compact('posts'));
    }

    public function uploadFile(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:mp4,jpg,png|max:5120',
        ]);

        $file = $request->file('file');
        $extension = $file->getClientOriginalExtension();
        $type = in_array($extension, ['mp4']) ? 'video' : 'photo';

        if ($type === 'video' || $type === 'photo') {
            $path = $file->storeAs('uploads', uniqid() . '.' . $extension, 'public');

            return response()->json([
                'signature' => Crypt::encrypt($path . 'xxxxx' . $type),
                'type' => $type,
                'preview' => asset('storage/' . $path)
            ]);
        }

        return response()->json(['error' => 'Invalid file type'], 400);
    }

    public function storeContent(Request $request)
    {
        $request->validate([
            'visuals' => 'required|array',
            'visuals.*' => 'required|string',
            'caption' => 'nullable'
        ]);

        $visuals = $request->input('visuals');
        $caption = $request->input('caption');

        DB::transaction(function () use ($visuals, $caption, $request) {
            $post = $request->user()->posts()->create([
                'caption' => $caption
            ]);

            foreach ($visuals as $visual) {
                $visual = $this->decodeVisual($visual);
                $path = $visual['path'];
                $type = $visual['type'];

                $post->postAssets()->create([
                    'asset_path' => $path,
                    'type' => $type
                ]);
            }
        });

        return to_route('explore');
    }

    protected function decodeVisual($encrypted)
    {
        $decrypted = Crypt::decrypt($encrypted);
        $exploded = explode('xxxxx', $decrypted);

        $path = $exploded[0];
        $type = $exploded[1];

        return ['path' => $path, 'type' => $type];
    }
}
