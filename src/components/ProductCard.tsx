import React from 'react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: { amount: number; currency: string };
    media: { url: string };
  };
  onAddToOrder: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToOrder }) => {
  return (
    <div className="product-card">
      <img src={product.media.url} alt={product.name} />
      <h3>{product.name}</h3>
      <p>
        {product.price.amount} {product.price.currency}
      </p>
      <button onClick={() => onAddToOrder(product.id)}>Add to Order</button>
    </div>
  );
};

export default ProductCard;
