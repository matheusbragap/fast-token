import { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaPhone } from 'react-icons/fa';
import Header from './Header';

export default function Register() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-black text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex flex-1 items-center justify-center p-4">
        <div className={`w-full max-w-md p-6 rounded-xl shadow-lg transition-all ${darkMode ? 'bg-[#0a0a0a] border border-gray-800' : 'bg-white border border-orange-100'}`}>
          <h2 className="text-2xl font-bold mb-2">Crie sua conta</h2>
          <p className={`mb-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Preencha os campos para se registrar</p>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Nome Completo
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className={`h-4 w-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-10 px-3 py-2 rounded-lg border ${darkMode ? 'bg-[#121212] border-gray-800 focus:border-orange-500 focus:ring-orange-500' : 'bg-white border-gray-300 focus:border-orange-400 focus:ring-orange-300'} focus:ring-1 focus:outline-none transition`}
                  placeholder="Seu nome completo"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className={`h-4 w-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 px-3 py-2 rounded-lg border ${darkMode ? 'bg-[#121212] border-gray-800 focus:border-orange-500 focus:ring-orange-500' : 'bg-white border-gray-300 focus:border-orange-400 focus:ring-orange-300'} focus:ring-1 focus:outline-none transition`}
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Telefone
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className={`h-4 w-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full pl-10 px-3 py-2 rounded-lg border ${darkMode ? 'bg-[#121212] border-gray-800 focus:border-orange-500 focus:ring-orange-500' : 'bg-white border-gray-300 focus:border-orange-400 focus:ring-orange-300'} focus:ring-1 focus:outline-none transition`}
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className={`h-4 w-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-10 px-3 py-2 rounded-lg border ${darkMode ? 'bg-[#121212] border-gray-800 focus:border-orange-500 focus:ring-orange-500' : 'bg-white border-gray-300 focus:border-orange-400 focus:ring-orange-300'} focus:ring-1 focus:outline-none transition`}
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Confirme sua Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className={`h-4 w-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                </div>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full pl-10 px-3 py-2 rounded-lg border ${darkMode ? 'bg-[#121212] border-gray-800 focus:border-orange-500 focus:ring-orange-500' : 'bg-white border-gray-300 focus:border-orange-400 focus:ring-orange-300'} focus:ring-1 focus:outline-none transition`}
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center mt-2">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className={`h-4 w-4 rounded ${darkMode ? 'bg-[#121212] border-gray-700 text-orange-500' : 'border-gray-300 text-orange-500'} focus:ring-orange-500`}
                required
              />
              <label htmlFor="terms" className={`ml-2 block text-xs ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Eu concordo com os <a href="#" className={`font-medium ${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-600 hover:text-orange-500'}`}>Termos</a> e <a href="#" className={`font-medium ${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-600 hover:text-orange-500'}`}>Política</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-lg shadow transition-all mt-3"
            >
              Registrar
            </button>
          </form>

          <div className={`mt-4 text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <p>Já tem uma conta? <a href="/login" className={`font-medium ${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-600 hover:text-orange-500'}`}>Faça login</a></p>
          </div>
        </div>
      </main>

      <footer className={`p-4 text-center text-sm ${darkMode ? 'text-gray-600' : 'text-gray-500'}`}>
        © {new Date().getFullYear()} Fast Token. Todos os direitos reservados.
      </footer>
    </div>
  );
}