import React from 'react';
import './Post.css';
import BlogPost from '../../Components/BlogPost/BlogPost';
import Sidebar from '../../Components/Sidebar/Sidebar';

function Post(props) {

    
    return (
        <section className="post__container">
            <BlogPost {...props} />
            <Sidebar />
        </section>
    )
}

export default Post;
