import { useState } from 'react'




export const AddCategory = ({ setCategories }) => {

	const [inputValue, setInputValue] = useState('')


	const onInputChanged = ({ target }) => {
		console.log(target.value)
		setInputValue(target.value)
	}

	const onSubmit = (event) => {
		event.preventDefault()
		if (inputValue.trim().length <= 1) return
		setCategories(categories => [inputValue, ...categories])
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
