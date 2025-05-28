import { useEffect, useState } from "react";
import { fetchBlogPostDetails } from "../services/postsService";

export default function useFetchBlogPostDetails(blogId) {
    const [blogDetails, setBlogDetails] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(
        () => {
            const _fetchDetails = async () => {
                try {
                    setError('')
                    setLoading(true)
                    const details = await fetchBlogPostDetails(blogId)
                    setBlogDetails(()=> details)
                } catch(error) {
                    setError(error.message)
                }
                setLoading(false)
            }
            _fetchDetails()
        },
        [blogId]
    )

    return {blogDetails, setBlogDetails, error, loading}
}