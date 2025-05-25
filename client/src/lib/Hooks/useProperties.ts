import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import agent from "../api/agent";

export const useProperties = (id?: string) => {
    // getting the QueryClient instance to invalidate the cache
    const queryClient = useQueryClient();

    // getting all data from the API
    const {data: properties, isPending} = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
            const response = await agent.get<Property[]>("/properties");
            return response.data;
        }
    });

    // getting 1 record from the API
    const {data: property, isLoading: isLoadingProperty} = useQuery({
        queryKey: ['properties', id],
        queryFn: async () => {
            const response = await agent.get<Property>(`/properties/${id}`);
            return response.data;
        },
        // double not operator casts the string into a boolean
        // if ID parameter is passed, only then run this query
        enabled: !!id
    });

    // updating the data in the API
    const updateProperty = useMutation({
        mutationFn: async (property: Property) => {
            await agent.put("/properties", property);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['properties']
            });
        }
    });

    // creating a new property
    const createProperty = useMutation({
        mutationFn: async (property: Property) => {
            let response = await agent.post("/properties", property);
            return response.data;
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ["properties"]
            });
        }
    });

    // deleting a new property
    const deleteProperty = useMutation({
        mutationFn: async (id: string) => {
            await agent.delete(`/properties/${id}`)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ["properties"]
            });
        }
    });

    return {
        properties, isPending,              // get all properties
        property, isLoadingProperty,        // get 1 property by id
        createProperty,                     // post a property
        updateProperty,                     // put a property
        deleteProperty                      // delete a property
    };
}