'use client';

import { useEditMode } from '@/contexts/edit-mode-context';
import { useSettings } from '@/hooks/use-settings';
import { IoLogoGithub } from 'react-icons/io5';
import { LuPen, LuRotateCcw, LuX } from 'react-icons/lu';

export default function Dashboard() {
    const [backgroundImage, setBackgroundImage] = useSettings(
        'background_image',
        'https://unsplash.com/photos/5Qqkjn4PFPA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8aWNlbGFuZHxlbnwwfHx8fDE3MzQ5MzYxMzN8Mg&force=true&w=1920'
    );
    const { isEditMode, enableEditMode, disableEditMode } = useEditMode();

    const clearSettings = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <>
            <div className="flex absolute top-4 right-4 gap-2">
                {!isEditMode ? (
                    <>
                        <a
                            className="flex flex-col content-start items-center gap-2 rounded-lg p-2 text-sm text-white transition-colors duration-200 hover:bg-[#3B3A43] active:bg-[#3B3A43]"
                            href="https://www.github.com/nilkoush/new-tab"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <IoLogoGithub className="h-6 w-6" />
                        </a>
                        <button
                            onClick={() => enableEditMode()}
                            className="flex flex-col content-start items-center gap-2 rounded-lg p-2 text-sm text-white transition-colors duration-200 hover:bg-[#3B3A43] active:bg-[#3B3A43]"
                        >
                            <LuPen className="h-6 w-6" />
                        </button>
                    </>
                ) : (
                    <>
                        <input
                            className="flex w-96 px-4 text-[#b1b1bd] outline-none gap-2 rounded-md bg-[#38383d] shadow-sm"
                            type="text"
                            value={backgroundImage}
                            onChange={(e) => setBackgroundImage(e.target.value)}
                        />
                        <button
                            onClick={clearSettings}
                            className="flex flex-col content-start items-center gap-2 rounded-lg p-2 text-sm text-white transition-colors duration-200 hover:bg-[#3B3A43] active:bg-[#3B3A43]"
                        >
                            <LuRotateCcw className="h-6 w-6" />
                        </button>
                        <button
                            onClick={() => disableEditMode()}
                            className="flex flex-col content-start items-center gap-2 rounded-lg p-2 text-sm text-white transition-colors duration-200 hover:bg-[#3B3A43] active:bg-[#3B3A43]"
                        >
                            <LuX className="h-6 w-6" />
                        </button>
                    </>
                )}
            </div>
        </>
    );
}
