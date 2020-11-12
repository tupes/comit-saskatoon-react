import React from 'react'

export default function Aside() {
    return (
      <aside className="note-actions">
        <ul>
          <li>
            <button>Remove Favorite</button>
          </li>
          <li>
            <button>Edit</button>
          </li>
          <li>
            <button>Delete Note</button>
          </li>
        </ul>
      </aside>
    )
}
