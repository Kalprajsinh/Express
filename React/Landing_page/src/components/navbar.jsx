

function Navebar(){
    return(
        <nav>
      <div className="image">
        <img src="../public/logo.png" alt="logo" />
      </div>
      <ui>
        <li href="#">Home</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">contact</li>
      </ui>

      <button className='btn'>Login</button>
     </nav>
    )
}

export default Navebar