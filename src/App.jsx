import HomeScreen from "./components/HomeScreen/HomeScreen";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "./components/LoginScreen/LoginScreen";

function App() {
  const user = null;
  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
