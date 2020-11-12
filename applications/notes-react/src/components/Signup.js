import React from 'react'
import '../styles/app.css';

export default function Signup() {
    return (
        <div className="form">
            <form>
                <label htmlFor="username">Username:</label>
                <input
                required
                type="text"
                id="username"
                name="username"
                placeholder="username"
                />
                <label htmlFor="email">Email:</label>
                <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                />
                <label htmlFor="password">Password:</label>
                <input
                required
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                />
                <button type="submit">Submit</button>
                
            </form>

        </div>
    )
}
