import type {Meta} from '@storybook/react';
import React from 'react';
import {useListData} from 'react-stately';

import {Label, FieldError} from '../TextField/TextField';
import {Button} from '../Button';
import {Form} from '../form';
import {TagInput, TagsInputField} from './TagInput';
import {Description} from '../TextField/TextField';

const meta = {
    title: 'Example/TagInput',
    component: TagInput,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof TagInput>;

export default meta;
export const Example = () => {
    const list = useListData({
        initialItems: [{id: 1, name: 'React'}],
    });

    const [isInvalid, setIsInvalid] = React.useState(false);

    return (
        <Form
            onSubmit={e => {
                if (list.items.length === 0) {
                    setIsInvalid(true);

                    e.preventDefault();
                    return;
                }

                setIsInvalid(false);
            }}>
            <TagsInputField
                className="w-full sm:w-72"
                name="framework"
                list={list}
                onTagAdd={() => {
                    setIsInvalid(false);
                }}
                isInvalid={isInvalid}>
                <Label>Frameworks</Label>
                <Description>Add Framework</Description>
                <TagInput />
                <FieldError>Please fill out this field.</FieldError>
            </TagsInputField>
            <Button type="submit">Save</Button>
        </Form>
    );
};
