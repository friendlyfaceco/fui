import type {TimeFieldProps as RACTimeFieldProps, TimeValue} from 'react-aria-components';
import {TimeField as RACTimeField, composeRenderProps} from 'react-aria-components';
import {twMerge} from 'tailwind-merge';

import {inputFieldStyle} from '../utils';

export type TimeFieldProps<T extends TimeValue> = {} & RACTimeFieldProps<T>;

export function TimeField<T extends TimeValue>(props: RACTimeFieldProps<T>) {
    return (
        <RACTimeField
            {...props}
            className={composeRenderProps(props.className, (className, {isDisabled}) => {
                return twMerge(
                    inputFieldStyle,
                    'items-start',
                    // RAC does not set disable to time field when it is disable
                    // So we have to style disable state for none input
                    isDisabled && '[&>:not(input)]:opacity-50',
                    className
                );
            })}
        />
    );
}
