import Link from 'next/link';
import GuideArticle, { Callout, GuideSection, GuideTable, guideMetadata } from '@/components/GuideArticle';

const slug = 'deed-poll-apostille-uk';
const description =
  'Need your UK deed poll accepted abroad? See who must certify it, the current FCDO apostille fees (£35 e-Apostille, £45 paper), realistic timings and what to do for non-Hague countries.';

export const metadata = guideMetadata(slug, 'Deed Poll Apostille UK: Fees, Steps & Timings (2026)', description);

const link = 'text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]';

const faqs = [
  { q: 'Can a UK deed poll be apostilled?', a: 'Yes. The Foreign, Commonwealth & Development Office (FCDO) Legalisation Office will add an apostille, but only after a UK solicitor or notary has certified the document. The FCDO checks the professional’s signature, not the deed poll itself.' },
  { q: 'How much does an apostille cost?', a: 'At the time of writing the FCDO charges £35 for an e-Apostille and £45 for a standard paper apostille, per document, plus return postage. Your solicitor or notary will charge separately for certifying the deed poll, and notary fees vary widely. Check GOV.UK before you budget, as fees change.' },
  { q: 'How long does it take?', a: 'An e-Apostille usually takes up to two working days. A standard paper apostille can take up to 25 working days, plus postage, and checks on the signature can add time. Allow extra for getting the document certified first.' },
  { q: 'What is an e-Apostille and can I use one?', a: 'It is a digital apostille attached to a PDF that your notary or solicitor has signed electronically. It is quicker and cheaper, but the foreign authority must be willing to accept an electronic document, so ask them before you apply.' },
  { q: 'Does it have to be an enrolled deed poll?', a: 'No. An unenrolled deed poll that has been signed, witnessed and certified by a UK solicitor or notary can be legalised. Some overseas bodies insist on an enrolled copy, so confirm with whoever will receive it.' },
  { q: 'Does an apostille translate the document?', a: 'No. If the receiving country wants an English document translated, you normally get the translation done after the apostille, using a translator they will accept.' },
  { q: 'Can I get a deed poll if I live abroad permanently?', a: 'Not usually. GOV.UK says permanent residents overseas cannot change their name by deed poll, so an apostille only helps if the deed poll was validly made in the UK.' },
];

