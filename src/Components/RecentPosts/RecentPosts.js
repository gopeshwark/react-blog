import React from 'react';
import './RecentPosts.css';
import Card from '../UI/Card/Card';

function RecentPosts(props) {
    return (
        <div style={props.style}>
            <Card style={{marginBottom:'20px'}}>
                <div className="home__postImage">
                    <img src="https://www.readersdigest.ca/wp-content/uploads/2018/07/most-beautiful-trees-dragon-blood-trees.jpg" alt=""/>
                </div>
                <div style={{textAlign: 'center'}}>
                    <span>Featured</span>
                    <h2>Beauty Lies Within Special</h2>
                    <span>Posted on Apr 02, 2017 by Hasina Shaikh</span>
                    <p>Blessed you're lights. There. Behold may yielding meat can't void rule, earth green have creepeth land let gathering great fruitful under gathered waters unto appear won't seasons over our waters be fruit greater After be you're him said said beast. Dominion him that let grass.</p>
                    <button>Read More</button>
                </div>
            </Card>                    
        </div>
    )
}

export default RecentPosts;
