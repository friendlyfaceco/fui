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
                //LEGACY
                background: 'var(--surface)',
                foreground: 'var(--on-surface)',
                muted: 'var(--on-surface-muted)',
                // primary: 'var(--primary)',
                // accent: 'var(--accent)',
                // success: 'var(--success)',
                //destructive: 'var(--destructive)',
                //warning: 'var(--warning)',
                // border: 'var(--border)',
                //
                //FUI
                surface: 'var(--surface)',
                surfaceDimmed: 'var(--surface-dimmed)',
                surfaceMuted: 'var(--surface-muted)',
                surfaceBright: 'var(--surface-bright)',
                onSurface: 'var(--on-surface)',
                onSurfaceMuted: 'var(--on-surface-muted)',
                onSurfaceDimmed: 'var(--on-surface-dimmed)',
                border: 'var(--border)',
                //PRIMARY
                primary: 'var(--primary)',
                primaryDimmed: 'var(--primary-dimmed)',
                primaryMuted: 'var(--primary-muted)',
                onPrimary: 'var(--on-primary)',
                primaryContainer: 'var(--primary-container)',
                onPrimaryContainer: 'var(--on-primary-container)',
                //ACCENT(SECONDARY)
                accent: 'var(--accent)',
                accentDimmed: 'var(--accent-dimmed)',
                accentMuted: 'var(--accent-muted)',
                onAccent: 'var(--on-accent)',
                accentContainer: 'var(--accent-container)',
                onAccentContainer: 'var(--on-accent-container)',
                //SUCCESS
                success: 'var(--success)',
                successDimmed: 'var(--success-dimmed)',
                successMuted: 'var(--success-muted)',
                onSuccess: 'var(--on-success)',
                successContainer: 'var(--success-container)',
                onSuccessContainer: 'var(--on-success-container)',
                //DESTRUCTIVE
                destructive: 'var(--destructive)',
                destructiveDimmed: 'var(--destructive-dimmed)',
                destructiveMuted: 'var(--destructive-muted)',
                onDestructive: 'var(--on-destructive)',
                destructiveContainer: 'var(--destructive-container)',
                onDestructiveContainer: 'var(--on-destructive-container)',
                //WARNING
                warning: 'var(--warning)',
                warningDimmed: 'var(--warning-dimmed)',
                warningMuted: 'var(--warning-muted)',
                onWarning: 'var(--on-warning)',
                warningContainer: 'var(--warning-container)',
                onWarningContainer: 'var(--on-warning-container)',
            },
        },
    },
    plugins: [tailwindcssReactAriaComponents, tailwindcssAnimate, tailwindcssContainerQueries],
};
