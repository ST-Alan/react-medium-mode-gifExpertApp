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