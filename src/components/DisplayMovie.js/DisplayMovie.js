import React from 'react'
import CArdMovie from './CArdMovie'

const DisplayMovie = ({movieApp ,del,likedmovie,searchname}) => {
  console.log('partie display =>',movieApp)
  return (
    <div className="movie-card-section">
      { movieApp.filter((el)=>el.title.toLowerCase().includes(searchname.toLowerCase().trim()))
      .map((el)=>    <CArdMovie  movie={el} del={del}  likedmovie={likedmovie} />) }
  </div>
  )
}

export default DisplayMovie
