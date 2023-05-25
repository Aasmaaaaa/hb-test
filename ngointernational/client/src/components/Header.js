import React, { useState } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function Header() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <header>
      <h1>CHANGING X BETTER</h1>
      <p>we create connections here</p>
      <LoginButton />
      <LogoutButton />
    </header>
  );
}
