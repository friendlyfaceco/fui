import type {Meta} from '@storybook/react';
import {FolderPlus, Plus} from 'lucide-react';

import {Button} from '../Button';
import {EmptyState, EmptyStateActions, EmptyStateDescription, EmptyStateHeading, EmptyStateIcon} from './EmptyState';
import {AccessibleIcon} from '../accessible-icon';

const meta = {
    title: 'Example/EmptyState',
    component: EmptyState,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as Meta<typeof EmptyState>;

export default meta;

export const BasicExample = () => {
    return (
        <EmptyState className="h-screen">
            <EmptyStateIcon>
                <FolderPlus strokeWidth="1" />
            </EmptyStateIcon>
            <EmptyStateHeading>No projects</EmptyStateHeading>
            <EmptyStateDescription>Get started by creating a new project.</EmptyStateDescription>
            <EmptyStateActions>
                <Button>
                    <AccessibleIcon>
                        <Plus />
                    </AccessibleIcon>
                    New Project
                </Button>
            </EmptyStateActions>
        </EmptyState>
    );
};
