"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { generateDeedPoll, DeedPollSubmission } from '@/lib/generateDeedPoll';
import ShareWidget from '@/components/ShareWidget';
import { PaymentButton } from '@/components/payment/PaymentButton';
import { PaymentState } from '@/types/payment';

const PRICE_PENCE = 1499;
const PRICE_LABEL = '£14.99';
const PAID_STORAGE_KEY = 'deedpoll_paid_order';

export default function PreviewPage() {
  const router = useRouter();
  const [pdfDataUri, setPdfDataUri] = useState<string | null>(null);
  const [htmlPreview, setHtmlPreview] = useState<string>('');
  const [pdfTooLong, setPdfTooLong] = useState(false);
  const [title, setTitle] = useState('Your Deed Poll');
  const [hash, setHash] = useState('');
  const [isPaid, setIsPaid] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [consented, setConsented] = useState(false);
  const [submissionData, setSubmissionData] = useState<DeedPollSubmission | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentHash = window.location.hash;
      let decodedStr = '';
      
      if (currentHash && currentHash.length > 1) {
        setHash(currentHash);
        try {
          const b64Str = decodeURIComponent(currentHash.slice(1));
          try {
            // Try standard base64 decode
            decodedStr = atob(b64Str);
          } catch(e) {
            // If it fails, maybe it was unescaped utf8?
            decodedStr = decodeURIComponent(escape(atob(b64Str)));
          }
        } catch(e) {}
      } else {
        decodedStr = sessionStorage.getItem('deedpoll_data') || '';
        // Note: we leave hash as '' which is fine for the "Edit Details" link
      }
      
      if (!decodedStr) {
        router.push('/change-name-in-uk-by-deedpoll');
        return;
      }

      try {
        const paidOrder = sessionStorage.getItem(PAID_STORAGE_KEY);
        if (paidOrder) {
          setOrderId(paidOrder);
          setIsPaid(true);
        }
      } catch {}

      try {
        const decoded = JSON.parse(decodedStr) as DeedPollSubmission;
        setSubmissionData(decoded);
      } catch (e) {
        console.error("Failed to parse submission data", e);
      }
    }
  }, [router]);

  useEffect(() => {
    if (submissionData) {
      try {
        const result = generateDeedPoll(submissionData, isPaid);
        setPdfDataUri(result.pdfDataUri);
        setHtmlPreview(result.htmlPreview);
        setPdfTooLong(result.pdfTooLong);
        setTitle(result.title);
        document.title = result.title;
      } catch (e) {
        console.error("Failed to generate PDF", e);
      }
    }
  }, [submissionData, isPaid]);

  const handlePaymentSuccess = (payment: PaymentState) => {
    try {
      sessionStorage.setItem(PAID_STORAGE_KEY, payment.orderID);
    } catch {}
    setOrderId(payment.orderID);
    setIsPaid(true);
  };

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
            You&apos;ll need to use the text version below and copy-paste it into a document for yourself. (<Link href="/faq#pdf-too-long" className="underline">Why is this happening?</Link>)
          </p>
        </div>
      )}

      {isPaid ? (
        <div className="text-center mb-12 space-y-6">
          <p className="text-2xl font-bold text-[#00703c]">Payment received. Your deed poll is ready to print and use.</p>
          {orderId && (
            <p className="text-sm text-gray-600">
              PayPal order reference: <span className="font-mono">{orderId}</span>. Keep this in case you need to contact us.
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-4">
            <a href={pdfDataUri} download="deed-poll.pdf" className="bg-[#00703c] hover:bg-[#005a30] text-white font-bold py-4 px-8 transition-colors text-xl">
              Download PDF
            </a>
            <a href={pdfDataUri} target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-[#1d70b8] text-[#1d70b8] hover:bg-gray-50 font-bold py-4 px-8 transition-colors text-xl">
              Open PDF
            </a>
            <Link href="/checklist" className="bg-[#1d70b8] hover:bg-[#003078] text-white font-bold py-4 px-8 transition-colors text-xl">
              What to do next →
            </Link>
          </div>
          <p className="text-sm text-gray-600">
            You can edit your details and download again at no extra cost until you close this browser tab.
          </p>
        </div>
      ) : pdfTooLong ? (
        <div className="text-center mb-12">
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Because your details don&apos;t fit on one page, we can&apos;t sell you a PDF for this deed poll. You can{" "}
            <Link href={`/change-name-in-uk-by-deedpoll${hash}`} className="text-[#1d70b8] underline underline-offset-2">shorten your details</Link>{" "}
            or use the free text version below.
          </p>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto mb-12 border-4 border-[#1d70b8] bg-white p-6 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-wider text-[#1d70b8] mb-2">Free preview</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Download your finished deed poll for {PRICE_LABEL}</h2>
          <p className="text-lg text-gray-800 mb-4">
            Check the preview below. Once you pay, the &quot;PREVIEW&quot; watermark is removed and you can download and print
            as many copies as you need.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-800 mb-6">
            <li>One-off payment of {PRICE_LABEL}. No subscription.</li>
            <li>Instant PDF download, formatted for HM Passport Office, DVLA and banks.</li>
            <li>Corrections and re-downloads included until you close this tab.</li>
          </ul>
          <label className="flex items-start gap-3 mb-6 text-gray-800 cursor-pointer">
            <input
              type="checkbox"
              checked={consented}
              onChange={(e) => setConsented(e.target.checked)}
              className="mt-1 w-5 h-5 flex-shrink-0"
            />
            <span>
              I have checked my details. I want my deed poll supplied immediately and understand that I lose my 14-day
              right to cancel once the download is available. See our{" "}
              <Link href="/terms-and-conditions" className="text-[#1d70b8] underline underline-offset-2">terms</Link>.
            </span>
          </label>
          {!consented && (
            <p className="text-sm text-gray-600 mb-3">Tick the box above to continue to payment.</p>
          )}
          <PaymentButton
            amount={PRICE_PENCE}
            description="UK Deed Poll PDF download"
            disabled={!consented}
            onSuccess={handlePaymentSuccess}
          />
        </div>
      )}

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

        {/* Share Widget */}
        <ShareWidget
          title="I just created my official UK Deed Poll in 2 minutes!"
          description="Legally valid UK deed poll generator accepted by HM Passport Office, DVLA, and banks."
        />

        <div className="bg-gray-100 p-8 border-l-[8px] border-[#1d70b8] flex flex-col md:flex-row items-center gap-6 justify-between mt-8">
          <div>
            <h3 className="font-bold text-2xl mb-2">Made a mistake?</h3>
            <p className="text-lg text-gray-700">You can easily go back and correct your details. Your information is saved.</p>
          </div>
          <Link href={`/change-name-in-uk-by-deedpoll${hash}`} className="whitespace-nowrap bg-white border-2 border-[#1d70b8] text-[#1d70b8] font-bold py-3 px-6 hover:bg-gray-50 text-lg shadow-[0_4px_0_0_#003078] active:shadow-none active:translate-y-1 transition-all">
            Edit Details
          </Link>
        </div>
      </div>

      {(isPaid || pdfTooLong) && (
      <>
      <hr className="my-16 border-gray-300 border-t-2" />

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Text Version</h2>
        <p className="text-lg mb-8 text-gray-700">
          You can use the text below if you want to write out your own deed poll. For example, you can copy it into your favourite word processor for editing and formatting, or you can write it out by hand for a personal touch.
        </p>
        <article className="bg-white border-[8px] border-gray-200 p-8 sm:p-12 font-serif text-justify shadow-inner" dangerouslySetInnerHTML={{ __html: htmlPreview }} />
      </div>
      </>
      )}
    </div>
  );
}
