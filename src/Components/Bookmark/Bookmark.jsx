import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    // console.log(props.bookmark);
    const bookmark=props.bookmark;
    let totalReadTime=0;
    let totalBlog=0;
    // const titles = [];
   
    for(const blog of bookmark){
      blog.quantity=blog.quantity||1;
      
      totalReadTime=totalReadTime+blog.blog_read_time;
      totalBlog=totalBlog+blog.quantity;
      // for (let i = 1; i === totalBlog; i++) {
      //   titles.push(blog.blog_title);
      // }
      
    
      
    }

    return (
        <div className='bookmark-sidebar'>
          <span className='read-time'>Spend time on read: {totalReadTime} min </span>
          <span className='bookmark-sidebar-blogs'>Bookmarked Blogs :{totalBlog}</span>
          <div className='bookmarked-title'>
             <span></span>
          </div>
            
              
            
            
        </div>
    );
};

export default Bookmark;