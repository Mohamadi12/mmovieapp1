import React from 'react'

const NAv = () => {
  return (
    <nav>
    <p className="logo">
      multi
      <span>
        flex<span></span>
      </span>
    </p>
    <i className="fa fa-bars" id="menu" />
    <ul id="menu-box">
      <div className="marker" />
      <li>main</li>
      <li>schedlues</li>
      <li>tickets</li>
      <li>news</li>
      <li>contact</li>
      <li>
        <span>
          mr.john doe{" "}
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" />{" "}
          <i className="fa fa-angle-down" />
        </span>
      </li>
      <li>
        <b>sign out</b>
      </li>
    </ul>
  </nav>
  )
}

export default NAv
