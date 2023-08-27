import React from 'react'
import ProductCard from './ProductCard'

function ProductList({search , loading, products, handeleDelete}) {        
  return (
    <div className='listProd'>
        {loading? <div class="ring">Loading  <span></span></div> 
        : products.filter((el)=> el.title.toLowerCase().includes(search.toLowerCase())).map((el , index)=>(<ProductCard el={el} key={index} handeleDelete={handeleDelete}/>))}
    </div>
  )
}
export default ProductList