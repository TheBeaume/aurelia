const faqs = [
  {
    question: "Do I need an appointment?",
    answer:
      "Appointments are recommended, but walk-ins are welcome based on availability.",
  },
  {
    question: "Which products do you use?",
    answer:
      "We use only premium professional salon products from trusted international brands.",
  },
  {
    question: "Can I book online?",
    answer:
      "Yes, you can book online or contact us directly through WhatsApp.",
  },
  {
    question: "Do you offer bridal packages?",
    answer:
      "Yes, we offer complete bridal makeup, hair styling and pre-wedding beauty packages.",
  },
];

function FAQ() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <p
          className="text-center uppercase tracking-[5px]"
          style={{ color: "var(--accent)" }}
        >
          FAQ
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">
          Frequently Asked Questions
        </h2>

        <div className="mt-16 space-y-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-zinc-900 p-6"
            >
              <h3
                className="text-xl font-semibold"
                style={{ color: "var(--accent)" }}
              >
                {item.question}
              </h3>

              <p className="mt-3 text-zinc-400 leading-7">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;
