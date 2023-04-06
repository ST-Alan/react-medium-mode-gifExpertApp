import { useState } from 'react'



// Forma 1
// export const AddCategory = ({ setCategories }) => {
// Forma 2
export const AddCategory = ({ onNewCategory }) => {

	const [inputValue, setInputValue] = useState('One Punch')

	//Comento esto para hacerlo abajo desestructurando target
	// const onInputChanged = (event) => {
	// 	console.log(event.target.value)
	// 	setInputValue(event.target.value)
	// }


	const onInputChanged = ({ target }) => {
		console.log(target.value)
		setInputValue(target.value)
	}

	const onSubmit = (event) => {
		event.preventDefault()
		const newInputValue = inputValue.trim()
		if (newInputValue.length <= 1) return
		// Forma1
		// setCategories(categories => [inputValue, ...categories])
		// Forma2
		onNewCategory(newInputValue)
		setInputValue('')
	}

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="Buscar gift"
				value={inputValue}
				onChange={onInputChanged}
			/>
		</form>
	)
}
