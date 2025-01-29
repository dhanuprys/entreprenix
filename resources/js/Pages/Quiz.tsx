import { AspectRatio } from '@/Components/ui/aspect-ratio';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import { Separator } from '@/Components/ui/separator';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/Components/ui/table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { cn } from '@/Lib/utils';
import { Head, router } from '@inertiajs/react';
import { LockIcon, PlayIcon, RedoIcon, UndoIcon } from 'lucide-react';
import { useCallback, useEffect, useMemo } from 'react';

export default function QuizPage({
    quizProgress,
    ranks,
}: {
    quizProgress: any;
    ranks: any;
}) {
    return (
        <AuthenticatedLayout withSafeWidth={false}>
            <Head title="Kuis" />

            <div className="space-y-10">
                <div className="mx-auto max-w-[60rem]">
                    <Card className="mx-4">
                        <CardHeader>
                            <h3 className="text-2xl font-semibold">Kuis</h3>
                        </CardHeader>
                        <CardContent className="grid grid-cols-5 items-center gap-4">
                            <div className="col-span-full space-y-4 md:col-span-3">
                                <h1 className="text-lg md:text-4xl">
                                    Uji Kemampuanmu dengan Menjawab Soal
                                </h1>
                                <p className="text-muted-foreground">
                                    Tantang dirimu dengan berbagai soal menarik
                                    yang akan mengasah kemampuanmu! Mulai
                                    perjalanan belajar yang seru dan penuh
                                    tantangan sekarang juga.
                                </p>
                                <Button size="lg">
                                    Mulai
                                    <PlayIcon />
                                </Button>
                            </div>
                            <img
                                src="/images/trophy.jpg"
                                className="object-fit col-span-2 hidden size-full md:block"
                            />
                        </CardContent>
                    </Card>
                </div>

                <div className="mx-auto max-w-[60rem] space-y-8 px-4">
                    <h3 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0 md:text-2xl">
                        Peringkat Kuis
                    </h3>
                    <div className="grid grid-cols-12">
                        <LeaderBoardChart ranks={ranks} />
                        <div className="col-span-8 hidden md:flex">
                            <Separator
                                orientation="vertical"
                                className="mx-6"
                            />
                            <LeaderBoardTable ranks={ranks} />
                        </div>
                    </div>
                </div>

                <div className="relative pb-20 pt-10">
                    <img
                        src="/images/bg.jpg"
                        className="-z-1 absolute left-0 top-0 h-full w-full translate-y-[10%] object-cover opacity-30"
                    />
                    <div className="mx-auto max-w-[60rem] px-4">
                        <h3 className="scroll-m-20 pb-14 text-xl font-semibold tracking-tight first:mt-0 md:text-2xl">
                            Mainkan Kuis
                        </h3>
                        <GameSteps
                            quizProgress={quizProgress}
                            className="pl-4 md:pl-0"
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function LeaderBoardChart({ ranks }: { ranks: any }) {
    const rank1 = useMemo(() => (ranks.length >= 1 ? ranks[0] : null), []);
    const rank2 = useMemo(() => (ranks.length >= 2 ? ranks[1] : null), []);
    const rank3 = useMemo(() => (ranks.length >= 3 ? ranks[2] : null), []);

    return (
        <div className="col-span-full grid grid-cols-3 gap-1 md:col-span-4">
            <LeaderBoardItem detail={rank3} rank={3} />
            <LeaderBoardItem detail={rank1} rank={1} />
            <LeaderBoardItem detail={rank2} rank={2} />
        </div>
    );
}

function LeaderBoardItem({
    rank,
    detail,
    className,
    ...props
}: { rank: number; detail: any } & React.HTMLAttributes<HTMLDivElement>) {
    const layoutAdjustment = useMemo(() => {
        const output = {
            chartHeight: 100,
            marginTop: 0,
        };

        switch (rank) {
            case 1:
                output.chartHeight = 200;
                output.marginTop = 0;
                break;
            case 2:
                output.chartHeight = 170;
                output.marginTop = 30;
                break;
            case 3:
                output.chartHeight = 140;
                output.marginTop = 60;
                break;
        }

        return output;
    }, []);

    return (
        <div
            {...props}
            className={cn(className)}
            style={{ marginTop: layoutAdjustment.marginTop }}
        >
            <div className="mb-4 flex justify-center">
                {detail ? (
                    <img
                        src="/images/thumbnails/example.jpg"
                        className="size-12 rounded-full object-cover"
                    />
                ) : (
                    <div className="size-12 bg-muted rounded-full flex justify-center items-center font-bold">?</div>
                )}
            </div>
            <div
                className="relative w-full rounded-b-2xl rounded-t-xl bg-blue-500"
                style={{ height: layoutAdjustment.chartHeight }}
            >
                <div className="absolute bottom-0 left-0 h-[65px] w-full translate-y-[5px] rounded-b-2xl bg-gradient-to-b from-blue-500 to-white"></div>
            </div>
            <div className="mt-1 flex justify-center">
                <p className="text-sm font-semibold">RANK {rank}</p>
            </div>
        </div>
    );
}

function LeaderBoardTable({ ranks }: { ranks: any }) {
    return (
        <Table>
            <TableHeader>
                <TableHead>RANK</TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Durasi</TableHead>
            </TableHeader>
            <TableBody>
                {ranks.map((rank: any, index: number) => (
                    <TableRow key={rank.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{rank.user.name}</TableCell>
                        <TableCell>{rank.current_level}/15</TableCell>
                        <TableCell>{rank.total_duration} detik</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

function GameSteps({
    quizProgress,
    className,
}: {
    quizProgress: any;
    className: string;
}) {
    return (
        <div className={cn(className, 'grid grid-cols-8 gap-4 md:mx-10')}>
            <StepItem current={quizProgress.current_level} step={1} />
            <StepSeparator flip={false} />
            <StepItem current={quizProgress.current_level} step={2} />
            <StepSeparator flip={true} />
            <StepItem current={quizProgress.current_level} step={3} />
            <StepSeparator flip={false} />
            <StepItem current={quizProgress.current_level} step={4} />
            <div></div>

            <div className="col-span-7"></div>
            <div>
                <RowStepSeparator flip={false} />
            </div>

            <StepItem current={quizProgress.current_level} step={8} />
            <LeftStepSeparator flip={false} />
            <StepItem current={quizProgress.current_level} step={7} />
            <LeftStepSeparator flip={true} />
            <StepItem current={quizProgress.current_level} step={6} />
            <LeftStepSeparator flip={false} />
            <StepItem current={quizProgress.current_level} step={5} />
            <div></div>

            <div>
                <RowStepSeparator flip={true} />
            </div>
            <div className="col-span-7"></div>

            <StepItem current={quizProgress.current_level} step={9} />
            <StepSeparator flip={true} />
            <StepItem current={quizProgress.current_level} step={10} />
            <StepSeparator flip={false} />
            <StepItem current={quizProgress.current_level} step={11} />
            <StepSeparator flip={true} />
            <StepItem current={quizProgress.current_level} step={12} />
            <div></div>

            <div className="col-span-7"></div>
            <div>
                <RowStepSeparator flip={false} />
            </div>

            <StepFinish />
            <LeftStepSeparator flip={true} />
            <StepItem current={quizProgress.current_level} step={15} />
            <LeftStepSeparator flip={false} />
            <StepItem current={quizProgress.current_level} step={14} />
            <LeftStepSeparator flip={true} />
            <StepItem current={quizProgress.current_level} step={13} />
            <div></div>
        </div>
    );
}

function StepItem({ step, current }: { step: number; current: number }) {
    const isLocked = useMemo(() => step > current, [current, step]);
    const answerQuestion = useCallback((level: number) => {
        router.visit(`/quiz/${level}`);
    }, []);

    return (
        <AspectRatio
            ratio={1 / 1}
            onClick={() => !isLocked && answerQuestion(step)}
            className={cn(
                'flex scale-150 items-center justify-center rounded-full border bg-muted ring-2 md:scale-100 md:ring-4',
                !isLocked && 'hover:cursor-pointer hover:bg-gray-300',
            )}
        >
            {isLocked ? (
                <div>
                    <LockIcon className="size-3 text-muted-foreground md:size-8" />
                </div>
            ) : (
                <h4 className="text-xs md:text-xl">{step}</h4>
            )}
        </AspectRatio>
    );
}

function StepFinish() {
    return (
        <AspectRatio
            ratio={1 / 1}
            className="flex scale-150 animate-pulse items-center justify-center rounded-full border bg-yellow-400 font-semibold text-white ring-2 md:scale-100 md:ring-4"
        >
            <h4 className="text-xs md:text-lg">FINISH</h4>
        </AspectRatio>
    );
}

function StepSeparator({ flip }: { flip: boolean }) {
    if (flip) {
        return (
            <AspectRatio ratio={1 / 1} className="">
                <RedoIcon className="size-full translate-y-[40%] -rotate-12 scale-y-[-1] text-orange-500" />
            </AspectRatio>
        );
    }

    return (
        <AspectRatio ratio={1 / 1} className="">
            <RedoIcon className="size-full -translate-y-[50%] rotate-12 text-orange-500" />
        </AspectRatio>
    );
}

function LeftStepSeparator({ flip }: { flip: boolean }) {
    if (flip) {
        return (
            <AspectRatio ratio={1 / 1} className="">
                <UndoIcon className="size-full translate-y-[40%] rotate-12 scale-y-[-1] text-orange-500" />
            </AspectRatio>
        );
    }

    return (
        <AspectRatio ratio={1 / 1} className="">
            <UndoIcon className="size-full -translate-y-[50%] -rotate-12 text-orange-500" />
        </AspectRatio>
    );
}

function RowStepSeparator({ flip }: { flip: boolean }) {
    if (flip) {
        return (
            <AspectRatio ratio={1 / 1} className="">
                <UndoIcon className="size-full -translate-x-[50%] -translate-y-[15%] -rotate-90 text-orange-500" />
            </AspectRatio>
        );
    }

    return (
        <AspectRatio ratio={1 / 1} className="">
            <RedoIcon className="size-full -translate-x-[20%] -translate-y-[20%] rotate-90 text-orange-500" />
        </AspectRatio>
    );
}
