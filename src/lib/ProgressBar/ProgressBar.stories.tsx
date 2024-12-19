import type {Meta} from '@storybook/react';

import {ProgressBar} from './ProgressBar';

const meta = {
    title: 'Example/ProgressBar',
    component: ProgressBar,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof ProgressBar>;

export default meta;

export const BasicExample = () => {
    return <ProgressBar label="loading" value={80} />;
};

export const Indeterminate = () => {
    return <ProgressBar label="loading" value={80} isIndeterminate />;
};
