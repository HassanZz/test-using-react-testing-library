import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
	return (
		<BrowserRouter>
			<Todo />
		</BrowserRouter>
	);
};

const addTask = (tasks) => {
	const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
	const buttonElement = screen.getByRole('button', { name: /Add/i });

	tasks.forEach((task) => {
		fireEvent.change(inputElement, { target: { value: task } });
		fireEvent.click(buttonElement);
	});
};

describe('Todo', () => {
	it('should render same text assed into title prop ', () => {
		render(<MockTodo />);
		addTask(['go shopping']);
		const divElement = screen.getByText(/go shopping/i);
		expect(divElement).toBeInTheDocument();
	});

	it('should render multiple items', () => {
		render(<MockTodo />);
		addTask(['go shopping', 'wash my hands', 'go university']);
		const divElement = screen.getAllByTestId('task-container');
		expect(divElement.length).toBe(3);
	});

	it('task should not have completed class when initially rendered', () => {
		render(<MockTodo />);
		addTask(['go shopping']);
		const divElement = screen.getByText(/go shopping/i);
		expect(divElement).not.toHaveClass('todo-item-active');
	});
	it('task should have completed class when clicked', () => {
		render(<MockTodo />);
		addTask(['go shopping']);
		const divElement = screen.getByText(/go shopping/i);
		fireEvent.click(divElement);
		expect(divElement).toHaveClass('todo-item-active');
	});
});
