import React from 'react';
import Post from './Post';

const DUMMY_DATA = [
  {
    id: '123',
    username: 'Rojin',
    userImg: 'https://cdn.devdojo.com/users/December2021/rojinpm20241.jpg',
    img: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/1KukQcMXRFOIMAfrhFv7_youtube-watermark_4x-ranks.png',
    caption: 'This is awesome!!!!',
  },
  {
    id: '123',
    username: 'Sonny sangha',
    userImg: 'https://avatars.githubusercontent.com/u/24712956?v=4',
    img: 'https://pbs.twimg.com/profile_images/1587503936503619589/x2bDktpK_400x400.jpg',
    caption: 'This is awesome!!!!',
  }
  ]
  

function Posts() {
  return (
    <>

       {
 
           DUMMY_DATA &&
             
              DUMMY_DATA.map((post) => (

                <Post key={post.id} id={post.id}
                username={post.username}
                img={post.img}
                userImg={post.userImg}
                caption={post.caption}/>

              ))


        }
      
    </>
  );
}



export default Posts;
