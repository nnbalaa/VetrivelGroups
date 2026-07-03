import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={700}
          height={700}
          className="rounded-xl border"
        />

        <div>

  <p className="text-blue-900 font-semibold">
    Model: {product.model}
  </p>

  <h1 className="text-4xl font-bold mt-2">
    {product.name}
  </h1>

  <p className="mt-6 text-lg text-gray-600">
    {product.description}
  </p>

  <div className="mt-10">

  <h2 className="text-2xl font-bold mb-6">
    Ideal Applications
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    <div className="rounded-xl overflow-hidden shadow-md border">
      <Image
        src="/images/applications/office.jpg"
        alt="Office"
        width={400}
        height={250}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 text-center font-semibold">
        Offices
      </div>
    </div>

    <div className="rounded-xl overflow-hidden shadow-md border">
      <Image
        src="/images/applications/hospital.jpg"
        alt="Hospital"
        width={400}
        height={250}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 text-center font-semibold">
        Hospitals
      </div>
    </div>

    <div className="rounded-xl overflow-hidden shadow-md border">
      <Image
        src="/images/applications/cafe.jpg"
        alt="Cafe"
        width={400}
        height={250}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 text-center font-semibold">
        Cafés
      </div>
    </div>

    <div className="rounded-xl overflow-hidden shadow-md border">
      <Image
        src="/images/applications/industry.jpg"
        alt="Industry"
        width={400}
        height={250}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 text-center font-semibold">
        Industries
      </div>
    </div>

  </div>

</div>

  <div className="mt-8">
    <h2 className="text-xl font-semibold mb-3">
      Suitable For
    </h2>

    <ul className="list-disc pl-5 space-y-2">
      {product.applications?.map((place) => (
  <li key={place}>{place}</li>
))}
    </ul>
  </div>

  <div className="mt-8">
    <h2 className="text-xl font-semibold mb-3">
      Material
    </h2>

    <p>{product.material}</p>
  </div>

  <button className="mt-10 bg-blue-900 text-white px-6 py-3 rounded-lg">
    Request Quote
  </button>

</div>
      </div>
    </main>
  );
}