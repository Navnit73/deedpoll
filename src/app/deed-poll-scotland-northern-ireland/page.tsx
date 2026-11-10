import Link from 'next/link';
import GuideArticle, { Callout, GuideSection, GuideTable, guideMetadata } from '@/components/GuideArticle';

const slug = 'deed-poll-scotland-northern-ireland';
const description =
  'How changing your name works in Scotland and Northern Ireland: NRS and GRONI recording, whether you need a deed poll, divorce evidence, driving licences and passports.';

export const metadata = guideMetadata(slug, 'Change Name in Scotland & Northern Ireland: Deed Poll Rules', description);

const link = 'text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]';

const faqs = [
  {
    q: 'Do I need a deed poll in Scotland?',
    a: 'No. You can change your first name or surname at any time provided it is not for a fraudulent purpose, and you do not need a deed poll to do so. A deed poll is an alternative if you cannot use the National Records of Scotland route.',
  },
  {
    q: 'What is Form 24?',
    a: 'It is the National Records of Scotland form used to record a change of name against a birth or adoption entry. You must be 16 or over and born or adopted in Scotland, and it cannot be completed online.',
  },
  {
    q: 'Is recording the change compulsory?',
    a: 'No. Recording with NRS is optional. Because it appears on a public register, think carefully, and take advice if privacy or safety is a concern.',
  },
  {
    q: 'How many times can I change my name in Scotland?',
    a: 'For recording purposes, a person over 16 can record one change of first name and up to three surname changes, with at least five years between surname changes. You can change your name more often, but NRS will not record it.',
  },
  {
    q: 'Is a deed poll valid in Northern Ireland?',
    a: 'Yes. Unenrolled deed polls are used there, and GOV.UK describes the High Court enrolment route as covering England, Wales and Northern Ireland. You can also record a change with the General Register Office for Northern Ireland (GRONI).',
  },
  {
    q: 'I was born in Scotland but live in England. Which rules apply?',
    a: 'Scottish-born people can still use the NRS route from elsewhere, and GOV.UK points to separate rules for those born in Scotland. A deed poll remains a practical alternative.',
  },
];

