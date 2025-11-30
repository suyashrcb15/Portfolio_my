import React from 'react'
import useWindowStore from "#store/window.js";
import { WindowControls } from "#components/index.js";
import { Search, Mail } from "lucide-react";
import { gallery, photosLinks } from "#constants/index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";

const Photos = () => {
    const { openWindow } = useWindowStore();

    return (
        <>
            {/* Window Header */}
            <div id="window-header">
                <WindowControls target="photos" />
                <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                    <Mail className="icon" />
                    <Search className="icon" />
                </div>
            </div>

            {/* Window Body */}
            <div className="flex w-full">

                {/* Sidebar */}
                <div className="sidebar">
                    <h2>Photos</h2>
                    <ul>
                        {photosLinks.map(({ id, icon, title }) => (
                            <li key={id}>
                                <img src={icon} alt={title} />
                                <p>{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Updated Gallery Section */}
                <div className="gallery p-4 flex-1 overflow-auto">
                    <ul className="grid grid-cols-3 gap-4">
                        {gallery.map(({ id, img }) => (
                            <li
                                key={id}
                                onClick={() =>
                                    openWindow("imgfile", {
                                        id,
                                        name: "Gallery image",
                                        icon: "/images/image.png",
                                        kind: "file",
                                        fileType: "img",
                                        imageUrl: img,
                                    })
                                }
                                className="cursor-pointer"
                            >
                                <div className="
                                    w-full h-40
                                    bg-white border
                                    rounded-lg shadow-sm
                                    overflow-hidden
                                    flex items-center justify-center
                                    hover:scale-105 hover:shadow-md
                                    transition-all duration-200
                                ">
                                    <img
                                        src={img}
                                        alt={`Gallery image ${id}`}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </>
    )
}

const PhotosWindow = WindowWrapper(Photos, "photos");
PhotosWindow.displayName = "Photos";
export default PhotosWindow;
