import { render, screen } from '@testing-library/react';
import App from './App';
import Reservation from './sites/Reservation';


test('Renders the BookingForm heading', () => {
    render(<Reservation/>);
    const headingElement = screen.getByText("Make your reservation");
    expect(headingElement).toBeInTheDocument();
})
