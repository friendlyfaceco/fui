import type {Meta} from '@storybook/react';

import {Button} from '../Button';
import {Form} from '../form';
import {Description, FieldError, Input, Label, TextField} from './TextField';

const meta = {
    title: 'Example/TextField',
    component: TextField,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof TextField>;

export default meta;
export const BasicExample = () => {
    return (
        <TextField className="w-full sm:w-80" name="email" type="email">
            <Label>Email address</Label>
            <Input />
        </TextField>
    );
};

export const WithDescription = () => {
    return (
        <TextField name="email" type="email">
            <Label>Email address</Label>
            <Description>Enter an email for us to contact you about your order.</Description>
            <Input />
        </TextField>
    );
};

export const WithFollowingDescription = () => {
    return (
        <TextField name="email" type="email">
            <Label>Email address</Label>

            <Input />
            <Description>Enter an email for us to contact you about your order.</Description>
        </TextField>
    );
};

export const WithDisabled = () => {
    return (
        <TextField name="email" type="email" isDisabled>
            <Label>Email address</Label>
            <Description>Enter an email for us to contact you about your order.</Description>
            <Input placeholder="you@example.com" />
        </TextField>
    );
};

export const WithReadonly = () => {
    return (
        <TextField name="email" type="email" isReadOnly value="hello">
            <Label>Email address</Label>
            <Description>Enter an email for us to contact you about your order.</Description>
            <Input placeholder="you@example.com" />
        </TextField>
    );
};

export const WithValidation = () => {
    return (
        <Form>
            <TextField isRequired>
                <Label>Email address</Label>
                <Description>Enter an email for us to contact you about your order.</Description>
                <Input />
                <FieldError></FieldError>
            </TextField>
            <Button type="submit">Submit</Button>
        </Form>
    );
};
