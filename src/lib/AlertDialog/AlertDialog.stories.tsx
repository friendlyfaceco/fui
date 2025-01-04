import React from 'react';
import type {Meta} from '@storybook/react';
import {DialogTrigger} from 'react-aria-components';

import {Dialog, DialogBody, DialogCloseButton, DialogFooter, DialogHeader, Modal} from './AlertDialog';
import {Button} from '../Button';
const meta = {
    title: 'Component/Dialog',
    component: Dialog,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof Dialog>;

export default meta;

export const BasicExample = () => {
    return (
        <>
            <Dialog alert>
                <DialogHeader>Dialog Header</DialogHeader>
                <DialogBody>
                    Dialog Body: Are you sure? This application will no longer be accessible and any existing sessions
                    will be expired.
                </DialogBody>
                <DialogFooter>
                    <DialogCloseButton>Cancel</DialogCloseButton>
                    <Button> Cancel</Button>
                    <Button color="destructive"> Revoke access</Button>
                </DialogFooter>
            </Dialog>
        </>
    );
};

export const OnPressExample = () => {
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

export const TriggerExample = () => {
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
TriggerExample.parameters = {
    docs: {
        description: {
            story: 'Alert dialogs are interruptive, so they\'re best for displaying important information that users need to acknowledge before moving forward with a task or workflow. Use them only when absolutely necessary. Use <a href="./?path=/docs/dialog--docs" target="_blank">`Dialog`</a> for low-signal notifications or excessive confirmations.',
        },
    },
};

export const CustomContentExample = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const CustomContent = () => {
        return (
            <div className="">
                <h2 className="">This is some custom modal</h2>

                <DialogCloseButton>Cancel</DialogCloseButton>
                <DialogCloseButton variant="solid" color="success">
                    Go
                </DialogCloseButton>
            </div>
        );
    };

    return (
        <>
            <Button color="warning" onPress={() => setIsOpen(true)}>
                Custom Content
            </Button>
            <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
                <CustomContent />
            </Modal>
        </>
    );
};
