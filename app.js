const strings = [
  { note: "E", stringNumber: 6, midi: 40, frequency: 82.41 },
  { note: "A", stringNumber: 5, midi: 45, frequency: 110.00 },
  { note: "D", stringNumber: 4, midi: 50, frequency: 146.83 },
  { note: "G", stringNumber: 3, midi: 55, frequency: 196.00 },
  { note: "B", stringNumber: 2, midi: 59, frequency: 246.94 },
  { note: "E", stringNumber: 1, midi: 64, frequency: 329.63 }
];
const sharpNames = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"];
const frenchNames = { C: "Do", D: "Ré", E: "Mi", F: "Fa", G: "Sol", A: "La", B: "Si" };
const enharmonics = {
  "C♯": "D♭", "D♯": "E♭", "F♯": "G♭", "G♯": "A♭", "A♯": "B♭"
};
const chordQualities = [
  { suffix: "", name: "majeur", group: "triad", tones: [0, 4, 7], essential: [0, 4, 7] },
  { suffix: "m", name: "mineur", group: "triad", tones: [0, 3, 7], essential: [0, 3, 7] },
  { suffix: "dim", name: "diminué", group: "triad", tones: [0, 3, 6], essential: [0, 3, 6] },
  { suffix: "aug", name: "augmenté", group: "triad", tones: [0, 4, 8], essential: [0, 4, 8] },
  { suffix: "sus2", name: "suspendu deuxième", group: "triad", tones: [0, 2, 7], essential: [0, 2, 7] },
  { suffix: "sus4", name: "suspendu quatrième", group: "triad", tones: [0, 5, 7], essential: [0, 5, 7] },
  { suffix: "6", name: "sixte", group: "extension", tones: [0, 4, 7, 9], essential: [0, 4, 9] },
  { suffix: "m6", name: "mineur sixte", group: "extension", tones: [0, 3, 7, 9], essential: [0, 3, 9] },
  { suffix: "add9", name: "ajout de neuvième", group: "extension", tones: [0, 2, 4, 7], essential: [0, 2, 4] },
  { suffix: "madd9", name: "mineur ajouté neuvième", group: "extension", tones: [0, 2, 3, 7], essential: [0, 2, 3] },
  { suffix: "7", name: "septième", group: "seventh", tones: [0, 4, 7, 10], essential: [0, 4, 10] },
  { suffix: "maj7", name: "majeur septième", group: "seventh", tones: [0, 4, 7, 11], essential: [0, 4, 11] },
  { suffix: "m7", name: "mineur septième", group: "seventh", tones: [0, 3, 7, 10], essential: [0, 3, 10] },
  { suffix: "mMaj7", name: "mineur majeur septième", group: "seventh", tones: [0, 3, 7, 11], essential: [0, 3, 11] },
  { suffix: "dim7", name: "diminué septième", group: "seventh", tones: [0, 3, 6, 9], essential: [0, 3, 6, 9] },
  { suffix: "m7♭5", search: ["m7b5", "ø"], name: "demi-diminué", group: "seventh", tones: [0, 3, 6, 10], essential: [0, 3, 10] },
  { suffix: "7sus4", name: "septième suspendu quatrième", group: "seventh", tones: [0, 5, 7, 10], essential: [0, 5, 10] },
  { suffix: "9", name: "neuvième", group: "extension", tones: [0, 2, 4, 7, 10], essential: [0, 2, 4, 10] },
  { suffix: "maj9", name: "majeur neuvième", group: "extension", tones: [0, 2, 4, 7, 11], essential: [0, 2, 4, 11] },
  { suffix: "m9", name: "mineur neuvième", group: "extension", tones: [0, 2, 3, 7, 10], essential: [0, 2, 3, 10] },
  { suffix: "7♭9", search: ["7b9"], name: "septième neuvième bémol", group: "altered", tones: [0, 1, 4, 7, 10], essential: [0, 1, 4, 10] },
  { suffix: "7♯9", search: ["7#9"], name: "septième neuvième dièse", group: "altered", tones: [0, 3, 4, 7, 10], essential: [0, 3, 4, 10] },
  { suffix: "11", name: "onzième", group: "extension", tones: [0, 2, 4, 5, 7, 10], essential: [0, 2, 4, 5, 10] },
  { suffix: "m11", name: "mineur onzième", group: "extension", tones: [0, 2, 3, 5, 7, 10], essential: [0, 2, 3, 5, 10] },
  { suffix: "maj11", name: "majeur onzième", group: "extension", tones: [0, 2, 4, 5, 7, 11], essential: [0, 2, 4, 5, 11] },
  { suffix: "7♯11", search: ["7#11"], name: "septième onzième dièse", group: "altered", tones: [0, 4, 6, 7, 10], essential: [0, 4, 6, 10] },
  { suffix: "13", name: "treizième", group: "extension", tones: [0, 2, 4, 5, 7, 9, 10], essential: [0, 2, 4, 9, 10] },
  { suffix: "maj13", name: "majeur treizième", group: "extension", tones: [0, 2, 4, 5, 7, 9, 11], essential: [0, 2, 4, 9, 11] },
  { suffix: "m13", name: "mineur treizième", group: "extension", tones: [0, 2, 3, 5, 7, 9, 10], essential: [0, 2, 3, 9, 10] },
  { suffix: "7♭13", search: ["13b", "13♭", "7b13", "b13"], name: "septième treizième bémol", group: "altered", tones: [0, 4, 7, 8, 10], essential: [0, 4, 8, 10] },
  { suffix: "7♭5", search: ["7b5"], name: "septième quinte bémol", group: "altered", tones: [0, 4, 6, 10], essential: [0, 4, 6, 10] },
  { suffix: "7♯5", search: ["7#5"], name: "septième quinte dièse", group: "altered", tones: [0, 4, 8, 10], essential: [0, 4, 8, 10] },
  { suffix: "13sus4", name: "treizième suspendu quatrième", group: "extension", tones: [0, 2, 5, 7, 9, 10], essential: [0, 2, 5, 9, 10] }
];
const chordRoots = [
  { midi: 0, label: "C", french: "Do", aliases: ["B♯"] },
  { midi: 1, label: "C♯", french: "Do dièse", aliases: ["D♭"] },
  { midi: 2, label: "D", french: "Ré", aliases: [] },
  { midi: 3, label: "E♭", french: "Mi bémol", aliases: ["D♯", "Ré dièse"] },
  { midi: 4, label: "E", french: "Mi", aliases: ["F♭"] },
  { midi: 5, label: "F", french: "Fa", aliases: ["E♯"] },
  { midi: 6, label: "F♯", french: "Fa dièse", aliases: ["G♭"] },
  { midi: 7, label: "G", french: "Sol", aliases: [] },
  { midi: 8, label: "A♭", french: "La bémol", aliases: ["G♯"] },
  { midi: 9, label: "A", french: "La", aliases: [] },
  { midi: 10, label: "B♭", french: "Si bémol", aliases: ["A♯"] },
  { midi: 11, label: "B", french: "Si", aliases: ["C♭"] }
];
const chords = chordRoots.flatMap(root => chordQualities.map(quality => ({
  label: `${root.label}${quality.suffix}`,
  name: `${root.french} ${quality.name}`,
  suffix: quality.suffix,
  group: quality.group,
  root: root.midi,
  tones: quality.tones,
  essential: quality.essential,
  searchTerms: [
    ...root.aliases.map(alias => `${alias}${quality.suffix}`),
    ...(quality.search || []).map(alias => `${root.label}${alias}`)
  ]
})));
const openChordTemplates = [
  { label: "E", voicing: [0, 2, 2, 1, 0, 0] },
  { label: "Em", voicing: [0, 2, 2, 0, 0, 0] },
  { label: "A", voicing: [null, 0, 2, 2, 2, 0] },
  { label: "Am", voicing: [null, 0, 2, 2, 1, 0] },
  { label: "D", voicing: [null, null, 0, 2, 3, 2] },
  { label: "Dm", voicing: [null, null, 0, 2, 3, 1] },
  { label: "C", voicing: [null, 3, 2, 0, 1, 0] },
  { label: "G", voicing: [3, 2, 0, 0, 0, 3] }
];
const openSeventhTemplates = [
  { label: "C7", voicing: [null, 3, 2, 3, 1, 0] },
  { label: "A7", voicing: [null, 0, 2, 0, 2, 0] },
  { label: "D7", voicing: [null, null, 0, 2, 1, 2] },
  { label: "E7", voicing: [0, 2, 0, 1, 0, 0] },
  { label: "G7", voicing: [3, 2, 0, 0, 0, 1] },
  { label: "B7", voicing: [null, 2, 1, 2, 0, 2] }
];
const openMaj7Templates = [
  { label: "Cmaj7", voicing: [null, 3, 2, 0, 0, 0] },
  { label: "Amaj7", voicing: [null, 0, 2, 1, 2, 0] },
  { label: "Dmaj7", voicing: [null, null, 0, 2, 2, 2], barre: { fret: 2, from: 3, to: 5, hideDots: true } },
  { label: "Emaj7", voicing: [0, 2, 1, 1, 0, 0] },
  { label: "Fmaj7", voicing: [null, null, 3, 2, 1, 0] },
  { label: "Gmaj7", voicing: [3, 2, 0, 0, 0, 2] }
];
const openM7Templates = [
  { label: "Am7", voicing: [null, 0, 2, 0, 1, 0] },
  { label: "Dm7", voicing: [null, null, 0, 2, 1, 1], barre: { fret: 1, from: 4, to: 5, hideDots: true } },
  { label: "Em7", voicing: [0, 2, 0, 0, 0, 0] },
  { label: "Bm7", voicing: [null, 2, 0, 2, 0, 2] }
];
const barreMajorMinorTemplates = [
  { label: "F", title: "Forme majeure", string: "E6", voicing: [1, 3, 3, 2, 1, 1], caption: "Forme mobile", positionLabel: "Forme majeure mobile, fondamentale sur E6", barre: { fret: 1, from: 0, to: 5 }, bassString: 0 },
  { label: "Fm", title: "Forme mineure", string: "E6", voicing: [1, 3, 3, 1, 1, 1], caption: "Forme mobile", positionLabel: "Forme mineure mobile, fondamentale sur E6", barre: { fret: 1, from: 0, to: 5 }, bassString: 0 },
  { label: "B♭", title: "Forme majeure", string: "A5", voicing: [null, 1, 3, 3, 3, 1], caption: "Forme mobile", positionLabel: "Forme majeure mobile, fondamentale sur A5", barre: { fret: 1, from: 1, to: 5 }, bassString: 1 },
  { label: "B♭m", title: "Forme mineure", string: "A5", voicing: [null, 1, 3, 3, 2, 1], caption: "Forme mobile", positionLabel: "Forme mineure mobile, fondamentale sur A5", barre: { fret: 1, from: 1, to: 5 }, bassString: 1 }
];
const barreSeventhTemplates = [
  { label: "F7", title: "Forme de 7e", string: "E6", voicing: [1, 3, 1, 2, 1, 1], caption: "Forme mobile", positionLabel: "Forme de 7e mobile, fondamentale sur E6", barre: { fret: 1, from: 0, to: 5 }, bassString: 0 },
  { label: "B♭7", title: "Forme de 7e", string: "A5", voicing: [null, 1, 3, 1, 3, 1], caption: "Forme mobile", positionLabel: "Forme de 7e mobile, fondamentale sur A5", barre: { fret: 1, from: 1, to: 5 }, bassString: 1 }
];
const barreMaj7M7Templates = [
  { label: "Fmaj7", title: "Forme maj7", string: "E6", voicing: [1, 3, 2, 2, 1, 1], caption: "Forme mobile", positionLabel: "Forme maj7 mobile, fondamentale sur E6", barre: { fret: 1, from: 0, to: 5 }, bassString: 0 },
  { label: "Fm7", title: "Forme m7", string: "E6", voicing: [1, 3, 1, 1, 1, 1], caption: "Forme mobile", positionLabel: "Forme m7 mobile, fondamentale sur E6", barre: { fret: 1, from: 0, to: 5 }, bassString: 0 },
  { label: "B♭maj7", title: "Forme maj7", string: "A5", voicing: [null, 1, 3, 2, 3, 1], caption: "Forme mobile", positionLabel: "Forme maj7 mobile, fondamentale sur A5", barre: { fret: 1, from: 1, to: 5 }, bassString: 1 },
  { label: "B♭m7", title: "Forme m7", string: "A5", voicing: [null, 1, 3, 1, 2, 1], caption: "Forme mobile", positionLabel: "Forme m7 mobile, fondamentale sur A5", barre: { fret: 1, from: 1, to: 5 }, bassString: 1 }
];
const explanationMinorMajorSeventhTemplates = [
  { label: "FmMaj7", voicing: [1, 3, 2, 1, 1, 1], barre: { fret: 1, from: 0, to: 5 }, bassString: 0 },
  { label: "B♭mMaj7", voicing: [null, 1, 3, 2, 2, 1], barre: { fret: 1, from: 1, to: 5 }, bassString: 1 }
];
const noteDisplay = document.querySelector("#note");
const frequencyDisplay = document.querySelector("#frequency");
const statusDisplay = document.querySelector("#status");
const needleGroup = document.querySelector("#needle-group");
const needleHead = document.querySelector("#needle-head");
const button = document.querySelector("#toggle");
const hintDisplay = document.querySelector("#hint");
const tuningModeButtons = [...document.querySelectorAll("#chromatic-mode, #guitar-mode")];
const languageButtons = [...document.querySelectorAll("#english-language, #french-language")];
const ticksDisplay = document.querySelector("#ticks");
const homePanel = document.querySelector("#home-panel");
const homeReturn = document.querySelector("#home-return");
const appPanels = [document.querySelector("#tuner-panel"), document.querySelector("#chords-panel"), document.querySelector("#explanation-panel")];
const positionTabs = [...document.querySelectorAll(".position-tab")];
const positionPanels = [
  document.querySelector("#open-positions-panel"),
  document.querySelector("#barre-positions-panel")
];
const openChordGrid = document.querySelector("#open-chord-grid");
const openSeventhGrid = document.querySelector("#open-seventh-grid");
const openMaj7Grid = document.querySelector("#open-maj7-grid");
const openM7Grid = document.querySelector("#open-m7-grid");
const barreE6MajorMinorGrid = document.querySelector("#barre-e6-major-minor-grid");
const barreA5MajorMinorGrid = document.querySelector("#barre-a5-major-minor-grid");
const barreE6SeventhGrid = document.querySelector("#barre-e6-seventh-grid");
const barreA5SeventhGrid = document.querySelector("#barre-a5-seventh-grid");
const barreE6Maj7Grid = document.querySelector("#barre-e6-maj7-grid");
const barreA5Maj7Grid = document.querySelector("#barre-a5-maj7-grid");
const barreE6M7Grid = document.querySelector("#barre-e6-m7-grid");
const barreA5M7Grid = document.querySelector("#barre-a5-m7-grid");
const openQualityTabs = [
  document.querySelector("#open-major-minor-tab"),
  document.querySelector("#open-seventh-tab"),
  document.querySelector("#open-maj7-tab"),
  document.querySelector("#open-m7-tab")
];
const openQualityPanels = [
  document.querySelector("#open-major-minor-panel"),
  document.querySelector("#open-seventh-panel"),
  document.querySelector("#open-maj7-panel"),
  document.querySelector("#open-m7-panel")
];
const barreQualityTabs = [
  document.querySelector("#barre-major-minor-tab"),
  document.querySelector("#barre-seventh-tab"),
  document.querySelector("#barre-maj7-tab"),
  document.querySelector("#barre-m7-tab")
];
const barreQualityPanels = [
  document.querySelector("#barre-major-minor-panel"),
  document.querySelector("#barre-seventh-panel"),
  document.querySelector("#barre-maj7-panel"),
  document.querySelector("#barre-m7-panel")
];
const chordDialog = document.querySelector("#chord-dialog");
const expandedChord = document.querySelector("#expanded-chord");
const closeChordDialog = document.querySelector("#close-chord-dialog");
const intervalModes = [...document.querySelectorAll("#show-intervals, #dialog-show-intervals")];
const chordSearch = document.querySelector("#chord-search");
const chordSuggestions = document.querySelector("#chord-suggestions");
const chordSuggestionButtons = document.querySelector("#chord-suggestion-buttons");
const chordSearchResults = document.querySelector("#chord-search-results");
const chordSearchStatus = document.querySelector("#chord-search-status");
const chordSearchGrid = document.querySelector("#chord-search-grid");
const chordBrowse = document.querySelector("#chord-browse");
const colorblindModes = [...document.querySelectorAll("#colorblind-mode, #explanation-colorblind-mode, #dialog-colorblind-mode")];
const explanationTabs = [...document.querySelectorAll(".explanation-tab")];
const explanationFamilies = [...document.querySelectorAll(".explanation-family")];
const explanationQualities = [...document.querySelectorAll(".explanation-quality")];
const explanationSelections = { "major-minor": "", seventh: "maj7", open: "" };
const explanationQualityLabels = { "": "majeure", m: "mineure", "7": "7", maj7: "maj7", m7: "m7", mMaj7: "m7M" };
const explanationOpenMinorMajorSeventhTemplates = [
  { label: "EmMaj7", voicing: [0, 2, 1, 0, 0, 0] },
  { label: "AmMaj7", voicing: [null, 0, 2, 1, 1, 0] },
  { label: "DmMaj7", voicing: [null, null, 0, 2, 2, 1] }
];
const explanationOpenTemplates = [
  ...openChordTemplates, ...openSeventhTemplates, ...openMaj7Templates.filter(template => template.label !== "Fmaj7"),
  ...openM7Templates, ...explanationOpenMinorMajorSeventhTemplates
];
const explanationOpenQualityOrder = ["", "m", "7", "maj7", "m7", "mMaj7"];
const explanationOpenRoots = document.querySelector("#explanation-open-roots");
const explanationOpenQualities = document.querySelector("#explanation-open-qualities");
let explanationOpenRoot = "E";
let mode = "guitar";
let language = "english";
let audioContext;
let analyser;
let stream;
let frameId;
let buffer;
let lastAnalysis = 0;
let latestPitch = null;

