import type {
    DatePickerProps as RACDatePickerProps,
    DateValue,
    DateInputProps,
    CalendarProps as RACCalendarProps,
} from 'react-aria-components';
import {
    DatePicker as RACDatePicker,
    DatePickerStateContext,
    useLocale,
    Group,
    Dialog,
    Popover,
    CalendarGrid,
    CalendarGridBody,
    Calendar as RACCalendar,
    CalendarGridHeader as RACCalendarGridHeader,
    CalendarCell,
    CalendarHeaderCell,
    Heading,
} from 'react-aria-components';
import React from 'react';
import {twMerge} from 'tailwind-merge';

import {composeTailwindRenderProps, focusVisibleOutlineStyle, inputFieldStyle} from '../utils';
import {CalendarIcon, ChevronLeftIcon, ChevronRightIcon} from '../icons';
import {DateInput} from '../DateField/DateField';
import {Button} from '../Button';
import {Text} from '../Text/Text';

export type DatePickerProps<T extends DateValue> = {} & RACDatePickerProps<T>;
export function DatePicker<T extends DateValue>(props: DatePickerProps<T>) {
    return <RACDatePicker {...props} className={composeTailwindRenderProps(props.className, inputFieldStyle)} />;
}
export type CalendarProps<T extends DateValue> = {
    errorMessage?: string;
} & Omit<RACCalendarProps<T>, 'visibleDuration'>;
export function Calendar<T extends DateValue>({errorMessage, ...props}: CalendarProps<T>) {
    return (
        <RACCalendar className="bg-white" {...props}>
            <CalendarHeader />
            <CalendarGrid weekdayStyle="short">
                <CalendarGridHeader />
                <CalendarGridBody>
                    {date => (
                        <CalendarCell
                            date={date}
                            className={twMerge(
                                'flex size-9 cursor-default items-center justify-center rounded-lg text-sm outline-none',
                                'hover:bg-zinc-100 dark:hover:bg-zinc-700',
                                'pressed:bg-accent/90 pressed:text-white',
                                'disabled:opacity-50',
                                'selected:border selected:border-accent selected:dark:border-0',
                                'selected:bg-accent selected:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
                                'selected:text-white',
                                'selected:invalid:border-destructive selected:invalid:bg-destructive selected:invalid:text-white',
                                'unavailable:text-destructive unavailable:line-through unavailable:decoration-destructive',
                                focusVisibleOutlineStyle
                            )}
                        />
                    )}
                </CalendarGridBody>
            </CalendarGrid>
            {errorMessage && (
                <Text slot="errorMessage" className="text-sm text-destructive">
                    {errorMessage}
                </Text>
            )}
        </RACCalendar>
    );
}

export function CalendarHeader() {
    const {direction} = useLocale();

    return (
        <header className="flex w-full items-center gap-1">
            <Button
                slot="previous"
                variant="plain"
                isIconOnly
                aria-label="Previous"
                className="focus-visible:-outline-offset-2">
                {direction === 'rtl' ? (
                    <ChevronRightIcon className="text-muted sm:size-5" />
                ) : (
                    <ChevronLeftIcon className="text-muted sm:size-5" />
                )}
            </Button>

            <Heading className="mx-2 flex-1 text-center text-sm/6" level={2} aria-hidden />

            <Button
                slot="next"
                variant="plain"
                isIconOnly
                aria-label="Next"
                className="focus-visible:-outline-offset-2">
                {direction === 'rtl' ? (
                    <ChevronLeftIcon className="text-muted sm:size-5" />
                ) : (
                    <ChevronRightIcon className="text-muted sm:size-5" />
                )}
            </Button>
        </header>
    );
}

export function CalendarGridHeader() {
    return (
        <RACCalendarGridHeader>
            {day => <CalendarHeaderCell className="size-9 text-sm/6 font-normal text-muted">{day}</CalendarHeaderCell>}
        </RACCalendarGridHeader>
    );
}

export function DatePickerInput(props: DateInputProps) {
    return (
        <>
            <Group
                data-ui="control"
                {...props}
                className={[
                    'grid w-auto min-w-52',
                    'grid-cols-[1fr_calc(theme(size.5)+20px)]',
                    'sm:grid-cols-[1fr_calc(theme(size.4)+20px)]',
                ].join(' ')}>
                <DateInput
                    {...props}
                    className={composeTailwindRenderProps(props.className, [
                        'col-span-full',
                        'row-start-1',
                        'sm:pe-9',
                        'pe-10',
                    ])}
                />
                <Button
                    variant="plain"
                    size="sm"
                    isIconOnly
                    data-ui="trigger"
                    className={[
                        'focus-visible:-outline-offset-1',
                        'row-start-1',
                        '-col-end-1',
                        'place-self-center',
                    ].join(' ')}>
                    <CalendarIcon />
                </Button>
            </Group>

            <Popover className={['max-w-none', 'dark:bg-zinc-800', 'dark:ring-zinc-700'].join(' ')} placement="bottom">
                <Dialog className="overflow-auto p-3">
                    <Calendar />
                </Dialog>
            </Popover>
        </>
    );
}

export function DatePickerButton({className, children}: {className?: string; children?: React.ReactNode}) {
    const {locale} = useLocale();
    const state = React.useContext(DatePickerStateContext);
    const formattedDate = state.formatValue(locale, {});

    return (
        <>
            <Group data-ui="control">
                <Button
                    className={twMerge('text w-full min-w-52 flex-1 justify-between px-2.5 font-normal', className)}
                    variant="outline">
                    {formattedDate === '' ? (
                        <span className="text-muted">{children}</span>
                    ) : (
                        <span className="text-sm">{formattedDate}</span>
                    )}

                    <CalendarIcon />
                </Button>

                <DateInput className="hidden" aria-hidden />
            </Group>

            <Popover className={['max-w-none', 'dark:bg-zinc-800', 'dark:ring-zinc-700'].join(' ')} placement="bottom">
                <Dialog className="overflow-auto p-3">
                    <Calendar />
                </Dialog>
            </Popover>
        </>
    );
}
