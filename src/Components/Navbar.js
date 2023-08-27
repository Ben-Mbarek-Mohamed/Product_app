import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useState } from 'react'

function Navbar({search, setSearch, addProd}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);
  return (
    <div class="topnav"> 

<>
      <Button className="bttn" variant="outline-secondary" onClick={handleShow}>
        Add new Product
      </Button>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your product</Modal.Title>
        </Modal.Header>
        <label>Title</label>
        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <label >Description</label>
        <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
        <label>ProductUrl</label>
        <input type="text" value={image} onChange={(e)=>{setImage(e.target.value)}}/>
        <label>Price</label>
        <input type="number" step="0.01" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>{addProd({id:Math.random(),title,description,image,price});handleClose()}} >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>





  <div className="active" >Product App</div>
  
  <input type="text" placeholder='Search product..' value={search} onChange={(e)=>setSearch(e.target.value)}/>
</div>
  )
}

export default Navbar