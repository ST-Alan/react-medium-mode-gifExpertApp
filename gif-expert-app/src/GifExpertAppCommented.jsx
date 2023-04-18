import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])
  // Forma uno de agregar la categoría Spiderman
  // const onAddCategory = () => setCategories(['Spiderman', ...categories])
  // Forma dos de agregar la categoría Spiderman
  // const onAddCategory = () => {
  //   setCategories(cat => [...cat, 'Spiderman'])
  // }

  // Es el evento que voy a usar en la forma 2 <AddCategory>
  //const onAddCategory = (newCategory) => setCategories([newCategory, ...categories])

  //En onAddCategory si es está emitiendo la nueva búsqueda(newCategory) dentro en el onSubmit, y esa búsqueda está ya incluida dentro del arreglo categories entonces return, es decir entonces no lo incluyas, si no está dentro del arreglo inclúyelo por favor
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }


  // const onAddCategory = () => console.log('Spiderman')
  // console.log(categories)
  return (
    <>
      <h1>API Time</h1>

      {/* Forma1 */}
      {/* <AddCategory setCategories={setCategories} /> */}
      {/* Forma2 */}
      <AddCategory onNewCategory={onAddCategory} />
      {/* <button onClick={onAddCategory}>Agregar Categoría</button> */}

      <ol>
        {categories.map(category => {
          return <li key={category}>{category}</li>
        })}
        {/* <li>ABC</li> */}
      </ol>
    </>
  )
}
