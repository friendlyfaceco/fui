import type {Meta} from '@storybook/react';
import React from 'react';
import {Group} from 'react-aria-components';

import {Form} from '../form';
import {Button} from '../index';
import {CheckBox, Checkboxes, CheckboxField, CheckboxGroup} from './CheckBox';
import {Description, FieldError, Label, LabeledGroup} from '../TextField/TextField';

const meta = {
    title: 'Component/CheckBox',
    component: CheckBox,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof CheckBox>;

export default meta;
export const BasicExample = () => {
    return <CheckBox>I accept to the terms and conditions</CheckBox>;
};

export const WithCheckboxDescription = () => {
    return (
        <CheckboxField className="max-w-sm">
            <CheckBox>Subscribe</CheckBox>
            <Description>You will receive our newsletter once per week. Unsubscribe at any time.</Description>
        </CheckboxField>
    );
};

WithCheckboxDescription.parameters = {
    docs: {
        description: {
            story: 'Use the `CheckboxField` and `Description` component to add checkbox description.',
        },
    },
};

export const WithDisabledCheckbox = () => {
    return (
        <CheckboxField className="max-w-sm">
            <CheckBox isDisabled>Subscribe</CheckBox>
            <Description>You will receive our newsletter once per week. Unsubscribe at any time.</Description>
        </CheckboxField>
    );
};

WithDisabledCheckbox.parameters = {
    docs: {
        description: {
            story: 'Use the `isDisabled` prop on the `Checkbox` component to disable checkbox.',
        },
    },
};

export const WithReadonlyCheckbox = () => {
    return (
        <CheckboxField className="max-w-sm">
            <CheckBox isReadOnly>Subscribe</CheckBox>
            <Description>You will receive our newsletter once per week. Unsubscribe at any time.</Description>
        </CheckboxField>
    );
};

export const WithCheckboxGroups = () => {
    return (
        <CheckboxGroup>
            <Label>Notifications</Label>
            <Checkboxes>
                <CheckBox value="email">Notify via email</CheckBox>
                <CheckBox value="sms">Notify via SMS</CheckBox>
                <CheckBox value="telegram">Notify via telegram</CheckBox>
            </Checkboxes>
        </CheckboxGroup>
    );
};

WithCheckboxGroups.parameters = {
    docs: {
        description: {
            story: 'Use the `CheckboxGroup` and `Label` component to build your checkbox group.',
        },
    },
};

export const WithCheckboxGroupDescription = () => {
    return (
        <CheckboxGroup>
            <Label>Notifications</Label>
            <Description>Please select your preferred method of communication.</Description>
            <Checkboxes>
                <CheckBox value="email">Notify via email</CheckBox>
                <CheckBox value="sms">Notify via SMS</CheckBox>
                <CheckBox value="telegram">Notify via telegram</CheckBox>
            </Checkboxes>
        </CheckboxGroup>
    );
};

export const WithCheckboxDescriptionAndGroupDescription = () => {
    return (
        <CheckboxGroup>
            <Label>Notifications</Label>
            <Description>Please select your preferred method of communication.</Description>
            <Checkboxes>
                <CheckboxField>
                    <CheckBox value="email">Notify via email</CheckBox>
                    <Description>We&apos;ll send you a confirmation email</Description>
                </CheckboxField>

                <CheckboxField>
                    <CheckBox value="sms">Notify via SMS</CheckBox>
                    <Description>We&apos;ll send you a confirmation SMS</Description>
                </CheckboxField>

                <CheckboxField>
                    <CheckBox value="telegram">Notify via telegram</CheckBox>
                    <Description>We&apos;ll send you a confirmation telegram</Description>
                </CheckboxField>
            </Checkboxes>
        </CheckboxGroup>
    );
};

export const WithHorizontalCheckboxGroup = () => {
    return (
        <CheckboxGroup orientation="horizontal">
            <Label>Notifications</Label>
            <Checkboxes>
                <CheckBox value="email">Notify via email</CheckBox>
                <CheckBox value="sms">Notify via SMS</CheckBox>
                <CheckBox value="telegram">Notify via telegram</CheckBox>
            </Checkboxes>
        </CheckboxGroup>
    );
};

export const WithCheckboxLabelPosition = () => {
    return <CheckBox labelPosition="left">I accept the terms and conditions</CheckBox>;
};

WithCheckboxLabelPosition.parameters = {
    docs: {
        description: {
            story: 'Use `labelPosition="left"` to position label to the left side of the checkbox.',
        },
    },
};

export const WithCheckboxGroupLabelPosition = () => {
    return (
        <CheckboxGroup>
            <Label>Notifications</Label>
            <Description>Please select your preferred method of communication.</Description>
            <Checkboxes>
                <CheckboxField>
                    <CheckBox value="email" labelPosition="left">
                        Notify via email
                    </CheckBox>
                    <Description>We&apos;ll send you a confirmation email</Description>
                </CheckboxField>

                <CheckboxField>
                    <CheckBox value="sms" labelPosition="left">
                        Notify via SMS
                    </CheckBox>
                    <Description>We&apos;ll send you a confirmation SMS</Description>
                </CheckboxField>

                <CheckboxField>
                    <CheckBox value="telegram" labelPosition="left">
                        Notify via telegram
                    </CheckBox>
                    <Description>We&apos;ll send you a confirmation telegram</Description>
                </CheckboxField>
            </Checkboxes>
        </CheckboxGroup>
    );
};

const options = ['Notify via email', 'Notify via SMS', 'Notify via Telegram'];

export const WithIndeterminateState = () => {
    const [selected, setSelected] = React.useState<string[]>([]);

    return (
        <LabeledGroup>
            <Label className="mb-3">Notifications</Label>

            <Group className="space-y-3">
                <CheckBox
                    isSelected={selected.length > 0}
                    isIndeterminate={selected.length > 0 && selected.length !== options.length}
                    onChange={checked => setSelected(checked ? options : [])}>
                    Select all
                </CheckBox>

                {options.map(option => (
                    <CheckBox
                        key={option}
                        name={option}
                        isSelected={selected.includes(option)}
                        onChange={checked => {
                            return setSelected(pending => {
                                return checked ? [...pending, option] : pending.filter(item => item !== option);
                            });
                        }}>
                        {option}
                    </CheckBox>
                ))}
            </Group>
        </LabeledGroup>
    );
};

export const WithValidation = () => {
    return (
        <Form>
            <CheckboxGroup isRequired>
                <Label>Notifications</Label>
                <Description>Please select your preferred method of communication.</Description>
                <Checkboxes>
                    <CheckboxField>
                        <CheckBox value="email">Notify via email</CheckBox>
                        <Description>We&apos;ll send you a confirmation email</Description>
                    </CheckboxField>

                    <CheckboxField>
                        <CheckBox value="sms">Notify via SMS</CheckBox>
                        <Description>We&apos;ll send you a confirmation SMS</Description>
                    </CheckboxField>

                    <CheckboxField>
                        <CheckBox value="telegram">Notify via telegram</CheckBox>
                        <Description>We&apos;ll send you a confirmation telegram</Description>
                    </CheckboxField>
                </Checkboxes>
                <FieldError />
            </CheckboxGroup>
            <Button type="submit">Save</Button>
        </Form>
    );
};

WithValidation.parameters = {
    docs: {
        description: {
            story: 'Combine the `Form`, `FieldError` with `CheckboxGroup` components to add validation when submitting form.',
        },
    },
};
