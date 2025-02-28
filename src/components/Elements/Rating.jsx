import React from 'react'


export const Rating = ({rating}) => {


    // const [rating , setRating] =useState(0);
    let ratingArray=Array(5).fill(false); //Initially stars set to empty
    for(let i=0; i<rating;i++){
        ratingArray[i]=true; //Stars set to filled
    }
   

  return (
    <>
    
      {ratingArray.map((ratingArray1, index) => (ratingArray1 ?<i  key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i> : <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i> 
      ))}
      
    </>
  )
}


