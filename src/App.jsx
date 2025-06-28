export default function ProductCard({ product }) {
  const { name, price, oldPrice, isOrganic, imageUrl } = product;

  return (
    <div className="max-w-xs bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />
      
      <div className="mb-2">
        <h3 className="text-gray-800 font-normal text-lg">{name}</h3>
        {isOrganic && (
          <span className="text-xs text-green-700 bg-green-100 px-2 py-0.5 rounded-full inline-block mt-1">
            Organic
          </span>
        )}
      </div>

      <div className="flex justify-between items-center mb-3">
        <div className="text-md text-gray-900 font-semibold">
          ${price.toFixed(2)}
          {oldPrice && (
            <span className="ml-2 text-gray-400 line-through text-sm">
              ${oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>

      <button className="w-full bg-[#F57C00] hover:bg-orange-700 text-white font-medium py-2 rounded-xl transition">
        Add to Cart
      </button>
    </div>
  );
}
