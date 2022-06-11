import "../scss/navbar.scss";
import "../scss/dark.scss";
import { Link } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useContext } from "react";
import { DarkMoodContext } from "../darkMoodContext";
import Search from './Search';
/*<input type="text" placeholder='Search Here' />
                <SearchOutlinedIcon /> */
const Navbar = () => {
    const { darkMood, toggleDarkMood, sidebarOpen, toggleSidebar } = useContext(DarkMoodContext);
    return <nav className={darkMood ? "dark" : ""}>
        <div className='logo'>
            <h2><Link to="/">Admin Panel</Link></h2>
        </div>
        <div className="navMiddle">
                <Search />
        </div>
        <div className="navRight">
            <ul>
                <li>
                    <LanguageIcon />
                    <span>English</span>
                </li>
                <li>
                    <DarkModeOutlinedIcon onClick={toggleDarkMood} />
                </li>
                <li>
                    <span className='iconNum'>1</span>
                    <NotificationsNoneOutlinedIcon />
                </li>
                <li>
                    <span className='iconNum'>1</span>
                    <ChatBubbleOutlineOutlinedIcon />
                </li>
                <li>
                    <ReorderIcon style={{display : sidebarOpen ? "none" : "block"}} onClick={toggleSidebar} />
                </li>
                <li>
                    <img src="../assets/person/1.jpeg" alt="PIC" />
                </li>
            </ul>
        </div>
    </nav>
}

export default Navbar;