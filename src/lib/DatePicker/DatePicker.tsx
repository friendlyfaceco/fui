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

//This file exports the following components:
// - DatePicker
// - DatePickerButton
// - DatePickerInput

export type DatePickerProps<T extends DateValue> = {} & RACDatePickerProps<T>;
export function DatePicker<T extends DateValue>(props: DatePickerProps<T>) {
    return <RACDatePicker {...props} className={composeTailwindRenderProps(props.className, inputFieldStyle)} />;
}
export type CalendarProps<T extends DateValue> = {
    errorMessage?: string;
} & Omit<RACCalendarProps<T>, 'visibleDuration'>;
export function Calendar<T extends DateValue>({errorMessage, ...props}: CalendarProps<T>) {
    return (
        <RACCalendar className="bg-[var(--surface)]" {...props}>
            <CalendarHeader />
            <CalendarGrid weekdayStyle="short">
                <CalendarGridHeader />
                <CalendarGridBody>
                    {date => (
                        <CalendarCell
                            date={date}
                            className={twMerge(
                                'flex size-9 cursor-default items-center justify-center rounded-lg text-sm outline-none text-[var(--on-surface-dimmed)]',
                                'hover:bg-[var(--surface-dimmed)]',
                                'pressed:bg-[var(--primary-dimmed)] pressed:text-[var(--on-accent)]',
                                'disabled:opacity-50',
                                'selected:border selected:border-accent selected:dark:border-0',
                                'selected:bg-[var(--accent)] selected:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
                                'selected:text-[var(--on-accent)]',
                                'selected:invalid:border-[var(--destructive)] selected:invalid:bg-[var(--destructive)] selected:invalid:text-[var(--on-destructive)]',
                                'unavailable:text-[var(--destructive)] unavailable:line-through unavailable:decoration-[var(--destructive)]',
                                focusVisibleOutlineStyle
                            )}
                        />
                    )}
                </CalendarGridBody>
            </CalendarGrid>
            {errorMessage && (
                <Text slot="errorMessage" className="text-sm text-[var(--destructive)]">
                    {errorMessage}
                </Text>
            )}
        </RACCalendar>
    );
}

export function CalendarHeader() {
    const {direction} = useLocale();

    return (
        <header className="flex w-full items-center gap-1 text-[var(--accent-dimmed)]">
            <Button
                slot="previous"
                variant="plain"
                isIconOnly
                aria-label="Previous"
                className="focus-visible:-outline-offset-2">
                {direction === 'rtl' ? (
                    <ChevronRightIcon className="text-[var(--on-surface-muted)] sm:size-5" />
                ) : (
                    <ChevronLeftIcon className="text-[var(--on-surface-muted)] sm:size-5" />
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
                    <ChevronLeftIcon className="text-[var(--on-surface-muted)] sm:size-5" />
                ) : (
                    <ChevronRightIcon className="text-[var(--on-surface-muted)] sm:size-5" />
                )}
            </Button>
        </header>
    );
}

export function CalendarGridHeader() {
    return (
        <RACCalendarGridHeader>
            {day => (
                <CalendarHeaderCell className="size-9 text-sm/6 font-normal text-[var(--on-surface-muted)]">
                    {day}
                </CalendarHeaderCell>
            )}
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
                    '[&:has([data-ui=date-segment][aria-readonly])]:bg-[var(--surface-muted)]',
                ].join(' ')}>
                <DateInput
                    {...props}
                    className={composeTailwindRenderProps(props.className, [
                        'col-span-full',
                        'row-start-1',
                        'sm:pe-9',
                        'pe-10',
                        '[&:has([data-ui=date-segment][aria-readonly])]:bg-transparent',
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

            <Popover
                className={[
                    'max-w-none rounded-xl border-2 border-[var(--border)]',
                    'bg-[var(--surface)]',
                    'border-success',
                    'ring-[var(--surface-muted)]',
                ].join(' ')}
                placement="bottom">
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
                        <span className="text-[var(--on-surface-muted)]">{children}</span>
                    ) : (
                        <span className="text-sm">{formattedDate}</span>
                    )}

                    <CalendarIcon />
                </Button>

                <DateInput className="hidden" aria-hidden />
            </Group>

            <Popover
                className={[
                    'max-w-none rounded-xl border-2 border-[var(--border)]',
                    'bg-[var(--surface)]',
                    'border-success',
                    'ring-[var(--surface-muted)]',
                ].join(' ')}
                placement="bottom">
                <Dialog className="overflow-auto p-3">
                    <Calendar />
                </Dialog>
            </Popover>
        </>
    );
}
