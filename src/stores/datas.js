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
        "拥有多年前后端开发经验的工程师，具备从零构建完整应用的能力。擅长使用 React、TypeScript、Electron 等技术栈开发企业级 Web 应用与桌面应用。对低代码平台、可视化编辑器、跨平台应用有深入实践经验。注重代码质量与用户体验，善于与团队协作，高效完成项目交付。",
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
                "负责 CPM 项目（化工行业领域）的前端开发工作",
                "开发低代码平台，实现组件化搭建功能",
                "实现 SCADA 工艺流程图画布容器，支持用户自由拖拽绘制工艺流程图",
                "使用 React、TypeScript、Ant Design 构建企业级 Web 应用",
                "优化前端性能与交互体验，提升用户操作效率",
                "与后端团队紧密协作，完成 API 集成与数据交互",
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
            description: "个人业余时间开发的跨平台桌面应用，集成 ExifTool 与 OpenAI API，实现图片元数据的批量读取、编辑与管理，支持 CSV 导出与文件打包功能",
        },
        {
            id: uuidv4(),
            title: "模仿网易云音乐",
            src: "https://netease-music-demo.vercel.app",
            codeUrl: "https://github.com/HanboyLee/NeteaseMusicDemo",
            githubUrl: "https://netease-music-demo.vercel.app",
            art: ["HTML", "CSS", "JavaScript", "React", "Antd", "Redux", "Redux-toolkit", "Axios"],
            description: "完整复刻网易云音乐 Web 界面与交互，实现音乐播放、歌单管理、搜索推荐、个人中心等核心功能，采用 Redux Toolkit 进行状态管理",
        },
        {
            id: uuidv4(),
            src: "https://hanboylee.github.io/staticWebWithBootstrap.gihub.io/",
            title: "React Simple",
            githubUrl: "https://hanboylee.github.io/staticWebWithBootstrap.gihub.io/",
            codeUrl: "https://github.com/HanboyLee/staticWebWithBootstrap.gihub.io",
            art: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
            description: "使用 React 与 Bootstrap 构建的响应式静态网站，展示基础前端布局与组件开发能力",
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
