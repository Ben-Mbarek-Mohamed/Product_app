import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Details({products}) {
    let navigate=useNavigate();
    const {id}=useParams();    
    
    
    
  return (
    <div>
        
        {
             
            products.filter((prod)=>(prod.id==id)).map((prod)=> 
                <section className='popup'>
                    <div className="content">
                        <h2  style={{display:'inline'}}>{prod.title} 
                        <div  style={{display:'inline'}}> ({ prod.price } €)</div></h2>            
                        <p className="rating">Rating : {prod.rating.rate}</p>
                        <div className="plot">
                            <img  src={prod.image} alt="img-detail"  className="" />
                            <p>{prod.description}</p>
                        </div>
                        <button className="back"  onClick={()=>navigate('/')}>Back</button>
                    </div>
                </section>
            
            
)}
    </div>
  )
}

export default Details