import '../scss/transactions.scss'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { trending } from '../data';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom"
import { useContext } from "react";
import { DarkMoodContext } from "../darkMoodContext";
function createData(name, img, price, payment, status, date, amount) {
        return { name, img, price, payment, status, date, amount };
    }

const products = trending.map((item) => {
    const { id, name, img, price, oldPrice, qty, category, status } = item;
    return createData(id, img, price, "Cash", status, "1/1", qty)
})

const Transactions = ({ type }) => {
    const { darkMood } = useContext(DarkMoodContext);
    const { pathname } = useLocation();
    const [rows, setRows] = useState([]);
    useEffect(() => {
        if (type === "delivered") {
            setRows(products.filter((item) => item.status === true))
        } else {
            setRows(products)
        }
    }, [pathname])

    return <div style={{ width: type === "singlePage" || type === "delivered" ? "80%" : "100%" }}
        className={darkMood ? "transactions dark" : "transactions"}>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Tracking ID</TableCell>
                        <TableCell align="center">Product</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Amount</TableCell>
                        <TableCell align="center">Payment Methode</TableCell>
                        <TableCell align="center">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center"><img src={row.img} alt="IMG" /></TableCell>
                            <TableCell align="center">{row.price}$</TableCell>
                            <TableCell align="center">{row.date}</TableCell>
                            <TableCell align="center">{row.amount}</TableCell>
                            <TableCell align="center">{row.payment}</TableCell>
                            <TableCell align="center" className='status'>
                                {row.status ? "Approved" : "Pending"}
                                <span className={row.status ? "approved" : "pending"}></span>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
}

export default Transactions;