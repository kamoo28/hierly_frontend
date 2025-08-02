import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Footermain from "./components/Footer/index";
import { Toaster } from 'react-hot-toast';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    // <div className="min-h-screen flex flex-col justify-between bg-slate-950">
    <div className="bg-white">
       <Toaster position="top-right" />
      <Header />
      <Outlet />
      {/* <Footer /> */}
      <Footermain/>
    </div>
  );
}

export default App;
