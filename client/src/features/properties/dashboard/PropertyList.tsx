import {Box} from "@mui/material";
import PropertyCard from "./PropertyCard.tsx";

type Props = {
    properties: Property[]
    selectProperty: (id: string) => void
}

export default function PropertyList({properties, selectProperty}: Props) {
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 3}}>
            {properties.map(property => (
                <PropertyCard
                    key={property.id}
                    property={property}
                    selectProperty={selectProperty}
                />
            ))}
        </Box>
    )
}