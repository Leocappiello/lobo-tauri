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

  if (!activeSection) return <p>Selecciona una sección del menú</p>;

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
  return (
    <Sidebar>
      <MainContent />
    </Sidebar>
  );
}

export default App;
