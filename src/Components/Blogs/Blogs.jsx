import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';
import { addToDb, getBookmark } from '../../../utilities/fakeDb';
import Time from '../Time/Time';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Blogs = () => {
    const [blogs,setBlogs]=useState([]);
    const [bookmark,setBookmark]=useState([]);
    const [time,setTime]=useState([]);
  

   useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
   },[])

  //  useEffect(()=>{
  //    const storedBookmark=getBookmark();
  //    const savedBookmark=[];
  //   //  step 1:get id 
  //   for(const id in storedBookmark){
  //     // step 2:get the blog by using id 
  //     const addedBlog=blogs.find(blog=>blog.blog_id===id);
  //     if(addedBlog){
  //       // step 3:get quantity of the blog 
  //       const quantity=storedBookmark[id];
  //       addedBlog.quantity=quantity;
  //       // step 4:add the addedBlog to the savedBookmark
  //       savedBookmark.push(addedBlog);
  //     }
  //   }
  
  //   setBookmark(savedBookmark);
  // },[blogs])

   const handleMarkAsRead=(blog)=>{
    const newTime=[...time,blog];
    setTime(newTime);
   }

   const handleBookmark = (blog) => {
    const exist = bookmark.find((bm) => bm.id === blog.blog_id);
    
    if (exist) {
      toast.error('Already bookmarked');
     
    } else {
      toast.success('Added to bookmarks');
      setBookmark([...bookmark, blog]);
    }
  };
  

    return (
        <div className='programming-container'>
            <div>
              {
                blogs.map(blog=><Blog
                key={blog.blog_id}
                blog={blog}
                handleMarkAsRead={handleMarkAsRead}
                handleBookmark={handleBookmark}></Blog>)
              }
            </div>
            <div>
               <Time time={time}></Time>
               <Bookmark bookmark={bookmark}></Bookmark>
               
            </div>
        </div>
    );
};

export default Blogs;