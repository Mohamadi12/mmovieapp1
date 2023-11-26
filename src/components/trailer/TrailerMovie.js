import React from 'react'
import './TrailerMovie.css'
import { movieData } from '../../data/dataMovie'
import { useParams,useNavigate } from 'react-router-dom'
const TrailerMovie = () => {
    const {id} = useParams()
    console.log('id upse params =>',id)

    const findMovie= movieData.find((el)=> el.id === id)
    console.log('movie looking for', findMovie)
    const navigate = useNavigate()
  return (
    <>

  
    <img src={findMovie.image} alt=''/>
      <h1>{findMovie.title}</h1>
      <iframe width="560" height="315" src={findMovie.youutbe} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <button onClick={()=>navigate('/')}  >go back home </button>
  </>
  
  )
}

export default TrailerMovie
