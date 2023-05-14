import './header.scss';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                GitHub Repo
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>
                    </ul>
                </div>
                {/* {userId ? (
          <>
            <div className="profile-logo">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="logo"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                }}
              />
            </div>
            <p style={{ marginTop: "15px", marginLeft: "10px" }}>
              {(user && profileName==="Nirnay Behera")? (<>{user.displayName} (Admin)</>):(<>{user?.displayName}</>)}
            </p>
            <li className="navbar-nav nav-item nav-link">
              <a
                className="nav-link"
                href="/auth"
                onClick={handleLogout}
                id="log"
              >
                Logout
              </a>
            </li>
          </>
        ) : (
          <>
            <div id="login">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/auth" id="log">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </>
        )} */}
            </nav>
        </>
    );
}

export default Header;