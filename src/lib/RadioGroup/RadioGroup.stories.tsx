import type {Meta} from '@storybook/react';

import {Button} from '../Button';
import {Label, FieldError} from '../TextField/TextField';
import {Form} from '../form';
import {Radio, RadioField, RadioGroup, Radios} from './RadioGroup';
import {Description} from '../TextField/TextField';

const meta = {
    title: 'Example/RadioGroup',
    component: RadioGroup,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof RadioGroup>;

export default meta;

export const BasicExample = () => {
    return (
        <RadioGroup defaultValue="system" className="max-w-md">
            <Label>Autoplay animated images</Label>
            <Radios>
                <Radio value="system">Sync with system</Radio>
                <Radio value="enable">Enable</Radio>
                <Radio value="disabled">Disabled</Radio>
            </Radios>
        </RadioGroup>
    );
};
export const WithRadioItemDescription = () => {
    return (
        <RadioGroup className="max-w-md">
            <Label>Autoplay animated images</Label>

            <Radios>
                <RadioField>
                    <Radio value="system">Sync with system</Radio>
                    <Description>Adopts your system preference for reduced motion</Description>
                </RadioField>

                <RadioField>
                    <Radio value="enable">Approve</Radio>
                </RadioField>

                <RadioField>
                    <Radio value="disabled">Disabled</Radio>
                </RadioField>
            </Radios>
        </RadioGroup>
    );
};
export const WithRadioItemDescriptionHidden = () => {
    return (
        <RadioGroup className="max-w-md">
            <Label>Autoplay animated images</Label>

            <Radios>
                <RadioField>
                    <Radio value="system">Sync with system</Radio>
                    <Description>Adopts your system preference for reduced motion</Description>
                </RadioField>

                <RadioField>
                    <Radio value="enable">Approve</Radio>
                    <Description>Automatically plays animated images</Description>
                </RadioField>

                <RadioField>
                    <Radio value="disabled">Disabled</Radio>
                    <Description>Prevents animated images from playing automatically</Description>
                </RadioField>
            </Radios>
        </RadioGroup>
    );
};
export const WithRadioGroupDescription = () => {
    return (
        <RadioGroup className="max-w-md">
            <Label>Autoplay animated images</Label>
            <Description>Select whether animated images should play automatically.</Description>
            <Radios>
                <RadioField>
                    <Radio value="system">Sync with system</Radio>
                    <Description>Adopts your system preference for reduced motion</Description>
                </RadioField>

                <RadioField>
                    <Radio value="enable">Approve</Radio>
                    <Description>Automatically plays animated images</Description>
                </RadioField>

                <RadioField>
                    <Radio value="disabled">Disabled</Radio>
                    <Description>Prevents animated images from playing automatically</Description>
                </RadioField>
            </Radios>
        </RadioGroup>
    );
};

export const WithRadioGroupDescriptionHiddenTitle = () => {
    return (
        <RadioGroup className="max-w-md">
            <Label>Autoplay animated images</Label>

            <Radios>
                <RadioField>
                    <Radio value="system">Sync with system</Radio>
                    <Description>Adopts your system preference for reduced motion</Description>
                </RadioField>

                <RadioField>
                    <Radio value="enable">Approve</Radio>
                    <Description>Automatically plays animated images</Description>
                </RadioField>

                <RadioField>
                    <Radio value="disabled">Disabled</Radio>
                    <Description>Prevents animated images from playing automatically</Description>
                </RadioField>
            </Radios>
        </RadioGroup>
    );
};

export const WithLabelPosition = () => {
    return (
        <RadioGroup className="max-w-md">
            <Label>Autoplay animated images</Label>

            <Radios>
                <Radio value="system" labelPosition="left">
                    Sync with system
                </Radio>

                <Radio value="enable" labelPosition="left">
                    Approve
                </Radio>

                <Radio value="disabled" labelPosition="left">
                    Disabled
                </Radio>
            </Radios>
        </RadioGroup>
    );
};

export const WithLabelPositionHidden = () => {
    return (
        <RadioGroup className="max-w-md">
            <Label>Autoplay animated images</Label>

            <Radios>
                <RadioField>
                    <Radio value="system" labelPosition="left">
                        Sync with system
                    </Radio>
                    <Description>Adopts your system preference for reduced motion</Description>
                </RadioField>

                <RadioField>
                    <Radio value="enable" labelPosition="left">
                        Approve
                    </Radio>
                    <Description>Automatically plays animated images</Description>
                </RadioField>

                <RadioField>
                    <Radio value="disabled" labelPosition="left">
                        Disabled
                    </Radio>
                    <Description>Prevents animated images from playing automatically</Description>
                </RadioField>
            </Radios>
        </RadioGroup>
    );
};

export const WithDisabledRadioItems = () => {
    return (
        <RadioGroup className="max-w-md">
            <Label>Autoplay animated images</Label>
            <Description>Select whether animated images should play automatically.</Description>
            <Radios>
                <RadioField>
                    <Radio value="system">Sync with system</Radio>
                    <Description>Adopts your system preference for reduced motion</Description>
                </RadioField>

                <RadioField>
                    <Radio value="enable">Approve</Radio>
                    <Description>Automatically plays animated images</Description>
                </RadioField>

                <RadioField>
                    <Radio value="disabled" isDisabled>
                        Disabled
                    </Radio>
                    <Description>Prevents animated images from playing automatically</Description>
                </RadioField>
            </Radios>
        </RadioGroup>
    );
};

export const WithDisabledRadioGroup = () => {
    return (
        <RadioGroup className="max-w-md" isDisabled>
            <Label>Autoplay animated images</Label>
            <Description>Select whether animated images should play automatically.</Description>
            <Radios>
                <RadioField>
                    <Radio value="system">Sync with system</Radio>
                    <Description>Adopts your system preference for reduced motion</Description>
                </RadioField>

                <RadioField>
                    <Radio value="enable">Approve</Radio>
                    <Description>Automatically plays animated images</Description>
                </RadioField>

                <RadioField>
                    <Radio value="disabled">Disabled</Radio>
                    <Description>Prevents animated images from playing automatically</Description>
                </RadioField>
            </Radios>
        </RadioGroup>
    );
};

export const WithReadonlyRadioGroup = () => {
    return (
        <RadioGroup className="max-w-md" isReadOnly>
            <Label>Autoplay animated images</Label>
            <Description>Select whether animated images should play automatically.</Description>
            <Radios>
                <RadioField>
                    <Radio value="system">Sync with system</Radio>
                    <Description>Adopts your system preference for reduced motion</Description>
                </RadioField>

                <RadioField>
                    <Radio value="enable">Approve</Radio>
                    <Description>Automatically plays animated images</Description>
                </RadioField>

                <RadioField>
                    <Radio value="disabled">Disabled</Radio>
                    <Description>Prevents animated images from playing automatically</Description>
                </RadioField>
            </Radios>
        </RadioGroup>
    );
};

export const WithValidation = () => {
    return (
        <Form>
            <RadioGroup isRequired className="max-w-md">
                <Label>Autoplay animated images</Label>
                <Description>Select whether animated images should play automatically.</Description>
                <Radios>
                    <RadioField>
                        <Radio value="system">Sync with system</Radio>
                        <Description>Adopts your system preference for reduced motion</Description>
                    </RadioField>

                    <RadioField>
                        <Radio value="enable">Approve</Radio>
                        <Description>Automatically plays animated images</Description>
                    </RadioField>

                    <RadioField>
                        <Radio value="disabled">Disabled</Radio>
                        <Description>Prevents animated images from playing automatically</Description>
                    </RadioField>
                </Radios>
                <FieldError />
            </RadioGroup>

            <Button type="submit">Save motion preferences</Button>
        </Form>
    );
};

export function HorizontalRadioGroup() {
    return (
        <RadioGroup orientation="horizontal">
            <Label>Select your favorite city</Label>
            <Radios>
                <Radio value="buenos-aires">Buenos Aires</Radio>
                <Radio value="sydney">Sydney</Radio>
                <Radio value="san-francisco">San Francisco</Radio>
                <Radio value="london">London</Radio>
                <Radio value="tokyo">Tokyo</Radio>
            </Radios>
        </RadioGroup>
    );
}
