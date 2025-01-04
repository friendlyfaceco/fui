import React from 'react';
import type {Meta} from '@storybook/react';
import {
    SquareArrowOutUpRight,
    FolderPlus,
    MicIcon,
    //MicOffIcon,
    MoreHorizontalIcon,
    XIcon,
    DownloadIcon,
    CloudUploadIcon,
    UploadCloudIcon,
    PlusIcon,
    MinusIcon,
    ChevronRightIcon,
} from 'lucide-react';
//This brings TW individually, ok
import '../../theme/index.css';

import {Button, ButtonGroup, ToggleButton} from './Button';
// import {docs} from '../.storybook/docs';
// import {Avatar} from '../src/avatar';
// import {Link} from '../src/link';
import {AccessibleIcon} from '../accessible-icon';
import {SpinnerIcon} from '../icons';
//import {TooltipTrigger, Tooltip} from '../src/tooltip';

const meta: Meta<typeof Button> = {
    title: 'Component/Button',
    component: Button,
    // parameters: {
    //     layout: 'centered',
    //     docs: {
    //         description: {
    //             component:
    //                 'A <a href="https://react-spectrum.adobe.com/react-aria/Button.html" target="_blank">`button`</a> allows a user to perform an action, with mouse, touch, and keyboard interactions.',
    //         },
    //         ...docs,
    //         controls: {
    //             exclude: /.*/g,
    //         },
    //     },
    // },
    //tags: ['autodocs'],
};

export default meta;

export const BasicExample = () => {
    return (
        <div className="flex flex-col gap-5">
            <p className="text-gray-400">Colors</p>
            <Colors />

            <p className="text-gray-400">Sizes</p>
            <Sizes />

            <p className="text-gray-400">Variants</p>
            <Variants />

            <p className="text-gray-400">Icons</p>
            <Icons />

            <p className="text-gray-400">IsIconOnly </p>
            <IsIconOnly />

            <p className="text-gray-400">Disabled </p>
            <DisabledButtons />

            <p className="text-gray-400">Pending </p>
            <Pending />

            <p className="text-gray-400">ImageButtons </p>
            <ImageButtons />

            <p className="text-gray-400">AsChild </p>
            <AsChild />

            <p className="text-gray-400">ToggleButtons </p>
            <ToggleButtons />

            <p className="text-gray-400">ButtonGroups </p>
            <ButtonGroups />
        </div>
    );
};

export const Default = () => {
    return <Button>Button</Button>;
};

