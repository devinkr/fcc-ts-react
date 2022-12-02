import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';

const App = () => {
	const [todo, setTodo] = useState<string>('');
	const [todos, setTodos] = useState<Todo[]>([]);

	function handleAdd(e: React.FormEvent) {
		e.preventDefault();
		if (todo) {
			setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
			setTodo('');
		}
	}

	console.log(todos);

	return (
		<div className='App'>
			<span className='heading'>Taskify</span>
			<InputField
				todo={todo}
				setTodo={setTodo}
				handleAdd={handleAdd}></InputField>
			<ul>
				{todos.map((todo) => (
					<li>{todo.todo}</li>
				))}
			</ul>
		</div>
	);
};

export default App;

// let name: string;
// let age: number | string;

// let student: boolean;
// let hobbies: string[];
// let role:[number, string]

// let printName: (name:string) => never;

// let personName: unknown;

// type Person = {
//   name: string;
//   age?: number;
// }

// let person: Person = {
//   name: "Devin",
//   age: 39
// }

// let lotsOfPeople: Person[];

// interface Person {
//   name: string;
//   age?: number;
// }

// interface Guy extends Person {
//   profession: string;
// }

// type X = {
//   a: string;
//   b: number;
// }

// & is the same as extends with interface.
// type Y = X & {
//   c: string;
//   d: number;
// }

// let y:Y = {
//   c: 'efwef',
//   d: 34
// }
