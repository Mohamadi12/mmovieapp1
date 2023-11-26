import React from 'react'
import { useNavigate } from 'react-router-dom'
const CArdMovie = ({movie:{id,title,image,rate,liked},del,likedmovie}) => {

  const navigate = useNavigate()
  return (
    <div className="card">
      <img src={image} />
      <div className="card-content">
        <p className="movie-name">{title}||{rate}</p>
        <div className="movie-info">
          <p className="time">
         
            <div id="buttons">
  <button class="button button1"  onClick={()=>del(id)}   > ╳😡😠╳</button>
  <button class="button button2"  onClick={()=>likedmovie(id)}  > {liked?"(°◇°)" :"( ◣_◢)" }   </button>
  <button class="button button3"  onClick={()=>navigate(`/trailer/${id}`)}>（￣￣ー￣￣）</button>

</div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CArdMovie
