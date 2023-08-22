import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark} from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    // console.log(props.blog);
    const {blog_cover_image,author_image,author_name,blog_title
,blog_written_date,blog_read_time}=props.blog;
const handleMarkAsRead=props.handleMarkAsRead;
    return (
        <div className='blog-container'>
            <img src={blog_cover_image} alt="" />
            <div className='author-bookmark-info'>
                <div className='author'>
                  <img src={author_image} alt="" />
                  <div className='author-info'>
                  <span>{author_name}</span>
                  <p>{blog_written_date}(7 days ago)</p>
                  </div>

                </div>
                <div className='bookmark'>
                   <p>{blog_read_time}min read</p>
                   <span><FontAwesomeIcon icon={faBookmark} /></span>
                </div>
            </div>
            <p className='blog-title'>{blog_title}</p>
            <div className='blog-start'>
                <span>#beginners</span>
                <span>#programming</span>
            </div>
            <button onClick={()=>handleMarkAsRead(props.blog)} className='mark-btn'>Mark as read</button>
        </div>
    );
};

export default Blog;