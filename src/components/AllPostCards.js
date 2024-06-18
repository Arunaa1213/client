import { useEffect, useState } from 'react';
import PostComponent from './post';

// const posts = [
//     {image:'./Images/image1.jpg', heading:'Fulidhoo Island Guide: Shark & Stingray Beach In Maldives', description:'Fulidhoo is a small, budget-friendly local island we visited recently in the Maldives, along with Dhigurah island, which we loved for its beaches and sandbar.The island is only about 700 meters long and 250 meters wide, which means you can walk from any hotel to the beach or pier in 5 minutes, or circle the whole island on foot in less than 30 minutes. This is pretty handy.'},
//     {image:'./Images/image1.jpg', heading:'Fulidhoo Island Guide: Shark & Stingray Beach In Maldives', description:'Fulidhoo is a small, budget-friendly local island we visited recently in the Maldives, along with Dhigurah island, which we loved for its beaches and sandbar.The island is only about 700 meters long and 250 meters wide, which means you can walk from any hotel to the beach or pier in 5 minutes, or circle the whole island on foot in less than 30 minutes. This is pretty handy.'},
//     {image:'./Images/image1.jpg', heading:'Fulidhoo Island Guide: Shark & Stingray Beach In Maldives', description:'Fulidhoo is a small, budget-friendly local island we visited recently in the Maldives, along with Dhigurah island, which we loved for its beaches and sandbar.The island is only about 700 meters long and 250 meters wide, which means you can walk from any hotel to the beach or pier in 5 minutes, or circle the whole island on foot in less than 30 minutes. This is pretty handy.'},
//     {image:'./Images/image1.jpg', heading:'Fulidhoo Island Guide: Shark & Stingray Beach In Maldives', description:'Fulidhoo is a small, budget-friendly local island we visited recently in the Maldives, along with Dhigurah island, which we loved for its beaches and sandbar.The island is only about 700 meters long and 250 meters wide, which means you can walk from any hotel to the beach or pier in 5 minutes, or circle the whole island on foot in less than 30 minutes. This is pretty handy.'}
// ]

export default function AllPostCards() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/post').then((response) => {
            response.json().then((posts) => {
                console.log('posts', posts)
                setPosts(posts);
            })
        })
    } , [])
    return (
        <section className='flex justify-center my-12'>
            <div className='posts container flex flex-col gap-4'>
            {posts.length>0 && posts.map((post, index) => (
                <PostComponent post={post} index={index} key={index}/>
            ))}
            </div>
        </section>
    )
}