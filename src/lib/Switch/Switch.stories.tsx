import type {Meta} from '@storybook/react';

import {Label} from '../TextField/TextField';
import {Switch, Switches, SwitchField, SwitchGroup} from './Switch';
import {Description} from '../TextField/TextField';
import {TextLink, Text} from '../Text/Text';

const meta = {
    title: 'Example/Switch',
    component: Switch,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof Switch>;

export default meta;
export const BasicExample = () => {
    return <Switch>Email notification</Switch>;
};

export const WithDescription = () => {
    return (
        <SwitchField>
            <Switch>Email notifications</Switch>
            <Description>Get email to find out what&apos;s going on when you&apos;are not online.</Description>
        </SwitchField>
    );
};

export const WithDisabled = () => {
    return (
        <SwitchField>
            <Switch isDisabled>Email notifications</Switch>
            <Description>Get email to find out what&apos;s going on when you&apos;are not online.</Description>
        </SwitchField>
    );
};

export const WithReadonly = () => {
    return (
        <SwitchField>
            <Switch isReadOnly>Email notifications</Switch>
            <Description>Get email to find out what&apos;s going on when you&apos;are not online.</Description>
        </SwitchField>
    );
};

export const LabelPosition = () => {
    return (
        <SwitchField>
            <Switch labelPosition="left">Email notifications</Switch>
        </SwitchField>
    );
};

export const SwitchGroups = () => {
    return (
        <SwitchGroup className="max-w-2xl">
            <Label>Audience and tagging</Label>
            <Switches>
                <Switch>Protect your posts</Switch>
                <Switch>Protect your videos</Switch>
                <Switch>Photo tagging</Switch>
            </Switches>
        </SwitchGroup>
    );
};

export const WithSwitchDescription = () => {
    return (
        <SwitchGroup className="max-w-2xl">
            <Label>Audience and tagging</Label>
            <Switches>
                <SwitchField>
                    <Switch labelPosition="left">Protect your posts</Switch>
                    <Description elementType="div">
                        <Text>
                            When selected, your posts and other account information are only visible to people who
                            follow you. <TextLink className="inline">Learn more</TextLink>
                        </Text>
                    </Description>
                </SwitchField>

                <SwitchField>
                    <Switch labelPosition="left">Protect your videos</Switch>
                    <Description>
                        If selected, videos in your posts will not be downloadable by default. This setting applies to
                        posts going forward and is not retroactive.
                    </Description>
                </SwitchField>

                <SwitchField>
                    <Switch labelPosition="left">Photo tagging</Switch>
                </SwitchField>
            </Switches>
        </SwitchGroup>
    );
};

export const WithGroupDescription = () => {
    return (
        <SwitchGroup className="max-w-2xl">
            <Label>Audience and tagging</Label>
            <Description>Manage what information you allow other people on X to see</Description>
            <Switches>
                <SwitchField>
                    <Switch labelPosition="left">Protect your posts</Switch>
                    <Description elementType="div">
                        <Text>
                            When selected, your posts and other account information are only visible to people who
                            follow you. <TextLink className="inline">Learn more</TextLink>
                        </Text>
                    </Description>
                </SwitchField>

                <SwitchField>
                    <Switch labelPosition="left">Protect your videos</Switch>
                    <Description>
                        If selected, videos in your posts will not be downloadable by default. This setting applies to
                        posts going forward and is not retroactive.
                    </Description>
                </SwitchField>

                <SwitchField>
                    <Switch labelPosition="left">Photo tagging</Switch>
                </SwitchField>
            </Switches>
        </SwitchGroup>
    );
};

export const WithGroupItemDisabled = () => {
    return (
        <SwitchGroup className="max-w-2xl">
            <Label>Audience and tagging</Label>
            <Description>Manage what information you allow other people on X to see</Description>
            <Switches>
                <SwitchField>
                    <Switch labelPosition="left" isDisabled>
                        Protect your posts
                    </Switch>
                    <Description elementType="div">
                        <Text>
                            When selected, your posts and other account information are only visible to people who
                            follow you. <TextLink className="inline">Learn more</TextLink>
                        </Text>
                    </Description>
                </SwitchField>

                <SwitchField>
                    <Switch labelPosition="left">Protect your videos</Switch>
                    <Description>
                        If selected, videos in your posts will not be downloadable by default. This setting applies to
                        posts going forward and is not retroactive.
                    </Description>
                </SwitchField>

                <SwitchField>
                    <Switch labelPosition="left">Photo tagging</Switch>
                </SwitchField>
            </Switches>
        </SwitchGroup>
    );
};