export const Colors = () => {
    return (
        <div className="light flex flex-col gap-y-4">
            <h4 className="text-xs">Accent (default)</h4>

            <div className="flex items-center gap-x-2">
                {/* DEFAULT */}
                <Button>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* DEFAULT + ISICON */}
                <Button isIconOnly>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING */}
                <Button isPending={true}>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON */}
                <Button isIconOnly isPending={true}>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* DISABLED */}
                <Button isDisabled={true}>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON */}
                <Button isIconOnly isDisabled={true}>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>
            </div>

            <div className="flex items-center gap-x-2">
                {/* DEFAULT + OUTLINE */}
                <Button variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* DEFAULT + ISICON + OUTLINE */}
                <Button isIconOnly variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + OUTLINE */}
                <Button isPending={true} variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON + OUTLINE */}
                <Button isIconOnly isPending={true} variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* IS DISABLED */}
                <Button isDisabled={true} variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON + OUTLINE */}
                <Button isIconOnly isDisabled={true} variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>
            </div>

            <div className="flex items-center gap-x-2">
                {/* DEFAULT + OUTLINE */}
                <Button variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* DEFAULT + ISICON + OUTLINE */}
                <Button isIconOnly variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + OUTLINE */}
                <Button isPending={true} variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON + OUTLINE */}
                <Button isIconOnly isPending={true} variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + OUTLINE */}
                <Button isDisabled={true} variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON + OUTLINE */}
                <Button isIconOnly isDisabled={true} variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>
            </div>

            <h4 className="text-xs">Primary</h4>

            <div className="flex items-center gap-x-2">
                {/* DEFAULT */}
                <Button color="primary">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* DEFAULT + ISICON */}
                <Button color="primary" isIconOnly>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING */}
                <Button color="primary" isPending={true}>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON */}
                <Button color="primary" isIconOnly isPending={true}>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* DISABLED */}
                <Button color="primary" isDisabled={true}>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON */}
                <Button color="primary" isIconOnly isDisabled={true}>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>
            </div>

            <div className="flex items-center gap-x-2">
                {/* DEFAULT + OUTLINE */}
                <Button color="primary" variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* DEFAULT + ISICON + OUTLINE */}
                <Button color="primary" isIconOnly variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + OUTLINE */}
                <Button color="primary" isPending={true} variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON + OUTLINE */}
                <Button color="primary" isIconOnly isPending={true} variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* IS DISABLED */}
                <Button color="primary" isDisabled={true} variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON + OUTLINE */}
                <Button color="primary" isIconOnly isDisabled={true} variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>
            </div>

            <div className="flex items-center gap-x-2">
                {/* DEFAULT + OUTLINE */}
                <Button color="primary" variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* DEFAULT + ISICON + OUTLINE */}
                <Button color="primary" isIconOnly variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + OUTLINE */}
                <Button color="primary" isPending={true} variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON + OUTLINE */}
                <Button color="primary" isIconOnly isPending={true} variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + OUTLINE */}
                <Button color="primary" isDisabled={true} variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON + OUTLINE */}
                <Button color="primary" isIconOnly isDisabled={true} variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>
            </div>

            <h4 className="text-xs">Destructive</h4>

            <div className="flex items-center gap-x-2">
                {/* DEFAULT */}
                <Button color="destructive">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* DEFAULT + ISICON */}
                <Button color="destructive" isIconOnly>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING */}
                <Button color="destructive" isPending={true}>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON */}
                <Button color="destructive" isIconOnly isPending={true}>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* DISABLED */}
                <Button color="destructive" isDisabled={true}>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON */}
                <Button color="destructive" isIconOnly isDisabled={true}>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>
            </div>

            <div className="flex items-center gap-x-2">
                {/* DEFAULT + OUTLINE */}
                <Button color="destructive" variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* DEFAULT + ISICON + OUTLINE */}
                <Button color="destructive" isIconOnly variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + OUTLINE */}
                <Button color="destructive" isPending={true} variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON + OUTLINE */}
                <Button color="destructive" isIconOnly isPending={true} variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* IS DISABLED */}
                <Button color="destructive" isDisabled={true} variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON + OUTLINE */}
                <Button color="destructive" isIconOnly isDisabled={true} variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>
            </div>

            <div className="flex items-center gap-x-2">
                {/* DEFAULT + OUTLINE */}
                <Button color="destructive" variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* DEFAULT + ISICON + OUTLINE */}
                <Button color="destructive" isIconOnly variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + OUTLINE */}
                <Button color="destructive" isPending={true} variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON + OUTLINE */}
                <Button color="destructive" isIconOnly isPending={true} variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + OUTLINE */}
                <Button color="destructive" isDisabled={true} variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON + OUTLINE */}
                <Button color="destructive" isIconOnly isDisabled={true} variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>
            </div>

            <h4 className="text-xs">Success</h4>

            <div className="flex items-center gap-x-2">
                {/* DEFAULT */}
                <Button color="success">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* DEFAULT + ISICON */}
                <Button color="success" isIconOnly>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING */}
                <Button color="success" isPending={true}>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON */}
                <Button color="success" isIconOnly isPending={true}>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* DISABLED */}
                <Button color="success" isDisabled={true}>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON */}
                <Button color="success" isIconOnly isDisabled={true}>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>
            </div>

            <div className="flex items-center gap-x-2">
                {/* DEFAULT + OUTLINE */}
                <Button color="success" variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* DEFAULT + ISICON + OUTLINE */}
                <Button color="success" isIconOnly variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + OUTLINE */}
                <Button color="success" isPending={true} variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON + OUTLINE */}
                <Button color="success" isIconOnly isPending={true} variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* IS DISABLED */}
                <Button color="success" isDisabled={true} variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON + OUTLINE */}
                <Button color="success" isIconOnly isDisabled={true} variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>
            </div>

            <div className="flex items-center gap-x-2">
                {/* DEFAULT + OUTLINE */}
                <Button color="success" variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* DEFAULT + ISICON + OUTLINE */}
                <Button color="success" isIconOnly variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + OUTLINE */}
                <Button color="success" isPending={true} variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON + OUTLINE */}
                <Button color="success" isIconOnly isPending={true} variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + OUTLINE */}
                <Button color="success" isDisabled={true} variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON + OUTLINE */}
                <Button color="success" isIconOnly isDisabled={true} variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>
            </div>

            <h4 className="text-xs">Warning</h4>

            <div className="flex items-center gap-x-2">
                {/* DEFAULT */}
                <Button color="warning">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* DEFAULT + ISICON */}
                <Button color="warning" isIconOnly>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING */}
                <Button color="warning" isPending={true}>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON */}
                <Button color="warning" isIconOnly isPending={true}>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* DISABLED */}
                <Button color="warning" isDisabled={true}>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON */}
                <Button color="warning" isIconOnly isDisabled={true}>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>
            </div>

            <div className="flex items-center gap-x-2">
                {/* DEFAULT + OUTLINE */}
                <Button color="warning" variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* DEFAULT + ISICON + OUTLINE */}
                <Button color="warning" isIconOnly variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + OUTLINE */}
                <Button color="warning" isPending={true} variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON + OUTLINE */}
                <Button color="warning" isIconOnly isPending={true} variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* IS DISABLED */}
                <Button color="warning" isDisabled={true} variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON + OUTLINE */}
                <Button color="warning" isIconOnly isDisabled={true} variant="outline">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>
            </div>

            <div className="flex items-center gap-x-2">
                {/* DEFAULT + OUTLINE */}
                <Button color="warning" variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* DEFAULT + ISICON + OUTLINE */}
                <Button color="warning" isIconOnly variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + OUTLINE */}
                <Button color="warning" isPending={true} variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON + OUTLINE */}
                <Button color="warning" isIconOnly isPending={true} variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + OUTLINE */}
                <Button color="warning" isDisabled={true} variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Button
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>

                {/* PENDING + ISICON + OUTLINE */}
                <Button color="warning" isIconOnly isDisabled={true} variant="plain">
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                </Button>
            </div>
        </div>
    );
};

