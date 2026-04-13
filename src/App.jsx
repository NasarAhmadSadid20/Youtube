import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/main/Main";

const App = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <Navbar
        setOpen={setOpen}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
      />

      <Sidebar open={open} setOpen={setOpen} />

      <div className="pt-[150px] bg-black min-h-screen">
        <Main />
      </div>
    </>
  );
};

export default App;