import { Link } from 'react-router-dom'
import '../styles/nav.css'

function Nav() {

    return (
        <header>
            <nav>
                <h1><Link to={'/'}>Dotnet jobs</Link></h1>
                <ol>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/privacy'}>Privacy</Link>
                    <Link to={'/postjob'}>Post a job</Link>
                </ol>
            </nav>
        </header>
    )
}

export default Nav