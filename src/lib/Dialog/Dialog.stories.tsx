import type {Meta} from '@storybook/react';
// import {Dialog} from './Dialog';
import {DialogTrigger, FieldError, Heading, Input, Label, Menu, MenuTrigger} from 'react-aria-components';
import React from 'react';

import {Button} from '../Button';
import {Modal, DialogHeader, DialogBody, DialogCloseButton, DialogFooter, DialogTitle} from '../AlertDialog';
import {Text} from '../Text/Text';
import {Form} from '../form';
import {TextField} from '../TextField/TextField';
import {AccessibleIcon} from '../accessible-icon';
import {MenuButton, MenuPopover} from '../menu2';
import {Dialog} from './Dialog';
import './Dialog.module.css';
import {MenuItem} from '../Menu';

const meta = {
    title: 'Patterns/DialogPatterns',
    component: Dialog,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as Meta<typeof Dialog>;

export default meta;

export const BasicExample = () => {
    return (
        <DialogTrigger>
            <Button>Edit profile</Button>
            <Modal size="md">
                <Dialog>
                    <DialogHeader>Edit profile</DialogHeader>
                    <DialogCloseButton />
                    <DialogBody>
                        <Text>Make changes to your profile here. Click save when you&apos;re done.</Text>
                        <Form className="py-4" id="edit-profile-form">
                            <TextField isRequired className="grid grid-cols-4 gap-x-4">
                                <Label className="ms-auto">Name</Label>
                                <Input className="dark:text-black col-span-3"></Input>
                                <FieldError className="col-span-3 col-start-2" />
                            </TextField>
                            <TextField isRequired className="grid grid-cols-4 gap-4">
                                <Label className="ms-auto">Username</Label>
                                <Input className=" dark:text-black col-span-3"></Input>
                                <FieldError className="col-span-3 col-start-2" />
                            </TextField>
                        </Form>
                    </DialogBody>
                    <DialogFooter>
                        <DialogCloseButton>Cancel</DialogCloseButton>
                        <Button form="edit-profile-form" type="submit">
                            Save changes
                        </Button>
                    </DialogFooter>
                </Dialog>
            </Modal>
        </DialogTrigger>
    );
};

export const DialogSizes = () => {
    return (
        <DialogTrigger>
            <Button>Edit profile</Button>
            <Modal size="xl">
                <Dialog>
                    <DialogHeader>Edit profile</DialogHeader>
                    <DialogCloseButton />
                    <DialogBody>
                        <Text>Make changes to your profile here. Click save when you&#39;re done.</Text>
                        <Form className="py-4" id="edit-profile-form">
                            <TextField isRequired className="grid grid-cols-4 gap-x-4">
                                <Label className="ms-auto">Name</Label>
                                <Input className=" dark:text-black col-span-3"></Input>
                                <FieldError className="col-span-3 col-start-2" />
                            </TextField>
                            <TextField isRequired className="grid grid-cols-4 gap-4">
                                <Label className="ms-auto">Username</Label>
                                <Input className="dark:text-black col-span-3"></Input>
                                <FieldError className="col-span-3 col-start-2" />
                            </TextField>
                        </Form>
                    </DialogBody>
                    <DialogFooter>
                        <DialogCloseButton>Cancel</DialogCloseButton>
                        <Button form="edit-profile-form" type="submit">
                            Save changes
                        </Button>
                    </DialogFooter>
                </Dialog>
            </Modal>
        </DialogTrigger>
    );
};
DialogSizes.parameters = {
    docs: {
        description: {
            story: 'Use `size="xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | fullWidth"` on the`Modal` component to change the side of dialog. \n\nDefault `dialog` size is `lg`. Default `alert` dialog size is `md`.',
        },
    },
};

export const FullWidth = () => {
    return (
        <DialogTrigger>
            <Button>Edit profile</Button>
            <Modal size="fullWidth">
                <Dialog>
                    <DialogHeader>Edit profile</DialogHeader>
                    <DialogCloseButton />
                    <DialogBody>
                        <Text>Make changes to your profile here. Click save when you&apos;re done.</Text>
                        <Form className="py-4" id="edit-profile-form">
                            <TextField isRequired className="grid grid-cols-4 gap-x-4">
                                <Label className="ms-auto">Name</Label>
                                <Input className="dark:text-black col-span-3"></Input>
                                <FieldError className="col-span-3 col-start-2" />
                            </TextField>
                            <TextField isRequired className="grid grid-cols-4 gap-4">
                                <Label className="ms-auto">Username</Label>
                                <Input className="dark:text-black col-span-3"></Input>
                                <FieldError className="col-span-3 col-start-2" />
                            </TextField>
                        </Form>
                    </DialogBody>
                    <DialogFooter>
                        <DialogCloseButton>Cancel</DialogCloseButton>
                        <Button form="edit-profile-form" type="submit">
                            Save changes
                        </Button>
                    </DialogFooter>
                </Dialog>
            </Modal>
        </DialogTrigger>
    );
};

export const CustomHeaders = () => {
    return (
        <DialogTrigger>
            <Button>Edit profile</Button>
            <Modal>
                <Dialog>
                    <DialogHeader className="space-x-2">
                        <AccessibleIcon>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="size-6 text-muted">
                                <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                                <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                            </svg>
                        </AccessibleIcon>
                        <DialogTitle>Edit profile</DialogTitle>
                    </DialogHeader>
                    <DialogCloseButton />
                    <DialogBody>
                        <Text>Make changes to your profile here. Click save when you&apos;re done.</Text>
                        <Form className="py-4" id="edit-profile-form">
                            <TextField isRequired className="grid grid-cols-4 gap-x-4">
                                <Label className="ms-auto">Name</Label>
                                <Input className="dark:text-black col-span-3"></Input>
                                <FieldError className="col-span-3 col-start-2" />
                            </TextField>
                            <TextField isRequired className="grid grid-cols-4 gap-4">
                                <Label className="ms-auto">Username</Label>
                                <Input className=" dark:text-black col-span-3"></Input>
                                <FieldError className="col-span-3 col-start-2" />
                            </TextField>
                        </Form>
                    </DialogBody>
                    <DialogFooter>
                        <DialogCloseButton>Cancel</DialogCloseButton>
                        <Button form="edit-profile-form" type="submit">
                            Save changes
                        </Button>
                    </DialogFooter>
                </Dialog>
            </Modal>
        </DialogTrigger>
    );
};

CustomHeaders.parameters = {
    docs: {
        description: {
            story: 'Use the `DialogTitle` component to compose header contains non text elements.',
        },
    },
};

export const NoHeader = () => {
    return (
        <DialogTrigger>
            <Button>Edit profile</Button>
            <Modal size="md">
                <Dialog>
                    <DialogBody className="pt-8">
                        <Text>Make changes to your profile here. Click save when you&apos;re done.</Text>
                        <Form className="py-4" id="edit-profile-form">
                            <TextField isRequired className="grid grid-cols-4 gap-x-4">
                                <Label className="ms-auto">Name</Label>
                                <Input className=" dark:text-black col-span-3"></Input>
                                <FieldError className="col-span-3 col-start-2" />
                            </TextField>
                            <TextField isRequired className="grid grid-cols-4 gap-4">
                                <Label className="ms-auto">Username</Label>
                                <Input className="dark:text-black col-span-3"></Input>
                                <FieldError className="col-span-3 col-start-2" />
                            </TextField>
                        </Form>
                    </DialogBody>
                    <DialogFooter>
                        <DialogCloseButton>Cancel</DialogCloseButton>
                        <Button form="edit-profile-form" type="submit">
                            Save changes
                        </Button>
                    </DialogFooter>
                </Dialog>
            </Modal>
        </DialogTrigger>
    );
};

NoHeader.parameters = {
    docs: {
        description: {
            story: 'Without `DialogHeader`, dialog trigger button text will be used as dialog header.',
        },
    },
};

export const AutoFocusElements = (args: any) => {
    return (
        <DialogTrigger>
            <Button>Edit profile</Button>
            <Modal {...args} size="md">
                <Dialog>
                    <DialogHeader>Edit profile</DialogHeader>
                    <DialogCloseButton />
                    <DialogBody>
                        <Text>Make changes to your profile here. Click save when you&apos;re done.</Text>
                        <Form className="py-4" id="edit-profile-form">
                            <TextField isRequired className="grid grid-cols-4 gap-x-4" autoFocus>
                                <Label className="ms-auto">Name</Label>
                                <Input className="dark:text-black col-span-3"></Input>
                                <FieldError className="col-span-3 col-start-2" />
                            </TextField>
                            <TextField isRequired className="grid grid-cols-4 gap-4">
                                <Label className="ms-auto">Username</Label>
                                <Input className="dark:text-black col-span-3"></Input>
                                <FieldError className="col-span-3 col-start-2" />
                            </TextField>
                        </Form>
                    </DialogBody>
                    <DialogFooter>
                        <DialogCloseButton>Cancel</DialogCloseButton>
                        <Button form="edit-profile-form" type="submit">
                            Save changes
                        </Button>
                    </DialogFooter>
                </Dialog>
            </Modal>
        </DialogTrigger>
    );
};

AutoFocusElements.parameters = {
    docs: {
        description: {
            story: 'Add the `autoFocus` prop to any focusable element in the dialog to automatically focus it when the dialog opens. Use <a href="https://react-spectrum.adobe.com/react-aria/FocusScope.html#focusscope" target="_blank">`FocusScope`</a> if autofocus not working properly in some edge cases.',
        },
    },
};

AutoFocusElements.storyName = 'Auto-focusing elements';

export const WithIsDismissableAndKeyboardDismissDisabled = () => {
    return (
        <DialogTrigger>
            <Button>Edit profile</Button>
            <Modal isDismissable isKeyboardDismissDisabled size="md">
                <Dialog>
                    <DialogHeader>Edit profile</DialogHeader>
                    <DialogCloseButton />
                    <DialogBody>
                        <Text>Make changes to your profile here. Click save when you&apos;re done.</Text>
                        <Form className="py-4" id="edit-profile-form">
                            <TextField isRequired className="grid grid-cols-4 gap-x-4" autoFocus>
                                <Label className="ms-auto">Name</Label>
                                <Input className="dark:text-black col-span-3"></Input>
                                <FieldError className="col-span-3 col-start-2" />
                            </TextField>
                            <TextField isRequired className="grid grid-cols-4 gap-4">
                                <Label className="ms-auto">Username</Label>
                                <Input className="dark:text-black col-span-3"></Input>
                                <FieldError className="col-span-3 col-start-2" />
                            </TextField>
                        </Form>
                    </DialogBody>
                    <DialogFooter>
                        <DialogCloseButton>Cancel</DialogCloseButton>
                        <Button form="edit-profile-form" type="submit">
                            Save changes
                        </Button>
                    </DialogFooter>
                </Dialog>
            </Modal>
        </DialogTrigger>
    );
};

WithIsDismissableAndKeyboardDismissDisabled.parameters = {
    docs: {
        description: {
            story: 'Use the `isDismissable` prop of the `Modal` component to control whether the dialog can be closed by clicking outside. Default `false`. \n\nUse the `isKeyboardDismissDisabled` prop of the `Modal` to control whether the dialog can be closed by `ESC` key. Default `false`.',
        },
    },
};

export const WithScrollingContent = () => {
    return (
        <DialogTrigger>
            <Button>Terms Service</Button>
            <Modal isDismissable size="xl">
                <Dialog>
                    <DialogHeader>Sample free terms of service template</DialogHeader>
                    <DialogBody>
                        <Text>
                            This generic terms of service template will help you see how everything we talked about so
                            far comes together to form a legal agreement. Keep in mind that this is just an example
                            terms of service template and does not cover many of the important topics.
                        </Text>
                        <Heading level={3} className="mt-4">
                            Privacy Policy
                        </Heading>
                        <Text className="text-foreground">
                            Before you continue using our website we advise you to read our privacy policy [link to
                            privacy policy] regarding our user data collection. It will help you better understand our
                            practices.
                        </Text>
                        <Heading level={3} className="mt-4">
                            Copyright
                        </Heading>
                        <Text className="text-foreground">
                            Content published on this website (digital downloads, images, texts, graphics, logos) is the
                            property of [name] and/or its content creators and protected by international copyright
                            laws. The entire compilation of the content found on this website is the exclusive property
                            of [name], with copyright authorship for this compilation by [name].
                        </Text>
                        <Heading level={3} className="mt-4">
                            Communications
                        </Heading>
                        <Text className="text-foreground">
                            The entire communication with us is electronic. Every time you send us an email or visit our
                            website, you are going to be communicating with us. You hereby consent to receive
                            communications from us. If you subscribe to the news on our website, you are going to
                            receive regular emails from us. We will continue to communicate with you by posting news and
                            notices on our website and by sending you emails. You also agree that all notices,
                            disclosures, agreements, and other communications we provide to you electronically meet the
                            legal requirements that such communications be in writing.
                        </Text>
                        <Heading level={3} className="mt-4">
                            Applicable Law
                        </Heading>
                        <Text className="text-foreground">
                            By visiting this website, you agree that the laws of the [your location], without regard to
                            principles of conflict laws, will govern these terms of service, or any dispute of any sort
                            that might come between [name] and you, or its business partners and associates.
                        </Text>
                        <Heading level={3} className="mt-4">
                            Disputes
                        </Heading>
                        <Text className="text-foreground">
                            Any dispute related in any way to your visit to this website or to products you purchase
                            from us shall be arbitrated by state or federal court [your location] and you consent to
                            exclusive jurisdiction and venue of such courts.
                        </Text>
                        <Heading level={3} className="mt-4">
                            Comments, Reviews, and Emails
                        </Heading>
                        <Text className="text-foreground">
                            Visitors may post content as long as it is not obscene, illegal, defamatory, threatening,
                            infringing of intellectual property rights, invasive of privacy, or injurious in any other
                            way to third parties. Content has to be free of software viruses, political campaigns, and
                            commercial solicitation. We reserve all rights (but not the obligation) to remove and/or
                            edit such content. When you post your content, you grant [name] non-exclusive, royalty-free
                            and irrevocable right to use, reproduce, publish, modify such content throughout the world
                            in any media.
                        </Text>
                        <Heading level={3} className="mt-4">
                            License and Site Access
                        </Heading>
                        <Text className="text-foreground">
                            We grant you a limited license to access and make personal use of this website. You are not
                            allowed to download or modify it. This may be done only with written consent from us.
                        </Text>
                        <Heading level={3} className="mt-4">
                            User Account
                        </Heading>
                        <Text className="text-foreground">
                            If you are an owner of an account on this website, you are solely responsible for
                            maintaining the confidentiality of your private user details (username and password). You
                            are responsible for all activities that occur under your account or password. We reserve all
                            rights to terminate accounts, edit or remove content and cancel orders at their sole
                            discretion.
                        </Text>
                    </DialogBody>

                    <DialogFooter>
                        <DialogCloseButton>Cancel</DialogCloseButton>
                        <Button>I agree</Button>
                    </DialogFooter>
                </Dialog>
            </Modal>
        </DialogTrigger>
    );
};

WithScrollingContent.parameters = {
    docs: {
        description: {
            story: 'Long content within the `DialogBody` component automatically becomes scrollable.',
        },
    },
};

export const WithControlledOpenState = () => {
    const [isOpen, setOpen] = React.useState(false);

    return (
        <>
            <MenuTrigger>
                <MenuButton>Options</MenuButton>
                <MenuPopover className="animate-none">
                    <Menu>
                        <MenuItem onAction={() => setOpen(true)}>Edit profile</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Menu>
                </MenuPopover>
            </MenuTrigger>

            <Modal isOpen={isOpen} onOpenChange={setOpen}>
                <Dialog>
                    <DialogHeader>Edit profile</DialogHeader>
                    <DialogCloseButton />
                    <DialogBody>
                        <Text>Make changes to your profile here. Click save when you&apos;re done.</Text>
                        <Form className="py-4" id="edit-profile-form">
                            <TextField isRequired className="grid grid-cols-4 gap-x-4" autoFocus>
                                <Label className="ms-auto">Name</Label>
                                <Input className="dark:text-black col-span-3"></Input>
                                <FieldError className="col-span-3 col-start-2" />
                            </TextField>
                            <TextField isRequired className="grid grid-cols-4 gap-4">
                                <Label className="ms-auto">Username</Label>
                                <Input className="dark:text-black col-span-3"></Input>
                                <FieldError className="col-span-3 col-start-2" />
                            </TextField>
                        </Form>
                    </DialogBody>
                    <DialogFooter>
                        <DialogCloseButton>Cancel</DialogCloseButton>
                        <Button form="edit-profile-form" type="submit">
                            Save changes
                        </Button>
                    </DialogFooter>
                </Dialog>
            </Modal>
        </>
    );
};

WithControlledOpenState.parameters = {
    docs: {
        description: {
            story: 'Use the `isOpen` and `onOpenChange`  prop of the `Modal` component to control dialog open state.',
        },
    },
};
