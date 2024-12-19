import type {Meta} from '@storybook/react';

import {PasswordInput} from './PasswordInput';
import {Description, FieldError, Label, TextField} from '../TextField/TextField';
import {Button} from '../Button';
import {Form} from '../form';

const meta = {
    title: 'Example/PasswordInput',
    component: PasswordInput,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof PasswordInput>;

export default meta;

export const BasicExample = () => {
    return (
        <TextField name="password">
            <Label>Password</Label>
            <PasswordInput placeholder="Password" />
        </TextField>
    );
};
export const WithDescription = () => {
    return (
        <TextField name="password">
            <Label>Password</Label>
            <Description>Min 8 characters</Description>
            <PasswordInput placeholder="Password" minLength={8} />
        </TextField>
    );
};

export const WithDescriptionHiddenTitle = () => {
    return (
        <TextField name="password" className="max-w-sm">
            <Label>Password</Label>
            <PasswordInput placeholder="Password" minLength={8} />
            <Description>
                Must be at least 8 characters long, include an uppercase letter, a number, and a special character.
            </Description>
        </TextField>
    );
};

export const WithDisabled = () => {
    return (
        <TextField name="password" isDisabled>
            <Label>Password</Label>
            <PasswordInput placeholder="Password" minLength={8} />
            <Description>Min 8 characters</Description>
        </TextField>
    );
};

export const WithReadonly = () => {
    return (
        <TextField name="password" isReadOnly>
            <Label>Password</Label>
            <PasswordInput placeholder="Password" minLength={8} />
            <Description>Min 8 characters</Description>
        </TextField>
    );
};

export const WithValidation = () => {
    return (
        <Form className="w-72 ">
            <TextField isRequired name="password">
                <Label>Password</Label>
                <PasswordInput placeholder="Password" minLength={8} />
                <Description>Min 8 characters</Description>
                <FieldError />
            </TextField>

            <Button type="submit">Submit</Button>
        </Form>
    );
};
