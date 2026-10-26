const RESERVE_GROUP = "https://www.nisigreek.ca/group-reservations";
const PHONE = "(905) 631-0304";
const burger = document.querySelector(".burger");
const mobile = document.getElementById("mobile-nav");
burger.addEventListener("click", () => {
  const open = burger.getAttribute("aria-expanded") === "true";
  burger.setAttribute("aria-expanded", String(!open));
  burger.querySelector(".sr").textContent = open ? "Open menu" : "Close menu";
  mobile.hidden = open;
});
mobile.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
  burger.setAttribute("aria-expanded", "false");
  mobile.hidden = true;
}));
document.querySelectorAll("[data-tab]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-tab]").forEach((b) => {
      b.classList.toggle("on", b === btn);
      b.setAttribute("aria-selected", b === btn ? "true" : "false");
    });
    document.querySelectorAll("[data-menu]").forEach((sheet) => {
      sheet.hidden = sheet.dataset.menu !== btn.dataset.tab;
    });
  });
});
const dialog = document.getElementById("lightbox");
document.querySelectorAll(".shot").forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = dialog.querySelector("img");
    img.src = btn.dataset.full;
    img.alt = btn.dataset.alt;
    dialog.showModal();
  });
});
document.getElementById("close-photo").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
function status() {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "America/Toronto", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
  const grab = (t) => parts.find((p) => p.type === t)?.value || "";
  const weekend = grab("weekday") === "Fri" || grab("weekday") === "Sat";
  const now = Number(grab("hour")) * 60 + Number(grab("minute"));
  const open = now >= 11 * 60 + 30 && now < (weekend ? 23 * 60 : 22 * 60);
  document.getElementById("status").textContent = (open ? "Open now" : "Closed now") + " · " + (open ? "Serving until " + (weekend ? "11:00 pm" : "10:00 pm") : "Opens daily at 11:30 am");
}
status();
document.getElementById("group-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const summary = [data.get("name"), "party of " + data.get("party"), data.get("date") + " at " + data.get("time"), data.get("email"), data.get("phone"), data.get("notes")].filter(Boolean).join(" · ");
  const out = document.getElementById("group-out");
  out.hidden = false;
  out.innerHTML = "<p>Here’s the request: " + summary.replace(/[&<>]/g, (c) => ({ "&": "\u0026amp;", "<": "\u0026lt;", ">": "\u0026gt;" }[c])) + "</p><p>Call " + PHONE + " if you’d like to speak with someone now, or continue to place the $200 deposit.</p><p><a href='" + RESERVE_GROUP + "' target='_blank' rel='noreferrer'>Continue to book the party</a></p>";
});
