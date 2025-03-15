import {Grid2, List, ListItem, ListItemText} from "@mui/material";

type Props = {
    properties: Property[]
}

export default function PropertyDashboard({properties}: Props) {
    return (
        <Grid2 container>
            <Grid2 size={9}>
                <List>
                    {properties.map((property) => (
                        <ListItem key={property.id}>
                            <ListItemText>{property.title}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Grid2>
        </Grid2>
    )
}