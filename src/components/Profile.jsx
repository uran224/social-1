import React from 'react';

const Profile = () => {
    return (
        <div className='content'>

        <div>
        <img src='https://www.markgray.com.au/images/gallery/large/wanaka-tree.jpg' />
        </div>

        <div>
          <img className='ava' src='https://www.marieclaire.com.au/media/43934/maya-angelou.jpg?width=720&center=0.0,0.0' />
          
          description
        </div>

        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
            <div>
              post 3
            </div>
          </div>
        </div>
      </div>
    );
}

export default Profile;