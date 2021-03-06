import React from 'react';
import classes from './Post.module.css'

type PostPropsType = {
    message: string,
    likesCount: number
}
export const Post = (props: PostPropsType) => {
    return (
        <div className={classes.item}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Yaponchik_mishka.jpg"/>
            {props.message}
            <div><span>like</span></div>
        </div>
    )
}