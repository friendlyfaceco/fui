import {DropZone as RACDropZone} from 'react-aria-components';
import type {DropZoneProps} from 'react-aria-components';

import {composeTailwindRenderProps, dropTargetOutlineStyle, focusVisibleOutlineStyle} from '../utils';

export function Dropzone(props: DropZoneProps) {
    return (
        <RACDropZone
            {...props}
            className={composeTailwindRenderProps(props.className, [
                'sm:min-w-96',
                'flex flex-shrink-0 flex-col items-center justify-center rounded-xl',
                'border border-dashed p-2',
                focusVisibleOutlineStyle,
                'drop-target:border-solid',
                'drop-target:bg-accent/20 drop-target:dark:bg-accent/75',
                'disabled:opacity-50',
                dropTargetOutlineStyle,
            ])}
        />
    );
}
