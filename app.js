const CARDS = [
  {
    "q": "Welche Aufgaben übernimmt der Einheitsführer lt. FWDV 3 im\nHilfeleistungseinsatz?",
    "a": "Er führt seine taktische Einheit, ist für die Sicherheit verantwortlich, bestimmt\nFahrzeugaufstellung, Ordnung des Raumes und Standort der Aggregate."
  },
  {
    "q": "Welche Aufgaben übernimmt der Maschinist lt. FWDV 3 im\nHilfeleistungseinsatz?",
    "a": "Er ist Fahrer, bedient die festeingebauten Aggregate, sichert die Einsatzstelle\nmit Warnblinklicht, Fernlicht und Blaulicht und hilft bei der Entnahme von\nGeräten."
  },
  {
    "q": "Welche Aufgaben übernimmt der Melder lt. FWDV 3 im Hilfeleistungseinsatz?",
    "a": "Er übernimmt befohlene Aufgaben z.B. Informationsübertragung,\nLagefeststellung oder Betreuen von Personen."
  },
  {
    "q": "Welche Aufgaben übernimmt der Angriffstrupp lt. FWDV 3 im\nHilfeleistungseinsatz?",
    "a": "Er rettet, führt die Erstversorgung durch und leistet technische Hilfe."
  },
  {
    "q": "Welche Aufgaben übernimmt der Wassertrupp lt. FWDV 3 im\nHilfeleistungseinsatz?",
    "a": "Er sichert auf Befehl die Einsatzstelle gegen weitere Gefahren. Danach steht er\nfür weitere Aufgaben zur Verfügung."
  },
  {
    "q": "Welche Aufgaben übernimmt der Schlauchtrupp lt. FWDV 3 im\nHilfeleistungseinsatz?",
    "a": "Er bereitet die befohlenen Geräte für den AT vor und unterstützt diesen. Er\nbedient die nicht festverbauten Aggregate, leistet technische Hilfe und übernimmt\nauf Befehl andere Aufgaben."
  },
  {
    "q": "Welche Maßnahmen haben im Hilfeleistungseinsatz mit verletzten\nPersonen oberste Priorität?",
    "a": "Sichern der Einsatzstelle und lebensrettende Sofortmaßnahmen."
  },
  {
    "q": "Was versteht man unter dem Begriff „Hilfeleistungseinsatz“?",
    "a": "Der Hilfeleistungseinsatz im Sinne der FwDV 3 umfasst Maßnahmen zur Abwehr\nvon Gefahren für Leben, Gesundheit oder Sachen, die aus Explosion,\nÜberschwemmungen, Unfällen oder ähnlichen Ereignissen entstehen und mit\nden entsprechenden Einsatzmitteln durchgeführt werden. Er schließt\ninsbesondere das Retten ein."
  },
  {
    "q": "In welcher FwDV ist festgelegt, wie eine Gruppe im technischen\nHilfeleistungseinsatz zu arbeiten hat?",
    "a": "FwDV 3"
  },
  {
    "q": "Nach welcher Unfallverhütungsvorschrift wird im Feuerwehrdienst gearbeitet?",
    "a": "DGUV-Vorschrift 49 Feuerwehren"
  },
  {
    "q": "Darf von den Bestimmungen der Unfallverhütungsvorschrift abgewichen\nwerden?",
    "a": "Ja, nur zur Menschenrettung."
  },
  {
    "q": "Wann hat das Befreien einer eingeklemmten Person\nhöhere Priorität als die medizinische Erstversorgung?",
    "a": "Bei Feuer, Explosionsgefahr, toxische Gase, Atemstillstand, Herz-\nKreislaufstillstand"
  },
  {
    "q": "Welche Ausrüstungsgegenstände nimmt der Angriffstrupp im\nHilfeleistungseinsatz vor?",
    "a": "Erste Hilferucksack, Glaskoffer, Brechstange"
  },
  {
    "q": "Was versteht man nach der FwDV 3 unter dem Begriff „Absperrbereich“?",
    "a": "Der Absperrbereich ist der unmittelbar an den Arbeitsbereich angrenzende Teil\nder Einsatzstelle. Er ist die Aufstellungs-, Bewegungs- und\nBereitstellungsfläche für Einsatzkräfte und Einsatzmittel."
  },
  {
    "q": "Welche Sicherungsaufgaben im Hilfeleistungseinsatz werden durch den\nWassertrupp ohne besonderen Befehl vorgenommen?",
    "a": "- sichern gegen den fließenden Verkehr\n- sichern gegen Verrutschen, Wegrollen und Nachsacken auf Grund\nunkontrollierter Bewegungen von Lasten\n- sichern gegen Brandgefahr\n- sichern gegen herabfallenden Teilen\n- sichern gegen Dunkelheit\n- sichern gegen das Auslaufen von Betriebsstoffen"
  },
  {
    "q": "Muss außerhalb von geschlossenen Ortschaften auf Straßen mit Gegenverkehr\ndie Einsatzstelle nur auf der betroffenen Seite gesichert werden?",
    "a": "Nein auf Straßen mit Gegenverkehr muss immer nach beiden Seiten gesichert\nwerden."
  },
  {
    "q": "In welchen Temperaturbereich fühlen sich Hochvoltenergiespeicher\nvon Elektroautos am wohlsten?",
    "a": "20° - 40° C"
  },
  {
    "q": "Wieviel Liter Wasser sollten mindesten bei Unfällen mit\nElektroautos an der Einsatzstelle zur Verfügung stehen?",
    "a": "10.000 Liter"
  },
  {
    "q": "Wie ist das Verhältnis bei der HLW zwischen Herzdruckmassage und\nBeatmung?",
    "a": "30 x Herzdruckmassagen zu 2 x Beatmen"
  },
  {
    "q": "Welche Erkennungsmerkmale bei einer geschädigten Person\ndeuten auf einen Schock hin?",
    "a": " flacher Puls\n kaltschweißige Haut\n Unruhe"
  },
  {
    "q": "Wann ist bei geschädigten Personen die stabile Seitenlage anzuwenden?",
    "a": "Bei Bewusstlosigkeit"
  },
  {
    "q": "Wieviel Meter nach DGUV 205-010 muss vor der Unfallstelle die erste\nWarnmarkierung auf Autobahnen stehen?",
    "a": "800m"
  },
  {
    "q": "Wer ist befugt Abweichungen von der „persönlichen\nSchutzausrüstung“ im Hilfeleistungseinsatz zu befehlen?",
    "a": "Einheitsführer"
  },
  {
    "q": "Darf die Feuerwehr grundsätzlich Maßnahmen zur Verkehrslenkung\ndurchführen?",
    "a": "nein"
  },
  {
    "q": "Was sagt bei der Nutzung des Statusmeldesystems im Digitalfunk der „Status\n3“ aus?",
    "a": "Das Fahrzeug hat den Einsatzauftrag übernommen und ist auf dem Weg zum\nEinsatzort."
  },
  {
    "q": "Warum muss der Hochvoltenergiespeicher bei E-Autos vor dem\nAbtransport mindestens 30 Minuten lang überwacht und\ndokumentiert werden?",
    "a": "Erst wenn die Temperatur des Hochvoltenergiespeichers in den letzten 30\nMinuten gefallen oder gleichgeblieben ist, kann das Fahrzeug freigegeben\nwerden."
  },
  {
    "q": "In welchen Zeitabständen sind die Feuerwehrangehörigen nach § 8\nder UVV- Feuerwehren (DGUV-Vorschrift 49) über die Gefahren im\nFeuerwehrdienst sowie über die Maßnahmen zur Verhütung von\nUnfällen zu unterweisen?",
    "a": "Regelmäßig, jedoch mindesten einmal jährlich"
  },
  {
    "q": "Was bedeutet im Rahmen der hydraulisch betätigten\nRettungsgeräte die Bezeichnung AS?",
    "a": "Spreizer mit mind. 20KN Spreizkraft, 600mm Spreizweite,\n12KN Zugkraft, 360mm Zugweg"
  },
  {
    "q": "Was bedeutet im Rahmen der hydraulisch betätigten\nRettungsgeräte die Bezeichnung AC?",
    "a": "Schneidgerät „Cutter“ mit einer Schneidgeräteöffnung weniger als 150mm."
  },
  {
    "q": "Wie hoch ist der Arbeitsdruck von hydraulisch betätigten\nRettungsgeräten die im Rahmen der „Technischen\nHilfeleistung“ zum Einsatz kommen?",
    "a": "Unbegrenzt"
  }
];

