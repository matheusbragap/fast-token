import React from 'react';
export default function Dashboard() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>Bem-vindo ao painel principal do sistema. Aqui você pode acompanhar os principais indicadores do seu negócio.</p>
            <ul className="list-disc ml-6 mt-4">
                <li>Total de vendas hoje: R$ 350,00</li>
                <li>Produtos em estoque: 120</li>
                <li>Usuários online: 3</li>
            </ul>
        </div>
    );
}
