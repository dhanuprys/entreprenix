'use client';

import {
    addDays,
    addMonths,
    endOfMonth,
    endOfWeek,
    format,
    isSameDay,
    isSameMonth,
    startOfMonth,
    startOfWeek,
    subMonths,
} from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/Components/ui/button';

export interface DateCellProps {
    date: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
    isSelected: boolean;
    onSelect: (date: Date) => void;
}

interface CalendarProps {
    renderDateCell?: (props: DateCellProps) => React.ReactNode;
    onCellClick?: (date: Date) => void;
}

export function Calendar({ renderDateCell, onCellClick }: CalendarProps) {
    const [currentDate, setCurrentDate] = React.useState<Date>(new Date());
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

    const startDate = startOfWeek(startOfMonth(currentDate));
    const endDate = endOfWeek(endOfMonth(currentDate));

    const days: Date[] = [];
    let day = startDate;

    while (day <= endDate) {
        days.push(day);
        day = addDays(day, 1);
    }

    const weekDays = ['Min', 'Sen', 'Sel', 'Rabu', 'Kam', 'Jmt', 'Sbt'];

    const goToPreviousMonth = () => setCurrentDate(subMonths(currentDate, 1));
    const goToNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
        if (onCellClick) {
            onCellClick(date);
        }
    };

    return (
        <div className="w-full">
            <div className="mb-4 flex items-center justify-between">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={goToPreviousMonth}
                >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Previous month</span>
                </Button>
                <h2 className="text-lg font-semibold">
                    {format(currentDate, 'MMMM yyyy')}
                </h2>
                <Button variant="outline" size="icon" onClick={goToNextMonth}>
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Next month</span>
                </Button>
            </div>
            <div className="grid grid-cols-7 gap-1">
                {weekDays.map((weekDay) => (
                    <div
                        key={weekDay}
                        className="py-2 text-center text-sm font-medium"
                    >
                        {weekDay}
                    </div>
                ))}
                {days.map((date) => {
                    const isCurrentMonth = isSameMonth(date, currentDate);
                    const isToday = isSameDay(date, new Date());
                    const isSelected = selectedDate
                        ? isSameDay(date, selectedDate)
                        : false;

                    return (
                        <div
                            key={date.toISOString()}
                            className={`p-2 ${
                                isCurrentMonth
                                    ? 'bg-background'
                                    : 'bg-muted text-muted-foreground'
                            } ${isToday ? 'border border-primary' : ''} ${
                                isSelected
                                    ? 'bg-primary text-primary-foreground'
                                    : ''
                            }`}
                        >
                            {renderDateCell ? (
                                renderDateCell({
                                    date,
                                    isCurrentMonth,
                                    isToday,
                                    isSelected,
                                    onSelect: () => handleDateSelect(date),
                                })
                            ) : (
                                <button
                                    className="flex h-full w-full items-center justify-center"
                                    onClick={() => handleDateSelect(date)}
                                >
                                    <span className="text-sm">
                                        {format(date, 'd')}
                                    </span>
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
