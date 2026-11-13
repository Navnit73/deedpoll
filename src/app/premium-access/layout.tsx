import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Premium Access — Create & Download Your Deed Poll | Deed Poll UK",
  description: "Create and download your legally valid UK deed poll online.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/premium-access",
    languages: {
      "en-GB": "/premium-access",
      "x-default": "/premium-access",
    },
  },
};

export default function PremiumAccessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

