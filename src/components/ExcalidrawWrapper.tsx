'use client';
import { Excalidraw, THEME } from '@excalidraw/excalidraw';
import type { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types';
import { useEffect, useState } from 'react';

type ThemeType = (typeof THEME)[keyof typeof THEME];

interface ExcalidrawWrapperProps {
    initialData: any;
}

function ExcalidrawWrapper({ initialData }: ExcalidrawWrapperProps) {
    const [excalidrawAPI, setExcalidrawAPI] = useState<ExcalidrawImperativeAPI | null>(null);

    useEffect(() => {
        if (!excalidrawAPI || !initialData) {
            return;
        }

        excalidrawAPI.scrollToContent(
            excalidrawAPI.getSceneElements(),
            {
                fitToContent: true,
                animate: true,
                duration: 500,
            }
        );

    }, [excalidrawAPI, initialData]);

    return (
        <div className='excalidraw-wrapper'>
            <Excalidraw
                viewModeEnabled
                excalidrawAPI={(api) => setExcalidrawAPI(api)}
                initialData={initialData}
                theme={(document.documentElement.attributes.getNamedItem('data-theme')?.value as ThemeType) || THEME.DARK}
            />
        </div>
    );
};
export default ExcalidrawWrapper;
