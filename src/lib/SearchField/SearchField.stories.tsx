import type {Meta} from '@storybook/react';

import {Label} from '../TextField/TextField';
import {SearchField, SearchInput} from './SearchField';
import {Description} from '../TextField/TextField';

const meta = {
    title: 'Example/SearchField',
    component: SearchField,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof SearchField>;

export default meta;

export const BasicExample = () => {
    return (
        <SearchField>
            <Label>Search</Label>
            <SearchInput placeholder="Search&hellip;" />
        </SearchField>
    );
};

export const WithDescription = () => {
    return (
        <SearchField>
            <Label>Search</Label>
            <Description>Input search. Beep boop.</Description>
            <SearchInput placeholder="Search&hellip;" />
        </SearchField>
    );
};

export const WithFollowingDescription = () => {
    return (
        <SearchField>
            <Label>Search</Label>
            <SearchInput placeholder="Search&hellip;" />
            <Description>Input search. Beep boop.</Description>
        </SearchField>
    );
};

export const WithDisabled = () => {
    return (
        <SearchField isDisabled>
            <Label>Search</Label>
            <Description>Input search. Beep boop.</Description>
            <SearchInput placeholder="Search&hellip;" />
        </SearchField>
    );
};

export const WithReadonly = () => {
    return (
        <SearchField isReadOnly>
            <Label>Search</Label>
            <Description>Input search. Beep boop.</Description>
            <SearchInput placeholder="Search&hellip;" />
        </SearchField>
    );
};
