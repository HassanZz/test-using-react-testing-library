import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
	it('should render same text passed into title prop', () => {
		render(<Header title='My Header' />);
		const headingElement = screen.queryByText(/my header/i);
		expect(headingElement).toBeInTheDocument();
	});
});
// // it('should render same text passed into title prop', () => {
// // 	render(<Header title='My Header' />);
// // 	const headingElement = screen.getByRole('heading');
// // 	expect(headingElement).toBeInTheDocument();
// // });

// it('should render same text passed into title prop', () => {
// 	render(<Header title='My Header' />);
// 	const headingElement = screen.getByRole('heading', { name: 'My Header' }); // by use of this method we can specify a element which has either specified role and specified name! AND this test instead of prev doesnt return error
// 	expect(headingElement).toBeInTheDocument();
// });

// //FIND

// it('should render same text passed into title prop', async () => {
// 	render(<Header title='My Header' />);
// 	const headingElement = await screen.findByText(/my header/i);
// 	expect(headingElement).toBeInTheDocument();
// }); // if we dont use await and async it return an error because this is an async test

// //Queries

// it('should render same text passed into title prop', async () => {
// 	render(<Header title='My Header' />);
// 	const headingElement = await screen.queryByText(/dogs/i);
// 	expect(headingElement).not.toBeInTheDocument();
// });

// // it('should render same text passed into title prop', async () => {
// // 	render(<Header title='My Header' />);
// // 	const headingElement = await screen.getByText(/dogs/i);
// // 	expect(headingElement).not.toBeInTheDocument();
// // }); // this test return false because before except line, we get error because there is no dogs text!

// // use of ALL

// it('should render same text passed into title prop', async () => {
// 	render(<Header title='My Header' />);
// 	const headingElements = screen.getAllByRole('heading');
// 	expect(headingElements.length).toBe(2);
// }); // async in this test isnt important and doesnt use

////////////////////////////////////////////////////////////////////////////
// assertion
