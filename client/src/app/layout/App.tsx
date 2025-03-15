import {useEffect, useState} from "react";
import {Box, Container, CssBaseline} from "@mui/material";
import axios from "axios";
import NavBar from "./NavBar.tsx";
import PropertyDashboard from "../../features/properties/dashboard/PropertyDashboard.tsx";

function App() {

    const [properties, setProperties] = useState<Property[]>([]);
    const [selectedProperty, setSelectedProperty] = useState<Property | undefined>(undefined);
    // editMode: true means <PropertyForm/> is rendered
    // editMode: false means <PropertyForm/> is not rendered
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        axios.get<Property[]>('https://localhost:5001/api/properties')
            .then(res => setProperties(res.data));
    }, []);

    // handle selection of property
    const handleSelectProperty = (id: string) => {
        setSelectedProperty(properties.find(x => x.id === id));
    }

    // handle cancellation of property
    const handleCancelSelectProperty = () => {
        setSelectedProperty(undefined);
    }

    // Create or Edit property will open the FORM
    const handleOpenForm = (id?: string) => {
        if (id) handleSelectProperty(id);
        else handleCancelSelectProperty();
        setEditMode(true);
    }

    // to close the FORM after Create or Edit property
    const handleFormClose = () => {
        setEditMode(false);
    }

    const handleSubmitForm = (property: Property) => {
        if (property.id) { // edit property
            setProperties(properties.map(
                // if any property id matches with the passed property
                // then override that property with the passed property
                (x) => x.id === property.id ? property : x)
            );
        } else { // create property
            const newProperty = { ...property, id: properties.length.toString() };
            setSelectedProperty(newProperty);
            setProperties([...properties, newProperty]);
        }
        // closes the <PropertyForm/>
        setEditMode(false);
    }

    const handleDelete = (id: string) => {
        setProperties(properties.filter(x => x.id !== id));
    }

    return (
        <Box sx={{backgroundColor: '#eee'}}>
            <CssBaseline />
            <NavBar openForm={handleOpenForm}/>
            <Container maxWidth="xl" sx={{ marginTop: 3 }}>
                <PropertyDashboard
                    properties={properties}
                    selectProperty={handleSelectProperty}
                    cancelSelectProperty={handleCancelSelectProperty}
                    selectedProperty={selectedProperty}
                    editMode={editMode}
                    openForm={handleOpenForm}
                    closeForm={handleFormClose}
                    submitForm={handleSubmitForm}
                    deleteProperty={handleDelete}
                />
            </Container>
        </Box>
    )
}

export default App
