import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodo = jest.fn();

describe('AddInput', () => {
	it('should render input element ', () => {
		// this test, tests that input element in an input should be shows
		render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
		const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
		expect(inputElement).toBeInTheDocument();
	});
	it('should be able to type in the input', () => {
		render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
		const inputElement = screen.getByPlaceholderText(/add a new task here.../i);

		fireEvent.change(inputElement, { target: { value: 'go shopping' } });
		expect(inputElement.value).toBe('go shopping');
	});
	it('should have empty input when add button is clicked', () => {
		render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
		const buttonElement = screen.getByRole('button', { name: /Add/i });
		const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
		fireEvent.change(inputElement, { target: { value: 'go shopping' } });
		fireEvent.click(buttonElement);
		expect(inputElement.value).toBe('');
	});
});
