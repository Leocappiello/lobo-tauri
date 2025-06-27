import { useState } from "react";
import "./App.css";
import Clients from "./components/sections/clients";
import Products from "./components/sections/products";
import Sidebar from "./components/sidebar";
import { useSidebar } from "./components/sidebar/context";

function MainContent() {
  const { activeSection } = useSidebar();

  const clients = [
    { name: 'Ethan Harper', email: 'ethan.harper@example.com', phone: '(555) 123-4567', status: 'Active' },
    { name: 'Olivia Bennett', email: 'olivia.bennett@example.com', phone: '(555) 987-6543', status: 'Inactive' },
    { name: 'Noah Carter', email: 'noah.carter@example.com', phone: '(555) 246-8013', status: 'Active' },
    { name: 'Ava Thompson', email: 'ava.thompson@example.com', phone: '(555) 135-7924', status: 'Active' },
    { name: 'Liam Foster', email: 'liam.foster@example.com', phone: '(555) 369-1212', status: 'Inactive' },
  ];

  if (!activeSection) return (
    <div className="size-full flex justify-center items-center">
      <p className="text-red-300">Selecciona una sección del menú</p>
    </div>
  );

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">{activeSection}</h1>

      {activeSection === 'Clients' && (
        <Clients clients={clients} />
      )}

      {activeSection === 'Products' && (
        <Products />
      )}
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) return (
    <div className="size-full h-lvh flex justify-center items-center flex-col">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-300"></div>
      <p className="mt-3 text-gray-500">Cargando</p>
    </div>
  )

  return (
    <Sidebar>
      <MainContent />
    </Sidebar>
  );
}

export default App;
