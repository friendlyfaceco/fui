import type {
    DateRangePickerProps as AriaDateRangePickerProps,
    DateValue,
    RangeCalendarProps as RACRangeCalendarProps,
} from 'react-aria-components';
import {
    DateRangePicker as AriaDateRangePicker,
    DateRangePickerStateContext,
    useLocale,
    Group,
    Dialog,
    Popover,
} from 'react-aria-components';
import {
    RangeCalendar as RACRangeCalendar,
    CalendarCell,
    CalendarGrid,
    CalendarGridBody,
    Text,
} from 'react-aria-components';
import React from 'react';
import {twMerge} from 'tailwind-merge';

import {
    composeTailwindRenderProps,
    focusWithinRingStyle,
    groupFocusVisibleOutlineStyle,
    inputFieldStyle,
} from '../utils';
import {CalendarIcon} from '../icons';
import {Button} from '../Button';
import {DateInput} from '../DateField/DateField';
import {CalendarGridHeader, CalendarHeader} from '../DatePicker/DatePicker';

export type DateRangePickerProps<T extends DateValue> = {} & AriaDateRangePickerProps<T>;

export function DateRangePicker<T extends DateValue>({...props}: DateRangePickerProps<T>) {
    return <AriaDateRangePicker {...props} className={composeTailwindRenderProps(props.className, inputFieldStyle)} />;
}

export function DateRangePickerInput() {
    const {locale} = useLocale();
    const state = React.useContext(DateRangePickerStateContext);
    const formattedValue = state.formatValue(locale, {});

    return (
        <>
            <Group
                data-ui="control"
                className={twMerge(
                    '[&:has([aria-valuetext=Empty]:) w-full',
                    'grid grid-cols-[max-content_16px_max-content_1fr] items-center',
                    'group relative rounded-lg border bg-inherit shadow-sm',
                    'group-invalid:border-destructive',
                    '[&:has(_input[data-disabled=true])]:border-border/50',
                    '[&:has([data-ui=date-segment][aria-readonly])]:bg-[var(--surface-muted)]',
                    formattedValue ? 'min-w-60' : 'min-w-[278px]',
                    focusWithinRingStyle
                )}>
                <DateInput
                    slot="start"
                    className={[
                        'flex min-w-fit border-none shadow-none focus-within:ring-0',
                        '[&:has([data-ui=date-segment][aria-readonly])]:bg-transparent',
                    ].join(' ')}
                />
                <span
                    aria-hidden="true"
                    className="place-self-center text-[var(--on-surface-muted)] group-disabled:opacity-50">
                    –
                </span>
                <DateInput
                    slot="end"
                    className={[
                        'flex min-w-fit flex-1 border-none opacity-100 shadow-none focus-within:ring-0',
                        '[&:has([data-ui=date-segment][aria-readonly])]:bg-transparent',
                    ].join(' ')}
                />
                <Button
                    variant="plain"
                    isIconOnly
                    size="sm"
                    className="me-1 justify-self-end focus-visible:-outline-offset-1">
                    <CalendarIcon />
                </Button>
            </Group>
            <Popover
                className={[
                    'max-w-none rounded-xl border-2 border-[var(--border)]',
                    'bg-[var(--surface)]',
                    'ring-[var(--surface-muted)]',
                ].join(' ')}
                placement="bottom">
                <Dialog className="overflow-auto p-3">
                    <RangeCalendar />
                </Dialog>
            </Popover>
        </>
    );
}
export type RangeCalendarProps<T extends DateValue> = {
    errorMessage?: string;
} & Omit<RACRangeCalendarProps<T>, 'visibleDuration'>;

