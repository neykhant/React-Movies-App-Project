//jshint ignore:start

import React from 'react'

const Like = (props) => {
    const { Liked, onClick} = props;
    let classes = "fa-heart fa";
    classes += Liked ? "s" : "r";

    return ( 
        <i className={classes} onClick={onClick}></i>
     );
}
 
export default Like;