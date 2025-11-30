import React from "react";
import { WindowControls } from "#components/index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {
    ChevronLeft,
    PanelLeft,
    ChevronRight,
    ShieldHalf,
    Search,
    Share,
    Plus,
    Copy, MoveRight
} from "lucide-react";
import {blogPosts} from "#constants/index.js";

const Safari = () => {
    return (
        <>
            <div id="window-header" className="flex items-center gap-4">
                {/* Left Controls */}
                <WindowControls target="safari" />

                <PanelLeft className="ml-10 icon" />

                <div className="flex items-center gap-1 ml-5">
                    <ChevronLeft className="icon" />
                    <ChevronRight className="icon" />
                </div>

                {/* Address bar */}
                <div className="flex-1 flex items-center gap-3 ml-4">
                    <ShieldHalf className="icon" />
                    <div className="flex items-center gap-2 bg-gray-100 rounded px-2 py-1 flex-1">
                        <Search className="icon" />
                        <input
                            type="text"
                            placeholder="Search or enter website name"
                            className="flex-1 bg-transparent outline-none"
                        />
                    </div>
                </div>

                {/* Right side icons */}
                <div className="flex items-center gap-5">
                    <Share className="icon" />
                    <Plus className="icon" />
                    <Copy className="icon" />
                </div>
            </div>
            <div className="blog">
                <h2>My Developer Blog</h2>

                <div className="space-y-12">
                    {blogPosts.map(({ id, image, title, date, link }) => (
                        <div key={id} className="blog-post grid grid-cols-3 gap-6 items-start">

                            {/* Image */}
                            <img
                                src={image}
                                alt={title}
                                className="w-full rounded col-span-1"
                            />

                            {/* Text + Link in one column */}
                            <div className="col-span-2 flex flex-col gap-2">
                                <p className="text-gray-600 text-sm">{date}</p>

                                <h3 className="text-xl font-semibold leading-snug">
                                    {title}
                                </h3>

                                {/* The link DIRECTLY under the title */}
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 flex items-center gap-2 hover:underline"
                                >
                                    Check out the full post
                                    <MoveRight className="icon-hover" />
                                </a>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

const SafariWindow = WindowWrapper(Safari, "safari");
export default SafariWindow;
