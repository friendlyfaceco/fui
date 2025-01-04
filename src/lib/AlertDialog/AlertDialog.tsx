import type {FC} from 'react';
import React from 'react';
import {twMerge} from 'tailwind-merge';
import type {DialogProps as RACDialogProps, ModalOverlayProps as RACModalOverlayProps} from 'react-aria-components';
import {ModalOverlay as RACModalOverlay, Modal as RACModal} from 'react-aria-components';
import {OverlayTriggerStateContext, Dialog as RACDialog} from 'react-aria-components';

import {XIcon} from '../icons';
import {composeTailwindRenderProps} from '../utils';
import {Button} from '../Button';
import type {ButtonWithoutAsChildProps} from '../Button/Button';
import type {HeadingProps} from '../Heading/Heading';
import {Heading} from '../Heading/Heading';

// This should be called Dialog COmponents because it defines styled RAC components for Dialogs
//Its also widely used in Dialog component
// <DialogHeader/>
// <DialogBody/>
// <DialogFooter/>
// <DialogCloseButton/>
// <DialogTitle/>
// <Modal/> (including Drawer)
//
//Questions:
//- Should we have a strict dedicated AlertDialog Component

export type Props = {
    /** Set initial value */
    initialValue?: number;
    finalvlaue?: number;
};
export type DialogProps = {
    alert?: boolean;
} & RACDialogProps;

export const AlertDialog: FC<DialogProps> = () => {
    return (
        <div>
            <h2>Delete file</h2>
            <button type="button">Increment by one</button>
            <div>
                Total value: <strong></strong>
            </div>
        </div>
    );
};

export function Dialog({role, alert = false, ...props}: DialogProps) {
    return (
        <RACDialog
            {...props}
            role={(role ?? alert) ? 'alertdialog' : 'dialog'}
            className={twMerge('relative flex max-h-[inherit] flex-col overflow-hidden outline-none', props.className)}
        />
    );
}

type DialogHeaderProps = HeadingProps;
export function DialogHeader({className, ...props}: DialogHeaderProps) {
    const headerRef = React.useRef<HTMLHeadingElement>(null);

    React.useEffect(() => {
        const header = headerRef.current;
        if (!header) {
            return;
        }

        const observer = new ResizeObserver(entries => {
            for (const entry of entries) {
                header.parentElement?.style.setProperty('--dialog-header-height', `${entry.target.clientHeight}px`);
            }
        });

        observer.observe(header);
        return () => {
            observer.unobserve(header);
        };
    }, []);

    return typeof props.children === 'string' ? (
        <DialogTitle {...props} ref={headerRef} className={twMerge('px-6 pb-2 pt-6 dark:text-white', className)} />
    ) : (
        <div
            ref={headerRef}
            className={twMerge('relative flex w-full items-center px-6 pb-2 pt-6 dark:text-white', className)}
            {...props}>
            {props.children}
        </div>
    );
}

export function DialogBody({className, children, ...props}: JSX.IntrinsicElements['div']) {
    return (
        <div
            {...props}
            className={twMerge(
                'flex max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding)-var(--dialog-header-height,0px)-var(--dialog-footer-height,0px))] flex-1 flex-col gap-2 dark:text-white overflow-auto px-6',
                className
            )}>
            {typeof children === 'string' ? <span>{children}</span> : children}
        </div>
    );
}

export function DialogFooter({className, ...props}: JSX.IntrinsicElements['div']) {
    const footerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const footer = footerRef.current;

        if (!footer) {
            return;
        }

        const observer = new ResizeObserver(entries => {
            for (const entry of entries) {
                footer.parentElement?.style.setProperty('--dialog-footer-height', `${entry.target.clientHeight}px`);
            }
        });

        observer.observe(footer);
        return () => {
            observer.unobserve(footer);
        };
    }, []);

    return (
        <div
            {...props}
            ref={footerRef}
            className={twMerge('mt-auto flex flex-col flex-col-reverse justify-end gap-3 p-6 sm:flex-row', className)}
        />
    );
}

export function DialogCloseButton({onPress, variant = 'plain', ...props}: ButtonWithoutAsChildProps) {
    const state = React.useContext(OverlayTriggerStateContext)!;

    if (props.children) {
        return (
            <Button
                {...props}
                variant={variant}
                onPress={e => {
                    state.close();
                    onPress?.(e);
                }}
            />
        );
    }

    const {className, size = 'lg', 'aria-label': ariaLabel, isIconOnly = true, ...restProps} = props;

    return (
        <Button
            {...restProps}
            isIconOnly={isIconOnly}
            variant={variant}
            size={size}
            className={composeTailwindRenderProps(className, [
                'absolute end-3 top-3 p-1.5 text-muted/75 hover:text-foreground',
            ])}
            onPress={e => {
                state.close();
                onPress?.(e);
            }}>
            <XIcon aria-label={ariaLabel ?? 'Close'} />
        </Button>
    );
}
export const DialogTitle = React.forwardRef<HTMLHeadingElement, DialogHeaderProps>(function DialogTitle(
    {level = 2, ...props},
    ref
) {
    return <Heading {...props} ref={ref} slot="title" level={level} />;
});

