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
const appPanels = [document.querySelector("#tuner-panel"), document.querySelector("#chords-panel"), document.querySelector("#explanation-panel"), document.querySelector("#progression-panel")];
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

function chordLabelForQuery(chord, query) {
  const typedRoot = query.trim().match(/^([A-G])([#♯b♭]?)/i);
  if (!typedRoot) return chord.label;
  const root = `${typedRoot[1].toUpperCase()}${typedRoot[2]}`;
  return findPitchClass(root) === chord.root ? `${root}${chord.suffix}` : chord.label;
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

function findVoicings(chord, bassPitchClass, options = {}) {
  const { capo = 0, forExport = false } = options;
  const openNotes = strings.map(string => string.midi + capo);
  const chordTones = new Set(chord.tones.map(interval => (chord.root + interval) % 12));
  const essential = forExport && chord.suffix === "m7♭5" ? [...chord.essential, 6] : chord.essential;
  const essentialTones = essential.map(interval => (chord.root + interval) % 12);
  const choices = openNotes.map(openNote => {
    const options = [{ fret: null, pitchClass: null }];
    const maxFret = forExport ? 24 - capo : 12;
    for (let fret = 0; fret <= maxFret; fret++) {
      const pitchClass = (openNote + fret) % 12;
      if (chordTones.has(pitchClass) || (forExport && pitchClass === bassPitchClass)) options.push({ fret, pitchClass });
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
      const firstString = current.findIndex(fret => fret !== null);
      if (forExport) {
        const externalBassCount = current.filter((fret, index) => fret !== null &&
          !chordTones.has((openNotes[index] + fret) % 12)).length;
        if (bassMidi !== openNotes[firstString] + current[firstString] || externalBassCount > 1) return;
        let fingers = 0;
        fingeredFrets.forEach(fret => {
          let inGroup = false;
          current.forEach(value => {
            if (value !== null && value < fret) inGroup = false;
            if (value === fret && !inGroup) { fingers++; inGroup = true; }
          });
        });
        if (fingers > 4) return;
      }
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
    if (forExport) {
      const score = voicing => {
        const active = voicing.filter(fret => fret !== null);
        const first = voicing.findIndex(fret => fret !== null);
        const last = voicing.length - 1 - [...voicing].reverse().findIndex(fret => fret !== null);
        const gaps = voicing.slice(first, last + 1).filter(fret => fret === null).length;
        const fingered = active.filter(fret => fret > 0);
        const lowest = fingered.length ? Math.min(...fingered) : 0;
        const span = fingered.length ? Math.max(...fingered) - lowest : 0;
        return active.length * 3 + active.filter(fret => fret === 0).length * 2 - gaps * 5 - lowest * 2.5 - span * 1.5;
      };
      return score(second) - score(first);
    }
    const scoreDifference = voicingScore(second) - voicingScore(first);
    if (scoreDifference !== 0) return scoreDifference;
    return first.reduce((sum, fret) => sum + (fret || 0), 0)
      - second.reduce((sum, fret) => sum + (fret || 0), 0);
  });
  if (forExport) return ranked.slice(0, 1);
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
  const typedRoot = chordSearch.value.trim().match(/^([A-G])([#♯b♭]?)/i);
  const rootSpelling = typedRoot ? `${typedRoot[1].toUpperCase()}${typedRoot[2]}` : "";
  const typedPitch = rootSpelling ? findPitchClass(rootSpelling) : null;
  const displayLabel = candidate => chordLabelForQuery(candidate, chordSearch.value);
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
    const label = displayLabel(candidate);
    button.textContent = label;
    button.addEventListener("click", () => {
      chordSearch.value = label;
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
  const label = displayLabel(chord);
  let description = chord.name;
  if (typedPitch === chord.root) {
    const accidental = typedRoot[2] === "#" || typedRoot[2] === "♯"
      ? " dièse" : typedRoot[2] ? " bémol" : "";
    const quality = chordQualities.find(candidate => candidate.suffix === chord.suffix);
    description = `${frenchNames[typedRoot[1].toUpperCase()]}${accidental} ${quality.name}`;
  }
  chordSearchStatus.textContent = open
    ? `Positions disponibles pour ${label}.`
    : `Aucune position ouverte de ${label} dans le dictionnaire.`;
  if (open) {
    renderChordCard(chordSearchGrid, chord, [{
      voicing: open.voicing, barre: open.barre || null, bassString: null,
      caption: "Position ouverte", positionLabel: "Position ouverte"
    }], `${label} · Position ouverte`, description);
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
    }], `${label} · ${caption}`, description);
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

function initializeProgressions() {
  const legacyStorageKey = "outils-guitariste-progressions-v1";
  const previousStorageKey = "outils-guitariste-progressions-v2";
  const thirdStorageKey = "outils-guitariste-progressions-v3";
  const fourthStorageKey = "outils-guitariste-progressions-v4";
  const storageKey = "outils-guitariste-progressions-v5";
  const meters = {
    "2/4": { beats: 2, unit: "une noire" },
    "3/4": { beats: 3, unit: "une noire" },
    "4/4": { beats: 4, unit: "une noire" },
    "5/4": { beats: 5, unit: "une noire" },
    "6/8": { beats: 2, unit: "une noire pointée (3 croches)" },
    "9/8": { beats: 3, unit: "une noire pointée (3 croches)" },
    "12/8": { beats: 4, unit: "une noire pointée (3 croches)" }
  };
  const nameInput = document.querySelector("#progression-name");
  const information = document.querySelector("#progression-information");
  const artistInput = document.querySelector("#progression-artist");
  const meterInput = document.querySelector("#progression-meter");
  const capoInput = document.querySelector("#progression-capo");
  const meterHelp = document.querySelector("#progression-meter-help");
  const partsElement = document.querySelector("#progression-parts");
  const savedSelect = document.querySelector("#progression-saved");
  const loadButton = document.querySelector("#progression-load");
  const deleteButton = document.querySelector("#progression-delete");
  const status = document.querySelector("#progression-status");
  const dialog = document.querySelector("#progression-chord-dialog");
  const dialogTitle = document.querySelector("#progression-chord-title");
  const chordSearchInput = document.querySelector("#progression-chord-search");
  const chordSuggestions = document.querySelector("#progression-chord-suggestions");
  const chordStatus = document.querySelector("#progression-chord-status");
  const clearChordButton = document.querySelector("#progression-chord-clear");
  const printElement = document.querySelector("#progression-print");
  const musicXmlDownloadContainer = document.querySelector("#progression-musicxml-download-container");
  const musicXmlDownload = document.querySelector("#progression-musicxml-download");
  const tempoInput = document.querySelector("#progression-tempo");
  const instrumentInput = document.querySelector("#progression-instrument");
  const metronomeInput = document.querySelector("#progression-metronome");
  const repeatInput = document.querySelector("#progression-repeat");
  const scopeInput = document.querySelector("#progression-scope");
  const playerPartField = document.querySelector("#progression-player-part-field");
  const playerPart = document.querySelector("#progression-player-part");
  const loopRange = document.querySelector("#progression-loop-range");
  const loopStart = document.querySelector("#progression-loop-start");
  const loopEnd = document.querySelector("#progression-loop-end");
  const playButton = document.querySelector("#progression-play");
  const pauseButton = document.querySelector("#progression-pause");
  const stopButton = document.querySelector("#progression-stop");
  const playerStatus = document.querySelector("#progression-player-status");
  const playerPosition = document.querySelector("#progression-player-position");
  const playerSettings = document.querySelector(".progression-player-settings");
  let playback = null;
  const soundBanks = new Map();
  let musicXmlUrl = null;
  let current = newProgression();
  let baseline = snapshot(current);
  let savedVersion = null;
  let selectedBeat = null;
  const widePlayer = window.matchMedia("(min-width: 700px)");
  let mobileSettingsOpen = false;
  if (widePlayer.matches) playerSettings.open = true;
  widePlayer.addEventListener("change", event => {
    if (event.matches) {
      mobileSettingsOpen = playerSettings.open;
      playerSettings.open = true;
    } else {
      playerSettings.open = mobileSettingsOpen;
    }
  });

  function newMeasure(meter) {
    return { beats: Array(meters[meter].beats).fill(null), repeatStart: false, repeatEnd: false, breakAfter: false };
  }

  function newPart(meter, number) {
    return { name: `Partie ${number}`, measures: [newMeasure(meter)] };
  }

  function newProgression() {
    return { id: null, name: "", artist: "", meter: "4/4", capo: 0, parts: [newPart("4/4", 1)] };
  }

  function snapshot(progression) {
    return JSON.stringify({ name: progression.name, artist: progression.artist, meter: progression.meter, capo: progression.capo, parts: progression.parts });
  }

  function hasChanges() {
    return snapshot(current) !== baseline;
  }

  function clearMusicXmlDownload() {
    if (musicXmlUrl) URL.revokeObjectURL(musicXmlUrl);
    musicXmlUrl = null;
    musicXmlDownload.removeAttribute("href");
    musicXmlDownloadContainer.hidden = true;
  }

  function markChanged() {
    if (playback) stopPlayback("Lecture arrêtée : la suite a été modifiée.");
    clearMusicXmlDownload();
    status.textContent = hasChanges() ? "Modifications non enregistrées." : "";
  }

  function confirmDiscard() {
    return !hasChanges() || window.confirm("Cette suite contient des modifications non enregistrées. Les abandonner ?");
  }

  function validBass(note) {
    return /^[A-G][#♯b♭]?$/i.test(note) && findPitchClass(note) !== null;
  }

  function validBeats(beats, count, version) {
    return Array.isArray(beats) && beats.length === count &&
      beats.every(chord => {
        if (chord === null) return true;
        if (typeof chord !== "string") return false;
        const parts = chord.split("/");
        return (parts.length === 1 || (version >= 5 && parts.length === 2 && validBass(parts[1]))) &&
          chords.some(candidate => version >= 5
            ? [candidate.label, ...candidate.searchTerms].some(term => normalizeSearchText(term) === normalizeSearchText(parts[0]))
            : candidate.label === parts[0]);
      });
  }

  function validRecord(item, version) {
    if (!item || typeof item.id !== "string" || !item.id || typeof item.name !== "string" ||
        !item.name.trim() || !Object.prototype.hasOwnProperty.call(meters, item.meter)) return false;
    const count = meters[item.meter].beats;
    if (version === 1) {
      return Array.isArray(item.measures) && item.measures.length > 0 &&
        item.measures.every(measure => validBeats(measure, count, version));
    }
    if (version >= 3 && (!Number.isInteger(item.capo) || item.capo < 0 || item.capo > 24)) return false;
    if (version >= 4 && typeof item.artist !== "string") return false;
    return Array.isArray(item.parts) && item.parts.length > 0 &&
      item.parts.every(part => part && typeof part.name === "string" && Array.isArray(part.measures) &&
        part.measures.length > 0 && part.measures.every(measure => measure &&
          validBeats(measure.beats, count, version) && typeof measure.repeatStart === "boolean" &&
          typeof measure.repeatEnd === "boolean" && (version < 3 || typeof measure.breakAfter === "boolean")));
  }

  function readSaved() {
    try {
      const legacyRaw = localStorage.getItem(legacyStorageKey);
      const previousRaw = localStorage.getItem(previousStorageKey);
      const thirdRaw = localStorage.getItem(thirdStorageKey);
      const fourthRaw = localStorage.getItem(fourthStorageKey);
      const raw = localStorage.getItem(storageKey);
      const legacy = legacyRaw === null ? [] : JSON.parse(legacyRaw);
      const previousData = previousRaw === null ? { items: [], deletedLegacyIds: [] } : JSON.parse(previousRaw);
      const thirdData = thirdRaw === null ? { items: [], deletedPreviousIds: [] } : JSON.parse(thirdRaw);
      const fourthData = fourthRaw === null ? { items: [], deletedPreviousIds: [] } : JSON.parse(fourthRaw);
      const data = raw === null ? { items: [], deletedPreviousIds: [] } : JSON.parse(raw);
      const validLegacy = Array.isArray(legacy) && legacy.every(item => validRecord(item, 1)) &&
        new Set(legacy.map(item => item.id)).size === legacy.length;
      const validPrevious = previousData && Array.isArray(previousData.items) &&
        previousData.items.every(item => validRecord(item, 2)) &&
        new Set(previousData.items.map(item => item.id)).size === previousData.items.length &&
        Array.isArray(previousData.deletedLegacyIds) && previousData.deletedLegacyIds.every(id => typeof id === "string");
      const validThird = thirdData && Array.isArray(thirdData.items) && thirdData.items.every(item => validRecord(item, 3)) &&
        new Set(thirdData.items.map(item => item.id)).size === thirdData.items.length &&
        Array.isArray(thirdData.deletedPreviousIds) && thirdData.deletedPreviousIds.every(id => typeof id === "string");
      const validFourth = fourthData && Array.isArray(fourthData.items) && fourthData.items.every(item => validRecord(item, 4)) &&
        new Set(fourthData.items.map(item => item.id)).size === fourthData.items.length &&
        Array.isArray(fourthData.deletedPreviousIds) && fourthData.deletedPreviousIds.every(id => typeof id === "string");
      const validData = data && Array.isArray(data.items) && data.items.every(item => validRecord(item, 5)) &&
        new Set(data.items.map(item => item.id)).size === data.items.length &&
        Array.isArray(data.deletedPreviousIds) && data.deletedPreviousIds.every(id => typeof id === "string");
      if (!validLegacy || !validPrevious || !validThird || !validFourth || !validData) throw new Error("Format des suites enregistrées invalide.");
      const older = [
        ...previousData.items,
        ...legacy.filter(item => !previousData.deletedLegacyIds.includes(item.id) &&
          !previousData.items.some(candidate => candidate.id === item.id))
      ];
      const thirdAndOlder = [
        ...thirdData.items,
        ...older.filter(item => !thirdData.deletedPreviousIds.includes(item.id) &&
          !thirdData.items.some(candidate => candidate.id === item.id))
      ];
      const previous = [
        ...fourthData.items,
        ...thirdAndOlder.filter(item => !fourthData.deletedPreviousIds.includes(item.id) &&
          !fourthData.items.some(candidate => candidate.id === item.id))
      ];
      const saved = [
        ...data.items,
        ...previous.filter(item => !data.deletedPreviousIds.includes(item.id) && !data.items.some(candidate => candidate.id === item.id))
      ];
      return { data, previous, saved };
    } catch (error) {
      console.error("Impossible de lire les suites enregistrées :", error);
      status.textContent = "Impossible de lire les suites enregistrées. Aucune donnée n’a été modifiée.";
      return null;
    }
  }

  function writeSaved(data) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error("Impossible d’enregistrer les suites :", error);
      status.textContent = "Enregistrement impossible sur cet appareil. Votre suite reste affichée.";
      return false;
    }
  }

  function refreshSaved(saved, selectedId = current.id) {
    savedSelect.replaceChildren();
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = saved.length ? "Choisir une suite" : "Aucune suite enregistrée";
    savedSelect.appendChild(placeholder);
    saved.forEach(item => {
      const option = document.createElement("option");
      option.value = item.id;
      option.textContent = item.name;
      savedSelect.appendChild(option);
    });
    savedSelect.value = saved.some(item => item.id === selectedId) ? selectedId : "";
    loadButton.disabled = !savedSelect.value;
    deleteButton.disabled = !savedSelect.value;
  }

  function refreshLoopOptions() {
    const oldCount = loopEnd.options.length;
    const oldStart = Number(loopStart.value);
    const oldEnd = Number(loopEnd.value);
    const oldPart = Number(playerPart.value);
    playerPart.replaceChildren();
    current.parts.forEach((part, index) => {
      const option = document.createElement("option");
      option.value = String(index);
      option.textContent = part.name.trim() || `Partie ${index + 1}`;
      playerPart.appendChild(option);
    });
    playerPart.value = String(Math.min(oldPart || 0, current.parts.length - 1));
    const measures = current.parts.flatMap((part, partIndex) => part.measures.map(() =>
      part.name.trim() || `Partie ${partIndex + 1}`));
    loopStart.replaceChildren();
    loopEnd.replaceChildren();
    measures.forEach((name, index) => {
      const option = document.createElement("option");
      option.value = String(index);
      option.textContent = `Mesure ${index + 1} · ${name}`;
      loopStart.appendChild(option);
      loopEnd.appendChild(option.cloneNode(true));
    });
    loopStart.value = String(Math.min(oldStart || 0, measures.length - 1));
    const end = oldCount === 0 || oldEnd === oldCount - 1 ? measures.length - 1 : oldEnd;
    loopEnd.value = String(Math.min(end, measures.length - 1));
  }

  function renderMeasures() {
    const meter = meters[current.meter];
    meterInput.value = current.meter;
    capoInput.value = String(current.capo);
    nameInput.value = current.name;
    artistInput.value = current.artist;
    meterHelp.textContent = `${current.meter} : ${meter.beats} temps par mesure ; chaque temps vaut ${meter.unit}.`;
    partsElement.replaceChildren();
    let measureNumber = 0;
    current.parts.forEach((part, partIndex) => {
      const section = document.createElement("section");
      section.className = "progression-part";
      section.setAttribute("aria-label", `Partie ${partIndex + 1}`);
      const partHeading = document.createElement("div");
      partHeading.className = "progression-part-heading";
      const partLabel = document.createElement("label");
      partLabel.textContent = `Nom de la partie ${partIndex + 1}`;
      const partName = document.createElement("input");
      partName.type = "text";
      partName.maxLength = 100;
      partName.placeholder = "Intro, couplet, refrain…";
      partName.value = part.name;
      partName.addEventListener("input", () => {
        part.name = partName.value;
        refreshLoopOptions();
        markChanged();
      });
      partLabel.appendChild(partName);
      const removePart = document.createElement("button");
      removePart.type = "button";
      removePart.className = "progression-button progression-remove";
      removePart.textContent = "Supprimer la partie";
      removePart.setAttribute("aria-label", `Supprimer la partie ${partIndex + 1}`);
      removePart.disabled = current.parts.length === 1;
      removePart.addEventListener("click", () => {
        if (!window.confirm(`Supprimer la partie « ${part.name || partIndex + 1} » et toutes ses mesures ?`)) return;
        current.parts.splice(partIndex, 1);
        renderMeasures();
        markChanged();
        document.querySelector("#progression-add-part").focus();
      });
      partHeading.append(partLabel, removePart);
      const measures = document.createElement("div");
      measures.className = "progression-measures";
      part.measures.forEach((measure, measureIndex) => {
        measureNumber++;
        const number = measureNumber;
        const container = document.createElement("div");
        container.className = "progression-measure";
        container.setAttribute("aria-label", `Mesure ${number}`);
        const heading = document.createElement("div");
        heading.className = "progression-measure-heading";
        const title = document.createElement("h3");
        title.textContent = `Mesure ${number}`;
        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "progression-button progression-remove";
        remove.textContent = "×";
        remove.setAttribute("aria-label", `Supprimer la mesure ${number}`);
        remove.disabled = part.measures.length === 1;
        remove.addEventListener("click", () => {
          if ((measure.beats.some(Boolean) || measure.repeatStart || measure.repeatEnd || measure.breakAfter) &&
              !window.confirm(`Supprimer la mesure ${number}, ses accords et ses reprises ?`)) return;
          part.measures.splice(measureIndex, 1);
          renderMeasures();
          markChanged();
          partsElement.querySelectorAll(".progression-part")[partIndex]
            .querySelectorAll(".progression-add-measure")[Math.min(measureIndex, part.measures.length - 1)].focus();
        });
        const lineBreak = document.createElement("button");
        lineBreak.type = "button";
        lineBreak.className = "progression-button progression-remove progression-line-toggle";
        lineBreak.textContent = "↵";
        lineBreak.setAttribute("aria-label", `Retour à la ligne après la mesure ${number}`);
        lineBreak.setAttribute("aria-pressed", String(measure.breakAfter));
        lineBreak.title = measure.breakAfter
          ? "Annuler le retour à la ligne après cette mesure"
          : "Retour à la ligne après cette mesure";
        lineBreak.addEventListener("click", () => {
          measure.breakAfter = !measure.breakAfter;
          renderMeasures();
          markChanged();
          partsElement.querySelectorAll(".progression-part")[partIndex]
            .querySelectorAll(".progression-line-toggle")[measureIndex].focus();
        });
        const controls = document.createElement("div");
        controls.className = "progression-measure-controls";
        if (measureIndex > 0 && part.measures[measureIndex - 1].breakAfter) {
          const joinLine = document.createElement("button");
          joinLine.type = "button";
          joinLine.className = "progression-button progression-remove progression-line-join";
          joinLine.textContent = "↑";
          joinLine.setAttribute("aria-label", `Remonter la mesure ${number} sur la ligne précédente`);
          joinLine.title = "Annuler le retour à la ligne avant cette mesure";
          joinLine.addEventListener("click", () => {
            part.measures[measureIndex - 1].breakAfter = false;
            renderMeasures();
            markChanged();
            partsElement.querySelectorAll(".progression-part")[partIndex]
              .querySelectorAll(".progression-line-toggle")[measureIndex].focus();
          });
          controls.appendChild(joinLine);
        }
        controls.append(lineBreak, remove);
        heading.append(title, controls);
        const bar = document.createElement("div");
        bar.className = "progression-bar";
        const beats = document.createElement("div");
        beats.className = "progression-beats";
        beats.style.setProperty("--beat-count", String(measure.beats.length));
        measure.beats.forEach((chord, beatIndex) => {
          const beat = document.createElement("button");
          beat.type = "button";
          beat.className = "progression-beat";
          beat.setAttribute("aria-label", `Mesure ${number}, temps ${beatIndex + 1} : ${chord || "aucun nouvel accord"}`);
          const beatNumber = document.createElement("span");
          beatNumber.className = "progression-beat-number";
          beatNumber.textContent = String(beatIndex + 1);
          const value = document.createElement("span");
          value.className = "progression-beat-chord";
          value.textContent = chord || "+";
          beat.append(beatNumber, value);
          beat.addEventListener("click", () => openChord(partIndex, measureIndex, beatIndex, number));
          beats.appendChild(beat);
        });
        const repeatButton = (side, property, label) => {
          const repeat = document.createElement("button");
          repeat.type = "button";
          repeat.className = `progression-repeat progression-repeat-${side}`;
          repeat.setAttribute("aria-label", `${label}, mesure ${number}`);
          repeat.setAttribute("aria-pressed", String(measure[property]));
          repeat.title = label;
          repeat.addEventListener("click", () => {
            measure[property] = !measure[property];
            repeat.setAttribute("aria-pressed", String(measure[property]));
            markChanged();
          });
          return repeat;
        };
        bar.append(repeatButton("start", "repeatStart", "Début de reprise"), beats,
          repeatButton("end", "repeatEnd", "Fin de reprise"));
        const addMeasure = document.createElement("button");
        addMeasure.type = "button";
        addMeasure.className = "progression-button progression-add-measure";
        addMeasure.textContent = "+";
        addMeasure.setAttribute("aria-label", `Ajouter une mesure après la mesure ${number}`);
        addMeasure.title = "Ajouter une mesure après celle-ci";
        addMeasure.addEventListener("click", () => {
          part.measures.splice(measureIndex + 1, 0, newMeasure(current.meter));
          renderMeasures();
          markChanged();
          partsElement.querySelectorAll(".progression-part")[partIndex]
            .querySelectorAll(".progression-measure")[measureIndex + 1].querySelector(".progression-beat").focus();
        });
        container.append(heading, bar, addMeasure);
        measures.appendChild(container);
        if (measure.breakAfter) {
          const spacer = document.createElement("div");
          spacer.className = "progression-line-break";
          spacer.setAttribute("aria-hidden", "true");
          measures.appendChild(spacer);
        }
      });
      section.append(partHeading, measures);
      partsElement.appendChild(section);
    });
    refreshLoopOptions();
  }

  function openChord(partIndex, measureIndex, beatIndex, number) {
    selectedBeat = { partIndex, measureIndex, beatIndex };
    const label = current.parts[partIndex].measures[measureIndex].beats[beatIndex];
    chordSearchInput.value = label || "";
    clearChordButton.disabled = !label;
    dialogTitle.textContent = `Mesure ${number} · temps ${beatIndex + 1}`;
    renderChordSuggestions();
    dialog.showModal();
    chordSearchInput.focus();
  }

  function chordMatches(query) {
    const normalized = normalizeSearchText(query);
    if (!normalized) return [];
    const rootPitch = findPitchClass(query);
    return chords.map((chord, index) => {
      const notation = [chord.label, ...chord.searchTerms].map(normalizeSearchText);
      const name = normalizeSearchText(chord.name);
      let priority = 4;
      if (notation.includes(normalized) || name === normalized) priority = 0;
      else if (rootPitch !== null && chord.root === rootPitch) priority = 1;
      else if (notation.some(term => term.startsWith(normalized))) priority = 2;
      else if (name.startsWith(normalized)) priority = 3;
      return { chord, index, priority };
    }).filter(match => match.priority < 4)
      .sort((a, b) => a.priority - b.priority || a.index - b.index)
      .map(match => match.chord);
  }

  function slashChordSuggestions(query) {
    const parts = query.split("/");
    if (parts.length !== 2) {
      return { labels: [], message: "Utilisez une seule barre / pour indiquer la basse." };
    }
    const baseQuery = normalizeSearchText(parts[0]);
    const base = chordMatches(parts[0]).find(chord =>
      [chord.label, chord.name, ...chord.searchTerms].some(term => normalizeSearchText(term) === baseQuery));
    if (!base) return { labels: [], message: "Saisissez un accord complet avant /." };
    const bassText = parts[1].trim();
    const bassQuery = normalizeSearchText(bassText);
    const bassNotes = chordRoots.flatMap(root => [root.label, ...root.aliases])
      .filter(note => validBass(note) && normalizeSearchText(note).startsWith(bassQuery))
      .sort((a, b) => Number(normalizeSearchText(b) === bassQuery) - Number(normalizeSearchText(a) === bassQuery));
    const labels = bassNotes.map(note => {
      const bass = validBass(bassText) && normalizeSearchText(note) === bassQuery
        ? bassText[0].toUpperCase() + bassText.slice(1) : note;
      return `${chordLabelForQuery(base, parts[0])}/${bass}`;
    });
    return { labels, message: labels.length ? "" : "Aucune note de basse trouvée." };
  }

  function renderChordSuggestions() {
    chordSuggestions.replaceChildren();
    const query = chordSearchInput.value.trim();
    const slash = query.includes("/") ? slashChordSuggestions(query) : null;
    const matches = slash ? [] : chordMatches(query);
    const suggestions = slash ? slash.labels.map(label => ({ label, description: label }))
      : matches.map(chord => ({ label: chord.label, description: chord.name }));
    chordStatus.textContent = slash ? slash.message : query && !matches.length ? "Aucun accord trouvé." : "";
    (slash ? suggestions : suggestions.slice(0, 20)).forEach(({ label, description }) => {
      const suggestion = document.createElement("button");
      suggestion.type = "button";
      suggestion.className = "quality-tab";
      suggestion.textContent = label;
      suggestion.setAttribute("aria-label", slash ? label : `${label} : ${description}`);
      suggestion.addEventListener("click", () => setSelectedChord(label));
      chordSuggestions.appendChild(suggestion);
    });
    if (!slash && suggestions.length > 20) chordStatus.textContent = "Précisez la recherche pour voir d’autres accords.";
  }

  for (let fret = 0; fret <= 24; fret++) {
    const option = document.createElement("option");
    option.value = String(fret);
    option.textContent = fret === 0 ? "Sans capodastre" : `Case ${fret}`;
    capoInput.appendChild(option);
  }
  capoInput.addEventListener("change", () => {
    current.capo = Number(capoInput.value);
    markChanged();
  });
  nameInput.addEventListener("input", () => {
    current.name = nameInput.value;
    markChanged();
  });
  artistInput.addEventListener("input", () => {
    current.artist = artistInput.value;
    markChanged();
  });
  meterInput.addEventListener("change", () => {
    const nextMeter = meterInput.value;
    const beats = meters[nextMeter].beats;
    if (current.parts.some(part => part.measures.some(measure => measure.beats.slice(beats).some(Boolean))) &&
        !window.confirm("Changer de signature supprimera les accords placés sur les temps qui disparaissent. Continuer ?")) {
      meterInput.value = current.meter;
      return;
    }
    current.meter = nextMeter;
    current.parts.forEach(part => part.measures.forEach(measure => {
      measure.beats = Array.from({ length: beats }, (_, index) => measure.beats[index] || null);
    }));
    renderMeasures();
    markChanged();
  });
  document.querySelector("#progression-add-part").addEventListener("click", () => {
    current.parts.push(newPart(current.meter, current.parts.length + 1));
    renderMeasures();
    markChanged();
    partsElement.lastElementChild.querySelector("input").focus();
  });
  document.querySelector("#progression-chord-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  function setSelectedChord(label) {
    const { partIndex, measureIndex, beatIndex } = selectedBeat;
    const part = current.parts[partIndex];
    part.measures[measureIndex].beats[beatIndex] = label;
    renderMeasures();
    markChanged();
    dialog.close();
    const measures = partsElement.querySelectorAll(".progression-part")[partIndex].querySelectorAll(".progression-measure");
    measures[measureIndex].querySelectorAll(".progression-beat")[beatIndex].focus();
  }
  chordSearchInput.addEventListener("input", renderChordSuggestions);
  chordSearchInput.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    if (chordSearchInput.value.includes("/")) {
      const parts = chordSearchInput.value.trim().split("/");
      const { labels, message } = slashChordSuggestions(chordSearchInput.value.trim());
      const bass = parts.length === 2 ? normalizeSearchText(parts[1]) : "";
      const exact = bass && labels.find(label => normalizeSearchText(label.split("/")[1]) === bass);
      if (exact || (bass && labels.length === 1)) setSelectedChord(exact || labels[0]);
      else chordStatus.textContent = message || "Choisissez une note de basse proposée.";
      return;
    }
    const query = normalizeSearchText(chordSearchInput.value);
    const matches = chordMatches(chordSearchInput.value);
    const exact = matches.find(chord => [chord.label, chord.name, ...chord.searchTerms]
      .some(term => normalizeSearchText(term) === query));
    if (exact || matches.length === 1) setSelectedChord((exact || matches[0]).label);
    else chordStatus.textContent = matches.length ? "Choisissez un accord proposé." : "Aucun accord trouvé.";
  });
  clearChordButton.addEventListener("click", () => setSelectedChord(null));
  savedSelect.addEventListener("change", () => {
    loadButton.disabled = !savedSelect.value;
    deleteButton.disabled = !savedSelect.value;
  });
  document.querySelector("#progression-save").addEventListener("click", () => {
    const name = current.name.trim();
    if (!name) {
      status.textContent = "Donnez un nom à votre suite avant de l’enregistrer.";
      information.open = true;
      nameInput.focus();
      return;
    }
    const library = readSaved();
    if (!library) return;
    const existing = current.id ? library.saved.find(item => item.id === current.id) : null;
    let id = current.id;
    if (current.id && (!existing || JSON.stringify(existing) !== savedVersion)) {
      if (!window.confirm("Cette suite a été modifiée ou supprimée ailleurs. Enregistrer votre version comme une nouvelle suite ?")) {
        status.textContent = "Enregistrement annulé. Votre suite reste affichée.";
        return;
      }
      id = null;
    }
    if (!id) {
      do { id = `${Date.now()}-${Math.random().toString(36).slice(2)}`; }
      while (library.saved.some(item => item.id === id) || library.data.deletedPreviousIds.includes(id));
    }
    const item = { id, name, artist: current.artist.trim(), meter: current.meter, capo: current.capo, parts: current.parts.map(part => ({
      name: part.name,
      measures: part.measures.map(measure => ({ ...measure, beats: [...measure.beats] }))
    })) };
    const index = library.data.items.findIndex(candidate => candidate.id === id);
    if (index === -1) library.data.items.push(item);
    else library.data.items[index] = item;
    if (!writeSaved(library.data)) return;
    current.id = id;
    current.name = name;
    current.artist = item.artist;
    nameInput.value = name;
    artistInput.value = current.artist;
    baseline = snapshot(current);
    savedVersion = JSON.stringify(item);
    const refreshed = readSaved();
    if (refreshed) refreshSaved(refreshed.saved, id);
    status.textContent = "Suite enregistrée sur cet appareil.";
  });
  document.querySelector("#progression-new").addEventListener("click", () => {
    if (!confirmDiscard()) return;
    if (playback) stopPlayback("Lecture arrêtée.");
    clearMusicXmlDownload();
    current = newProgression();
    baseline = snapshot(current);
    savedVersion = null;
    renderMeasures();
    savedSelect.value = "";
    loadButton.disabled = true;
    deleteButton.disabled = true;
    status.textContent = "Nouvelle suite prête à être créée.";
    information.open = true;
    nameInput.focus();
  });
  loadButton.addEventListener("click", () => {
    const library = readSaved();
    if (!library) return;
    const item = library.saved.find(candidate => candidate.id === savedSelect.value);
    if (!item) {
      refreshSaved(library.saved);
      status.textContent = "Cette suite n’existe plus dans les données enregistrées.";
      return;
    }
    if (!confirmDiscard()) return;
    if (playback) stopPlayback("Lecture arrêtée.");
    clearMusicXmlDownload();
    const parts = item.parts
      ? item.parts.map(part => ({ name: part.name, measures: part.measures.map(measure => ({
        beats: [...measure.beats], repeatStart: measure.repeatStart, repeatEnd: measure.repeatEnd,
        breakAfter: measure.breakAfter === true
      })) }))
      : [{ name: "Partie 1", measures: item.measures.map(beats => ({ beats: [...beats], repeatStart: false, repeatEnd: false, breakAfter: false })) }];
    current = { id: item.id, name: item.name, artist: item.artist === undefined ? "" : item.artist, meter: item.meter, capo: item.capo === undefined ? 0 : item.capo, parts };
    baseline = snapshot(current);
    savedVersion = JSON.stringify(item);
    renderMeasures();
    status.textContent = "Suite chargée.";
  });
  deleteButton.addEventListener("click", () => {
    const library = readSaved();
    if (!library) return;
    const item = library.saved.find(candidate => candidate.id === savedSelect.value);
    if (!item) {
      refreshSaved(library.saved);
      status.textContent = "Cette suite n’existe plus dans les données enregistrées.";
      return;
    }
    if (!window.confirm(`Supprimer la suite enregistrée « ${item.name} » ?`)) return;
    library.data.items = library.data.items.filter(candidate => candidate.id !== item.id);
    const hasLegacyCopy = library.previous.some(candidate => candidate.id === item.id);
    if (hasLegacyCopy && !library.data.deletedPreviousIds.includes(item.id)) {
      library.data.deletedPreviousIds.push(item.id);
    }
    if (!writeSaved(library.data)) return;
    if (current.id === item.id) {
      current.id = null;
      baseline = "";
      savedVersion = null;
    }
    const refreshed = readSaved();
    if (refreshed) refreshSaved(refreshed.saved);
    status.textContent = hasLegacyCopy
      ? "Suite retirée de la liste ; une copie antérieure est conservée. La suite affichée reste modifiable."
      : "Suite supprimée. La suite affichée reste modifiable.";
  });

  function resolveProgressionChord(label) {
    const [base, bass] = label.split("/");
    const chord = chords.find(candidate => [candidate.label, ...candidate.searchTerms]
      .some(term => normalizeSearchText(term) === normalizeSearchText(base)));
    if (!chord) throw new Error(`Accord inconnu : ${label}`);
    const root = (base.match(/^[A-G][#♯b♭]?/i) || chord.label.match(/^[A-G][#♯b♭]?/i))[0];
    return { chord, root, bass };
  }

  function progressionVoicing({ chord, root, bass }) {
    const bassName = bass || root;
    const bassPitch = findPitchClass(bassName);
    if (bassPitch === null) throw new Error(`Note inconnue : ${bassName}`);
    const voicing = findVoicings(chord, bassPitch, { capo: current.capo, forExport: true })[0];
    if (!voicing) {
      const capo = current.capo ? ` avec le capodastre en case ${current.capo}` : "";
      throw new Error(`Aucun doigté jouable trouvé pour ${root}${chord.suffix}${bass ? `/${bass}` : ""}${capo}.`);
    }
    return voicing;
  }

  function setPlayerControls() {
    const phase = playback ? playback.phase : "stopped";
    playButton.disabled = phase !== "stopped" && phase !== "paused";
    const playLabel = phase === "paused" ? "Reprendre" : "Lecture";
    playButton.setAttribute("aria-label", playLabel);
    playButton.title = playLabel;
    pauseButton.disabled = phase !== "playing";
    stopButton.disabled = phase === "stopped";
    [tempoInput, instrumentInput, repeatInput, scopeInput, playerPart, loopStart, loopEnd]
      .forEach(input => { input.disabled = phase !== "stopped"; });
  }

  function stopPlayback(message) {
    const player = playback;
    if (!player) return;
    playback = null;
    clearInterval(player.timer);
    cancelAnimationFrame(player.animation);
    player.sources.forEach(source => {
      try { source.stop(); } catch (error) { console.error("Impossible d’arrêter une note :", error); }
    });
    player.context.close().catch(error => console.error("Impossible de fermer le lecteur audio :", error));
    partsElement.querySelectorAll(".progression-measure.playing").forEach(measure => measure.classList.remove("playing"));
    playerPosition.textContent = "";
    playerStatus.textContent = message;
    setPlayerControls();
  }

  function playbackOrder(bars, limited, start, end) {
    if (limited) return Array.from({ length: end - start + 1 }, (_, index) => start + index);
    const order = [];
    const stack = [];
    let implicitStart = 0;
    let index = 0;
    while (index < bars.length) {
      const bar = bars[index];
      if (bar.repeatStart && (!stack.length || stack[stack.length - 1].start !== index)) {
        stack.push({ start: index, repeated: false });
      }
      order.push(index);
      if (order.length > 10000) throw new Error("Les reprises sont trop nombreuses pour être lues.");
      if (bar.repeatEnd) {
        if (!stack.length) stack.push({ start: implicitStart, repeated: false });
        const repeat = stack[stack.length - 1];
        if (!repeat.repeated) {
          repeat.repeated = true;
          index = repeat.start;
          continue;
        }
        stack.pop();
        if (!stack.length) implicitStart = index + 1;
      }
      index++;
    }
    return order;
  }

  function releasePlayerVoice(player, time) {
    if (!player.voice) return;
    player.voice.forEach(({ gain, source }) => {
      gain.gain.setTargetAtTime(0.0001, time, 0.015);
      source.stop(time + 0.1);
    });
    player.voice = null;
  }

  function loadSoundBank(instrument) {
    const names = {
      nylon: "acoustic_guitar_nylon",
      acoustic: "acoustic_guitar_steel",
      piano: "acoustic_grand_piano"
    };
    const name = names[instrument];
    if (!name) return Promise.reject(new Error("Instrument inconnu."));
    if (!soundBanks.has(name)) {
      const loading = new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = `assets/sounds/${name}-mp3.js`;
        script.onload = () => {
          const bank = window.MIDI && window.MIDI.Soundfont && window.MIDI.Soundfont[name];
          if (bank) resolve(bank);
          else reject(new Error("La banque de sons est invalide."));
        };
        script.onerror = () => reject(new Error("La banque de sons est introuvable."));
        document.head.appendChild(script);
      }).catch(error => {
        soundBanks.delete(name);
        throw error;
      });
      soundBanks.set(name, loading);
    }
    return soundBanks.get(name);
  }

  async function preparePlayerSamples(player) {
    const bank = await loadSoundBank(player.instrument);
    if (playback !== player) return;
    const pitchNames = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
    const pitches = new Set([...player.voicings.values()].flat());
    await Promise.all([...pitches].map(async midi => {
      const note = `${pitchNames[midi % 12]}${Math.floor(midi / 12) - 1}`;
      const data = bank[note];
      if (!data || !data.startsWith("data:audio/mp3;base64,")) {
        throw new Error(`Échantillon manquant pour la note ${note}.`);
      }
      const encoded = atob(data.slice(data.indexOf(",") + 1));
      const bytes = Uint8Array.from(encoded, character => character.charCodeAt(0));
      const buffer = await player.context.decodeAudioData(bytes.buffer);
      player.samples.set(midi, buffer);
    }));
  }

  function playPlayerVoice(player, pitches, time) {
    releasePlayerVoice(player, time);
    if (!pitches.length) return;
    player.voice = pitches.map((midi, index) => {
      const start = time + index * (player.instrument === "piano" ? 0 : 0.012);
      const source = player.context.createBufferSource();
      const gain = player.context.createGain();
      source.buffer = player.samples.get(midi);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.linearRampToValueAtTime(0.7 / Math.sqrt(pitches.length), start + 0.003);
      source.connect(gain);
      gain.connect(player.context.destination);
      player.sources.add(source);
      source.onended = () => { player.sources.delete(source); source.disconnect(); gain.disconnect(); };
      source.start(start);
      return { source, gain };
    });
  }

  function playMetronome(player, time, accented) {
    const oscillator = player.context.createOscillator();
    const gain = player.context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = accented ? 1400 : 1000;
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.12, time + 0.003);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.05);
    oscillator.connect(gain);
    gain.connect(player.context.destination);
    player.sources.add(oscillator);
    oscillator.onended = () => { player.sources.delete(oscillator); oscillator.disconnect(); gain.disconnect(); };
    oscillator.start(time);
    oscillator.stop(time + 0.05);
  }

  function schedulePlayerBeat(player) {
    const barIndex = player.order[player.orderIndex];
    const bar = player.bars[barIndex];
    const beat = player.beat;
    const time = player.nextTime;
    let changed = false;
    if ((player.limited || player.repeat) && player.orderIndex === 0 && beat === 0) {
      player.active = player.initial;
      changed = true;
    }
    const label = bar.beats[beat];
    if (label) {
      player.active = player.voicings.get(label);
      changed = true;
    }
    if (changed) {
      if (player.active) playPlayerVoice(player, player.active, time);
      else releasePlayerVoice(player, time);
    }
    if (metronomeInput.checked) playMetronome(player, time, beat === 0);
    player.highlights.push({ time, barIndex, beat });
    player.nextTime += player.beatSeconds;
    player.beat++;
    if (player.beat === bar.beats.length) {
      player.beat = 0;
      player.orderIndex++;
      if (player.orderIndex === player.order.length) {
        if (player.repeat) player.orderIndex = 0;
        else {
          player.finishedAt = player.nextTime;
          releasePlayerVoice(player, player.finishedAt);
        }
      }
    }
  }

  function updatePlayerPosition(player) {
    if (playback !== player || player.phase !== "playing") return;
    let position;
    while (player.highlights.length && player.highlights[0].time <= player.context.currentTime) {
      position = player.highlights.shift();
    }
    if (position) {
      if (player.highlighted !== position.barIndex) {
        if (player.highlighted !== null) player.elements[player.highlighted].classList.remove("playing");
        player.elements[position.barIndex].classList.add("playing");
        player.highlighted = position.barIndex;
      }
      playerPosition.textContent = `Mesure ${position.barIndex + 1} · temps ${position.beat + 1}`;
    }
    player.animation = requestAnimationFrame(() => updatePlayerPosition(player));
  }

  function runPlayer(player) {
    function tick() {
      if (playback !== player || player.phase !== "playing") return;
      if (player.context.state !== "running") {
        stopPlayback("Lecture interrompue : le son n’est plus disponible.");
        return;
      }
      const now = player.context.currentTime;
      if (player.finishedAt !== null && now >= player.finishedAt) {
        stopPlayback("Lecture terminée.");
        return;
      }
      if (player.finishedAt === null && player.nextTime < now - 0.2) {
        stopPlayback("Lecture interrompue : le navigateur n’a pas pu maintenir le rythme.");
        return;
      }
      try {
        while (player.finishedAt === null && player.nextTime < now + 0.2) schedulePlayerBeat(player);
      } catch (error) {
        console.error("Erreur pendant la lecture :", error);
        stopPlayback(`Lecture interrompue : ${error.message}`);
      }
    }
    tick();
    if (playback !== player) return;
    player.timer = setInterval(tick, 25);
    player.animation = requestAnimationFrame(() => updatePlayerPosition(player));
  }

  async function pausePlayback(message) {
    const player = playback;
    if (!player || player.phase !== "playing") return;
    player.phase = "pausing";
    clearInterval(player.timer);
    cancelAnimationFrame(player.animation);
    setPlayerControls();
    try {
      await player.context.suspend();
      if (playback !== player) return;
      player.phase = "paused";
      playerStatus.textContent = message;
      setPlayerControls();
    } catch (error) {
      console.error("Impossible de mettre la lecture en pause :", error);
      if (playback === player) stopPlayback("Impossible de mettre la lecture en pause.");
    }
  }

  scopeInput.addEventListener("change", () => {
    playerPartField.hidden = scopeInput.value !== "part";
    loopRange.hidden = scopeInput.value !== "range";
  });
  playButton.addEventListener("click", async () => {
    if (playback && playback.phase === "paused") {
      const player = playback;
      player.phase = "starting";
      setPlayerControls();
      try {
        await player.context.resume();
        if (playback !== player) return;
        if (player.context.state !== "running") throw new Error("Le navigateur n’a pas autorisé le son.");
        player.phase = "playing";
        playerStatus.textContent = "Lecture en cours.";
        setPlayerControls();
        runPlayer(player);
      } catch (error) {
        console.error("Impossible de reprendre la lecture :", error);
        if (playback === player) stopPlayback(`Impossible de reprendre la lecture : ${error.message}`);
      }
      return;
    }
    if (playback) return;
    const tempo = Number(tempoInput.value);
    if (!tempoInput.value || !Number.isInteger(tempo) || tempo < 40 || tempo > 240) {
      playerStatus.textContent = "Choisissez un tempo entier entre 40 et 240.";
      tempoInput.focus();
      return;
    }
    const bars = current.parts.flatMap(part => part.measures);
    const scope = scopeInput.value;
    const partIndex = Number(playerPart.value);
    const start = scope === "part"
      ? current.parts.slice(0, partIndex).reduce((sum, part) => sum + part.measures.length, 0)
      : Number(loopStart.value);
    const end = scope === "part" ? start + current.parts[partIndex].measures.length - 1 : Number(loopEnd.value);
    if (scope === "range" && start > end) {
      playerStatus.textContent = "La mesure de début doit précéder ou égaler la mesure de fin.";
      loopStart.focus();
      return;
    }
    let player;
    try {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) throw new Error("Le son n’est pas disponible dans ce navigateur.");
      const order = scope === "part"
        ? playbackOrder(bars.slice(start, end + 1), false, 0, 0).map(index => index + start)
        : playbackOrder(bars, scope === "range", start, end);
      player = {
        context: new Audio(), phase: "starting", sources: new Set(), voice: null,
        bars, limited: scope !== "all", repeat: repeatInput.checked, order, instrument: instrumentInput.value,
        orderIndex: 0, beat: 0, beatSeconds: 60 / tempo, voicings: new Map(), samples: new Map(),
        initial: null, active: null, nextTime: 0, finishedAt: null, highlights: [],
        highlighted: null, elements: [...partsElement.querySelectorAll(".progression-measure")]
      };
      playback = player;
      setPlayerControls();
      playerStatus.textContent = "Chargement des sons…";
      await player.context.resume();
      if (playback !== player) return;
      if (player.context.state !== "running") throw new Error("Le navigateur n’a pas autorisé le son.");
      let inherited = null;
      if (player.limited && !bars[start].beats[0]) {
        bars.slice(0, start).forEach(bar => bar.beats.forEach(label => { if (label) inherited = label; }));
      }
      const labels = new Set(player.order.flatMap(index => bars[index].beats.filter(Boolean)));
      if (inherited) labels.add(inherited);
      if (!labels.size) throw new Error("Ajoutez au moins un accord dans la zone à lire.");
      labels.forEach(label => {
        const voicing = progressionVoicing(resolveProgressionChord(label));
        player.voicings.set(label, voicing.flatMap((fret, index) =>
          fret === null ? [] : [strings[index].midi + current.capo + fret]).sort((a, b) => a - b));
      });
      if (inherited) player.initial = player.voicings.get(inherited);
      await preparePlayerSamples(player);
      if (playback !== player) return;
      if (player.context.state !== "running") throw new Error("Le son n’est plus disponible dans ce navigateur.");
      player.phase = "playing";
      player.nextTime = player.context.currentTime + 0.06;
      if (document.hidden) {
        await pausePlayback("Lecture en pause : revenez sur la page pour reprendre.");
        return;
      }
      playerStatus.textContent = "Lecture en cours.";
      setPlayerControls();
      runPlayer(player);
    } catch (error) {
      console.error("Impossible de démarrer la lecture :", error);
      if (player && playback === player) stopPlayback(`Impossible de démarrer la lecture : ${error.message}`);
      else if (!player) playerStatus.textContent = `Impossible de démarrer la lecture : ${error.message}`;
    }
  });
  pauseButton.addEventListener("click", () => pausePlayback("Lecture en pause."));
  stopButton.addEventListener("click", () => stopPlayback("Lecture arrêtée."));
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) pausePlayback("Lecture en pause : revenez sur la page pour reprendre.");
  });
  window.addEventListener("popstate", () => {
    if (document.querySelector("#progression-panel").hidden && playback) stopPlayback("Lecture arrêtée.");
  });
  window.addEventListener("pagehide", () => { if (playback) stopPlayback("Lecture arrêtée."); });

  function createMusicXml() {
    const kinds = {
      "": ["major"], m: ["minor"], dim: ["diminished"], aug: ["augmented"],
      sus2: ["suspended-second"], sus4: ["suspended-fourth"],
      "6": ["major-sixth"], m6: ["minor-sixth"],
      add9: ["major", [9, 0, "add"]], madd9: ["minor", [9, 0, "add"]],
      "7": ["dominant"], maj7: ["major-seventh"], m7: ["minor-seventh"],
      mMaj7: ["major-minor"], dim7: ["diminished-seventh"], "m7♭5": ["half-diminished"],
      "7sus4": ["suspended-fourth", [7, 0, "add"]],
      "9": ["dominant-ninth"], maj9: ["major-ninth"], m9: ["minor-ninth"],
      "7♭9": ["dominant", [9, -1, "add"]], "7♯9": ["dominant", [9, 1, "add"]],
      "11": ["dominant-11th"], m11: ["minor-11th"], maj11: ["major-11th"],
      "7♯11": ["dominant", [11, 1, "add"]],
      "13": ["dominant-13th"], maj13: ["major-13th"], m13: ["minor-13th"],
      "7♭13": ["dominant", [13, -1, "add"]],
      "7♭5": ["dominant", [5, -1, "alter"]], "7♯5": ["dominant", [5, 1, "alter"]],
      "13sus4": ["suspended-fourth", [7, 0, "add"], [9, 0, "add"], [13, 0, "add"]]
    };
    const xml = document.implementation.createDocument("", "score-partwise", null);
    const score = xml.documentElement;
    score.setAttribute("version", "4.0");
    function add(parent, name, value, attributes) {
      const element = xml.createElement(name);
      if (value !== undefined) element.textContent = String(value);
      if (attributes) Object.entries(attributes).forEach(([key, text]) => element.setAttribute(key, text));
      parent.appendChild(element);
      return element;
    }
    function addPitch(parent, type, spelling) {
      const match = spelling.match(/^([A-G])([#♯b♭]?)/i);
      if (!match) throw new Error(`Note inconnue : ${spelling}`);
      const pitch = add(parent, type);
      add(pitch, `${type}-step`, match[1].toUpperCase());
      if (match[2]) add(pitch, `${type}-alter`, /[#♯]/.test(match[2]) ? 1 : -1);
    }
    function addHarmony(measure, { chord, root, bass }) {
      const harmony = add(measure, "harmony");
      addPitch(harmony, "root", root);
      const kind = kinds[chord.suffix];
      if (!kind) throw new Error(`Accord inconnu : ${root}${chord.suffix}`);
      add(harmony, "kind", kind[0], { text: chord.suffix });
      if (bass) addPitch(harmony, "bass", bass);
      kind.slice(1).forEach(([value, alter, type]) => {
        const degree = add(harmony, "degree", undefined, { "print-object": "no" });
        add(degree, "degree-value", value);
        add(degree, "degree-alter", alter);
        add(degree, "degree-type", type);
      });
      add(harmony, "staff", 1);
    }
    function addDirection(measure, type, text) {
      const direction = add(measure, "direction", undefined, { placement: "above" });
      add(add(direction, "direction-type"), type, text);
      add(direction, "staff", 1);
    }
    function chordNotes({ chord, root, bass }) {
      const steps = ["C", "D", "E", "F", "G", "A", "B"];
      const naturalPitches = [0, 2, 4, 5, 7, 9, 11];
      const rootStep = steps.indexOf(root[0].toUpperCase());
      const bassName = bass || root;
      const bassPitch = findPitchClass(bassName);
      if (rootStep < 0 || bassPitch === null) throw new Error(`Note inconnue : ${bassName}`);
      const voicing = progressionVoicing({ chord, root, bass });
      const notes = voicing.flatMap((fret, index) => {
        if (fret === null) return [];
        const midi = strings[index].midi + current.capo + fret;
        const interval = (midi - chord.root + 12) % 12;
        let degree;
        if (interval === 0) degree = 1;
        else if (interval === 1 || interval === 2 || (interval === 3 && chord.suffix === "7♯9")) {
          degree = chord.suffix === "sus2" ? 2 : 9;
        } else if (interval === 3 || interval === 4) degree = 3;
        else if (interval === 5) degree = chord.suffix.includes("sus4") ? 4 : 11;
        else if (interval === 6) degree = chord.suffix === "7♯11" ? 11 : 5;
        else if (interval === 7) degree = 5;
        else if (interval === 8) degree = chord.suffix === "7♭13" ? 13 : 5;
        else if (interval === 9) degree = chord.suffix === "dim7" ? 7 : chord.suffix.endsWith("6") ? 6 : 13;
        else degree = 7;
        let step = bass && index === voicing.findIndex(value => value !== null)
          ? bass[0].toUpperCase() : steps[(rootStep + degree - 1) % steps.length];
        let natural = naturalPitches[steps.indexOf(step)];
        let alter = ((midi % 12 - natural + 18) % 12) - 6;
        if (Math.abs(alter) > 2) {
          const spelling = sharpNames[midi % 12];
          step = spelling[0];
          natural = naturalPitches[steps.indexOf(step)];
          alter = spelling.length > 1 ? 1 : 0;
        }
        // Guitar notation is written an octave above its sounding pitch.
        const octave = (midi + 12 - natural - alter) / 12 - 1;
        return [{ step, alter, octave, midi, string: strings[index].stringNumber, fret }];
      });
      return notes.sort((a, b) => a.midi - b.midi);
    }
    function addBeat(measure, event, duration, type, dotted, tieStop, tieStart, staff) {
      const notes = event ? event.notes : [null];
      notes.forEach((pitch, index) => {
        const note = add(measure, "note");
        if (staff === 2) add(note, "cue");
        if (index) add(note, "chord");
        if (pitch) {
          const element = add(note, "pitch");
          add(element, "step", pitch.step);
          if (pitch.alter) add(element, "alter", pitch.alter);
          add(element, "octave", pitch.octave);
        } else {
          add(note, "rest");
        }
        add(note, "duration", duration);
        if (staff === 1 && tieStop) add(note, "tie", undefined, { type: "stop" });
        if (staff === 1 && tieStart) add(note, "tie", undefined, { type: "start" });
        add(note, "voice", staff);
        add(note, "type", type, staff === 2 ? { size: "full" } : undefined);
        if (dotted) add(note, "dot");
        add(note, "staff", staff);
        if (pitch || tieStop || tieStart) {
          const notations = add(note, "notations");
          if (tieStop) add(notations, "tied", undefined, { type: "stop" });
          if (tieStart) add(notations, "tied", undefined, { type: "start" });
          if (pitch) {
            const technical = add(notations, "technical");
            add(technical, "fret", pitch.fret);
            add(technical, "string", pitch.string);
          }
        }
      });
    }

    add(add(score, "work"), "work-title", current.name.trim() || "Suite d’accords");
    if (current.artist.trim()) {
      add(add(score, "identification"), "creator", current.artist.trim(), { type: "artist" });
    }
    const scorePart = add(add(score, "part-list"), "score-part", undefined, { id: "P1" });
    add(scorePart, "part-name", "Guitare");
    const instrument = add(scorePart, "score-instrument", undefined, { id: "I1" });
    add(instrument, "instrument-name", "Guitare acoustique");
    add(instrument, "instrument-sound", "pluck.guitar");
    const midiInstrument = add(scorePart, "midi-instrument", undefined, { id: "I1" });
    add(midiInstrument, "midi-channel", 1);
    add(midiInstrument, "midi-program", 25);
    const part = add(score, "part", undefined, { id: "P1" });
    const [numerator, denominator] = current.meter.split("/").map(Number);
    const beatDuration = denominator === 8 ? 3 : 2;
    let activeChord = null;
    const voicingCache = new Map();
    const timeline = current.parts.flatMap(section => section.measures.flatMap(bar =>
      bar.beats.map((label, index) => {
        if (label) {
          const resolved = resolveProgressionChord(label);
          if (!voicingCache.has(label)) voicingCache.set(label, chordNotes(resolved));
          activeChord = { ...resolved, notes: voicingCache.get(label) };
        }
        return { event: activeChord, label, bar, index };
      })));
    let beatNumber = 0;
    let number = 0;
    let previousBreak = false;
    current.parts.forEach((section, sectionIndex) => {
      section.measures.forEach((bar, barIndex) => {
        const measure = add(part, "measure", undefined, { number: String(++number) });
        if (previousBreak || (sectionIndex > 0 && barIndex === 0)) {
          add(measure, "print", undefined, { "new-system": "yes" });
        }
        if (number === 1) {
          const attributes = add(measure, "attributes");
          add(attributes, "divisions", 2);
          const time = add(attributes, "time");
          add(time, "beats", numerator);
          add(time, "beat-type", denominator);
          add(attributes, "staves", 2);
          const clef = add(attributes, "clef", undefined, { number: "1" });
          add(clef, "sign", "G");
          add(clef, "line", 2);
          const tabClef = add(attributes, "clef", undefined, { number: "2" });
          add(tabClef, "sign", "TAB");
          add(tabClef, "line", 5);
          const tabDetails = add(attributes, "staff-details", undefined, { number: "2" });
          add(tabDetails, "staff-lines", 6);
          strings.forEach((string, index) => {
            const tuning = add(tabDetails, "staff-tuning", undefined, { line: String(index + 1) });
            add(tuning, "tuning-step", string.note);
            add(tuning, "tuning-octave", Math.floor(string.midi / 12) - 1);
          });
          if (current.capo) add(tabDetails, "capo", current.capo);
          const transpose = add(attributes, "transpose");
          add(transpose, "chromatic", 0);
          add(transpose, "octave-change", -1);
        }
        if (bar.repeatStart) {
          const barline = add(measure, "barline", undefined, { location: "left" });
          add(barline, "repeat", undefined, { direction: "forward" });
        }
        if (barIndex === 0) addDirection(measure, "rehearsal", section.name.trim() || `Partie ${sectionIndex + 1}`);
        if (number === 1 && current.capo) addDirection(measure, "words", `Capo ${current.capo}`);
        const segments = [];
        let position = 0;
        while (position < bar.beats.length) {
          const currentBeat = timeline[beatNumber + position];
          let run = 1;
          while (position + run < bar.beats.length &&
            timeline[beatNumber + position + run].event === currentBeat.event) run++;
          const lengths = denominator === 8 ? [4, 2, 1] : [4, 3, 2, 1];
          const length = lengths.find(value => value <= run);
          const previous = timeline[beatNumber + position - 1];
          const next = timeline[beatNumber + position + length];
          const startsRepeat = position === 0 && (bar.repeatStart || (previous && previous.bar.repeatEnd));
          const endsRepeat = position + length === bar.beats.length && next && (bar.repeatEnd || next.bar.repeatStart);
          const tieStop = Boolean(currentBeat.event && previous && previous.event === currentBeat.event && !startsRepeat);
          const tieStart = Boolean(currentBeat.event && next && next.event === currentBeat.event && !endsRepeat);
          const type = length === 4 ? "whole" : length >= 2 ? "half" : "quarter";
          const dotted = denominator === 8 || length === 3;
          segments.push({ ...currentBeat, duration: length * beatDuration, type, dotted, tieStop, tieStart });
          position += length;
        }
        segments.forEach(segment => {
          if (segment.label) addHarmony(measure, segment.event);
          addBeat(measure, segment.event, segment.duration, segment.type, segment.dotted, segment.tieStop, segment.tieStart, 1);
        });
        add(add(measure, "backup"), "duration", bar.beats.length * beatDuration);
        segments.forEach(segment => {
          addBeat(measure, segment.event, segment.duration, segment.type, segment.dotted, segment.tieStop, segment.tieStart, 2);
        });
        beatNumber += bar.beats.length;
        if (bar.repeatEnd) {
          const barline = add(measure, "barline", undefined, { location: "right" });
          add(barline, "repeat", undefined, { direction: "backward" });
        }
        previousBreak = bar.breakAfter && barIndex < section.measures.length - 1;
      });
    });
    const result = `<?xml version="1.0" encoding="UTF-8"?>\n${new XMLSerializer().serializeToString(xml)}`;
    if (new DOMParser().parseFromString(result, "application/xml").querySelector("parsererror")) {
      throw new Error("Le texte de la suite contient un caractère incompatible avec le format XML.");
    }
    return result;
  }

  document.querySelector("#progression-export-musicxml").addEventListener("click", async () => {
    clearMusicXmlDownload();
    try {
      const xml = createMusicXml();
      const blob = new Blob([xml], { type: "application/vnd.recordare.musicxml+xml;charset=utf-8" });
      const name = current.name.trim().replace(/[<>:"/\\|?*\x00-\x1f]/g, "_").replace(/[. ]+$/, "");
      const filename = `${name || "suite-accords"}.musicxml`;
      if (typeof window.showSaveFilePicker === "function") {
        let handle;
        try {
          handle = await window.showSaveFilePicker({
            suggestedName: filename,
            types: [{ description: "Fichier MusicXML", accept: { "application/vnd.recordare.musicxml+xml": [".musicxml"] } }]
          });
        } catch (error) {
          if (error.name === "AbortError") {
            status.textContent = "Enregistrement MusicXML annulé.";
            return;
          }
          if (error.name !== "SecurityError") throw error;
          console.warn("Choix du dossier indisponible dans cet environnement :", error);
        }
        if (handle) {
          const writable = await handle.createWritable();
          try {
            await writable.write(blob);
            await writable.close();
          } catch (error) {
            await writable.abort();
            throw error;
          }
          status.textContent = `Fichier MusicXML enregistré : ${handle.name}.`;
          return;
        }
      }
      musicXmlUrl = URL.createObjectURL(blob);
      musicXmlDownload.href = musicXmlUrl;
      musicXmlDownload.download = filename;
      musicXmlDownload.textContent = `Télécharger ${filename}`;
      musicXmlDownloadContainer.hidden = false;
      status.textContent = "Vérifiez le dossier Téléchargements du navigateur. Si le fichier n’apparaît pas, utilisez le lien ci-dessous.";
      musicXmlDownload.click();
    } catch (error) {
      clearMusicXmlDownload();
      console.error("Impossible d’exporter en MusicXML :", error);
      status.textContent = `Impossible d’enregistrer le fichier MusicXML : ${error.message}`;
    }
  });

  function renderPrint() {
    printElement.replaceChildren();
    const title = document.createElement("h1");
    title.textContent = current.name.trim() || "Suite d’accords";
    printElement.appendChild(title);
    if (current.artist.trim()) {
      title.className = "print-title-with-artist";
      const artist = document.createElement("p");
      artist.className = "print-artist";
      artist.textContent = current.artist.trim();
      printElement.appendChild(artist);
    }
    if (current.capo) {
      const capo = document.createElement("p");
      capo.className = "print-capo";
      const units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
      capo.textContent = `Capo ${"X".repeat(Math.floor(current.capo / 10))}${units[current.capo % 10]}`;
      printElement.appendChild(capo);
    }
    current.parts.forEach((part, partIndex) => {
      const section = document.createElement("section");
      section.className = "print-part";
      const heading = document.createElement("h2");
      heading.textContent = part.name.trim() || `Partie ${partIndex + 1}`;
      section.appendChild(heading);
      let row = document.createElement("div");
      row.className = "print-row";
      section.appendChild(row);
      part.measures.forEach((measure, measureIndex) => {
        const bar = document.createElement("div");
        bar.className = "print-measure";
        const start = document.createElement("span");
        start.className = `print-barline print-start${measure.repeatStart ? " print-repeat" : ""}`;
        const beats = document.createElement("div");
        beats.className = "print-beats";
        beats.style.setProperty("--beat-count", String(measure.beats.length));
        measure.beats.forEach((chord, beatIndex) => {
          if (!chord) return;
          const beat = document.createElement("span");
          const nextChord = measure.beats.findIndex((value, index) => index > beatIndex && value);
          const end = nextChord === -1 ? measure.beats.length : nextChord;
          beat.style.gridColumn = `${beatIndex + 1} / ${end + 1}`;
          beat.textContent = chord;
          beats.appendChild(beat);
        });
        const end = document.createElement("span");
        end.className = `print-barline print-end${measure.repeatEnd ? " print-repeat" : ""}`;
        if (partIndex === 0 && measureIndex === 0) {
          const meter = document.createElement("span");
          meter.className = "print-meter";
          const [numerator, denominator] = current.meter.split("/");
          const top = document.createElement("span");
          const bottom = document.createElement("span");
          top.textContent = numerator;
          bottom.textContent = denominator;
          meter.append(top, bottom);
          meter.setAttribute("aria-label", current.meter);
          bar.appendChild(meter);
        }
        bar.append(start, beats, end);
        row.appendChild(bar);
        if (measure.breakAfter && measureIndex < part.measures.length - 1) {
          row = document.createElement("div");
          row.className = "print-row";
          section.appendChild(row);
        }
      });
      printElement.appendChild(section);
    });
  }
  function preparePrint() {
    if (document.querySelector("#progression-panel").hidden) {
      document.body.classList.remove("progression-printing");
      document.documentElement.classList.remove("progression-printing");
      return;
    }
    renderPrint();
    document.body.classList.add("progression-printing");
    document.documentElement.classList.add("progression-printing");
  }
  window.addEventListener("beforeprint", preparePrint);
  window.addEventListener("afterprint", () => {
    document.body.classList.remove("progression-printing");
    document.documentElement.classList.remove("progression-printing");
  });
  const exportButton = document.querySelector("#progression-export");
  exportButton.addEventListener("click", async () => {
    if (typeof window.html2pdf !== "function") {
      status.textContent = "L’export PDF est indisponible dans ce navigateur.";
      return;
    }
    let preview;
    try {
      preview = window.open("", "_blank");
      if (!preview) {
        status.textContent = "Impossible d’ouvrir l’aperçu. Autorisez les fenêtres pop-up pour ce site.";
        return;
      }
      preview.document.title = "Préparation du PDF";
      preview.document.body.textContent = "Préparation du PDF…";
      exportButton.disabled = true;
      status.textContent = "Préparation du PDF…";
      renderPrint();
      const content = printElement.cloneNode(true);
      content.style.display = "block";
      const printStyles = document.querySelector("#progression-print-styles").textContent;
      if (!printStyles) throw new Error("Styles PDF indisponibles.");
      const pdf = await window.html2pdf().set({
        margin: 10,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          backgroundColor: "#ffffff",
          onclone: clonedDocument => {
            const style = clonedDocument.createElement("style");
            style.textContent = printStyles;
            clonedDocument.head.appendChild(style);
          }
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["css"] }
      }).from(content).outputPdf("blob");
      if (preview.closed) {
        status.textContent = "L’aperçu a été fermé avant la fin de la création du PDF.";
        return;
      }
      preview.location.replace(URL.createObjectURL(pdf));
      status.textContent = "PDF ouvert dans un nouvel onglet.";
    } catch (error) {
      if (preview && !preview.closed) preview.close();
      console.error("Impossible de créer le PDF :", error);
      status.textContent = "Impossible de créer ou d’ouvrir le PDF.";
    } finally {
      exportButton.disabled = false;
    }
  });
  window.addEventListener("beforeunload", event => {
    if (!hasChanges()) return;
    event.preventDefault();
    event.returnValue = "";
  });
  renderMeasures();
  const library = readSaved();
  if (library) refreshSaved(library.saved);
  else {
    loadButton.disabled = true;
    deleteButton.disabled = true;
  }
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
initializeProgressions();
const initialPanel = appPanels.find(panel => panel.id === history.state?.guitaristePanel);
if (initialPanel) {
  selectTool(initialPanel);
} else {
  history.replaceState({ ...history.state, guitaristePanel: "home" }, "");
  showHome();
}
