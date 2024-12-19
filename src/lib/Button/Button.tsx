import React from 'react';
import type {ButtonProps as RACButtonProps, ToggleButtonProps as RACToggleButtonProps} from 'react-aria-components';
import {Button as RACButton, ToggleButton as RACToggleButton} from 'react-aria-components';
import {twMerge} from 'tailwind-merge';

import {composeTailwindRenderProps, focusVisibleOutlineStyle} from '../utils';
import type {AsChildProps} from '../slot';
import {Slot} from '../slot';
import {SpinnerIcon} from '../icons';

type Color = 'accent' | 'success' | 'destructive' | 'warning';

type Size = 'sm' | 'lg';

type Variant = 'solid' | 'outline' | 'plain' | 'unstyle';

export type BasicButtonProps = {
    color?: Color;
    size?: Size;
    isCustomPending?: boolean;
    isIconOnly?: boolean;
    pendingLabel?: string;
    variant?: Variant;
};

export type ButtonProps = AsChildProps<RACButtonProps> & BasicButtonProps;

export type ButtonWithoutAsChildProps = RACButtonProps & BasicButtonProps;

const buttonVariants = {
    base: [
        'group relative inline-flex gap-x-2 justify-center items-center',
        'font-semibold text-base/6 sm:text-sm/6 whitespace-nowrap outline-none rounded-lg',
    ],
    solid: [
        'border border-[var(--btn-bg)] dark:border-none dark:[--border-with:0px]',
        'bg-[var(--btn-bg)] hover:bg-[var(--btn-bg-hover)] pressed:bg-[var(--btn-bg-hover)]',
        'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
        'text-white',
    ],
    outline: [
        'border border-zinc-950/10 dark:border-white/15 border-b-zinc-950/15 dark:border-b-white/20',
        'hover:bg-zinc-50 pressed:bg-zinc-50 dark:hover:bg-zinc-800 dark:pressed:bg-zinc-800',
        'shadow-sm',
        'text-[var(--btn-color)]',
    ],
    plain: ['[--border-with:0px]', 'hover:bg-zinc-100 dark:hover:bg-zinc-800', 'text-[var(--btn-color)]'],
};

const buttonSizes = {
    sm: {
        button: [
            'h-8 sm:h-7 text-sm/6 sm:text-xs/6 rounded-md',
            'px-[calc(theme(spacing[3])-var(--border-with,1px))]',
            'sm:px-[calc(theme(spacing[2.5])-var(--border-with,1px))]',
            '[&_svg[data-ui=icon]:not([class*=size-])]:size-3',
        ],
        iconOnly: [
            'size-8 sm:size-7 rounded-md',
            '[&_svg[data-ui=icon]:not([class*=size-])]:size-5',
            'sm:[&_svg[data-ui=icon]:not([class*=size-])]:size-4',
        ],
    },
    md: {
        // H: 44px, sm:36px
        button: [
            'px-[calc(theme(spacing[3.5])-var(--border-with,1px))]',
            'sm:px-[calc(theme(spacing[3])-var(--border-with,1px))]',
            'py-[calc(theme(spacing[2.5])-var(--border-with,1px))]',
            'sm:py-[calc(theme(spacing[1.5])-var(--border-with,1px))]',

            '[&_svg[data-ui=icon]:not([class*=size-])]:size-5',
            'sm:[&_svg[data-ui=icon]:not([class*=size-])]:size-4',
        ],
        iconOnly: [
            'p-[calc(theme(spacing[2.5])-var(--border-with,1px))]',
            'sm:p-[calc(theme(spacing[1.5])-var(--border-with,1px))]',

            // 20+2x2=24px
            '[&_svg[data-ui=icon]:not([class*=size-])]:size-5',
            '[&_svg[data-ui=icon]]:m-0.5',

            // 16+4x2=24px
            'sm:[&_svg[data-ui=icon]:not([class*=size-])]:size-4',
            'sm:[&_svg[data-ui=icon]]:m-1',
        ],
    },
    lg: {
        button: [
            'px-[calc(theme(spacing[4])-var(--border-with,1px))]',
            'py-[calc(theme(spacing[2.5])-var(--border-with,1px))]',
            '[&_svg[data-ui=icon]:not([class*=size-])]:size-5',
        ],
        iconOnly: [
            'p-[calc(theme(spacing[2.5])-var(--border-with,1px))]',
            '[&_svg[data-ui=icon]:not([class*=size-])]:size-5',
            '[&_svg[data-ui=icon]]:m-0.5',
        ],
    },
};