const sizes = {
    xs: 'sm:max-w-xs',
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-md',
    lg: 'sm:max-w-lg',
    xl: 'sm:max-w-xl',
    '2xl': 'sm:max-w-2xl',
    '3xl': 'sm:max-w-3xl',
    '4xl': 'sm:max-w-4xl',
    '5xl': 'sm:max-w-5xl',
    fullWidth: 'h-full w-full',
};
type ModalType =
    | {drawer?: never; keepCentered?: boolean}
    | {
          drawer: true;
          placement?: 'left' | 'right';
          keepCentered?: never;
      };

type ModalProps = Omit<RACModalOverlayProps, 'className'> & {
    size?: keyof typeof sizes;
    classNames?: {
        modalOverlay?: RACModalOverlayProps['className'];
        modal?: RACModalOverlayProps['className'];
    };
} & ModalType;

export function Modal({classNames, keepCentered = false, ...props}: ModalProps) {
    const drawer = props.drawer;
    const placement = props.drawer ? (props.placement ?? 'left') : undefined;

    React.useEffect(() => {
        document
            .querySelector<HTMLElement>(':root')
            ?.style.setProperty('--scrollbar-width', `${window.innerWidth - document.documentElement.clientWidth}px`);
    }, []);

    return (
        <RACModalOverlay
            {...props}
            className={composeTailwindRenderProps(classNames?.modalOverlay, [
                'fixed left-0 top-0 isolate z-20',
                'h-[--visual-viewport-height] w-full',
                'bg-zinc-950/40 dark:bg-zinc-950/50',
                'flex',
                'items-center',
                'text-center',

                'entering:animate-in',
                'entering:fade-in',
                'entering:duration-300',
                'entering:ease-out',

                'exiting:animate-out',
                'exiting:fade-out',
                'exiting:duration-200',
                'exiting:ease-in',

                drawer
                    ? ['p-2 [--visual-viewport-vertical-padding:16px]', '[&:has([data-replacement=right])]:justify-end']
                    : [
                          'justify-center',
                          'p-4',
                          '[--visual-viewport-vertical-padding:32px]',

                          !keepCentered && [
                              '[&:has([role=dialog])]:items-end',
                              '[&:has([role=dialog])]:pt-4',
                              '[&:has([role=dialog])]:px-0',
                              '[&:has([role=dialog])]:pb-0',
                              '[&:has([role=dialog])]:[--visual-viewport-vertical-padding:16px]',

                              'sm:[&:has([role=dialog])]:items-center',
                              'sm:[&:has([role=dialog])]:p-4',
                              'sm:[&:has([role=dialog])]:[--visual-viewport-vertical-padding:32px]',
                          ],
                      ],
            ])}>
            <RACModal
                {...props}
                data-replacement={placement}
                className={composeTailwindRenderProps(classNames?.modal, [
                    'max-h-full w-full overflow-hidden',
                    'text-left align-middle',
                    'shadow-lg',
                    'bg-white dark:bg-zinc-900',
                    'dark:ring-1 dark:ring-white/10',

                    props.size
                        ? sizes[props.size]
                        : 'sm:has-[[role=alertdialog]]:max-w-md sm:has-[[role=dialog]]:max-w-lg',

                    'entering:animate-in',
                    'entering:ease-out',
                    'entering:duration-200',
                    'exiting:animate-out',
                    'exiting:ease-in',
                    'exiting:duration-200',

                    drawer
                        ? [
                              'h-full',
                              'rounded-xl',
                              'data-[replacement=left]:entering:slide-in-from-left',
                              'data-[replacement=right]:entering:slide-in-from-right',
                              'data-[replacement=left]:exiting:slide-out-to-left',
                              'data-[replacement=right]:exiting:slide-out-to-right',
                          ]
                        : [
                              'rounded-xl',
                              'entering:zoom-in-95',
                              'exiting:zoom-out-95',

                              // handle layout shift when toggling scroll lock
                              props.size !== 'fullWidth' && 'sm:exiting:-me-[var(--scrollbar-width)]',
                              'sm:exiting:duration-0',

                              !keepCentered && [
                                  'has-[[role=dialog]]:rounded-t-xl ',
                                  'has-[[role=dialog]]:rounded-b-none',
                                  'sm:has-[[role=dialog]]:rounded-xl',

                                  'has-[[role=dialog]]:entering:zoom-in-100',
                                  'has-[[role=dialog]]:entering:slide-in-from-bottom',
                                  'sm:has-[[role=dialog]]:entering:zoom-in-95',
                                  'sm:has-[[role=dialog]]:entering:slide-in-from-bottom-0',

                                  'has-[[role=dialog]]:exiting:zoom-out-100',
                                  'has-[[role=dialog]]:exiting:slide-out-to-bottom',
                                  'sm:has-[[role=dialog]]:exiting:zoom-out-95',
                                  'sm:has-[[role=dialog]]:exiting:slide-out-to-bottom-0',
                              ],
                          ],
                ])}
            />
        </RACModalOverlay>
    );
}
