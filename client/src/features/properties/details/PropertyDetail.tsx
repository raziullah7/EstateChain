import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router";
import { useProperties } from "../../../lib/Hooks/useProperties";

export default function PropertyDetail() {
    const navigate = useNavigate();
    const {id} = useParams();

    const {property, isLoadingProperty} = useProperties(id);

    if (isLoadingProperty) return <Typography>Loading...</Typography>

    if (!property) return <Typography>Property Not Found.</Typography>

    return (
        <Card sx={{borderRadius: 3}}>
            <CardMedia
                component='img'
                src={`/images/categoryImages/${property.category}.jpg`}
            />
            <CardContent>
                <Typography variant="h5">{property.title}</Typography>
                <Typography variant="subtitle1" fontWeight="light">{property.title}</Typography>
                <Typography variant="body1">{property.description}</Typography>
            </CardContent>
            <CardActions>
                <Button color="primary" component={Link} to={`/manage/${property.id}`}>
                    Edit
                </Button>
                <Button color="inherit" onClick={() => navigate("/properties")}>
                    Cancel
                </Button>
            </CardActions>
        </Card>
  )
}
