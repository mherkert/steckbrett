import "./App.css";
import { CallbackPage } from "./pages/CallbackPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import AuthButtons from "./components/AuthButtons";

function App() {
  return (
    <>
      <header>
        <h1>Steckbrett</h1>
        <AuthButtons />
      </header>

      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/callback" element={<CallbackPage />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
