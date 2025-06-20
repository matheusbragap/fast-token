import React, { useState, useEffect } from "react";
import { FiMenu, FiUser, FiHome, FiTrello, FiInbox, FiUsers, FiBox, FiLogIn, FiUserPlus, FiDollarSign, FiChevronDown, FiChevronRight, FiSettings } from "react-icons/fi";
import { Routes, Route } from 'react-router-dom';
import Dashboard from "../pages/Dashboard";

// Hook para detectar se está em tela >= sm
function useIsDesktop() {
    // Cria um estado chamado isDesktop, que começa como true se a largura da janela for >= 640px, senão false
    const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 900);

    useEffect(() => {
        // Função que será chamada sempre que a janela for redimensionada
        const handler = () => setIsDesktop(window.innerWidth >= 900);

        // Adiciona o evento de resize para chamar handler sempre que a janela mudar de tamanho
        window.addEventListener('resize', handler);

        // Função de limpeza: remove o evento quando o componente for desmontado
        return () => window.removeEventListener('resize', handler);
    }, []); // O array vazio faz o efeito rodar só uma vez, ao montar o componente

    // Retorna o valor atual de isDesktop (true se >= 640px, false se < 640px)
    return isDesktop;
}

const Drawer = () => {
    const isDesktop = useIsDesktop();
    const [sidebarOpen, setSidebarOpen] = useState(isDesktop);

    useEffect(() => {
        setSidebarOpen(isDesktop);
    }, [isDesktop]);

    // Função para alternar a sidebar
    const toggleSidebar = () => setSidebarOpen((open) => !open);

    // Define a classe de margem do conteúdo
    const contentMargin = isDesktop ? (sidebarOpen ? 'ml-64' : '') : '';

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
                                onClick={toggleSidebar}
                            >
                                <span className="sr-only">Open sidebar</span>
                                <FiMenu className="w-6 h-6" />
                            </button>
                        </div>
                        {/* Título centralizado */}
                        <span className="text-xl font-semibold whitespace-nowrap mx-auto">Fast Token</span>
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
            <aside
                className={
                    "fixed top-0 left-0 z-40 w-64 h-screen pt-20 border border-r border-[#fd6e25] text-[#1a2021] transition-transform bg-[#faf6ec] dark:bg-black dark:border-[#222] dark:text-white"
                    + (sidebarOpen ? " translate-x-0" : " -translate-x-full")
                }
                aria-label="Sidebar"
            >
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
            <div className={`p-4 transition-all duration-300 ${contentMargin} bg-[#faf6ec] min-h-screen dark:bg-black`}>
                <div className="p-4 border-2 border-[#fd6e25] border-dashed rounded-lg dark:border-[#222] mt-14">
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </div>
            </div>
        </>
    );
};

export default Drawer;