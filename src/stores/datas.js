import { v4 as uuidv4 } from "uuid";

// images
import profileQrcode from "../asset/images/profileQrcode.jpg";
//icons
import { AiFillWechat } from "react-icons/ai";
import { GitHub, Facebook } from "@mui/icons-material";
export const introduce = {
    id: uuidv4(),
    title: "介绍",
    enTitle: "introduce",
    content:
        "前职业与前端所学完全不同的领域，个人深觉网页开发的魅力除了丰富的开源码之外，前端工程师可与后端、UI、UX、SA、PO、PM多方讨论，可以一次了解各个职位工作的内容与定位，帮助解决专案完成与沟通的重要性。",
};

export const experience = {
    id: uuidv4(),
    title: "工作经验",
    enTitle: "Experience",
    isExp: true,
    content: [
        {
            id: uuidv4(),
            area: "中润华谷",
            startsAt: "Jun 2022",
            endsAt: "至今",
            content: [
                "(前端工程师)",
                "使用 React、TypeScript、Ant Design 构建企业级 Web 应用",
                "负责 Electron 桌面应用开发，实现跨平台功能",
                "参与图片元数据管理系统（Metadata Desktop）的设计与实现",
                "优化前端性能，提升用户体验",
                "与后端团队协作，完成 API 集成和数据交互",
            ],
        },
        {
            id: uuidv4(),
            area: "美乐蒂文教",
            startsAt: "Jan 2019",
            endsAt: "Nov 2021",
            content: [
                "(前、后端工程师)",
                "根据项目需求，进行应用软件程序设计及开发工作。",
                "根据产品需求完成架构和模块设计、编码、测试。",
                "负责介面优化及效能优化。",
            ],
        },
        {
            id: uuidv4(),
            area: "北部区域管制中心",
            startsAt: "Jan 2013",
            endsAt: "Aug 2019",
            content: [
                "(担任组长职位)",
                "协调人员指派项目及装备修护作业。",
                "监控设备修理维护作业，确保各项资讯正确性与伺服器妥善。",
                "规划修理维护项目及协调相关基地人员如何使用设备运作。",
                "网路修复作业及网路监控。",
            ],
        },
    ],
};

export const education = {
    id: uuidv4(),
    title: "学历教育",
    enTitle: "Education",
    content: [
        {
            id: uuidv4(),
            school: "正修科技大学",
            department: "电子工程系",
            startsAt: "Jan 2008",
            endsAt: "Jun 2011",
        },
        {
            id: uuidv4(),
            school: "航空技术学院二技专班",
            department: "电子工程系",
            startsAt: " Jan 2011",
            endsAt: "Jan 2013",
        },
    ],
};

export const skills = {
    id: uuidv4(),
    title: "职业技能",
    enTitle: "Skills",
    content: [
        {
            id: uuidv4(),
            skill: "前端核心",
            content: ["JavaScript (ES6+)", "TypeScript", "React 18", "React Router", "Redux Toolkit"],
        },
        {
            id: uuidv4(),
            skill: "桌面应用",
            content: ["Electron", "Electron Forge", "IPC 通信", "多进程架构"],
        },
        {
            id: uuidv4(),
            skill: "UI 框架",
            content: ["Material-UI", "Ant Design", "Ant Design Pro", "Styled Components"],
        },
        {
            id: uuidv4(),
            skill: "构建工具",
            content: ["Vite", "Webpack", "Babel", "ESLint", "Prettier"],
        },
        {
            id: uuidv4(),
            skill: "后端技能",
            content: ["Node.js", "Express", "GraphQL", "MongoDB", "RESTful API"],
        },
        {
            id: uuidv4(),
            skill: "其它",
            content: ["Git", "GitHub Actions", "CI/CD", "WebSocket", "Axios", "OpenAI API"],
        },
    ],
};

export const products = {
    id: uuidv4(),
    title: "作品",
    enTitle: "Projects",
    content: [
        {
            id: uuidv4(),
            title: "Metadata Desktop",
            src: "https://github.com/HanboyLee/electorn-mircotools",
            codeUrl: "https://github.com/HanboyLee/electorn-mircotools",
            githubUrl: "https://github.com/HanboyLee/electorn-mircotools",
            art: ["Electron", "React", "TypeScript", "Ant Design", "ExifTool", "OpenAI API"],
            description: "基于 Electron 的跨平台桌面应用，用于图片元数据的批量处理与管理，集成 AI 智能分析功能",
        },
        {
            id: uuidv4(),
            title: "模仿网易云音乐",
            src: "https://netease-music-demo.vercel.app",
            codeUrl: "https://github.com/HanboyLee/NeteaseMusicDemo",
            githubUrl: "https://netease-music-demo.vercel.app",
            art: ["HTML", "CSS", "JavaScript", "React", "Antd", "Redux", "Redux-toolkit", "Axios"],
            description: "高保真复刻网易云音乐 Web 版，实现音乐播放、歌单管理、搜索等核心功能",
        },
        {
            id: uuidv4(),
            src: "https://hanboylee.github.io/staticWebWithBootstrap.gihub.io/",
            title: "React Simple",
            githubUrl: "https://hanboylee.github.io/staticWebWithBootstrap.gihub.io/",
            codeUrl: "https://github.com/HanboyLee/staticWebWithBootstrap.gihub.io",
            art: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
            description: "基于 React 和 Bootstrap 的静态网页，展示基础前端开发能力",
        },
    ],
};

export const learning = {
    id: uuidv4(),
    title: "学习中技能",
    enTitle: "Works",
    text: "Webpack 仍觉得有不足之处，使用自余时间学习，加强语法熟悉度及应用。",
};

export const contact = [
    { id: uuidv4(), IconSvg: AiFillWechat, method: true, src: profileQrcode },
    { id: uuidv4(), IconSvg: GitHub, method: false, src: "https://github.com/HanboyLee" },
    { id: uuidv4(), IconSvg: Facebook, method: false, src: "https://www.facebook.com/sheng.han.921" },
];
