import { FaSun, FaMoon } from 'react-icons/fa';
import logo from '../../assets/logo.png';

export default function Header({ darkMode, toggleDarkMode }) {
    return (
        <header className="flex justify-between items-center p-6">
            <div className="flex items-center">
                <img src={logo} alt="Fast Token" className="w-8 h-12 mr-3 object-cover" />
                <h1 className="text-2xl font-bold">Fast Token</h1>
            </div>
            <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-900 text-orange-400' : 'bg-orange-100 text-orange-600'}`}
            >
                {darkMode ? (
                    <FaSun className="h-6 w-6" />
                ) : (
                    <FaMoon className="h-6 w-6" />
                )}
            </button>
        </header>
    );
}
