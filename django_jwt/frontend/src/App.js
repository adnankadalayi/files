import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

          <Route element={<HomePage />} path="/" exact />
          <Route element={<LoginPage />} path="/login" />
          {/* <PrivateRoute component={HomePage} path="/" exact />
          <PrivateRoute component={LoginPage} path="/login" /> */}
          </Routes>
      </Router>
    </div>
  );
}
export default App;
