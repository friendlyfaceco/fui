/** @type {import('tailwindcss').Config} */

import tailwindcssReactAriaComponents from 'tailwindcss-react-aria-components';
import tailwindcssAnimate from 'tailwindcss-animate';
import tailwindcssContainerQueries from '@tailwindcss/container-queries';

export default {
    darkMode: ['class'],
    content: [
        './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
        './src/env/App/*.{js,ts,jsx,tsx,mdx}',
        './.stores/**/*.{js,ts,jsx,tsx}',
        './stories/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'rgb(var(--background))',
                foreground: 'rgb(var(--foreground))',
                accent: 'rgb(var(--accent))',
                success: 'rgb(var(--success))',
                destructive: 'rgb(var(--destructive))',
                warning: 'rgb(var(--warning))',
                muted: 'rgb(var(--muted))',
                border: 'rgb(var(--border))',
            },
        },
    },
    plugins: [tailwindcssReactAriaComponents, tailwindcssAnimate, tailwindcssContainerQueries],
};
