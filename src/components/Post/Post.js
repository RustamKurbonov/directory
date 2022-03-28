import React from 'react'

const Post = props => {
    return (
        <div className="post__item">
            <div className="post__title">
                {props.title}
            </div>
            <div className="post__text">
                {props.text}
            </div>
        </div>
    )
}

export default Post;