import Link from 'next/link';

export const metadata = {
  title: "Contact Us | Deed Poll UK",
  description: "Get in touch with Deed Poll UK for support or feedback.",
  alternates: {
    canonical: "/contact-us",
    languages: {
      "en-GB": "/contact-us",
      "x-default": "/contact-us",
    },
  },
};

export default function ContactUs() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Contact Us</h1>

      <div className="prose prose-lg text-gray-800 space-y-6">
        <p>
          If you have questions about changing your name, we highly recommend checking out our{' '}
          <Link href="/faq" className="text-[#1d70b8] underline underline-offset-2">Frequently Asked Questions</Link> first, as it covers the vast majority of topics related to using a deed poll in the UK.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Email Us</h2>
        <p>
          For general enquiries, feedback, or support, you can reach out via email:
        </p>
        <p>
          <a href="mailto:navnitrai5389@gmail.com" className="text-[#1d70b8] font-medium underline underline-offset-2">navnit@deedpolluk.uk</a>
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Technical Issues & Open Source</h2>
        <p>
          Deed Poll UK is an open-source project. If you are experiencing technical difficulties, would like to report a bug, or have a suggestion for improving the site, you can raise an issue or submit a pull request on our GitHub repository.
        </p>
        <p>
          <a href="https://github.com/Navnit73/deedpoll" target="_blank" rel="noopener noreferrer" className="text-[#1d70b8] font-medium underline underline-offset-2">Report an issue on GitHub</a>
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Postal Address</h2>
        <p>
          As a free online service, we do not maintain a public office for physical correspondence. All communications should be directed to the email address provided above.
        </p>
      </div>
    </div>
  );
}
