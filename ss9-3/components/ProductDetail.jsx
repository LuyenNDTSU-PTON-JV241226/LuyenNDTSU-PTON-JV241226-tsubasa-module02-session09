import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const products = JSON.parse(localStorage.getItem('products')) || [];
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p className="text-center mt-8">Không tìm thấy sản phẩm</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <img src={product.image} alt={product.name} className="w-full h-64 object-contain mb-4" />
      <p><strong>Id:</strong> {product.id}</p>
      <p><strong>ProductName:</strong> {product.name}</p>
      <p><strong>Price:</strong> {product.price.toLocaleString()} VND</p>
    </div>
  );
};

export default ProductDetail;
