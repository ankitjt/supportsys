import {
    FaHome,
    FaExclamationTriangle,
    FaChartBar,
    FaBook,
    FaCalendarAlt,
    FaUserAlt,
    FaBroadcastTower,
    FaFontAwesomeFlag,
    FaExternalLinkAlt,
    FaCheckDouble,
    FaRegCheckCircle,
    FaChevronDown,
    FaPen,
    FaHourglassStart,
    FaHistory,
    FaChevronUp,
} from 'react-icons/fa';

export const MemberSideBar = [
    {
        title: 'Home',
        path: '/member/home',
        icon: <FaHome />,
        index: 1
    },
    {
        title: 'Issues',
        path: '#',
        icon: <FaExclamationTriangle />,
        iconOpened: <FaChevronUp />,
        iconClosed: <FaChevronDown />,
        index: 2,
        subMenu: [
            {
                title: 'Pending',
                path: '/member/issues/pending',
                icon: <FaFontAwesomeFlag />,
                subIndex: 1
            },
            {
                title: 'NIC',
                path: '/member/issues/withNIC',
                icon: <FaExternalLinkAlt />,
                subIndex: 2
            },
            {
                title: 'Resolved',
                path: '/member/issues/resolved',
                icon: <FaCheckDouble />,
                subIndex: 3
            },
        ],
    },
    {
        title: 'Reports',
        path: '/member/reports',
        icon: <FaChartBar />,
        index: 3
    },
    {
        title: 'Leaves',
        path: '#',
        icon: <FaCalendarAlt />,
        iconOpened: <FaChevronUp />,
        iconClosed: <FaChevronDown />,
        index: 4,
        subMenu: [
            {
                title: 'Apply',
                path: '/member/leaves/apply',
                icon: <FaPen />,
                subIndex: 4
            },
            {
                title: 'Status',
                path: '/member/leaves/status',
                icon: <FaHourglassStart />,
                subIndex: 5
            },
            {
                title: 'History',
                path: '/member/leaves/history',
                icon: <FaHistory />,
                subIndex: 6
            },
        ],
    },
    {
        title: 'Documentation',
        path: '/member/documentation',
        icon: <FaBook />,
        index: 5
    },
    {
        title: 'Announcements',
        path: '/member/announcements',
        icon: <FaBroadcastTower />,
        index: 6,
    },
    {
        title: 'Profile',
        path: '/member/profile',
        icon: <FaUserAlt />,
        index: 7
    },
    

];

export const AdminSideBar = [
    {
        title: 'Home - admin',
        path: '/member/home',
        icon: <FaHome />,
    },
    {
        title: 'Issues',
        path: '#',
        icon: <FaExclamationTriangle />,
        iconOpened: <FaChevronUp />,
        iconClosed: <FaChevronDown />,
        subMenu: [
            {
                title: 'Pending',
                path: '/member/issues/pending',
                icon: <FaFontAwesomeFlag />,
            },
            {
                title: 'NIC',
                path: '/member/issues/withNIC',
                icon: <FaExternalLinkAlt />,
            },
            {
                title: 'Resolved',
                path: '/member/issues/resolved',
                icon: <FaCheckDouble />,
            },
        ],
    },
    {
        title: 'Reports',
        path: '/member/reports',
        icon: <FaChartBar />,
    },
    {
        title: 'Leaves',
        path: '#',
        icon: <FaCalendarAlt />,
        iconOpened: <FaChevronUp />,
        iconClosed: <FaChevronDown />,
        subMenu: [
            {
                title: 'Apply',
                path: '/member/leaves/apply',
                icon: <FaPen />,
            },
            {
                title: 'Status',
                path: '/member/leaves/status',
                icon: <FaHourglassStart />,
            },
            {
                title: 'History',
                path: '/member/leaves/history',
                icon: <FaHistory />,
            },
        ],
    },
    {
        title: 'Documentation',
        path: '/member/documentation',
        icon: <FaBook />,
    },
    {
        title: 'Announcements',
        path: '/member/announcements',
        icon: <FaBroadcastTower />,
    },
    {
        title: 'Profile',
        path: '/member/profile',
        icon: <FaUserAlt />,
    },
];