function drawTicks() {
  const svgNamespace = "http://www.w3.org/2000/svg";
  for (let index = 0; index <= 20; index++) {
    const x = 40 + index * 16;
    const major = index % 2 === 0;
    const tick = document.createElementNS(svgNamespace, "line");
    tick.setAttribute("x1", String(x));
    tick.setAttribute("y1", String(major ? 13 : 20));
    tick.setAttribute("x2", String(x));
    tick.setAttribute("y2", "30");
    tick.setAttribute("class", `meter-tick ${major ? "major" : "minor"}`);
    ticksDisplay.appendChild(tick);
  }
}

function setMode(nextMode) {
  mode = nextMode;
  document.querySelectorAll("#chromatic-mode, #guitar-mode").forEach(modeButton => {
    modeButton.setAttribute("aria-pressed", String(modeButton.id === `${mode}-mode`));
  });
  hintDisplay.textContent = mode === "chromatic"
    ? "Mode chromatique : affiche la note entendue en dièse et en bémol. Micro requis : rapproche l’instrument et joue une note à la fois."
    : "Mode guitare : affiche E6, A5, D4, G3, B2 ou E1. Micro requis : rapproche l’instrument et joue une corde à vide à la fois.";
  if (latestPitch !== null) showPitch(latestPitch);
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  languageButtons.forEach(languageButton => {
    languageButton.setAttribute("aria-pressed", String(languageButton.id === `${language}-language`));
  });
  if (latestPitch !== null) showPitch(latestPitch);
}

