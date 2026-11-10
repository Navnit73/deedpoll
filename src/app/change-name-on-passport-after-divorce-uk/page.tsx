import Link from 'next/link';
import GuideArticle, { Callout, GuideSection, GuideTable, guideMetadata } from '@/components/GuideArticle';

const slug = 'change-name-on-passport-after-divorce-uk';
const description =
  'Changing your passport name after divorce: do you have to, which documents HM Passport Office wants, the current fee, and whether you can wait until your passport expires.';

export const metadata = guideMetadata(slug, 'Change Name on UK Passport After Divorce: Do You Have To?', description);

const link = 'text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]';

const faqs = [
  {
    q: 'Do I have to change my passport after a divorce?',
    a: 'No. Nothing in law forces you to change your name after divorce, and your passport stays valid in the name it was issued in. You only need a new one if you want your passport to show a different name.',
  },
  {
    q: 'Can I wait until my passport needs renewing?',
    a: 'Yes. Many people wait and make the name change part of a normal renewal. Just remember that your tickets, visas and other travel bookings must match the name printed on the passport you will use.',
  },
  {
    q: 'How much does it cost?',
    a: 'GOV.UK currently lists £102 for an online adult application and £115.50 for a paper one. Fees change, so check the current figure before you apply.',
  },
  {
    q: 'Is my decree absolute or final order enough on its own?',
    a: 'GOV.UK’s list for returning to a previous surname asks for your birth certificate, a signed statement, proof you are using the name and your marriage certificate. Keep the divorce paperwork to hand in case it is requested.',
  },
  {
    q: 'Will I keep the time left on my old passport?',
    a: 'No. You receive a new 10-year passport and the time left on the old one is not added. The new passport also has a new number.',
  },
  {
    q: 'What if I have a visa in my old passport?',
    a: 'Unexpired visas may stop being valid when the name changes. Contact the relevant embassy or consulate before you change anything.',
  },
];

export default function Page() {
  return (
    <GuideArticle
      slug={slug}
      breadcrumb="Passport After Divorce"
      h1="How to Change Your Name on a UK Passport After Divorce"
      description={description}
      readMinutes={6}
      quickAnswer={
        <p>
          You <strong>do not have to</strong> change your passport after a divorce, and you can wait until it expires. If you want to go back to your previous surname, apply for a <strong>new passport</strong> with your birth certificate, a signed statement, proof you are using the name and your marriage certificate. The fee is <strong>£102 online</strong> and the passport lasts 10 years.
        </p>
      }
      toc={[
        ['must-you', 'Do you have to change it?'],
        ['wait', 'Waiting until renewal'],
        ['documents', 'Documents you need'],
        ['apply', 'How to apply'],
        ['cost-time', 'Cost, timing and your old passport'],
        ['pitfalls', 'Common pitfalls'],
      ]}
      faqs={faqs}
      related={[
        { href: '/revert-to-maiden-name-uk', title: 'Revert to Your Maiden Name', note: 'The whole process, not just the passport.' },
        { href: '/how-to-change-name-on-passport-uk', title: 'Change Name on a Passport', note: 'All routes and fees.' },
        { href: '/how-long-does-it-take-to-change-your-name-uk', title: 'How Long a Name Change Takes', note: 'Timescales for each record.' },
      ]}
      formHeading="Need a deed poll to back up your name change?"
      formIntro={<>If your divorce paperwork does not make your situation clear, a deed poll gives the passport office a single clear document showing the name you are moving to.</>}
    >
      <GuideSection id="must-you" title="Do you have to change it?">
        <p>
          No. A divorce ends your marriage but it does not change your name automatically, and no rule says you must drop a married name. Your passport remains valid in the name it carries, so the choice is yours.
        </p>
        <GuideTable
          head={['Your choice', 'What it means for your passport']}
          rows={[
            ['Keep your married name', 'Nothing to do. Your current passport stays valid.'],
            ['Return to your previous surname', 'Apply for a new passport. You cannot amend the old one.'],
            ['Use a completely new name', 'Make a deed poll first, then apply with it as evidence.'],
          ]}
        />
      </GuideSection>

      <GuideSection id="wait" title="Waiting until renewal">
        <p>
          A name change always results in a new passport. That makes renewal the natural moment to do it. If your passport is due to expire in the next year or so, there is little reason to pay for a replacement early.
        </p>
        <Callout tone="warn">
          <strong>Keep names consistent when you travel.</strong> If you change your name on your driving licence and bank cards but still hold a passport in your married name, you may be asked to explain the mismatch. Book flights in the name printed on the passport you will carry.
        </Callout>
      </GuideSection>

      <GuideSection id="documents" title="Documents you need">
        <p>For a divorce or return to a previous surname, GOV.UK asks for:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Your <strong>birth certificate</strong>.</li>
          <li>A <strong>signed statement</strong> that you have returned to your previous surname &ldquo;for all purposes&rdquo;.</li>
          <li><strong>Proof you are already using it</strong>, for example a payslip or a letter from your council.</li>
          <li>Your <strong>marriage or civil partnership certificate</strong>, showing both names. You can order a copy if you have lost it.</li>
        </ol>
        <p>
          The page does not state how long you must have used the new name. It is sensible, though, to update at least one or two everyday records first so that your proof is genuine. Keep your final order or decree absolute alongside the rest.
        </p>
        <p>
          If you would rather not rely on divorce paperwork, a <Link href="/how-to-change-name-by-deed-poll-uk" className={link}>deed poll</Link> is also accepted as evidence of a change of name.
        </p>
      </GuideSection>

      <GuideSection id="apply" title="How to apply">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose the name you want printed on the passport and make sure it matches your evidence.</li>
          <li>Apply online through GOV.UK, or request a paper form from a Post Office with the Check and Send service.</li>
          <li>Complete the form in the name you want to appear on the new passport.</li>
          <li>Send your current passport and your original documents, as instructed.</li>
          <li>Wait for the new passport. Do not book travel until it arrives.</li>
        </ol>
        <p>
          A countersignature is not needed for a name change alone. It is only required if your appearance has changed so much that you cannot be recognised from your current passport.
        </p>
      </GuideSection>

      <GuideSection id="cost-time" title="Cost, timing and your old passport">
        <GuideTable
          head={['Item', 'Detail']}
          rows={[
            ['Fee (online)', '£102 for an adult'],
            ['Fee (paper)', '£115.50 for an adult'],
            ['New passport', '10 years, with a new passport number'],
            ['Time left on old passport', 'Not added to the new one'],
            ['Typical timescale', 'Around three weeks, but longer is possible, so avoid applying just before a trip'],
          ]}
        />
        <p className="text-sm text-gray-500">Fees and timescales are taken from GOV.UK at the time of writing and can change. Check gov.uk/passport-fees before you apply.</p>
      </GuideSection>

      <GuideSection id="pitfalls" title="Common pitfalls">
        <ul className="list-disc pl-6 space-y-2">
          <li>Sending photocopies where originals are requested.</li>
          <li>Booking flights before the new passport arrives.</li>
          <li>Forgetting that the new passport has a new number, which matters for airline and visa records.</li>
          <li>Not checking whether a visa in your old passport remains valid.</li>
          <li>Changing the passport but forgetting the <Link href="/change-name-on-driving-licence-dvla-uk" className={link}>driving licence</Link>, which you must also update.</li>
        </ul>
      </GuideSection>
    </GuideArticle>
  );
}
