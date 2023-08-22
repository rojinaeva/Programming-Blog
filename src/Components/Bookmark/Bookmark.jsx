import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    // console.log(props.bookmark);
    const bookmark=props.bookmark;
    let totalReadTime=0;
    for(const blog of bookmark){
      totalReadTime=totalReadTime+blog.blog_read_time;
    }

    return (
        <div className='bookmark'>
            <div className='read-time'>
              <span>Spend time on read: {totalReadTime} min </span>
            </div>
        </div>
    );
};

export default Bookmark;