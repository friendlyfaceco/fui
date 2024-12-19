import type {InputProps, SearchFieldProps as RACSearchFieldProps} from 'react-aria-components';
import {Group, SearchField as RACSearchField} from 'react-aria-components';

import {composeTailwindRenderProps, inputFieldStyle} from '../utils';
import {Button} from '../Button';
import {Input} from '../TextField/TextField';
import {SearchIcon, XIcon} from '../icons';

export type SearchFieldProps = {} & RACSearchFieldProps;

export function SearchField(props: SearchFieldProps) {
    return (
        <RACSearchField
            {...props}
            className={composeTailwindRenderProps(props.className, inputFieldStyle)}></RACSearchField>
    );
}

export function SearchInput(props: InputProps) {
    return (
        <Group
            data-ui="control"
            className={[
                'isolate',
                'grid',
                'grid-cols-[calc(theme(size.5)+20px)_1fr_calc(theme(size.5)+20px)]',
                'sm:grid-cols-[calc(theme(size.4)+20px)_1fr_calc(theme(size.4)+20px)]',
            ].join(' ')}>
            <SearchIcon className="col-start-1 row-start-1 size-5 place-self-center text-muted sm:size-4 z-10" />

            <Input
                {...props}
                className={composeTailwindRenderProps(props.className, [
                    '[&::-webkit-search-cancel-button]:hidden',
                    'col-span-full',
                    'row-start-1',
                    'pe-10',
                    'sm:pe-9',
                    'ps-10',
                    'sm:ps-8',
                ])}
            />
            <Button
                isIconOnly
                variant="plain"
                size="sm"
                className="group-empty-invisible -col-end-1 row-start-1 place-self-center group-empty:invisible">
                <XIcon aria-label="Clear" />
            </Button>
        </Group>
    );
}
