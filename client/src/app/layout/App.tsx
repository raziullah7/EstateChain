import {Box, Container, CssBaseline} from "@mui/material";
import NavBar from "./NavBar.tsx";
import { Outlet } from "react-router";

function App() {
    return (
        <Box sx={{backgroundColor: '#eee', minHeight: '100vh'}}>
            <CssBaseline/>
            <NavBar />
            <Container maxWidth="xl" sx={{marginTop: 3}}>
                <Outlet />
            </Container>
        </Box>
    );
}

export default App
