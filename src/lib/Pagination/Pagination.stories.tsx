import type {Meta} from '@storybook/react';

import {
    Pagination,
    PaginationGap,
    PaginationList,
    PaginationNext,
    PaginationPage,
    PaginationPrevious,
} from './Pagination';

const meta = {
    title: 'Example/Pagination',
    component: Pagination,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof Pagination>;

export default meta;
export const Example = () => {
    return (
        <Pagination>
            <PaginationPrevious href="?page=2" />
            <PaginationList>
                <PaginationPage href="?page=1">1</PaginationPage>
                <PaginationPage href="?page=2">2</PaginationPage>
                <PaginationPage href="?page=3" current>
                    3
                </PaginationPage>
                <PaginationPage href="?page=4">4</PaginationPage>
                <PaginationGap />

                <PaginationPage href="?page=65">65</PaginationPage>
            </PaginationList>
            <PaginationNext href="?page=4" />
        </Pagination>
    );
};
