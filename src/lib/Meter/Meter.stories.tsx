import type {Meta} from '@storybook/react';

import {Meter} from './Meter';

const meta = {
    title: 'Example/Meter',
    component: Meter,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof Meter>;

export default meta;
export const BasicExample = () => {
    return (
        <div className="flex flex-col gap-4">
            <Meter label="Storage space" value={20} />
            <Meter label="Storage space" value={80} />
            <Meter label="Storage space" value={70} />
        </div>
    );
};
export const PositiveMeter = () => {
    return (
        <div className="flex flex-col gap-4">
            <Meter label="Progress" value={25} valueLabel="1 of 4" positive />
            <Meter label="Progress" value={75} valueLabel="3 of 4" positive />
        </div>
    );
};

export const InformativeMeter = () => {
    return <Meter label="Space used" value={25} informative />;
};
