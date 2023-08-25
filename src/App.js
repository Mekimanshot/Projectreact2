import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Detail from "./components/Detail";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/about" element={<About/>}> </Route>
        <Route path="/blog" element={<Blog/>} ></Route>
        <Route path="*"element = {<NotFound/>}></Route> 
        <Route path="/home" element = {<Navigate to ="/" /> }></Route>
        <Route path="/info" element = {<Navigate to ="/about" /> }></Route>
        <Route path="/blogg/:id" element = {<Detail/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );// Not Found ถ้าuserไม่ได้ใส่ / ตามที่มีอยู่มันจะพาไปหน้าNotFound
  // Navigate คือการย้ายปลายทาง เช่น หน้าhome เราคือ "/" แล้วผู้ใช้อยากพิม /home เราก็ทำให้ /home พาไป/ อธิมายงงมะ 
}

export default App;
