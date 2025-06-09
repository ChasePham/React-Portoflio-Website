import "./Navbar.css"

function NavBar() {

    return(
    <nav class = "container-fluid">
        <ul class = "d-flex list-unstyled justify-content-end">
            <li class = "p-2">Home</li>
            <li class = "p-2">About</li>
            <li class = "p-2">Experience</li>
            <li class = "p-2">Resume</li>
        </ul>
    </nav>
    );
}

export default NavBar;