'use client';
import { Excalidraw } from '@excalidraw/excalidraw';
import type { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types';
import { useEffect, useState } from 'react';

import "@excalidraw/excalidraw/index.css";

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
                theme={document.documentElement.attributes.getNamedItem('data-theme')?.value || "dark"}
            />
        </div>
    );
};
export default ExcalidrawWrapper;
