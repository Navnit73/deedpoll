import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Preview Your Deed Poll | Deed Poll UK",
  description: "Preview your generated deed poll.",
  alternates: {
    canonical: "/preview",
  },
};

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
