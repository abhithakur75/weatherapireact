import { LogInContext } from '../App';
import { useContext } from 'react';
import '../componants/Header.css'
const Header = () => {
    const { logged, setLogged, userDetails } = useContext(LogInContext);
    const logout = () => {
        setLogged(false)
        localStorage.clear();
        window.location.reload()
    }
    return (

        <>

            <div className="container">
                <header>
                    <div className="logo">Weather App</div>
                    <nav>
                        <ul className='flex'>
                            {
                                logged
                                    ? <ul>
                                        {/* <li><img src={userDetails.Photo} alt="" width="10px" height="10px" /></li> */}
                                        <li> <input type="button" value="Logout" className='btn' onClick={logout} /></li>
                                    </ul>
                                    : null
                            }
                        </ul>
                    </nav>
                </header>
            </div>


        </>
    )
}
export default Header;