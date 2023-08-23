import React from 'react';
import './Time.css'

const Time = (props) => {
    // console.log(props.time);
    const time=props.time;
    let totalReadTime=0;
    for(const blog of time){
        totalReadTime=totalReadTime+blog.blog_read_time;

    }

    return (
        <div className='bookmark-time'>
            <p className='read-time'>
                Spend time on read : {totalReadTime}
            </p>
        </div>
    );
    
    };

export default Time;