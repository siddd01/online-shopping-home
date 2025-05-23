import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppContextProvider(props) {
  const [user, setUser] = useState(true);
  const [addToCart,setAddToCard]=useState([])
  const [isWishlisted, setIsWishlisted]=useState([])
  console.log(addToCart)
  console.log(isWishlisted)

  const value = {
    user,
    setUser,addToCart,setAddToCard,
    isWishlisted, setIsWishlisted
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
