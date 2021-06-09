import React from "react";
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
} from "react-icons/fa";

export const SidebarData = [
    {
        title: "Home",
        path: "/member/home",
        icon: <FaHome />,
    },
    {
        title: "Issues",
        path: "#",
        icon: <FaExclamationTriangle />,
        iconOpened: <FaChevronUp />,
        iconClosed: <FaChevronDown />,
        subMenu: [
            {
                title: "Pending",
                path: "/member/issues/pending",
                icon: <FaFontAwesomeFlag />,
            },
            {
                title: "NIC",
                path: "/member/issues/withNIC",
                icon: <FaExternalLinkAlt />,
            },
            {
                title: "Resolved",
                path: "/member/issues/resolved",
                icon: <FaCheckDouble />,
            },
        ],
    },
    {
        title: "Reports",
        path: "/member/reports",
        icon: <FaChartBar />,
    },
    {
        title: "Leaves",
        path: "#",
        icon: <FaCalendarAlt />,
        iconOpened: <FaChevronUp />,
        iconClosed: <FaChevronDown />,
        subMenu: [
            {
                title: "Apply",
                path: "/member/leaves/apply",
                icon: <FaPen />,
            },
            {
                title: "Status",
                path: "/member/leaves/status",
                icon: <FaHourglassStart />,
            },
            {
                title: "History",
                path: "/member/leaves/history",
                icon: <FaHistory />,
            },
        ],
    },
    {
        title: "Documentation",
        path: "/member/documentation",
        icon: <FaBook />,
    },
    {
        title: "Announcements",
        path: "/member/announcements",
        icon: <FaBroadcastTower />,
    },
    {
        title: "Profile",
        path: "/member/profile",
        icon: <FaUserAlt />,
    },
];
