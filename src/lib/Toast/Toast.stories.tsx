import type {Meta} from '@storybook/react';

import {GlobalToastRegion, Toast} from './Toast';
import {Button} from '../Button';
import {toast} from './ToastQueue';

const meta = {
    title: 'Example/Toast',
    component: Toast,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as Meta<typeof Toast>;

export default meta;
export const BasicExample = () => {
    return (
        <div className="flex flex-col items-center gap-4 p-12">
            <Button
                variant="outline"
                onPress={() => {
                    toast.add({
                        title: 'Templates unavailable',
                        description: 'Issue template and forms are current unavailable. Please try again later.',
                    });
                }}>
                Default
            </Button>

            <Button
                variant="outline"
                onPress={() => {
                    toast.add({
                        description: 'Issue template and forms are current unavailable. Please try again later.',
                    });
                }}>
                Description only
            </Button>

            <Button
                variant="outline"
                onPress={() => {
                    toast.add({
                        type: 'error',
                        title: 'Templates unavailable',
                        description: 'Issue template and forms are current unavailable. Please try again later.',
                    });
                }}>
                Error
            </Button>

            <Button
                variant="outline"
                onPress={() => {
                    toast.add({
                        type: 'warning',
                        title: 'Templates unavailable',
                        description: 'Issue template and forms are current unavailable. Please try again later.',
                    });
                }}>
                Warning
            </Button>

            <Button
                variant="outline"
                onPress={() => {
                    toast.add({
                        title: 'Payment details saved',
                        description: 'Your payment details have been save successfully.',
                        type: 'success',
                    });
                }}>
                Success
            </Button>

            <GlobalToastRegion aria-label="notification" />
        </div>
    );
};
