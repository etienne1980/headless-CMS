import { createClient } from "contentful";
import { useQuery } from "@tanstack/react-query";

// Contentful client setup
const client = createClient({
    space: 'h9m629eamgpo',
    environment: 'master',
    accessToken: import.meta.env.VITE_API_KEY,
});



// Custom hook for fetching projects
export const useFetchProjects = () => {

    const { isError, isLoading, data } = useQuery({
        queryKey: ['tasks'], // This is the unique identifier for caching
        queryFn: () =>
            client.getEntries({
                content_type: 'projects', // Define your content type in Contentful
            }),
    });

    // If data is being loaded, return the loading state
    if (isLoading) {
        return { isError, isLoading};
    }

    // If there's an error, return the error state
    if (isError) {
        return { isError, isLoading};
    }

    // Map the data into the desired format
    const { items } = data;

    const result = items.map((item) => {
        // console.log(item)

        const { title, url, image } = item.fields;
        const  id  = item.sys.id
        const img = image?.fields?.file?.url;

        // the var -> result <- is an array containing object with these keys
        return { title, url, id, img};
    });

    // returning what from the webhook?
    return { isError, isLoading, result };
};