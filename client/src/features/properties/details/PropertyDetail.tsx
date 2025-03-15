import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

type Props = {
    property: Property;
    cancelSelectProperty: () => void;
    openForm: (id: string) => void;
}

export default function PropertyDetail({property, cancelSelectProperty, openForm}: Props) {
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
