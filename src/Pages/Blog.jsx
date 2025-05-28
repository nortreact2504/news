import { NavLink } from "react-router-dom"

function Blog({blogItems, setBlogId}) {
    return (
        <div>
            <h3>Minu uudised</h3>
            {
                blogItems.map((blog) => {
                    return (
                        <div key={blog.id}>
                            <h4>{blog.title}</h4>
                            <div>
                                <img src={blog.pictureUrl} alt="" />
                            </div>
                            <NavLink 
                                to={`/news/${blog.id}`} 
                                onClick={()=>setBlogId(blog.id)}
                            >
                                Loe edasi ...
                            </NavLink>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Blog