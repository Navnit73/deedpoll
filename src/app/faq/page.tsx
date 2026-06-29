import Link from 'next/link';

export const metadata = {
  title: "Frequently Asked Questions | Deed Poll UK",
  description: "Common questions about changing your name and using a deed poll in the UK.",
  alternates: {
    canonical: "/faq",
    languages: {
      "en-GB": "/faq",
      "x-default": "/faq",
    },
  },
};

export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">FAQ</h1>

      <p className="text-xl mb-6 text-gray-800">
        This page contains frequently asked questions about changing your name, about deeds poll, and about this site itself:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-12 text-lg font-bold text-[#1d70b8]">
        <li><a href="#changing-your-name" className="hover:underline underline-offset-2">Changing your name</a></li>
        <li><a href="#deeds-poll" className="hover:underline underline-offset-2">Deeds poll</a></li>
        <li><a href="#deedpolluk-org-uk" className="hover:underline underline-offset-2">deedpolluk.uk</a></li>
        <li><a href="#trivia" className="hover:underline underline-offset-2">Trivia</a></li>
      </ul>

      <hr className="border-gray-300 mb-12" />

      {/* SECTION 1 */}
      <h2 id="changing-your-name" className="text-3xl font-bold mb-6 pt-4 scroll-mt-20">Changing your name</h2>
      
      <div className="space-y-4 mb-12">
        <FaqItem id="how-do-i-change-my-name" summary="How do I change my name?">
          <p>
            Common law in the United Kingdom dictates that your legal name is simply <em>the name that you are known by</em>.
            This means that, in theory, somebody who is <em>known by</em> a particular name can consider that their
            legal name. There's no specific process required: just start using the new name!
          </p>
          <p className="mt-4">
            However: in practice, institutions in our modern world expect to see paperwork that backs up your assertion
            that your name has changed. That paperwork might be:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              <strong>a certificate of marriage or civil partnership</strong>, by which one partner adopts the surname
              of the other,
            </li>
            <li>
              <strong>a decree of divorce or dissolution</strong>, coupled with evidence of a name used prior to
              marriage or civil partnership, by which a person reverts to their pre-marital surname,
            </li>
            <li>
              <strong>a statutory declaration</strong>, typically sworn in front of a magistrate or solicitor, or
            </li>
            <li>
              <strong>a deed poll</strong>, a self-written statement of your name change, signed in the presence of
              {' '}<a href="#witnesses" className="text-[#1d70b8] underline underline-offset-2">witnesses</a>.
            </li>
          </ul>
          <p className="mt-4">
            This website provides help and support with producing a deed poll online.
          </p>
        </FaqItem>

        <FaqItem id="video" summary="Can you show me how to change my name?">
          <p>
            Sure: <Link href="/video" className="text-[#1d70b8] underline underline-offset-2">here's a 60-second video demonstration</Link> of the steps you'll need to take.
          </p>
        </FaqItem>

        <FaqItem id="what-next" summary="What do I need to do after I change my name?">
          <p>
            After you change your name, you're legally-required to notify organisations with whom you have a professional
            relationship. <Link href="/checklist" className="text-[#1d70b8] underline underline-offset-2">Here's a non-exhaustive list of people you'll need to contact</Link>.
          </p>
          <p className="mt-4">
            Many of these organisations will require sight of your deed poll, and many will not accept a photocopy. For
            this reason, it's worthwhile to
            {' '}<a href="#multiple-originals" className="text-[#1d70b8] underline underline-offset-2">make <em>multiple originals</em></a>{' '}
            by printing out several copies of your deed poll and signing them all (with your
            {' '}<a href="#witnesses" className="text-[#1d70b8] underline underline-offset-2">witnesses</a>) in a single sitting.
          </p>
          <p className="mt-4">
            It's highly-recommended to get any photo ID, and especially government-issued photo ID like passports and
            driving licences, updated <em>early</em>, because having these documents available can streamline the process
            of getting your name updated at other organisations such as your bank.
          </p>
        </FaqItem>

        <FaqItem id="why-change-name" summary="Why would I change my name?">
          <p>
            There are many reasons why you might want to change your name. Some common reasons include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 mb-4">
            <li>To share a surname with a partner, child, or other family member</li>
            <li>To have a name that better reflects your cultural identity</li>
            <li>To formally make use of a nickname that you're already known by</li>
            <li>To make your name easier to pronounce or spell</li>
            <li>To represent a new start or a fresh beginning</li>
            <li>To assert your independence from your previous name and those you shared it with</li>
            <li>To avoid confusion with someone more-famous who shares your previous name</li>
            <li>To better reflect your gender identity, or to avoid being misgendered</li>
            <li>To add, remove, or re-arrange your middle name(s)</li>
            <li>To avoid discrimination based on your previous name</li>
            <li>To revert a name to its historical form</li>
            <li>To recognise someone important to you by adopting some or all of their name</li>
            <li>To adopt a name that is more-fitting to your religious beliefs</li>
            <li>To make day-to-day use of a stage name or pen name for which you've become known</li>
            <li>To have an unusual name that brings you amusement or joy</li>
            <li>To simply having a name that you prefer</li>
          </ul>
          <p>
            It doesn't matter what your reason is, though: with few limitations (described elsewhere in this
            FAQ), you're legally entitled to change your name to whatever you want, for any reason you want.
          </p>
        </FaqItem>

        <FaqItem id="legal-restrictions" summary="Are there any restrictions on what names I can change to?">
          <p>
            British law imposes very few <em>specific</em> restrictions on what a person's name can be. However, laws
            that are not specifically-related to names can imply limitations on what names are allowable. If that sounds
            wooly... it's because it is!
          </p>
          <p className="mt-4">
            What this means in practice is that the "rules" listed below are variably-enforced. If you choose to violate
            any of them with your deed poll, you can expect to have a harder time getting your name updated on ID and elsewhere.
            If you choose to violate several of them, you're likely to have a <em>very</em> difficult time. The rules are:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>You must have (at least) two full names.</li>
            <li>It must be possible to write your name using only the Latin alphabet. You can't use e.g. numbers, symbols, or characters from other alphabets. Hyphens and apostrophes are permitted for the purpose of e.g. double-barrelled names and names like O'Reilly.</li>
            <li>Your name must be pronounceable.</li>
            <li>Your name should not imply a title that you do not hold; for example, changing your first name to "Lord" or "Doctor" might be interpreted as an attempt to commit fraud.</li>
            <li>Your name may not promote crime, violence, or racial or religious hatred. It may not be knowingly offensive or blasphemous.</li>
            <li>If your name is extremely long or short, it may need to be shortened for use in some systems, which can include your passport and other forms of ID. Furthermore, very long names might not be printable on PDF versions of deeds poll generated by this site: in this case, you'll have to use the "text" version and format it into a document for yourself.</li>
            <li>It is the policy of HM Passport Office to deny passport applications that they feel are for "temporary" names, names which contain a political message, and names which appear to infringe upon established trademarks, among other restrictions. With some effort, they can sometimes be persuaded to put your new name as an "also known as" on a passport that shows your old name.</li>
            <li>While it's fine to make your name the same as somebody else's, attempting to use it to pass yourself off as them or to cash-in on their accomplishments is likely to see you on the receiving end of legal action.</li>
          </ul>
        </FaqItem>

        <FaqItem id="under-18" summary="I am 16 or 17 years old. What do I need to do?">
          <p>
            If you are 16 or 17 years old, you can use a regular adult deed poll, but when using it you may need to
            demonstrate that you have the consent of your parents to change your name. The easiest way to do this is
            for them to write and sign a letter that states what you're changing your name from and to, and that they
            approve of it. The letter should have the same date as your deed poll and you should keep them together.
          </p>
          <p className="mt-4">
            The letter should be signed by{' '}
            <a href="https://www.gov.uk/parental-rights-responsibilities/who-has-parental-responsibility" target="_blank" rel="noopener noreferrer" className="text-[#1d70b8] underline underline-offset-2">everybody with <em>parental responsibility</em> for you</a>;
            note that this is not always the same as <em>custody</em> and can even include a parent with whom you have
            no contact.
          </p>
        </FaqItem>

        <FaqItem id="under-16" summary="Can a child under the age of 16 change their name by deed poll?">
          <p>Yes, but the process is significantly more-complicated, with many potential pitfalls.</p>
          <p className="mt-4">
            Right now, this website can't help you with this, but we've heard that some people have been successful
            in "simple" cases by adapting an adult deed poll{' '}
            <a href="https://danq.me/projects/deedpolluk/#comment-85003" target="_blank" rel="noopener noreferrer" className="text-[#1d70b8] underline underline-offset-2">as described here</a>.
          </p>
          <p className="mt-4">
            A critical consideration is that you ensure that{' '}
            <a href="https://www.gov.uk/parental-rights-responsibilities/who-has-parental-responsibility" target="_blank" rel="noopener noreferrer" className="text-[#1d70b8] underline underline-offset-2">everybody with <em>parental responsibility</em></a>{' '}
            for the child is a signatory to the deed poll. This is important, because parental responsibility is different
            and distinct from <em>custody</em> or <em>care</em>.
          </p>
        </FaqItem>

        <FaqItem id="change-of-title" summary="How can I change my title? (Mr, Mrs, Ms, etc.)">
          <p>
            Titles are not part of your name. They are a separate entity, and you do not - and probably
            <em>should</em> not, try to change them using a deed poll. We recommend that you do not include your
            title on your deed poll at all.
          </p>
          <p className="mt-4">
            A person may use any informal honorific (e.g. Mr, Mrs, Miss, Ms, Mx, etc.) they like, regardless of their
            gender, age, or marital status. Simply inform organisations that you deal with what title you expect them
            to use for you, and they will generally comply. Sometimes organisations will ask for "proof" of a change
            of title, but this is a nonsense request because for informal titles there is nothing that could possibly
            <em>be</em> proof, because they are - after all - entirely a matter of personal preference.
          </p>
          <p className="mt-4">
            Formal honorifics (e.g. Dr, Sir, Lady etc.) are also not part of your name and so do not belong on a deed
            poll. But they're also not something you're permitted to just start using: you need the relevant
            title or qualification. Changing your name to one that <em>implies</em> a title that you don't have
            (e.g. changing your first and middle names to "His Majesty") could land you in trouble: see
            {' '}<a href="#legal-restrictions" className="text-[#1d70b8] underline underline-offset-2">the FAQ entry on legal restrictions</a> for more information.
          </p>
          <p className="mt-4">
            But in short: your title has nothing to do with your name, and you can use any informal honorific you like.
          </p>
        </FaqItem>

        <FaqItem id="vaisey" summary="Why do I need to check a box if I've changed my first name?">
          <p>
            As a Common law system, what is and is-not legal in England and Wales is impacted by <em>precedent</em>:
            that is to say, previous cases that have been decided by the courts.
          </p>
          <p className="mt-4">
            In a 1946 decision, Justice Harry Vaisey stated his opinion that a deed poll can not be used to change a
            person's first name. This precedent is generally ignored, but to allow for deeds poll that change a person's
            first name to be enrolled, should that be desired, such a deed poll will usually include a caveat to the
            effect of "Notwithstanding the decision of Mr Justice Vaisey in Re: Parrott, Cox v Parrott, the applicant
            desires the enrolment to proceed". This statement shows that the signatory is aware of the legal precedent
            and, like most people since Vaisey's decision, is choosing to treat it as invalid.
          </p>
          <p className="mt-4">
            This site asks you to check a box if you've changed your first name in order to know whether or not to add
            this line to your deed poll. If you're certain that you will wish need to enroll your deed poll
            {' '}(<a href="#enrolment" className="text-[#1d70b8] underline underline-offset-2">which is something you'll probably never want to do</a>),
            then it would be harmless to leave the box unchecked.
            Checking it (in the instance that you've changed your first name) merely keeps your legal options open.
          </p>
        </FaqItem>

        <FaqItem id="change-of-gender" summary="How can I gain recognition for a change of gender?">
          <p>
            If you're transitioning to a new gender and are adopting a new name as part of that transition, you can
            change your name by deed poll. You can do this either before or after applying for a Gender Recognition
            Certificate (GRC), but please note that the name that appears on the GRC will be the name that you used
            at the time: in order words - <strong>if you want your GRC to include your new name, then you should make
            a deed poll <em>before</em> you apply for the GRC</strong>.
          </p>
          <p className="mt-4">
            To successfully apply for a GRC, you need to (among
            {' '}<a href="https://www.gov.uk/apply-gender-recognition-certificate/who-can-apply" target="_blank" rel="noopener noreferrer" className="text-[#1d70b8] underline underline-offset-2">other requirements</a>)
            be able to demonstrate that you've been living as your affirmed gender for at least two years.
            Changing your name by deed poll can contribute to the evidence that you've been living as your affirmed
            gender.
          </p>
        </FaqItem>

        <FaqItem id="other-countries" summary="How can I change my name in other countries?">
          <p>
            If you're not a British citizen, this website can't help you. The rules in other countries are different,
            and often more-restrictive than in the UK.
          </p>
          <p className="mt-4">
            If you have dual citizenship, or you're a British citizen with residence elsewhere, then you usually
            <em>can</em> use a deed poll generated by deedpolluk.uk. In this instance, you can change your
            name in the UK first, and use this name change to get ID (including your British passport) updated with
            your new name. Then, you can use this name change as part of the evidence process in the other country of
            your citizenship or residence. Most countries will accept the names of citizens of other countries that
            accept those names.
          </p>
        </FaqItem>

        <FaqItem id="witnesses" summary="Who can witness my deed poll?">
          <p>
            The law on witnessing a document is not concretely-defined in modern times, but the general consensus is that
            your witnesseses must be:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 mb-4">
            <li>At least 18 years old.</li>
            <li>Not a close family member (the aim is to demonstrate that it's not somebody who has a personal interest in what you're doing: a family member is <em>usually</em> fine, but worth avoiding if feasible).</li>
            <li>Physically present to see you sign the document, although it's been established that virtual witnessing over video calls is also valid (if they see you sign the document, and then you post it to them, for example).</li>
            <li>Mentally competent and capable of understanding the document they're signing.</li>
            <li>Not a convicted criminal with an outstanding sentence.</li>
          </ul>
          <p>
            A good choice of witness is somebody who knows you personally, such as a friend, coworker, or neighbour. avoid
            anybody who could conceivably be accussed of being able to coerce you or be coerced by you: e.g. do not choose
            a coworker who manages you or who you manage, or a child who you are a parent to, for example.
          </p>
          <p className="mt-4">
            Have your witnesses sign{' '}
            <a href="#multiple-originals" className="text-[#1d70b8] underline underline-offset-2"><em>all</em> of your original deeds poll</a> in a single sitting.
          </p>
        </FaqItem>

        <FaqItem id="scotland" summary="I live in Scotland. Can I change my name by deed poll?">
          <p>
            Yes. Scottish law provides for
            {' '}<a href="https://www.nrscotland.gov.uk/registration/changing-your-name/" target="_blank" rel="noopener noreferrer" className="text-[#1d70b8] underline underline-offset-2">a different process for changing your name</a>,
            but Scottish institutions recognise deeds poll because Scots can be covered by the laws of England and Wales
            for certain purposes (those relating to non-devolved governmental functions). So while somebody born in Scotland
            <em>may</em> choose to go through the Scottish process, they don't <em>have</em> to (the author of this site is such
            a person, having been born in Scotland but who chose to change his name by deed poll).
          </p>
          <p className="mt-4">There is a fee associated with changing your name via the Scottish process.</p>
          <p className="mt-4">
            Note that Scottish law allows for the changing of a name on a birth certificate or adoption certificate, with
            certain limitations, which might be desirable for people born in Scotland who are changing their name.
          </p>
        </FaqItem>

        <FaqItem id="northern-ireland" summary="I live in Northern Ireland. Can I change my name by deed poll?">
          <p>
            Yes. The Common Law system of Northern Ireland is for the most part intercompatible with the laws of England and Wales,
            except in a few specific cases and where overridden by the devolved lawmaking powers. A
            deed poll covered by the laws of England and Wales is sufficient to change your name in Northern Ireland.
          </p>
          <p className="mt-4">
            Note that if you have dual Irish/British citizenship, you will probably find it easiest to change your name
            in the UK first, and then use this name change as part of the evidence process in the Republic of Ireland.
            {' '}<a href="#other-countries" className="text-[#1d70b8] underline underline-offset-2">More about dual citizenship...</a>
          </p>
        </FaqItem>

        <FaqItem id="other-sites" summary="Do I have to use this site to change my name? Are there alternatives?">
          <p>No, you don't have to use this site to change your name. There are lots of other options.</p>
          <p className="mt-4">
            Most sites will charge you a fee, in exchange for which they'll print your deed poll for you: they usually don't
            do much more than this, except perhaps provide a "money-back guarantee" if your deed poll is rejected by HM Passport
            Office or by the DVLA. This site is free and therefore doesn't need to offer a money-back guarantee!
          </p>
          <p className="mt-4">But if you're prefer, here are some other options:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              <a href="https://www.gov.uk/change-name-deed-poll/make-unenrolled-deed-poll" target="_blank" rel="noopener noreferrer" className="text-[#1d70b8] underline underline-offset-2">Gov.uk has a guide to making an unenrolled deed poll</a> for yourself.
            </li>
            <li>
              <a href="https://deedpoll.lgbt/" target="_blank" rel="noopener noreferrer" className="text-[#1d70b8] underline underline-offset-2">DeedPoll.lgbt</a> provides a similar "serverless" service (and did so before this site did so), but only outputs HTML, not PDF files, but it's super-fast and simple.
            </li>
            <li>
              <a href="https://deedpolluk.org/" target="_blank" rel="noopener noreferrer" className="text-[#1d70b8] underline underline-offset-2">deedpolluk.org</a> is a loss-leader/front for a commercial deed poll service. It asks more questions than most other services, perhaps-unnecessarily.
            </li>
          </ul>
        </FaqItem>
      </div>

      {/* SECTION 2 */}
      <h2 id="deeds-poll" className="text-3xl font-bold mb-6 pt-4 scroll-mt-20 border-t border-[#b1b4b6]">Deeds poll</h2>
      
      <div className="space-y-4 mb-12">
        <FaqItem id="deeds-poll-as-gifts" summary="Can I make a deed poll for someone else?">
          <p>
            Yes, but the deed poll you make won't be valid until it's signed by the person you're making it for.
            You can certainly make a deed poll as a gift for somebody, but it's up to them whether or not they
            accept it and want to use it.
          </p>
        </FaqItem>

        <FaqItem id="deeds-poll-for-my-child" summary="Can I make a deed poll for my child?">
          <p>
            If your child is 16 or 17, you can make a deed poll for them in the
            {' '}<a href="#deeds-poll-as-gifts" className="text-[#1d70b8] underline underline-offset-2">same way as you would for any other adult</a>. Your child will need to
            be the one to sign it, and the deed poll will typically need to be accompanied by a letter signed
            by all of the child's parents in order to be accepted.
            {' '}<a href="#under-18" className="text-[#1d70b8] underline underline-offset-2">See this FAQ entry for more information</a>.
          </p>
          <p className="mt-4">
            If your child is under 16, the situation is more-complicated. This website can't help you, but
            {' '}<a href="#under-16" className="text-[#1d70b8] underline underline-offset-2">see this FAQ entry for some suggestions</a>.
          </p>
        </FaqItem>

        <FaqItem id="multiple-originals" summary='Why do you recommend that I make "multiple originals" of my deed poll?'>
          <p>
            Any identical deeds poll you and your witnesses sign in a single sitting are considered to be <em>originals</em> of
            your deed poll. There can be just one original, but we highly recommend that you make multiple originals: at least two,
            and ideally three or more.
          </p>
          <p className="mt-4">
            Any copies made subsequently (e.g. by photocopying an original) are considered to be <em>copies</em>. Copies are useful,
            but many organisations including the Passport Office, DVLA, and likely your bank, will require sight of an original.
          </p>
          <p className="mt-4">
            If you only have one original, then you will need to send it to each organisation individually and then wait for it to be
            returned before you can send it to the next one. With muliple originals, you can share an original with multiple
            organisations at the same time, which will speed up the process of getting your name updated. Furthermore, having multiple
            originals is good insurance against their
            {' '}<a href="#lost-deed-poll" className="text-[#1d70b8] underline underline-offset-2">accidental loss or destruction</a>: you can keep one original in a safe place while the others
            are taken on tour of organisations to whom you need to prove your name change.
          </p>
          <p className="mt-4">
            For extra safety, save a copy of the PDF file you generated to somewhere safe: e.g. email it to yourself using an email
            address you expect to keep for the rest of your life. This way, you're well-equipped to easily re-sign it as a
            {' '}<a href="#backdating" className="text-[#1d70b8] underline underline-offset-2">backdated deed poll</a> should the need arise, even if this website ceases to exist.
          </p>
          <p className="mt-4">
            Consider signing your originals in blue ink, to make them easier to distinguish from any black-and-white copies you make.
          </p>
        </FaqItem>

        <FaqItem id="rejection" summary="What do I do if an organisation rejects my deed poll?">
          <p>
            Sometimes, an organisation may reject your deed poll; this is more-likely if your new name violates or appears to violate
            the organisation's interpretation of the <a href="#legal-restrictions" className="text-[#1d70b8] underline underline-offset-2">legal restrictions on names</a>, and it's marginally
            more-likely with deeds poll that are perceived as being "home-made". Some organisations will insist upon seeing an
            "official" deed poll (even though there is, of course, <a href="#how-do-i-change-my-name" className="text-[#1d70b8] underline underline-offset-2">no such thing</a>).
          </p>
          <p className="mt-4">
            This is annoying, but it can be resolved with a little effort and patience. We've put together
            {' '}<Link href="/my-deed-poll-was-rejected" className="text-[#1d70b8] underline underline-offset-2">a special guide to handling organisations that reject your change of name</Link>.
          </p>
        </FaqItem>

        <FaqItem id="enrolment" summary="What is enrolment? Do I need to enrol my deed poll?">
          <p>
            Some people opt to <em>enrol</em> their deed poll with the Royal Courts of Justice in London. This is
            a slow and expensive process and is <strong>absolutely not required</strong> for the vast majority of people.
          </p>
          <p className="mt-4">
            Enrolling your deed poll makes it a matter of public record. An enrolled deed poll is marginally less-likely
            to be rejected by organisations (but you can <a href="#rejection" className="text-[#1d70b8] underline underline-offset-2">work around that anyway</a>), but there's
            no other benefit to most people.
          </p>
          <p className="mt-4">
            In short: no, you do not need to enrol your deed poll. An unenrolled deed poll is perfectly good.
          </p>
          <p className="mt-4">
            If for some reason you <em>really want</em> to enrol your deed poll,
            {' '}<a href="https://www.gov.uk/change-name-deed-poll/enrol-a-deed-poll-with-the-courts" target="_blank" rel="noopener noreferrer" className="text-[#1d70b8] underline underline-offset-2">gov.uk has guidance</a>.
          </p>
        </FaqItem>

        <FaqItem id="lost-deed-poll" summary="What do I do if I lose my deed poll?">
          <p>
            Ideally, don't! That's why
            {' '}<a href="#multiple-originals" className="text-[#1d70b8] underline underline-offset-2">you made multiple originals</a>, right?
          </p>
          <p className="mt-4">
            But if you do lose your deed poll and still need it (after a long while, you'll probably find that you don't use it
            any more), then you can create a <em>new</em> original by
            {' '}<a href="#backdating" className="text-[#1d70b8] underline underline-offset-2">creating a backdated one</a>. If possible, use the same witnesses as the original.
          </p>
        </FaqItem>

        <FaqItem id="backdating" summary="Can I backdate my deed poll?">
          <p>
            When creating your deed poll using this site, you can put any date on it that you like.
          </p>
          <p className="mt-4">
            Putting a date in the future can be useful if, for example, you plan to print it today but then sign it
            next week, when you'll see your witnesses.
          </p>
          <p className="mt-4">
            Putting a date in the past is acceptable so long as it's not being done for fraudulent purposes. For example,
            if you've already changed your name and are recreating a replica original using the same witnesses, that's
            probably fine. But if you're using a deed poll to try to claim that you've been going by your new name for
            longer than is actually the case, that could be illegal.
          </p>
        </FaqItem>

        <FaqItem id="write-your-own" summary="Can I write my own deed poll?">
          <p>
            Absolutely. There are all kinds of reasons you might like to write out your own deed poll: you might like to write
            it by hand using ornate caligraphy to make the resulting document a memorable keepsake, or you might prefer to
            format it in your preferred choice of font.
          </p>
          <p className="mt-4">
            This website can still help you come up with the wording you need. Just <Link href="/change-name-in-uk-by-deedpoll" className="text-[#1d70b8] underline underline-offset-2">fill out the form</Link> as
            usual and click the "Show Text" button. You'll see the full wording of your deed poll, which you can copy-and-paste
            into your favourite word processor, copy out by hand, type on a typewriter, or whatever.
          </p>
          <p className="mt-4">
            Note that you will still need to ensure that the paper you use
            {' '}<a href="#why-called-deed-poll" className="text-[#1d70b8] underline underline-offset-2">has straight edges</a>, and you should still consider having
            {' '}<a href="#multiple-originals" className="text-[#1d70b8] underline underline-offset-2">multiple originals</a> even if you're hand-writing them.
          </p>
        </FaqItem>
      </div>

      {/* SECTION 3 */}
      <h2 id="deedpolluk-org-uk" className="text-3xl font-bold mb-6 pt-4 scroll-mt-20 border-t border-[#b1b4b6]">deedpolluk.uk</h2>
      
      <div className="space-y-4 mb-12">
        <FaqItem id="really-free" summary="Is this site really free?">
          <p>
            <strong>Yes, completely.</strong>
            You don't have to pay anything to use this site. It's not trying to sell you anything.
            It doesn't even host any advertisements! <a href="#security" className="text-[#1d70b8] underline underline-offset-2">It doesn't track you</a>.
            It doesn't sell your data to third parties. <strong>It's genuinely completely secure.</strong>
          </p>
          <p className="mt-4">
            If you find that the site is valuable to you and you'd like to give something back, you're welcome to
            donate to any of the following charities, of which the site's creator is a fan:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              <a href="https://www.samaritans.org/" target="_blank" rel="noopener noreferrer" className="text-[#1d70b8] underline underline-offset-2">Samaritans</a> - if possible, please consider donating to your local
              branch rather than the national charity: local branches are often independent charities in their own right
              and often run on showstring budgets backed by incredible volunteer effort. As a former volunteer myself
              I've seen first hand the enormous impact that a listening ear can provide to people in crisis.
            </li>
            <li>
              <a href="https://mermaidsuk.org.uk/" target="_blank" rel="noopener noreferrer" className="text-[#1d70b8] underline underline-offset-2">Mermaids</a> - trans youth are becoming increasingly disenfranchised
              and undersupported in the UK, and Mermaids not only fights to gain and reclaim their rights but also provides
              support to trans kids and their families right now.
            </li>
            <li>
              <a href="https://archive.org" target="_blank" rel="noopener noreferrer" className="text-[#1d70b8] underline underline-offset-2">The Internet Archive</a> - during a period in 2025 when a server failure took
              this site offline, I was able to point users to the Wayback Machine's snapshot of key pages. In an
              increasingly-ephemeral Internet, this service supports the preservation of the Web for future historians.
            </li>
          </ul>
        </FaqItem>

        <FaqItem id="really-work" summary="Does this site really work?">
          <p>
            Absolutely. I've personally spoken to many hundreds of people who've successfully changed their name using this
            site, and I'm aware via social media that it's been used by orders of magnitude more.
          </p>
          <p className="mt-4">
            Nowadays, <a href="https://www.gov.uk/change-name-deed-poll/make-unenrolled-deed-poll" target="_blank" rel="noopener noreferrer" className="text-[#1d70b8] underline underline-offset-2">gov.uk confirms the legitimacy of homemade deeds poll</a>
            {' '}(although it didn't used to, when this site was launched!), and even provides some sample text that you can
            use. This site only does the same thing, but makes it easier to produce an attractive document and provides
            help and advice on how to use it.
          </p>
        </FaqItem>

        <FaqItem id="security" summary="Is my data secure?">
          <p>
            Yes. The deed poll generator on this site runs entirely in your browser: nothing - not your name or anything
            else - gets sent across the Internet to our server. This is different to virtually every other deeds poll service we've
            ever seen. So as well as being free, this site also respects your privacy.
          </p>
          <p className="mt-4">
            But you don't have to take our word for it. <a href="#technology" className="text-[#1d70b8] underline underline-offset-2">The technology that powers this site</a>
            {' '}is <a href="https://github.com/Dan-Q/deedpolluk" target="_blank" rel="noopener noreferrer" className="text-[#1d70b8] underline underline-offset-2">released under an open source licence</a>, which means that
            you or anybody else can inspect the code and verify that it's safe and secure. It also means that you can
            run a copy of your own, if you like!
          </p>
        </FaqItem>

        <FaqItem id="how-many" summary="How many people have changed their name using this site?">
          <p>
            This question is impossible to answer, because this site does not, and has never, tracked the
            people who use it! From 2011 through 2025 this site generated documents "server-side", which
            could theoretically have been used to count the number of users, but the server was always
            deliberately configured to discard all such logs as an affordance to privacy. Since 2025, this
            site has generated documents "client-side" - this means that all of the document generation
            happens on your own computer - so it's now completely impossible to count the number of people
            who've benefitted from it.
          </p>
          <p className="mt-4">
            However, based solely on the number of people who have specifically taken the
            time to email me or speak publicly about their experience of using the site, there are definintely
            in the thousands and and almost certainly in the tens, maybe even hundreds, of thousadnds of
            people who've benefitted from this fast, free and easy way to change their name.
          </p>
        </FaqItem>

        <FaqItem id="technology" summary="How does this site work? Can I see the source code?">
          <p>
            The <a href="https://github.com/Dan-Q/deedpolluk" target="_blank" rel="noopener noreferrer" className="text-[#1d70b8] underline underline-offset-2">entire source code for this site</a> is available
            on GitHub.
          </p>
          <p className="mt-4">
            The site is implemented in <a href="https://www.11ty.dev/" target="_blank" rel="noopener noreferrer" className="text-[#1d70b8] underline underline-offset-2">11ty</a> (pronounced "eleventy"), a static site
            generator that produces a collection of basic HTML, CSS and JavaScript files. All of this code runs
            directly in your computer's web browser, so nothing runs on our server.
          </p>
          <p className="mt-4">
            <a href="https://picocss.com/" target="_blank" rel="noopener noreferrer" className="text-[#1d70b8] underline underline-offset-2">PicoCSS</a> is used to bootstrap the design, and
            {' '}<a href="https://github.com/parallax/jsPDF" target="_blank" rel="noopener noreferrer" className="text-[#1d70b8] underline underline-offset-2">jsPDF</a> generates the PDF files.
          </p>
        </FaqItem>

        <FaqItem id="suggestions" summary="Can I make a suggestion for this site? Can I report a bug?">
          <p>
            Yes. Feel free to <a href="https://github.com/Dan-Q/deedpolluk/issues" target="_blank" rel="noopener noreferrer" className="text-[#1d70b8] underline underline-offset-2">raise an issue on GitHub</a>
            {' '}or <a href="https://github.com/Dan-Q/deedpolluk/pulls" target="_blank" rel="noopener noreferrer" className="text-[#1d70b8] underline underline-offset-2">make a pull request</a> with your own suggested
            changes.
          </p>
          <p className="mt-4">
            Alternatively, send an email to <a href="mailto:dan@deedpolluk.uk" className="text-[#1d70b8] underline underline-offset-2">dan@deedpolluk.uk</a> and I'll
            see if I can help.
          </p>
        </FaqItem>

        <FaqItem id="pdf-too-long" summary='What does it mean when I get the message "PDF deed poll too long"?'>
          <p>
            In order to lay out the contents of your deed poll in a consistent manner, this website makes a few
            assumptions about the size of its contents. In some cases - for example for people with extremely long names or
            addresses - this can result in some of the content being "cut off" the end of the page in the PDF version.
          </p>
          <p className="mt-4">
            If this happens, the PDF version of your deed poll is not suitable for use. Instead, you'll need to
            {' '}<a href="#write-your-own" className="text-[#1d70b8] underline underline-offset-2">use the text version to create your own</a>.
          </p>
        </FaqItem>

        <FaqItem id="javascript" summary="Why does this site require JavaScript?">
          <p>
            Earlier versions of this website worked without JavaScript, by generating deeds poll documents
            on the server. In order to better
            {' '}<a href="#security" className="text-[#1d70b8] underline underline-offset-2">protect your privacy</a>, the current version of the site instead
            generates the document directly in your web browser: your personal information never leaves your
            computer.
          </p>
          <p className="mt-4">
            The <a href="#technology" className="text-[#1d70b8] underline underline-offset-2">technology that powers this site</a> should work in any modern web browser.
            If you're having trouble, you might like to try a different browser or computer.
          </p>
        </FaqItem>
      </div>

      {/* SECTION 4 */}
      <h2 id="trivia" className="text-3xl font-bold mb-6 pt-4 scroll-mt-20 border-t border-[#b1b4b6]">Trivia</h2>
      
      <div className="space-y-4 mb-12">
        <FaqItem id="plural-of-deed-poll" summary="What is the plural of deed poll?">
          <p>
            Surprisingly, the plural of <em>deed poll</em> is <em>deeds poll</em>, in the same way that
            the plural of <em>secretary general</em> is <em>secretaries general</em>.
          </p>
        </FaqItem>

        <FaqItem id="why-called-deed-poll" summary="Why are they called that?">
          <p>
            A deed poll is a legal document signed on behalf of a single party. The popularity of a specific
            <em>kind</em> of deed poll - one to change your name! - has lead to the name <em>deed poll</em>
            becoming synonymous with that specific kind of document.
          </p>
          <p className="mt-4">
            In this context, a <em>deed</em> is a document that declares or affirms a fact. It descends
            from the medieval tradition of a <em>charter</em>. Deeds are used for various purposes, such as
            transferring ownership of property or granting a patent.
          </p>
          <p className="mt-4">
            <em>Polling</em> in this context refers to cutting the paper so that it has straight edges! This
            differentiates polls from <em>indentures</em>, which were contracts written out in triplicate and torn
            into three parts, with each of the two parties holding one part each and the third being kept with
            a trusted authority. This mitigated the risk of the forgery of one part of the contract: a fake part
            would not match up with the others.
          </p>
          <p className="mt-4">
            Changing your own name by declaring it in a document never required multiple signatories, and so has
            never been a kind of indenture but a poll. And so, by descent from medieval tradition, the name
            "deed poll" suggests that the paper on which your deed poll is written is expected to have straight edges!
            One of many strange examples of how medieval law continues to shape our modern legal system.
          </p>
        </FaqItem>

        <FaqItem id="interesting-names" summary="Has anybody used this site to change their name to something particularly interesting?">
          <p>
            Most of the big "paid-for" deeds poll websites (which do fundamentally the same thing as this one, but
            with glossier branding and a price tag to come with it) maintain a journalist-attracting page with a
            list of curious and intesting names that people using their site have changed their name to.
          </p>
          <p className="mt-4">
            This site does not do that. We don't -
            {' '}<a href="#security" className="text-[#1d70b8] underline underline-offset-2">in fact, we <em>can't</em></a>
            {' '}- track you, and we have no record of what names
            people enter onto the site. So while we don't have some headline-grabbing and hilarious list of funny
            and unusual names... we think that's actually a good thing. We take your privacy seriously, and -
            even if you choose a truly brilliant name - we won't be the ones to tell the world about it. That's up to
            you. It's your name, after all!
          </p>
        </FaqItem>


      </div>

    </div>
  );
}

function FaqItem({ id, summary, children }: { id: string, summary: string, children: React.ReactNode }) {
  return (
    <details id={id} className="group border-t border-[#b1b4b6] pt-4 pb-4 open:bg-gray-50 open:p-4 transition-all scroll-mt-24">
      <summary className="text-xl font-bold text-[#1d70b8] cursor-pointer hover:underline underline-offset-2 list-none flex justify-between items-center">
        {summary}
        <span className="text-3xl text-gray-400 group-open:hidden group-hover:text-[#0b0c0c]">+</span>
        <span className="text-3xl text-gray-400 hidden group-open:block group-hover:text-[#0b0c0c]">-</span>
      </summary>
      <div className="mt-6 text-gray-800 text-lg">
        {children}
      </div>
    </details>
  );
}
