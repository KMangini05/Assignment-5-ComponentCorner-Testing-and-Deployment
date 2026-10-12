
import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../ProductCard';

describe('ProductCard', () => {
    const mockProduct = {
        id: 1,
        name: 'Wireless Headphones',
        price: 49.99,
        image: 'headphones.jpg',
        description: 'High-quality wireless headphones'
    };

    const mockAddToCart = vi.fn();

    test('renders without crashing', () => {
        render(
            <ProductCard
                product={mockProduct}
                addToCart={mockAddToCart}
            />
        );
    });

    test('displays product information correctly', () => {
        render(
            <ProductCard
                product={mockProduct}
                addToCart={mockAddToCart}
            />
        );

        expect(
            screen.getByText('Wireless Headphones')
        ).toBeInTheDocument();

        expect(
            screen.getByText('$49.99')
        ).toBeInTheDocument();

        expect(
            screen.getByText('High-quality wireless headphones')
        ).toBeInTheDocument();
    });

    test('displays the Add to Cart button', () => {
        render(
            <ProductCard
                product={mockProduct}
                addToCart={mockAddToCart}
            />
        );

        expect(
            screen.getByRole('button', { name: /add to cart/i })
        ).toBeInTheDocument();
    });

    test('calls addToCart when Add to Cart is clicked', () => {
        mockAddToCart.mockClear();

        render(
            <ProductCard
                product={mockProduct}
                addToCart={mockAddToCart}
            />
        );

        fireEvent.click(
            screen.getByRole('button', { name: /add to cart/i })
        );

        expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
    });
});
