import React from 'react';
import type {LinkProps as RACLinkProps} from 'react-aria-components';
import {Link as RACLink} from 'react-aria-components';
import {twMerge} from 'tailwind-merge';

import {composeTailwindRenderProps, focusVisibleOutlineStyle} from '../utils';
import type {AsChildProps} from '../slot';
import {Slot} from '../slot';

export type LinkProps = AsChildProps<RACLinkProps>;

const linkStyle = [
    'relative inline-flex cursor-pointer items-center gap-1 rounded-lg outline-none hover:underline',
    'text-base/6 sm:text-sm/6',
    'disabled:no-underline disabled:opacity-50 disabled:cursor-default',
    '[&.border]:hover:no-underline',
].join(' ');

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, ref) {
    if (props.asChild) {
        return <Slot className={`${twMerge(linkStyle)} dark:text-white`}>{props.children}</Slot>;
    }

    const {asChild, ...rest} = props;

    return (
        <RACLink
            {...rest}
            ref={ref}
            className={composeTailwindRenderProps(props.className, [
                linkStyle,
                focusVisibleOutlineStyle,
                'dark:text-white',
            ])}
        />
    );
});
