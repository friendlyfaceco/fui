import type {Meta} from '@storybook/react';
import React from 'react';
import {Moon, Sun} from 'lucide-react';

import {NativeTooltip, NonFousableTooltipTarget, Tooltip, TooltipTrigger} from './Tooltip';
import {Button} from '../Button';
import {AccessibleIcon} from '../accessible-icon';
const meta = {
    title: 'Example/Tooltip',
    component: Tooltip,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof Tooltip>;

export default meta;
export const BasicExample = () => (
    <TooltipTrigger>
        <Button variant="outline">Hover me</Button>
        <Tooltip>I am a tooltip</Tooltip>
    </TooltipTrigger>
);

export const WithNonFocusableElements = () => (
    <TooltipTrigger>
        <NonFousableTooltipTarget>
            <div>Hover me</div>
        </NonFousableTooltipTarget>
        <Tooltip>I am a tooltip</Tooltip>
    </TooltipTrigger>
);

WithNonFocusableElements.parameters = {
    docs: {
        description: {
            story: 'Use the `NonFousableTooltipTarge` prop to show a tooltip on <a href="https://argos-ci.com/blog/react-aria-migration" target="_blank">`non-focusable`</a> element.',
        },
    },
};

export const WithDisabledElements = () => (
    <TooltipTrigger>
        <NonFousableTooltipTarget>
            <div>
                <Button variant="outline" isDisabled>
                    Hover me
                </Button>
            </div>
        </NonFousableTooltipTarget>
        <Tooltip>I am a tooltip</Tooltip>
    </TooltipTrigger>
);

WithDisabledElements.parameters = {
    docs: {
        description: {
            story: 'Use the `NonFousableTooltipTarget` component and `div` to show a tooltip on disabled elements.',
        },
    },
};

export const NativeTooltips = () => {
    const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
    const title = theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme';

    return (
        <NativeTooltip title={title}>
            <Button
                isIconOnly
                variant="outline"
                onPress={() => setTheme(theme => (theme === 'light' ? 'dark' : 'light'))}>
                <AccessibleIcon aria-label={title}>{theme === 'light' ? <Moon /> : <Sun />}</AccessibleIcon>
            </Button>
        </NativeTooltip>
    );
};

NativeTooltips.parameters = {
    docs: {
        description: {
            story: 'The `NativeTooltip` component uses <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title" target="_blank">`title`</a> attribute to create a native html tooltip.',
        },
    },
};
