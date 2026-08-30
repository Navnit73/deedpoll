'use client';

import { useState, useEffect } from 'react';

interface ShareWidgetProps {
  title?: string;
  description?: string;
  url?: string;
  className?: string;
  compact?: boolean;
}

export default function ShareWidget({
  title = "Free UK Deed Poll Generator — Legally Valid & Instant PDF",
  description = "Create a legally valid UK deed poll online in minutes for free. Accepted by HM Passport Office, DVLA, and banks.",
  url,
  className = "",
  compact = false,
}: ShareWidgetProps) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(url || 'https://deedpolluk.uk');

  useEffect(() => {
    if (!url && typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, [url]);

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDesc = encodeURIComponent(description);

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    reddit: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDesc}%0A%0A${encodedUrl}`,
  };

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch (err) {
      console.error('Failed to copy link', err);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url: currentUrl,
        });
      } catch (err) {
        // User cancelled or share failed
      }
    } else {
      handleCopy();
    }
  };

  if (compact) {
    return (
      <div className={`flex items-center gap-2 flex-wrap ${className}`}>
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Share:</span>
        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded bg-emerald-600 text-white hover:bg-emerald-700 transition-colors inline-flex items-center justify-center text-xs font-semibold"
          title="Share on WhatsApp"
        >
          WhatsApp
        </a>
        <a
          href={shareLinks.reddit}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded bg-[#ff4500] text-white hover:opacity-90 transition-opacity inline-flex items-center justify-center text-xs font-semibold"
          title="Share on Reddit"
        >
          Reddit
        </a>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded bg-gray-100 border border-gray-300 text-gray-800 hover:bg-gray-200 transition-colors text-xs font-semibold"
        >
          {copied ? '✓ Copied!' : 'Copy Link'}
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-blue-50/70 border-2 border-[#1d70b8]/30 rounded-xl p-5 sm:p-6 my-8 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-base sm:text-lg font-bold text-[#0b0c0c] flex items-center gap-2">
            <svg className="w-5 h-5 text-[#1d70b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Know someone changing their name?
          </h4>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Help friends, family, or partners save £100+ on solicitor fees with this 100% free official tool.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* WhatsApp */}
          <a
            href={shareLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold shadow-sm transition-transform active:scale-95"
            aria-label="Share via WhatsApp"
          >
            <span>WhatsApp</span>
          </a>

          {/* Reddit */}
          <a
            href={shareLinks.reddit}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#FF4500] hover:bg-[#E03D00] text-white text-xs sm:text-sm font-bold shadow-sm transition-transform active:scale-95"
            aria-label="Share on Reddit"
          >
            <span>Reddit</span>
          </a>

          {/* X / Twitter */}
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0f1419] hover:bg-black text-white text-xs sm:text-sm font-bold shadow-sm transition-transform active:scale-95"
            aria-label="Share on X"
          >
            <span>X (Twitter)</span>
          </a>

          {/* Copy Link Button */}
          <button
            onClick={handleCopy}
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-bold border transition-all active:scale-95 ${
              copied
                ? 'bg-[#00703c] text-white border-[#00703c]'
                : 'bg-white text-[#0b0c0c] border-gray-300 hover:bg-gray-50'
            }`}
            aria-label="Copy link to clipboard"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
