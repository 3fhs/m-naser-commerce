import { Route, Routes } from 'react-router-dom';
import Home from './Bages/Home';
import "./File.css";
import "./all.min.css";
import Login from './Bages/Login';
import DashBoard from './Bages/DashBoard';
import AddProduct from './DashProduct/Add';
import ViewProduct from './DashProduct/ViewProduct';
import EditeProduct from './DashProduct/EditeProduct';
import Register from './Bages/Register';
import DashCategory from './DashProduct/DashCategory';
import ProductDetails from './Bages/ProductDetails';
import GetAllProduct from './DashProduct/GetAllProduct';
import SideUsers from './DashUsers/DashUsers';
import Shopping from './Bages/Shopping';






function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='shopping' element={<Shopping/>}/>
        <Route path='productdetails/:productId' element={<ProductDetails/>}/>
        <Route path="/Dash" element={<DashBoard/>}> 
          
          <Route path='getproduct' element={<GetAllProduct/>}/>
          <Route path='getproduct/add' element={<AddProduct/>}/>
          <Route path='getproduct/view/:viewId' element={<ViewProduct/>}/>
          <Route path='getproduct/edite/:editeId' element={<EditeProduct/>}/>
          
          <Route path='getcategory' element={<DashCategory/>}/>
          <Route path='getallusers' element={<SideUsers/>}/>
        </Route>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