function buttonStyle({size, color, isIconOnly, variant = 'solid'}: BasicButtonProps) {
    if (variant === 'unstyle') {
        return 'relative outline-none rounded-lg dark:text-white';
    }

    const buttonSize = size ?? 'md';
    const buttonType = isIconOnly ? 'iconOnly' : 'button';

    const buttonBackground = {
        accent: ['[--btn-bg:theme(colors.accent)]', '[--btn-bg-hover:theme(colors.accent/90%)]'],
        destructive: ['[--btn-bg:theme(colors.destructive)]', '[--btn-bg-hover:theme(colors.destructive/90%)]'],
        success: ['[--btn-bg:theme(colors.success)]', '[--btn-bg-hover:theme(colors.success/90%)]'],
        warning: ['[--btn-bg:theme(colors.warning)]', '[--btn-bg-hover:theme(colors.warning/90%)]'],
    };
    const buttonColor = {
        foreground: '[--btn-color:theme(colors.foreground)]',
        accent: '[--btn-color:theme(colors.accent)]',
        destructive: '[--btn-color:theme(colors.destructive)]',
        success: '[--btn-color:theme(colors.success)]',
        // foreground: '[--btn-color:--primary-color]',
        // accent: '[--btn-color:--secondary-color]',
        // destructive: '[--btn-color:--primary-color]',
        // success: '[--btn-color:--secondary-color]',
        // warning: '[--btn-color:--primary-color]',
    };

    const iconColor = [
        !isIconOnly && [
            variant === 'solid' && '[&:not(:hover)_svg[data-ui=icon]:not([class*=text-])]:text-zinc-300',
            variant === 'outline' && '[&:not(:hover)_svg[data-ui=icon]:not([class*=text-])]:text-muted',
        ],
    ];

    return [
        buttonVariants.base,
        buttonVariants[variant],
        variant == 'solid' ? [buttonBackground[color ?? 'accent']] : [buttonColor[color ?? 'foreground']],
        buttonSizes[buttonSize][buttonType],
        iconColor,
    ];
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
    if (props.asChild) {
        return <Slot className={twMerge(buttonStyle(props))}>{props.children}</Slot>;
    }

    const {
        asChild,
        children,
        isCustomPending,
        pendingLabel,
        size,
        color,
        variant = 'solid',
        isIconOnly,
        ...buttonProps
    } = props;

    return (
        <>
            <RACButton
                {...buttonProps}
                ref={ref}
                data-variant={variant}
                className={composeTailwindRenderProps(props.className, [
                    buttonStyle({size, color, isIconOnly, variant}),
                    focusVisibleOutlineStyle,
                    'disabled:opacity-50',
                    'data-[pending]:opacity-75',
                    !isCustomPending && 'data-[pending]:text-transparent',
                ])}>
                {renderProps => {
                    return (
                        <>
                            {renderProps.isPending ? (
                                <>
                                    <SpinnerIcon
                                        aria-label={pendingLabel}
                                        className={twMerge(
                                            'absolute',
                                            'text-foreground',
                                            'group-data-[variant=solid]:text-zinc-300',
                                            isCustomPending
                                                ? 'group-data-[pending]:sr-only'
                                                : 'group-data-[pending]:flex'
                                        )}
                                    />
                                    <span className="contents" {...(renderProps.isPending && {'aria-hidden': true})}>
                                        {typeof children === 'function' ? children(renderProps) : children}
                                    </span>
                                </>
                            ) : typeof children === 'function' ? (
                                children(renderProps)
                            ) : (
                                children
                            )}
                        </>
                    );
                }}
            </RACButton>
        </>
    );
});

export function ToggleButton(props: RACToggleButtonProps & BasicButtonProps) {
    return (
        <RACToggleButton
            {...props}
            className={composeTailwindRenderProps(props.className, [buttonStyle(props), focusVisibleOutlineStyle])}
        />
    );
}

export function ButtonGroup({
    className,
    inline,
    orientation = 'horizontal',
    ...props
}: JSX.IntrinsicElements['div'] & {
    inline?: boolean;
    orientation?: 'horizontal' | 'vertical';
}) {
    return (
        <div
            {...props}
            data-ui="button-group"
            className={twMerge(
                'group inline-flex w-max items-center',

                orientation === 'horizontal'
                    ? [
                          '[&>button:first-child]:rounded-e-none',
                          '[&>button:last-child]:rounded-s-none',
                          '[&>button:not(:last-child)]:border-e-0',
                          inline && 'shadow-sm [&>button:not(:first-child)]:border-s-0 [&>button]:shadow-none',
                      ]
                    : [
                          'flex-col',
                          '[&>button:first-child]:rounded-b-none',
                          '[&>button:last-child]:rounded-t-none',
                          '[&>button:not(:last-child)]:border-b-0',

                          inline && 'shadow-sm [&>button:not(:first-child)]:border-t-0 [&>button]:shadow-none',
                      ],

                '[&>button:not(:first-child):not(:last-child)]:rounded-none',

                // Add border to solid button which has not border in dark mode
                'dark:[&>button[data-variant=solid]]:border-solid',
                'dark:[&>button[data-variant=solid]]:[--border-with:1px]',
                '[&>button[data-variant=solid]:not(:first-child)]:border-s-black/15',
                className
            )}
        />
    );
}

// KNOWN PROBLEMS
// 1- Icons with icon occupy more height, even when height is exactly the same
//   - Temp Solution: Use Flex to align, this fixes the problem
// 2- Medium Size Buttons adapt to Large when aligned next to bigger buttons
//  - Temp Solution, dont use Big buttons nect to small buttons
