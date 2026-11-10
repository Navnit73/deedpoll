import Link from 'next/link';
import GuideArticle, { Callout, GuideSection, GuideTable, guideMetadata } from '@/components/GuideArticle';

const slug = 'change-name-on-mortgage-after-marriage-uk';
const description =
  'Updating your mortgage after marriage or a deed poll: what lenders ask for, whether it is compulsory, how it affects your credit file and why Land Registry is a separate job.';

export const metadata = guideMetadata(slug, 'Change Name on Mortgage After Marriage UK: What Lenders Need', description);

const link = 'text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]';

const faqs = [
  { q: 'Do I have to tell my mortgage lender I have changed my name?', a: 'It is not a legal requirement, but it is strongly advisable. If your lender’s records do not match your new ID and credit file, you may face delays when remortgaging, borrowing more or selling.' },
  { q: 'What proof will my lender want?', a: 'Usually your marriage or civil partnership certificate, or a deed poll if you chose your name, plus photo ID. Lloyds, for example, says it needs documents such as a marriage certificate or change of name deed, which you can post or take to a branch.' },
  { q: 'Will it change my interest rate or monthly payment?', a: 'No. A name change updates records only. Your balance, rate and term stay the same.' },
  { q: 'Is there a charge?', a: 'Many lenders do not charge, but a few may apply a small administration fee. Check your lender’s terms or ask when you call.' },
  { q: 'Does this update the Land Registry too?', a: 'No, they are separate. You update your lender, and you separately ask Land Registry to update the register using form AP1.' },
  { q: 'What if the mortgage is joint?', a: 'Each borrower’s details are held separately. If only one of you changes name, only that person’s record needs to change, though many lenders will want to hear from both of you.' },
  { q: 'Should I tell my insurer?', a: 'Yes. Buildings, contents and life cover linked to the mortgage should show your new name, otherwise a claim could be delayed.' },
];

export default function Page() {
  return (
    <GuideArticle
      slug={slug}
      breadcrumb="Name on Mortgage"
      h1="Changing Your Name on a Mortgage After Marriage"
      description={description}
      readMinutes={5}
      quickAnswer={
        <p>
          Contact your lender and send your <strong>marriage certificate (or deed poll)</strong> with <strong>photo ID</strong>. It is <strong>not legally required</strong> but worth doing quickly. Your rate, balance and term do not change. Updating the lender is separate from <Link href="/change-name-on-property-deeds-land-registry-uk" className={link}>updating Land Registry</Link>.
        </p>
      }
      toc={[
        ['why', 'Why bother'],
        ['proof', 'What lenders ask for'],
        ['order', 'Best order of updates'],
        ['joint', 'Joint mortgages'],
        ['also', 'Other things to update'],
      ]}
      faqs={faqs}
      related={[
        { href: '/change-name-on-property-deeds-land-registry-uk', title: 'Change Name at Land Registry', note: 'Form AP1, no fee.' },
        { href: '/name-change/change-name-on-bank-account-uk', title: 'Change Name on Bank Account', note: 'Banks need evidence too.' },
        { href: '/how-to-change-name-after-marriage-uk', title: 'Change Name After Marriage', note: 'The complete checklist.' },
      ]}
      formHeading="Choosing a name your marriage does not give you?"
      formIntro={<>A deed poll gives lenders the evidence they need when marriage alone does not cover your new name.</>}
    >
      <GuideSection id="why" title="Why bother">
        <p>
          Nothing forces you to tell your lender. The reason to do it is practical: lenders match your records against your ID, credit file and the electoral roll. If the names differ, a remortgage or further advance can stall while they ask for proof. Your credit file may also be harder to find if you apply for credit in your new name.
        </p>
      </GuideSection>

      <GuideSection id="proof" title="What lenders ask for">
        <GuideTable
          head={['Situation', 'Likely evidence']}
          rows={[
            ['Marriage or civil partnership', 'Certificate plus photo ID'],
            ['Divorce, reverting name', 'Final order and marriage certificate'],
            ['Chosen name', 'Deed poll plus photo ID'],
          ]}
        />
        <p>
          Some lenders let you send documents online or by post, while others prefer a branch visit. Ask whether they accept certified copies so you do not have to post originals.
        </p>
      </GuideSection>

      <GuideSection id="order" title="Best order of updates">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Passport or driving licence, so you hold ID in the new name.</li>
          <li>Mortgage lender and bank.</li>
          <li>Land Registry (AP1, free).</li>
          <li>Home insurance, life cover and the electoral roll.</li>
        </ol>
        <Callout tone="tip">Do this before you apply to remortgage or sell, to avoid delay.</Callout>
      </GuideSection>

      <GuideSection id="joint" title="Joint mortgages">
        <p>
          Each borrower has their own record. If you both change name, each should supply evidence. Ask your lender whether one of you can do it for both.
        </p>
      </GuideSection>

      <GuideSection id="also" title="Other things to update">
        <p>
          See our full list in{' '}
          <Link href="/name-change/who-to-notify-after-changing-your-name-uk" className={link}>who to notify after a name change</Link>.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
