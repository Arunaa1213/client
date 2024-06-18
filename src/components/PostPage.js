import { formatISO9075 } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../userContext";

export default function PostPage() {
    const [postInfo, setPostInfo] = useState(null);
    const {userInfo} = useContext(UserContext);

    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`).then((response) => {
            response.json().then((postInfo) => {
                setPostInfo(postInfo);
            })
        })
    }, []);

    if(!postInfo) return '';

    return(
        <div className="flex justify-center">
            <div className="post-page container">
                <h1 className="flex flex-col text-center justify-center items-center text-4xl font-bold my-8">{postInfo.title}</h1>

                {userInfo.id === postInfo.author._id && (
                    <div className='edit'>
                        <Link to={`/edit/${postInfo._id}`} className='w-full sm:w-4/12 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Edit</Link>
                    </div>   
                )}
                <div className="image my-8">
                    <div class='flex flex-row'>
                        <p className="text-normal font-bold font-italic">{postInfo.author.email} </p>
                        <time className="ml-4">{formatISO9075(new Date(postInfo.createdAt))}</time>
                    </div>
                    <img src={`http://localhost:4000/${postInfo.cover}`} alt={postInfo.cover} class='object-cover h-48 w-full'/>
                </div>
                <p className="text-xl font-normal my-8">{postInfo.content}</p>
            </div>
        </div>
    )
}