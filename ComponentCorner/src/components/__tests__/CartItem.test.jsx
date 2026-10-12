
import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CartItem from '../CartItem';

describe('CartItem', () => {
    const mockProduct = {
        id: 1,
        name: 'Wireless Headphones',
        price: 49.99,
    };

    const mockRemoveFromCart = vi.fn();

    test('renders without crashing', () => {
        render(
            <CartItem
                product={mockProduct}
                removeFromCart={mockRemoveFromCart}
            />
        );

        expect(
            screen.getByText('Wireless Headphones')
        ).toBeInTheDocument();
    });

    test('displays product information correctly', () => {
        render(
            <CartItem
                product={mockProduct}
                removeFromCart={mockRemoveFromCart}
            />
        );

        expect(
            screen.getByText('Wireless Headphones')
        ).toBeInTheDocument();

        expect(
            screen.getByText('$49.99')
        ).toBeInTheDocument();
    });

    test('calls removeFromCart when Remove is clicked', () => {
        mockRemoveFromCart.mockClear();

        render(
            <CartItem
                product={mockProduct}
                removeFromCart={mockRemoveFromCart}
            />
        );

        fireEvent.click(
            screen.getByRole('button', { name: /remove/i })
        );

        expect(mockRemoveFromCart).toHaveBeenCalledWith(1);
    });
});
