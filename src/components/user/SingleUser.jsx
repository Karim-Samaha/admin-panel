import { useParams } from "react-router-dom";
import { Users } from "../../data";
import UsersTable from "./UsersTable";
import React from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';
import "../../scss/singleUserPage.scss"
import { useContext } from "react";
import { DarkMoodContext } from "../../darkMoodContext";
const SingleUser = () => {
    const { id } = useParams();
    const data = Users.filter((item) => item.id == id);
    const { firstName, lastName, online, img, phone, adress, chart } = data[0];
    const { darkMood } = useContext(DarkMoodContext);
    return <section className={darkMood ? "singleUserPage dark" : "singleUserPage"}>
        <div className="sectionOne">
            <div className="userInfo">
                <h2>Information</h2>
                <div className="infoContainer">
                    <img src={img} alt="ProfileImg" />
                    <div className="info">
                        <h2>{firstName + " " + lastName}</h2>
                        <ul>
                            <li>Phone: <span>{phone}</span></li>
                            <li>Email: <span>{firstName + "@gmail.com"}</span></li>
                            <li>Adress: <span>{adress}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="userChart">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={chart}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis style={{ fontSize: ".8em" }} dataKey="name" />
                        <YAxis style={{ fontSize: ".8em" }} />
                        <Tooltip />
                        <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
        <div className="sectionTwo">
            <UsersTable type="users" />
        </div>
    </section>
}

export default SingleUser;