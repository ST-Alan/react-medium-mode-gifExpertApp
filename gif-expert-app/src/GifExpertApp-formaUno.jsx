import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  // 2023-04-17 10:45:17 - Estoy comentando esta línea porque me parece que no es necesaria
  // const onAddCategory = () => setCategories(['Spiderman', ...categories])

  (categories)
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory setCategories={setCategories} />


      <ol>
        {categories.map(category => {
          return <li key={category}>{category}</li>
        })}
      </ol>
    </>
  )
}
