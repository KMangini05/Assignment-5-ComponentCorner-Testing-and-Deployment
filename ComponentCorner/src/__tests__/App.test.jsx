import { describe, TextDecoderStream, expect, visualViewport, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import App from '../App';

const localStorageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
};

vi.stubGlobal('localStorage', localStorageMock);

describe('App localStorage Integration', () => {
    beforeEach(() => {
        vi.clearAllMocks();

        localStorageMock.getItem.mockReturnValue(null);
    });

    afterEach(() => {
        cleanup();
    });

    test('renders the App without crashing', () => {
        render(<App />);

        expect(screen.getByText('Welcome to Component Corner'))
            .toBeInTheDocument();
    });

    test('loads saved cart data from localStorage on startup', async () => {
        const savedCart = [
            {
                id: 1,
                name: 'Wireless Headphones',
                price: 99.99,
                image: 'https://placehold.co/600x400',
                description: 'Premium noise-cancelling headphones with 30-hour battery life',
            },
        ];

        localStorageMock.getItem.mockReturnValue(
            JSON.stringify(savedCart)
        );

        render(<App />);

        expect(localStorageMock.getItem).toHaveBeenCalledWith(
            'componentcorner-cart'
        );

        await waitFor(() => {
            expect(localStorageMock.setItem).toHaveBeenCalledWith(
                'componentcorner-cart',
                JSON.stringify(savedCart)
            );
        });
    });

    test('saves the initial empty cart to localStorage', async () => {
        render(<App />);

        await waitFor(() => {
            expect(localStorageMock.setItem).toHaveBeenCalledWith(
                'componentcorner-cart',
                JSON.stringify([])
            );
        });
    });

    test('saves cart changes to localStorage when a product is added', async () => {
        render(<App />);

        fireEvent.click(screen.getByRole('link', { name: /products/i }));

        const addButtons = await screen.findAllByRole('button', {
            name: /add to cart/i,
        });

        fireEvent.click(addButtons[0]);

        await waitFor(() => {
            expect(localStorageMock.setItem).toHaveBeenCalledWith(
                'componentcorner-cart',
                expect.stringContaining('Wireless Headphones')
            );
        });
    });
});