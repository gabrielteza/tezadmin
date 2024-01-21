import "./sidebar.css"
import {LineStyle, Timeline, TrendingUp, AccountCircle, Storefront, AttachMoney, Equalizer, Mail, Feedback, ChatBubbleOutline, WorkOutline, Report} from '@mui/icons-material';


export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon"/> 
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/> 
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon"/> 
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                <li className="sidebarListItem">
                        <AccountCircle className="sidebarIcon"/> 
                        Users
                    </li>
                    <li className="sidebarListItem">
                        <Storefront className="sidebarIcon"/> 
                        Products
                    </li>
                    <li className="sidebarListItem">
                        <AttachMoney className="sidebarIcon"/> 
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <Equalizer className="sidebarIcon"/> 
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                <li className="sidebarListItem">
                        <Mail className="sidebarIcon"/> 
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <Feedback className="sidebarIcon"/> 
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutline className="sidebarIcon"/> 
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon"/> 
                        Menage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/> 
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <Report className="sidebarIcon"/> 
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
