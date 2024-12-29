import axios from "axios";
import { notFound } from "next/navigation";

export async function fetchData(postId: string): Promise<any> {

    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        return response.data;
    } catch (error: any) {
        console.log(`Error Occured ${error.message}`);
        notFound();
    }
}