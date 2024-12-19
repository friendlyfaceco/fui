import type {Meta} from '@storybook/react';

import {Skeleton} from './Skeleton';

const meta = {
    title: 'Example/Skeleton',
    component: Skeleton,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof Skeleton>;

export default meta;
export const Example = () => {
    return (
        <div className="flex flex-col space-y-8">
            {Array.from(Array(4)).map((_, index) => {
                return (
                    <div key={index} className="flex items-center space-x-2">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-2 w-[100px]" />
                            <Skeleton className="h-2 w-[250px]" />
                            <Skeleton className="h-2 w-[220px]" />
                            <Skeleton className="h-2 w-[180px]" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