function formatNote(note) {
  if (language === "english") return note;
  const match = note.match(/^([A-G])([♯♭]?)$/);
  return match ? `${frenchNames[match[1]]}${match[2]}` : note;
}

function selectTool(selectedPanel) {
  homePanel.hidden = true;
  homeReturn.hidden = false;
  if (selectedPanel.id === "explanation-panel") {
    selectQualityTab(explanationTabs, explanationFamilies, explanationTabs[0]);
  }
  appPanels.forEach(panel => {
    panel.hidden = panel !== selectedPanel;
  });
  if (selectedPanel.id !== "tuner-panel" && stream) stopTuner();
}

function showHome() {
  if (stream) stopTuner();
  appPanels.forEach(panel => { panel.hidden = true; });
  homeReturn.hidden = true;
  homePanel.hidden = false;
}

function selectPositionTab(selectedTab) {
  positionTabs.forEach(tab => {
    const selected = tab === selectedTab;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  positionPanels.forEach(panel => {
    panel.hidden = panel.id !== selectedTab.getAttribute("aria-controls");
  });
}

function createSvgElement(tag, attributes) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, String(value)));
  return element;
}

function normalizeSearchText(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/♭/g, "b").replace(/♯/g, "#").replace(/\s+/g, "").toLowerCase();
}

function findPitchClass(noteName) {
  const normalized = normalizeSearchText(noteName);
  const root = chordRoots.find(candidate => [candidate.label, ...candidate.aliases]
    .some(alias => normalizeSearchText(alias) === normalized));
  return root ? root.midi : null;
}

function noteNameForPitch(pitch, useFrench) {
  const root = chordRoots.find(candidate => candidate.midi === pitch);
  return useFrench ? root.french : root.label;
}

function parseChordQuery(rawQuery) {
  const query = normalizeSearchText(rawQuery);
  const slashIndex = query.indexOf("/");
  if (slashIndex === -1) return { query, hasBass: false, baseQuery: query, bass: null };
  return {
    query,
    hasBass: true,
    baseQuery: query.slice(0, slashIndex),
    bass: findPitchClass(query.slice(slashIndex + 1))
  };
}

function positionStartFret(voicing) {
  const fretted = voicing.filter(fret => fret > 0);
  if (fretted.length === 0 || Math.max(...fretted) <= 4) return 1;
  return Math.min(...fretted);
}

function voicingBand(voicing) {
  const fretted = voicing.filter(fret => fret > 0);
  const lowestFret = fretted.length ? Math.min(...fretted) : 0;
  if (lowestFret <= 4 && voicing.includes(0)) return "open";
  if (lowestFret <= 4) return "low";
  if (lowestFret <= 8) return "middle";
  return "high";
}

function voicingScore(voicing) {
  const openStrings = voicing.filter(fret => fret === 0).length;
  const mutedStrings = voicing.filter(fret => fret === null).length;
  const fretted = voicing.filter(fret => fret > 0);
  const span = fretted.length ? Math.max(...fretted) - Math.min(...fretted) : 0;
  return openStrings * 5 + (6 - mutedStrings) * 1.5 - span * 0.8;
}

function findVoicings(chord, bassPitchClass) {
  const openNotes = strings.map(string => string.midi);
  const chordTones = new Set(chord.tones.map(interval => (chord.root + interval) % 12));
  const essentialTones = chord.essential.map(interval => (chord.root + interval) % 12);
  const choices = openNotes.map(openNote => {
    const options = [{ fret: null, pitchClass: null }];
    for (let fret = 0; fret <= 12; fret++) {
      const pitchClass = (openNote + fret) % 12;
      if (chordTones.has(pitchClass)) options.push({ fret, pitchClass });
    }
    return options;
  });
  const voicings = [];
  const current = [];

  function visit(string, soundingStrings, presentTones, lowestFret, highestFret) {
    if (string === choices.length) {
      const fingeredFrets = new Set(current.filter(fret => fret > 0));
      const bassMidi = Math.min(...current.map((fret, index) =>
        fret === null ? Infinity : openNotes[index] + fret));
      if (soundingStrings >= 3 && fingeredFrets.size <= 4
        && bassMidi % 12 === bassPitchClass
        && essentialTones.every(tone => presentTones.has(tone))) {
        voicings.push(current.slice());
      }
      return;
    }

    choices[string].forEach(option => {
      current.push(option.fret);
      if (option.fret === null) {
        visit(string + 1, soundingStrings, presentTones, lowestFret, highestFret);
      } else {
        const fretted = option.fret > 0;
        const nextLowest = fretted ? Math.min(lowestFret, option.fret) : lowestFret;
        const nextHighest = fretted ? Math.max(highestFret, option.fret) : highestFret;
        if (nextHighest - nextLowest <= 4) {
          const nextTones = new Set(presentTones);
          nextTones.add(option.pitchClass);
          visit(string + 1, soundingStrings + 1, nextTones, nextLowest, nextHighest);
        }
      }
      current.pop();
    });
  }

  visit(0, 0, new Set(), Infinity, 0);
  const ranked = voicings.sort((first, second) => {
    const scoreDifference = voicingScore(second) - voicingScore(first);
    if (scoreDifference !== 0) return scoreDifference;
    return first.reduce((sum, fret) => sum + (fret || 0), 0)
      - second.reduce((sum, fret) => sum + (fret || 0), 0);
  });
  const selected = [];
  const selectedKeys = new Set();
  ["open", "low", "middle", "high"].forEach(band => {
    ranked.filter(voicing => voicingBand(voicing) === band).slice(0, 2).forEach(voicing => {
      selected.push(voicing);
      selectedKeys.add(voicing.join(","));
    });
  });
  ranked.forEach(voicing => {
    if (selected.length >= 8) return;
    const key = voicing.join(",");
    if (!selectedKeys.has(key)) {
      selected.push(voicing);
      selectedKeys.add(key);
    }
  });
  return selected;
}

