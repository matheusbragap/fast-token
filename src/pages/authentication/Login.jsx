import { useState } from 'react';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import Header from './Header';

export default function Login() {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-black text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex flex-1 items-center justify-center p-4">
        <div className={`w-full max-w-md p-8 rounded-2xl shadow-xl transition-all ${darkMode ? 'bg-[#0a0a0a] border border-gray-800' : 'bg-white border border-orange-100'}`}>
          <h2 className="text-3xl font-bold mb-2">Bem-vindo de volta</h2>
          <p className={`mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Faça login para acessar sua conta</p>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className={`h-5 w-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full pl-10 px-4 py-3 rounded-lg border ${darkMode ? 'bg-[#121212] border-gray-800 focus:border-orange-500 focus:ring-orange-500' : 'bg-white border-gray-300 focus:border-orange-400 focus:ring-orange-300'} focus:ring-2 focus:outline-none transition`}
                  placeholder="seu@email.com"
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
                  <FaLock className={`h-5 w-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full pl-10 px-4 py-3 rounded-lg border ${darkMode ? 'bg-[#121212] border-gray-800 focus:border-orange-500 focus:ring-orange-500' : 'bg-white border-gray-300 focus:border-orange-400 focus:ring-orange-300'} focus:ring-2 focus:outline-none transition`}
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className={`h-4 w-4 rounded ${darkMode ? 'bg-[#121212] border-gray-700 text-orange-500' : 'border-gray-300 text-orange-500'} focus:ring-orange-500`}
                />
                <label htmlFor="remember-me" className={`ml-2 block text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Lembrar de mim
                </label>
              </div>

              <a href="#" className={`text-sm font-medium ${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-600 hover:text-orange-500'}`}>
                Esqueceu sua senha?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
            >
              Entrar
            </button>
          </form>

          <div className={`mt-6 text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <p>Não tem uma conta? <a href="/register" className={`font-medium ${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-600 hover:text-orange-500'}`}>Cadastre-se</a></p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`p-4 text-center text-sm ${darkMode ? 'text-gray-600' : 'text-gray-500'}`}>
        © {new Date().getFullYear()} Fast Token. Todos os direitos reservados.
      </footer>
    </div>
  );
}