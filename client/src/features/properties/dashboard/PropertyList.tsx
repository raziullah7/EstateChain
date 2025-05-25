import {Box, Typography} from "@mui/material";
import PropertyCard from "./PropertyCard.tsx";
import { useProperties } from "../../../lib/Hooks/useProperties.ts";

export default function PropertyList() {
    // doing the react-query call using useProperties() custom hook
    const {properties, isPending} = useProperties();

    if (!properties || isPending) {
        return <Typography>Loading...</Typography>
    }
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 3}}>
            {properties.map(property => (
                <PropertyCard
                    key={property.id}
                    property={property}
                />
            ))}
        </Box>
    )
}