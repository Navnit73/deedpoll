"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { generateDeedPoll, DeedPollSubmission } from '@/lib/generateDeedPoll';

export default function PreviewPage() {
  const router = useRouter();
  const [pdfDataUri, setPdfDataUri] = useState<string | null>(null);
  const [htmlPreview, setHtmlPreview] = useState<string>('');
  const [pdfTooLong, setPdfTooLong] = useState(false);
  const [title, setTitle] = useState('Your Deed Poll');
  const [hash, setHash] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentHash = window.location.hash;
      if (!currentHash || currentHash.length <= 1) {
        router.push('/change-name-in-uk-by-deedpoll');
        return;
      }
      setHash(currentHash);
      
      try {
        const b64Str = decodeURIComponent(currentHash.slice(1));
        let decodedStr = '';
        try {
          // Try standard base64 decode
          decodedStr = atob(b64Str);
        } catch(e) {
          // If it fails, maybe it was unescaped utf8?
          decodedStr = decodeURIComponent(escape(atob(b64Str)));
        }
        
        // Try parsing JSON
        const decoded = JSON.parse(decodedStr) as DeedPollSubmission;
        const result = generateDeedPoll(decoded);
        setPdfDataUri(result.pdfDataUri);
        setHtmlPreview(result.htmlPreview);
        setPdfTooLong(result.pdfTooLong);
        setTitle(result.title);
        document.title = result.title;
      } catch (e) {
        console.error("Failed to generate PDF", e);
      }
    }
  }, [router]);

  if (!pdfDataUri) {
    return <div className="max-w-6xl mx-auto px-4 py-32 text-center text-2xl font-bold text-gray-600 animate-pulse">Generating your legally valid deed poll...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-center">
        {title}
      </h1>

      {pdfTooLong && (
        <div className="bg-red-50 border-l-[8px] border-red-600 p-6 mb-8 max-w-4xl mx-auto">
          <p className="text-xl font-bold text-red-700 mb-2">
            ⚠️ Warning: Your PDF deed poll turned out too long to fit onto the page.
          </p>
          <p className="text-red-700 font-medium">
            You'll need to use the text version below and copy-paste it into a document for yourself. (<Link href="/faq#pdf-too-long" className="underline">Why is this happening?</Link>)
          </p>
        </div>
      )}

      <div className="text-center mb-12 space-y-6">
        <p className="text-2xl font-bold text-[#00703c]">Your deed poll is ready to print and use!</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={pdfDataUri} target="_blank" rel="noopener noreferrer" className="bg-[#00703c] hover:bg-[#005a30] text-white font-bold py-4 px-8 transition-colors text-xl">
            Preview PDF
          </a>
          <a href={pdfDataUri} download="deed-poll.pdf" className="bg-white border-2 border-[#1d70b8] text-[#1d70b8] hover:bg-gray-50 font-bold py-4 px-8 transition-colors text-xl">
            Download PDF
          </a>
          <Link href="/checklist" className="bg-[#1d70b8] hover:bg-[#003078] text-white font-bold py-4 px-8 transition-colors text-xl">
            What to do next →
          </Link>
        </div>
      </div>

      {/* PDF View embedded */}
      <div className="max-w-4xl mx-auto border-4 border-gray-300 shadow-xl mb-16 aspect-[1/1.414] w-full bg-gray-100">
        <iframe src={pdfDataUri} className="w-full h-full" title="PDF Preview" />
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-6">Next Steps</h2>
        <ol className="list-decimal pl-6 space-y-4 text-xl mb-8">
          <li><strong>Print your deed poll</strong> (we recommend printing <Link href="/faq#multiple-originals" className="text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]">a few copies</Link>).</li>
          <li><strong>Sign it</strong> in both your old and new names.</li>
          <li><strong>Get your witnesses</strong> to sign it too.</li>
        </ol>
        <p className="text-xl mb-8 text-gray-800">
          Congratulations; that's all you need to do to legally change your name! You can now send copies to your bank, the DVLA, and the Passport Office.
        </p>


        <div className="bg-gray-100 p-8 border-l-[8px] border-[#1d70b8] flex flex-col md:flex-row items-center gap-6 justify-between">
          <div>
            <h3 className="font-bold text-2xl mb-2">Made a mistake?</h3>
            <p className="text-lg text-gray-700">You can easily go back and correct your details. Your information is saved.</p>
          </div>
          <Link href={`/change-name-in-uk-by-deedpoll${hash}`} className="whitespace-nowrap bg-white border-2 border-[#1d70b8] text-[#1d70b8] font-bold py-3 px-6 hover:bg-gray-50 text-lg shadow-[0_4px_0_0_#003078] active:shadow-none active:translate-y-1 transition-all">
            Edit Details
          </Link>
        </div>
      </div>

      <hr className="my-16 border-gray-300 border-t-2" />

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Text Version</h2>
        <p className="text-lg mb-8 text-gray-700">
          You can use the text below if you want to write out your own deed poll. For example, you can copy it into your favourite word processor for editing and formatting, or you can write it out by hand for a personal touch.
        </p>
        <article className="bg-white border-[8px] border-gray-200 p-8 sm:p-12 font-serif text-justify shadow-inner" dangerouslySetInnerHTML={{ __html: htmlPreview }} />
      </div>
    </div>
  );
}
