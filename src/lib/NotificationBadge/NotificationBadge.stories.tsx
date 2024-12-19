import type {Meta} from '@storybook/react';
import {Link, MessageCircle} from 'lucide-react';
import {Button} from 'react-aria-components';

import {NotificationBadge} from './NotificationBadge';
import {AccessibleIcon} from '../accessible-icon';

const meta = {
    title: 'Example/NotificationBadge',
    component: NotificationBadge,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof NotificationBadge>;

export default meta;

export const WithDotNotifications = () => {
    return (
        <Link className="relative p-2" aria-label="New message">
            <AccessibleIcon>
                <MessageCircle />
            </AccessibleIcon>
            <NotificationBadge count={10} />
        </Link>
    );
};

export const WithNumberNotifications = () => {
    return (
        <div className="flex gap-4">
            <Button aria-label="Chat - 6 new messages">
                <AccessibleIcon>
                    <MessageCircle />
                </AccessibleIcon>
                <NotificationBadge className="relative" count={10} />
            </Button>
        </div>
    );
};
WithNumberNotifications.parameters = {
    docs: {
        description: {
            story: 'Use the `count` prop to render counts.',
        },
    },
};
