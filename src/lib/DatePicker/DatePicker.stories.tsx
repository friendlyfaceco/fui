import type {Meta} from '@storybook/react';
import {useLocale} from 'react-aria-components';
import {today, getLocalTimeZone, isWeekend, parseDate} from '@internationalized/date';

import {DatePicker, DatePickerButton, DatePickerInput} from './DatePicker';
import {Description, FieldError} from '../TextField/TextField';
import {Button} from '../Button';
import {Form} from '../form';
import {Label} from '../TextField/TextField';

const meta = {
    title: 'Example/DatePicker',
    component: DatePicker,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof DatePicker>;

export default meta;

export const BasicExample = () => {
    return (
        <DatePicker>
            <Label>Event date</Label>
            <DatePickerInput></DatePickerInput>
        </DatePicker>
    );
};

export const WithDescription = () => {
    return (
        <DatePicker>
            <Label>Event date</Label>
            <Description>Please enter the event date</Description>
            <DatePickerInput></DatePickerInput>
        </DatePicker>
    );
};
export const WithDescriptionHiddenTitle = () => {
    return (
        <DatePicker>
            <Label>Event date</Label>
            <DatePickerInput></DatePickerInput>
            <Description>Please enter the event date</Description>
        </DatePicker>
    );
};

export const WithDisabled = () => {
    return (
        <DatePicker isDisabled>
            <Label>Event date</Label>
            <Description>Please enter the event date</Description>
            <DatePickerInput></DatePickerInput>
        </DatePicker>
    );
};

export const WithMinimumAndMaximumValues = () => {
    return (
        <DatePicker
            minValue={today(getLocalTimeZone())}
            defaultValue={parseDate(today(getLocalTimeZone()).subtract({days: 1}).toString())}>
            <Label>Stay duration</Label>
            <DatePickerInput />
        </DatePicker>
    );
};

export const WithUnavailableDates = () => {
    const now = today(getLocalTimeZone());
    const disabledRanges = [
        [now, now.add({days: 5})],
        [now.add({days: 14}), now.add({days: 16})],
        [now.add({days: 23}), now.add({days: 24})],
    ];

    const {locale} = useLocale();
    const isDateUnavailable = (date: any) =>
        isWeekend(date, locale) ||
        disabledRanges.some(interval => date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0);

    return (
        <DatePicker
            minValue={today(getLocalTimeZone())}
            isDateUnavailable={isDateUnavailable}
            validationBehavior="native">
            <Label>Stay duration</Label>
            <DatePickerInput />
        </DatePicker>
    );
};

export const WithReadonly = () => {
    return (
        <DatePicker isReadOnly>
            <Label>Event date</Label>
            <Description>Please enter the event date</Description>
            <DatePickerInput></DatePickerInput>
        </DatePicker>
    );
};

export const WithValidation = () => (
    <Form>
        <DatePicker isRequired>
            <Label>Event date</Label>
            <Description>Please enter the event date</Description>
            <DatePickerInput></DatePickerInput>
            <FieldError />
        </DatePicker>
        <Button type="submit" variant="outline">
            Submit
        </Button>
    </Form>
);

export const WithDatePickerButtons = () => {
    return (
        <DatePicker defaultValue={today(getLocalTimeZone())}>
            <Label>Event date</Label>
            <Description>Please pick the event date</Description>
            <DatePickerButton>Select date</DatePickerButton>
            <FieldError />
        </DatePicker>
    );
};
