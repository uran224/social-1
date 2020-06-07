import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) (
        props.setUsers( [
            {
                id: 1,
                photoUrl: 'https://c1.staticflickr.com/6/5202/5250519868_82f526213c_b.jpg',
                followed: false,
                fullname: 'Chloi',
                status: 'I am boss',
                location: { city: 'Minsk', country: 'Belarus' }
            },
            {
                id: 2,
                photoUrl: 'https://thumbs.gfycat.com/TenderLeanHuia-mobile.jpg',
                followed: true,
                fullname: 'Cherem',
                status: 'I am boss-2',
                location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 3,
                photoUrl: 'https://3.bp.blogspot.com/-Xh6MW4hhlh4/XDX0KAvQDsI/AAAAAAACguc/qpeMxtVgZLUHzRe9jSsRaU7KVnk2UfasACLcBGAs/s1600/Ashley-Graham-Marina-Rinaldi-Spring-2019-Campaign01.jpg',
                followed: false,
                fullname: 'Marina',
                status: 'I am boss-3',
                location: { city: 'Kiev', country: 'Ukrain' }
            }
        ]
        )
    )

    

    return <div>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}  />
                    </div>
                    <div>
                        {u.followed 
                            ? <button onClick={() => ( props.unfollow(u.id) ) } >Unfollow</button> 
                            : <button onClick={() => ( props.follow(u.id) ) } >Follow</button> 
                        }                      
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.location.country}
                        </div>
                        <div>
                            {u.location.city}
                        </div>
                    </span>

                </span>

            </div> )
        }
    </div>
}


export default Users;