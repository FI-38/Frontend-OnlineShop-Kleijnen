import React from "react";
import { Button } from "react-bootstrap"; 
import { Link } from "react-router-dom";
import AutoplayCarousel from "./carousel/AutoplayCarousel";


function Home({ isLoggedIn }) {


  return (
    <>
      <h1 className="mb-1">Welcome to ShopShop GmbH</h1>
      {isLoggedIn ? 
      ( 
       <>
       <p>You're logged in! Continue shopping.</p>
       <Button as={Link} to="/products" variant="primary">Find your next kicks</Button>
       </> 
      ) : (
        <>
        <div className="p-2 text-center">
          <div className="container p-5">
            <AutoplayCarousel />
              <p className="m-3">Login or register to hunt for rare sneakers</p>
              <div className="btn group" role="group" aria-label="Login and register">
                <a className="btn btn-primary btn-lg m-2" href="/login" role="button">Login</a>
                <a className="btn btn-primary btn-lg m-2" href="/register" role="button">Register</a>
              </div>
            </div>
        </div>
        </>
      )
      
    }

    </>
  );
}

export default Home;