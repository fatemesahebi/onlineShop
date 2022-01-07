import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home, ProductPages} from "./component";
import Off from "./component/off/off";
import {useEffect} from "react";
function App() {
  return (
   <div>
       <BrowserRouter>
           <Routes>
=                   <Route index element={<Home/>}/>
                   <Route path={'/products/:title'} element={<ProductPages/>} />

           </Routes>
       </BrowserRouter>
   </div>
  );
}

export default App;
