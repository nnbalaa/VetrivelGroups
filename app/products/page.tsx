import Image from "next/image";
import { products } from "@/lib/products";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-3">
        Our Products
      </h1>

      <p className="text-gray-600 mb-10">
        Explore our range of coffee, tea and vending machines.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl overflow-hidden shadow-sm"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-72 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold">
                {product.name}
              </h2>

              <p className="text-gray-600 mt-2">
                {product.description}
              </p>

              <Link
  href={`/products/${product.id}`}
  className="inline-block mt-5 bg-blue-900 text-white px-5 py-2 rounded-lg"
>
  View Details
</Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}