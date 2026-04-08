const modeConfig = {
  explorer: {
    label: "Explorer Mode",
    title: "Explorer mode opens a calm orbital sandbox.",
    narrative:
      "Free-roam around the Blue Marble, inspect storms, auroras, oceans, and vegetation pulses, and learn Earth systems by scanning them in motion.",
    lesson:
      "Earth system science studies how the atmosphere, hydrosphere, biosphere, cryosphere, and geosphere act as one living network.",
  },
  mission: {
    label: "Mission Mode",
    title: "Mission mode prioritizes planet defense.",
    narrative:
      "Coordinate satellites, read NASA observation layers, and respond to fast-moving planetary risks with limited time and energy.",
    lesson:
      "Remote sensing turns global patterns into action: storm structure, fire spread, pollution, and ice retreat can all be monitored from orbit.",
  },
  sandbox: {
    label: "Sandbox Mode",
    title: "Sandbox mode reveals Earth as a controllable simulation.",
    narrative:
      "Push climate levers, accelerate decades in seconds, and watch feedback loops reshape cloud cover, ocean heat, ice, and vegetation.",
    lesson:
      "Human activity changes multiple systems at once. Emissions, land use, and ocean heat alter the whole planet, not isolated regions.",
  },
};

const locationConfig = {
  leo: {
    label: "Low Earth Orbit",
    altitude: "408 km",
    scale: 1.03,
    rotationSpeed: 0.5,
    narrative:
      "Astronaut-eye orbit for precision scanning, storm prediction, and close satellite deployment.",
  },
  moon: {
    label: "Shackleton Moon Base",
    altitude: "384,400 km",
    scale: 0.82,
    rotationSpeed: 0.32,
    narrative:
      "Cislunar command gives sweeping views of hemispheric weather engines and seasonal Earth glow.",
  },
  station: {
    label: "Aurora Deep Station",
    altitude: "1.5M km",
    scale: 0.72,
    rotationSpeed: 0.24,
    narrative:
      "A deep-space relay view for whole-Earth forecasting, solar threat monitoring, and long-range guardian planning.",
  },
};

const scanModes = {
  atmosphere: {
    title: "Atmosphere",
    detail: "Storm energy, heat, moisture, aerosols",
    readoutKey: "temperature",
  },
  biosphere: {
    title: "Biosphere",
    detail: "Vegetation vitality, land-use pressure",
    readoutKey: "vegetation",
  },
  hydrosphere: {
    title: "Hydrosphere",
    detail: "Ocean currents, rainfall, storage",
    readoutKey: "currents",
  },
  cryosphere: {
    title: "Cryosphere",
    detail: "Sea ice, snow cover, melt rate",
    readoutKey: "ice",
  },
  geosphere: {
    title: "Geosphere",
    detail: "Dust, terrain stress, fire fronts",
    readoutKey: "terrain",
  },
};

const datasets = [
  {
    name: "GIBS Imagery",
    type: "Visual Layer",
    description:
      "Daily global imagery for Earth textures, weather overlays, and fast planet browsing.",
  },
  {
    name: "EONET v3",
    type: "Mission Feed",
    description:
      "Near real-time natural events for storm, fire, volcano, and flood mission generation.",
  },
  {
    name: "EPIC / DSCOVR",
    type: "Planet Camera",
    description:
      "Sunlit full-disk Earth imagery for the breathtaking astronaut-like Earth reveal.",
  },
  {
    name: "MODIS NDVI",
    type: "Vegetation",
    description:
      "Vegetation health and deforestation monitoring across forests, croplands, and drought fronts.",
  },
  {
    name: "IMERG",
    type: "Precipitation",
    description:
      "Rainfall intensity for cyclone tracking, monsoon risk, and flood prediction loops.",
  },
  {
    name: "ECCO",
    type: "Ocean State",
    description:
      "Ocean circulation and heat transport to power current and climate sandbox outcomes.",
  },
  {
    name: "AIRS + OMI",
    type: "Atmosphere",
    description:
      "Temperature, water vapor, ozone, aerosols, and pollution signatures from orbit.",
  },
];

