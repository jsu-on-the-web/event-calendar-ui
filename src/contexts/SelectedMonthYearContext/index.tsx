import { createContext, ReactNode, useState } from 'react';

interface SelectedMonthYearContextContextProps { }

interface SelectedMonthYearContextProviderProps {
  children: ReactNode;
}

export const SelectedMonthYearContext = createContext<SelectedMonthYearContextContextProps>({} as SelectedMonthYearContextContextProps);

function SelectedMonthYearContextProvider({ children }: SelectedMonthYearContextProviderProps) {  
  const [currentMonth, setCurrentMonth] = useState('');
  const [currentYear, setCurrentYear] = useState('');
  
  // The currentMonth and currentYear depends on the MonthSelector component's current values 
  // TODO: Review how to pass changes from the MonthSelector component up to this Context

  return (
    <SelectedMonthYearContext.Provider value={{ currentMonth, currentYear }}>
      {children}
    </SelectedMonthYearContext.Provider>
  );
}

export default SelectedMonthYearContextProvider;