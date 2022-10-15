import { Route, Routes } from "react-router-dom";
import Header from "./components/organisms/Header/Header";
import MainContainer from "./components/pages/MainContainer/MainContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainContainer />} />
      </Routes>
      
    </div>
  );
}

export default App;