const regions = [
  {
    id: "atlantic",
    name: "North Atlantic Gyre",
    tag: "Storm Corridor",
    lat: 25,
    lon: -43,
    blurb:
      "Warm water and moisture rivers assemble here before storm systems bend toward coastal populations.",
    stats: {
      temperature: { base: 1.2, slope: 0.026, unit: "C" },
      vegetation: { base: 61, slope: -0.08, unit: "%" },
      currents: { base: 72, slope: -0.12, unit: "%" },
      ice: { base: 42, slope: -0.18, unit: "%" },
      terrain: { base: 37, slope: 0.04, unit: "%" },
      pollution: { base: 28, slope: 0.08, unit: "%" },
    },
  },
  {
    id: "amazon",
    name: "Amazon Basin",
    tag: "Canopy Shield",
    lat: -7,
    lon: -61,
    blurb:
      "A biosphere engine that stores carbon, recycles rain, and flashes warning signs when the forest dries out.",
    stats: {
      temperature: { base: 1.0, slope: 0.029, unit: "C" },
      vegetation: { base: 87, slope: -0.24, unit: "%" },
      currents: { base: 64, slope: -0.05, unit: "%" },
      ice: { base: 4, slope: 0.0, unit: "%" },
      terrain: { base: 44, slope: 0.06, unit: "%" },
      pollution: { base: 24, slope: 0.11, unit: "%" },
    },
  },
  {
    id: "southasia",
    name: "South Asian Heat Arc",
    tag: "Population Risk",
    lat: 21,
    lon: 79,
    blurb:
      "Heat, aerosols, water demand, and monsoon timing overlap here, turning orbital data into lifesaving decisions.",
    stats: {
      temperature: { base: 1.4, slope: 0.033, unit: "C" },
      vegetation: { base: 63, slope: -0.1, unit: "%" },
      currents: { base: 58, slope: -0.08, unit: "%" },
      ice: { base: 25, slope: -0.22, unit: "%" },
      terrain: { base: 49, slope: 0.06, unit: "%" },
      pollution: { base: 52, slope: 0.16, unit: "%" },
    },
  },
  {
    id: "arctic",
    name: "Arctic Gate",
    tag: "Cryosphere Watch",
    lat: 73,
    lon: 18,
    blurb:
      "Sea ice loss changes albedo, ocean circulation, and the behavior of weather far beyond the pole.",
    stats: {
      temperature: { base: 1.8, slope: 0.041, unit: "C" },
      vegetation: { base: 18, slope: 0.08, unit: "%" },
      currents: { base: 55, slope: -0.15, unit: "%" },
      ice: { base: 84, slope: -0.43, unit: "%" },
      terrain: { base: 35, slope: 0.03, unit: "%" },
      pollution: { base: 18, slope: 0.05, unit: "%" },
    },
  },
  {
    id: "pacific",
    name: "Equatorial Pacific",
    tag: "Ocean Pulse",
    lat: 1,
    lon: -152,
    blurb:
      "Currents and sea-surface heat ripple outward from here, shifting storm tracks and rainfall around the globe.",
    stats: {
      temperature: { base: 1.1, slope: 0.027, unit: "C" },
      vegetation: { base: 32, slope: 0.0, unit: "%" },
      currents: { base: 79, slope: -0.14, unit: "%" },
      ice: { base: 2, slope: 0.0, unit: "%" },
      terrain: { base: 20, slope: 0.02, unit: "%" },
      pollution: { base: 15, slope: 0.03, unit: "%" },
    },
  },
  {
    id: "sahara",
    name: "Sahara Dust Gate",
    tag: "Aerosol Engine",
    lat: 21,
    lon: 14,
    blurb:
      "Dust plumes from this geosphere hotspot seed clouds, cool seas, and sometimes intensify hazards downwind.",
    stats: {
      temperature: { base: 1.3, slope: 0.03, unit: "C" },
      vegetation: { base: 11, slope: -0.02, unit: "%" },
      currents: { base: 52, slope: -0.05, unit: "%" },
      ice: { base: 0, slope: 0.0, unit: "%" },
      terrain: { base: 70, slope: 0.08, unit: "%" },
      pollution: { base: 34, slope: 0.06, unit: "%" },
    },
  },
];

