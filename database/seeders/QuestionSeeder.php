<?php

namespace Database\Seeders;

use App\Models\Question;
use Illuminate\Database\Seeder;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $questions = [
            [
                'level' => 1,
                'question' => 'Sebagai seorang manajer pemasaran, ditugaskan untuk merancang strategi promosi baru untuk produk yang telah ada. Dalam merancang strategi ini, harus mempertimbangkan berbagai aspek, seperti target pasar, jenis media yang digunakan, serta anggaran yang tersedia. Apa langkah pertama yang harus dilakukan?',
                'answers' => [
                    'Menentukan produk mana yang akan dipromosikan',
                    'Menganalisis audiens dan segmentasi pasar',
                    'Memilih media promosi yang paling mahal',
                    'Menghitung anggaran promosi',
                    'Membuat desain materi promosi'
                ],
                'correct_index' => 1,
                'answer_reason' => 'Langkah pertama yang paling penting dalam merancang strategi promosi adalah menganalisis audiens dan segmentasi pasar. Memahami siapa yang akan dijangkau oleh promosi akan mempengaruhi pemilihan media dan pesan yang tepat.'
            ],
            [
                'level' => 2,
                'question' => 'Suatu Perusahaan memiliki anggaran terbatas untuk promosi produk baru. Berdasarkan teori promosi, apa pendekatan yang paling efisien untuk memaksimalkan efektivitas promosi dengan anggaran terbatas?',
                'answers' => [
                    'Menggunakan iklan televisi di prime time',
                    'Fokus pada promosi media sosial dan influencer',
                    'Mengadakan event besar dengan banyak hadiah',
                    'Menambah jumlah media cetak untuk jangkauan lebih luas',
                    'Mengalokasikan anggaran sepenuhnya untuk diskon besar-besaran'
                ],
                'correct_index' => 1,
                'answer_reason' => 'Menggunakan media sosial dan influencer adalah pilihan yang lebih efisien dan dapat menjangkau audiens yang lebih luas dengan biaya yang lebih rendah, terutama untuk anggaran terbatas.'
            ],
            [
                'level' => 3,
                'question' => 'Perusahaan sedang merancang sebuah kampanye iklan untuk sebuah produk baru yang memiliki keunggulan dibandingkan dengan pesaing. Bagaimana cara terbaik untuk mengkomunikasikan keunggulan tersebut dalam kampanye promosi?',
                'answers' => [
                    'Fokus pada harga produk yang lebih murah',
                    'Fokus pada testimoni pengguna yang puas',
                    'Menonjolkan fitur unik dan manfaat produk',
                    'Membandingkan produk dengan pesaing secara langsung',
                    'Menyediakan diskon besar untuk menarik perhatian'
                ],
                'correct_index' => 2,
                'answer_reason' => 'Menonjolkan fitur unik dan manfaat produk adalah cara terbaik untuk menunjukkan keunggulan produk secara positif tanpa menyerang pesaing secara langsung.'
            ],
            [
                'level' => 4,
                'question' => 'Dalam promosi produk, manfaat utama dari penggunaan strategi "segmentation, targeting, positioning" adalah:',
                'answers' => [
                    'Mempercepat waktu pemasaran',
                    'Meningkatkan loyalitas pelanggan dalam waktu singkat',
                    'Menargetkan pasar yang lebih luas dengan pesan promosi yang lebih umum',
                    'Membantu perusahaan untuk menyusun strategi promosi yang lebih efisien dan sesuai dengan kebutuhan segmen pasar',
                    'Memastikan harga produk selalu lebih rendah dari pesaing'
                ],
                'correct_index' => 3,
                'answer_reason' => 'Strategi STP membantu perusahaan untuk lebih fokus dalam memasarkan produk dengan cara yang lebih spesifik sesuai dengan karakteristik segmen pasar yang dituju.'
            ],
            [
                'level' => 5,
                'question' => 'Berdasarkan gambar di atas, produk yang mana dapat dipromosikan menggunakan pesan berbahasa lokal sehingga dapat menarik perhatian pelanggan karena ciri khas budayanya?',
                'answers' => [
                    '2 dan 3',
                    '1 dan 3',
                    '1 dan 2',
                    '3 dan 4',
                    '2 dan 4'
                ],
                'correct_index' => 2,
                'answer_reason' => 'Produk yang dipromosikan menggunakan pesan berbahasa lokal adalah produk kerajinan dari masing-masing daerah. Produk yang dipromosikan setidaknya memuat penggunaan bahasa dari produk tersebut berasal sehingga penggunaan bahasa lokal menjadi salah satu ciri khas dalam promosi produk.'
            ],
            [
                'level' => 6,
                'question' => 'Bagaimana strategi promosi yang paling efektif jika perusahaan ingin meningkatkan loyalitas pelanggan dalam jangka panjang?',
                'answers' => [
                    'Memberikan diskon besar sekali-sekali',
                    'Mengadakan acara tahunan dengan harga produk lebih murah',
                    'Membentuk program loyalitas yang memberikan penghargaan atas pembelian berulang',
                    'Meningkatkan frekuensi iklan media sosial',
                    'Menggunakan selebriti untuk mempromosikan produk'
                ],
                'correct_index' => 2,
                'answer_reason' => 'Program loyalitas menciptakan hubungan jangka panjang dengan pelanggan, menginsentifkan pembelian berulang dan meningkatkan retensi pelanggan.'
            ],
            [
                'level' => 7,
                'question' => 'Mengapa promosi penjualan berbentuk sampel gratis sering digunakan oleh perusahaan untuk produk baru?',
                'answers' => [
                    'Untuk menambah variasi harga',
                    'Agar pelanggan merasa tertarik dengan produk murah',
                    'Untuk memberikan bukti kualitas produk langsung kepada konsumen',
                    'Untuk mengurangi stok yang ada',
                    'Agar perusahaan bisa mengurangi biaya produksi'
                ],
                'correct_index' => 2,
                'answer_reason' => 'Memberikan sampel gratis memungkinkan konsumen merasakan kualitas produk sebelum membeli, yang meningkatkan kemungkinannya untuk membeli produk tersebut.'
            ],
            [
                'level' => 8,
                'question' => 'Dalam konteks promosi produk perusahaan, yang dimaksud dengan "pengaruh dari word-of-mouth" adalah:',
                'answers' => [
                    'Menyebarkan informasi melalui iklan berbayar',
                    'Pengaruh yang ditimbulkan oleh testimoni dari konsumen yang puas',
                    'Penggunaan influencer untuk mempromosikan produk',
                    'Memproduksi konten viral di media sosial',
                    'Penggunaan iklan melalui media massa tradisional'
                ],
                'correct_index' => 1,
                'answer_reason' => 'Word-of-mouth adalah bentuk promosi yang sangat efektif karena berasal dari rekomendasi pribadi, yang lebih dipercaya oleh calon pelanggan.'
            ],
            [
                'level' => 9,
                'question' => 'Bagaimana seharusnya promosi produk disesuaikan dengan fase produk dalam siklus hidup produk?',
                'answers' => [
                    'Di tahap pengenalan, fokus pada pengurangan harga',
                    'Di tahap kedewasaan, fokus pada membangun kesadaran merek',
                    'Di tahap penurunan, fokus pada inovasi produk baru',
                    'Di tahap pertumbuhan, fokus pada promosi penjualan agresif',
                    'Di tahap pengenalan, fokus pada penyediaan produk gratis'
                ],
                'correct_index' => 3,
                'answer_reason' => 'Pada tahap pertumbuhan, perusahaan perlu memperluas pasar dan meningkatkan pangsa pasar, sehingga promosi agresif dan menarik sangat penting untuk mempercepat adopsi.'
            ],
            [
                'level' => 10,
                'question' => 'Bagaimana pentingnya menggunakan data analitik dalam perencanaan promosi produk?',
                'answers' => [
                    'Data analitik tidak diperlukan dalam perencanaan promosi',
                    'Data analitik hanya digunakan untuk analisis setelah promosi berlangsung',
                    'Data analitik memungkinkan perusahaan untuk menargetkan audiens yang tepat dan mengevaluasi efektivitas promosi',
                    'Data analitik hanya berfungsi untuk menetapkan harga produk',
                    'Data analitik digunakan untuk menciptakan konten viral'
                ],
                'correct_index' => 2,
                'answer_reason' => 'Data analitik memberikan wawasan yang penting untuk merancang promosi yang tepat sasaran dan mengukur kinerjanya secara akurat.'
            ],
            [
                'level' => 11,
                'question' => 'Dalam promosi digital, mengapa konten yang interaktif lebih efektif daripada konten pasif?',
                'answers' => [
                    'Karena lebih murah untuk dibuat',
                    'Karena dapat meningkatkan keterlibatan pelanggan dan menciptakan pengalaman yang lebih personal',
                    'Karena lebih mudah dibagikan di media sosial',
                    'Karena menarik lebih banyak pengunjung ke situs web',
                    'Karena lebih mudah dimengerti oleh audiens'
                ],
                'correct_index' => 1,
                'answer_reason' => 'Konten interaktif mengundang partisipasi langsung dari audiens, yang meningkatkan keterlibatan dan menciptakan hubungan yang lebih personal antara pelanggan dan merek.'
            ],
            [
                'level' => 12,
                'question' => 'Perusahaan menerapkan program CSR (Corporate Social Responsibility), maka yang menjadi tujuan utama dari promosi produk yang dilakukan melalui program CSR adalah:',
                'answers' => [
                    'Meningkatkan penjualan produk secara langsung',
                    'Menarik perhatian media untuk menambah eksposur merek',
                    'Menjalin hubungan baik dengan masyarakat dan meningkatkan citra perusahaan',
                    'Mengurangi biaya produksi produk',
                    'Meningkatkan loyalitas pelanggan jangka pendek'
                ],
                'correct_index' => 2,
                'answer_reason' => 'Program CSR bertujuan untuk meningkatkan reputasi dan citra perusahaan di mata publik dengan menunjukkan komitmen terhadap tanggung jawab sosial.'
            ],
            [
                'level' => 13,
                'question' => 'Mengapa penggunaan strategi berbasis nilai menjadi sangat penting dalam promosi produk?',
                'answers' => [
                    'Karena dapat meningkatkan volume penjualan tanpa mempengaruhi harga',
                    'Karena konsumen kini lebih cerdas dan mencari produk yang memiliki nilai lebih selain hanya harga murah',
                    'Karena memungkinkan perusahaan mengurangi biaya promosi',
                    'Karena hanya fokus pada kelebihan produk saja',
                    'Karena strategi ini mengurangi ketergantungan pada media sosial'
                ],
                'correct_index' => 1,
                'answer_reason' => 'Konsumen saat ini semakin memperhatikan nilai lebih yang ditawarkan suatu produk, seperti kualitas, keberlanjutan, dan manfaat sosial.'
            ],
            [
                'level' => 14,
                'question' => 'Dalam promosi produk, mengapa penting untuk melakukan evaluasi efektivitas promosi setelah kampanye selesai?',
                'answers' => [
                    'Untuk menentukan apakah kampanye menghasilkan keuntungan langsung',
                    'Untuk memastikan promosi tidak melanggar hukum',
                    'Untuk mengetahui apakah audiens merasa puas dengan kampanye promosi',
                    'Untuk mengidentifikasi area yang perlu perbaikan dan optimalisasi untuk kampanye mendatang',
                    'Untuk membandingkan kampanye dengan pesaing'
                ],
                'correct_index' => 3,
                'answer_reason' => 'Evaluasi memberikan wawasan untuk meningkatkan efektivitas kampanye promosi di masa depan, baik dalam hal strategi maupun eksekusi.'
            ],
            [
                'level' => 15,
                'question' => 'Ketika perusahaan memperoleh suatu teknologi, yang menjadi tantangan terbesar ketika perusahaan ingin memanfaatkan teknologi baru tersebut dalam promosi produk adalah:',
                'answers' => [
                    'Menetapkan anggaran yang tepat',
                    'Memastikan konten tetap menarik meskipun menggunakan teknologi baru',
                    'Menyelaraskan penggunaan teknologi baru dengan strategi promosi jangka panjang',
                    'Mengurangi ketergantungan pada metode promosi tradisional',
                    'Menarik perhatian media massa melalui teknologi baru'
                ],
                'correct_index' => 2,
                'answer_reason' => 'Teknologi baru harus disesuaikan dengan tujuan jangka panjang perusahaan dan tidak hanya digunakan untuk tren sementara yang mungkin tidak mendukung keberlanjutan strategi pemasaran.'
            ]
        ];


        foreach ($questions as $question) {
            $level = $question['level'];
            $questionText = $question['question'];
            $answers = $question['answers'];
            $correctAnswerIndex = $question['correct_index'];

            $questionStorage = Question::create([
                'level' => $level,
                'question' => $questionText,
                'answer_reason' => $question['answer_reason']
            ]);

            foreach ($answers as $index => $answer) {
                $questionStorage->answers()->create([
                    'answer' => $answer,
                    'is_correct' => $index === $correctAnswerIndex
                ]);
            }
        }
    }
}
