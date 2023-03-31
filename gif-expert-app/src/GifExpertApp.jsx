import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])
  // Forma uno de agregar la categoría Spiderman
  const onAddCategory = () => setCategories(['Spiderman', ...categories])
  // Forma dos de agregar la categoría Spiderman
  // const onAddCategory = () => {
  //   setCategories(cat => [...cat, 'Spiderman'])
  // }

  // const onAddCategory = () => console.log('Spiderman')
  console.log(categories)
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory />

      <button onClick={onAddCategory}>Agregar Categoría</button>

      <ol>
        {categories.map(category => {
          return <li key={category}>{category}</li>
        })}
        {/* <li>ABC</li> */}
      </ol>
    </>
  )
}
