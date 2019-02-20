// the props are profile and loggedIn, destructuring on the funciton call

import React from 'react';

const profile = ({profile}) => {
    return (
        <span>{profile.name}</span>
    )
};
export default profile;