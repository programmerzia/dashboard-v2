import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav:[
            {       
                title: 'Users',
                path: '/home/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {       
                title: 'Revenue',
                path: '/home/revenue',
                icon: <FaIcons.FaFileInvoiceDollar />,
            },
        ]
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav:[
            {       
                title: 'Mens Collection',
                path: '/products/mens_collection',
                icon: <IoIcons.IoIosPaper />,
            },
            {       
                title: 'Womens Collection',
                path: '/products/revenue',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav:[
            {       
                title: 'Reports 1',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper />,
            },
            {       
                title: 'Reports 2',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper />,
            },
            {       
                title: 'Reports 3',
                path: '/reports/reports3',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />,
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav:[
            {       
                title: 'Messages 1',
                path: '/messages/message1',
                icon: <IoIcons.IoIosMailOpen />,
            },
            {       
                title: 'Messages 2',
                path: '/message/message2',
                icon: <IoIcons.IoIosMailOpen />,
            },
        ]
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircleOutline />,
    }
]

export default SidebarData;