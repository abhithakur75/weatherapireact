import { useState, createContext, useContext } from "react";
import AuthForm from "./AuthForm";
import Header from "./componants/Header";
import Footer from "./componants/Footer";
import './componants/Header.css'
export const LogInContext = createContext();
const App = () => {
  const [logged, setLogged ] = useState(false);
  return (
    <LogInContext.Provider value={{ logged, setLogged }} >
      <div className="app">
        <Header />
        <AuthForm />
        <Footer />
      </div>
    </LogInContext.Provider>
  )
}
export default App;