const missions = [
  {
    id: "stormshield",
    title: "Stormshield Atlantic",
    regionId: "atlantic",
    scanMode: "atmosphere",
    description:
      "Forecast a severe cyclone train using atmospheric heat and precipitation signatures before coastal risk spikes.",
    reward: "Guardian +8",
    objectives: [
      { key: "scan", label: "Deep-scan the storm corridor" },
      { key: "satellite", label: "Deploy a forecasting satellite" },
      { key: "intervention", label: "Stabilize landfall risk" },
    ],
  },
  {
    id: "greenveil",
    title: "Green Veil Protocol",
    regionId: "amazon",
    scanMode: "biosphere",
    description:
      "Track canopy stress and moisture recycling over the Amazon before forest loss cascades into fire weather.",
    reward: "Guardian +7",
    objectives: [
      { key: "scan", label: "Scan canopy vitality" },
      { key: "satellite", label: "Drop a land-observation relay" },
      { key: "intervention", label: "Trigger rewilding support" },
    ],
  },
  {
    id: "cryowatch",
    title: "Cryowatch North",
    regionId: "arctic",
    scanMode: "cryosphere",
    description:
      "Quantify ice retreat, ocean heat transport, and albedo loss before the summer melt amplifies global feedbacks.",
    reward: "Guardian +9",
    objectives: [
      { key: "scan", label: "Map seasonal melt fronts" },
      { key: "satellite", label: "Deploy polar coverage relay" },
      { key: "intervention", label: "Shield ice loss hotspots" },
    ],
  },
];

const state = {
  mode: "mission",
  location: "leo",
  scanMode: "atmosphere",
  selectedRegion: "atlantic",
  activeMission: "stormshield",
  guardian: 74,
  threat: 31,
  power: 88,
  satellites: 3,
  year: 2036,
  autoAdvance: false,
  rotation: 0,
  weatherRotation: 0,
  pointerX: 0.5,
  pointerY: 0.5,
  toastTimer: 0,
  scanMarker: null,
  lastAutoStep: 0,
  sandbox: {
    emissionsBrake: 48,
    rewilding: 56,
    oceanCooling: 41,
  },
  missionProgress: Object.fromEntries(
    missions.map((mission) => [
      mission.id,
      { scan: false, satellite: false, intervention: false, complete: false },
    ]),
  ),
};

const refs = {
  body: document.body,
  earth: document.querySelector("#earth"),
  systemStage: document.querySelector("#systemStage"),
  markerLayer: document.querySelector("#markerLayer"),
  satelliteLayer: document.querySelector("#satelliteLayer"),
  scanFlash: document.querySelector("#scanFlash"),
  modeButtons: document.querySelector("#modeButtons"),
  locationButtons: document.querySelector("#locationButtons"),
  scanModes: document.querySelector("#scanModes"),
  systemsMeters: document.querySelector("#systemsMeters"),
  datasetList: document.querySelector("#datasetList"),
  sandboxControls: document.querySelector("#sandboxControls"),
  missionQueue: document.querySelector("#missionQueue"),
  regionCard: document.querySelector("#regionCard"),
  missionTitle: document.querySelector("#missionTitle"),
  missionDescription: document.querySelector("#missionDescription"),
  objectiveList: document.querySelector("#objectiveList"),
  scienceLesson: document.querySelector("#scienceLesson"),
  modeNarrative: document.querySelector("#modeNarrative"),
  locationNarrative: document.querySelector("#locationNarrative"),
  yearLabel: document.querySelector("#yearLabel"),
  yearSlider: document.querySelector("#yearSlider"),
  autoplayButton: document.querySelector("#autoplayButton"),
  guardianPercent: document.querySelector("#guardianPercent"),
  threatPercent: document.querySelector("#threatPercent"),
  powerPercent: document.querySelector("#powerPercent"),
  locationName: document.querySelector("#locationName"),
  locationAltitude: document.querySelector("#locationAltitude"),
  systemsCaption: document.querySelector("#systemsCaption"),
  toast: document.querySelector("#toast"),
  scanButton: document.querySelector("#scanButton"),
  interveneButton: document.querySelector("#interveneButton"),
  deployButton: document.querySelector("#deployButton"),
  rebalanceButton: document.querySelector("#rebalanceButton"),
  deflectButton: document.querySelector("#deflectButton"),
  starfield: document.querySelector("#starfield"),
};

const markerNodes = new Map();
const systemMeterNodes = new Map();

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function round(value, digits = 0) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function getMissionById(missionId) {
  return missions.find((mission) => mission.id === missionId);
}

function getRegionById(regionId) {
  return regions.find((region) => region.id === regionId);
}

