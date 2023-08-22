import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';


const Blogs = () => {
    const [blogs,setBlogs]=useState([]);
    const [bookmark,setBookmark]=useState([]);

   useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
   },[])

   const handleMarkAsRead=(blog)=>{
    // console.log('marked',blog);
    const newBookmark=[...bookmark,blog];
    setBookmark(newBookmark);
   }
    return (
        <div className='programming-container'>
            <div className='blogs-container'>
              {
                blogs.map(blog=><Blog
                key={blog.blog_id}
                blog={blog}
                handleMarkAsRead={handleMarkAsRead}></Blog>)
              }
            </div>
            <div className='bookmark-container'>
               <Bookmark bookmark={bookmark}></Bookmark>
            </div>
        </div>
    );
};

export default Blogs;