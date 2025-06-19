import { useState, useEffect, useRef } from 'react';
import { 
  FiMenu, 
  FiGrid, 
  FiInbox, 
  FiUsers, 
  FiShoppingBag, 
  FiLogIn, 
  FiFileText,
  FiPlus,
  FiChevronDown,
  FiUser,
  FiSettings,
  FiDollarSign,
  FiLogOut,
  FiList,
  FiHome,
  FiBriefcase
} from 'react-icons/fi';
import { FaCalculator } from "react-icons/fa";

const App = () => {
  // State for sidebar and dropdowns
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [caixaDropdownOpen, setCaixaDropdownOpen] = useState(false);
  
  // Ref for profile dropdown click-outside detection
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    document.body.style.overflowY = sidebarOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [sidebarOpen]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            {/* Left side - Logo and menu button */}
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <FiMenu className="w-6 h-6" />
              </button>
              <a href="#" className="flex ms-2 md:me-24">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Flowbite
                </span>
              </a>
            </div>

            {/* Right side - Profile dropdown */}
            <div className="flex items-center" ref={profileRef}>
              <div className="flex items-center ms-3 relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </button>
                
                {/* Profile dropdown */}
                {userDropdownOpen && (
                  <div className="z-50 absolute top-8 right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-sm shadow dark:bg-gray-700 dark:divide-gray-600">
                    <div className="px-4 py-3">
                      <p className="text-sm text-gray-900 dark:text-white">Neil Sims</p>
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                        neil.sims@flowbite.com
                      </p>
                    </div>
                    <ul className="py-1">
                      <li>
                        <a
                          href="#"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <FiUser className="mr-2" /> Perfil
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <FiSettings className="mr-2" /> Configurações
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <FiDollarSign className="mr-2" /> Ganhos
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <FiLogOut className="mr-2" /> Sair
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FiGrid className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            
            {/* Products Dropdown */}
            <li>
              <button
                type="button"
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <FiShoppingBag className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 text-left whitespace-nowrap">Produtos</span>
                <FiChevronDown className={`w-3 h-3 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <ul
                className={`${productsDropdownOpen ? 'block' : 'hidden'} py-2 space-y-2`}
              >
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <FiList className="mr-2" /> Cardápio
                  </a>
                </li>
              </ul>
            </li>
            
            {/* Caixa Dropdown */}
            <li>
              <button
                type="button"
                onClick={() => setCaixaDropdownOpen(!caixaDropdownOpen)}
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <FiDollarSign className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 text-left whitespace-nowrap">Caixa</span>
                <FiChevronDown className={`w-3 h-3 transition-transform ${caixaDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <ul
                className={`${caixaDropdownOpen ? 'block' : 'hidden'} py-2 space-y-2`}
              >
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <FiShoppingBag className="mr-2" /> Vendas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <FiFileText className="mr-2" /> Recibos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <FaCalculator className="mr-2" /> Calculadora
                  </a>
                </li>
              </ul>
            </li>
            
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FiInbox className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FiUsers className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">Usuários</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FiLogIn className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">Entrar</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FiFileText className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">Registrar</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
              <FiPlus className="text-2xl text-gray-400 dark:text-gray-500" />
            </div>
            <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
              <FiPlus className="text-2xl text-gray-400 dark:text-gray-500" />
            </div>
            <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
              <FiPlus className="text-2xl text-gray-400 dark:text-gray-500" />
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
            <FiPlus className="text-2xl text-gray-400 dark:text-gray-500" />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
              <FiPlus className="text-2xl text-gray-400 dark:text-gray-500" />
            </div>
            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
              <FiPlus className="text-2xl text-gray-400 dark:text-gray-500" />
            </div>
            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
              <FiPlus className="text-2xl text-gray-400 dark:text-gray-500" />
            </div>
            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
              <FiPlus className="text-2xl text-gray-400 dark:text-gray-500" />
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
            <FiPlus className="text-2xl text-gray-400 dark:text-gray-500" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
              <FiPlus className="text-2xl text-gray-400 dark:text-gray-500" />
            </div>
            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
              <FiPlus className="text-2xl text-gray-400 dark:text-gray-500" />
            </div>
            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
              <FiPlus className="text-2xl text-gray-400 dark:text-gray-500" />
            </div>
            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
              <FiPlus className="text-2xl text-gray-400 dark:text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;