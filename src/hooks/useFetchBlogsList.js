import { fetchBlogPostsList } from "../services/postsService";
import { useEffect, useState } from "react";

export default function useFetchBlogsList() {
    const [blogItems, setBlogItems] = useState([])
    useEffect(
        () => {
            const fetchList = async() => {
               const posts = await fetchBlogPostsList()
               setBlogItems(() => {
                console.log(posts)
                return posts
               })
            }
            fetchList()
        },
        []
    )

    return {blogItems, setBlogItems}

}