function chordIntervalClass(chord, stringIndex, fret) {
  const pitchClass = (strings[stringIndex].midi + fret) % 12;
  const interval = (pitchClass - chord.root + 12) % 12;
  if (interval === 0) return "interval-fundamental";
  if (interval === 3 || interval === 4) return "interval-third";
  if (interval === 7) return "interval-fifth";
  if (interval === 10 || interval === 11) return "interval-seventh";
  return "interval-other";
}

function createIntervalShape(intervalClass, x, y, open = false, scale = 1) {
  const shapeClass = `diagram-shape ${open ? "diagram-open-shape" : ""} ${intervalClass}`;
  if (intervalClass === "interval-third") {
    return createSvgElement("rect", {
      x: x - 4.5 * scale, y: y - 4.5 * scale, width: 9 * scale, height: 9 * scale, class: shapeClass, "aria-hidden": "true"
    });
  }
  if (intervalClass === "interval-fifth") {
    return createSvgElement("polygon", {
      points: `${x},${y - 5.5 * scale} ${x + 5.5 * scale},${y + 4.5 * scale} ${x - 5.5 * scale},${y + 4.5 * scale}`,
      class: shapeClass,
      "aria-hidden": "true"
    });
  }
  if (intervalClass === "interval-seventh") {
    return createSvgElement("polygon", {
      points: `${x},${y - 5.5 * scale} ${x + 5.5 * scale},${y} ${x},${y + 5.5 * scale} ${x - 5.5 * scale},${y}`,
      class: shapeClass,
      "aria-hidden": "true"
    });
  }
  return createSvgElement("circle", {
    cx: x, cy: y, r: 5.5 * scale, class: shapeClass, "aria-hidden": "true"
  });
}

function createChordDiagram(chord, voicing, chordLabel, positionLabel, barre = null, bassString = null, changedStrings = [], showBarreFret = false, intervalScale = 1) {
  const svg = createSvgElement("svg", {
    class: "chord-diagram",
    viewBox: showBarreFret ? "-16 0 140 146" : "0 0 124 146",
    role: "img",
    "aria-label": `${positionLabel} de ${chordLabel}, case ${showBarreFret ? barre.fret : positionStartFret(voicing)}`
  });
  const xPosition = index => 12 + index * 20;
  const firstFret = positionStartFret(voicing);
  for (let line = 0; line <= 5; line++) {
    const y = 22 + line * 18;
    svg.appendChild(createSvgElement("line", {
      x1: 12, y1: y, x2: 112, y2: y,
      class: line === 0 && firstFret === 1 ? "diagram-nut" : "diagram-line"
    }));
  }
  if (showBarreFret) {
    const fretLabel = createSvgElement("text", {
      x: 2, y: 25 + (barre.fret - firstFret + 0.5) * 18,
      "text-anchor": "end", class: "diagram-fret-label"
    });
    fretLabel.textContent = String(barre.fret);
    svg.appendChild(fretLabel);
  } else if (firstFret > 1) {
    const fretLabel = createSvgElement("text", {
      x: 2, y: 34, "text-anchor": "start", class: "diagram-string-label"
    });
    fretLabel.textContent = String(firstFret);
    svg.appendChild(fretLabel);
  }

  if (barre) {
    const y = 22 + (barre.fret - firstFret + 0.5) * 18;
    svg.appendChild(createSvgElement("line", {
      x1: xPosition(barre.from),
      y1: y,
      x2: xPosition(barre.to),
      y2: y,
      class: "diagram-barre",
      "aria-hidden": "true"
    }));
  }

  for (let string = 0; string < 6; string++) {
    const x = xPosition(string);
    svg.appendChild(createSvgElement("line", {
      x1: x, y1: 22, x2: x, y2: 112, class: "diagram-line"
    }));
    const fret = voicing[string];
    if (fret === null || fret === 0) {
      const intervalClass = fret === 0 ? chordIntervalClass(chord, string, fret) : "";
      const marker = createSvgElement("text", {
        x, y: 15, "text-anchor": "middle",
        class: fret === null
          ? "diagram-muted"
          : `diagram-open ${intervalClass}${changedStrings.includes(string) ? " diagram-changed" : ""}`
      });
      marker.textContent = fret === null ? "×" : "○";
      svg.appendChild(marker);
      if (fret === 0) {
        const shape = createIntervalShape(intervalClass, x, 15, true, intervalScale);
        if (changedStrings.includes(string)) shape.classList.add("diagram-changed");
        svg.appendChild(shape);
      }
    } else {
      const intervalClass = chordIntervalClass(chord, string, fret);
      const y = 22 + (fret - firstFret + 0.5) * 18;
      svg.appendChild(createSvgElement("circle", {
        cx: x,
        cy: y,
        r: 5.5 * intervalScale,
        class: `diagram-dot ${intervalClass}${barre && barre.hideDots && fret === barre.fret && string >= barre.from && string <= barre.to ? " diagram-barre-note" : ""}${changedStrings.includes(string) ? " diagram-changed" : ""}`
      }));
      const shape = createIntervalShape(intervalClass, x, y, false, intervalScale);
      if (changedStrings.includes(string)) shape.classList.add("diagram-changed");
      svg.appendChild(shape);
    }
    const stringLabel = createSvgElement("text", {
      x, y: 131, "text-anchor": "middle", class: "diagram-string-label"
    });
    stringLabel.textContent = ["E", "A", "D", "G", "B", "E"][string];
    svg.appendChild(stringLabel);
  }
  if (bassString !== null) {
    const fret = voicing[bassString];
    svg.appendChild(createSvgElement("circle", {
      cx: xPosition(bassString),
      cy: 22 + (fret - firstFret + 0.5) * 18,
      r: 7 * intervalScale,
      class: "diagram-bass",
      "aria-hidden": "true"
    }));
  }
  return svg;
}

function addDiagramIntervalLabels(diagram, chord, voicing, changedStrings = [], explanation = false) {
  const intervalLabels = {
    "interval-fundamental": "F",
    "interval-third": "3",
    "interval-fifth": "5",
    "interval-seventh": "7"
  };
  const intervalQualities = { 3: "m", 4: "M", 10: "m", 11: "M" };
  const firstFret = positionStartFret(voicing);
  voicing.forEach((fret, index) => {
    if (fret === null) return;
    const x = 12 + index * 20;
    const y = fret === 0 ? 15 : 22 + (fret - firstFret + 0.5) * 18;
    const intervalClass = chordIntervalClass(chord, index, fret);
    if (fret === 0) {
      const marker = createSvgElement("circle", {
        cx: x, cy: y, r: explanation ? 6.6 : 5.5,
        class: `${explanation ? "diagram-open" : "diagram-labeled-open"} ${intervalClass}${changedStrings.includes(index) ? " diagram-changed" : ""}`,
        "aria-hidden": "true"
      });
      if (explanation) diagram.querySelector(`.diagram-open[x="${x}"]`).replaceWith(marker);
      else diagram.appendChild(marker);
    }
    const label = createSvgElement("text", {
      x, y, "text-anchor": "middle", "dominant-baseline": "central",
      class: `diagram-interval-label${fret === 0 ? " diagram-open-label" : ""}`,
      "aria-hidden": "true"
    });
    label.textContent = intervalLabels[intervalClass];
    const interval = (strings[index].midi + fret - chord.root + 12) % 12;
    if (intervalQualities[interval]) {
      const quality = createSvgElement("tspan", { class: "diagram-interval-quality", dy: "-1.7" });
      quality.textContent = intervalQualities[interval];
      label.appendChild(quality);
    }
    diagram.appendChild(label);
  });
}

function renderChordTemplates(grid, templates) {
  templates.forEach(template => {
    const chord = chords.find(candidate => candidate.label === template.label);
    renderChordCard(grid, chord, [{
      voicing: template.voicing,
      caption: template.caption || "Position ouverte",
      positionLabel: template.positionLabel || "Position ouverte",
      barre: template.barre || null,
      bassString: template.bassString === undefined ? null : template.bassString
    }], template.title || chord.label, template.title ? "" : chord.name);
  });
}

