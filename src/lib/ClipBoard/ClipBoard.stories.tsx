import type {Meta} from '@storybook/react';
import {Label, Input} from 'react-aria-components';

import {ClipBoard, CopyButton} from './ClipBoard';
import {TextField} from '../TextField/TextField';
import {Button} from '../Button';

const meta = {
    title: 'Component/ClipBoard',
    component: ClipBoard,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof ClipBoard>;

export default meta;

export const BasicExample = () => {
    return <CopyButton copyText="http://example.com" label="Copy link" labelCopied="Link is copied"></CopyButton>;
};

export const WithReadonlyInput = () => {
    const value = `npm i tailwindcss-react-aria-components`;
    return (
        <div className="flex items-center gap-x-1">
            <TextField isReadOnly>
                <Label className="sr-only">Install command</Label>
                <Input value={value} className="truncate" />
            </TextField>

            <CopyButton copyText={value} />
        </div>
    );
};

export const CopyToClipboard = () => {
    return (
        <ClipBoard>
            {({copied, copy}) => {
                return (
                    <Button isDisabled={copied} onPress={() => copy('http://example.com')}>
                        {copied ? 'Copied url' : 'Copy url'}
                    </Button>
                );
            }}
        </ClipBoard>
    );
};

CopyToClipboard.parameters = {
    docs: {
        description: {
            story: 'Use the `Clipboard` component to build your own copy to clipboard UI.',
        },
    },
};
