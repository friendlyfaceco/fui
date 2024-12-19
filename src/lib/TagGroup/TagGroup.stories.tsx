import type {Meta} from '@storybook/react';

import {Label} from '../TextField/TextField';
import {Tag, TagGroup, TagList} from './TagGroup';

const meta = {
    title: 'Example/TagGroup',
    component: TagGroup,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof TagGroup>;

export default meta;
export const Example = (args: any) => {
    return (
        <TagGroup
            {...args}
            defaultSelectedKeys={['strawberry']}
            selectionMode="single"
            onRemove={() => {
                //
            }}
            className="dark:text-white">
            <Label>Ice cream flavor</Label>
            <TagList>
                <Tag isDisabled id="chocolate">
                    Chocolate
                </Tag>
                <Tag id="mint">Mint</Tag>
                <Tag id="strawberry">Strawberry</Tag>
                <Tag id="vanilla">Vanilla</Tag>
            </TagList>
        </TagGroup>
    );
};
