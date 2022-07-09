import { render, screen } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodo = jest.fn();

describe('AddInput', () => {
	it('should render input element ', () => {
		// this test, tests that input element in an input should be shows
		render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
		const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
		expect(inputElement).toBeInTheDocument();
	});
	it('should be able type in the input', () => {
		// this test, tests that input element in an input should be shows
		render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
		const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
		expect(inputElement).toBeInTheDocument();
	});
});
