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
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: 'var(--primary)',
                accent: 'var(--accent)',
                success: 'var(--success)',
                destructive: 'var(--destructive)',
                warning: 'var(--warning)',
                muted: 'var(--muted)',
                border: 'var(--border)',
            },
        },
    },
    plugins: [tailwindcssReactAriaComponents, tailwindcssAnimate, tailwindcssContainerQueries],
};
