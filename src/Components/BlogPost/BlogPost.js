import React, { useState, useEffect } from 'react';
import './BlogPost.css';
import Card from '../UI/Card/Card';
import blogData from '../../data/blogPost.json';

function BlogPost(props) {
    
    const [post, setPost] = useState({});
    const [postSlug, setPostSlug] = useState('');

    useEffect(() => {
        const postSlug = props.match.params.postSlug;
        const cPost = blogData.data.find(data => data.slug === postSlug);
    
        setPost(cPost);
           
        setPostSlug(postSlug)
    }, [post, props.match.params.postSlug]);

   
    

    return (      
        <div className="blogPost__container" >
            <Card>
                {post && (
                    <>
                        <div className="blogPost__header">
                            <span className="blogPost__category">{post.blogCategory}</span>
                            <h1 className="blogPost__postTitle">{post.blogTitle}</h1>
                            <span className="blogPost__postedBy">Posted on {post.postedOn} by {post.author}</span>
                        </div>
                        <div className="blogPost__imageContainer">
                            <img src={ post.blogImage ? require(`../../Assets/blogPostImages/${post.blogImage}`) : null } alt="Post"/>
                        </div>
                        <div className="blogPost__postContent">
                            <h3>{post.blogTitle}</h3>
                            <p>{post.blogText}</p>
                        </div>
                    </>
                )}
                
            </Card>
        </div>        
    )
}

export default BlogPost