Colors.parameters = {
    docs: {
        description: {
            story: 'Use the `color` prop to set the button color. Default color is `accent`.',
        },
    },
};

export const Sizes = () => {
    return (
        <div className="flex gap-2 items-center justify-start">
            {/* PENDING + OUTLINE */}
            <Button size="sm" variant="outline">
                <AccessibleIcon>
                    <CloudUploadIcon />
                </AccessibleIcon>
                Upload to cloud
            </Button>
            <Button variant="outline">
                <AccessibleIcon>
                    <CloudUploadIcon />
                </AccessibleIcon>
                Upload to cloud
            </Button>
            <Button size="lg" variant="outline">
                <AccessibleIcon>
                    <CloudUploadIcon />
                </AccessibleIcon>
                Upload to cloud
            </Button>
        </div>
    );
};

Sizes.parameters = {
    docs: {
        description: {
            story: 'Use the `size` the prop to set the button size.',
        },
    },
};

export const Variants = () => {
    return (
        <div className="flex gap-2 items-center justify-start">
            <Button>Solid (default)</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="plain">Plain</Button>
            <Button variant="unstyle">unstyled</Button>
        </div>
    );
};

Variants.parameters = {
    docs: {
        description: {
            story: 'Use the `variant` prop to render buttons with different variants. Default variant is `solid`.',
        },
    },
};

export const Icons = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-4">
                <Button>
                    <AccessibleIcon>
                        <CloudUploadIcon />
                    </AccessibleIcon>
                    Deploy
                </Button>
                <Button variant="outline">
                    <AccessibleIcon>
                        <DownloadIcon />
                    </AccessibleIcon>
                    Export
                </Button>
                <Button size="lg">
                    Live preview
                    <AccessibleIcon>
                        <SquareArrowOutUpRight strokeWidth={1.5} />
                    </AccessibleIcon>
                </Button>
                <Button size="lg" variant="outline">
                    Get template
                    <AccessibleIcon>
                        <ChevronRightIcon />
                    </AccessibleIcon>
                </Button>
            </div>
            <div></div>
        </div>
    );
};

Icons.parameters = {
    docs: {
        description: {
            story: 'Use the <a href="./?path=/docs/icon--docs" target="_blank">`AccessibleIcon`</a> component to place a decorative icon at the start or end of a button. Icon size is auto scaled based on button sizes',
        },
    },
};

