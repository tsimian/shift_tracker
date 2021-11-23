import { FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ theme, setTheme }) => {
    
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        }   else {
            setTheme('light')
        }
    }

    return (
        <div className="container d-flex justify-content-between">
            <h1>Shift Tracker</h1>

            {/* Theme Toggler Btn */}
            <button className={theme === 'light' ? "btn btn-dark mt-3" : "btn btn-light mt-3" } id="theme-toggler" onClick={toggleTheme}>
                {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
        </div>
    )
}

export default Header