import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";
export default function PostComponent({ post, index }) {
    return (
        <div className='flex flex-row gap-4 mb-12' key={index}>
          <Link to={`/post/${post._id}`}>
            <img src={`http://localhost:4000/${post.cover}`} width={300} height={250} alt={post.cover}/>
          </Link>
          <div className='flex flex-col gap-2 ml-4'>
            <Link to={`/post/${post._id}`}>
              <h3 className='text-3xl font-bold'>{post.title}</h3>
            </Link>
            <div>
              <a href='#' className='text-medium font-medium mr-2'>{post.author.email}</a>
              <time>{formatISO9075(new Date(post.createdAt))}</time>
            </div>
            <p className='text-lg font-medium'>{post.summary}</p>
          </div>
        </div>
    )
}