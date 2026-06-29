import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#f3f2f1] text-[#0b0c0c] border-t border-[#b1b4b6] mt-auto w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-bold mb-4">Get Started</h2>
            <ul className="space-y-3">
              <li><Link href="/before-you-start" className="hover:underline underline-offset-2">Before you start</Link></li>
              <li><Link href="/change-name-in-uk-by-deedpoll" className="hover:underline underline-offset-2">Create your Deed Poll</Link></li>
              <li><Link href="/checklist" className="hover:underline underline-offset-2">Name Change Checklist</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Help & Support</h2>
            <ul className="space-y-3">
              <li><Link href="/faq" className="hover:underline underline-offset-2">Frequently Asked Questions</Link></li>
              <li><Link href="/my-deed-poll-was-rejected" className="hover:underline underline-offset-2">Rejected Deed Polls Guide</Link></li>
              <li><Link href="/contact-us" className="hover:underline underline-offset-2">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">About</h2>
            <ul className="space-y-3">
              <li><Link href="/faq#security" className="hover:underline underline-offset-2">Privacy & Security</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:underline underline-offset-2">Terms and Conditions</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#b1b4b6] pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex gap-4 mb-4 md:mb-0">
            {/* Government style logo / crown outline could go here */}
            <svg className="w-10 h-10 fill-current text-[#b1b4b6]" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
          <p>
            © {new Date().getFullYear()} Deed Poll UK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
