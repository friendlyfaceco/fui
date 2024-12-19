import type {Meta} from '@storybook/react';
import {today, getLocalTimeZone, now, toCalendarDate, toCalendarDateTime, Time, toTime} from '@internationalized/date';
import React from 'react';
import {Group} from 'react-aria-components';

import {getRoundMinute, TimePicker} from './TimePicker';
import {Select, SelectButton, SelectPopover, SelectListBox, SelectListItem} from '../Select';
import {LabeledGroup} from '../TextField/TextField';
import {DatePickerButton, DatePicker} from '../DatePicker/DatePicker';
import {FieldError, Label} from '../TextField/TextField';

const meta = {
    title: 'Example/TimePicker',
    component: TimePicker,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof TimePicker>;

export default meta;
export const TimePickerButtons = () => {
    const options = TimePicker({
        intervalInMinute: 15,
    });

    const startTime = options.find(({hour, minute}) => {
        return new Time(hour, minute).compare(toTime(now(getLocalTimeZone()))) > 0;
    })?.id;

    return (
        <Select aria-label="meeting start time" className="min-w-[110px]" defaultSelectedKey={startTime}>
            <SelectButton />
            <SelectPopover className="w-30">
                <SelectListBox items={options}>
                    {item => {
                        return <SelectListItem>{item.value}</SelectListItem>;
                    }}
                </SelectListBox>
            </SelectPopover>
        </Select>
    );
};

export const DateAndTimerPicker = () => {
    const options = TimePicker({
        intervalInMinute: 15,
    });

    const [startDateTime, setStartDateTime] = React.useState(() => {
        const dateTime = toCalendarDateTime(now(getLocalTimeZone()))
            .add({
                minutes: 10,
            })
            .set({
                millisecond: 0,
                second: 0,
            });

        return dateTime.add({
            minutes: getRoundMinute({
                intervalInMinute: 15,
                minute: dateTime.minute,
            }),
        });
    });

    const startDate = toCalendarDate(startDateTime);

    const startTime = options.find(({hour, minute}) => {
        return hour === startDateTime.hour && minute === startDateTime.minute;
    })?.id;

    const disabledStartTimeOptions = options
        .filter(option => {
            return (
                toCalendarDateTime(startDate, new Time(option.hour, option.minute)).compare(
                    toCalendarDateTime(now(getLocalTimeZone()))
                ) <= 0
            );
        })
        .map(option => option.id);

    const [endDateTime, setEndDateTime] = React.useState(() => {
        const dateTime = toCalendarDateTime(now(getLocalTimeZone()))
            .add({
                minutes: 40,
            })
            .set({
                millisecond: 0,
                second: 0,
            });

        return dateTime.add({
            minutes: getRoundMinute({
                intervalInMinute: 15,
                minute: dateTime.minute,
            }),
        });
    });

    const endDate = toCalendarDate(endDateTime);

    const endTime = options.find(({hour, minute}) => {
        return hour === endDateTime.hour && minute === endDateTime.minute;
    })?.id;

    const disabledEndTimeOptions = options
        .filter(option => {
            return toCalendarDateTime(endDate, new Time(option.hour, option.minute)).compare(startDateTime) <= 0;
        })
        .map(option => option.id);

    return (
        <LabeledGroup>
            <Label>Date and time</Label>
            <Group className="flex flex-col">
                <div className="flex gap-4">
                    <div className="flex gap-1">
                        <DatePicker
                            aria-label="meeting start date"
                            value={startDate}
                            minValue={today(getLocalTimeZone())}
                            onChange={value => {
                                const newCalendarTime = toCalendarDateTime(value, toTime(startDateTime));

                                setStartDateTime(newCalendarTime);

                                if (newCalendarTime.compare(endDateTime) >= 0) {
                                    setEndDateTime(
                                        newCalendarTime.add({
                                            minutes: 30,
                                        })
                                    );
                                }
                            }}>
                            <DatePickerButton />
                            <FieldError />
                        </DatePicker>
                        <Select
                            aria-label="meeting start time"
                            className="min-w-[110px]"
                            selectedKey={startTime}
                            disabledKeys={disabledStartTimeOptions}
                            onSelectionChange={value => {
                                const option = options.find(option => option.id === value);
                                if (option) {
                                    const newCalendarTime = toCalendarDateTime(
                                        startDate,
                                        new Time(option.hour, option.minute, 0, 0)
                                    );

                                    setStartDateTime(newCalendarTime);

                                    if (newCalendarTime.compare(endDateTime) >= 0) {
                                        setEndDateTime(
                                            newCalendarTime.add({
                                                minutes: 30,
                                            })
                                        );
                                    }
                                }
                            }}>
                            <SelectButton />
                            <SelectPopover className="w-30">
                                <SelectListBox items={options}>
                                    {item => {
                                        return <SelectListItem>{item.value}</SelectListItem>;
                                    }}
                                </SelectListBox>
                            </SelectPopover>
                        </Select>
                    </div>

                    <div className="flex gap-1">
                        <DatePicker
                            aria-label="Meeting end date"
                            value={endDate}
                            minValue={startDate}
                            onChange={value => {
                                setEndDateTime(toCalendarDateTime(value, toTime(endDateTime)));
                            }}>
                            <DatePickerButton />
                            <FieldError />
                        </DatePicker>
                        <Select
                            aria-label="Meeting end time"
                            className="min-w-[110px]"
                            selectedKey={endTime}
                            disabledKeys={disabledEndTimeOptions}
                            onSelectionChange={value => {
                                const option = options.find(option => option.id === value);

                                if (option) {
                                    setEndDateTime(
                                        toCalendarDateTime(endDate, new Time(option.hour, option.minute, 0, 0))
                                    );
                                }
                            }}>
                            <SelectButton />
                            <SelectPopover className="w-30">
                                <SelectListBox items={options}>
                                    {item => {
                                        return <SelectListItem>{item.value}</SelectListItem>;
                                    }}
                                </SelectListBox>
                            </SelectPopover>
                        </Select>
                    </div>
                </div>
            </Group>
        </LabeledGroup>
    );
};
