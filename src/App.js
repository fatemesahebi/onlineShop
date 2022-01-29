import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home, MiniHeader, ProductPages} from "./component";
// import {Provider} from "react-redux";
// import store from './component/redux/store'
function App() {
  return (
   <div>
           <BrowserRouter>
               <Routes>
                   <Route path={'/'} element={<MiniHeader/>}>
                       <Route index element={<Home/>}/>
                       <Route path={'/products/:id'} element={<ProductPages/>} />
                   </Route>
               </Routes>
           </BrowserRouter>

   </div>
  );
}

export default App;
