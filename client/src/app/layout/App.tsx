import './App.css'
import {useEffect, useState} from "react";
import {List, ListItem, ListItemText, Typography} from "@mui/material";
import axios from "axios";

function App() {

    const [properties, setProperties] = useState<Property[]>([]);

    useEffect(() => {
        axios.get<Property[]>('https://localhost:5001/api/properties')
            .then(res => setProperties(res.data));
    }, []);

    return (
        <>
            <Typography variant="h3">Reactivities</Typography>
            <List>
                {properties.map((property) => (
                    <ListItem key={property.id}>
                        <ListItemText>{property.title}</ListItemText>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default App
