import React from 'react';
import type {
    RadioGroupProps as RACRadioGroupProps,
    RadioProps as RACRadioProps,
    RadioRenderProps,
} from 'react-aria-components';
import {Radio as RACRadio, RadioGroup as RACRadioGroup} from 'react-aria-components';
import {twMerge} from 'tailwind-merge';

import {DescriptionContext, DescriptionProvider} from '../TextField/TextField';
import {composeTailwindRenderProps, groupBoxStyle, groupFocusVisibleOutlineStyle} from '../utils';

export function RadioGroup({...props}: RACRadioGroupProps) {
    return <RACRadioGroup {...props} className={composeTailwindRenderProps(props.className, groupBoxStyle)} />;
}

export function Radios({className, ...props}: JSX.IntrinsicElements['div']) {
    return (
        <div
            data-ui="box"
            className={twMerge(
                'flex',
                'flex-col',
                'group-aria-[orientation=horizontal]:flex-row',
                'group-aria-[orientation=horizontal]:flex-wrap',
                // When any radio item has description, apply all `font-medium` to all radio item labels
                '[&_label]:has-[[data-ui=description]]:font-medium',
                className
            )}
            {...props}
        />
    );
}

export function RadioField({className, ...props}: JSX.IntrinsicElements['div']) {
    return (
        <DescriptionProvider>
            <div
                {...props}
                data-ui="field"
                className={twMerge(
                    'group flex flex-col gap-y-1',
                    '[&_label]:has-[[data-position=left]]:justify-between',
                    '[&_[data-ui=description]:not([class*=pe-])]:has-[label[data-position=left]]:pe-7',
                    '[&_[data-ui=description]:not([class*=ps-])]:has-[label[data-position=right]]:ps-7',
                    '[&_[data-ui=description]]:has-[label[data-disabled]]:opacity-50',
                    className
                )}
            />
        </DescriptionProvider>
    );
}

export type RadioProps = {
    labelPosition?: 'left' | 'right';
    render?: never;
} & RACRadioProps;

export type CustomRenderRadioProps = {
    render: React.ReactElement | ((props: RadioRenderProps) => React.ReactNode);
    children?: never;
} & Omit<RACRadioProps, 'children'>;

export function Radio({className, ...props}: RadioProps | CustomRenderRadioProps) {
    const descriptionContext = React.useContext(DescriptionContext);

    if (props.render) {
        const {render, ...restProps} = props;

        return (
            <RACRadio
                {...restProps}
                aria-describedby={descriptionContext?.['aria-describedby']}
                className={composeTailwindRenderProps(className, [
                    'group',
                    'text-base/6 sm:text-sm/6',
                    'disabled:opacity-50',
                    'dark:text-white',
                ])}>
                {render}
            </RACRadio>
        );
    }

    const {labelPosition = 'right', ...restProps} = props;

    return (
        <RACRadio
            {...restProps}
            aria-describedby={descriptionContext?.['aria-describedby']}
            data-position={labelPosition}
            className={composeTailwindRenderProps(className, [
                'group flex items-center',
                'group-aria-[orientation=horizontal]:text-nowrap',
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
                            slot="radio"
                            className={twMerge(
                                'grid size-[1.0625rem] shrink-0 place-content-center rounded-full shadow-sm',
                                labelPosition === 'right' ? 'me-3' : 'ms-3',
                                'border',
                                'border-zinc-400/75',
                                'dark:border-zinc-600',

                                // readonly
                                'group-data-[readonly]:opacity-50',

                                // invalid
                                'group-invalid:border-destructive',
                                'group-invalid:dark:border-destructive',

                                // selected
                                'group-selected:dark:border-0',
                                'group-selected:border-accent',
                                'group-selected:bg-accent',
                                'group-selected:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
                                groupFocusVisibleOutlineStyle
                            )}>
                            <div className="rounded-full group-selected:size-1.5 group-selected:bg-white"></div>
                        </div>

                        {typeof props.children === 'function' ? props.children(renderProps) : props.children}
                    </>
                );
            }}
        </RACRadio>
    );
}
