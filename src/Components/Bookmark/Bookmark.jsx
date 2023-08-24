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
      // <p>{[...new Set(titles)]}</p>.....it is for (not duplicate elements)
    
    return (
        <div className='bookmark-container'>
           <h2>Bookmarked Blogs : {totalBlog}</h2>
           <div className='content'>
               {
               titles.map((title, index) => (
           <p key={index}>{title}</p>
                          )
                       )
          }
    </div>
            
        </div>
    );
};


export default Bookmark;