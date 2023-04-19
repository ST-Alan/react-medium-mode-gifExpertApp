import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Nike'])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }

  // console.log(categories)



  return (
    <>
      <h1>API Time</h1>

      <AddCategory onNewCategory={onAddCategory} />
      <small>El tiempo de carga del API es de:</small>
          {/* Aquí le manda la category a GifGrid.jsx */}
        {categories.map((category )=>(<GifGrid key={category} category={category} />)
       )}

    </>
  )
}
