import React from "react";
import { Link } from "react-router-dom";
import {Card2} from "../components/card";

function Works(){
  return(
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 sm:col-1 gap-3">
      <Link to='/calculator'> <Card2/></Link>
      <Card2/>
      <Card2/>
      <Card2/>
    </div>
  )
}

export default Works;