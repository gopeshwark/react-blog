import React from 'react';
import './Post.css';
import BlogPost from '../../Components/BlogPost/BlogPost';
import Sidebar from '../../Components/Sidebar/Sidebar';

function Post() {
    return (
        <section className="post__container">
            <BlogPost />
            <Sidebar />
        </section>
    )
}

export default Post;
