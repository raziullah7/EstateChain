import {Grid2} from "@mui/material";
import PropertyList from "./PropertyList.tsx";

export default function PropertyDashboard() {
    return (
        <Grid2 container spacing={3}>
            <Grid2>
                <PropertyList />
            </Grid2>
            {/* <Grid2 size={5}>
                Property Filters go
            </Grid2> */}
        </Grid2>
    )
}