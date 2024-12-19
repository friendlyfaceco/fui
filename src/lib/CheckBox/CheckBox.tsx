import type {ReactNode} from 'react';
import React from 'react';
import type {
    CheckboxGroupProps as RACCheckboxGroupProps,
    CheckboxProps as RACCheckboxProps,
} from 'react-aria-components';
import {Checkbox as RACCheckbox, CheckboxGroup as RACCheckboxGroup} from 'react-aria-components';
import {twMerge} from 'tailwind-merge';

import {composeTailwindRenderProps, groupBoxStyle, groupFocusVisibleOutlineStyle} from '../utils';
import {DescriptionContext, DescriptionProvider} from '../TextField/TextField';
import {CheckIcon, MinusIcon} from '../icons';

export type Props = {
    /** Set initial value */
    initialValue?: number;
};

export type CheckboxGroupProps = {
    children?: ReactNode;
    orientation?: 'vertical' | 'horizontal';
} & Omit<RACCheckboxGroupProps, 'children'>;
// export const CheckBox: FC<Props> = ({initialValue = 0}) => {
//     const {count, incrementCount} = useLogic(initialValue);

//     useEffect(() => {
//         const runner = throttle(() => {
//             console.log('throttle');
//         }, 10);
//         runner();
//     }, []);
//     return (
//         <div className={classes.checkBox}>
//             <h2 className={classes.header}>Counter</h2>
//             <button className={classes.button} type="button" onClick={incrementCount}>
//                 Increment by one
//             </button>
//             <div>
//                 Total value: <strong>{count}</strong>
//             </div>
//         </div>
//     );
// };

export function CheckboxGroup({orientation = 'vertical', ...props}: CheckboxGroupProps) {
    return (
        <RACCheckboxGroup
            {...props}
            data-orientation={orientation}
            className={composeTailwindRenderProps(props.className, groupBoxStyle)}
        />
    );
}
export function Checkboxes({className, ...props}: JSX.IntrinsicElements['div']) {
    return (
        <div
            data-ui="box"
            className={twMerge(
                'flex flex-col group-data-[orientation=horizontal]:flex-row group-data-[orientation=horizontal]:flex-wrap',
                '[&_label]:has-[[data-ui=description]]:font-medium',
                className
            )}
            {...props}
        />
    );
}

export function CheckboxField({className, ...props}: JSX.IntrinsicElements['div']) {
    return (
        <DescriptionProvider>
            <div
                {...props}
                data-ui="field"
                className={twMerge(
                    'group flex flex-col gap-y-1',
                    '[&_[data-ui=description]:not([class*=pe-])]:has-[label[data-position=left]]:pe-7',
                    '[&_[data-ui=description]:not([class*=ps-])]:has-[label[data-position=right]]:ps-7',
                    '[&_label]:has-[[data-ui=description]]:font-medium',
                    '[&_[data-ui=description]]:has-[label[data-disabled]]:opacity-50',
                    className
                )}
            />
        </DescriptionProvider>
    );
}

type CheckboxProps = {
    labelPosition?: 'left' | 'right';
    render?: never;
} & RACCheckboxProps;

export type CustomRenderCheckboxProps = {
    render: React.ReactElement | ((props: CheckboxProps) => React.ReactNode);
    children?: never;
} & Omit<RACCheckboxProps, 'children'>;

export function CheckBox({className, ...props}: CheckboxProps | CustomRenderCheckboxProps) {
    const descriptionContext = React.useContext(DescriptionContext);

    if (props.render) {
        const {render, ...restProps} = props;

        return (
            <RACCheckbox
                {...restProps}
                aria-describedby={descriptionContext?.['aria-describedby']}
                className={composeTailwindRenderProps(className, [
                    'group',
                    'text-base/6 sm:text-sm/6',
                    'disabled:opacity-50',
                ])}>
                {render}
            </RACCheckbox>
        );
    }

    const {labelPosition = 'right', ...restProps} = props;

    return (
        <RACCheckbox
            {...restProps}
            aria-describedby={descriptionContext?.['aria-describedby']}
            data-position={labelPosition}
            className={composeTailwindRenderProps(className, [
                'group flex items-center',
                'group-data-[orientation=horizontal]:text-nowrap',
                'data-[position=left]:flex-row-reverse',
                'data-[position=left]:justify-between',
                'text-base/6 sm:text-sm/6',
                'disabled:opacity-50',
                'dark:text-white',
            ])}>
            {renderProps => {
                return (
                    <>
                        <div
                            className={twMerge([
                                'flex shrink-0 items-center justify-center rounded shadow-sm',
                                labelPosition === 'right' ? 'me-3' : 'ms-3',
                                'size-[1.125rem] sm:size-4',
                                'border dark:border-[1.5px]',
                                'border-zinc-400/75 dark:border-zinc-600',

                                // readonly
                                'group-data-[readonly]:opacity-50',

                                // invalid
                                'group-invalid:border-destructive',
                                'group-invalid:dark:border-destructive',

                                // selected
                                'group-selected:border',
                                'group-selected:border-accent',
                                'group-selected:bg-accent',
                                'group-selected:dark:border-0',
                                'group-selected:dark:border-accent',
                                'group-selected:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',

                                // indeterminate
                                'group-indeterminate:border',
                                'group-indeterminate:border-accent',
                                'group-indeterminate:bg-accent',
                                'group-indeterminate:dark:border-0',
                                'group-indeterminate:dark:border-accent',
                                'group-indeterminate:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
                                groupFocusVisibleOutlineStyle,
                            ])}>
                            {renderProps.isIndeterminate ? (
                                <MinusIcon className="size-4 text-white sm:size-3.5" />
                            ) : renderProps.isSelected ? (
                                <CheckIcon className="size-4 text-white sm:size-3.5" />
                            ) : null}
                        </div>

                        {typeof props.children === 'function' ? props.children(renderProps) : props.children}
                    </>
                );
            }}
        </RACCheckbox>
    );
}
