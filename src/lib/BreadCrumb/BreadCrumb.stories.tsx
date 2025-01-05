import type {Meta} from '@storybook/react';

import {BreadCrumb, Breadcrumbs} from './BreadCrumb';

const meta = {
    title: 'Example/BreadCrumb',
    component: BreadCrumb,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof BreadCrumb>;

export default meta;

export const BasicExample = () => {
    return (
        <Breadcrumbs>
            <BreadCrumb href="/">Home</BreadCrumb>
            <BreadCrumb href="/react-aria">React Aria</BreadCrumb>
            <BreadCrumb>Breadcrumbs</BreadCrumb>
        </Breadcrumbs>
    );
};
