import "./Navbar.css"

function NavBar() {

    return(
    <nav class = "container-fluid">
        <ul class = "d-flex list-unstyled justify-content-end">
            <li class = "p-2"><a href="#home">Home</a></li>
            <li class = "p-2"><a href="#about">About</a></li>
            <li class = "p-2"><a href="#experience">Experience</a></li>
            <li class = "p-2"><a href="#resume">Resume</a></li>
        </ul>
    </nav>
    );
}

export default NavBar;