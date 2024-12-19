import type {Meta} from '@storybook/react';

import {DateInput} from '../DateField/DateField';
import {Button} from '../Button';
import {TimeField} from './TimeField';
import {Description} from '../TextField/TextField';
import {Label, FieldError} from '../TextField/TextField';
import {Form} from '../form';

const meta = {
    title: 'Example/TimeField',
    component: TimeField,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof TimeField>;

export default meta;
export const BasicExample = () => {
    return (
        <TimeField>
            <Label>Appointment time</Label>
            <DateInput />
        </TimeField>
    );
};

export const WithDescription = () => {
    return (
        <TimeField>
            <Label>Appointment time</Label>
            <Description>The specific time scheduled for your meeting</Description>
            <DateInput />
        </TimeField>
    );
};

export const WithDescriptionHiddenTitle = () => {
    return (
        <TimeField>
            <Label>Appointment time</Label>
            <DateInput />
            <Description>The specific time scheduled for your meeting</Description>
        </TimeField>
    );
};

export const WithDisabled = () => {
    return (
        <TimeField isDisabled>
            <Label>Appointment time</Label>
            <DateInput />
            <Description>The specific time scheduled for your meeting</Description>
        </TimeField>
    );
};

export const WithReadonly = () => {
    return (
        <TimeField isReadOnly>
            <Label>Appointment time</Label>
            <DateInput />
            <Description>The specific time scheduled for your meeting</Description>
        </TimeField>
    );
};

export const WithValidation = () => (
    <Form>
        <TimeField isRequired>
            <Label>Appointment time</Label>
            <Description>The specific time scheduled for your meeting</Description>
            <DateInput />
            <FieldError></FieldError>
        </TimeField>
        <Button type="submit">Submit</Button>
    </Form>
);
