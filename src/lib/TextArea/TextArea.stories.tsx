import type {Meta} from '@storybook/react';

import {Form} from '../form';
import {Button} from '../Button';
import {Description, FieldError, Label, TextArea, TextField} from '../TextField/TextField';

const meta = {
    title: 'Component/TextArea',
    component: TextArea,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof TextArea>;

export default meta;
export const BasicExample = () => {
    return (
        <TextField className="sm:w-80">
            <Label>Bio</Label>
            <TextArea placeholder="Tell us a little bit about yourself" />
            <FieldError />
        </TextField>
    );
};

export const WithDescription = () => {
    return (
        <TextField>
            <Label>Bio</Label>
            <Description>This text area can handle longer texts like your story.</Description>
            <TextArea placeholder="Tell us a little bit about yourself" />
        </TextField>
    );
};

export const WithDescriptionHidden = () => {
    return (
        <TextField>
            <Label>Bio</Label>
            <TextArea placeholder="Tell us a little bit about yourself" />
            <Description>This text area can handle longer texts like your story.</Description>
        </TextField>
    );
};

export const WithDisabled = () => {
    return (
        <TextField isDisabled>
            <Label>Bio</Label>
            <Description>This text area can handle longer texts like your story.</Description>
            <TextArea placeholder="Tell us a little bit about yourself" />
        </TextField>
    );
};

export const WithReadonly = () => {
    return (
        <TextField isReadOnly>
            <Label>Bio</Label>
            <Description>This text area can handle longer texts like your story.</Description>
            <TextArea placeholder="Tell us a little bit about yourself" />
        </TextField>
    );
};

export const WithErrorMessage = () => {
    return (
        <Form>
            <TextField isRequired>
                <Label>Bio</Label>
                <Description>This text area can handle longer texts like your story.</Description>
                <TextArea placeholder="Tell us a little bit about yourself" />
                <FieldError />
            </TextField>
            <Button type="submit">Submit</Button>
        </Form>
    );
};
