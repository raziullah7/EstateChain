import {Grid2} from "@mui/material";
import PropertyList from "./PropertyList.tsx";
import PropertyDetail from "../details/PropertyDetail.tsx";
import PropertyForm from "../form/PropertyForm.tsx";

type Props = {
    properties: Property[]
    selectProperty: (id: string) => void
    cancelSelectProperty: () => void
    selectedProperty?: Property
    editMode: boolean
    openForm: (id: string) => void
    closeForm: () => void
    submitForm: (property: Property) => void
    deleteProperty: (id: string) => void
}

export default function PropertyDashboard(
    {
        properties,
        selectProperty,
        cancelSelectProperty,
        selectedProperty,
        editMode,
        openForm,
        closeForm,
        submitForm,
        deleteProperty
    }: Props) {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <PropertyList
                    properties={properties}
                    selectProperty={selectProperty}
                    deleteProperty={deleteProperty}
                />
            </Grid2>
            <Grid2 size={5}>
                {// if selectedProperty exists and edit mode is off, then render <PropertyDetail/>
                    selectedProperty && !editMode &&
                    <PropertyDetail
                        property={selectedProperty}
                        cancelSelectProperty={cancelSelectProperty}
                        openForm={openForm}
                    />
                }

                {// if edit mode is on, then render <PropertyForm/>
                    editMode &&
                    <PropertyForm
                        submitForm={submitForm}
                        closeForm={closeForm}
                        property={selectedProperty}
                    />
                }

            </Grid2>
        </Grid2>
    )
}