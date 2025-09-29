import { useEffect, useReducer, useState } from "react";

import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";
import { cartReducer, initialState } from "./reducers/cartReducer";

import { ToastContainer } from "react-toastify";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  console.log("state", state);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <Page />
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
