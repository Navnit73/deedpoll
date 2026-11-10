"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { generateDeedPoll, DeedPollSubmission } from '@/lib/generateDeedPoll';
import ShareWidget from '@/components/ShareWidget';
import { PaymentButton } from '@/components/payment/PaymentButton';
import { PaymentState } from '@/types/payment';

const PRICE_PENCE = 799;
const PRICE_LABEL = '£7.99';
const PAID_STORAGE_KEY = 'deedpoll_paid_order';

type PaidOrder = { orderId: string; oldName: string };

// A payment covers one person's deed poll: the old name it was bought for. Witnesses, address,
// date and the new name can still be corrected for free, but a different person needs a new purchase.
const normaliseName = (name: string) => name.trim().replace(/\s+/g, ' ').toLowerCase();

function readPaidOrder(): PaidOrder | null {
  try {
    const stored = sessionStorage.getItem(PAID_STORAGE_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as PaidOrder;
    return parsed && parsed.orderId && typeof parsed.oldName === 'string' ? parsed : null;
  } catch {
    return null;
  }
}

function dataUriToBlobUrl(dataUri: string): string {
  const [header, base64] = dataUri.split(',');
  const mime = header.match(/data:([^;]+)/)?.[1] || 'application/pdf';
  const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
  return URL.createObjectURL(new Blob([bytes], { type: mime }));
}

export default function PreviewPage() {
  const router = useRouter();
  const [pdfDataUri, setPdfDataUri] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [htmlPreview, setHtmlPreview] = useState<string>('');
  const [pdfTooLong, setPdfTooLong] = useState(false);
  const [title, setTitle] = useState('Your Deed Poll');
  const [hash, setHash] = useState('');
  const [isPaid, setIsPaid] = useState(false);
  const [orderId, setOrderId] = useState('');
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
        const decoded = JSON.parse(decodedStr) as DeedPollSubmission;
        setSubmissionData(decoded);

        const paidOrder = readPaidOrder();
        if (paidOrder && paidOrder.oldName === normaliseName(decoded.oldName || '')) {
          setOrderId(paidOrder.orderId);
          setIsPaid(true);
        }
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

  // Chrome blocks opening data: URLs in a new tab, so serve the PDF from a blob URL instead.
  useEffect(() => {
    if (!pdfDataUri) return;
    const url = dataUriToBlobUrl(pdfDataUri);
    setPdfUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [pdfDataUri]);

  const handlePaymentSuccess = (payment: PaymentState) => {
    try {
      const paidOrder: PaidOrder = { orderId: payment.orderID, oldName: normaliseName(submissionData?.oldName || '') };
      sessionStorage.setItem(PAID_STORAGE_KEY, JSON.stringify(paidOrder));
    } catch {}
    setOrderId(payment.orderID);
    setIsPaid(true);
  };

  if (!pdfDataUri || !pdfUrl) {
    return <div className="max-w-6xl mx-auto px-4 py-32 text-center text-2xl font-bold text-gray-600 animate-pulse">Generating your legally valid deed poll...</div>;
  }

  const editHref = `/change-name-in-uk-by-deedpoll${hash}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 mb-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-[#1d70b8] text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
            {isPaid ? 'Paid' : 'Free preview'}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h1>
        </div>
        <Link href={editHref} className="text-[#1d70b8] underline underline-offset-2 font-medium hover:text-[#003078]">
          Edit details
        </Link>
      </div>

      {pdfTooLong && (
        <div className="bg-red-50 border-l-[8px] border-red-600 p-4 mb-5">
          <p className="text-lg font-bold text-red-700 mb-2">
            ⚠️ Warning: Your PDF deed poll turned out too long to fit onto the page.
          </p>
          <p className="text-red-700 font-medium">
            You&apos;ll need to use the text version below and copy-paste it into a document for yourself. (<Link href="/faq#pdf-too-long" className="underline">Why is this happening?</Link>)
          </p>
        </div>
      )}

      {/* Desktop: preview on the left, sticky purchase panel on the right. Mobile: panel first. */}
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] items-start">
        <section aria-label="Deed poll preview" className="order-2 lg:order-1 min-w-0">
          {/* On desktop the preview fills the screen height so the whole page fits without scrolling. */}
          <div className="border border-gray-300 shadow-md aspect-[1/1.414] lg:aspect-auto lg:h-[calc(100vh-11rem)] lg:min-h-[520px] w-full bg-gray-100">
            <iframe src={pdfUrl} className="w-full h-full" title="PDF Preview" />
          </div>
        </section>

        <aside className="order-1 lg:order-2 min-w-0 lg:sticky lg:top-24">
          {isPaid ? (
            <div className="border-2 border-[#00703c] bg-white p-4 sm:p-5 space-y-3">
              <p className="text-xl font-bold text-[#00703c]">Your deed poll is ready to print and use.</p>
              <div className="flex flex-col gap-2">
                <a href={pdfUrl} download="deed-poll.pdf" className="bg-[#00703c] hover:bg-[#005a30] text-white text-center font-bold py-3 px-6 transition-colors text-lg">
                  Download PDF
                </a>
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-[#1d70b8] text-[#1d70b8] hover:bg-gray-50 text-center font-bold py-2 px-6 transition-colors">
                  Open PDF
                </a>
                <Link href="/checklist" className="bg-[#1d70b8] hover:bg-[#003078] text-white text-center font-bold py-2 px-6 transition-colors">
                  What to do next →
                </Link>
              </div>
              {orderId && (
                <p className="text-sm text-gray-600">
                  PayPal order reference: <span className="font-mono">{orderId}</span>. Keep this in case you need to contact us.
                </p>
              )}
              <p className="text-sm text-gray-600">
                You can correct your details and download again at no extra cost until you close this browser tab.
              </p>
            </div>
          ) : pdfTooLong ? (
            <div className="border-2 border-gray-300 bg-white p-4 sm:p-5">
              <p className="text-gray-800">
                Because your details don&apos;t fit on one page, we can&apos;t sell you a PDF for this deed poll. You can{" "}
                <Link href={editHref} className="text-[#1d70b8] underline underline-offset-2">shorten your details</Link>{" "}
                or use the free text version below.
              </p>
            </div>
          ) : (
            <div className="border-2 border-[#1d70b8] bg-white p-4 sm:p-5">
              <div className="flex items-baseline justify-between gap-3 mb-3">
                <h2 className="text-lg font-bold">Download your deed poll</h2>
                <span className="text-3xl font-bold">{PRICE_LABEL}</span>
              </div>

              {submissionData && (
                <p className="bg-gray-50 border border-gray-200 px-3 py-2 mb-3 text-sm font-bold break-words">
                  {submissionData.oldName} <span className="text-gray-500" aria-label="to">→</span> {submissionData.newName}
                </p>
              )}

              <ul className="text-sm text-gray-800 mb-3 space-y-0.5">
                {['No watermark, print unlimited copies', 'Formatted for HM Passport Office, DVLA and banks', 'Pay by card or PayPal'].map((benefit) => (
                  <li key={benefit} className="flex gap-2">
                    <span className="text-[#00703c] font-bold" aria-hidden="true">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-start gap-3 mb-3 p-3 border-2 border-[#00703c] bg-[#e6f4ea]" role="note">
                <span className="text-2xl leading-none text-[#00703c]" aria-hidden="true">🛡️</span>
                <p className="text-sm text-gray-900">
                  <strong className="block text-base text-[#00703c]">100% Refund Guarantee</strong>
                  If your PDF is faulty or not as described, we&apos;ll fix it or refund you in full.
                </p>
              </div>

              <PaymentButton
                amount={PRICE_PENCE}
                description="UK Deed Poll PDF download"
                onSuccess={handlePaymentSuccess}
              />

              <p className="mt-3 text-sm text-gray-800 text-center">
                Support &amp; refunds:{" "}
                <a href="mailto:support@deedpolluk.uk" className="font-bold text-[#1d70b8] underline underline-offset-2">support@deedpolluk.uk</a>
              </p>

              <details className="mt-3 text-sm text-gray-700">
                <summary className="cursor-pointer font-bold text-[#00703c]">100% refund guarantee – policy details</summary>
                <p className="mt-2">
                  If your PDF is faulty or not as described, we&apos;ll fix or replace it, or refund you in full (Consumer
                  Rights Act 2015). No refunds for a change of mind once downloaded.{" "}
                  <Link href="/contact-us" className="text-[#1d70b8] underline underline-offset-2">Contact us</Link> with your
                  PayPal order reference. See section 3 of our{" "}
                  <Link href="/terms-and-conditions" className="text-[#1d70b8] underline underline-offset-2">terms</Link>.
                </p>
              </details>
            </div>
          )}
        </aside>
      </div>

      {isPaid && (
        <div className="max-w-4xl mx-auto mt-16">
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
        </div>
      )}

      {(isPaid || pdfTooLong) && (
      <>
      <hr className="my-16 border-gray-300 border-t-2 max-w-4xl mx-auto" />

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
