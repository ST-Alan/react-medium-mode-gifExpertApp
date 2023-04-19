import { useEffect, useState } from 'react'
import { GetGifs } from '../helpers/GetGifs'



//Recibe category como parámetro desde  GifGrid en  const {images, isLoading, responseTime} = useFetchGifs(category). Con esto GifGrid desestructura luego: images, isLoading, responseTime
export const useFetchGifs = (category) => {

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [responseTime, setResponseTime] = useState(0)

  const getImages = async()=>{
    //Añado esto para que el newImage obtenga directamente el arreglo con los productos
    //Ahora Este es el que pasa el category al helper getGifs
    // Acá decibe el responseTime
    const newImagesGetGif = await GetGifs(category)
    console.log('newImagesGetGif',newImagesGetGif)

    //Antes Este es el que pasa el category al helper getGifs y luego se seteabba dentro de setImages(newImages), ahora es el que hace que setImages reciba solo el arreglo de imágenes y no el objeto con el arreglo de imágenes y el tiempo de respuesta
    const newImages = newImagesGetGif.gifs
    
    console.log('newImages',newImages) //Ahora con el cambio que hice: return{
    //   gifs,
    //   responseTime
    // } viene un objeto con array de  gif y responseTime

    const newResponseTime = newImagesGetGif.responseTime
    console.log('newResponseTime',newResponseTime)



    setImages(newImages)
    setResponseTime(newResponseTime)
    setIsLoading(false)
  }

  useEffect(()=>{

    getImages()

    
  },[])


    return{
        images,
        isLoading,
        responseTime
    }



}
//¿A dónde llega los datos del getGifs y dónde se almacenan?