function Terms() {
  return (
    <section className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">

        <p
          className="text-center uppercase tracking-[5px]"
          style={{ color: "var(--accent)" }}
        >
          Terms & Conditions
        </p>

        <h1 className="mt-4 text-center text-5xl font-bold">
          Terms of Service
        </h1>

        <p className="mt-8 text-center text-lg leading-8 text-zinc-400">
          By accessing or using our website and salon services, you agree to the
          following Terms & Conditions. Please read them carefully before making
          an appointment or using our services.
        </p>

        <div className="mt-16 space-y-10">

          <div>
            <h2
              className="text-2xl font-bold"
              style={{ color: "var(--accent)" }}
            >
              Appointments
            </h2>

            <p className="mt-3 leading-8 text-zinc-400">
              We recommend booking appointments in advance. Appointment
              availability is subject to confirmation, and we reserve the right
              to reschedule appointments when necessary.
            </p>
          </div>

          <div>
            <h2
              className="text-2xl font-bold"
              style={{ color: "var(--accent)" }}
            >
              Pricing
            </h2>

            <p className="mt-3 leading-8 text-zinc-400">
              Service prices are subject to change without prior notice. Final
              pricing may vary depending on hair length, treatment requirements,
              or additional services requested.
            </p>
          </div>

          <div>
            <h2
              className="text-2xl font-bold"
              style={{ color: "var(--accent)" }}
            >
              Cancellations
            </h2>

            <p className="mt-3 leading-8 text-zinc-400">
              If you need to cancel or reschedule your appointment, please
              inform us as early as possible so we can accommodate other
              clients.
            </p>
          </div>

          <div>
            <h2
              className="text-2xl font-bold"
              style={{ color: "var(--accent)" }}
            >
              Client Responsibility
            </h2>

            <p className="mt-3 leading-8 text-zinc-400">
              Clients are requested to provide accurate information regarding
              allergies, medical conditions, or previous treatments that may
              affect salon services.
            </p>
          </div>

          <div>
            <h2
              className="text-2xl font-bold"
              style={{ color: "var(--accent)" }}
            >
              Website Usage
            </h2>

            <p className="mt-3 leading-8 text-zinc-400">
              All website content, including images, branding, and text, is
              protected by applicable intellectual property laws and may not be
              copied or reused without permission.
            </p>
          </div>

          <div>
            <h2
              className="text-2xl font-bold"
              style={{ color: "var(--accent)" }}
            >
              Contact
            </h2>

            <p className="mt-3 leading-8 text-zinc-400">
              If you have any questions regarding these Terms & Conditions,
              please contact us using the information provided on our Contact
              page.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Terms;
