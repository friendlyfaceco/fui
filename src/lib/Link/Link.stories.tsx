import type {Meta} from '@storybook/react';
import {MessageCircle, Phone, Video} from 'lucide-react';

import {Avatar} from '../Avatar';
import {Link} from './Link';
import {AccessibleIcon} from '../accessible-icon';
import {Button} from '../Button';
import {NotificationBadge} from '../NotificationBadge';

const meta = {
    title: 'Example/Link',
    component: Link,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof Link>;

export default meta;
export const BasicExample = () => {
    return <Link>React Aria Component Link</Link>;
};
export const WithIcons = () => {
    return (
        <Link href="https://react-spectrum.adobe.com/react-aria/routing.html" target="_blank">
            React Aria Component Link
            <AccessibleIcon>
                <ExternalLink className="size-4" />
            </AccessibleIcon>
        </Link>
    );
};
function ExternalLink(props: JSX.IntrinsicElements['svg']) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
        </svg>
    );
}

export function NavLinks() {
    return (
        <nav className="flex w-16 flex-col gap-4 rounded border border-border p-3">
            <Link className="group flex-col p-2 hover:no-underline" aria-label="Chat - 6 new messages">
                <AccessibleIcon>
                    <MessageCircle size={20} className="transition group-hover:scale-110" />
                </AccessibleIcon>
                <NotificationBadge count={6} />
                <span className="text-xs" aria-hidden="true">
                    Chat
                </span>
            </Link>
            <Link aria-label="Calls - new calls" className="group flex-col p-2 hover:no-underline">
                <AccessibleIcon>
                    <Phone size={20} className="transition group-hover:scale-110" />
                </AccessibleIcon>

                <NotificationBadge show />
                <span className="text-xs" aria-hidden="true">
                    Calls
                </span>
            </Link>
            <Link aria-label="Meet - 9 new meet alerts" className="group flex-col p-2 hover:no-underline">
                <AccessibleIcon>
                    <Video size={20} className="transition group-hover:scale-110" />
                </AccessibleIcon>

                <NotificationBadge count={20} />
                <span className="text-xs" aria-hidden="true">
                    Meet
                </span>
            </Link>
        </nav>
    );
}
export const AvatarLinks = () => {
    return (
        <Link>
            <Avatar alt="Jane Doe" />
        </Link>
    );
};

AvatarLinks.parameters = {
    docs: {
        description: {
            story: 'Use the `Avatar` component to render avatar inside a link:',
        },
    },
};

export const DisabledLinks = () => {
    return (
        <Link isDisabled href="https://react-spectrum.adobe.com/react-aria/routing.html" target="_blank">
            React Aria Component Link
        </Link>
    );
};

export const AsChild = () => {
    return (
        <Link asChild>
            <Button variant="unstyle">Edit Profile</Button>
        </Link>
    );
};

AsChild.parameters = {
    docs: {
        description: {
            story: 'Use the `asChild` prop to render other react components like <a href="https://reactrouter.com/en/main/components/link" target="_blank">`Router router Link`</a>.',
        },
    },
};
