import "../scss/sidebar.scss"
import { Link } from "react-router-dom";
//Iconst
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
//context
import { useContext } from "react";
import { DarkMoodContext } from "../darkMoodContext";

const Sidebar = () => {
    const { darkMood } = useContext(DarkMoodContext);
    return <div className={darkMood ? "sidebar dark" : "sidebar"}>
        <div>
            <h4>MAIN</h4>
            <ul>
                <li>
                    <DashboardIcon />
                    <Link to="/">Dashboard</Link>
                </li>
            </ul>
        </div>
        <div>
            <h4>LISTS</h4>
            <ul>
                <li>
                    <PersonIcon />
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Inventory2Icon />
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <ShoppingBasketIcon />
                    <Link to="/orders">Orders</Link>
                </li>
                <li>
                    <LocalShippingIcon />
                    <Link to="/delivered">Delivered</Link>
                </li>
            </ul>
        </div>
        <div>
            <h4>USEFUL</h4>
            <ul>
                <li>
                    <QueryStatsIcon />
                    <Link to="/earnings">Stats</Link>
                </li>
                <li>
                    <NotificationsIcon />
                    <span>Notification</span>
                </li>
            </ul>
        </div>
        <div>
            <h4>SERVICE</h4>
            <ul>
                <li>
                    <SettingsSystemDaydreamIcon />
                    <span>System Health</span>
                </li>
                <li>
                    <VpnKeyIcon />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon />
                    <span>Settings</span>
                </li>
            </ul>
        </div>
        <div>
            <h4>USER</h4>
            <ul>
                <li>
                    <ManageAccountsIcon />
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppIcon />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
    </div>
}

export default Sidebar;