import type {
    BreadcrumbsProps as RACBreadcrumbsProps,
    BreadcrumbProps as RACBreadcrumbProps,
    LinkProps,
} from 'react-aria-components';
import {Breadcrumb as RACBreadcrumb, Breadcrumbs as RACBreadcrumbs} from 'react-aria-components';
import {twMerge} from 'tailwind-merge';

import {composeTailwindRenderProps} from '../utils';
import {ChevronRightIcon} from '../icons';
import {Link} from '../Link';

export type Props = {
    /** Set initial value */
    initialValue?: number;
};

export function Breadcrumbs<T extends object>({className, ...props}: RACBreadcrumbsProps<T>) {
    return <RACBreadcrumbs {...props} className={twMerge('flex gap-1 text-[var(--on-surface)]', className)} />;
}
type BreadcrumbProps = RACBreadcrumbProps & LinkProps;

export function BreadCrumb({className, ...props}: BreadcrumbProps) {
    return (
        <RACBreadcrumb
            {...props}
            className={composeTailwindRenderProps(
                className as RACBreadcrumbProps['className'],
                'flex items-center gap-1 '
            )}>
            <Link
                {...props}
                className="underline underline-offset-2 disabled:opacity-100 [&:not(:hover)]:decoration-muted"
            />
            {props.href && <ChevronRightIcon className="size-4 text-[var(--on-surface-muted)]" strokeWidth={1.5} />}
        </RACBreadcrumb>
    );
}
