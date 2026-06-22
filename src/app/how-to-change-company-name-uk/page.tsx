import Link from 'next/link';

export const metadata = {
  alternates: { canonical: "/how-to-change-company-name-uk" },
  title: "How to Change Company Name UK | Deed Poll UK",
  description: "Learn how to change company name uk. Guide covers: how to change a company name uk, how to change your business name uk, and more.",
};

export default function Page() {
  const keywords = [
    "how to change a company name uk",
    "how to change your business name uk"
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 capitalize">
        How to Change Company Name UK
      </h1>
      
      <div className="bg-[#f3f2f1] border-l-[8px] border-[#1d70b8] p-6 mb-8">
        <p className="text-xl">
          Welcome to our comprehensive guide on <strong>how to change company name uk</strong>. If you are looking for answers about changing your name legally and officially, you are in the right place.
        </p>
      </div>

      <div className="prose prose-lg max-w-none text-gray-800 mb-12">
        <p>
          Changing your name in the UK is a straightforward process when you use a legally recognised Deed Poll. 
          Our service helps you generate the exact documentation you need to update your passport, driving licence, and bank accounts instantly.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Common Questions We Answer:</h2>
        <ul className="list-disc pl-6 space-y-2 font-semibold text-[#1d70b8]">
          {keywords.map((kw, idx) => (
            <li key={idx}>{kw}</li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-100 p-8 text-center border-t border-b border-gray-300">
        <h2 className="text-2xl font-bold mb-4">Ready to change your name?</h2>
        <Link href="/change-name-in-uk-by-deedpoll" className="inline-block bg-[#00703c] hover:bg-[#005a30] text-white font-bold py-3 px-8 shadow-[0_4px_0_0_#002d18] active:shadow-none active:translate-y-1 transition-all text-xl">
          Create Your Deed Poll Online
        </Link>
      </div>
    </div>
  );
}