function getSelectedRegion() {
  return getRegionById(state.selectedRegion);
}

function computeSystemsIntegrity() {
  const yearDelta = state.year - 2026;
  const emissions = state.sandbox.emissionsBrake;
  const rewilding = state.sandbox.rewilding;
  const cooling = state.sandbox.oceanCooling;

  return {
    atmosphere: clamp(84 - yearDelta * 0.42 + emissions * 0.18 - state.threat * 0.1 + state.satellites * 0.9, 16, 99),
    biosphere: clamp(81 - yearDelta * 0.34 + rewilding * 0.2 + state.satellites * 0.4, 12, 99),
    hydrosphere: clamp(78 - yearDelta * 0.27 + cooling * 0.24 + emissions * 0.08, 14, 98),
    cryosphere: clamp(73 - yearDelta * 0.5 + emissions * 0.15 + cooling * 0.09, 4, 97),
    geosphere: clamp(70 - yearDelta * 0.16 + rewilding * 0.07 + emissions * 0.05 - state.threat * 0.06, 18, 95),
  };
}

function computeRegionMetric(region, key) {
  const metric = region.stats[key];
  const yearDelta = state.year - 2026;
  const sandbox = state.sandbox;
  const coolingEffect = sandbox.oceanCooling * 0.01;
  const rewildEffect = sandbox.rewilding * 0.01;
  const emissionsEffect = sandbox.emissionsBrake * 0.01;

  let value = metric.base + metric.slope * yearDelta;

  if (key === "temperature") {
    value -= emissionsEffect * 0.45 + coolingEffect * 0.18;
  }

  if (key === "vegetation") {
    value += rewildEffect * 8 - emissionsEffect * 1.2;
  }

  if (key === "currents") {
    value += coolingEffect * 6;
  }

  if (key === "ice") {
    value += emissionsEffect * 4 + coolingEffect * 3;
  }

  if (key === "terrain") {
    value += state.threat * 0.06 - rewildEffect * 2;
  }

  if (key === "pollution") {
    value -= emissionsEffect * 4;
  }

  return round(value, key === "temperature" ? 1 : 0);
}

function getSystemCaption() {
  const systems = computeSystemsIntegrity();
  const lowest = Object.entries(systems).sort((a, b) => a[1] - b[1])[0];
  return `${lowest[0].toUpperCase()} is the weakest linked system`;
}

function showToast(message) {
  refs.toast.textContent = message;
  refs.toast.classList.add("is-visible");

  if (state.toastTimer) {
    window.clearTimeout(state.toastTimer);
  }

  state.toastTimer = window.setTimeout(() => {
    refs.toast.classList.remove("is-visible");
  }, 2200);
}

