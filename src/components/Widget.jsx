import { Link } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "../scss/widget.scss"
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import { useContext } from "react";
import { DarkMoodContext } from "../darkMoodContext";

const Widget = ({ type }) => {
    const { darkMood } = useContext(DarkMoodContext);
    let data;
    if (type == "user") {
        data = {
            name: "Users",
            precentge: "20",
            value: "12",
            more: "See All Users",
            href: "/users",
            icon: <PersonIcon />,
        }
    } else if (type == "orders") {
        data = {
            name: "Orders",
            precentge: "20",
            value: "12",
            more: "View All Orders",
            href: "/orders",
            icon: <ShoppingCartOutlinedIcon />,
        }
    } else if (type == "earning") {
        data = {
            name: "Earnings",
            precentge: "20",
            value: "200 $",
            more: "View Net Earnings",
            href: "/earnings",
            icon: <MonetizationOnOutlinedIcon />
        }
    } else if (type == "balance") {
        data = {
            name: "Balance",
            precentge: "20",
            value: "100 $",
            more: "See Details",
            href: "/",
            icon: <AccountBalanceOutlinedIcon />
        }

    }
    return <div className={darkMood ? "widget dark" : "widget"}>
        <div>
            <p>{data.name}</p>
            <p><KeyboardArrowUpIcon />{data.precentge}</p>
        </div>
        <h2>{data.value}</h2>
        <Link to={data.href}>{data.more} <span>{data.icon}</span></Link>
    </div>

}

export default Widget;