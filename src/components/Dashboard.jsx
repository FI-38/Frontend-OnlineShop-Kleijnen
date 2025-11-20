import React from "react";
import { Button } from "react-bootstrap"; 
import { Link } from "react-router-dom";



function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>No orders here yet. Find your next kicks</p>
        <Button as={Link} to="/products" variant="primary">Find your next kicks</Button>
    </div>
  );
}

export default Dashboard;