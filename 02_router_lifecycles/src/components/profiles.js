import React from 'react';
import { Link } from 'react-router-dom';

//HOC
import Auth from '../hoc/auth';
import Card from '../hoc/card';

const Profile = (props) => {
    
    const redir = () => {
        // props.history.push('/')   
    }


    return (
        <Auth>
            <Card>
                <Link to={{
                    pathname: `${props.match.url}/posts`
                }}>take to /profile/posts</Link>
            </Card>
        </Auth>
    )
}

export default Profile;