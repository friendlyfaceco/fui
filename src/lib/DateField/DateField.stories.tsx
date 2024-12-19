import type {Meta} from '@storybook/react';

import {Button} from '../Button';
import {Form} from '../form';
import {DateField, DateInput} from './DateField';
import {Description, FieldError, Label} from '../TextField/TextField';

const meta = {
    title: 'Example/DateField',
    component: DateField,
    parameters: {
        layout: 'centered',
    },
} as Meta<typeof DateField>;

export default meta;

export const BasicExample = () => {
    return (
        <DateField>
            <Label>Birth date</Label>
            <DateInput />
        </DateField>
    );
};

export const WithDescription = () => {
    return (
        <DateField>
            <Label>Birth date</Label>
            <Description>Please enter your birth date</Description>
            <DateInput />
        </DateField>
    );
};
export const WithDescriptionHidden = () => {
    return (
        <DateField>
            <Label>Birth date</Label>
            <DateInput />
            <Description>Please enter your birth date</Description>
        </DateField>
    );
};

export const WithDisabled = () => {
    return (
        <DateField isDisabled>
            <Label>Birth date</Label>
            <Description>Please enter your birth date</Description>
            <DateInput />
        </DateField>
    );
};
export const WithReadonly = () => {
    return (
        <DateField isReadOnly>
            <Label>Birth date</Label>
            <Description>Please enter your birth date</Description>
            <DateInput />
        </DateField>
    );
};
export const WithValidation = () => (
    <Form className="flex flex-col items-start gap-2">
        <DateField isRequired>
            <Label>Birth date</Label>
            <Description>Please enter your birth date</Description>
            <DateInput />
            <FieldError />
        </DateField>
        <Button type="submit">Submit</Button>
    </Form>
);
