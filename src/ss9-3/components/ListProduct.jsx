import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products';

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState('');


  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('products'));
    if (stored) {
      setProducts(stored);
    } else {
      localStorage.setItem('products', JSON.stringify(productsData));
      setProducts(productsData);
    }
  }, []);

  const handleSearch = () => {
    const all = JSON.parse(localStorage.getItem('products')) || [];
    const result = all.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));
    setProducts(result);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4 text-center">List product</h2>
      <div className="flex justify-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Tìm kiếm theo tên"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          className="border px-4 py-2 w-1/3"
        />
        <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded">
          Tìm kiếm
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-3 text-center">
            <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-2" />
            <h3 className="font-semibold">{product.name}</h3>
            <p>{product.price.toLocaleString()} VND</p>
            <Link to={`/detail/${product.id}`} className="inline-block mt-2 px-4 py-1 bg-blue-500 text-white rounded">
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
