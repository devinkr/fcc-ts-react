import React from 'react';
import './styles.css';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
	completedTodos: Todo[];
	setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoList({
	todos,
	setTodos,
	completedTodos,
	setCompletedTodos,
}: Props) {
	return (
		<div className='container'>
			<Droppable droppableId='TodosList'>
				{(provided) => (
					<div className='todos' ref={provided.innerRef}>
						<span className='todos__heading'>Active Tasks</span>
						{todos.map((todo) => (
							<SingleTodo
								todo={todo}
								todos={todos}
								key={todo.id}
								setTodos={setTodos}
							/>
						))}
					</div>
				)}
			</Droppable>

			<div className='todos remove'>
				<span className='todos__heading'>Completed Tasks</span>
			</div>
		</div>
	);
}

export default TodoList;
