"use client";
// import { usePathname } from "next/navigation";
import Toolbar from "@/components/Toolbar";
import { Context } from "@/context/createContext";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TaskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [buttonState, setButtonState] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<any | null>(null);
  // object that contains the data
  const obj: any = {
    // button for managing the plus minus button in the mid of toolbar
    button: {
      state: buttonState,
      updateState: setButtonState,
    },
    // sending the user's data
    currentUser: currentUser?.user,
  };
  useEffect(() => {
    (async function () {
      const res = await axios.get("/api/user/current");
      setCurrentUser(res.data);
    })();
  }, []);

  return (
    <Context.Provider value={obj}>
      <Toolbar />
      {children}
    </Context.Provider>
  );
}
