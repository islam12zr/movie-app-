import React from 'react'
import ReactStars from "react-rating-stars-component";
import  './movieCard.css';



function MovieCard({MovieElemet}) {
 
  return (
    <div>

        <div className='container'style={{ marginTop:"100px" }} >
<div className='movie-card'style={{ margin:"5px "}} >

<img className='poster' src={MovieElemet.posterUrl}alt="" />
<div className="descriptions">
                <h1>{MovieElemet.title}</h1>
                <p>
                <ReactStars
    count={5}
  value={MovieElemet.rate}
    size={24}
    activeColor="#ffd700"
  edit={false}
  />,
                  {MovieElemet.description}</p>
                <button>
                   
                    Play trailer on YouTube
                </button>
            </div>
</div>
</div>
    </div>
  )















}

export default MovieCard