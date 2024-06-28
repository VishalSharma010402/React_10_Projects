const Nav = () =>{
  return(
  <nav className="container">
    <div className="logo">
      <img src="/image/brand_logo.png" alt="" />
    </div>
    <ul>
      <li href="#">Menu</li>
      <li href="#">Location</li>
      <li href="#">About</li>
      <li href="#">Contact</li>
    </ul>
    <button>Login</button>
  </nav> 
  )
}

export default Nav;