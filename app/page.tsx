export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          AI-Powered Tax Estimation
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Stop Guessing Your{" "}
          <span className="text-[#58a6ff]">Quarterly Taxes</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          FreelanceTax AI analyzes your income patterns, predicts your quarterly IRS payments, and surfaces deductions you&apos;re missing — so you never get hit with a surprise bill.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start Estimating — $39/mo
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">Cancel anytime. No setup fees.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📊", title: "Income Pattern Analysis", desc: "AI reads your earnings history to model seasonal swings and project future income." },
            { icon: "🧾", title: "Deduction Suggestions", desc: "Surfaces overlooked write-offs — home office, equipment, subscriptions, and more." },
            { icon: "📅", title: "Quarterly Reminders", desc: "Get exact payment amounts and due-date alerts before April, June, September, and January." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-2">
            <span className="text-5xl font-extrabold text-white">$39</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to stay ahead of the IRS</p>
          <ul className="text-sm text-left space-y-3 mb-8">
            {[
              "AI quarterly tax estimates",
              "Unlimited income entries",
              "Deduction recommendation engine",
              "Due-date reminders & alerts",
              "Export-ready tax summaries",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started Now
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the AI estimate my quarterly taxes?",
              a: "You enter your income and expense data. Our AI — powered by OpenAI — analyzes patterns, applies current IRS self-employment tax rules, and calculates your estimated quarterly payment for each due date."
            },
            {
              q: "Is this a replacement for a CPA?",
              a: "FreelanceTax AI is a planning and estimation tool, not a licensed tax advisor. It helps you stay organized and avoid underpayment penalties, but we recommend consulting a CPA for complex situations."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. You can cancel at any time from your Lemon Squeezy customer portal. You keep access until the end of your billing period with no cancellation fees."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} FreelanceTax AI. Not affiliated with the IRS.
      </footer>
    </main>
  );
}
