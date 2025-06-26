// import { ReactNode, useState } from 'react';
// import logo from '../../assets/lobo.png';

// type Section = 'Clients' | 'Products';

// const ItemSection = ({
//   section,
//   isActive = false,
//   onClick,
// }: {
//   section: Section;
//   isActive?: boolean;
//   onClick: (section: Section) => void;
// }) => {
//   return (
//     <li
//       className={`list-none text-black p-2 rounded-lg hover:bg-[#f3e9e8] transition-colors cursor-pointer ${
//         isActive ? 'bg-[#f3e9e8]' : 'bg-white'
//       }`}
//       onClick={() => onClick(section)}
//     >
//       {section}
//     </li>
//   );
// };

// const Sidebar = ({ children }: { children: ReactNode }) => {
//   const [active, setActive] = useState<Section | null>(null);

//   const handleChangeSection = (section: Section) => {
//     setActive(section);
//     console.log(section);
//   };

//   const sections: Section[] = ['Clients', 'Products'];

//   return (
//     <div className='p-5'>
//       <div className='flex items-center gap-5 mb-5'>
//         <img src={logo} alt='logo' height={64} width={64} className='rounded-md' />
//         <h1>Lobo Neumáticos</h1>
//       </div>

//       <ul className='grid gap-3'>
//         {sections.map((section) => (
//           <ItemSection
//             key={section}
//             section={section}
//             isActive={section === active}
//             onClick={handleChangeSection}
//           />
//         ))}
//       </ul>

//       <div>{children}</div>
//     </div>
//   );
// };

// export default Sidebar;
import { ReactNode, useState } from 'react';
import logo from '../../assets/lobo.png';
import { Section, SidebarContext } from './context';

const ItemSection = ({
  section,
  isActive = false,
  onClick,
}: {
  section: Section;
  isActive?: boolean;
  onClick: (section: Section) => void;
}) => {
  return (
    <li
      className={`list-none text-black p-2 rounded-lg transition-colors cursor-pointer ${
        isActive ? 'bg-[#f3e9e8]' : 'bg-white hover:bg-[#f3e9e8]'
      }`}
      onClick={() => onClick(section)}
    >
      {section}
    </li>
  );
};

const Sidebar = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  const sections: Section[] = ['Clients', 'Products'];

  return (
    <SidebarContext.Provider value={{ activeSection, setActiveSection }}>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-1/4 p-5 bg-[#f7f7f7] shadow-md">
          <div className="flex items-center gap-5 mb-5">
            <img
              src={logo}
              alt="logo"
              height={64}
              width={64}
              className="rounded-md"
            />
            <h1 className="text-xl font-bold">Lobo Neumáticos</h1>
          </div>

          <ul className="grid gap-3">
            {sections.map((section) => (
              <ItemSection
                key={section}
                section={section}
                isActive={section === activeSection}
                onClick={setActiveSection}
              />
            ))}
          </ul>
        </aside>

        {/* Content */}
        <main className="w-3/4 p-5 bg-white">{children}</main>
      </div>
    </SidebarContext.Provider>
  );
};

export default Sidebar;
