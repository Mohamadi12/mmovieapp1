import React, { useState } from 'react'
import './HomePage.css'
import Upder from '../Upder'
import Search from '../Search'
import DisplayMovie from '../DisplayMovie.js/DisplayMovie'
import PreFotter from '../PreFotter'
import Footer from '../Footer'
import AddMovie from '../AddMovie'


//partie importation de notre data 
import  {movieData} from '../../data/dataMovie'
const HomePage = () => {

  console.log('ici data homepage',movieData)
  const [movieApp,setMovieApp]=useState(movieData)


  const handelAdd=(nawMovie)=>{
setMovieApp([...movieApp,nawMovie])
  }

  const del=(id)=>{
    setMovieApp(
      movieApp.filter((el)=> el.id !== id)
    )
  }
  const likedmovie=(id)=>{
    setMovieApp(
      movieApp.map((el)=> el.id=== id ? {...el,liked : !el.liked} :el   )
    )
  }
  const[searchname, setSearchName]=useState('')
  return (
    <>
<Upder/>

 <section>
{/*-movie-ticket-book*/}
<Search setSearchName={setSearchName}/>
{/*--filter-search-box--*/}
 <DisplayMovie   movieApp={movieApp}  del={del} likedmovie={likedmovie}  searchname={searchname}/>
{/*-movie-card-*/}
<AddMovie    handelAdd={handelAdd}   />
<PreFotter/>
    </section>
   <Footer/>
  </>
  
  )
}

export default HomePage
