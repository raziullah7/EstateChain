import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import {FormEvent} from "react";

type Props = {
    property?: Property;
    closeForm: () => void;
    submitForm: (property: Property) => void;
}

export default function PropertyForm({property, closeForm, submitForm}: Props) {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        // stop submission and reload of the page
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const data: {[key: string]: FormDataEntryValue} = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // if the property is being Edited instead of being created
        if (property) data.id = property.id;

        submitForm(data as unknown as Property);
    }

    return (
        <Paper sx={{borderRadius: 3, padding: 3}}>
            <Typography variant="h5" gutterBottom color="primary">
                Create Property
            </Typography>
            <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column' gap={3}>
                <TextField name="title" label="Title" defaultValue={property?.title}/>
                <TextField name="description" label="Description" multiline rows={3} defaultValue={property?.description}/>
                <TextField name="category" label="Category" defaultValue={property?.category}/>
                <TextField name="address" label="Address" multiline rows={3} defaultValue={property?.address}/>

                <Box display='flex' justifyContent='end' gap={3}>
                    <Button color="inherit" onClick={closeForm}>
                        Cancel
                    </Button>
                    <Button color="success" variant="contained" type="submit">
                        Save
                    </Button>
                </Box>

            </Box>
        </Paper>
    )
}
