import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import UserCard from "./components/UserCard";
import "./App.css"

const App = () => {
  return(
    <div className="">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/post/:userId" element={<Post/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )};

export default App;
