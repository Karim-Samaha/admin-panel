import '../scss/chart.scss'
import React, { PureComponent, useEffect, useState } from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';
import { useLocation } from 'react-router-dom';
import { useContext } from "react";
import { DarkMoodContext } from "../darkMoodContext";

const Chart = ({ type }) => {
    const { darkMood } = useContext(DarkMoodContext);
    const [chartData, setChartData] = useState([])
    const { pathname } = useLocation();
    useEffect(() => {
        if (type === "mini") {
            setChartData(data.slice(0, 6))
        } else if (type === "full") {
            setChartData(data)
        }
    }, [pathname])
    const data = [
        {
            name: 'January',
            uv: 4000,
            total: 2000
        },
        {
            name: 'February',
            uv: 3000,
            total: 1500
        },
        {
            name: 'March',
            total: 1800

        },
        {
            name: 'April',
            total: 1000

        },
        {
            name: 'May',
            total: 1500,

        },

        {
            name: 'June',
            total: 2000,

        },
        {
            name: 'July',
            total: 2500,

        },
        {
            name: 'August',
            total: 2300,

        },
        {
            name: 'Septemper',
            total: 3000,

        },
        {
            name: 'October',
            total: 3800,

        },
        {
            name: 'November',
            total: 3500,

        },
        {
            name: 'December',
            total: 3300,

        },
    ];
    return <div style={{ width: type === "full" ? "100%" : "55%"}} 
    className={darkMood ? "chart dark" : "chart"}>
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={500}
                height={400}
                data={chartData}
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
}
export default Chart;