import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs,setBlogs]=useState([]);

   useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
   },[])
    return (
        <div className='programming-container'>
            <div className='blogs-container'>
              {
                blogs.map(blog=><Blog
                key={blog.blog_id}
                blog={blog}></Blog>)
              }
            </div>
            <div className='bookmark-container'>
               <h3>this is bookmarked blogs</h3>
            </div>
        </div>
    );
};

export default Blogs;