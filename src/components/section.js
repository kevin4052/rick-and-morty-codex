import React from 'react'

export default function section({url, location}) {
    return (
        <div className="section">
            <span className="text-grey">First seen in:</span>
            <a href={url} rel="nofollow noopener noreferrer" target="_blank">{location}</a>
        </div>
    )
}
