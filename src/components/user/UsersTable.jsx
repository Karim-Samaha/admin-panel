import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Users, trending } from '../../data';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from "react";
import { DarkMoodContext } from "../../darkMoodContext";
const UsersTable = ({ type }) => {
    const { darkMood } = useContext(DarkMoodContext);
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([]);
    const { pathname } = useLocation();
    useEffect(() => {
        if (type === "users") {
            setRows(Users)
            setColumns([...standardCoulm,
            {
                field: 'fullName',
                headerName: 'Full name',
                description: 'This column has a value getter and is not sortable.',
                sortable: false,
                width: 200,
                renderCell: (params) => <span>{params.row.firstName + " " + params.row.lastName}</span>
            },
            { field: 'age', headerName: 'Age', width: 90, },
            {
                field: 'Email',
                headerName: 'Email',
                description: 'This column has a value getter and is not sortable.',
                sortable: false,
                width: 250,
                renderCell: (params) => <span>{params.row.firstName + "@gmail.com"}</span>
            },
            {
                field: 'status', headerName: 'Status', width: 90,
                renderCell: (params) =>
                    <>
                        <span style={{ fontWeight: "bold" }}>{params.row.online ? "Active" : "Passive"}</span>
                        <span className={params.row.online ? "active" : "passive"}></span>
                    </>
            },
            { field: 'view', headerName: 'View', width: 100, renderCell: (params) => <Link to={`../users/${params.row.id}`} className='more'>More</Link> },
            ])
        } else if (type === "products") {
            setRows(trending)
            setColumns([...standardCoulm,
            {
                field: 'name',
                headerName: 'Product Name',
                sortable: false,
                width: 300,
                renderCell: (params) => <span>{params.row.name}</span>
            },
            {
                field: 'platform',
                headerName: 'Platform',
                sortable: false,
                width: 300,
                renderCell: (params) => <span>{params.row.category}</span>
            },
            {
                field: 'price',
                headerName: 'Price',
                sortable: false,
                width: 200,
                renderCell: (params) => <span>{params.row.price}$</span>
            },
            ])
        }
    }, [pathname])

    const standardCoulm = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'img', headerName: 'Image', width: 140,
            renderCell: (params) => <img src={params.row.img} alt="" />
        },
    ];

    return (
        <div className={darkMood ? "tabel dark" : "tabel"} style={{ height: "95%", width: '80%', margin: "auto 0" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[8]}
                checkboxSelection
            />
        </div>
    )
}

export default UsersTable;