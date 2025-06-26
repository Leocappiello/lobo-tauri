import { createContext, useContext } from 'react';

export type Section = 'Clients' | 'Products';

export const SidebarContext = createContext<{
  activeSection: Section | null;
  setActiveSection: (section: Section) => void;
}>({
  activeSection: null,
  setActiveSection: () => {},
});

export const useSidebar = () => useContext(SidebarContext);
