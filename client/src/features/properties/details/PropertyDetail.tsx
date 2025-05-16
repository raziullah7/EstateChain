import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import {useProperties} from "../../../lib/Hooks/useProperties.ts";

type Props = {
    selectedProperty: Property;
    cancelSelectProperty: () => void;
    openForm: (id: string) => void;
}

export default function PropertyDetail({selectedProperty, cancelSelectProperty, openForm}: Props) {
    const {properties} = useProperties();
    const property = properties!.find(x => x.id === selectedProperty.id)!;
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
            <Button color="primary" onClick={() => openForm(property.id)}>
                Edit
            </Button>
            <Button color="inherit" onClick={cancelSelectProperty}>
                Cancel
            </Button>
        </CardActions>
    </Card>
  )
}
