
function Header(){      //Header here is a component, this whole file is

    return(             // a component can only return one element (but it can have children)
        <header>
            <h1>My website</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header


// <nav> is navbar
// <hr> is a horizontal rule