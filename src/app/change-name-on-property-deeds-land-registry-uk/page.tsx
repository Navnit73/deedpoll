import Link from 'next/link';
import GuideArticle, { Callout, GuideSection, GuideTable, guideMetadata } from '@/components/GuideArticle';

const slug = 'change-name-on-property-deeds-land-registry-uk';
const description =
  'Changed your name? Update your home’s Land Registry record with form AP1. Free for a name change, what evidence is needed, where to post it and what happens with joint owners.';

export const metadata = guideMetadata(slug, 'Change Name on House Deeds UK: Land Registry Form AP1 (Free)', description);

const link = 'text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]';

const faqs = [
  { q: 'How do I change my name on the deeds of my house?', a: 'You do not alter the deeds. Instead, you ask HM Land Registry to update the register of title using form AP1, with evidence of your new name such as a marriage certificate or deed poll.' },
  { q: 'Is there a fee?', a: 'No. For a change of name, you enter £0 in the fee panel of form AP1.' },
  { q: 'Which form do I use?', a: 'Form AP1 for a change of name. An address-only change uses a different form (COG1), and a gender-related change has its own form (CNG), so choose the one that matches your situation.' },
  { q: 'Where do I send it?', a: 'By post to HM Land Registry, Citizen Centre, PO Box 7806, Bilston, WV1 9QR, as stated in the GOV.UK guidance at the time of writing. Check the current address on GOV.UK before sending.' },
  { q: 'Do I need a deed poll after marriage?', a: 'Not to take your spouse’s surname. Your marriage certificate is enough evidence. A deed poll is needed if you adopt a name that the marriage does not give you, such as a new combination of surnames.' },
  { q: 'What if my marriage certificate is not in English?', a: 'Include a verified translation by a qualified linguist or translation agency.' },
  { q: 'Will it be done straight away?', a: 'Not always. If a solicitor does not send the application, Land Registry may write to the registered owner and wait for a reply or for the notice period to pass, which can take a few weeks.' },
];

export default function Page() {
  return (
    <GuideArticle
      slug={slug}
      breadcrumb="Name on Property Deeds"
      h1="How to Change Your Name on Your House Deeds (Land Registry)"
      description={description}
      readMinutes={6}
      quickAnswer={
        <p>
          You update the <strong>Land Registry register of title</strong>, not the old deeds. Complete <strong>form AP1</strong>, write <strong>“Change of name”</strong> with a fee of <strong>£0</strong>, attach your <strong>marriage certificate, deed poll or other evidence</strong>, and post it to Land Registry. Then tell your mortgage lender separately.
        </p>
      }
      toc={[
        ['concept', 'Deeds vs the register'],
        ['forms', 'Which form to use'],
        ['steps', 'Completing form AP1'],
        ['evidence', 'Evidence accepted'],
        ['after', 'What happens next'],
        ['unregistered', 'If your property is unregistered'],
      ]}
      faqs={faqs}
      related={[
        { href: '/change-name-on-mortgage-after-marriage-uk', title: 'Change Name on Your Mortgage', note: 'The lender needs telling too.' },
        { href: '/how-to-change-name-after-marriage-uk', title: 'Change Name After Marriage', note: 'Everything else to update.' },
        { href: '/free-deed-poll-template-uk', title: 'Free Deed Poll Template', note: 'If marriage does not apply.' },
      ]}
      formHeading="Not married? Use a deed poll as your evidence"
      formIntro={<>Land Registry accepts a deed poll as proof of a change of name. Create yours here.</>}
    >
      <GuideSection id="concept" title="Deeds vs the register">
        <p>
          People often say “change the deeds”, but for most homes in England and Wales the legal record is the <strong>register of title</strong> held by HM Land Registry. The old paper deeds are not rewritten. You simply ask for the owner’s name on the register to be brought up to date.
        </p>
        <p>
          A search for “change of name deed” may also mean a deed poll. That is the document you make to prove your name change. You can then use it as evidence with Land Registry.
        </p>
      </GuideSection>

      <GuideSection id="forms" title="Which form to use">
        <GuideTable
          head={['Situation', 'Form']}
          rows={[
            ['Name changed (marriage, civil partnership, deed poll)', 'AP1'],
            ['Address only', 'COG1'],
            ['Gender-related change', 'CNG'],
          ]}
        />
      </GuideSection>

      <GuideSection id="steps" title="Completing form AP1">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Download AP1 from GOV.UK.</li>
          <li>Give your local authority and the <strong>title number</strong> (found on your title register).</li>
          <li>Tick the whole-of-title box.</li>
          <li>Write “Change of name” and a fee of £0.</li>
          <li>List the documents you enclose.</li>
          <li>Enter your new name, address and contact details, then sign and date.</li>
          <li>Post it with your evidence to the Land Registry Citizen Centre.</li>
        </ol>
        <Callout tone="tip">Send an official or certified copy, not an uncertified photocopy.</Callout>
      </GuideSection>

      <GuideSection id="evidence" title="Evidence accepted">
        <GuideTable
          head={['Reason', 'Evidence']}
          rows={[
            ['Marriage or civil partnership', 'Official copy of the certificate'],
            ['Chosen name', 'Deed poll'],
            ['Other change', 'Statement of truth or statutory declaration, depending on circumstances'],
            ['Foreign marriage', 'Certificate plus a verified English translation'],
          ]}
        />
      </GuideSection>

      <GuideSection id="after" title="What happens next">
        <p>
          Land Registry may write to the registered owner to check the change is genuine. Reply promptly. Your mortgage lender keeps its own records, so tell them separately: see{' '}
          <Link href="/change-name-on-mortgage-after-marriage-uk" className={link}>changing your name on a mortgage</Link>. Joint owners should each check their own entry on the register.
        </p>
      </GuideSection>

      <GuideSection id="unregistered" title="If your property is unregistered">
        <p>
          A small number of properties have never been registered. There is no register entry to alter, so store your marriage certificate or deed poll with the title deeds. It will connect your names when the property is eventually registered or sold.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
