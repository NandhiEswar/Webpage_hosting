import { useState , useEffect } from "react"
import React from 'react'
import { useParams } from "react-router-dom"
import data from "../Assert/data";
import Showdata from "./showdata";


function Productpage() {

  const { id } = useParams();
  const values_data = data;
  const value = values_data.data.find((e) => e.id == Number(id))
  



  return (
      <div>
      
        <Showdata products={value} />
                      
    </div>
  )
}

export default Productpage