"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import DeedPollForm from '@/components/DeedPollForm';
import { generateDeedPoll, DeedPollSubmission } from '@/lib/generateDeedPoll';
import ShareWidget from '@/components/ShareWidget';

const PAID_STORAGE_KEY = 'deedpoll_paid_order';
const normaliseName = (name: string) => name.trim().replace(/\s+/g, ' ').toLowerCase();

function dataUriToBlobUrl(dataUri: string): string {
  const [header, base64] = dataUri.split(',');
  const mime = header.match(/data:([^;]+)/)?.[1] || 'application/pdf';
  const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
  return URL.createObjectURL(new Blob([bytes], { type: mime }));
}

export default function PremiumAccessPage() {
  const [view, setView] = useState<'form' | 'preview'>('form');
  const [submissionData, setSubmissionData] = useState<DeedPollSubmission | null>(null);
  const [pdfDataUri, setPdfDataUri] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [htmlPreview, setHtmlPreview] = useState<string>('');
  const [pdfTooLong, setPdfTooLong] = useState(false);
  const [title, setTitle] = useState('Your Deed Poll');

  useEffect(() => {
    if (submissionData) {
      try {
        const result = generateDeedPoll(submissionData, true);
        setPdfDataUri(result.pdfDataUri);
        setHtmlPreview(result.htmlPreview);
        setPdfTooLong(result.pdfTooLong);
        setTitle(result.title);
        document.title = result.title;
      } catch (e) {
        console.error("Failed to generate PDF", e);
      }
    }
  }, [submissionData]);

  useEffect(() => {
    if (!pdfDataUri) return;
    const url = dataUriToBlobUrl(pdfDataUri);
    setPdfUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [pdfDataUri]);

  const handleFormSuccess = (data: DeedPollSubmission) => {
    try {
      sessionStorage.setItem(
        PAID_STORAGE_KEY,
        JSON.stringify({ orderId: 'PREMIUM-ACCESS', oldName: normaliseName(data.oldName || '') })
      );
    } catch {}
    setSubmissionData(data);
    setView('preview');
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (view === 'form' || !submissionData) {
    return (
      <DeedPollForm
        heading="Create your deed poll (Premium Access)"
        intro={
          <>
            Complete the form below to generate and download your official, unwatermarked UK deed poll PDF immediately —{" "}
            <strong className="text-[#00703c]">no payment required</strong>. Need help? See the{" "}
            <Link href="/checklist" className="text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]">
              checklist
            </Link>{" "}
            or{" "}
            <Link href="/faq" className="text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]">
              FAQ
            </Link>.
          </>
        }
        submitLabel="Create & Download Deed Poll →"
        onSuccess={handleFormSuccess}
      />
    );
  }

  if (!pdfDataUri || !pdfUrl) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-32 text-center text-2xl font-bold text-gray-600 animate-pulse">
        Generating your legally valid deed poll...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 mb-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-[#00703c] text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
            Premium Access
          </span>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h1>
        </div>
        <button
          type="button"
          onClick={() => setView('form')}
          className="text-[#1d70b8] underline underline-offset-2 font-medium hover:text-[#003078] cursor-pointer"
        >
          Edit details
        </button>
      </div>

      {pdfTooLong && (
        <div className="bg-red-50 border-l-[8px] border-red-600 p-4 mb-5">
          <p className="text-lg font-bold text-red-700 mb-2">
            ⚠️ Warning: Your PDF deed poll turned out too long to fit onto the page.
          </p>
          <p className="text-red-700 font-medium">
            You&apos;ll need to{" "}
            <button
              type="button"
              onClick={() => setView('form')}
              className="underline font-bold cursor-pointer"
            >
              shorten your details
            </button>{" "}
            or use the text version below and copy-paste it into a document for yourself. (
            <Link href="/faq#pdf-too-long" className="underline">
              Why is this happening?
            </Link>
            )
          </p>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] items-start">
        <section aria-label="Deed poll preview" className="order-2 lg:order-1 min-w-0">
          <div className="border border-gray-300 shadow-md aspect-[1/1.414] lg:aspect-auto lg:h-[calc(100vh-11rem)] lg:min-h-[520px] w-full bg-gray-100">
            <iframe src={pdfUrl} className="w-full h-full" title="PDF Preview" />
          </div>
        </section>

        <aside className="order-1 lg:order-2 min-w-0 lg:sticky lg:top-24">
          <div className="border-2 border-[#00703c] bg-white p-4 sm:p-5 space-y-3">
            <p className="text-xl font-bold text-[#00703c]">Your deed poll is ready to print and use.</p>
            {submissionData && (
              <p className="bg-gray-50 border border-gray-200 px-3 py-2 text-sm font-bold break-words">
                {submissionData.oldName} <span className="text-gray-500" aria-label="to">→</span> {submissionData.newName}
              </p>
            )}
            <div className="flex flex-col gap-2">
              <a
                href={pdfUrl}
                download="deed-poll.pdf"
                className="bg-[#00703c] hover:bg-[#005a30] text-white text-center font-bold py-3 px-6 transition-colors text-lg"
              >
                Download PDF
              </a>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-[#1d70b8] text-[#1d70b8] hover:bg-gray-50 text-center font-bold py-2 px-6 transition-colors"
              >
                Open PDF
              </a>
              <Link
                href="/checklist"
                className="bg-[#1d70b8] hover:bg-[#003078] text-white text-center font-bold py-2 px-6 transition-colors"
              >
                What to do next →
              </Link>
            </div>
            <p className="text-sm text-gray-600">
              You can{" "}
              <button
                type="button"
                onClick={() => setView('form')}
                className="text-[#1d70b8] underline underline-offset-2 cursor-pointer"
              >
                edit your details
              </button>{" "}
              and download again at no cost.
            </p>
          </div>
        </aside>
      </div>

      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">Next Steps</h2>
        <ol className="list-decimal pl-6 space-y-4 text-xl mb-8">
          <li>
            <strong>Print your deed poll</strong> (we recommend printing{" "}
            <Link href="/faq#multiple-originals" className="text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]">
              a few copies
            </Link>
            ).
          </li>
          <li>
            <strong>Sign it</strong> in both your old and new names.
          </li>
          <li>
            <strong>Get your witnesses</strong> to sign it too.
          </li>
        </ol>
        <p className="text-xl mb-8 text-gray-800">
          Congratulations; that&apos;s all you need to do to legally change your name! You can now send copies to your bank, the DVLA, and the Passport Office.
        </p>

        {/* Free Letter Generator CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-[#1d70b8] rounded-xl p-6 sm:p-8 mb-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="bg-[#1d70b8] text-white text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider inline-block mb-2">
              Next Step: Free Tool
            </span>
            <h3 className="text-2xl font-bold text-[#0b0c0c]">Generate Your Official Notification Letters</h3>
            <p className="text-sm sm:text-base text-gray-700 mt-1 max-w-xl">
              Create tailored formal cover letters for the <strong>DVLA, Passport Office, Banks, HMRC, NHS, and Employer</strong> in 1 click.
            </p>
          </div>
          <Link
            href="/name-change-letters-generator"
            className="whitespace-nowrap bg-[#1d70b8] hover:bg-[#003078] text-white font-bold px-6 py-3.5 rounded-lg text-base sm:text-lg transition-transform active:scale-95 shadow-md flex-shrink-0"
          >
            Generate Letters Now →
          </Link>
        </div>

        <ShareWidget
          title="I just created my official UK Deed Poll in 2 minutes!"
          description="Legally valid UK deed poll generator accepted by HM Passport Office, DVLA, and banks."
        />
      </div>

      <hr className="my-16 border-gray-300 border-t-2 max-w-4xl mx-auto" />

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Text Version</h2>
        <p className="text-lg mb-8 text-gray-700">
          You can use the text below if you want to write out your own deed poll. For example, you can copy it into your favourite word processor for editing and formatting, or you can write it out by hand for a personal touch.
        </p>
        <article
          className="bg-white border-[8px] border-gray-200 p-8 sm:p-12 font-serif text-justify shadow-inner"
          dangerouslySetInnerHTML={{ __html: htmlPreview }}
        />
      </div>
    </div>
  );
}

