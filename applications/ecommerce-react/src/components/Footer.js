import React from 'react'

export default function Footer() {
	const phoneNumber = '780-555-5556';
	
	return (
      <footer className="page-footer">
        <h4>Contact Us</h4>
        <ul>
          <li>
            <a href="mailto:sportsstore@store.com">sportsstore@store.com</a>
          </li>
  				<li><a href={`"tel:+01-${phoneNumber}"`}>{phoneNumber}</a></li>
        </ul>
      </footer>
    )
}
