import type {Preview} from '@storybook/react';
import '../src/theme/index.css';
const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (story, context) => {
            const theme = context.globals && context.globals.backgrounds && context.globals.backgrounds.value;
            if (theme == '#333') {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
            console.log(theme, 'themesdataaaa');
            return story();
        },
    ],
};

export default preview;
