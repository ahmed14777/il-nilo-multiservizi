export function scrollToPreventivo() {
  const el = document.getElementById("preventivo");
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
