import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    // console.log(props.bookmark);
    const bookmark=props.bookmark;
    let totalBlog=0;
    const titles = [];
    for(const blog of bookmark){
      blog.quantity=blog.quantity||1;
      titles.push(blog.blog_title);
      totalBlog=totalBlog+blog.quantity;
      }
       
    
    return (
        <div className='bookmark-blogs'>
          <p className='bookmark-blog-title'>Bookmarked Blogs :{totalBlog} </p>
          <div className='blog-title-container'>
             <p>{[...new Set(titles)]}</p>
              
          </div>
            
        </div>
    );
};


export default Bookmark;