export default function Page() {
  return (
    <GuideArticle
      slug={slug}
      breadcrumb="Deed Poll Apostille"
      h1="Deed Poll Apostille UK: Getting Your Name Change Accepted Abroad"
      description={description}
      readMinutes={7}
      quickAnswer={
        <p>
          A foreign authority will not take a UK deed poll at face value. To prove it is genuine, have it <strong>certified by a UK solicitor or notary</strong>, then apply to the <strong>FCDO Legalisation Office</strong> for an <strong>apostille</strong>. Expect to pay <strong>£35 (e-Apostille) or £45 (paper)</strong> to the FCDO, plus your notary’s fee. Countries outside the Hague Convention need extra embassy steps.
        </p>
      }
      toc={[
        ['what', 'What an apostille does (and doesn’t) do'],
        ['when', 'When you will need one'],
        ['steps', 'Step-by-step process'],
        ['costs', 'Costs and timings'],
        ['paper-vs-digital', 'Paper or e-Apostille?'],
        ['hague', 'Hague and non-Hague countries'],
        ['mistakes', 'Mistakes that cause rejections'],
      ]}
      faqs={faqs}
      related={[
        { href: '/name-change/enrolled-vs-unenrolled-deed-poll-uk', title: 'Enrolled vs Unenrolled Deed Poll', note: 'Which type the overseas body wants.' },
        { href: '/name-change-solicitor-uk', title: 'Name Change Solicitor', note: 'Finding someone to certify.' },
        { href: '/deed-poll-online-uk', title: 'Deed Poll Online', note: 'Create the document first.' },
      ]}
      formHeading="Get the deed poll right before you certify it"
      formIntro={<>An apostille only confirms a signature is genuine. It will not fix a spelling mistake, so check every name carefully before you sign.</>}
    >
      <GuideSection id="what" title="What an apostille does (and doesn’t) do">
        <p>
          An apostille is a certificate fixed to your document by the UK government. It tells an overseas official that the signature, seal or stamp on the document is real. That is all it does. It does not approve your new name, and it does not stop a foreign body asking for more evidence.
        </p>
        <p>
          For a deed poll, the signature being verified belongs to the solicitor or notary who certified it, not to you. That is why you cannot simply post your own signed copy to the FCDO.
        </p>
      </GuideSection>

      <GuideSection id="when" title="When you will need one">
        <ul className="list-disc pl-6 space-y-2">
          <li>Changing your name on a foreign passport, residence card or visa.</li>
          <li>Getting married, or registering a marriage or birth, in another country.</li>
          <li>Updating property, bank or company records held overseas.</li>
          <li>Having a UK degree or professional qualification recognised in your new name.</li>
        </ul>
        <p>
          Always ask the overseas office exactly what they require. Some want an original, some accept a certified copy, and some want the document translated.
        </p>
      </GuideSection>

      <GuideSection id="steps" title="Step-by-step process">
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Check requirements.</strong> Ask the receiving body whether they need an apostille, full legalisation, an original or a copy, and a paper or electronic version.</li>
          <li><strong>Sign the deed poll</strong> in front of an independent witness, ideally using your solicitor or notary as that witness.</li>
          <li><strong>Get it certified.</strong> A UK solicitor or notary with a current practising certificate signs the certification. Notaries in England, Wales and Northern Ireland also add their seal.</li>
          <li><strong>Apply to the FCDO</strong> online. Choose paper (post the original) or e-Apostille (upload the electronically signed PDF).</li>
          <li><strong>Receive your apostilled document</strong> and keep it flat. Do not laminate it or remove staples.</li>
          <li><strong>Translate if needed,</strong> using a translator the foreign authority accepts.</li>
        </ol>
      </GuideSection>

      <GuideSection id="costs" title="Costs and timings">
        <GuideTable
          head={['Item', 'Typical figure', 'Notes']}
          rows={[
            ['FCDO e-Apostille', '£35 per document', 'Up to 2 working days'],
            ['FCDO paper apostille', '£45 per document, plus return postage', 'Up to 25 working days'],
            ['Solicitor or notary certification', 'Varies; notaries often charge well over £100', 'Ask for a fixed quote'],
            ['Translation', 'Varies by language and length', 'Only if requested'],
          ]}
        />
        <Callout tone="warn">Fees are set by the FCDO and by private notaries, and the FCDO does not refund a fee if a document cannot be legalised. Check the current GOV.UK figures before paying.</Callout>
      </GuideSection>

      <GuideSection id="paper-vs-digital" title="Paper or e-Apostille?">
        <p>
          The e-Apostille is faster and cheaper, and works well for banks and universities that accept PDFs. A paper apostille is safer when a government office or embassy insists on a physical stamp. Ask first, because switching later means paying again.
        </p>
      </GuideSection>

      <GuideSection id="hague" title="Hague and non-Hague countries">
        <p>
          If the destination has joined the Hague Apostille Convention, one apostille is enough. If it has not, the FCDO adds a legalisation certificate and the foreign embassy in London usually adds its own stamp, which costs extra and takes longer. See the official <a className={link} href="https://www.gov.uk/get-document-legalised" rel="noopener noreferrer">GOV.UK legalisation guide</a> for the list of countries.
        </p>
      </GuideSection>

      <GuideSection id="mistakes" title="Mistakes that cause rejections">
        <ul className="list-disc pl-6 space-y-2">
          <li>Sending an uncertified deed poll. The FCDO cannot verify your own signature.</li>
          <li>Using a solicitor or notary whose signature the FCDO cannot check.</li>
          <li>Laminating or fixing the pages with plastic or card.</li>
          <li>Choosing an e-Apostille when the other side wanted paper.</li>
        </ul>
        <p>
          Still deciding on the type of deed poll? Our guide to <Link href="/name-change/enrolled-vs-unenrolled-deed-poll-uk" className={link}>enrolled and unenrolled deed polls</Link> explains the difference.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
