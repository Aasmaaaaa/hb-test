import React, { useState } from "react";
import SignUpForm from "./Components/SignUpForm";
import Main from "./Components/Main";
import Header from "./Components/Header";
import CommentPanel from "./Components/CommentPanel";
import SignedUpPage from "./Components/SignedUpPage";
import LoginForm from "./Components/LoginForm";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("main");

  const renderPage = () => {
    switch (currentPage) {
      case "main":
        return <Main />;
      case "signed-up":
        return <SignedUpPage />;
      case "login":
        return <LoginForm />;
      default:
        return null;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="text-center">
          <h1>International NGO</h1>
        </div>
        <div className="form-container">
          <SignUpForm />
        </div>
        <Header onPageChange={handlePageChange} />
        {renderPage()}
        <CommentPanel />
      </div>
    </div>
  );
}

export default App;
