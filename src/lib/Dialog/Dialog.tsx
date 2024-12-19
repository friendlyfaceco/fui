import type {DialogProps as RACDialogProps} from 'react-aria-components';
import {Dialog as RACDialog} from 'react-aria-components';
import {twMerge} from 'tailwind-merge';

export type DialogProps = {
    alert?: boolean;
} & RACDialogProps;

export function Dialog({role, alert = false, ...props}: DialogProps) {
    return (
        <RACDialog
            {...props}
            role={(role ?? alert) ? 'alertdialog' : 'dialog'}
            className={twMerge('relative flex max-h-[inherit] flex-col overflow-hidden outline-none', props.className)}
        />
    );
}
