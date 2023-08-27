import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from "./Components/ProductList";
import './CardStyle.css'
import './Spinner.css'
import './DetailCss.css'
import './Nav.css'
import Navbar from "./Components/Navbar";
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Details from './Components/Details';


function App() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true) 
  const addProd=(newProduct)=>{(setProducts([...products,newProduct]))} 
  const handeleDelete = (id)=>{setProducts(products.filter((prod)=>prod.id!==id))};
  const API='https://fakestoreapi.com/products'
  useEffect(() => {    
    
     fetch(API).then(res=>res.json())
      .then(data=>{setProducts(data); 
       
          setLoading(false)})
      .catch((err)=>console.log(err))  

      
    },[])
  
  return ( 
    <div className="App">
      
      <Navbar search={search} setSearch={setSearch} addProd={addProd}/>
      
      
      <Routes>        
      <Route path="/" element={<ProductList products={products} search={search}  loading={loading} handeleDelete={handeleDelete} />}/>
        <Route path="/products/:id" element={<Details products={products}/>}/>
      </Routes>
      

    </div>
  );
}

export default App;
