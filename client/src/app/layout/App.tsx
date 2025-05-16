import {useState} from "react";
import {Box, Container, CssBaseline, Typography} from "@mui/material";
import NavBar from "./NavBar.tsx";
import PropertyDashboard from "../../features/properties/dashboard/PropertyDashboard.tsx";
import {useProperties} from "../../lib/Hooks/useProperties.ts";

function App() {
    const [selectedProperty, setSelectedProperty] = useState<Property | undefined>(undefined);
    // editMode: true means <PropertyForm/> is rendered
    // editMode: false means <PropertyForm/> is not rendered
    const [editMode, setEditMode] = useState(false);
    // doing the react-query call using useProperties() custom hook
    const {properties, isPending} = useProperties();

    // handle selection of property
    const handleSelectProperty = (id: string) => {
        setSelectedProperty(properties!.find(x => x.id === id));
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

    return (
        <Box sx={{backgroundColor: '#eee', minHeight: '100vh'}}>
            <CssBaseline/>
            <NavBar openForm={handleOpenForm}/>
            <Container maxWidth="xl" sx={{marginTop: 3}}>
                {
                    (!properties || isPending) ?
                        <Typography>Loading...</Typography> :
                        <PropertyDashboard
                            properties={properties}
                            selectProperty={handleSelectProperty}
                            cancelSelectProperty={handleCancelSelectProperty}
                            selectedProperty={selectedProperty}
                            editMode={editMode}
                            openForm={handleOpenForm}
                            closeForm={handleFormClose}
                        />
                }

            </Container>
        </Box>
    )
}

export default App
