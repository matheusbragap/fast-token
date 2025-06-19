import { useState } from "react";

const menu = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Users", path: "/users" },
  { name: "Settings", path: "/settings" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white h-screen transition-all duration-300 ${open ? "w-48" : "w-16"}`}>
        <div className="flex items-center justify-between p-4">
          <span className={`font-bold text-lg transition-all ${open ? "block" : "hidden"}`}>My App</span>
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            <span className="text-xl">{open ? "×" : "≡"}</span>
          </button>
        </div>
        <nav className="mt-4">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="block px-4 py-3 hover:bg-gray-700 transition-colors"
            >
              <span className={`${open ? "block" : "hidden"} transition-all`}>{item.name}</span>
              <span className={`${open ? "hidden" : "block"} text-center`}>{item.name[0]}</span>
            </a>
          ))}
        </nav>
      </div>
      {/* Conteúdo principal */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Conteúdo principal</h1>
      </div>
    </div>
  );
}