function createButton(label, className, onClick) {
  const button = document.createElement("button");
  button.className = className;
  button.type = "button";
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function renderModeButtons() {
  refs.modeButtons.innerHTML = "";

  Object.entries(modeConfig).forEach(([modeId, config]) => {
    const button = createButton(config.label, "mode-button", () => {
      state.mode = modeId;
      renderAll();
      showToast(`${config.label} engaged.`);
    });
    button.classList.toggle("is-active", state.mode === modeId);
    refs.modeButtons.append(button);
  });
}

function renderLocationButtons() {
  refs.locationButtons.innerHTML = "";

  Object.entries(locationConfig).forEach(([locationId, config]) => {
    const button = createButton(config.label, "location-button", () => {
      state.location = locationId;
      renderAll();
      showToast(`${config.label} selected.`);
    });
    button.classList.toggle("is-active", state.location === locationId);
    refs.locationButtons.append(button);
  });
}

function renderScanModes() {
  refs.scanModes.innerHTML = "";

  Object.entries(scanModes).forEach(([scanId, config]) => {
    const button = createButton("", "scan-button", () => {
      state.scanMode = scanId;
      renderAll();
      showToast(`${config.title} sensors online.`);
    });
    button.innerHTML = `<strong>${config.title}</strong><span>${config.detail}</span>`;
    button.classList.toggle("is-active", state.scanMode === scanId);
    refs.scanModes.append(button);
  });
}

function renderDatasets() {
  refs.datasetList.innerHTML = "";

  datasets.forEach((dataset) => {
    const card = document.createElement("article");
    card.className = "feed-item";
    card.innerHTML = `
      <div class="dataset-head">
        <strong>${dataset.name}</strong>
        <span>${dataset.type}</span>
      </div>
      <p>${dataset.description}</p>
    `;
    refs.datasetList.append(card);
  });
}

function renderSystemsMeters() {
  const systems = computeSystemsIntegrity();

  if (!systemMeterNodes.size) {
    Object.keys(systems).forEach((systemKey) => {
      const row = document.createElement("div");
      row.className = "meter-row";
      row.innerHTML = `
        <div class="meter-topline">
          <strong>${systemKey.toUpperCase()}</strong>
          <span data-role="value"></span>
        </div>
        <div class="meter-bar"><div class="meter-fill"></div></div>
      `;
      refs.systemsMeters.append(row);
      systemMeterNodes.set(systemKey, row);
    });
  }

  Object.entries(systems).forEach(([systemKey, value]) => {
    const node = systemMeterNodes.get(systemKey);
    node.querySelector("[data-role='value']").textContent = `${Math.round(value)}%`;
    node.querySelector(".meter-fill").style.width = `${value}%`;
  });

  refs.systemsCaption.textContent = getSystemCaption();
}

function renderMissionPanel() {
  const mission = getMissionById(state.activeMission);
  const progress = state.missionProgress[mission.id];

  refs.missionTitle.textContent = mission.title;
  refs.missionDescription.textContent = mission.description;
  refs.scienceLesson.textContent = modeConfig[state.mode].lesson;
  refs.objectiveList.innerHTML = "";

  mission.objectives.forEach((objective) => {
    const item = document.createElement("div");
    item.className = "objective-item";
    item.classList.toggle("is-done", progress[objective.key]);
    item.innerHTML = `
      <span class="objective-state"></span>
      <strong>${objective.label}</strong>
      <span>${progress[objective.key] ? "DONE" : "PENDING"}</span>
    `;
    refs.objectiveList.append(item);
  });
}

function renderMissionQueue() {
  refs.missionQueue.innerHTML = "";

  missions.forEach((mission) => {
    const progress = state.missionProgress[mission.id];
    const card = document.createElement("article");
    card.className = "mission-card";
    card.classList.toggle("is-active", mission.id === state.activeMission);
    card.innerHTML = `
      <div class="mission-meta">
        <span>${mission.reward}</span>
        <span>${progress.complete ? "COMPLETE" : "ACTIVE"}</span>
      </div>
      <h3>${mission.title}</h3>
      <p>${mission.description}</p>
    `;

    const button = createButton("Focus Mission", "", () => {
      state.activeMission = mission.id;
      state.selectedRegion = mission.regionId;
      state.scanMode = mission.scanMode;
      renderAll();
      showToast(`${mission.title} focused.`);
    });
    card.append(button);
    refs.missionQueue.append(card);
  });
}

function renderSandboxControls() {
  refs.sandboxControls.innerHTML = "";

  const controls = [
    {
      key: "emissionsBrake",
      label: "Emissions Brake",
      caption: "Reduces heat growth and pollution pressure",
    },
    {
      key: "rewilding",
      label: "Rewilding Arc",
      caption: "Restores canopy strength and land resilience",
    },
    {
      key: "oceanCooling",
      label: "Ocean Heat Shield",
      caption: "Protects currents, ice, and rainfall balance",
    },
  ];

  controls.forEach((control) => {
    const card = document.createElement("article");
    card.className = "sandbox-card";

    const header = document.createElement("div");
    header.className = "sandbox-head";
    header.innerHTML = `
      <div>
        <strong class="sandbox-label">${control.label}</strong>
        <span class="sandbox-meta">${control.caption}</span>
      </div>
      <strong>${state.sandbox[control.key]}%</strong>
    `;

    const input = document.createElement("input");
    input.className = "sandbox-slider";
    input.type = "range";
    input.min = "0";
    input.max = "100";
    input.value = String(state.sandbox[control.key]);
    input.addEventListener("input", () => {
      state.sandbox[control.key] = Number(input.value);
      renderAll();
    });

    card.append(header, input);
    refs.sandboxControls.append(card);
  });
}

function renderRegionCard() {
  const region = getSelectedRegion();
  const systems = computeSystemsIntegrity();
  const scanKey = scanModes[state.scanMode].readoutKey;
  const scanValue = computeRegionMetric(region, scanKey);
  const stormRisk = clamp(
    34 +
      (computeRegionMetric(region, "temperature") - 1.1) * 17 +
      state.threat * 0.32 -
      state.sandbox.emissionsBrake * 0.16,
    8,
    96,
  );
  const pollution = clamp(computeRegionMetric(region, "pollution"), 0, 100);
  const integrity = Math.round(
    (systems.atmosphere + systems.biosphere + systems.hydrosphere + systems.cryosphere + systems.geosphere) / 5,
  );

  refs.regionCard.innerHTML = `
    <div class="region-header">
      <div>
        <strong class="region-title">${region.name}</strong>
        <p class="region-copy">${region.blurb}</p>
      </div>
      <span class="region-tag">${region.tag}</span>
    </div>
    <div class="region-stat-grid">
      <div class="region-stat">
        <span>${scanModes[state.scanMode].title} Readout</span>
        <strong>${scanValue}${region.stats[scanKey].unit}</strong>
      </div>
      <div class="region-stat">
        <span>Storm / Hazard Risk</span>
        <strong>${Math.round(stormRisk)}%</strong>
      </div>
      <div class="region-stat">
        <span>Guardian Sync</span>
        <strong>${integrity}%</strong>
      </div>
    </div>
    <div class="region-stat-grid">
      <div class="region-stat">
        <span>Temperature Drift</span>
        <strong>${computeRegionMetric(region, "temperature")}C</strong>
      </div>
      <div class="region-stat">
        <span>Vegetation Vitality</span>
        <strong>${computeRegionMetric(region, "vegetation")}%</strong>
      </div>
      <div class="region-stat">
        <span>Pollution Signal</span>
        <strong>${Math.round(pollution)}%</strong>
      </div>
    </div>
  `;
}

function renderTelemetry() {
  refs.body.dataset.mode = state.mode;
  refs.guardianPercent.textContent = `${Math.round(state.guardian)}%`;
  refs.threatPercent.textContent = `${Math.round(state.threat)}%`;
  refs.powerPercent.textContent = `${Math.round(state.power)}%`;
  refs.yearLabel.textContent = `${state.year} Forecast Sweep`;
  refs.locationName.textContent = locationConfig[state.location].label;
  refs.locationAltitude.textContent = locationConfig[state.location].altitude;
  refs.modeNarrative.textContent = modeConfig[state.mode].title;
  refs.locationNarrative.textContent = locationConfig[state.location].narrative;
  refs.yearSlider.value = String(state.year);
  refs.autoplayButton.classList.toggle("is-active", state.autoAdvance);
  refs.autoplayButton.textContent = state.autoAdvance ? "Pause Timeflow" : "Fast-forward";
}

function createRegionMarkers() {
  regions.forEach((region) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "region-marker";
    button.setAttribute("aria-label", `Scan ${region.name}`);
    button.addEventListener("click", () => {
      state.selectedRegion = region.id;
      renderAll();
      showToast(`${region.name} selected.`);
    });
    refs.markerLayer.append(button);
    markerNodes.set(region.id, button);
  });
}

