import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    // console.log(props.bookmark);
    const bookmark=props.bookmark;
    let totalReadTime=0;
    let totalBlog=0;
    for(const blog of bookmark){
      totalReadTime=totalReadTime+blog.blog_read_time;
      totalBlog=totalBlog+blog.quantity;
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