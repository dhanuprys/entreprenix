import { Alert, AlertDescription, AlertTitle } from '@/Components/ui/alert';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/Components/ui/card';
import { Label } from '@/Components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/Components/ui/radio-group';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { cn } from '@/Lib/utils';
import { Head, router, useForm } from '@inertiajs/react';
import { ChevronLeftIcon, ChevronRightIcon, FlagIcon } from 'lucide-react';
import { useCallback, useEffect, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import shuffleArray from 'shuffle-array';

export default function QuizAnswerPage({
    question,
    previousAnswer,
    quizProgress,
}: {
    question: any;
    previousAnswer: any;
    quizProgress: any;
}) {
    const form = useForm<{
        question_id: number;
        answer_id: string | null;
        duration: number;
    }>({
        question_id: question.id,
        answer_id: (previousAnswer && previousAnswer.answer_id) ?? null,
        duration: (previousAnswer && previousAnswer.duration) ?? 0,
    });

    useEffect(() => {
        if (previousAnswer) {
            return;
        }

        const interval = setInterval(() => {
            form.setData('duration', form.data.duration + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [form.data.duration]);

    const submit = useCallback(() => {
        form.post(`/quiz`);
    }, [form]);

    return (
        <AuthenticatedLayout>
            <Head title="Komunitas" />

            <div className="mx-4 space-y-8">
                <h2 className="scroll-m-20 text-3xl font-semibold first:mt-0">
                    {previousAnswer ? 'Jawaban anda' : 'Jawab soal!'}
                    <br />
                </h2>
                <div className="flex justify-between">
                    <Badge>level {question.level}</Badge>
                    <span className="font-semibold">
                        {previousAnswer && 'dijawab dalam '}
                        {form.data.duration} detik
                    </span>
                </div>
                <Card>
                    <CardHeader>
                        <p className="text-lg">
                            <ReactMarkdown>{question.question}</ReactMarkdown>
                        </p>
                    </CardHeader>
                    <CardContent>
                        <AnswerList
                            disabled={previousAnswer !== null}
                            defaultValue={String(form.data.answer_id)}
                            onChange={(answerId) =>
                                form.setData('answer_id', answerId)
                            }
                            answers={question.answers}
                        />
                    </CardContent>
                    <CardFooter>
                        {previousAnswer ? (
                            <Alert
                                className={cn(
                                    previousAnswer.is_correct
                                        ? 'bg-green-400'
                                        : 'bg-red-400',
                                )}
                            >
                                <AlertTitle>
                                    Jawaban Anda{' '}
                                    {previousAnswer.is_correct
                                        ? 'Benar'
                                        : 'Salah'}
                                    !
                                </AlertTitle>
                                <AlertDescription>
                                    {/* You can add components and dependencies to
                                    your app using the cli. */}
                                </AlertDescription>
                            </Alert>
                        ) : (
                            <Button
                                disabled={form.data.answer_id === null}
                                className="w-full"
                                onClick={submit}
                            >
                                Kirim
                            </Button>
                        )}
                    </CardFooter>
                </Card>
                <QuizNavigation
                    currentLevel={question.level}
                    quizProgress={quizProgress}
                />
            </div>
        </AuthenticatedLayout>
    );
}

function AnswerList({
    disabled,
    defaultValue,
    onChange,
    answers,
}: {
    disabled: boolean;
    defaultValue?: string;
    onChange: (answerId: string) => void;
    answers: any;
}) {
    const shuffledAnswers = useMemo(() => shuffleArray(answers), []);

    return (
        <div className="flex">
            <RadioGroup
                defaultValue={defaultValue}
                onValueChange={(answerId) => onChange(answerId)}
            >
                {shuffledAnswers.map((answer: any, index: number) => (
                    <div
                        key={answer.id}
                        className="flex items-center space-x-3"
                    >
                        <RadioGroupItem
                            value={String(answer.id)}
                            id={`option-${answer.id}`}
                            disabled={disabled}
                        />
                        <Label
                            className="text-base font-medium"
                            htmlFor={`option-${answer.id}`}
                        >
                            <ReactMarkdown>{answer.answer}</ReactMarkdown>
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
}

function QuizNavigation({
    quizProgress,
    currentLevel,
}: {
    quizProgress: any;
    currentLevel: number;
}) {
    const goToLevel = useCallback((level: number) => {
        router.visit(`/quiz/${level}`);
    }, []);

    return (
        <div className="flex justify-between">
            {currentLevel > 1 ? (
                <Button
                    variant="outline"
                    onClick={() => goToLevel(currentLevel - 1)}
                >
                    <ChevronLeftIcon />
                    Level {currentLevel - 1}
                </Button>
            ) : (
                <div></div>
            )}
            {currentLevel < 15 &&
            quizProgress.current_level >= currentLevel + 1 ? (
                <Button
                    variant="outline"
                    onClick={() => goToLevel(currentLevel + 1)}
                >
                    Level {currentLevel + 1}
                    <ChevronRightIcon />
                </Button>
            ) : (
                <div></div>
            )}
            {currentLevel >= 15 && (
                <Button>
                    SELESAI
                    <FlagIcon />
                </Button>
            )}
        </div>
    );
}
