import React from 'react'
import ReactStars from 'react-rating-stars-component';
import  "./header.css"



function Header({setText,setRating,}) {
   
  return (
    <div className='header'>
      
        
        <header style={{display:"flex", justifyContent:"flex-end", borderBottom:"1px solid gray" ,height:"80px" , }}>




        <ReactStars onChange={(newRating)=> setRating(newRating)}
    count={5}

    size={24}
    activeColor="#ffd700"

  />,
        <input  onChange={(e) =>{setText(e.target.value)}} placeholder='searsh for Movies' type="searsh" style={{borderRadius:"5px", height:"30px", width:"250px", margin:"10px"}}/>

        </header>
        
        
        </div>
  )
}

export default Header