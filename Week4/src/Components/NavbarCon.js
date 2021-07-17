import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
export default function NavbarCon({data}){

  const links = [
    { id: 1, menu: "/edit", desc: "Edit" },
    { id: 3, menu: "/view", desc: "View" },
    { id: 4, menu: "/dashboard", desc: "Dashboard" }
  ];
  
    return(
        <div>
          {console.log(data)}
             <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Student</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          {data &&
          links.map((x) => {
            return (
                <Nav.Link key={x.id} href={x.menu}>{x.desc}</Nav.Link>
            );
          })}

        
          
          
         </Nav>  
      </Navbar>
        </div>
    )
}