function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <p
          className="text-center uppercase tracking-[5px]"
          style={{ color: "var(--accent)" }}
        >
          Privacy Policy
        </p>

        <h1 className="mt-4 text-center text-5xl font-bold">
          Your Privacy Matters
        </h1>

        <p className="mt-10 leading-8 text-zinc-400">
          We are committed to protecting your personal information and ensuring
          a safe experience when visiting our salon website. This Privacy Policy
          explains how we collect, use, and protect your information.
        </p>

        <div className="mt-12 space-y-10">
          <div>
            <h2 className="text-2xl font-bold" style={{ color: "var(--accent)" }}>
              Information We Collect
            </h2>
            <p className="mt-3 leading-8 text-zinc-400">
              We may collect your name, phone number, email address, appointment
              details, and any information you voluntarily provide through our
              contact or booking forms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold" style={{ color: "var(--accent)" }}>
              How We Use Your Information
            </h2>
            <p className="mt-3 leading-8 text-zinc-400">
              Your information is used to manage appointments, respond to
              inquiries, improve our services, and communicate important updates
              regarding your bookings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold" style={{ color: "var(--accent)" }}>
              Data Security
            </h2>
            <p className="mt-3 leading-8 text-zinc-400">
              We take appropriate measures to protect your personal information
              against unauthorized access, alteration, disclosure, or
              destruction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold" style={{ color: "var(--accent)" }}>
              Cookies
            </h2>
            <p className="mt-3 leading-8 text-zinc-400">
              Our website may use cookies to improve user experience, analyze
              website traffic, and remember your preferences.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold" style={{ color: "var(--accent)" }}>
              Contact Us
            </h2>
            <p className="mt-3 leading-8 text-zinc-400">
              If you have any questions regarding this Privacy Policy, please
              contact us using the information provided on our Contact page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