const STORAGE_KEY = "th-ln-fragenkomplex-1-v1";
let state = {
  current: 0,
  mode: "all",
  order: CARDS.map((_, i) => i),
  results: {}
};

let deferredPrompt = null;

function $(id) {
  return document.getElementById(id);
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    state = {
      current: Number.isInteger(saved.current) ? saved.current : 0,
      mode: saved.mode || "all",
      order: Array.isArray(saved.order) ? saved.order : CARDS.map((_, i) => i),
      results: saved.results || {}
    };
  } catch (e) {
    state = { current: 0, mode: "all", order: CARDS.map((_, i) => i), results: {} };
  }
}

function resultOf(index) {
  return state.results[String(index)] || "";
}

function stack() {
  let arr = state.order.slice();

  if (state.mode === "review") {
    arr = arr.filter(i => resultOf(i) === "unsure" || resultOf(i) === "wrong");
  }

  if (state.mode === "wrong") {
    arr = arr.filter(i => resultOf(i) === "wrong");
  }

  if (arr.length === 0) {
    alert("In diesem Stapel sind aktuell keine Karten. Es werden wieder alle Fragen angezeigt.");
    state.mode = "all";
    arr = state.order.slice();
  }

  return arr;
}

function currentCardIndex() {
  const s = stack();
  if (!s.includes(state.current)) state.current = s[0];
  return state.current;
}

