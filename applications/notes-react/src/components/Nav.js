import React from 'react'

export default function Nav() {
    return (
        <nav>
      <ul>
        <li>
          <span aria-hidden="true" role="img">
            🏠
          </span>
          <a>Home</a>
        </li>
        <li>
          <span aria-hidden="true" role="img">
            📓
          </span>
          <a>My Notes</a>
        </li>
        <li>
          <span aria-hidden="true" role="img">
            🌟
          </span>
          <a>Favorites</a>
        </li>
        <li>
          <span aria-hidden="true" role="img">
            ➕
          </span>
          <a>New</a>
        </li>
      </ul>
    </nav>
    )
}
