import type {Meta} from '@storybook/react';

import {Available, Away, Busy, DoNotDisturb} from './Icon';
import {AccessibleIcon} from '../accessible-icon';

const meta = {
    title: 'Example/Icon',
    component: Available,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof Available>;

export default meta;

export const BasicExample = () => {
    return (
        <div className="flex gap-4">
            <AccessibleIcon aria-label="Available">
                <Available className="size-4" />
            </AccessibleIcon>
            <AccessibleIcon aria-label="Away">
                <Away className="size-4" />
            </AccessibleIcon>
            <AccessibleIcon aria-label="Do not disturb">
                <DoNotDisturb className="size-4" />
            </AccessibleIcon>
            <AccessibleIcon aria-label="Busy">
                <Busy className="size-4" />
            </AccessibleIcon>
        </div>
    );
};
