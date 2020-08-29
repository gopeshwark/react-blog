import React, { useState, useEffect } from 'react';
import './BlogPost.css';
import Card from '../UI/Card/Card';
import blogData from '../../data/blogPost.json';

function BlogPost(props) {
    
    const [post, setPost] = useState({});
    const [postId, setPostId] = useState('');

    useEffect(() => {
        const postId = props.match.params.postId;
        const cPost = blogData.data.find(data => data.id == postId);
    
        setPost(cPost);
           
        setPostId(postId)
    }, [post, props.match.params.postId]);

    // const aaaa = post.blogImage ? require(`../../Assets/blogPostImages/${post.blogImage}`) : null;
    console.log(post);
    

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
