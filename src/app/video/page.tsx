import Link from 'next/link';

export const metadata = {
  title: "Video Guide to Changing Your Name | Deed Poll UK",
  description: "Watch our short video guide on how to change your name via deed poll.",
  alternates: {
    canonical: "/video",
  },
};

export default function VideoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How to Change Your Name</h1>
      
      <div className="bg-[#f3f2f1] border-[4px] border-[#1d70b8] p-8 md:p-12 mb-8">
        <h2 className="text-2xl font-bold mb-4">Video Coming Soon</h2>
        <p className="text-xl text-gray-800 mb-6">
          The 60-second video demonstration is currently being produced. 
        </p>
        
        <div className="aspect-video bg-[#0b0c0c] flex items-center justify-center mb-8 border-4 border-gray-300">
          <span className="text-white text-xl font-bold">[Video Player Placeholder]</span>
        </div>

        <Link href="/faq" className="inline-block bg-[#00703c] hover:bg-[#005a30] text-white font-bold py-3 px-8 shadow-[0_4px_0_0_#002d18] active:shadow-none active:translate-y-1 transition-all">
          Return to FAQ
        </Link>
      </div>
    </div>
  );
}
