import './style.css'

function getalert() {
    alert('Barev')
}

function Navbar() {
    return <header>
        <ul>
            <li onClick={getalert}>Home</li>
            <li>Contact</li>
            <li>Support</li>
            <li>About</li>
        </ul>
    </header>
}

export default Navbar