export default function Page() {
  return (
    <GuideArticle
      slug={slug}
      breadcrumb="Scotland & Northern Ireland"
      h1="Changing Your Name in Scotland and Northern Ireland"
      description={description}
      readMinutes={7}
      quickAnswer={
        <p>
          <strong>Scotland:</strong> you can change your name freely and <strong>do not need a deed poll</strong>. If you were born or adopted there, you can also record it with <strong>National Records of Scotland</strong> (Form 24). <strong>Northern Ireland:</strong> deed polls are used, and you can record a change with <strong>GRONI</strong>. Driving licences in Northern Ireland go through a different process from DVLA.
        </p>
      }
      toc={[
        ['overview', 'The short version'],
        ['scotland', 'Scotland'],
        ['scotland-divorce', 'Scotland: marriage and divorce'],
        ['ni', 'Northern Ireland'],
        ['documents', 'Passports and driving licences'],
        ['choose', 'Which route should you choose?'],
      ]}
      faqs={faqs}
      related={[
        { href: '/change-name-without-deed-poll-uk', title: 'Change Name Without a Deed Poll', note: 'When a certificate is enough.' },
        { href: '/how-to-change-name-by-deed-poll-uk', title: 'Change Name by Deed Poll', note: 'The standard route.' },
        { href: '/revert-to-maiden-name-uk', title: 'Revert to Your Maiden Name', note: 'After divorce or separation.' },
      ]}
      formHeading="Create a deed poll that works anywhere in the UK"
      formIntro={<>A deed poll is accepted by most organisations in Scotland and Northern Ireland as well as in England and Wales. Preview yours free.</>}
    >
      <GuideSection id="overview" title="The short version">
        <p>
          The rules differ across the UK, and most guides are written for England and Wales. Here is how the two nations compare.
        </p>
        <GuideTable
          head={['', 'England & Wales', 'Scotland', 'Northern Ireland']}
          rows={[
            ['Legal position', 'Free to change; evidence needed', 'Free to change; evidence needed', 'Free to change; evidence needed'],
            ['Typical proof', 'Deed poll or certificate', 'Certificate, NRS record or deed poll', 'Deed poll or GRONI record'],
            ['Birth register change', 'Very limited', 'Possible via NRS', 'Possible via GRONI'],
            ['Driving licence body', 'DVLA', 'DVLA', 'DVA'],
          ]}
        />
      </GuideSection>

      <GuideSection id="scotland" title="Scotland">
        <p>
          In Scotland you can change your first name, middle name or surname at any time, as long as you do not do it to commit fraud. You can start using the new name informally straight away, but for most official purposes you will need evidence.
        </p>
        <h3 className="text-xl font-bold text-gray-900 pt-2">Recording with National Records of Scotland</h3>
        <p>
          If your birth or adoption was registered in Scotland, you can ask NRS to record the change against that entry. You must be 16 or over, you apply on <strong>Form 24</strong>, and you cannot apply online. You can apply from anywhere in the world.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The record is <strong>optional</strong> and appears on a public register, so consider privacy first.</li>
          <li>For recording purposes, you can change your first name once and your surname up to three times, with at least five years between surname changes.</li>
          <li>Beyond those limits you can still change your name, but NRS will not record it.</li>
          <li>Check the NRS website for the current fee, because we do not quote figures that may change.</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-900 pt-2">If you were not born or adopted in Scotland</h3>
        <p>
          Then NRS cannot record the change. You can instead change your name in your country of birth, make a <Link href="/how-to-change-name-by-deed-poll-uk" className={link}>deed poll</Link>, or use a statutory declaration witnessed by an authorised person, such as a notary public, justice of the peace or local councillor.
        </p>
        <Callout tone="info">
          <strong>Deed polls and Scots law.</strong> Some commentators say deed polls &ldquo;do not exist&rdquo; in Scots law. That is true in the technical sense that Scotland has its own recording mechanism, but in practice organisations across the UK accept a deed poll as evidence of a name change. It is a sensible fallback.
        </Callout>
      </GuideSection>

      <GuideSection id="scotland-divorce" title="Scotland: marriage and divorce">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Marriage or civil partnership:</strong> you can take any name, including your spouse&rsquo;s. The certificate is usually accepted as proof, and you do not need to record the change.</li>
          <li><strong>Divorce or dissolution:</strong> you can revert to your previous surname without recording the change. The extract decree is usually accepted as proof.</li>
          <li><strong>Married name on your birth certificate:</strong> if it was recorded there, you must use the NRS recording process to reverse it.</li>
        </ul>
        <p>
          If your relationship ended by an agreement rather than a court decree, ask the passport office what it will accept before you post originals. See our <Link href="/revert-to-maiden-name-uk" className={link}>maiden name guide</Link> for the evidence that GOV.UK lists.
        </p>
      </GuideSection>

      <GuideSection id="ni" title="Northern Ireland">
        <p>
          Northern Ireland follows a similar principle: you can use any name you choose without fraud, but you need to prove it. You have two main options.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Deed poll:</strong> an unenrolled deed poll works in the same way as elsewhere in the UK. GOV.UK says the High Court enrolment route also covers Northern Ireland.</li>
          <li><strong>GRONI recording:</strong> if you were born or legally adopted in Northern Ireland, you can record a change of name with the General Register Office for Northern Ireland, using the adult form (GRO231) or the under-18 form (GRO230). Limits apply to the number of changes that can be recorded. Check nidirect for the current fee.</li>
        </ul>
        <p>
          A deed poll alone does not alter your birth certificate in any part of the UK.
        </p>
      </GuideSection>

      <GuideSection id="documents" title="Passports and driving licences">
        <p>
          <strong>Passports</strong> are issued by HM Passport Office across the whole UK, so the same fee and evidence apply. The adult fee is currently £102 online or £115.50 on paper. See our <Link href="/how-to-change-name-on-passport-uk" className={link}>passport guide</Link>.
        </p>
        <p>
          <strong>Driving licences</strong> differ. In Scotland, DVLA handles the change, so the <Link href="/how-to-fill-in-d1-form-change-name" className={link}>D1 guide</Link> applies. In Northern Ireland, licences are issued by the DVA rather than DVLA, and GOV.UK notes that the process is different, so use nidirect for the correct form.
        </p>
      </GuideSection>

      <GuideSection id="choose" title="Which route should you choose?">
        <GuideTable
          head={['You are…', 'Best route']}
          rows={[
            ['Born in Scotland and want it on the public record', 'NRS Form 24, plus certificates for everyday use'],
            ['Living in Scotland but born elsewhere', 'Deed poll or statutory declaration'],
            ['Born in Northern Ireland and want a register entry', 'GRONI recording'],
            ['Living in Northern Ireland and want a quick document', 'Unenrolled deed poll'],
            ['Moving between nations', 'Deed poll, which is accepted across the UK'],
          ]}
        />
      </GuideSection>
    </GuideArticle>
  );
}
