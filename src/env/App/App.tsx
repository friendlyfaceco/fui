import type {FC} from 'react';
import React from 'react';
import {Moon, Sun, CloudUploadIcon} from 'lucide-react';

import {Button} from '@/lib';
import {AccessibleIcon} from '@/lib/accessible-icon';

//specific to this app
import './index.css';
//TW styles
import '../../theme/index.css';

const App: FC = () => {
    const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle('dark');
    };
    return (
        <div className="containerwrapper dark:bg-slate-800">
            <div className="light flex flex-col gap-y-4">
                <button onClick={() => darkModeHandler()}>
                    {
                        dark && <Sun /> // render sunny when dark is true
                    }
                    {
                        !dark && <Moon /> // render moon when dark is false
                    }
                </button>

                <h4>Primary</h4>

                <div className="flex items-center gap-x-2">
                    {/* DEFAULT */}
                    <Button>
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* DEFAULT + ISICON */}
                    <Button isIconOnly>
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING */}
                    <Button isPending={true}>
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + ISICON */}
                    <Button isIconOnly isPending={true}>
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* DISABLED */}
                    <Button isDisabled={true}>
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + ISICON */}
                    <Button isIconOnly isDisabled={true}>
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>
                </div>

                <div className="flex items-center gap-x-2">
                    {/* DEFAULT + OUTLINE */}
                    <Button variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* DEFAULT + ISICON + OUTLINE */}
                    <Button isIconOnly variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + OUTLINE */}
                    <Button isPending={true} variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + ISICON + OUTLINE */}
                    <Button isIconOnly isPending={true} variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* IS DISABLED */}
                    <Button isDisabled={true} variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + ISICON + OUTLINE */}
                    <Button isIconOnly isDisabled={true} variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>
                </div>

                <div className="flex items-center gap-x-2">
                    {/* DEFAULT + OUTLINE */}
                    <Button variant="plain">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* DEFAULT + ISICON + OUTLINE */}
                    <Button isIconOnly variant="plain">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + OUTLINE */}
                    <Button isPending={true} variant="plain">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + ISICON + OUTLINE */}
                    <Button isIconOnly isPending={true} variant="plain">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + OUTLINE */}
                    <Button isDisabled={true} variant="plain">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + ISICON + OUTLINE */}
                    <Button isIconOnly isDisabled={true} variant="plain">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>
                </div>

                <h4>Destructive</h4>

                <div className="flex items-center gap-x-2">
                    {/* DEFAULT */}
                    <Button color="destructive">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* DEFAULT + ISICON */}
                    <Button color="destructive" isIconOnly>
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING */}
                    <Button color="destructive" isPending={true}>
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + ISICON */}
                    <Button color="destructive" isIconOnly isPending={true}>
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* DISABLED */}
                    <Button color="destructive" isDisabled={true}>
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + ISICON */}
                    <Button color="destructive" isIconOnly isDisabled={true}>
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>
                </div>

                <div className="flex items-center gap-x-2">
                    {/* DEFAULT + OUTLINE */}
                    <Button color="destructive" variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* DEFAULT + ISICON + OUTLINE */}
                    <Button color="destructive" isIconOnly variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + OUTLINE */}
                    <Button color="destructive" isPending={true} variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + ISICON + OUTLINE */}
                    <Button color="destructive" isIconOnly isPending={true} variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* IS DISABLED */}
                    <Button color="destructive" isDisabled={true} variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + ISICON + OUTLINE */}
                    <Button color="destructive" isIconOnly isDisabled={true} variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>
                </div>

                <div className="flex items-center gap-x-2">
                    {/* DEFAULT + OUTLINE */}
                    <Button color="destructive" variant="plain">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* DEFAULT + ISICON + OUTLINE */}
                    <Button color="destructive" isIconOnly variant="plain">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + OUTLINE */}
                    <Button color="destructive" isPending={true} variant="plain">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + ISICON + OUTLINE */}
                    <Button color="destructive" isIconOnly isPending={true} variant="plain">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + OUTLINE */}
                    <Button color="destructive" isDisabled={true} variant="plain">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + ISICON + OUTLINE */}
                    <Button color="destructive" isIconOnly isDisabled={true} variant="plain">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>
                </div>

                <h4>Success</h4>

                <div className="flex items-center gap-x-2">
                    {/* DEFAULT */}
                    <Button color="success">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* DEFAULT + ISICON */}
                    <Button color="success" isIconOnly>
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING */}
                    <Button color="success" isPending={true}>
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + ISICON */}
                    <Button color="success" isIconOnly isPending={true}>
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* DISABLED */}
                    <Button color="success" isDisabled={true}>
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + ISICON */}
                    <Button color="success" isIconOnly isDisabled={true}>
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>
                </div>

                <div className="flex items-center gap-x-2">
                    {/* DEFAULT + OUTLINE */}
                    <Button color="success" variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* DEFAULT + ISICON + OUTLINE */}
                    <Button color="success" isIconOnly variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + OUTLINE */}
                    <Button color="success" isPending={true} variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + ISICON + OUTLINE */}
                    <Button color="success" isIconOnly isPending={true} variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* IS DISABLED */}
                    <Button color="success" isDisabled={true} variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + ISICON + OUTLINE */}
                    <Button color="success" isIconOnly isDisabled={true} variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>
                </div>

                <div className="flex items-center gap-x-2">
                    {/* DEFAULT + OUTLINE */}
                    <Button color="success" variant="plain">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* DEFAULT + ISICON + OUTLINE */}
                    <Button color="success" isIconOnly variant="plain">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + OUTLINE */}
                    <Button color="success" isPending={true} variant="plain">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + ISICON + OUTLINE */}
                    <Button color="success" isIconOnly isPending={true} variant="plain">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + OUTLINE */}
                    <Button color="success" isDisabled={true} variant="plain">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    {/* PENDING + ISICON + OUTLINE */}
                    <Button color="success" isIconOnly isDisabled={true} variant="plain">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>
                </div>
                <div>
                    {/* PENDING + OUTLINE */}
                    <Button color="success" size="sm" variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Upload to cloud
                    </Button>
                    <Button color="success" variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Upload to cloud
                    </Button>
                    <Button color="success" size="lg" variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Upload to cloud
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default App;
