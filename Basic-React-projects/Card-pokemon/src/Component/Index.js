import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "../page/Game";
import Home from "../page/Home";

export default function Index(props){
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/game/:pokemon" element={<Game/>}/>
      </Routes>
    </BrowserRouter>
  )

}