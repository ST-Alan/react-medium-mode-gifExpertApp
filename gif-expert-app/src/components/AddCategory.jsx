import { useState } from 'react'




export const AddCategory = () => {

	const [inputValue, setInputValue] = useState('One Punch')

	const onInputChanged = (event) => {
		console.log(event.target.value)
		setInputValue(event.target.value)
	}

	const onSubmit = (event) => {
		event.preventDefault()
		console.log(inputValue)
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
