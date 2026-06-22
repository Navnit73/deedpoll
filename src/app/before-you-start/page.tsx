import Link from 'next/link';

export const metadata = {
  title: "Before You Start | Deed Poll UK",
  description: "Checklist of things to know before creating your deed poll.",
  alternates: {
    canonical: "/before-you-start",
  },
};

export default function BeforeYouStart() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Checklist</h1>
      <p className="text-xl mb-8">
        Before you <Link href="/change-name-in-uk-by-deedpoll" className="text-[#1d70b8] underline underline-offset-4 decoration-2 hover:text-[#003078]">create your Deed Poll UK</Link>, here are a few things you should check:
      </p>

      <div className="space-y-6 mb-12">
        {checklistItems.map((item, index) => (
          <div key={index} className="flex items-start gap-4 p-4 border border-gray-300 bg-gray-50">
            <div className="pt-1">
              <input type="checkbox" id={`checklist-${index}`} className="w-6 h-6 text-[#1d70b8] border-gray-400 border-2 cursor-pointer" />
            </div>
            <div>
              <label htmlFor={`checklist-${index}`} className="text-xl font-bold text-[#0b0c0c] cursor-pointer block mb-2">
                <span dangerouslySetInnerHTML={{ __html: item.title }} />
              </label>
              {item.desc && (
                <div className="text-gray-700 text-lg" dangerouslySetInnerHTML={{ __html: item.desc }} />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#f3f2f1] border-l-[8px] border-[#1d70b8] p-6 mb-12">
        <p className="text-xl font-bold mb-4">
          If you've checked all of these boxes, you're ready to get started:
        </p>
        <Link href="/change-name-in-uk-by-deedpoll" className="inline-block bg-[#00703c] hover:bg-[#005a30] text-white font-bold py-4 px-8 shadow-[0_4px_0_0_#002d18] active:shadow-none active:translate-y-1 transition-all text-xl">
          Create your deed poll
        </Link>
      </div>

      <p className="text-lg">
        Or if you've still got questions, you might like to <Link href="/faq" className="text-[#1d70b8] underline underline-offset-4 decoration-2 hover:text-[#003078]">check the FAQ</Link>.
      </p>
    </div>
  );
}

const checklistItems = [
  {
    title: 'You are a British citizen',
    desc: `This website makes use of a feature of the law of England and Wales (it also works <a href="/faq#scotland" class="text-[#1d70b8] underline underline-offset-2 decoration-2 hover:text-[#003078]">in Scotland</a> and <a href="/faq#northern-ireland" class="text-[#1d70b8] underline underline-offset-2 decoration-2 hover:text-[#003078]">in Northern Ireland</a>), that only applies to British citizens (<a href="/faq#other-countries" class="text-[#1d70b8] underline underline-offset-2 decoration-2 hover:text-[#003078]">What about dual citizenship?</a>).`
  },
  {
    title: 'You are 18 years of age or older (or 16, <a href="/faq#under-18" class="text-[#1d70b8] underline underline-offset-2 decoration-2 hover:text-[#003078]">with parental consent</a>)',
    desc: `The procedure for <a href="/faq#under-16" class="text-[#1d70b8] underline underline-offset-2 decoration-2 hover:text-[#003078]">changing the name of a child under 16</a> is different, and more-complicated.`
  },
  {
    title: 'You have government-issued photo ID <em>(optional)</em>',
    desc: `It's not essential, but if you have a passport, driving licence, or other government-issued photo ID, this will make it <em>much easier</em> for you to prove your change of name to institutions like banks. Note that you may need to renew your ID after changing your name, which can involve a fee.`
  },
  {
    title: 'You have access to a printer',
    desc: `You'll need to print out your deed poll. You might like to print multiple "original" copies. We recommend printing onto a heavyweight paper, like parchment paper. (<a href="/faq#write-your-own" class="text-[#1d70b8] underline underline-offset-2 decoration-2 hover:text-[#003078]">No printer?</a>)`
  },
  {
    title: 'You can find two witnesses',
    desc: `You'll need two people who know you personally, and preferably who are not close relatives, to witness your deed poll. <a href="/faq#witnesses" class="text-[#1d70b8] underline underline-offset-2 decoration-2 hover:text-[#003078]">Friends, neighbours, and co-workers are all good choices</a>.`
  }
];
