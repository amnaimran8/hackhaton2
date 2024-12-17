interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
  }
  
  export default function ProductPage() {
    const products: Product[] = [
      {
        id: 1,
        name: "The Dandy Chair",
        price: "£250",
        image: "/images/product1-image.jpg",
      },
      {
        id: 2,
        name: "Rustic Vase Set",
        price: "£155",
        image: "/images/product2-image.jpg",
      },
      {
        id: 3,
        name: "The Silky Vase",
        price: "£125",
        image: "/images/product3-image.jpg",
      },
      {
        id: 4,
        name: "The Lucy Lamp",
        price: "£399",
        image: "/images/product4-image.jpg",
      },
    ];
  
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <div className="w-full h-80 bg-gray-200 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-lg text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
  
        {/* View Collection Button */}
        <div className="text-center mt-8">
          <button className="bg-gray-200 text-black px-6 py-2 rounded-md hover:bg-gray-300">
            View collection
          </button>
        </div>
      </div>
    );
  }
  