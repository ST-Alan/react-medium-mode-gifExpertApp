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
