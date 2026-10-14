import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { GALLERY, HOURS, LINKS, MENUS, timeSlots, type Dish, type Menu } from "@/data/restaurant";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
];

export function NisiPage() {
  const [navOpen, setNavOpen] = useState(false);
  const [menuId, setMenuId] = useState("dinner");
  const [photo, setPhoto] = useState<number | null>(null);
  const menu = MENUS.find((m) => m.id === menuId) ?? MENUS[0];
  const status = useServiceStatus();

  return (
    <div className="min-h-screen bg-ink text-foam">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-foam focus:px-4 focus:py-3 focus:text-ink"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-line bg-ink/92 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
          <a href="#top" className="flex items-center" aria-label="Nisi Greek Taverna, home">
            <img src="/photos/logo.png" alt="" className="h-12 w-auto" />
          </a>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Page">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center px-3 text-sm tracking-wide text-foam/90 hover:text-brass"
              >
                {item.label}
              </a>
            ))}
            <a
              href={LINKS.reserve}
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex min-h-11 items-center rounded-full bg-teal px-4 text-sm font-medium text-foam hover:bg-teal-2"
            >
              Reserve
            </a>
          </nav>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line lg:hidden"
            aria-expanded={navOpen}
            aria-controls="mobile-nav"
            onClick={() => setNavOpen((v) => !v)}
          >
            <span className="sr-only">{navOpen ? "Close menu" : "Open menu"}</span>
            {navOpen ? <X className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
        {navOpen ? (
          <nav id="mobile-nav" className="border-t border-line px-4 py-3 lg:hidden" aria-label="Page">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setNavOpen(false)}
                className="flex min-h-12 items-center border-b border-line text-lg"
              >
                {item.label}
              </a>
            ))}
            <a
              href={LINKS.reserve}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex min-h-12 items-center justify-center rounded-full bg-teal text-base font-medium text-foam"
            >
              Reserve a table
            </a>
          </nav>
        ) : null}
      </header>

      <main id="top">
        <section className="relative min-h-[88svh] overflow-hidden">
          <img
            src="/photos/dining.jpg"
            alt="The dining room at Nisi, with teal velvet banquettes, black walls and round brass mirrors"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="hero-shade absolute inset-0" />
          <div className="relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-4 pt-16 pb-10 sm:pb-14">
            <p className="text-xs tracking-[0.28em] text-brass uppercase">Burlington · Lake Ontario</p>
            <h1 className="mt-3 max-w-3xl font-display text-5xl leading-none font-medium text-foam sm:text-7xl">
              Delicious Greek cuisine, with a twist.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-foam/90">
              An island table on Lakeshore Road. Grilled souvlaki, fresh seafood and a full bar, with the lake a short walk from the door.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={LINKS.reserve}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-teal px-6 text-base font-medium text-foam hover:bg-teal-2"
              >
                Reserve on OpenTable
              </a>
              <a
                href="#menu"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-foam/40 px-6 text-base text-foam hover:border-brass hover:text-brass"
              >
                See the menu
              </a>
            </div>
            {status ? (
              <p className="mt-6 text-sm text-mist">
                <span className="text-brass">{status.open ? "Open now" : "Closed now"}</span>
                {" · "}
                {status.detail}
              </p>
            ) : null}
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-6xl gap-10 px-4 py-20 lg:grid-cols-12 lg:items-center lg:py-28">
          <div className="lg:col-span-6">
            <p className="text-xs tracking-[0.28em] text-brass uppercase">About</p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              nisí means island in Greek.
            </h2>
            <p className="mt-2 font-display text-2xl text-teal">νησί</p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foam/90">
              <p>
                Nisi Greek Taverna opened its doors in 2023 and is a premier, independent lakeside dining destination in the heart of downtown Burlington.
              </p>
              <p>
                We are known for delicious Greek cuisine with a twist. Guests come for the energetic ambiance and the food, with Lake Ontario a block from the corner of Lakeshore and Locust.
              </p>
              <p>We push ourselves to go above and beyond to create unforgettable experiences. We look forward to serving you.</p>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <Stat k="Opened" v="2023" />
              <Stat k="Google" v="4.7" />
              <Stat k="OpenTable" v="4.8" />
            </dl>
          </div>
          <figure className="lg:col-span-6">
            <img
              src="/photos/souvlaki.jpg"
              alt="Chicken souvlaki dinner at Nisi Greek Taverna"
              className="frame-43 w-full rounded-card object-cover"
            />
            <figcaption className="mt-3 text-sm text-mist">Chicken souvlaki, rice, potatoes, tzatziki.</figcaption>
          </figure>
        </section>

        <section className="border-y border-line bg-panel">
          <div className="mx-auto grid max-w-6xl gap-px bg-line sm:grid-cols-3">
            {[
              ["The room", "Black walls, teal velvet and brass-ring mirrors. Casual elegant, built for a long dinner."],
              ["The table", "Mezze, grilled meat and seafood, house dips and a kids’ menu. Gluten-free and vegan plates on request."],
              ["The bar", "Island cocktails, Greek bottles, local taps and a zero-proof list."],
            ].map(([t, d]) => (
              <div key={t} className="bg-panel px-6 py-8">
                <h3 className="font-display text-2xl">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="menu" className="bg-foam text-ink">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs tracking-[0.28em] text-brass-2 uppercase">Menu</p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl">From the kitchen and the bar.</h2>
              </div>
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Menus">
                {MENUS.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    role="tab"
                    aria-selected={m.id === menu.id}
                    onClick={() => setMenuId(m.id)}
                    className={`min-h-12 rounded-full px-5 text-sm font-medium ${
                      m.id === menu.id ? "bg-ink text-foam" : "bg-foam-2 text-ink"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/80">{menu.blurb}</p>
            <p className="mt-2 text-sm text-ink/60">Prices in Canadian dollars. Tax extra. Kitchen notes welcome — ask about gluten-free and vegan plates.</p>
            <MenuSheet menu={menu} />
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-xs tracking-[0.28em] text-brass uppercase">Gallery</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">The room, the plates.</h2>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {GALLERY.map((img, i) => (
              <li key={img.src} className={i === 0 ? "col-span-2 sm:col-span-2" : ""}>
                <button
                  type="button"
                  className="block w-full overflow-hidden rounded-card"
                  onClick={() => setPhoto(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full object-cover ${i === 0 ? "frame-169" : "gallery-tile"}`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section id="visit" className="border-t border-line bg-ink-2">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2">
            <div>
              <p className="text-xs tracking-[0.28em] text-brass uppercase">Visit</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">1455 Lakeshore Road.</h2>
              <p className="mt-4 text-base leading-relaxed text-mist">
                Corner of Lakeshore Road and Locust Street, downtown Burlington. Street parking. The lake is at the end of the block.
              </p>
              <address className="mt-6 space-y-3 text-base not-italic">
                <p>1455 Lakeshore Rd, Burlington, ON L7S 2J1</p>
                <p>
                  <a className="inline-flex min-h-12 items-center text-brass underline decoration-brass/40 underline-offset-4" href={LINKS.phone}>
                    {LINKS.phoneLabel}
                  </a>
                </p>
                <p>
                  <a className="inline-flex min-h-12 items-center underline decoration-foam/30 underline-offset-4" href={LINKS.maps} target="_blank" rel="noreferrer">
                    Open in Google Maps
                  </a>
                </p>
              </address>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {HOURS.map((row) => (
                  <li key={row.day} className="flex min-h-12 items-center justify-between gap-4 text-sm">
                    <span>{row.day}</span>
                    <span className="text-mist">{row.hours}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={LINKS.uber} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-foam px-5 text-sm font-medium text-ink">
                  Order on Uber Eats
                </a>
                <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-line px-5 text-sm">
                  Instagram
                </a>
                <a href={LINKS.tiktok} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-line px-5 text-sm">
                  TikTok
                </a>
              </div>
              <div className="mt-8 overflow-hidden rounded-card border border-line">
                <iframe
                  title="Map of Nisi Greek Taverna, 1455 Lakeshore Road, Burlington"
                  src="https://maps.google.com/maps?q=1455%20Lakeshore%20Rd%2C%20Burlington%2C%20ON%20L7S%202J1&z=16&output=embed"
                  className="h-72 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="space-y-8">
              <ReserveCard />
              <GroupForm />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-line">
          <img src="/photos/bar.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink/80" />
          <div className="relative mx-auto max-w-3xl px-4 py-24 text-center">
            <p className="text-xs tracking-[0.28em] text-brass uppercase">The table is ready</p>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl">Save the lakeside table.</h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-foam/85">
              Parties up to 12 book on OpenTable. Thirteen or more, request the date and hold it with the $200 deposit on the current group form.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={LINKS.reserve} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-teal px-6 font-medium text-foam">
                Book on OpenTable
              </a>
              <a href={LINKS.group} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-foam/40 px-6">
                Parties of 13+
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-4 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nisi Greek Taverna. Burlington, Ontario.</p>
          <p>1455 Lakeshore Rd · {LINKS.phoneLabel}</p>
        </div>
      </footer>

      {photo !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/92 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photo"
        >
          <button type="button" className="absolute inset-0" aria-label="Close photo" onClick={() => setPhoto(null)} />
          <figure className="relative z-10 max-h-[86svh] max-w-5xl">
            <img src={GALLERY[photo].src} alt={GALLERY[photo].alt} className="max-h-[78svh] w-auto max-w-full rounded-card object-contain" />
            <figcaption className="mt-3 text-sm text-mist">{GALLERY[photo].alt}</figcaption>
          </figure>
          <button
            type="button"
            onClick={() => setPhoto(null)}
            className="absolute top-4 right-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-foam text-ink"
          >
            <span className="sr-only">Close</span>
            ×
          </button>
        </div>
      ) : null}
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-t border-line pt-3">
      <dt className="text-xs tracking-widest text-mist uppercase">{k}</dt>
      <dd className="mt-1 font-display text-3xl">{v}</dd>
    </div>
  );
}

function MenuSheet({ menu }: { menu: Menu }) {
  return (
    <div className="mt-10 space-y-12">
      {menu.groups.map((group) => (
        <div key={group.title}>
          <h3 className="font-display text-3xl">{group.title}</h3>
          {group.note ? <p className="mt-1 text-sm text-ink/65">{group.note}</p> : null}
          <ul className="mt-4 divide-y divide-line-soft">
            {group.items.map((dish) => (
              <li key={dish.name + (dish.price ?? "") + (dish.desc ?? "")} className="py-4">
                <DishRow dish={dish} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function DishRow({ dish }: { dish: Dish }) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
      <div className="min-w-0">
        <p className="font-medium">{dish.name}</p>
        {dish.desc ? <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink/70">{dish.desc}</p> : null}
      </div>
      {dish.price ? (
        <p className="shrink-0 font-display text-xl text-teal-2">${dish.price}</p>
      ) : dish.prices ? (
        <ul className="flex shrink-0 flex-wrap gap-x-4 gap-y-1 text-sm">
          {dish.prices.map((p) => (
            <li key={p.label}>
              <span className="text-ink/55">{p.label}</span>{" "}
              <span className="font-display text-lg text-teal-2">${p.price}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function ReserveCard() {
  return (
    <div className="rounded-card border border-line bg-panel p-5 sm:p-6">
      <h3 className="font-display text-3xl">Reserve a table</h3>
      <p className="mt-2 text-sm leading-relaxed text-mist">
        Parties of up to 12 book on OpenTable, the same reservation book the restaurant uses today.
      </p>
      <a
        href={LINKS.reserve}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-teal px-5 font-medium text-foam"
      >
        Book on OpenTable
      </a>
    </div>
  );
}

function GroupForm() {
  const slots = useMemo(() => timeSlots(), []);
  const [sent, setSent] = useState(false);
  const [summary, setSummary] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const party = String(data.get("party") || "");
    const date = String(data.get("date") || "");
    const time = String(data.get("time") || "");
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const notes = String(data.get("notes") || "");
    const text = `${name} · party of ${party} · ${date} at ${time} · ${email} · ${phone}${notes ? ` · ${notes}` : ""}`;
    setSummary(text);
    setSent(true);
    try {
      const prev = JSON.parse(localStorage.getItem("nisi-group-requests") || "[]");
      prev.push({ name, email, phone, party, date, time, notes, at: new Date().toISOString() });
      localStorage.setItem("nisi-group-requests", JSON.stringify(prev.slice(-20)));
    } catch {
      /* ignore quota */
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-card border border-line bg-panel p-5 sm:p-6" noValidate={false}>
      <h3 className="font-display text-3xl">Parties of 13 or more</h3>
      <p className="mt-2 text-sm leading-relaxed text-mist">
        Tell us the size of the party, the date and a time. A $200 deposit holds the date. You’ll complete that deposit on the booking page after you review this request.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field label="Party size" name="party" type="number" min={13} defaultValue={13} required />
        <Field label="Date" name="date" type="date" required />
        <label className="block sm:col-span-2">
          <span className="mb-1 block text-sm">Time</span>
          <select name="time" required className={fieldClass} defaultValue="7:00 p.m.">
            {slots.map((slot) => (
              <option key={slot}>{slot}</option>
            ))}
          </select>
        </label>
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
        <label className="block sm:col-span-2">
          <span className="mb-1 block text-sm">Email</span>
          <input name="email" type="email" required autoComplete="email" className={fieldClass} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1 block text-sm">Notes</span>
          <textarea name="notes" rows={3} className={`${fieldClass} h-auto py-3`} placeholder="Occasion, high chairs, accessibility" />
        </label>
      </div>
      <button type="submit" className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brass px-5 font-medium text-ink">
        Review request
      </button>
      {sent ? (
        <div className="mt-4 rounded-2xl bg-ink px-4 py-4 text-sm leading-relaxed text-foam" role="status">
          <p>Here’s the request: {summary}</p>
          <p className="mt-2 text-mist">
            Noted. Call {LINKS.phoneLabel} if you’d like to speak with someone now, or continue to the booking page to place the $200 deposit and hold the date.
          </p>
          <a href={LINKS.group} target="_blank" rel="noreferrer" className="mt-3 inline-flex min-h-12 items-center text-brass underline underline-offset-4">
            Continue to book the party
          </a>
        </div>
      ) : null}
    </form>
  );
}

const fieldClass =
  "h-12 w-full rounded-xl border border-line bg-ink px-3 text-base text-foam placeholder:text-mist/70";

function Field({
  label,
  name,
  type = "text",
  required,
  min,
  defaultValue,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: number;
  defaultValue?: string | number;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        min={min}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        className={fieldClass}
      />
    </label>
  );
}

function useServiceStatus() {
  const [label, setLabel] = useState<{ open: boolean; detail: string } | null>(null);
  useEffect(() => {
    const read = () => {
      const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Toronto",
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
      }).formatToParts(new Date());
      const grab = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
      const weekday = grab("weekday");
      const hour = Number(grab("hour"));
      const minute = Number(grab("minute"));
      const now = hour * 60 + minute;
      const weekend = weekday === "Fri" || weekday === "Sat";
      const openMin = 11 * 60 + 30;
      const closeMin = weekend ? 23 * 60 : 22 * 60;
      const open = now >= openMin && now < closeMin;
      const closeLabel = weekend ? "11:00 pm" : "10:00 pm";
      setLabel({
        open,
        detail: open ? `Serving until ${closeLabel}` : "Opens daily at 11:30 am",
      });
    };
    read();
    const id = window.setInterval(read, 60_000);
    return () => window.clearInterval(id);
  }, []);
  return label;
}
