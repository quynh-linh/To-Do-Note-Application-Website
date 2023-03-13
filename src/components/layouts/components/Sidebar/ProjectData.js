import { faMobile ,faUserGroup, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
const ProjectData = [
    {
        title : 'DEVELOPMENT',
        path : '/myworks/development',
        member : [
            {
                name : 'Rajesh Kumar',
                image : ''
            }
        ],
        iconClosed : faCaretUp,
        iconOpened : faCaretDown,
        subNav : [
            {
                title : 'Mobile App Development',
                path : '/myworks/development/MobileAppDevelopment',
                icon : faMobile
            },
            {
                title : 'Web App',
                path : '/myworks/development/WebApp',
                icon : faUserGroup
            }
        ]
    },
    {
        title : 'MARKETING',
        path : '/myworks/marketing',
        member : [
            {
                name : 'Rajesh Kumar',
                image : ''
            }
        ],
        iconClosed : faCaretUp,
        iconOpened : faCaretDown,
        subNav : [
            {
                title : 'Q1 Marketing',
                path : '/myworks/marketing/q1marketing',
                icon : faMobile
            },
            {
                title : 'Q2 Marketing',
                path : '/myworks/marketing/q2marketing',
                icon : faUserGroup
            }
        ]
    }
]
export default ProjectData;