function updateMarkers() {
  if (!markerNodes.size) {
    createRegionMarkers();
  }

  const earthRect = refs.earth.getBoundingClientRect();
  const radius = earthRect.width / 2;

  regions.forEach((region) => {
    const marker = markerNodes.get(region.id);
    const lat = (region.lat * Math.PI) / 180;
    const lon = (region.lon * Math.PI) / 180 - state.rotation;
    const x = Math.cos(lat) * Math.sin(lon);
    const y = Math.sin(lat);
    const z = Math.cos(lat) * Math.cos(lon);
    const visible = z > -0.08;
    const left = radius + x * radius * 0.9;
    const top = radius - y * radius * 0.9;
    const scale = clamp(0.45 + z * 0.7, 0.42, 1.1);

    marker.style.left = `${left}px`;
    marker.style.top = `${top}px`;
    marker.style.opacity = visible ? String(clamp(0.28 + z * 0.9, 0.1, 1)) : "0";
    marker.style.transform = `scale(${scale})`;
    marker.classList.toggle("is-active", region.id === state.selectedRegion);
  });
}

function updateScanFlash() {
  if (!state.scanMarker) {
    refs.scanFlash.classList.remove("is-visible");
    return;
  }

  const marker = markerNodes.get(state.scanMarker);
  if (!marker) {
    return;
  }

  refs.scanFlash.style.setProperty("--scan-x", `${(marker.offsetLeft / refs.earth.clientWidth) * 100}%`);
  refs.scanFlash.style.setProperty("--scan-y", `${(marker.offsetTop / refs.earth.clientHeight) * 100}%`);
  refs.scanFlash.classList.add("is-visible");

  window.setTimeout(() => {
    refs.scanFlash.classList.remove("is-visible");
  }, 420);
}

