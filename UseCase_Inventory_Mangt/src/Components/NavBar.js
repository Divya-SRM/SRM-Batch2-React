import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
export default function NavbarCon(){
    return(
        <div>
            
             <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Inventory Management</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link><br/>
          <Nav.Link href="/login">Login</Nav.Link>
          
           
         
         </Nav>  
      </Navbar>
      </div>
      
    )
}