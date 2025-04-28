const products = [
    { id: 1, name: 'Product 1', price: 29.99, img: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 49.99, img: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 19.99, img: 'https://via.placeholder.com/150' }
  ];
  
  export default function ECommercePage() {
    return (
      <div className="min-h-screen p-6 bg-gray-50">
        <h1 className="text-4xl font-bold text-center mb-8">Simple Shop</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow">
              <img src={product.img} alt={product.name} className="rounded mb-4 w-full" />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-700">${product.price}</p>
              <button className="bg-black text-white mt-4 px-4 py-2 rounded w-full">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  