function renderChordCard(grid, chord, positions, displayTitle = chord.label, displayDescription = chord.name) {
  const card = document.createElement("article");
  card.className = "chord-card";
  card.setAttribute("role", "button");
  card.setAttribute("aria-haspopup", "dialog");
  card.setAttribute("aria-label", displayTitle === chord.label
    ? `Agrandir l’accord ${displayTitle}`
    : `Agrandir ${displayTitle.toLowerCase()}`);
  card.tabIndex = 0;
  const title = document.createElement("h3");
  title.className = "chord-title";
  title.textContent = displayTitle;
  const description = document.createElement("p");
  description.className = "chord-description";
  description.textContent = displayDescription;
  const intervals = createChordIntervals(chord);
  const positionsGrid = document.createElement("div");
  positionsGrid.className = "positions-grid";
  positions.forEach(position => {
    const item = document.createElement("div");
    item.className = "voicing-item";
    const caption = document.createElement("div");
    caption.className = "voicing-caption";
    caption.textContent = position.caption;
    const diagram = createChordDiagram(
      chord,
      position.voicing,
      displayTitle,
      position.positionLabel,
      position.barre,
      position.bassString,
      [],
      position.showBarreFret
    );
    addDiagramIntervalLabels(diagram, chord, position.voicing);
    item.append(caption, diagram);
    positionsGrid.appendChild(item);
  });
  card.append(title, description, intervals, positionsGrid);
  const enlarge = () => {
    const enlargedCard = card.cloneNode(true);
    enlargedCard.removeAttribute("role");
    enlargedCard.removeAttribute("aria-haspopup");
    enlargedCard.removeAttribute("aria-label");
    enlargedCard.removeAttribute("tabindex");
    expandedChord.replaceChildren(enlargedCard);
    chordDialog.setAttribute("aria-label", `${displayTitle} agrandi`);
    chordDialog.showModal();
  };
  card.addEventListener("click", enlarge);
  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      enlarge();
    }
  });
  grid.appendChild(card);
}

function createChordIntervals(chord) {
  const formulas = {
    "": [["F", "", "", "fundamental"], ["3", "ce", "M", "third"], ["5", "te", "J", "fifth"]],
    m: [["F", "", "", "fundamental"], ["3", "ce", "m", "third"], ["5", "te", "J", "fifth"]],
    "7": [["F", "", "", "fundamental"], ["3", "ce", "M", "third"], ["5", "te", "J", "fifth"], ["7", "ème", "m", "seventh"]],
    maj7: [["F", "", "", "fundamental"], ["3", "ce", "M", "third"], ["5", "te", "J", "fifth"], ["7", "ème", "M", "seventh"]],
    m7: [["F", "", "", "fundamental"], ["3", "ce", "m", "third"], ["5", "te", "J", "fifth"], ["7", "ème", "m", "seventh"]],
    mMaj7: [["F", "", "", "fundamental"], ["3", "ce", "m", "third"], ["5", "te", "J", "fifth"], ["7", "ème", "M", "seventh"]]
  };
  const paragraph = document.createElement("p");
  paragraph.className = "chord-intervals";
  formulas[chord.suffix].forEach(([degree, ordinal, quality, intervalType], index) => {
    if (index > 0) paragraph.appendChild(document.createTextNode(" "));
    const interval = document.createElement("span");
    interval.className = `interval-${intervalType}`;
    interval.appendChild(document.createTextNode(degree));
    if (ordinal) {
      const superscript = document.createElement("sup");
      superscript.textContent = ordinal;
      interval.appendChild(superscript);
    }
    if (quality) interval.appendChild(document.createTextNode(quality));
    paragraph.appendChild(interval);
  });
  return paragraph;
}

function renderOpenChords() {
  openChordGrid.replaceChildren();
  openSeventhGrid.replaceChildren();
  openMaj7Grid.replaceChildren();
  openM7Grid.replaceChildren();
  barreE6MajorMinorGrid.replaceChildren();
  barreA5MajorMinorGrid.replaceChildren();
  barreE6SeventhGrid.replaceChildren();
  barreA5SeventhGrid.replaceChildren();
  barreE6Maj7Grid.replaceChildren();
  barreA5Maj7Grid.replaceChildren();
  barreE6M7Grid.replaceChildren();
  barreA5M7Grid.replaceChildren();
  renderChordTemplates(openChordGrid, openChordTemplates);
  renderChordTemplates(openSeventhGrid, openSeventhTemplates);
  renderChordTemplates(openMaj7Grid, openMaj7Templates);
  renderChordTemplates(openM7Grid, openM7Templates);
  renderChordTemplates(barreE6MajorMinorGrid, barreMajorMinorTemplates.filter(template => template.string === "E6"));
  renderChordTemplates(barreA5MajorMinorGrid, barreMajorMinorTemplates.filter(template => template.string === "A5"));
  renderChordTemplates(barreE6SeventhGrid, barreSeventhTemplates.filter(template => template.string === "E6"));
  renderChordTemplates(barreA5SeventhGrid, barreSeventhTemplates.filter(template => template.string === "A5"));
  renderChordTemplates(barreE6Maj7Grid, barreMaj7M7Templates.filter(template => template.string === "E6" && template.label.endsWith("maj7")));
  renderChordTemplates(barreA5Maj7Grid, barreMaj7M7Templates.filter(template => template.string === "A5" && template.label.endsWith("maj7")));
  renderChordTemplates(barreE6M7Grid, barreMaj7M7Templates.filter(template => template.string === "E6" && !template.label.endsWith("maj7")));
  renderChordTemplates(barreA5M7Grid, barreMaj7M7Templates.filter(template => template.string === "A5" && !template.label.endsWith("maj7")));
}

function renderChordSearch() {
  const query = normalizeSearchText(chordSearch.value);
  chordBrowse.hidden = Boolean(query);
  chordSearchResults.hidden = !query;
  chordSearchGrid.replaceChildren();
  chordSuggestionButtons.replaceChildren();
  chordSuggestions.hidden = true;
  if (!query) {
    chordSearchStatus.textContent = "";
    return;
  }
  const supportedQualities = ["", "m", "7", "maj7", "m7"];
  const rootPitch = findPitchClass(query);
  const matchingChords = chords.filter(candidate => supportedQualities.includes(candidate.suffix)
    && (rootPitch !== null ? candidate.root === rootPitch
      : [candidate.label, candidate.name, ...candidate.searchTerms].some(term => normalizeSearchText(term).startsWith(query))));
  chordSuggestions.hidden = matchingChords.length === 0;
  matchingChords.forEach(candidate => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quality-tab";
    button.textContent = candidate.label;
    button.addEventListener("click", () => {
      chordSearch.value = candidate.label;
      renderChordSearch();
      chordSearch.focus();
    });
    chordSuggestionButtons.appendChild(button);
  });
  const chord = matchingChords.find(candidate =>
    [candidate.label, candidate.name, ...candidate.searchTerms].some(term => normalizeSearchText(term) === query));
  if (!chord) {
    chordSearchStatus.textContent = matchingChords.length
      ? "Choisissez un accord proposé ou poursuivez votre saisie."
      : "Aucun accord trouvé. Essayez par exemple D7, F#m ou B♭maj7.";
    return;
  }
  const openTemplates = [...openChordTemplates, ...openSeventhTemplates, ...openMaj7Templates, ...openM7Templates];
  const open = openTemplates.find(template => template.label === chord.label);
  chordSearchStatus.textContent = open
    ? `Positions disponibles pour ${chord.label}.`
    : `Aucune position ouverte de ${chord.label} dans le dictionnaire.`;
  if (open) {
    renderChordCard(chordSearchGrid, chord, [{
      voicing: open.voicing, barre: open.barre || null, bassString: null,
      caption: "Position ouverte", positionLabel: "Position ouverte"
    }], `${chord.label} · Position ouverte`, chord.name);
  }
  const templates = [...barreMajorMinorTemplates, ...barreSeventhTemplates, ...barreMaj7M7Templates];
  ["E6", "A5"].forEach(string => {
    const root = string === "E6" ? "F" : "B♭";
    const template = templates.find(item => item.label === `${root}${chord.suffix}`);
    const fret = (chord.root - strings[template.bassString].midi % 12 + 12) % 12 || 12;
    const offset = fret - 1;
    const caption = `Barré · corde ${string} · case ${fret}`;
    renderChordCard(chordSearchGrid, chord, [{
      voicing: template.voicing.map(value => value === null ? null : value + offset),
      barre: { ...template.barre, fret }, bassString: template.bassString,
      caption, positionLabel: caption, showBarreFret: true
    }], `${chord.label} · ${caption}`, chord.name);
  });
}

