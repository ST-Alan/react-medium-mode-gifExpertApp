import { useEffect, useState } from 'react'

import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import {getGifs} from '../helpers/getGifs'


export const GifGrid = ({category}) => {

  //Aquí se usa y se enlaza con el hook personalizado useFetchGifs.js
  const {images, isLoading, responseTime} = useFetchGifs(category)
  console.log('GifGrid - images',images)
  console.log('GifGrid - isLoading',isLoading)
  console.log('GifGrid - responseTime',responseTime)
  
  // console.log({isLoading })

  return (
    <>
        <h3>{category}</h3>
        <small>La palabra {category} demora {responseTime} milisegundos en responder </small>
        <p>El equivalente a {responseTime / 1000} segundos</p>
        {
          isLoading
          ? (<h2>Cargando...</h2>)
          : null
        }
        <div className="card-grid">
          {
            images.map((image) =>(
              <GifItem 
                key={image.id}
                    {...image}
              />
            ))
          }
        </div>
    </>
  )
}
