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
  const onAddCategory = (newCategory) => setCategories([newCategory, ...categories])

  // const onAddCategory = () => console.log('Spiderman')
  console.log(categories)
  return (
    <>
      <h1>GifExpertApp</h1>

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
