import type {Meta} from '@storybook/react';
import {isFileDropItem} from 'react-aria';
import React from 'react';
import {FileTrigger} from 'react-aria-components';

import {Dropzone} from './Dropzone';
import {AccessibleIcon} from '../accessible-icon';
import {Button} from '../Button';
import {Text} from '../Text/Text';

const meta = {
    title: 'Example/Dropzone',
    component: Dropzone,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof Dropzone>;

export default meta;

export const BasicExample = () => {
    const [droppedImage, setDroppedImage] = React.useState<string | undefined>(undefined);

    return (
        <Dropzone
            getDropOperation={types => (types.has('image/jpeg') || types.has('image/png') ? 'copy' : 'cancel')}
            onDrop={async e => {
                const item = e.items
                    .filter(isFileDropItem)
                    .find(item => item.type === 'image/jpeg' || item.type === 'image/png');
                if (item) {
                    setDroppedImage(URL.createObjectURL(await item.getFile()));
                }
            }}>
            {droppedImage ? (
                <img alt="" src={droppedImage} className="aspect-square h-full w-full object-contain" />
            ) : (
                <div className="flex flex-1 flex-col gap-2 py-6">
                    <div className="flex flex-1 justify-center">
                        <AccessibleIcon>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 20 20"
                                className="size-10 text-muted/50">
                                <path
                                    fill="currentColor"
                                    d="M18 3H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-4.75 3.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5M4 14l3.314-7.619l3.769 6.102l3.231-1.605L16 14z"></path>
                            </svg>
                        </AccessibleIcon>
                    </div>
                    <div className="flex flex-1">
                        <FileTrigger
                            acceptedFileTypes={['image/png', 'image/jpeg']}
                            allowsMultiple={false}
                            onSelect={async e => {
                                if (e) {
                                    const files = Array.from([...e]);
                                    const item = files[0];

                                    if (item) {
                                        setDroppedImage(URL.createObjectURL(item));
                                    }
                                }
                            }}>
                            <Button
                                variant="unstyle"
                                className="text-nowrap text-base/6 font-medium text-accent sm:text-sm/6">
                                Upload a file
                            </Button>
                        </FileTrigger>
                        &nbsp;
                        <Text>or drag and drop</Text>
                    </div>
                    <div className="flex flex-1 justify-center">
                        <Text>PNG, JPG, GIF up to 10MB</Text>
                    </div>
                </div>
            )}

            <input type="hidden" name="image" value={droppedImage} />
        </Dropzone>
    );
};
