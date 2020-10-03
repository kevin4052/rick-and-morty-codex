import React from 'react'

export default function TitleSection({name, url, status, species}) {
    return (
        <div className="section">
            <a href={url} rel="nofollow noopener noreferrer" target="_blank">
                <h2>{name}</h2>
            </a>
            <span className="status">
                <span className="status-icon"></span>
                {`${status} - ${species}`}
            </span>
        </div>
    )
}
