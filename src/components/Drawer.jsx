import React from "react";
import { FiMenu, FiUser, FiHome, FiTrello, FiInbox, FiUsers, FiBox, FiLogIn, FiUserPlus, FiDollarSign, FiChevronDown, FiChevronRight, FiSettings } from "react-icons/fi";

const Drawer = () => {
    return (
        <>
            {/* Navbar fixa no topo */}
            <nav className="fixed top-0 z-50 w-full border border-b border-[#fd6e25] text-white bg-[#fd6e25] dark:bg-[#050505] dark:border-[#222] dark:text-white">
                <div className="px-3 py-4 lg:px-5 lg:pl-3">
                    <div className="relative flex items-center justify-center">
                        {/* Botão hamburguer à esquerda */}
                        <div className="absolute left-0 flex items-center gap-3">
                            <button
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-white rounded-lg hover:bg-[#fd6e25]/80 focus:outline-none focus:ring-2 focus:ring-[#fd6e25] dark:text-white dark:hover:bg-black/80 dark:focus:ring-black"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <FiMenu className="w-6 h-6" />
                            </button>
                        </div>
                        {/* Título centralizado */}
                        <span className="text-xl font-semibold sm:text-2xl whitespace-nowrap mx-auto">Fast Token</span>
                        {/* Perfil à direita */}
                        <div className="absolute right-0 flex items-center ms-3">
                            <button type="button" className="flex text-sm bg-[#fd6e25] rounded-full focus:ring-4 focus:ring-[#fd6e25]/30 dark:bg-[#18191a] dark:focus:ring-black/60">
                                <span className="sr-only">Open user menu</span>
                                <FiUser className="w-8 h-8 text-white rounded-full" />
                            </button>
                            {/* Dropdown do usuário (apenas visual, não funcional) */}
                            <div className="absolute right-0 mt-2 z-50 hidden min-w-[160px] text-base list-none bg-[#faf6ec] divide-y divide-[#fd6e25]/10 rounded shadow dark:bg-black dark:divide-black" id="dropdown-user">
                                <div className="px-4 py-3" role="none">
                                    <p className="text-sm text-[#1a2021] dark:text-white" role="none">Usuário</p>
                                    <p className="text-sm font-medium text-[#1a2021] truncate dark:text-gray-300" role="none">usuario@email.com</p>
                                </div>
                                <ul className="py-1" role="none">
                                    <li>
                                        <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-[#1a2021] hover:bg-[#fd6e25]/10 dark:text-white dark:hover:bg-[#222]" role="menuitem">
                                            <FiSettings className="inline-block" />
                                            Settings
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar fixa à esquerda */}
            <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 border border-r border-[#fd6e25] text-[#1a2021] transition-transform -translate-x-full bg-[#faf6ec] sm:translate-x-0 dark:bg-black dark:border-[#222] dark:text-white" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-[#faf6ec] dark:bg-black">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-[#fd6e25]/10 dark:hover:bg-[#222]">
                                <FiHome className="w-5 h-5" />
                                <span className="ms-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <button className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-[#fd6e25]/10 dark:hover:bg-[#222]">
                                <span className="flex items-center">
                                    <FiBox className="w-5 h-5" />
                                    <span className="ms-3">Products</span>
                                </span>
                                <FiChevronDown className="w-4 h-4" />
                            </button>
                            {/* Submenu (apenas visual) */}
                            <ul className="ml-8 mt-1 space-y-1">
                                <li>
                                    <a href="#" className="block p-2 rounded hover:bg-[#fd6e25]/10 dark:hover:bg-[#222]">Cardápio</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-[#fd6e25]/10 dark:hover:bg-[#222]">
                                <span className="flex items-center">
                                    <FiDollarSign className="w-5 h-5" />
                                    <span className="ms-3">Caixa</span>
                                </span>
                                <FiChevronDown className="w-4 h-4" />
                            </button>
                            {/* Submenu (apenas visual) */}
                            <ul className="ml-8 mt-1 space-y-1">
                                <li>
                                    <a href="#" className="block p-2 rounded hover:bg-[#fd6e25]/10 dark:hover:bg-[#222]">Vendas</a>
                                </li>
                                <li>
                                    <a href="#" className="block p-2 rounded hover:bg-[#fd6e25]/10 dark:hover:bg-[#222]">Recibos</a>
                                </li>
                                <li>
                                    <a href="#" className="block p-2 rounded hover:bg-[#fd6e25]/10 dark:hover:bg-[#222]">Calculadora</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-[#fd6e25]/10 dark:hover:bg-[#222]">
                                <FiUsers className="w-5 h-5" />
                                <span className="ms-3">Roles</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            {/* Conteúdo principal */}
            <div className="p-4 sm:ml-64 bg-[#faf6ec] min-h-screen dark:bg-black">
                <div className="p-4 border-2 border-[#fd6e25] border-dashed rounded-lg dark:border-[#222] mt-14">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <FiBox className="w-7 h-7" />
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <FiBox className="w-7 h-7" />
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <FiBox className="w-7 h-7" />
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <FiBox className="w-7 h-7" />
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <FiBox className="w-7 h-7" />
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Drawer;