export const IsIconOnly = () => {
    return (
        <div className="space-x-4">
            <Button isIconOnly size="lg">
                <AccessibleIcon aria-label="Mic">
                    <MicIcon />
                </AccessibleIcon>
            </Button>
            <Button isIconOnly>
                <AccessibleIcon aria-label="Create New Folder">
                    <FolderPlus />
                </AccessibleIcon>
            </Button>
            <Button variant="outline" isIconOnly>
                <AccessibleIcon aria-label="More Options">
                    <MoreHorizontalIcon />
                </AccessibleIcon>
            </Button>
            <Button variant="plain" isIconOnly>
                <AccessibleIcon aria-label="Close">
                    <XIcon />
                </AccessibleIcon>
            </Button>

            <Button size="sm" isIconOnly>
                <AccessibleIcon aria-label="Create New Folder">
                    <FolderPlus />
                </AccessibleIcon>
            </Button>
            <Button variant="outline" size="sm" isIconOnly>
                <AccessibleIcon aria-label="More Options">
                    <MoreHorizontalIcon />
                </AccessibleIcon>
            </Button>
        </div>
    );
};

IsIconOnly.parameters = {
    docs: {
        description: {
            story: 'Use the `isIconOnly` prop to render a icon only button. Use `aria-label`on the <a href="./?path=/docs/icon--docs" target="_blank">`AccessibleIcon`</a> component for none decorative buttons. Icon size is auto scaled based on button sizes.',
        },
    },
};

export const DisabledButtons = () => {
    return <Button isDisabled>Button</Button>;
};

DisabledButtons.parameters = {
    docs: {
        description: {
            story: 'Use the `isDisabled` prop to disable buttons.',
        },
    },
};

export const Pending = () => {
    const [isPending] = React.useState(true);

    return (
        <div className="flex gap-2">
            <Button isPending={isPending} pendingLabel="Searching">
                Search
            </Button>

            <Button variant="outline" isPending={isPending} pendingLabel="Searching">
                Search
            </Button>

            <Button isPending={isPending} isCustomPending pendingLabel="Deploying">
                {isPending ? (
                    <>
                        <AccessibleIcon>
                            <CloudUploadingIcon />
                        </AccessibleIcon>
                        Deploying
                    </>
                ) : (
                    <>
                        <AccessibleIcon>
                            <UploadCloudIcon />
                        </AccessibleIcon>
                        Deploy
                    </>
                )}
            </Button>

            <Button isPending={isPending} isCustomPending pendingLabel="Refreshing">
                {isPending && <SpinnerIcon className="text-zinc-300" />}
                Refresh
            </Button>
        </div>
    );
};

Pending.parameters = {
    docs: {
        description: {
            story: 'Use the `isPending` prop to render a loading spinner. Use `pendingLabel` to provide accessible loading status. Use the `isCustomPending` prop if you need to use a custom pending UI.',
        },
    },
};

export const ImageButtons = () => {
    return (
        <Button variant="unstyle">
            A
            {/* <Avatar
                alt="Jane"
                src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?q=80&auto=format&fit=facearea&facepad=3&w=256&h=256"
            /> */}
        </Button>
    );
};

ImageButtons.parameters = {
    docs: {
        description: {
            story: 'Use the <a href="/?path=/docs/avatar--docs" target="_blank">`Avatar`</a> component and the `unstyle` prop on the `Button` component to render image buttons.',
        },
    },
};

export const AsChild = () => {
    return (
        <Button asChild>
            <a href="https://example.com" target="_blank" rel="noreferrer">
                Login
            </a>
        </Button>
    );
};

AsChild.parameters = {
    docs: {
        description: {
            story: 'Use the <a href="https://www.jacobparis.com/content/react-as-child" target="_blank">`asChild`</a> prop to render a completely different component, e.g., render the <a href="./?path=/docs/link--docs" target="_blank">`Link`</a> component with button styles.',
        },
    },
};

export function ToggleButtons() {
    const [isPined, setIsPined] = React.useState(false);

    return (
        <ToggleButton
            isSelected={isPined}
            onChange={setIsPined}
            {...(!isPined && {
                variant: 'outline',
            })}>
            Pin
        </ToggleButton>
    );
}

ToggleButtons.parameters = {
    docs: {
        description: {
            story: 'A <a href="https://react-spectrum.adobe.com/react-aria/ToggleButton.html#togglebutton" target="_blank">`toggle button`</a> allows a user to toggle a selection on or off, for example switching between two states or modes. Use the `isSelected` and `onChange` prop to control toggle state and behavior.',
        },
    },
};

