import Link from 'next/link';
import GuideArticle, { Callout, GuideSection, GuideTable, guideMetadata } from '@/components/GuideArticle';

const slug = 'how-to-fill-in-d1-form-change-name';
const description =
  'How to fill in the DVLA D1 form to change your name: what to tick, where your new name goes, what to enclose and where to post it. Includes a worked example. Free to do.';

export const metadata = guideMetadata(slug, 'How to Fill In the D1 Form to Change Your Name (Worked Example)', description);

const link = 'text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]';

const faqs = [
  {
    q: 'Do I pay to change my name on my driving licence?',
    a: 'No. DVLA does not charge for a change of name. You only pay if you also want a new photo on your photocard (£17 at the time of writing) or if you are replacing a lost, stolen or destroyed licence.',
  },
  {
    q: 'Can I change my name on my licence online?',
    a: 'GOV.UK currently describes a postal application for a name change: you send your D1, your current licence and your original evidence to DVLA. Check GOV.UK before you start in case this has changed.',
  },
  {
    q: 'Which evidence will DVLA accept for the new name?',
    a: 'An original marriage or civil partnership certificate, a final order or decree absolute where relevant, or a signed deed poll. Photocopies and laminated certificates are not accepted.',
  },
  {
    q: 'Do I need to send my old licence?',
    a: 'Yes. Send your photocard (and paper counterpart if you still have one). If you hold only an old paper licence, you also need to enclose a recent passport-style photograph.',
  },
  {
    q: 'Can I keep driving while DVLA processes the change?',
    a: 'Yes. GOV.UK confirms you can keep driving while you wait for the new licence, as long as you are otherwise entitled to drive.',
  },
  {
    q: 'Do I use D1 or D2?',
    a: 'Use D1 if you hold a car or motorcycle licence. Use D2 if you hold a lorry or bus entitlement. They go to different addresses in Swansea.',
  },
];

