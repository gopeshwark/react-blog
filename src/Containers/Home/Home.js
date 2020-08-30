import React from 'react';
import './Home.css';
import Card from '../../Components/UI/Card/Card';
import blogData from '../../data/blogPost.json';
import RecentPosts from '../../Components/RecentPosts/RecentPosts';
import Layout from '../../Components/Layout/Layout';

const SideImage = props => {
    return (
        <div style={{height: props.height}}>
            <img src={props.src} alt=""/>
        </div>
    )
}

function Home(props) {

    const galleryHeight = 450;
    const galleryStyle = {
        height: galleryHeight + 'px',
        overflow:'hidden'
    }

    const sideImageHeight = galleryHeight / 3;

    return (
        <div>
            <Card>
                <div className="home__galleryPost" style={galleryStyle}>
                    <section style={{width:'70%'}}>
                        <div className="home__mainImageWrapper">
                            <img src="https://iso.500px.com/wp-content/uploads/2016/04/stock-photo-150595123-1500x1000.jpg" alt=""/>
                        </div>
                    </section>
                    <section className="home__sideImageWrapper" style={{ width: '30%' }}>                        
                        <SideImage height={sideImageHeight} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZW_hmPGvpEhTi7bLpyqGGh_5T-3yrHjlplg&usqp=CAU"/>
                        <SideImage height={sideImageHeight} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1asbpYJo59CTwceOMk5EXc_5sNHvxeIC9vw&usqp=CAU"/>
                        <SideImage height={sideImageHeight} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRciBt1jh6wBxwyX9k4sLQMATN-MpnSwwRGXQ&usqp=CAU"/>                        
                    </section>
                </div>                
            </Card>           
            <Layout>
                <RecentPosts style={{width: '70%'}}/>
            </Layout>
           
           
        </div>
    )
}

export default Home;
