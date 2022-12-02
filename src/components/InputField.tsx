import React, { useRef, useState } from 'react';
import './styles.css';
import { Todo } from '../model';

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function InputField({ todos, setTodos }: Props) {
	const [todo, setTodo] = useState<string>('');

	function handleAdd(e: React.FormEvent) {
		e.preventDefault();
		if (todo) {
			setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
			setTodo('');
		}
	}

	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<form
			className='input'
			onSubmit={(e) => {
				handleAdd(e);
				inputRef.current?.blur();
			}}>
			<input
				ref={inputRef}
				type='text'
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				placeholder='Enter a task'
				className='input__box'
			/>
			<button className='input_submit' type='submit'>
				Go
			</button>
		</form>
	);
}

export default InputField;