function explanationTemplate(string, quality) {
  const root = string === "E6" ? "F" : "B♭";
  return [...barreMajorMinorTemplates, ...barreSeventhTemplates, ...barreMaj7M7Templates, ...explanationMinorMajorSeventhTemplates].find(template => template.label === `${root}${quality}`);
}

function explanationOpenTemplate(quality) {
  return explanationOpenTemplates.find(template => template.label === `${explanationOpenRoot}${quality}`);
}

function explanationFretY(fret) {
  return fret === 0 ? 15 : 22 + (fret - 0.5) * 18;
}

function renderExplanationVoice(voice, explanationQuality, previousQuality) {
  const family = voice.closest(".explanation-family");
  const isOpen = family.dataset.family === "open";
  const explanationString = voice.dataset.string;
  const findTemplate = quality => isOpen ? explanationOpenTemplate(quality) : explanationTemplate(explanationString, quality);
  const template = findTemplate(explanationQuality);
  const chord = chords.find(candidate => candidate.label === template.label);
  const previous = previousQuality === null ? null : findTemplate(previousQuality);
  const changedStrings = previous
    ? template.voicing.flatMap((fret, index) => fret !== previous.voicing[index] ? [index] : [])
    : [];
  const qualityLabel = explanationQualityLabels[explanationQuality];
  const diagram = createChordDiagram(
    chord, template.voicing, isOpen ? `l’accord ouvert ${template.label}` : `forme ${qualityLabel} sur corde ${explanationString}`, "Diagramme", template.barre, template.bassString, changedStrings, false, 1.2
  );
  diagram.setAttribute("role", "group");
  diagram.setAttribute("tabindex", "0");
  diagram.setAttribute("aria-label", `${diagram.getAttribute("aria-label")}. Appuyez sur Entrée pour agrandir.`);
  diagram.addEventListener("click", event => {
    if (!event.target.closest(".diagram-alternative")) openExplanationDialog(voice);
  });
  diagram.addEventListener("keydown", event => {
    if (event.target !== diagram || (event.key !== "Enter" && event.key !== " ")) return;
    event.preventDefault();
    openExplanationDialog(voice);
  });
  const changes = changedStrings.map(index => {
    const oldFret = previous.voicing[index];
    const newFret = template.voicing[index];
    const x = 12 + index * 20;
    const oldY = explanationFretY(oldFret);
    const newY = explanationFretY(newFret);
    const direction = newFret < oldFret ? -1 : 1;
    diagram.appendChild(createSvgElement("path", {
      d: `M ${x + 8} ${oldY} V ${newY} M ${x + 6} ${newY - direction * 3} L ${x + 8} ${newY} L ${x + 10} ${newY - direction * 3}`,
      class: "diagram-movement", "aria-hidden": "true"
    }));
    const intervalAt = fret => (strings[index].midi + fret - chord.root + 12) % 12;
    const oldInterval = intervalAt(oldFret);
    const newInterval = intervalAt(newFret);
    const names = { 0: "octave", 3: "tierce mineure", 4: "tierce majeure", 7: "quinte", 10: "septième mineure", 11: "septième majeure" };
    const source = oldInterval === 0 ? "L’octave" : `La ${names[oldInterval]}`;
    if (isOpen) {
      const destination = newInterval === 0 ? "l’octave" : `la ${names[newInterval]}`;
      const distance = Math.abs(newFret - oldFret);
      const distanceLabel = distance === 1 ? "d’une case" : `de ${distance} cases`;
      return `${source} ${direction < 0 ? "descend" : "monte"} ${distanceLabel} et devient ${destination} (corde ${strings[index].note}${strings[index].stringNumber}${newFret === 0 ? ", à vide" : ""}).`;
    }
    const destination = newInterval === 0 ? "l’octave"
      : oldInterval === 0 ? `une ${names[newInterval]}`
        : newInterval === 3 || newInterval === 10 ? "mineure" : "majeure";
    const distance = Math.abs(newFret - oldFret);
    const distanceLabel = distance === 1 ? "d’une case" : `de ${distance} cases`;
    return `${source} ${direction < 0 ? "descend" : "monte"} ${distanceLabel} et devient ${destination} (corde ${strings[index].note}${strings[index].stringNumber}).`;
  });
  const qualities = isOpen ? explanationOpenQualityOrder.filter(quality => findTemplate(quality))
    : family.dataset.family === "major-minor" ? ["", "m"] : ["maj7", "7", "m7", "mMaj7", "", "m"];
  const alternatives = new Map();
  qualities.filter(quality => quality !== explanationQuality).forEach(quality => {
    const alternative = findTemplate(quality);
    const differences = alternative.voicing.flatMap((fret, index) => fret !== template.voicing[index] ? [index] : []);
    differences.forEach(index => {
      const currentFret = template.voicing[index];
      const alternativeFret = alternative.voicing[index];
      if (currentFret === null || alternativeFret === null) return;
      const distance = Math.abs(alternativeFret - currentFret);
      const intervals = [currentFret, alternativeFret].map(fret => (strings[index].midi + fret - chord.root + 12) % 12);
      const minorSeventhToOctave = family.dataset.family === "seventh" && differences.length === 1
        && distance === 2 && intervals.includes(10) && intervals.includes(0);
      if (isOpen ? differences.length !== 1 : distance !== 1 && !minorSeventhToOctave) return;
      const key = `${index}:${alternative.voicing[index]}`;
      if (!alternatives.has(key)) alternatives.set(key, { index, fret: alternative.voicing[index], target: null });
      if (differences.length === 1) alternatives.get(key).target = quality;
    });
  });
  alternatives.forEach(({ index, fret, target }) => {
    const x = 12 + index * 20;
    const y = explanationFretY(fret);
    const circle = createSvgElement("circle", {
      cx: x, cy: y, r: 6.5,
      class: `diagram-previous${target === null ? " diagram-unavailable" : ""}`,
      "aria-hidden": "true"
    });
    if (target === null) {
      diagram.appendChild(circle);
      return;
    }
    const intervalClass = chordIntervalClass(chord, index, template.voicing[index]);
    const interval = intervalClass === "interval-third" ? "la tierce" : intervalClass === "interval-fundamental" ? "l’octave"
      : intervalClass === "interval-fifth" ? "la quinte" : "la septième";
    const control = createSvgElement("g", {
      class: "diagram-alternative",
      role: "button",
      tabindex: "0",
      "data-target-quality": target,
      "aria-label": isOpen
        ? `Changer ${interval} : accord ${explanationOpenRoot}${target}, corde ${strings[index].note}${strings[index].stringNumber}`
        : `Changer ${interval} : forme ${explanationQualityLabels[target]}, corde ${explanationString}`
    });
    control.append(circle, createSvgElement("circle", { cx: x, cy: y, r: 8, class: "diagram-hit-area", "aria-hidden": "true" }));
    control.addEventListener("keydown", event => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      setExplanationQuality(family, target);
      const reverse = [...voice.querySelectorAll(".diagram-alternative")]
        .find(item => item.dataset.targetQuality === explanationQuality);
      if (reverse) reverse.focus();
    });
    let start = null;
    const diagramPoint = event => {
      const point = diagram.createSVGPoint();
      point.x = event.clientX;
      point.y = event.clientY;
      return point.matrixTransform(diagram.getScreenCTM().inverse());
    };
    control.addEventListener("pointerdown", event => {
      if (event.button !== 0) return;
      event.preventDefault();
      start = { x: event.clientX, y: event.clientY, point: diagramPoint(event) };
      control.setPointerCapture(event.pointerId);
    });
    control.addEventListener("pointermove", event => {
      if (!start) return;
      const point = diagramPoint(event);
      control.setAttribute("transform", `translate(${point.x - start.point.x} ${point.y - start.point.y})`);
    });
    control.addEventListener("pointerup", event => {
      if (!start) return;
      const distance = Math.hypot(event.clientX - start.x, event.clientY - start.y);
      const end = diagramPoint(event);
      const currentY = explanationFretY(template.voicing[index]);
      start = null;
      if (distance < 8 || Math.hypot(end.x - x, end.y - currentY) <= 10) {
        setExplanationQuality(family, target);
      } else {
        control.removeAttribute("transform");
      }
    });
    control.addEventListener("pointercancel", () => {
      start = null;
      control.removeAttribute("transform");
    });
    diagram.appendChild(control);
  });
  addDiagramIntervalLabels(diagram, chord, template.voicing, changedStrings, true);
  voice.querySelector(".explanation-diagram").replaceChildren(diagram);
  voice.querySelector(".chord-title").textContent = isOpen ? `Accord ${template.label}` : `Forme ${qualityLabel} · corde ${explanationString}`;
  voice.querySelector(".explanation-intervals").replaceChildren(createChordIntervals(chord));
  voice.querySelectorAll(".explanation-dialog-quality").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.quality === explanationQuality));
  });
  voice.querySelector(".explanation-change").textContent = changes.length
    ? changes.join(" ")
    : isOpen && qualities.length === 1
      ? "Aucune autre forme ouverte de cette fondamentale dans le dictionnaire."
      : "Choisissez une autre forme pour comparer les positions.";
}

