'use client';
import { Excalidraw } from '@excalidraw/excalidraw';

interface ExcalidrawWrapperProps {
    initialData: any;
}

function ExcalidrawWrapper({ initialData }: ExcalidrawWrapperProps) {
    return (
        <div className='excalidraw-wrapper'>
            <Excalidraw viewModeEnabled initialData={initialData} />
        </div>
    );
};
export default ExcalidrawWrapper;