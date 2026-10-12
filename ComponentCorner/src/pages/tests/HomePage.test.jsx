import { render, screen }from '@testing-library/react';
import HomePage from '../HomePage';

describe('HomePage', () => {
    test('renders without crashing', () => {
        render(<HomePage/>);
    });
    
    test('display the main homepage content', () => {
        render(<HomePage/>);

        expect(
            screen.getByText('Welcome to Component Corner')
        ).toBeInTheDocument();

        expect(
            screen.getByText('Find the latest electronics at great prices.')
        ).toBeInTheDocument();

        expect(
            screen.getByRole('button', { name: /shop now/i })
        ).toBeInTheDocument();

        expect(
            screen.getByText('Why Shop with Us?')
        ).toBeInTheDocument();

        expect(
            screen.getByText(/we make it easy to find quality electronics/i)
        ).toBeInTheDocument();

    });
});