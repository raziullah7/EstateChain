import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import PropertyDashboard from "../../features/properties/dashboard/PropertyDashboard";
import PropertyForm from "../../features/properties/form/PropertyForm";
import PropertyDetail from "../../features/properties/details/PropertyDetail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <HomePage />},
            {path: "properties", element: <PropertyDashboard />},
            {path: "properties/:id", element: <PropertyDetail />},
            {path: "createProperty", element: <PropertyForm key="create" />},
            {path: "manage/:id", element: <PropertyForm />},
        ]
    }
])