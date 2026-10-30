import { Metadata } from 'next';

const PAGE_TITLE = "Name Change Letter Generator: Free Cover Letters for Your Deed Poll";
const PAGE_DESCRIPTION =
  "Create a free name change cover letter in seconds. Tailored letters for the DVLA, HM Passport Office, banks, HMRC, the NHS and employers. Copy, print and send with your deed poll.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/name-change-letters-generator",
    languages: {
      "en-GB": "/name-change-letters-generator",
      "x-default": "/name-change-letters-generator",
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "https://deedpolluk.uk/name-change-letters-generator",
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
