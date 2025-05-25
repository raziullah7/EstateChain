import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import {FormEvent} from "react";
import {useProperties} from "../../../lib/Hooks/useProperties.ts";
import { useNavigate, useParams } from "react-router";

export default function PropertyForm() {
    // using the custom hook to update the data in the API
    const {id} = useParams();
    const {updateProperty, createProperty, property, isLoadingProperty} = useProperties(id);
    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        // stop submission and reload of the page
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const data: {[key: string]: FormDataEntryValue} = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // if the property is being Edited instead of being created
        if (property) {
            data.id = property.id;
            await updateProperty.mutateAsync(data as unknown as Property);
            navigate(`/properties/${property.id}`);
        } else {
            createProperty.mutate(data as unknown as Property, {
                onSuccess: (id) => navigate(`/properties/${id}`)
            });
        }
    }

    if (isLoadingProperty) return <Typography>Loading Property...</Typography>

    return (
        <Paper sx={{borderRadius: 3, padding: 3}}>
            <Typography variant="h5" gutterBottom color="primary">
                {property ? "Edit Property" : "Create Property"}
            </Typography>
            <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column' gap={3}>
                <TextField name="title" label="Title"
                 defaultValue={property?.title}/>

                <TextField name="description" label="Description"
                 multiline rows={3} defaultValue={property?.description}/>

                <TextField name="category" label="Category"
                 defaultValue={property?.category}/>

                <TextField name="address" label="Address"
                 multiline rows={3} defaultValue={property?.address}/>

                <Box display='flex' justifyContent='end' gap={3}>
                    <Button color="inherit" onClick={() => {}}>
                        Cancel
                    </Button>
                    <Button color="success" variant="contained" type="submit" 
                    disabled={updateProperty.isPending || createProperty.isPending}>
                        Save
                    </Button>
                </Box>

            </Box>
        </Paper>
    )
}
