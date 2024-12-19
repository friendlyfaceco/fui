import type {
    DateFieldProps as RACDateFieldProps,
    DateValue,
    DateInputProps as RACDateInputProps,
} from 'react-aria-components';
import {
    DateField as RACDateField,
    DateInput as RACDateInput,
    DateSegment,
    composeRenderProps,
} from 'react-aria-components';
import {twMerge} from 'tailwind-merge';

import {composeTailwindRenderProps, focusWithinRingStyle, inputFieldStyle} from '../utils';

export type DateFieldProps<T extends DateValue> = {} & RACDateFieldProps<T>;

export function DateField<T extends DateValue>(props: DateFieldProps<T>) {
    return (
        <RACDateField
            {...props}
            className={composeRenderProps(props.className, (className, {isDisabled}) => {
                return twMerge(inputFieldStyle, isDisabled && '[&>:not(input)]:opacity-50', className);
            })}
        />
    );
}

export type DateInputProps = Omit<RACDateInputProps, 'children'>;

export function DateInput(props: DateInputProps) {
    return (
        <RACDateInput
            {...props}
            data-ui="control"
            className={composeTailwindRenderProps(props.className, [
                'group flex w-full items-center rounded-lg border bg-transparent shadow-sm',
                'invalid:border-destructive',
                '[&:has([data-disabled=true])]:opacity-50',
                '[&:has([data-ui=date-segment][aria-readonly])]:bg-zinc-800/5',
                'dark:[&:has([data-ui=date-segment][aria-readonly])]:bg-white/10',
                'block min-w-[150px]',
                'text-base/6 sm:text-sm/6',
                'px-2.5',
                'py-[calc(theme(spacing[2.5])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]',
                focusWithinRingStyle,
                'ring-offset-0',
                'dark:text-white',
            ])}>
            {segment => (
                <DateSegment
                    data-ui="date-segment"
                    segment={segment}
                    className={twMerge(
                        'inline rounded px-0.5 caret-transparent outline-0 type-literal:px-0',
                        'data-[placeholder]:italic data-[placeholder]:text-muted',
                        'focus:bg-accent focus:text-white focus:data-[placeholder]:text-white'
                    )}
                />
            )}
        </RACDateInput>
    );
}
