const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Nov 29, 2025",
        title:
            "Farm Mitra: Connecting Farmers Directly with Consumers Using a Mobile App",
        image: "/images/blog1.png",
        link: "https://medium.com/@suyashrcb/farm-mitra-mobile-app-for-farmers-0eb06eadb538",
    },
    {
        id: 2,
        date: "Nov 29, 2025",
        title: "Building an AI-Driven Assessment Platform: Automating Evaluations with Intelligence",
        image: "/images/blog2.png",
        link: "https://medium.com/@suyashrcb/ai-driven-assessment-platform-b170581643f7",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript"],
    },
    {
        category: "Mobile",
        items: ["React Native", "Expo"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express"],
    },
    {
        category: "Database",
        items: ["MongoDB", "PostgreSQL", "Firebase"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/suyashrcb15",
    },
    {
        id: 2,
        text: "LeetCode",
        icon: "/icons/le.png",
        bg: "#4bcb63",
        link: "https://leetcode.com/u/user1851jH/",
    },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#ff866b",
        link: "https://x.com/suyashrcb",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/suyash-tiwari-r73833/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/ug.jpg",
        title: "Unity Game Development",
    },
    {
        id: 2,
        icon: "/icons/iee.jpg",
        title: "IEEE Extreme 2k23",
    },
    {
        id: 3,
        icon: "/icons/g.png",
        title: "Arcade 2k23",
    },
    {
        id: 4,
        icon: "/icons/ml.jpg",
        title: "Machine Learning",
    },
    {
        id: 5,
        icon: "/icons/ig.jpg",
        title: "Ignitia 2k23",
    },
    {
        id: 6,
        icon: "/icons/sp.jpg",
        title: "Space Hackthone 2k23",
    },
    {
        id: 7,
        icon: "/icons/ai.jpg",
        title: "Generative AI by Infosys Springboard",
    },
    {
        id: 8,
        icon: "/icons/ds.jpg",
        title: "Data Science course by Infosys Springboard",
    },
];

const gallery = [
    {
        id: 1,
        img: "/icons/ds.jpg",
    },
    {
        id: 2,
        img: "/icons/ug.jpg",
    },
    {
        id: 3,
        img: "/icons/iee.jpg",
    },
    {
        id: 4,
        img: "/icons/g.png",
    },
    {
        id: 5,
        img: "/icons/ml.jpg",
    },
    {
        id: 6,
        img: "/icons/ig.jpg",
    },
    {
        id: 7,
        img: "/icons/sp.jpg",
    },
    {
        id: 8,
        img: "/icons/ai.jpg",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Farm-Mitra",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Farm-Mitra Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Farm Mitra mobile app is a clean, modern platform designed to connect farmers directly with consumers, retailers, and mandis.",
                        "Instead of just another marketplace, it delivers a meaningful experience with real-time produce listings, transparent pricing, and smooth navigation tailored for rural and urban users alike.",
                        "Think of it as visiting a trusted local farm or market—right from your phone—where you can discover fresh produce, connect with growers, and support local agriculture.",
                        "Built with a powerful mobile stack, Farm Mitra ensures fast performance, reliable data syncing, and a simple yet premium interface that makes buying and selling farm produce effortless.",
                    ],
                },
                {
                    id: 2,
                    name: "Farm-Mitra",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/suyashrcb15/appFarm",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "Farm-Mitra",
                    icon: "/images/fm.jpg",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/fm.jpg",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://github.com/suyashrcb15/appFarm",
                    position: "top-60 right-20",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "SkillSprint",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "AI Driven Interview Platform Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "AI Interview Mentor is a smart platform that helps you master interviews with instant, personalized feedback.",
                        "Instead of guessing what interviewers expect, you receive AI-powered insights on your answers, communication style, confidence, and role-specific skills.",
                        "Think of it like having a personal interview coach—guiding you, highlighting strengths, correcting mistakes, and helping you perform at your best in real interviews.",
                        "It's built with Next.js and Tailwind, delivering fast performance, a clean professional interface, and a seamless experience across all devices.",
                    ],
                },
                {
                    id: 2,
                    name: "AI Driven Interview Platform Project.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://skillsprint-vzgq.onrender.com/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "AI Driven Interview Platform Project",
                    icon: "/images/loo.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/lg2.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://github.com/suyashrcb15/SkillSprint",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "Pustak Kendra",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Pustak Kendra Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Pustak Kendra is a lightweight, free PDF reader built for readers who want fast access to books, notes, and study material on the go.",
                        "Instead of fumbling with heavy apps or paying for features you don't use, you get instant open, smooth scrolling, and easy annotation tools — all without ads or hidden costs.",
                        "Think of it like carrying a pocket library: open PDFs, highlight, add notes, and jump to any page in a flash, whether you're offline or on the move.",
                        "Built with React Native for buttery-smooth performance on both iOS and Android, Pustak Kendra focuses on readability, simple organization, and a distraction-free reading experience.",
                    ],
                },
                {
                    id: 2,
                    name: "Pustak Kendra.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://pustak-kendra-k68s.onrender.com/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "Pustak Kendra",
                    icon: "/images/m.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/m2.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://github.com/suyashrcb15/Pustak_Kendra",
                    position: "top-60 right-20",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "pic.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/picv.jpg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/picb.jpg",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/pic.jpg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/pic.jpg",
            description: [
                "Hey! I’m Suyash Tiwari 👋, a web developer who loves building sleek, interactive websites that actually work.",
    "I specialize in Next.js and React, and I enjoy crafting smooth, fast, and delightful user experiences. I also have strong problem-solving skills, which I love applying to challenging coding tasks.",
    "I’m big on clean UI, intuitive UX, and writing code that’s easy to read and debug.",
    "Currently, I’m a 4th-year B.Tech student at PSIT Kanpur. Outside of coding, you might find me experimenting with layouts late at night, sipping coffee, or exploring new tech and gadgets 😅",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };