import type {Meta} from '@storybook/react';
import {today, getLocalTimeZone, isWeekend, parseDate} from '@internationalized/date';
import {useLocale} from 'react-aria';

import {DateRangePicker, DateRangePickerButton, DateRangePickerInput} from './DateRangePicker';
import {Description, FieldError, Label} from '../TextField/TextField';
import {Form} from '../form';
import {Button} from '../Button';

const meta = {
    title: 'Example/DateRangePicker',
    component: DateRangePicker,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof DateRangePicker>;

export default meta;

export const BasicExample = () => {
    return (
        <DateRangePicker>
            <Label>Stay duration</Label>
            <DateRangePickerInput />
        </DateRangePicker>
    );
};
export const WithDescription = () => {
    return (
        <DateRangePicker>
            <Label>Stay duration</Label>
            <Description>Please enter your stay duration</Description>
            <DateRangePickerInput />
        </DateRangePicker>
    );
};
export const WithDescriptionHiddenTitle = () => {
    return (
        <DateRangePicker>
            <Label>Stay duration</Label>
            <DateRangePickerInput />
            <Description>Please enter your stay duration</Description>
        </DateRangePicker>
    );
};
export const Validation = () => {
    return (
        <Form className="flex flex-col items-start gap-2">
            <DateRangePicker isRequired>
                <Label>Stay duration</Label>
                <Description>Please enter your stay duration</Description>
                <DateRangePickerInput />
                <FieldError />
            </DateRangePicker>
            <Button type="submit">Submit</Button>
        </Form>
    );
};
export const WithMinimumAndMaximumValues = () => {
    return (
        <DateRangePicker
            minValue={today(getLocalTimeZone())}
            defaultValue={{
                start: parseDate(today(getLocalTimeZone()).subtract({days: 3}).toString()),
                end: parseDate(today(getLocalTimeZone()).subtract({days: 1}).toString()),
            }}>
            <Label>Stay duration</Label>
            <DateRangePickerInput />
        </DateRangePicker>
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
        <DateRangePicker
            minValue={today(getLocalTimeZone())}
            isDateUnavailable={isDateUnavailable}
            validationBehavior="native">
            <Label>Stay duration</Label>
            <DateRangePickerInput />
        </DateRangePicker>
    );
};

export const WithNonContiguousRange = () => {
    const {locale} = useLocale();
    return (
        <DateRangePicker isDateUnavailable={date => isWeekend(date, locale)} allowsNonContiguousRanges>
            <Label>Stay duration</Label>
            <DateRangePickerInput />
        </DateRangePicker>
    );
};
export const WithDisable = () => {
    return (
        <DateRangePicker isDisabled>
            <Label>Stay duration</Label>
            <Description>Please enter your stay duration</Description>
            <DateRangePickerInput />
        </DateRangePicker>
    );
};
export const WithReadonly = () => {
    return (
        <DateRangePicker isReadOnly>
            <Label>Stay duration</Label>
            <Description>Please enter your stay duration</Description>
            <DateRangePickerInput />
        </DateRangePicker>
    );
};

export const DateRangePickerButtons = () => {
    return (
        <Form className="flex flex-col items-start gap-2">
            <DateRangePicker isRequired>
                <Label>Stay duration</Label>
                <Description>Please select your stay duration</Description>
                <DateRangePickerButton>Select date range</DateRangePickerButton>
                <FieldError />
            </DateRangePicker>
            <Button type="submit">Submit</Button>
        </Form>
    );
};