function renderExplanation(family, previousQuality = null) {
  family.querySelectorAll(".explanation-voice").forEach(voice => {
    renderExplanationVoice(voice, explanationSelections[family.dataset.family], previousQuality);
  });
}

function openExplanationDialog(voice) {
  const dialog = voice.querySelector(".explanation-dialog");
  if (dialog.open) return;
  const family = voice.closest(".explanation-family");
  const title = voice.querySelector(".chord-title");
  const diagram = voice.querySelector(".explanation-diagram");
  const intervals = voice.querySelector(".explanation-intervals");
  const change = voice.querySelector(".explanation-change");
  const qualities = dialog.querySelector(".explanation-dialog-qualities");
  dialog.querySelector(".explanation-dialog-controls input").checked =
    document.querySelector("#explanation-colorblind-mode").checked;
  qualities.replaceChildren();
  family.querySelectorAll(".explanation-quality").forEach(source => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quality-tab explanation-dialog-quality";
    button.dataset.quality = source.dataset.quality;
    button.textContent = source.textContent;
    button.setAttribute("aria-pressed", source.getAttribute("aria-pressed"));
    button.addEventListener("click", () => source.click());
    qualities.appendChild(button);
  });
  dialog.append(title, qualities, diagram, intervals, change);
  dialog.showModal();
}

function initializeExplanationDialogs() {
  document.querySelectorAll(".explanation-voice").forEach((voice, index) => {
    const content = [...voice.children];
    const title = voice.querySelector(".chord-title");
    title.id = `explanation-expanded-title-${index}`;
    const dialog = document.createElement("dialog");
    dialog.className = "chord-dialog explanation-dialog";
    dialog.setAttribute("aria-labelledby", title.id);
    const close = document.createElement("button");
    close.type = "button";
    close.className = "dialog-close";
    close.textContent = "Fermer";
    const colorblindControls = document.querySelector("#explanation-panel .interval-controls").cloneNode(true);
    colorblindControls.classList.add("explanation-dialog-controls");
    const colorblindInput = colorblindControls.querySelector("input");
    colorblindInput.removeAttribute("id");
    colorblindInput.addEventListener("change", () => {
      const original = document.querySelector("#explanation-colorblind-mode");
      original.checked = colorblindInput.checked;
      original.dispatchEvent(new Event("change", { bubbles: true }));
    });
    const qualities = document.createElement("div");
    qualities.className = "quality-tabs explanation-dialog-qualities";
    qualities.setAttribute("role", "group");
    qualities.setAttribute("aria-label", "Forme d’accord");
    close.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", event => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        event.preventDefault();
        dialog.close();
      }
    });
    dialog.addEventListener("close", () => {
      content.forEach(element => voice.insertBefore(element, dialog));
      voice.querySelector(".chord-diagram").focus();
    });
    dialog.append(close, colorblindControls, qualities);
    voice.appendChild(dialog);
  });
}

function setExplanationQuality(family, quality) {
  const familyName = family.dataset.family;
  const previousQuality = explanationSelections[familyName];
  if (quality === previousQuality) return;
  explanationSelections[familyName] = quality;
  family.querySelectorAll(".explanation-quality").forEach(item => {
    item.setAttribute("aria-pressed", String(item.dataset.quality === quality));
  });
  renderExplanation(family, previousQuality);
}

function selectExplanationOpenRoot(root) {
  explanationOpenRoot = root;
  const family = document.querySelector("#explanation-open-panel");
  explanationOpenRoots.querySelectorAll("button").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.root === root));
  });
  explanationOpenQualities.replaceChildren();
  const qualities = explanationOpenQualityOrder.filter(quality => explanationOpenTemplate(quality));
  explanationSelections.open = qualities[0];
  qualities.forEach(quality => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quality-tab explanation-quality";
    button.dataset.quality = quality;
    button.setAttribute("aria-pressed", String(quality === explanationSelections.open));
    button.textContent = `${root}${quality}`;
    button.addEventListener("click", () => setExplanationQuality(family, quality));
    explanationOpenQualities.appendChild(button);
  });
  renderExplanation(family);
}

function initializeExplanationOpen() {
  const roots = new Set(explanationOpenTemplates.map(template => {
    const chord = chords.find(candidate => candidate.label === template.label);
    return chordRoots.find(root => root.midi === chord.root).label;
  }));
  roots.forEach(root => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quality-tab";
    button.dataset.root = root;
    button.textContent = root;
    button.addEventListener("click", () => selectExplanationOpenRoot(root));
    explanationOpenRoots.appendChild(button);
  });
  selectExplanationOpenRoot(explanationOpenRoot);
}

function selectQualityTab(tabs, panels, selectedTab) {
  tabs.forEach(tab => {
    const selected = tab === selectedTab;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  panels.forEach(panel => {
    panel.hidden = panel.id !== selectedTab.getAttribute("aria-controls");
  });
}

function bindQualityTabs(tabs, panels) {
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectQualityTab(tabs, panels, tab));
    tab.addEventListener("keydown", event => {
      let nextIndex = index;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") nextIndex = (index + tabs.length - 1) % tabs.length;
      else if (event.key === "Home") nextIndex = 0;
      else if (event.key === "End") nextIndex = tabs.length - 1;
      else return;
      event.preventDefault();
      tabs[nextIndex].focus();
      selectQualityTab(tabs, panels, tabs[nextIndex]);
    });
  });
}

function detectPitch(samples, sampleRate) {
  let mean = 0;
  for (let i = 0; i < samples.length; i++) mean += samples[i];
  mean /= samples.length;

  let energy = 0;
  for (let i = 0; i < samples.length; i++) {
    const centeredSample = samples[i] - mean;
    energy += centeredSample * centeredSample;
  }
  const rms = Math.sqrt(energy / samples.length);
  const hasSignal = rms >= 0.0008;
  if (!hasSignal) return { pitch: null, hasSignal };

  const minFrequency = mode === "chromatic" ? 1000 : 370;
  const maxFrequency = mode === "chromatic" ? 55 : 75;
  const minLag = Math.max(2, Math.floor(sampleRate / minFrequency));
  const maxLag = Math.min(Math.floor(sampleRate / maxFrequency), Math.floor(samples.length / 2));
  const windowSize = samples.length - maxLag;
  const difference = new Float64Array(maxLag + 1);
  for (let lag = minLag; lag <= maxLag; lag++) {
    let sum = 0;
    for (let i = 0; i < windowSize; i++) {
      const delta = samples[i] - samples[i + lag];
      sum += delta * delta;
    }
    difference[lag] = sum;
  }

  const normalizedDifference = new Float64Array(maxLag + 1);
  let cumulativeDifference = 0;
  for (let lag = minLag; lag <= maxLag; lag++) {
    cumulativeDifference += difference[lag];
    normalizedDifference[lag] = cumulativeDifference
      ? difference[lag] * (lag - minLag + 1) / cumulativeDifference
      : 1;
  }

  let bestLag = 0;
  for (let lag = minLag; lag <= maxLag; lag++) {
    if (normalizedDifference[lag] < 0.15) {
      while (lag < maxLag && normalizedDifference[lag + 1] < normalizedDifference[lag]) lag++;
      bestLag = lag;
      break;
    }
  }
  if (!bestLag) return { pitch: null, hasSignal };

  const previous = normalizedDifference[bestLag - 1];
  const current = normalizedDifference[bestLag];
  const next = normalizedDifference[bestLag + 1];
  const denominator = previous - 2 * current + next;
  const adjustment = denominator
    ? 0.5 * (previous - next) / denominator
    : 0;
  const pitch = sampleRate / (bestLag + adjustment);
  return { pitch: Number.isFinite(pitch) ? pitch : null, hasSignal };
}