function statusText(value) {
  if (value === "known") return "Gewusst";
  if (value === "unsure") return "Gewusst, aber unsicher";
  if (value === "wrong") return "Falsch";
  return "Noch nicht bewertet";
}

function counts() {
  let known = 0, unsure = 0, wrong = 0;
  CARDS.forEach((_, i) => {
    const r = resultOf(i);
    if (r === "known") known++;
    if (r === "unsure") unsure++;
    if (r === "wrong") wrong++;
  });
  return { known, unsure, wrong };
}

function setMode(mode) {
  state.mode = mode;
  const s = stack();
  state.current = s[0];
  save();
  render();
}

function move(delta) {
  const s = stack();
  const pos = s.indexOf(currentCardIndex());
  let next = pos + delta;
  if (next < 0) next = s.length - 1;
  if (next >= s.length) next = 0;
  state.current = s[next];
  $("answer").classList.add("hidden");
  $("showAnswer").textContent = "Antwort zeigen";
  save();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function mark(value) {
  state.results[String(currentCardIndex())] = value;
  save();
  move(1);
}

function shuffle() {
  const arr = state.order.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  state.order = arr;
  state.current = stack()[0];
  save();
  render();
}

function renderJump() {
  const grid = $("jumpGrid");
  grid.innerHTML = "";
  CARDS.forEach((_, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = String(i + 1);
    const r = resultOf(i);
    btn.className = r ? r : "";
    if (i === currentCardIndex()) btn.classList.add("active");
    btn.addEventListener("click", () => {
      state.mode = "all";
      state.current = i;
      $("answer").classList.add("hidden");
      $("showAnswer").textContent = "Antwort zeigen";
      save();
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    grid.appendChild(btn);
  });
}

function render() {
  const s = stack();
  const index = currentCardIndex();
  const card = CARDS[index];
  const pos = s.indexOf(index) + 1;
  const r = resultOf(index);
  const c = counts();

  $("question").textContent = card.q;
  $("answer").textContent = card.a;
  $("cardNumber").textContent = `Karte ${pos} / ${s.length}`;
  $("cardStatus").textContent = statusText(r);

  $("knownCount").textContent = c.known;
  $("unsureCount").textContent = c.unsure;
  $("wrongCount").textContent = c.wrong;
  $("stackCount").textContent = s.length;

  const percent = Math.round((c.known / CARDS.length) * 100);
  $("progressBar").style.width = `${percent}%`;

  $("modeAll").classList.toggle("primary", state.mode === "all");
  $("modeReview").classList.toggle("primary", state.mode === "review");
  $("modeWrong").classList.toggle("primary", state.mode === "wrong");

  ["markKnown", "markUnsure", "markWrong"].forEach(id => $(id).classList.remove("active"));
  if (r === "known") $("markKnown").classList.add("active");
  if (r === "unsure") $("markUnsure").classList.add("active");
  if (r === "wrong") $("markWrong").classList.add("active");

  renderJump();
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  }
}

function setupInstallPrompt() {
  const box = $("installBox");
  const btn = $("installBtn");
  box.classList.remove("hidden");

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    btn.classList.remove("hidden");
  });

  btn.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    btn.classList.add("hidden");
  });
}

function init() {
  load();

  $("modeAll").addEventListener("click", () => setMode("all"));
  $("modeReview").addEventListener("click", () => setMode("review"));
  $("modeWrong").addEventListener("click", () => setMode("wrong"));

  $("showAnswer").addEventListener("click", () => {
    const answer = $("answer");
    const hidden = answer.classList.toggle("hidden");
    $("showAnswer").textContent = hidden ? "Antwort zeigen" : "Antwort ausblenden";
  });

  $("prev").addEventListener("click", () => move(-1));
  $("next").addEventListener("click", () => move(1));
  $("markKnown").addEventListener("click", () => mark("known"));
  $("markUnsure").addEventListener("click", () => mark("unsure"));
  $("markWrong").addEventListener("click", () => mark("wrong"));

  $("shuffle").addEventListener("click", shuffle);
  $("reset").addEventListener("click", () => {
    if (confirm("Fortschritt wirklich löschen?")) {
      state.results = {};
      state.mode = "all";
      state.current = 0;
      state.order = CARDS.map((_, i) => i);
      localStorage.removeItem(STORAGE_KEY);
      render();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") move(1);
    if (e.key === "ArrowLeft") move(-1);
    if (e.key === " ") {
      e.preventDefault();
      $("showAnswer").click();
    }
    if (e.key.toLowerCase() === "g") mark("known");
    if (e.key.toLowerCase() === "u") mark("unsure");
    if (e.key.toLowerCase() === "f") mark("wrong");
  });

  render();
  registerServiceWorker();
  setupInstallPrompt();
}

document.addEventListener("DOMContentLoaded", init);
