import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import agent from "../api/agent";

export const useProperties = () => {
    // getting the QueryClient instance to invalidate the cache
    const queryClient = useQueryClient();

    // getting data from the API
    const {data: properties, isPending} = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
            const response = await agent.get<Property[]>("/properties");
            return response.data;
        }
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
            await agent.post("/properties", property)
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

    return {updateProperty, properties, isPending, createProperty, deleteProperty};
}