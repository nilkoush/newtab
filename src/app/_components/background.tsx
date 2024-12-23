'use client';

import { useSettings } from '@/hooks/use-settings';
import { type ReactNode } from 'react';

type BackgroundProps = Readonly<{
    children?: ReactNode;
}>;

export const dynamic = true;

export default function Background({ children }: BackgroundProps) {
    const [backgroundImage, setBackgroundImage] = useSettings(
        'background_image',
        'https://unsplash.com/photos/5Qqkjn4PFPA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8aWNlbGFuZHxlbnwwfHx8fDE3MzQ5MzYxMzN8Mg&force=true&w=1920'
    );

    return (
        <>
            <div
                className="relative bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                {children}
            </div>
        </>
    );
}
