import type {Meta} from '@storybook/react';

import {GridList, GridListItem} from './GridList';

const meta = {
    title: 'Example/GridList',
    component: GridList,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof GridList>;

export default meta;
export const BasicExample = () => {
    return (
        <GridList aria-label="Ice cream flavors" selectionMode="multiple">
            <GridListItem id="chocolate">Chocolate</GridListItem>
            <GridListItem id="mint">Mint</GridListItem>
            <GridListItem id="strawberry">Strawberry</GridListItem>
            <GridListItem id="vanilla">Vanilla</GridListItem>
        </GridList>
    );
};
