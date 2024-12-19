import type {Meta} from '@storybook/react';

import {Label} from '../TextField/TextField';
import {NativeSelect, NativeSelectField} from './NativeSelect';
import {Description} from '../TextField/TextField';

const meta = {
    title: 'Example/NativeSelect',
    component: NativeSelect,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof NativeSelect>;

export default meta;
export const BasicExample = () => {
    return (
        <NativeSelectField className="sm:w-80">
            <Label>Choose a pet</Label>
            <NativeSelect className="dark:text-white" name="pet">
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </NativeSelect>
        </NativeSelectField>
    );
};
export const WithDescription = () => {
    return (
        <NativeSelectField className="sm:w-80">
            <Label>Choose a pet</Label>
            <Description>Please choose an option</Description>
            <NativeSelect className="dark:text-white" name="pet">
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </NativeSelect>
        </NativeSelectField>
    );
};

export const WithDescriptionHiddenTitle = () => {
    return (
        <NativeSelectField className="sm:w-80">
            <Label>Choose a pet</Label>
            <NativeSelect className="dark:text-white" name="pet">
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </NativeSelect>
            <Description>Please choose an option</Description>
        </NativeSelectField>
    );
};

export const DisabledSelect = () => {
    return (
        <NativeSelectField className="sm:w-80">
            <Label>Choose a pet</Label>
            <Description>Please choose an option</Description>
            <NativeSelect className="dark:text-white" name="pet" disabled>
                <option value="dog">Dog</option>
                <option value="cat" disabled>
                    Cat
                </option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </NativeSelect>
        </NativeSelectField>
    );
};

export const DisabledOptions = () => {
    return (
        <NativeSelectField className="sm:w-80">
            <Label>Choose a pet</Label>
            <Description>Please choose an option</Description>
            <NativeSelect className="dark:text-white" name="pet">
                <option value="dog">Dog</option>
                <option value="cat" disabled>
                    Cat
                </option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </NativeSelect>
        </NativeSelectField>
    );
};
