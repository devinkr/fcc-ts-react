import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';
import { DragDropContext } from 'react-beautiful-dnd';

const App = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

	return (
		<DragDropContext onDragEnd={() => {}}>
			<div className='App'>
				<span className='heading'>Taskify</span>
				<InputField todos={todos} setTodos={setTodos} />
				<TodoList
					todos={todos}
					setTodos={setTodos}
					completedTodos={completedTodos}
					setCompletedTodos={setCompletedTodos}
				/>
			</div>
		</DragDropContext>
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