function updateSatellites(timestamp) {
  refs.satelliteLayer.innerHTML = "";

  const earthRect = refs.earth.getBoundingClientRect();
  const stageRect = refs.systemStage.getBoundingClientRect();
  const centerX = earthRect.left - stageRect.left + earthRect.width / 2;
  const centerY = earthRect.top - stageRect.top + earthRect.height / 2;
  const baseRadius = earthRect.width * 0.72;

  for (let index = 0; index < state.satellites; index += 1) {
    const satellite = document.createElement("div");
    satellite.className = "satellite";
    const angle = timestamp * 0.00022 + index * ((Math.PI * 2) / Math.max(state.satellites, 1));
    const orbitRadius = baseRadius + index * 26;
    const x = centerX + Math.cos(angle) * orbitRadius;
    const y = centerY + Math.sin(angle) * orbitRadius * 0.36;
    satellite.style.left = `${x}px`;
    satellite.style.top = `${y}px`;
    refs.satelliteLayer.append(satellite);
  }
}

function completeMissionIfReady() {
  const mission = getMissionById(state.activeMission);
  const progress = state.missionProgress[mission.id];
  const finished =
    progress.scan && progress.satellite && progress.intervention && !progress.complete;

  if (!finished) {
    return;
  }

  progress.complete = true;
  state.guardian = clamp(state.guardian + 8, 0, 100);
  state.threat = clamp(state.threat - 9, 0, 100);

  const currentIndex = missions.findIndex((item) => item.id === mission.id);
  const nextMission = missions[(currentIndex + 1) % missions.length];
  state.activeMission = nextMission.id;
  state.selectedRegion = nextMission.regionId;
  state.scanMode = nextMission.scanMode;

  showToast(`${mission.title} completed. ${mission.reward}.`);
}

function performScan() {
  const mission = getMissionById(state.activeMission);
  const progress = state.missionProgress[mission.id];
  const region = getSelectedRegion();
  const marker = markerNodes.get(region.id);

  state.power = clamp(state.power - 5, 0, 100);
  state.guardian = clamp(state.guardian + 1.8, 0, 100);
  state.scanMarker = region.id;

  if (marker) {
    marker.classList.add("is-scanning");
    window.setTimeout(() => marker.classList.remove("is-scanning"), 900);
  }

  updateScanFlash();

  if (mission.regionId === region.id) {
    progress.scan = true;
  }

  completeMissionIfReady();
  renderAll();
  showToast(`${scanModes[state.scanMode].title} scan complete over ${region.name}.`);
}

function performIntervention() {
  const mission = getMissionById(state.activeMission);
  const progress = state.missionProgress[mission.id];
  const region = getSelectedRegion();

  state.power = clamp(state.power - 9, 0, 100);
  state.guardian = clamp(state.guardian + 3.2, 0, 100);
  state.threat = clamp(state.threat - 6.5, 0, 100);

  if (mission.regionId === region.id) {
    progress.intervention = true;
  }

  completeMissionIfReady();
  renderAll();
  showToast(`Guardian intervention stabilized ${region.name}.`);
}

function deploySatellite() {
  const mission = getMissionById(state.activeMission);
  const progress = state.missionProgress[mission.id];

  state.satellites = clamp(state.satellites + 1, 1, 8);
  state.guardian = clamp(state.guardian + 2.5, 0, 100);
  state.power = clamp(state.power - 8, 0, 100);

  progress.satellite = true;
  completeMissionIfReady();
  renderAll();
  showToast("A new Earth-observation satellite is in orbit.");
}

