import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Create Your Deed Poll | Deed Poll UK",
  description: "Fill out the form to create your legally valid UK deed poll online.",
  alternates: {
    canonical: "/change-name-in-uk-by-deedpoll",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
