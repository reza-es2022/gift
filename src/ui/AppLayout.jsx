import { Outlet } from "react-router";
import Nav from "../ui/Nav";
import { createContext, useState, useSyncExternalStore } from "react";
import { Toaster } from "react-hot-toast";
const initalGift = {
  job: "",
  name: "",
  age: 18,
  sex: "",
};

export const GiftContext = createContext();

function AppLayout() {
  const [gift, setGift] = useState(initalGift);

  return (
    <GiftContext.Provider value={{ gift, setGift }}>
      <div className="bg-pink-50">
        <Toaster />
        <Nav />
        <Outlet />
      </div>
    </GiftContext.Provider>
  );
}

export default AppLayout;
