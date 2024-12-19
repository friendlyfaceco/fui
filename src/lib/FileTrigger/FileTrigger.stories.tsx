import type {Meta} from '@storybook/react';
import React from 'react';

import {FileTrigger} from './FileTrigger';
import {Button} from '../Button';
import {Avatar} from '../Avatar';

const meta = {
    title: 'Example/FileTrigger',
    component: FileTrigger,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof FileTrigger>;

export default meta;

export const BasicExample = () => {
    const [file, setFile] = React.useState<string[] | null>(null);

    return (
        <>
            <FileTrigger
                onSelect={e => {
                    if (!e) {
                        return;
                    }

                    const files = Array.from(e);
                    const filenames = files.map(file => file.name);
                    setFile(filenames);
                }}>
                <Button variant="outline">Select a file</Button>
            </FileTrigger>
            {file && file}
        </>
    );
};

export const ChangeProfile = () => {
    const [src, setSrc] = React.useState<string | undefined>(undefined);

    return (
        <div className="flex items-center gap-2">
            <Avatar alt="D D" className="rounded-full" src={src}></Avatar>
            <FileTrigger
                onSelect={e => {
                    if (!e) {
                        return;
                    }

                    const file = Array.from(e)[0];
                    setSrc(URL.createObjectURL(file));
                }}>
                <Button variant="outline">Change</Button>
            </FileTrigger>
        </div>
    );
};
