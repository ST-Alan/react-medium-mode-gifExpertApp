import { useState } from 'react'




export const AddCategory = ({ onNewCategory }) => {

	const [inputValue, setInputValue] = useState('')

	const onInputChanged = ({ target }) => {
		console.log(target.value)
		setInputValue(target.value)
	}

	const onSubmit = (event) => {
		event.preventDefault()
		const newInputValue = inputValue.trim()
		if (newInputValue.length <= 1) return
		setInputValue('')
		onNewCategory(newInputValue)
	}

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="Testing API time"
				value={inputValue}
				onChange={onInputChanged}
			/>
		</form>
	)
}
