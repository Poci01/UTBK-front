import { useState } from "react";
import { LoginPage } from "@/components/LoginPage";
import { AdminApp } from "@/components/admin/AdminApp";
import { UserApp } from "@/components/user/UserApp";
import type { Role } from "@/types";

export default function App() {
  const [dark, setDark] = useState(false);
  const [role, setRole] = useState<Role>("admin");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (r: Role) => { 
    setRole(r); 
    setLoggedIn(true); 
  };
  const handleLogout = () => setLoggedIn(false);

  return (
    <div className={dark ? "dark" : ""} style={{ height: "100%" }}>
      {!loggedIn ? (
        <LoginPage onLogin={handleLogin} dark={dark} setDark={setDark} />
      ) : role === "admin" ? (
        <AdminApp dark={dark} setDark={setDark} onSwitchRole={(r) => setRole(r)} onLogout={handleLogout} />
      ) : (
        <UserApp dark={dark} setDark={setDark} onSwitchRole={(r) => setRole(r)} onLogout={handleLogout} />
      )}
    </div>
  );
}