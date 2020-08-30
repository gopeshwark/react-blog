import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import Card from '../UI/Card/Card';
import blogData from '../../data/blogPost.json';
import { NavLink } from 'react-router-dom';


function Sidebar(props) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const recentPosts = blogData.data;
        setPosts(recentPosts);
    }, []);
    
    
    return (
        <div className="sidebar__container">
            <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
                <div className="sidebar__cardHeader">
                    <span>About Us</span>                                       
                </div>
                <div className="sidebar__profileImage">
                    <img src="https://images.unsplash.com/photo-1487035242901-d419a42d17af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1568&q=80" alt="About-Us"/>
                </div>
                <div className="sidebar__cardText">
                    <p>Hey, my name is Gopeshwar Kuma          wat. I am a software developer sepcialised in front-end development.</p>
                </div>
            </Card>

            <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
                <div className="sidebar__cardHeader">
                    <span>Social Network</span>
                    
                </div>
            </Card>

            <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
                <div className="sidebar__cardHeader">
                    <span>Recent Posts</span>
                    
                </div>
                <div className="sidebar__recentPosts">
                    {
                        posts.map(post => (
                            <NavLink key={post.id} to={`/post/${post.slug}`}>
                                <div className="sidebar__recentPost">
                                    <h3>{post.blogTitle}</h3>
                                    <span>{post.postedOn}</span>
                                </div>
                            </NavLink>                        
                        ))
                    }
                </div>               
            </Card>
        </div>
    )
}

export default Sidebar
