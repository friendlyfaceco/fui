import React from 'react';
import type {Meta} from '@storybook/react';
import {DialogTrigger} from 'react-aria-components';

import {AlertDialog, Dialog, DialogBody, DialogCloseButton, DialogFooter, DialogHeader, Modal} from './AlertDialog';
import {Button} from '../Button';
const meta = {
    title: 'Example/AlertDialog',
    component: AlertDialog,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof AlertDialog>;

export default meta;

export const BasicExample = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <Button color="destructive" onPress={() => setIsOpen(true)}>
                Revoke access
            </Button>
            <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
                <Dialog alert>
                    <DialogHeader>Revoke access</DialogHeader>
                    <DialogBody>
                        Are you sure? This application will no longer be accessible and any existing sessions will be
                        expired.
                    </DialogBody>
                    <DialogFooter>
                        <DialogCloseButton>Cancel</DialogCloseButton>
                        <Button color="destructive" onPress={() => setIsOpen(false)}>
                            Revoke access
                        </Button>
                    </DialogFooter>
                </Dialog>
            </Modal>
        </>
    );
};

export const WhenToUseAlertDialogs = () => {
    return (
        <DialogTrigger>
            <Button>About</Button>
            <Modal>
                <Dialog>
                    <DialogHeader>About</DialogHeader>
                    <DialogBody>Copyright © 2023 Adobe. All rights reserved.</DialogBody>
                    <DialogFooter>
                        <DialogCloseButton>OK</DialogCloseButton>
                    </DialogFooter>
                </Dialog>
            </Modal>
        </DialogTrigger>
    );
};
WhenToUseAlertDialogs.parameters = {
    docs: {
        description: {
            story: 'Alert dialogs are interruptive, so they\'re best for displaying important information that users need to acknowledge before moving forward with a task or workflow. Use them only when absolutely necessary. Use <a href="./?path=/docs/dialog--docs" target="_blank">`Dialog`</a> for low-signal notifications or excessive confirmations.',
        },
    },
};
