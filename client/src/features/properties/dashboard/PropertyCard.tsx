import {Box, Button, Card, CardActions, CardContent, Chip, Typography} from "@mui/material";

type Props = {
    property: Property;
    selectProperty: (id: string) => void
    deleteProperty: (id: string) => void
}

export default function PropertyCard({property, selectProperty, deleteProperty}: Props) {
    return (
        <Card sx={{borderRadius: 3, maxWidth: '410px', minWidth: '410px'}}>
            <CardContent>
                <Typography variant='h5'>{property.title}</Typography>
                <Typography sx={{color: 'text.secondary', marginBottom: 1}}>{property.updatedOn}</Typography>
                <Typography variant='body2'>{property.description}</Typography>
                <Typography variant='subtitle1'>{property.address}</Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Chip label={property.category} variant='outlined' />
                <Box display='flex' gap={1}>
                    <Button
                        onClick={() => selectProperty(property.id)}
                        size='medium'
                        variant='contained'>View
                    </Button>
                    <Button
                        onClick={() => deleteProperty(property.id)}
                        size='medium'
                        color='error'
                        variant='contained'>Delete
                    </Button>
                </Box>
            </CardActions>
        </Card>
    )
}
