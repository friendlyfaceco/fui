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
            <div className="light">
                <button onClick={() => darkModeHandler()}>
                    {
                        dark && <Sun /> // render sunny when dark is true
                    }
                    {
                        !dark && <Moon /> // render moon when dark is false
                    }
                </button>

                <div className="flex items-center gap-x-2">
                    <Button size="lg">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>
                    <Button>
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>
                    <Button size="sm">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    <Button variant="outline" size="lg">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>
                    <Button variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>
                    <Button variant="outline" size="sm">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>
                </div>
                <div className="flex items-center gap-x-2">
                    <Button color="destructive" size="lg">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>
                    <Button color="destructive">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>
                    <Button color="destructive" size="sm">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>

                    <Button color="destructive" variant="outline" size="lg">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>
                    <Button color="destructive" variant="outline">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>
                    <Button color="destructive" variant="outline" size="sm">
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                        Button
                        <AccessibleIcon>
                            <CloudUploadIcon />
                        </AccessibleIcon>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default App;
