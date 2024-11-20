// dont change any code in this file

import { render, screen } from '@testing-library/react';
import ProfileCard from './ProfileCard';

test('renders user name and age', () => {
    render(<ProfileCard name="Alice" age={25} location="New York" isOnline={true} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Age: 25')).toBeInTheDocument();
});

test('renders "Location: Unknown" if location is missing', () => {
    render(<ProfileCard name="Bob" age={30} isOnline={false} />);
    expect(screen.getByText('Location: Unknown')).toBeInTheDocument();
});

test('shows green dot when user is online', () => {
    render(<ProfileCard name="Charlie" age={28} location="Sydney" isOnline={true} />);
    const dot = screen.getByTestId('status-dot');
    expect(dot).toHaveStyle('background-color: green');
});

test('shows gray dot when user is offline', () => {
    render(<ProfileCard name="Bob" age={30} location="London" isOnline={false} />);
    const dot = screen.getByTestId('status-dot');
    expect(dot).toHaveStyle('background-color: gray');
});