export const ButtonGroups = () => {
    return (
        <div className="flex flex-col space-y-5">
            <ButtonGroup>
                <Button variant="outline">Oldest</Button>
                <Button variant="outline">Newest</Button>
                <Button variant="outline">Top</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button isIconOnly>
                    <AccessibleIcon aria-label="Zoom In">
                        <PlusIcon />
                    </AccessibleIcon>
                </Button>
                <Button isIconOnly>
                    <AccessibleIcon aria-label="Zoom Out">
                        <MinusIcon aria-label="Zoom Out" />
                    </AccessibleIcon>
                </Button>
            </ButtonGroup>

            <ButtonGroup inline>
                <Button isIconOnly variant="outline">
                    <AccessibleIcon aria-label="Zoom In">
                        <PlusIcon />
                    </AccessibleIcon>
                </Button>
                <Button isIconOnly variant="outline">
                    <AccessibleIcon aria-label="Zoom Out">
                        <MinusIcon aria-label="Zoom Out" />
                    </AccessibleIcon>
                </Button>
            </ButtonGroup>

            <ButtonGroup orientation="vertical">
                <Button isIconOnly variant="outline">
                    <AccessibleIcon aria-label="Zoom In">
                        <PlusIcon />
                    </AccessibleIcon>
                </Button>
                <Button isIconOnly variant="outline">
                    <AccessibleIcon aria-label="Zoom Out">
                        <MinusIcon aria-label="Zoom Out" />
                    </AccessibleIcon>
                </Button>
            </ButtonGroup>

            <ButtonGroup inline orientation="vertical">
                <Button isIconOnly variant="outline">
                    <AccessibleIcon aria-label="Zoom In">
                        <PlusIcon />
                    </AccessibleIcon>
                </Button>
                <Button isIconOnly variant="outline">
                    <AccessibleIcon aria-label="Zoom Out">
                        <MinusIcon aria-label="Zoom Out" />
                    </AccessibleIcon>
                </Button>
            </ButtonGroup>
        </div>
    );
};

ButtonGroups.parameters = {
    docs: {
        description: {
            story: 'Use the `ButtonGroup` and `Button` component to compose button groups.',
        },
    },
};

// SplitButtons.parameters = {
//     docs: {
//         description: {
//             story: 'A common use case for the ButtonGroup component is to display a group of two buttons one for the selected value and another for the dropdown.',
//         },
//     },
// };

function CloudUploadingIcon(props: JSX.IntrinsicElements['svg']) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="size-5 text-white/75"
            {...props}>
            <path
                fill="currentColor"
                d="M17.5 18.25a.75.75 0 0 1 0-1.5c1.66 0 2.25-.83 2.25-3.18a3.57 3.57 0 0 0-3.25-3.25a3.3 3.3 0 0 0-1 .18a.74.74 0 0 1-1-.49a5.25 5.25 0 0 0-10.25 1.56c0 3.44.76 5.18 2.25 5.18a.75.75 0 0 1 0 1.5c-2.5 0-3.75-2.25-3.75-6.68a6.75 6.75 0 0 1 13-2.68a4.4 4.4 0 0 1 .8-.07a5.07 5.07 0 0 1 4.75 4.75c-.05 1.28-.05 4.68-3.8 4.68"></path>
            <path
                fill="currentColor"
                d="M14.83 15.65a.77.77 0 0 1-.53-.22l-2.3-2.3l-2.3 2.3a.75.75 0 0 1-1.06-1.06l2.83-2.83a.74.74 0 0 1 1.06 0l2.83 2.83a.75.75 0 0 1 0 1.06a.8.8 0 0 1-.53.22">
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    from="0 15"
                    to="0 -3"
                    dur="1s"
                    fill="freeze"
                    repeatCount="indefinite"
                    keyTimes="0; 1"
                    values="0 15; 0 -3"
                />

                <animate attributeName="opacity" from="1" to="0.25" dur="1s" fill="freeze" repeatCount="indefinite" />
            </path>
            <path
                fill="currentColor"
                d="M12 19.18a.75.75 0 0 1-.75-.75v-6.36a.75.75 0 0 1 1.5 0v6.36a.75.75 0 0 1-.75.75">
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    from="0 15"
                    to="0 -3"
                    dur="1s"
                    fill="freeze"
                    repeatCount="indefinite"
                    keyTimes="0; 1"
                    values="0 15; 0 -3"
                />

                <animate attributeName="opacity" from="1" to="0.25" dur="1s" fill="freeze" repeatCount="indefinite" />
            </path>
        </svg>
    );
}
