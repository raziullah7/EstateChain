import axios from "axios";

// making sleep function for fake delay
const sleep = (delay: number) => {
    return new Promise(resolve => {
            setTimeout(resolve, delay)
        }
    );
}

// assigning a baseURL to the agent
const agent = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// using interceptor to cause a delay
agent.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
})

export default agent;