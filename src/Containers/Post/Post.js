import React from 'react';
import './Post.css';
import BlogPost from '../../Components/BlogPost/BlogPost';
import Layout from '../../Components/Layout/Layout';

function Post(props) {

    
    return (
        
        <Layout>
            <BlogPost {...props} />
        </Layout>
        
    )
}

export default Post;
