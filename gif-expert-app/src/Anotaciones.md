Para que el css sea global se importa desde el archivo principal, en este caso desde el main.jsx

El useState debe tener siempre un valor inicial, de lo contrario está definido como null

El push muta los estados de react y react trata de evitar que se muten los estados. Entonces no se recomienda utilizar el push en react cuando se está iniciando.

Cada componente de react puede tener sus propios hooks y useStates(su propio estado)
<h3>AddCategory.jsx</h3>
Los fragmentos se usan cuando se tiene un elemento o más de un elemento que va a ser el nodo root de ese componente.

En este componente es permitido trabajar sin el fragmento porque todo está trabajado dentro del form, si fuese a existir un input(por ejemplo), fuera del form ya se tendría que trabajar con fragmentos.

Es decir no se pueden tener nodos hermanos, siempre debe hacer un nodo padre y para ello se usa el fragmento.


<Datos>
Para mantener un registro de los logs aún cuando se actualiza el navegador, se hace un click en el ícono de tuerca en el devTools y luego se activa el preservar cambios o Preserve Logs.

Para evitar que un formulario recargue la página en React se usa el preventDefault como en React

<GifExpertApp>

<AddCategory setCategories={setCategories} />

El primer setCategories, es una propiedad de mi componente de la categoría actual del componente <AddCategory /> el cual va a recibir la función de setCategories, que viene a ser la que está después del signo de igualdad

_________________________________________________________________________________________________________________________________________________________
<h3>Use effect</h3>
<p>Es un efecto que se usa para cuando se desea disparar un efecto secundario. Ejemplo:</p>
<ul>
<li>Cuando se renderiza un componente que se ejecute un efecto</li>
<li>Cuando el counter(useState) cambie quiero disparar un efecto</li>
<li>Cuando cambie la categoría quiero un efecto </li>
</ul>
_________________________________________________________________________________________________________________________________________________________
<h3>GifItem</h3>
Al principio estaba así:
export const GifItem = (props) => {
console.log(props)
}

Esto traía las props que eran enviadas desde <h3><small>GifGrid</small></h3> como props en 
    <GifItem 
        key={image.id}
        {...image}
    />

<b>Pero luego se desestructuró y se saca de la imagen(el objeto imagen) las propiedades</b>. en este caso se saca, title, url, e id
Precio queda comentado en caso de que se necesite más adelante


export const GifItem = ({title, url,id,price}) => {

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
      {/* <small>{price}</small> */}
    </div>
  )
}
_________________________________________________________________________________________________________________________________________________________
<h3>GifGrid</h3>

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


En:
    <GifItem 
        key={image.id}
        {...image}
      />

Yo lo que hago es utilizar el operador spread para esparcir el image, es decir todas las propiedades que vengan en el (image) las estoy esparciendo en el
<GifItem />. bien se puede desestructurar o bien se puede esparcir todas las propiedades.

Esto sirve para que todas las propiedaes que tiene el GifItem reciba cada una de las propiedades que tiene la imagen como properties. 

Lo útil de esto es que si se tienen 100 propiedades dentro del código se pueden esparcir todas y no desestructurar una a una.


Cuando se desestructura el <b>const {images, isLoading, responseTime} = useFetchGifs(category)</b> se desestructura como un objeto para poder regresar lo que se desee desde el custom hook.

En este caso se recibe <b>images, isLoading, responseTime</b> desde <b>useFetchGifs(category)</b>

En la línea const {images, isLoading, responseTime} = useFetchGifs(category) le estamos enviando la categoría como parámetro, esta categoría viene como property desde GifExpertApp.jsx

______________________________________________________________________________________________________________________________________________________
Los hooks personalizados se pueden pegar en react Native y funcionan

Un hook no es más que una función que regresa algo

<b>Los custom component son componentes personalizados</b>
______________________________________________________________________________________________________________________________________________________
<h3>useFetchGifs</h3>
Cuando se tiene una variable con el mismo nombre de la propiedad se puede dejar así. Por eso 
el return {
 images:images,
 isLoading:true
}  
puede quedar como 
return {
 images,
 isLoading
 }

Porque el images que del state son las que voy a mandar como valor a la propiedad del return
______________________________________________________________________________________________________________________________________________________
<h3>Mejorar la exportación de los componentes</h3>

Esto es algo propio de JS o TS

En este caso para hacerlo con los componentes. Para agrupar los componentes

Se crea un archivo de barril o archivo de índice(index.js)

En el archivo de barril coloco:
 export * form 'La ruta de cada archivo'. En este caso quedaría así:

  export * from './AddCategory'
  export * from './GifGrid'
  export * from './GifItem'

  En GifExpertApp.jsx se importa solo a la carpeta, si se tiene un index basta con apuntar a la carpeta, no es necesario colocar el /index.js

  En este caso GifExpertApp.jsx tiene la importación de los componentes de la siguiente manera:

  import { AddCategory } from './components/AddCategory'
  import { GifGrid } from './components/GifGrid'

  Y queda ahora así:
import { useState } from 'react'
import { AddCategory,GifGrid } from './components'

______________________________________________________________________________________________________________________________________________________

<h3>Ruta del responseTime</h3>.

Empieza en GetGif.js, en:

 // Para medir el tiempo al iniciar
    const startTime = performance.now();
    // console.log('startTime',startTime)

    const resp= await fetch(url)

    //Para medir el tiempo de respuesta de la API al finalizar
    const endTime = performance.now();
    const responseTime = endTime - startTime;
    console.log(`Response time: ${responseTime} milliseconds`);

--------------------------------------------------------------------

Continúa en useFetchGifs.js, en:

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

---------------------------------------------------------------------

Finaliza y se muestra en GifGrid, en:

//Aquí se usa y se enlaza con el hook personalizado useFetchGifs.js
  const {images, isLoading, responseTime} = useFetchGifs(category)


  
  return (
    <>
        <h3>{category}</h3>
        <small>La palabra {category} demora {responseTime} milisegundos en responder </small>
        <p>El equivalente a {responseTime / 1000} segundos</p>
______________________________________________________________________________________________________________________________________________________

