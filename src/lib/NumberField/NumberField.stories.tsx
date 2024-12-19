import type {Meta} from '@storybook/react';

import {NumberField, NumberInput} from './NumberField';
import {Description, FieldError, Label} from '../TextField/TextField';
import {Form} from '../form';
import {Button} from '../Button';

const meta = {
    title: 'Example/NumberField',
    component: NumberField,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof NumberField>;

export default meta;
export const BasicExample = () => {
    return (
        <NumberField maxValue={7}>
            <Label>Viewer(s)</Label>
            <NumberInput />
        </NumberField>
    );
};

export const WithDescription = () => {
    return (
        <NumberField maxValue={7}>
            <Label>Viewer(s)</Label>
            <Description>Maximum of 7</Description>
            <NumberInput />
        </NumberField>
    );
};

export const WithDescriptionHiddenTitle = () => {
    return (
        <NumberField maxValue={7}>
            <Label>Viewer(s)</Label>
            <NumberInput />
            <Description>Maximum of 7</Description>
        </NumberField>
    );
};

export const WithDisabled = () => {
    return (
        <NumberField isDisabled>
            <Label>Viewer(s)</Label>
            <Description>Maximum of 7</Description>
            <NumberInput />
        </NumberField>
    );
};

export const WithReadonly = () => {
    return (
        <NumberField isReadOnly>
            <Label>Viewer(s)</Label>
            <Description>Maximum of 7</Description>
            <NumberInput />
        </NumberField>
    );
};

export const Validation = () => {
    return (
        <Form>
            <NumberField maxValue={7} isRequired>
                <Label>Viewer(s)</Label>
                <Description>Maximum of 7</Description>
                <NumberInput placeholder="Type a number&hellip;" />
                <FieldError />
            </NumberField>
            <Button type="submit">Submit</Button>
        </Form>
    );
};
