import './header.css'
const Header = () =>{

    return(

        <div>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: "black"}}>
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          style={{
            fontFamily: "Bebas Neue",
            color: "rgb(229, 9, 20)",
            fontSize: "35px"}}
          
          >NETFLIX</a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"
                >All Shows</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Web Series</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">TV Shows</a>
            </li>
          </ul>
        </div>
        <div className="profile">
          <img
            className="img-fluid"
            src="https://i.pinimg.com/474x/7f/39/f0/7f39f0ad4dd6b777ab72bc7dc3b91958.jpg"
            alt=""
          />
        </div>
      </div>
    </nav>






        </div>





    )




}
export default Header;