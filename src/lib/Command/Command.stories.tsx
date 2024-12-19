import type {Meta} from '@storybook/react';
import React from 'react';
import {Search} from 'lucide-react';

import {Clipboard, Command, Extension, Linear, Raycast, Slack, Youtube} from './Command';
import {
    ComboBox,
    ComboBoxGroup,
    ComboBoxInput,
    CommandButton,
    ComboBoxPopover,
    ComboBoxListBox,
    ComboBoxSection,
    ComboBoxListItem,
} from '../ComboBox/ComboBox';
import {AccessibleIcon} from '../accessible-icon';
import {Text} from '../Text/Text';
const meta = {
    title: 'Example/Command',
    component: Command,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as Meta<typeof Command>;

export default meta;
export function CommandK() {
    const ref = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                ref.current?.focus();
            }
        };
        document.addEventListener('keydown', down);

        return () => {
            document.removeEventListener('keydown', down);
        };
    }, []);

    return (
        <div className="h-min-screen flex w-full flex-col items-center">
            <ComboBox allowsCustomValue menuTrigger="focus" aria-label="Search" className="w-full p-4 sm:w-96">
                <ComboBoxGroup>
                    <AccessibleIcon>
                        <Search />
                    </AccessibleIcon>

                    <ComboBoxInput
                        ref={ref}
                        placeholder="Search for apps and commands&hellip;"
                        className="peer pe-12"
                    />
                    <CommandButton />
                </ComboBoxGroup>

                <ComboBoxPopover>
                    <ComboBoxListBox
                        selectionMode="none"
                        renderEmptyState={() => (
                            <div className="text-center">
                                <Text>Not result found </Text>
                            </div>
                        )}>
                        <ComboBoxSection title="Suggestion">
                            <ComboBoxListItem textValue="linear">
                                <div className="flex items-center gap-x-2">
                                    <AccessibleIcon>
                                        <Linear />
                                    </AccessibleIcon>
                                    Linear
                                </div>
                            </ComboBoxListItem>
                            <ComboBoxListItem textValue="slack">
                                <div className="flex items-center gap-x-2">
                                    <AccessibleIcon>
                                        <Slack />
                                    </AccessibleIcon>
                                    Slack
                                </div>
                            </ComboBoxListItem>
                            <ComboBoxListItem textValue="youtube">
                                <div className="flex items-center gap-x-2">
                                    <AccessibleIcon>
                                        <Youtube />
                                    </AccessibleIcon>
                                    Youtube
                                </div>
                            </ComboBoxListItem>
                            <ComboBoxListItem textValue="raycast">
                                <div className="flex items-center gap-x-2">
                                    <AccessibleIcon>
                                        <Raycast />
                                    </AccessibleIcon>
                                    Raycast
                                </div>
                            </ComboBoxListItem>
                        </ComboBoxSection>
                        <ComboBoxSection title="Commands">
                            <ComboBoxListItem textValue="clipboard history">
                                <div className="flex items-center gap-x-2">
                                    <AccessibleIcon>
                                        <Clipboard />
                                    </AccessibleIcon>
                                    Clipboard history
                                </div>
                            </ComboBoxListItem>
                            <ComboBoxListItem textValue="import extension">
                                <div className="flex items-center gap-x-2">
                                    <AccessibleIcon>
                                        <Extension />
                                    </AccessibleIcon>
                                    Import Extension
                                </div>
                            </ComboBoxListItem>
                        </ComboBoxSection>
                    </ComboBoxListBox>
                </ComboBoxPopover>
            </ComboBox>
        </div>
    );
}
