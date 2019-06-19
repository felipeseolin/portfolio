import React from 'react';

const BlogPreview = ({title, link, text}) => (
    <>
        <div className="blogPreview">
            <a href={link}>
                <h3>{title}</h3>
                <p>{text}</p>
            </a>
            <hr/>
        </div>
    </>
);

export default BlogPreview;
