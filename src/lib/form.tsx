import type {FormProps} from 'react-aria-components';
import {Form as RACForm} from 'react-aria-components';
import {twMerge} from 'tailwind-merge';

export function Form(props: FormProps) {
    return <RACForm {...props} className={twMerge('max-w-4xl space-y-6', props.className)} />;
}