export default function Page() {
  return (
    <GuideArticle
      slug={slug}
      breadcrumb="Fill In the D1 Form"
      h1="How to Fill In the D1 Form to Change Your Name"
      description={description}
      readMinutes={6}
      quickAnswer={
        <p>
          Tick the box for a <strong>change of name</strong>, write your <strong>new name</strong> in your personal details, say your name has changed since your last licence, enclose your <strong>current licence</strong> and <strong>original evidence</strong> (marriage certificate, final order or deed poll), sign, and post it to DVLA in Swansea. <strong>There is no fee</strong> for the name change itself.
        </p>
      }
      toc={[
        ['before', 'Before you start'],
        ['walkthrough', 'The D1 form, section by section'],
        ['example', 'Worked example'],
        ['enclose', 'What to enclose and where to post it'],
        ['mistakes', 'Mistakes that delay your licence'],
        ['after', 'After you send it'],
      ]}
      faqs={faqs}
      related={[
        { href: '/change-name-on-driving-licence-dvla-uk', title: 'Change Name on Driving Licence', note: 'The full DVLA guide.' },
        { href: '/name-change-letters-generator', title: 'Name Change Letters Generator', note: 'Letters for banks, HMRC and more.' },
        { href: '/how-long-does-it-take-to-change-your-name-uk', title: 'How Long a Name Change Takes', note: 'Realistic timescales.' },
        { href: '/revert-to-maiden-name-uk', title: 'Revert to Your Maiden Name', note: 'Evidence after divorce.' },
      ]}
      formHeading="Need your evidence? Create your deed poll"
      formIntro={<>If you are using a deed poll as your proof of name, create it here, print it and sign it in front of two witnesses before you fill in your D1.</>}
    >
      <GuideSection id="before" title="Before you start">
        <p>
          A little preparation saves a lot of post. Gather these first:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>The right form.</strong> D1 is for car and motorcycle licences. D2 is for lorry and bus licences. Both are available from most Post Offices and can be printed from GOV.UK.</li>
          <li><strong>Your current licence.</strong> DVLA needs it to issue the new one.</li>
          <li><strong>Original evidence of the name change.</strong> That means the actual marriage or civil partnership certificate, the final order or decree absolute, or your signed deed poll. Photocopies and laminated certificates are refused, and certificates must be signed and dated.</li>
          <li><strong>A black pen.</strong> Forms of this kind ask for black ink and capital letters, so follow the instructions printed on the form itself.</li>
        </ul>
        <Callout tone="info">
          <strong>Think about the V5C too.</strong> If you own a vehicle, you must also update the name on your log book (V5C). It is a separate notification, so do it at the same time.
        </Callout>
      </GuideSection>

      <GuideSection id="walkthrough" title="The D1 form, section by section">
        <p>
          DVLA reorders and updates its forms from time to time, so use the headings below as a guide and follow the section numbers printed on your own copy. For a name change only a handful of sections matter.
        </p>
        <GuideTable
          head={['Part of the form', 'What to do for a name change']}
          rows={[
            ['"What are you applying for?"', 'Tick the option for changing your name on your licence. If your address has also changed, tick that option too so that one application covers both.'],
            ['Your personal details', 'Enter your new name exactly as it appears on your evidence, in capital letters. Add your date of birth and current address.'],
            ['Whether your name or address has changed since your last licence', 'Answer yes. If the form gives you space for your previous details, enter the name shown on your current licence.'],
            ['Photograph', 'If you only hold a paper licence, enclose a recent passport-style photo. Photocard holders do not need to change their photo for a name change.'],
            ['Evidence and identity', 'List and enclose the original documents that prove the new name. Follow the form’s instructions if it asks for further identity details.'],
            ['Declaration and signature', 'Read the declaration, then sign and date it in your usual signature, using your new name.'],
          ]}
        />
        <Callout tone="warn">
          <strong>Do not guess.</strong> If a box confuses you, read DVLA’s own notes that accompany the form, or ring DVLA before posting. A wrongly completed D1 is one of the most common reasons for a delay.
        </Callout>
      </GuideSection>

      <GuideSection id="example" title="Worked example">
        <p>
          Here is how the key entries look for a made-up applicant, Sarah Ann Jones, who married and became Sarah Ann Patel.
        </p>
        <GuideTable
          head={['Item', 'What Sarah enters']}
          rows={[
            ['Applying for', 'Change of name ticked'],
            ['Name on the form', 'SARAH ANN PATEL'],
            ['Name changed since last licence?', 'Yes (the current licence shows JONES)'],
            ['Evidence enclosed', 'Original marriage certificate'],
            ['Also enclosed', 'Current photocard licence'],
            ['Posted to', 'DVLA, Swansea, SA99 1BN (car licence)'],
          ]}
        />
        <p>
          If Sarah had instead changed her name by deed poll, she would enclose the signed original deed poll rather than a marriage certificate. See our guide to <Link href="/documents-needed-for-name-change-uk" className={link}>documents needed for a name change</Link> for the full list.
        </p>
      </GuideSection>

      <GuideSection id="enclose" title="What to enclose and where to post it">
        <ul className="list-disc pl-6 space-y-2">
          <li>The completed, signed D1 (or D2).</li>
          <li>Your current driving licence.</li>
          <li>The original evidence of your new name.</li>
          <li>A passport-style photo only if you hold a paper licence, or if you are choosing to update your photocard picture, which carries a fee.</li>
        </ul>
        <GuideTable
          head={['Licence type', 'Form', 'Address']}
          rows={[
            ['Car or motorcycle', 'D1', 'DVLA, Swansea, SA99 1BN'],
            ['Lorry or bus', 'D2', 'DVLA, Swansea, SA99 1BR'],
            ['Northern Ireland', 'Different process', <>Handled by the DVA. See our <Link key="ni" href="/deed-poll-scotland-northern-ireland" className={link}>Northern Ireland guide</Link></>],
          ]}
        />
        <p>
          You are posting valuable originals, so use a tracked service and include a prepaid return envelope. DVLA returns your documents separately, usually before the new licence arrives.
        </p>
      </GuideSection>

      <GuideSection id="mistakes" title="Mistakes that delay your licence">
        <ul className="list-disc pl-6 space-y-2">
          <li>Sending a photocopy, or a laminated certificate, instead of the original.</li>
          <li>Using the wrong form (D1 where D2 is needed, or the reverse).</li>
          <li>Writing a name on the form that does not match the evidence exactly, including middle names.</li>
          <li>Forgetting to sign, or leaving the name-change question unanswered.</li>
          <li>Posting two applications because you are changing both name and address. One form covers both.</li>
          <li>Posting without tracking, then having no proof of delivery.</li>
        </ul>
      </GuideSection>

      <GuideSection id="after" title="After you send it">
        <p>
          Allow around three weeks, and longer in busy periods. You can carry on driving on your existing licence while you wait. Once the new licence arrives, update the name on your <Link href="/how-to-change-name-on-passport-uk" className={link}>passport</Link>, bank and insurance. Insurers in particular should always be told, because a licence that does not match your policy can cause problems with a claim.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