export function RangeCalendar<T extends DateValue>({errorMessage, ...props}: RangeCalendarProps<T>) {
    return (
        <RACRangeCalendar className="bg-[var(--surface)]" {...props}>
            <CalendarHeader />
            <CalendarGrid className="[&_td]:px-0" weekdayStyle="short">
                <CalendarGridHeader />
                <CalendarGridBody className="before:block before:w-full before:leading-[0.25rem] before:opacity-0 before:content-['.']">
                    {date => (
                        <CalendarCell
                            date={date}
                            className={[
                                'group size-9 cursor-default text-sm outline-none text-[var(--on-surface-dimmed)]',
                                'selected:bg-[var(--accent)]',
                                'invalid:selected:bg-[var(--destructive-dimmed)]',
                                'selection-start:rounded-s-lg',
                                'selection-end:rounded-e-lg',
                                '[td:first-child_&]:rounded-s-lg [td:last-child_&]:rounded-e-lg',
                            ].join(' ')}>
                            {({formattedDate}) => (
                                <span
                                    //START HERE
                                    className={twMerge(
                                        'flex size-[calc(theme(size.9)-1px)] items-center justify-center',
                                        'group-hover:rounded-lg',
                                        'group-hover:bg-zinc-100',
                                        'group-hover:bg-[var(--accent-muted)]',
                                        'group-hover:text-[var(--on-accent)]',
                                        'group-pressedr:bg-[var(--accent)]',

                                        // selected
                                        'group-selected:group-hover:bg-[var(--accent)]',
                                        'group-selected:group-hover:text-[var(--on-accent)]',
                                        'group-selected:group-pressed:bg-[var(--primary)]',
                                        'group-selected:group-pressed:text-[var(--on-primary)]',

                                        // disabled
                                        'group-disabled:opacity-50',

                                        // unavailable
                                        'group-unavailable:text-[var(--destructive)]',
                                        'group-unavailable:decoration-[var(--destructive)]',
                                        'group-unavailable:line-through',

                                        // selection start
                                        'group-selected:group-selection-start:border',
                                        'group-selected:group-selection-start:dark:border-0',
                                        'group-selected:group-selection-start:border-[var(--accent)]',
                                        'group-selected:group-selection-start:rounded-lg',
                                        'group-selected:group-selection-start:bg-[var(--accent)]',
                                        'group-selected:group-selection-start:text-[var(--on-accent)]',
                                        'group-selected:group-selection-start:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
                                        'group-selected:group-selection-start:group-hover:bg-[var(--accent-dimmed)]',
                                        'group-selected:group-selection-start:group-invalid:border-[var(--destructive)]',
                                        'group-selected:group-selection-start:group-invalid:bg-[var(--destructive)]',
                                        'group-selected:group-selection-start:group-invalid:text-[var(--on-destructive)]',

                                        // selection end
                                        'group-selected:group-selection-start:border',
                                        'group-selected:group-selection-start:dark:border-0',
                                        'group-selected:group-selection-start:border-[var(--accent)]',
                                        'group-selected:group-selection-start:rounded-lg',
                                        'group-selected:group-selection-start:bg-[var(--accent)]',
                                        'group-selected:group-selection-start:text-[var(--on-accent)]',
                                        'group-selected:group-selection-start:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
                                        'group-selected:group-selection-start:group-hover:bg-[var(--accent-dimmed)]',
                                        'group-selected:group-selection-start:group-invalid:border-[var(--destructive)]',
                                        'group-selected:group-selection-start:group-invalid:bg-[var(--destructive)]',
                                        'group-selected:group-selection-start:group-invalid:text-[var(--on-destructive)]',

                                        groupFocusVisibleOutlineStyle,
                                        'group-focus-visible:rounded-lg'
                                    )}>
                                    {formattedDate}
                                </span>
                            )}
                        </CalendarCell>
                    )}
                </CalendarGridBody>
            </CalendarGrid>
            {errorMessage && (
                <Text slot="errorMessage" className="text-sm text-[var(--destructive)]">
                    {errorMessage}
                </Text>
            )}
        </RACRangeCalendar>
    );
}

export function DateRangePickerButton({className, children}: {className?: string; children?: React.ReactNode}) {
    const {locale} = useLocale();
    const state = React.useContext(DateRangePickerStateContext);
    const formattedValue = state.formatValue(locale, {});

    return (
        <>
            <Group data-ui="control">
                <Button variant="outline" className={twMerge('w-full min-w-64 px-0 font-normal', className)}>
                    <div
                        className={twMerge(
                            'grid w-full items-center',
                            formattedValue ? 'grid grid-cols-[1fr_16px_1fr_36px]' : 'grid-cols-[1fr_36px]'
                        )}>
                        {formattedValue ? (
                            <>
                                <span className="min-w-fit px-2.5 text-base/6 sm:text-sm/6">
                                    {formattedValue.start}
                                </span>
                                <span
                                    aria-hidden="true"
                                    className="place-self-center text-[var(--on-surface-muted)] group-disabled:opacity-50">
                                    –
                                </span>
                                <span className="min-w-fit px-2.5 text-base/6 sm:text-sm/6">{formattedValue.end}</span>
                            </>
                        ) : (
                            <span className="justify-self-start px-2.5 text-[var(--on-surface-muted)]">{children}</span>
                        )}

                        <CalendarIcon className="place-self-center" />
                    </div>
                </Button>

                <DateInput slot="start" aria-hidden className="hidden" />
                <DateInput slot="end" aria-hidden className="hidden" />
            </Group>
            <Popover
                className={[
                    'max-w-none rounded-xl border-2 border-[var(--border)]',
                    'bg-[var(--surface)]',
                    'ring-[var(--surface-muted)]',
                ].join(' ')}
                placement="bottom">
                <Dialog className="overflow-auto p-3">
                    <RangeCalendar />
                </Dialog>
            </Popover>
        </>
    );
}
