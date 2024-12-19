export default function RootLayout({children}: {children: any}) {
    return (
        <html lang="en">
            <title>FF</title>
            <body>{children}</body>
        </html>
    );
}
