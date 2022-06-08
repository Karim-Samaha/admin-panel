import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import "../scss/dark.scss";
import { Users } from '../data';
import { useState, useEffect, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { DarkMoodContext } from '../darkMoodContext';


const options = Users.map((item) => ({
    label: item.firstName + " " + item.lastName,
    id: item.id
}));

const Search = () => {
    const { darkMood } = useContext(DarkMoodContext);
    const [value, setValue] = useState("");
    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        console.log(value)
    }, [value])
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    const linkStyle = {
        color: "black",
        textDecoration: "none",
        textAlign: "left",
    }

    return (
        <div>
            <Autocomplete className={darkMood ? "search dark" : "search"}
                value={value}
                onChange={handleChange}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                renderOption={(props, options) => <Stack>
                    <Button variant='text'>
                        <Link style={linkStyle} to={`/users/${options.id}`}>{options.label}</Link>
                    </Button>
                </Stack>}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Users" />}
            />
        </div>
    )
}

export default Search;