function rebalanceSystems() {
  state.guardian = clamp(state.guardian + 2.2, 0, 100);
  state.threat = clamp(state.threat - 3.2, 0, 100);
  state.power = clamp(state.power - 6, 0, 100);
  state.sandbox.emissionsBrake = clamp(state.sandbox.emissionsBrake + 4, 0, 100);
  state.sandbox.rewilding = clamp(state.sandbox.rewilding + 3, 0, 100);
  state.sandbox.oceanCooling = clamp(state.sandbox.oceanCooling + 2, 0, 100);
  renderAll();
  showToast("Guardian systems rebalanced across the planet.");
}

function deflectThreat() {
  state.threat = clamp(state.threat - 8.5, 0, 100);
  state.power = clamp(state.power - 10, 0, 100);
  state.guardian = clamp(state.guardian + 1.2, 0, 100);
  renderAll();
  showToast("Orbital threat deflected away from Earth.");
}

function bindEvents() {
  refs.yearSlider.addEventListener("input", () => {
    state.year = Number(refs.yearSlider.value);
    renderAll();
  });

  refs.autoplayButton.addEventListener("click", () => {
    state.autoAdvance = !state.autoAdvance;
    renderAll();
  });

  refs.scanButton.addEventListener("click", performScan);
  refs.interveneButton.addEventListener("click", performIntervention);
  refs.deployButton.addEventListener("click", deploySatellite);
  refs.rebalanceButton.addEventListener("click", rebalanceSystems);
  refs.deflectButton.addEventListener("click", deflectThreat);

  window.addEventListener("pointermove", (event) => {
    state.pointerX = event.clientX / window.innerWidth;
    state.pointerY = event.clientY / window.innerHeight;
  });

  window.addEventListener("resize", resizeStarfield);
}

function renderAll() {
  renderModeButtons();
  renderLocationButtons();
  renderScanModes();
  renderDatasets();
  renderSystemsMeters();
  renderMissionPanel();
  renderMissionQueue();
  renderSandboxControls();
  renderRegionCard();
  renderTelemetry();
  updateMarkers();
  refs.earth.style.setProperty("--earth-scale", String(locationConfig[state.location].scale));
}

const starState = {
  ctx: null,
  stars: [],
  width: 0,
  height: 0,
};

function resizeStarfield() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = window.innerWidth;
  const height = window.innerHeight;

  starState.width = width;
  starState.height = height;
  refs.starfield.width = width * dpr;
  refs.starfield.height = height * dpr;
  refs.starfield.style.width = `${width}px`;
  refs.starfield.style.height = `${height}px`;

  const ctx = refs.starfield.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  starState.ctx = ctx;
  starState.stars = Array.from({ length: 180 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 1.8 + 0.2,
    speed: Math.random() * 0.3 + 0.05,
    alpha: Math.random() * 0.8 + 0.2,
  }));
}

function drawStarfield(timestamp) {
  const { ctx, width, height, stars } = starState;
  if (!ctx) {
    return;
  }

  ctx.clearRect(0, 0, width, height);

  const parallaxX = (state.pointerX - 0.5) * 22;
  const parallaxY = (state.pointerY - 0.5) * 16;

  stars.forEach((star, index) => {
    const y = (star.y + timestamp * star.speed * 0.02) % height;
    const x = (star.x + Math.sin(timestamp * 0.0002 + index) * 0.4 + parallaxX * star.size * 0.03 + width) % width;

    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.arc(x, y + parallaxY * star.size * 0.03, star.size, 0, Math.PI * 2);
    ctx.fill();
  });
}

function animate(timestamp) {
  drawStarfield(timestamp);

  const location = locationConfig[state.location];
  state.rotation += 0.0038 * location.rotationSpeed;
  state.weatherRotation += 0.11 * location.rotationSpeed;
  refs.earth.style.setProperty("--earth-shift", `${Math.sin(state.rotation) * 18}px`);
  refs.earth.style.setProperty("--weather-rotation", `${state.weatherRotation}deg`);

  if (state.autoAdvance && timestamp - state.lastAutoStep > 900) {
    state.lastAutoStep = timestamp;
    state.year = clamp(state.year + 1, 2026, 2100);

    if (state.year === 2100) {
      state.autoAdvance = false;
    }

    renderAll();
  }

  state.power = clamp(state.power + 0.01, 0, 100);
  updateMarkers();
  updateSatellites(timestamp);
  requestAnimationFrame(animate);
}

function init() {
  resizeStarfield();
  bindEvents();
  renderAll();
  requestAnimationFrame(animate);
}

init();
