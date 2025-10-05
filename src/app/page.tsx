export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="text-xl font-semibold tracking-tight">Saffron & Cedar</a>
          <nav className="hidden gap-6 text-sm text-zinc-700 sm:flex">
            <a href="#menu" className="hover:text-amber-700">Menu</a>
            <a href="#about" className="hover:text-amber-700">About</a>
            <a href="#visit" className="hover:text-amber-700">Visit</a>
            <a href="#contact" className="hover:text-amber-700">Contact</a>
          </nav>
          <a
            href="mailto:hello@saffroncedar.example?subject=Reservation%20Request"
            className="rounded-full bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-amber-700"
          >
            Reserve
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 sm:py-24">
            <div>
              <p className="mb-2 text-sm uppercase tracking-widest text-amber-700">Neighborhood Kitchen</p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Seasonal plates, wood‑fired mains, and good company.</h1>
              <p className="mt-4 max-w-2xl text-zinc-700">
                Welcome to Saffron & Cedar, a cozy spot for bright small plates, comfort mains, and classic desserts.
                We cook with the seasons and pour with care.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#menu"
                  className="rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-medium shadow-sm hover:border-amber-300 hover:text-amber-800"
                >
                  View Menu
                </a>
                <a
                  href="mailto:hello@saffroncedar.example?subject=Reservation%20Request"
                  className="rounded-full bg-amber-600 px-5 py-2 text-sm font-medium text-white shadow hover:bg-amber-700"
                >
                  Book a Table
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-600">
                <span>Wed–Sun · 5:00–10:00 PM</span>
                <span className="hidden h-1 w-1 rounded-full bg-zinc-400 sm:inline-block" />
                <span>123 Cedar St, Your City</span>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Preview */}
        <section id="menu" className="border-t border-zinc-200/60 bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-semibold tracking-tight">Menu Highlights</h2>
            <p className="mt-1 text-sm text-zinc-600">A few of our favorites. Our menu changes with the seasons.</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Item */}
              <article className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <h3 className="font-medium">Citrus Marinated Olives</h3>
                  <span className="text-amber-700">$6</span>
                </div>
                <p className="mt-1 text-sm text-zinc-600">orange, rosemary, chili</p>
              </article>

              <article className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <h3 className="font-medium">Heirloom Tomato Salad</h3>
                  <span className="text-amber-700">$12</span>
                </div>
                <p className="mt-1 text-sm text-zinc-600">basil, burrata, olive oil</p>
              </article>

              <article className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <h3 className="font-medium">Wood‑Fired Chicken</h3>
                  <span className="text-amber-700">$22</span>
                </div>
                <p className="mt-1 text-sm text-zinc-600">lemon, thyme, pan sauce</p>
              </article>

              <article className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <h3 className="font-medium">Wild Mushroom Risotto</h3>
                  <span className="text-amber-700">$19</span>
                </div>
                <p className="mt-1 text-sm text-zinc-600">parmesan, chives, truffle oil</p>
              </article>

              <article className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <h3 className="font-medium">Cedar‑Smoked Salmon</h3>
                  <span className="text-amber-700">$24</span>
                </div>
                <p className="mt-1 text-sm text-zinc-600">herb butter, charred lemon</p>
              </article>

              <article className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <h3 className="font-medium">Vanilla Bean Panna Cotta</h3>
                  <span className="text-amber-700">$9</span>
                </div>
                <p className="mt-1 text-sm text-zinc-600">strawberries, balsamic</p>
              </article>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-zinc-200/60 bg-amber-50/60 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-semibold tracking-tight">About Us</h2>
            <div className="mt-4 grid gap-8 sm:grid-cols-2">
              <p className="text-zinc-700">
                Saffron & Cedar is a small neighborhood restaurant built on simple ideas: cook with the best ingredients we can find, season thoughtfully, and serve with warmth. Our menu shifts with the market and our wood‑fired oven keeps things cozy.
              </p>
              <ul className="space-y-2 text-sm text-zinc-700">
                <li>• Seasonal, locally‑sourced produce</li>
                <li>• Natural wines and classic cocktails</li>
                <li>• Vegetarian and gluten‑free options</li>
                <li>• Walk‑ins welcome, reservations encouraged</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Visit */}
        <section id="visit" className="border-t border-zinc-200/60 bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-semibold tracking-tight">Visit</h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-3">
              <div>
                <h3 className="font-medium">Hours</h3>
                <ul className="mt-2 text-sm text-zinc-700">
                  <li>Mon–Tue: Closed</li>
                  <li>Wed–Thu: 5:00–9:00 PM</li>
                  <li>Fri–Sat: 5:00–10:00 PM</li>
                  <li>Sun: 5:00–9:00 PM</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="mt-2 text-sm text-zinc-700">123 Cedar St, Your City, ST 00000</p>
                <a
                  className="mt-2 inline-block text-sm text-amber-700 hover:underline"
                  href="https://maps.google.com/?q=123+Cedar+St+Your+City"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Open in Maps
                </a>
              </div>
              <div>
                <h3 className="font-medium">Contact</h3>
                <p className="mt-2 text-sm text-zinc-700">(555) 123‑4567</p>
                <a
                  className="text-sm text-amber-700 hover:underline"
                  href="mailto:hello@saffroncedar.example"
                >
                  hello@saffroncedar.example
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-zinc-200/60 bg-amber-50/60 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-semibold tracking-tight">Reservations & Inquiries</h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-700">
              For reservations, private events, or general questions, send us an email and our team will get back to you.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@saffroncedar.example?subject=Reservation%20Request"
                className="rounded-full bg-amber-600 px-5 py-2 text-sm font-medium text-white shadow hover:bg-amber-700"
              >
                Email Us
              </a>
              <a
                href="tel:+15551234567"
                className="rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-medium shadow-sm hover:border-amber-300 hover:text-amber-800"
              >
                Call (555) 123‑4567
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200/60 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-zinc-600">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Saffron & Cedar</p>
            <p className="text-xs">This is a demo site.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