function showPitch(pitch) {
  const midi = 69 + 12 * Math.log2(pitch / 440);
  const nearestMidi = Math.round(midi);
  let cents;
  let activeString = null;

  if (mode === "guitar") {
    activeString = strings.reduce((closest, string) => {
      const stringCents = 1200 * Math.log2(pitch / string.frequency);
      return Math.abs(stringCents) < Math.abs(1200 * Math.log2(pitch / closest.frequency))
        ? string
        : closest;
    }, strings[0]);
    cents = Math.round(1200 * Math.log2(pitch / activeString.frequency));
    const stringName = language === "english" ? activeString.note : frenchNames[activeString.note];
    noteDisplay.textContent = `${stringName}${activeString.stringNumber}`;
  } else {
    cents = Math.round((midi - nearestMidi) * 100);
    const sharpName = sharpNames[(nearestMidi % 12 + 12) % 12];
    const noteName = enharmonics[sharpName]
      ? `${formatNote(sharpName)} / ${formatNote(enharmonics[sharpName])}`
      : formatNote(sharpName);
    noteDisplay.textContent = noteName;
  }

  const deviation = Math.max(-50, Math.min(50, cents));
  const position = deviation * 3.2;
  const inTune = Math.abs(cents) <= 5;
  const signedCents = cents > 0 ? `+${cents}` : String(cents);
  frequencyDisplay.textContent = `${pitch.toFixed(1)} Hz · ${signedCents} cents`;
  statusDisplay.textContent = inTune
    ? "Parfaitement accordée"
    : cents < 0 ? "Trop grave — tends légèrement" : "Trop aiguë — détends légèrement";
  statusDisplay.classList.toggle("in-tune", inTune);
  needleGroup.setAttribute("transform", `translate(${position} 0)`);
  needleGroup.setAttribute("opacity", "1");
  const cursorColor = inTune ? "#357858" : "#a7463d";
  document.querySelector(".needle").style.stroke = cursorColor;
  needleHead.style.fill = cursorColor;
}

function update() {
  if (performance.now() - lastAnalysis >= 75) {
    analyser.getFloatTimeDomainData(buffer);
    const detection = detectPitch(buffer, audioContext.sampleRate);
    const pitch = detection.pitch;
    if (pitch && Number.isFinite(pitch)) {
      latestPitch = pitch;
      showPitch(pitch);
    } else {
      latestPitch = null;
      noteDisplay.textContent = "--";
      frequencyDisplay.textContent = detection.hasSignal
        ? "Signal reçu, recherche de note…"
        : "Joue une note pour commencer";
      statusDisplay.textContent = detection.hasSignal
        ? "Signal détecté — joue une seule corde"
        : "Aucun signal audio — vérifie l’entrée micro";
      statusDisplay.classList.remove("in-tune");
      needleGroup.setAttribute("transform", "translate(0 0)");
      needleGroup.setAttribute("opacity", "0");
    }
    lastAnalysis = performance.now();
  }
  frameId = requestAnimationFrame(update);
}

async function startTuner() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    statusDisplay.textContent = "Le micro nécessite une connexion sécurisée (HTTPS ou localhost).";
    return;
  }
  button.disabled = true;
  statusDisplay.textContent = "Demande d’accès au micro…";
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false }
    });
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    await audioContext.resume();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 4096;
    analyser.smoothingTimeConstant = 0;
    audioContext.createMediaStreamSource(stream).connect(analyser);
    buffer = new Float32Array(analyser.fftSize);
    lastAnalysis = 0;
    button.textContent = "Désactiver le micro";
    button.disabled = false;
    update();
  } catch (error) {
    if (stream) stream.getTracks().forEach(track => track.stop());
    if (audioContext) audioContext.close();
    stream = null;
    audioContext = null;
    statusDisplay.textContent = error.name === "NotAllowedError"
      ? "Accès au micro refusé. Autorise-le dans les réglages du navigateur."
      : "Impossible d’accéder au micro. Vérifie qu’il est disponible.";
    button.disabled = false;
  }
}

function stopTuner() {
  cancelAnimationFrame(frameId);
  if (stream) stream.getTracks().forEach(track => track.stop());
  if (audioContext) audioContext.close();
  stream = null;
  audioContext = null;
  latestPitch = null;
  button.textContent = "Activer le micro";
  noteDisplay.textContent = "--";
  frequencyDisplay.textContent = "Joue une note pour commencer";
  statusDisplay.textContent = "Prêt à écouter";
  statusDisplay.classList.remove("in-tune");
  needleGroup.setAttribute("transform", "translate(0 0)");
  needleGroup.setAttribute("opacity", "0");
}

button.addEventListener("click", () => {
  if (stream) stopTuner();
  else startTuner();
});
document.querySelectorAll(".home-action").forEach(action => {
  action.addEventListener("click", () => {
    const panel = document.getElementById(action.dataset.panelTarget);
    history.pushState({ ...history.state, guitaristePanel: panel.id }, "");
    selectTool(panel);
    panel.focus();
  });
});
homeReturn.addEventListener("click", () => {
  history.back();
});
window.addEventListener("popstate", event => {
  const openDialog = document.querySelector("dialog[open]");
  if (openDialog) openDialog.close();
  const panel = appPanels.find(item => item.id === event.state?.guitaristePanel);
  if (panel) {
    selectTool(panel);
    panel.focus();
  } else {
    showHome();
    homePanel.querySelector(".home-action").focus();
  }
});
chordSearch.addEventListener("input", renderChordSearch);
positionTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectPositionTab(tab));
  tab.addEventListener("keydown", event => {
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % positionTabs.length;
    else if (event.key === "ArrowLeft") nextIndex = (index + positionTabs.length - 1) % positionTabs.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = positionTabs.length - 1;
    else return;
    event.preventDefault();
    positionTabs[nextIndex].focus();
    selectPositionTab(positionTabs[nextIndex]);
  });
});
tuningModeButtons.forEach(modeButton => modeButton.addEventListener("click", () => {
  setMode(modeButton.id === "guitar-mode" ? "guitar" : "chromatic");
}));
languageButtons.forEach(languageButton => languageButton.addEventListener("click", () => {
  setLanguage(languageButton.id === "french-language" ? "french" : "english");
}));
bindQualityTabs(openQualityTabs, openQualityPanels);
bindQualityTabs(barreQualityTabs, barreQualityPanels);
bindQualityTabs(explanationTabs, explanationFamilies);
explanationQualities.forEach(qualityButton => qualityButton.addEventListener("click", () => {
  setExplanationQuality(qualityButton.closest(".explanation-family"), qualityButton.dataset.quality);
}));
closeChordDialog.addEventListener("click", () => chordDialog.close());
chordDialog.addEventListener("click", event => {
  if (event.target === chordDialog) chordDialog.close();
});
intervalModes.forEach(input => {
  input.checked = intervalModes[0].checked;
  input.addEventListener("change", () => {
    intervalModes.forEach(item => { item.checked = input.checked; });
    document.body.classList.toggle("intervals-enabled", input.checked);
  });
});
document.body.classList.toggle("intervals-enabled", intervalModes[0].checked);
colorblindModes.forEach(input => {
  input.checked = false;
  input.addEventListener("change", () => {
    colorblindModes.forEach(item => { item.checked = input.checked; });
    document.body.classList.toggle("colorblind-enabled", input.checked);
  });
});
drawTicks();
setMode(mode);
setLanguage("english");
selectPositionTab(positionTabs[0]);
selectQualityTab(openQualityTabs, openQualityPanels, openQualityTabs[0]);
selectQualityTab(barreQualityTabs, barreQualityPanels, barreQualityTabs[0]);
selectQualityTab(explanationTabs, explanationFamilies, explanationTabs[0]);
renderOpenChords();
initializeExplanationOpen();
explanationFamilies.filter(family => family.dataset.family !== "open").forEach(family => renderExplanation(family));
initializeExplanationDialogs();
const initialPanel = appPanels.find(panel => panel.id === history.state?.guitaristePanel);
if (initialPanel) {
  selectTool(initialPanel);
} else {
  history.replaceState({ ...history.state, guitaristePanel: "home" }, "");
  showHome();
}
