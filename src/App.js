import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Post from "./pages/Post/Post";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
