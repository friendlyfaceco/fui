import type {NumberFieldProps as RACNumberFieldProps, InputProps} from 'react-aria-components';
import {NumberField as RACNumberField, Group} from 'react-aria-components';

import {Input} from '../TextField/TextField';
import {composeTailwindRenderProps, inputFieldStyle} from '../utils';
import {Button} from '../Button';
import {Separator} from '../Separator';
import {MinusIcon, PlusIcon} from '../icons';

export type NumberFieldProps = {} & RACNumberFieldProps;

export function NumberField(props: NumberFieldProps) {
    return <RACNumberField {...props} className={composeTailwindRenderProps(props.className, inputFieldStyle)} />;
}

export function NumberInput(props: InputProps) {
    return (
        <Group
            data-ui="control"
            className={[
                'group isolate grid grid-cols-[auto_auto_1fr_auto_auto]',
                '[&>div:has([role=separator])]:h-full',
                '[&>div:has([role=separator])]:z-10',
                '[&>div:has([role=separator])]:py-[1px]',
                '[&:focus-within>div:has([role=separator])]:py-[2px]',
            ].join(' ')}>
            <Button
                slot="decrement"
                isIconOnly
                variant="plain"
                className="z-10 col-start-1 row-start-1 rounded-none hover:bg-transparent pressed:bg-transparent">
                <MinusIcon />
            </Button>
            <div className="col-start-2 row-start-1">
                <Separator orientation="vertical" className="h-full" />
            </div>

            <Input
                {...props}
                className={composeTailwindRenderProps(props.className, [
                    'z-0',
                    'col-span-full',
                    'row-start-1',
                    'px-[calc(theme(size.11)+10px)] sm:px-[calc(theme(size.9)+10px)]',
                ])}
            />

            <div className="-col-end-2 row-start-1">
                <Separator orientation="vertical" className="h-full" />
            </div>

            <Button
                slot="increment"
                className="-col-end-1 row-start-1 rounded-none hover:bg-transparent pressed:bg-transparent"
                isIconOnly
                variant="plain">
                <PlusIcon />
            </Button>
        </Group>
    );
}
