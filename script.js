/* Kinematics Interactive – script.js – Developed by Team Leaders */

// ==================== TRANSLATIONS ====================
const T = {
  en: {
    title: "Kinematics Interactive", subtitle: "Velocity & Displacement", langButton: "عربي",
    tabConverter: "Unit Converter", tabAverage: "Average Velocity", tabInstantaneous: "Instantaneous Velocity",
    tabSlope: "Slope Calculator", tabAvgCalc: "Avg. Velocity Calculator", tabUniform: "Uniform Motion",
    converterTitle: "The Unit Master", converterDesc: "Convert between metric prefixes with visual calculation steps",
    inputValue: "Enter Value", fromPrefix: "From", toPrefix: "To", convertBtn: "Convert",
    result: "Result", steps: "Calculation Steps",
    avgTitle: "Average Velocity vs. Speed", avgDesc: "Watch how distance and displacement differ on a curved path",
    startBtn: "Start", resetBtn: "Reset", timeSlider: "Time Duration",
    distanceTraveled: "Distance Traveled", displacement: "Displacement",
    avgSpeed: "Average Speed", avgVelocity: "Average Velocity",
    path: "Path (Distance)", displacementVector: "Displacement Vector",
    seconds: "s", meters: "m", metersPerSec: "m/s",
    instTitle: "Instantaneous Velocity",
    instDesc: "Hover over the graph to see the tangent line and instantaneous velocity",
    simulation: "Simulation", positionTimeGraph: "Position-Time Graph",
    velocityTimeGraph: "Velocity-Time Graph",
    hoverInstruction: "Hover over the curve to see the tangent line",
    time: "Time", currentPosition: "Current Position",
    currentVelocity: "Instantaneous Velocity (Slope)",
    footer: "Developed by Team Leaders",
    footerThanks: "Special thanks to Eng. Fares Al-Matrudi & Saif Al-Otaibi",
    footerRights: "All rights reserved to Team Leaders",
    posLabel: "Position (m)", timeLabel: "Time (s)", velLabel: "Velocity (m/s)",
    prefixes: ["Tera (T)", "Giga (G)", "Mega (M)", "Kilo (k)", "Base (m)", "Deci (d)", "Centi (c)", "Milli (m)", "Micro (μ)", "Nano (n)", "Pico (p)", "Femto (f)"],
    stepToBase: "Convert to base unit (meters):", stepFromBase: "Convert from base unit to target:", stepFinal: "Final result:",
    controlsTitle: "Simulation Parameters",
    initialVelocityLabel: "Initial Velocity V\u2080 (m/s)", gravityLabel: "Gravitational Acceleration g (m/s\u00B2)",
    applyBtn: "Apply & Simulate", paramV0: "V\u2080", paramG: "g",
    maxHeight: "Max Height", totalTime: "Total Flight Time",
    equationsTitle: "Kinematic Equations",
    eqPosition: "Position as a function of time", eqVelocity: "Velocity as a function of time",
    eqMaxHeight: "Maximum height", eqTotalTime: "Total flight time",
    slopeTitle: "Graph Slope Calculator", slopeDesc: "Calculate the slope of a Position-Time graph to find velocity",
    slopeFormulaDesc: "The slope of the Position-Time graph equals the average velocity",
    runner1Title: "Runner 1 (Red)", runner2Title: "Runner 2 (Gray)",
    calcSlopeBtn: "Calculate Slopes", comparisonGraph: "Comparison Graph",
    slopeOfGraph: "Slope of graph", slopeResult: "= velocity",
    avgCalcTitle: "Average Velocity Calculator",
    avgCalcDesc: "Enter values to calculate average velocity with step-by-step solution",
    avgCalcFormulaDesc: "Average velocity is the change in position (displacement) divided by the time interval",
    enterValues: "Enter Known Values", calculateBtn: "Calculate", stepByStep: "Step-by-Step Solution",
    displacementResult: "Displacement (\u0394d)", timeIntervalResult: "Time Interval (\u0394t)",
    avgVelocityResult: "Average Velocity (v\u0305)", answerEvaluation: "Answer Evaluation",
    unitsCorrect: "Are units correct? Yes, m/s is the unit for both velocity and speed.",
    signMeaning: "Does the sign have meaning? Yes. A positive sign means motion in the positive direction.",
    step1Identify: "Step 1: Identify the known values", step2Calc: "Step 2: Calculate displacement",
    step3Time: "Step 3: Calculate time interval", step4Apply: "Step 4: Apply the formula",
    inPositiveDir: "in the positive direction", inNegativeDir: "in the negative direction",
    avgSpeedEquals: "Average speed = |v\u0305| =",
    uniformTitle: "Uniform Motion Equation",
    uniformDesc: "Explore d = v\u0305\u00B7t + d_i with an interactive graph",
    uniformFormulaDesc: "Position = velocity \u00D7 time + initial position",
    parameters: "Parameters",
    uniformVelocity: "Velocity v\u0305 (m/s)", uniformDi: "Initial Position d_i (m)", uniformTmax: "Max Time (s)",
    plotGraph: "Plot Graph", currentTime: "Current Time", currentPos: "Current Position",
    positionTable: "Position Table", timeCol: "Time (s)", positionCol: "Position (m)", calculationCol: "Calculation",
    chooseModel: "Choose Model",
    distDispGraph: "Distance & Displacement vs. Time",
    distLabel: "Distance / Displacement (m)",
    avgParams: "Simulation Parameters",
    avgSpeedInput: "Object Speed (m/s)",
    avgCurveInput: "Path Curvature",
    straight: "Straight",
    curvy: "Very Curvy"
  },
  ar: {
    title: "محاكاة تفاعلية للحركة", subtitle: "السرعة والإزاحة", langButton: "English",
    tabConverter: "محوّل الوحدات", tabAverage: "السرعة المتوسطة", tabInstantaneous: "السرعة اللحظية",
    tabSlope: "حاسبة الميل", tabAvgCalc: "حاسبة السرعة المتوسطة", tabUniform: "الحركة المنتظمة",
    converterTitle: "محوّل الوحدات", converterDesc: "حوّل بين البادئات المترية مع عرض خطوات الحل",
    inputValue: "أدخل القيمة", fromPrefix: "من", toPrefix: "إلى", convertBtn: "حوّل",
    result: "النتيجة", steps: "خطوات الحل",
    avgTitle: "السرعة المتوسطة مقابل السرعة القياسية", avgDesc: "شاهد كيف تختلف المسافة عن الإزاحة في مسار منحنٍ",
    startBtn: "ابدأ", resetBtn: "إعادة ضبط", timeSlider: "مدة الزمن",
    distanceTraveled: "المسافة المقطوعة", displacement: "الإزاحة",
    avgSpeed: "السرعة القياسية المتوسطة", avgVelocity: "السرعة المتجهة المتوسطة",
    path: "المسار (المسافة)", displacementVector: "متجه الإزاحة",
    seconds: "ث", meters: "م", metersPerSec: "م/ث",
    instTitle: "السرعة اللحظية",
    instDesc: "مرر الماوس فوق الرسم البياني لرؤية خط المماس والسرعة اللحظية",
    simulation: "المحاكاة", positionTimeGraph: "رسم الموقع-الزمن",
    velocityTimeGraph: "رسم السرعة-الزمن",
    hoverInstruction: "مرر الماوس فوق المنحنى لرؤية خط المماس",
    time: "الزمن", currentPosition: "الموقع الحالي",
    currentVelocity: "السرعة اللحظية (الميل)",
    footer: "تم التطوير بواسطة فريق ليدرز",
    footerThanks: "شكر خاص للمهندس فارس المطرودي وسيف العتيبي",
    footerRights: "جميع الحقوق محفوظة لفريق ليدرز",
    posLabel: "الموقع (م)", timeLabel: "الزمن (ث)", velLabel: "السرعة (م/ث)",
    prefixes: ["تيرا (T)", "جيجا (G)", "ميغا (M)", "كيلو (k)", "الأساس (m)", "ديسي (d)", "سنتي (c)", "ملّي (m)", "مايكرو (μ)", "نانو (n)", "بيكو (p)", "فمتو (f)"],
    stepToBase: "التحويل إلى الوحدة الأساسية (متر):", stepFromBase: "التحويل من الوحدة الأساسية إلى الهدف:", stepFinal: "النتيجة النهائية:",
    controlsTitle: "معاملات المحاكاة",
    initialVelocityLabel: "السرعة الابتدائية V\u2080 (م/ث)", gravityLabel: "تسارع الجاذبية g (م/ث\u00B2)",
    applyBtn: "تطبيق ومحاكاة", paramV0: "V\u2080", paramG: "g",
    maxHeight: "أقصى ارتفاع", totalTime: "زمن الطيران الكلي",
    equationsTitle: "معادلات الحركة",
    eqPosition: "الموقع كدالة في الزمن", eqVelocity: "السرعة كدالة في الزمن",
    eqMaxHeight: "أقصى ارتفاع", eqTotalTime: "زمن الطيران الكلي",
    slopeTitle: "حاسبة ميل الخط البياني", slopeDesc: "احسب ميل رسم الموقع-الزمن لإيجاد السرعة",
    slopeFormulaDesc: "ميل الخط البياني للموقع-الزمن يساوي السرعة المتجهة المتوسطة",
    runner1Title: "العداء الأول (الأحمر)", runner2Title: "العداء الثاني (الرمادي)",
    calcSlopeBtn: "احسب الميل", comparisonGraph: "رسم المقارنة",
    slopeOfGraph: "ميل الخط البياني", slopeResult: "= السرعة",
    avgCalcTitle: "حاسبة السرعة المتجهة المتوسطة",
    avgCalcDesc: "أدخل القيم لحساب السرعة المتجهة المتوسطة مع الحل خطوة بخطوة",
    avgCalcFormulaDesc: "تُعرّف السرعة المتجهة المتوسطة بأنها التغير في الموقع (الإزاحة) مقسوماً على الفترة الزمنية",
    enterValues: "أدخل القيم المعلومة", calculateBtn: "احسب", stepByStep: "الحل خطوة بخطوة",
    displacementResult: "الإزاحة (Δd)", timeIntervalResult: "الفترة الزمنية (Δt)",
    avgVelocityResult: "السرعة المتجهة المتوسطة (v\u0305)", answerEvaluation: "تقويم الجواب",
    unitsCorrect: "هل الوحدات صحيحة؟ نعم، فالوحدة m/s هي وحدة قياس كل من السرعة المتجهة والسرعة.",
    signMeaning: "هل للإشارات معنى؟ نعم. الإشارة الموجبة تعني الحركة في الاتجاه الموجب.",
    step1Identify: "الخطوة 1: تحديد القيم المعلومة", step2Calc: "الخطوة 2: حساب الإزاحة",
    step3Time: "الخطوة 3: حساب الفترة الزمنية", step4Apply: "الخطوة 4: تطبيق المعادلة",
    inPositiveDir: "في الاتجاه الموجب", inNegativeDir: "في الاتجاه السالب",
    avgSpeedEquals: "السرعة المتوسطة = |v\u0305| =",
    uniformTitle: "معادلة الحركة المنتظمة",
    uniformDesc: "استكشف المعادلة d = v\u0305\u00B7t + d_i مع رسم بياني تفاعلي",
    uniformFormulaDesc: "موقع الجسم = السرعة × الزمن + الموقع الابتدائي",
    parameters: "المعاملات",
    uniformVelocity: "السرعة v\u0305 (م/ث)", uniformDi: "الموقع الابتدائي d_i (م)", uniformTmax: "أقصى زمن (ث)",
    plotGraph: "ارسم الرسم البياني", currentTime: "الزمن الحالي", currentPos: "الموقع الحالي",
    positionTable: "جدول المواقع", timeCol: "الزمن (ث)", positionCol: "الموقع (م)", calculationCol: "العملية الحسابية",
    chooseModel: "اختر النموذج",
    distDispGraph: "المسافة والإزاحة مقابل الزمن",
    distLabel: "المسافة / الإزاحة (م)"
  }
};

// ==================== STATE ====================
let lang = "en", currentTab = "converter";
let carAnim = { running: false, progress: 0, rafId: null, startTime: 0 };
let posTimeChart = null, velTimeChart = null, slopeChartInstance = null, uniformChartInstance = null, avgVelChartInstance = null;
let planeAnim = { rafId: null };
let V0 = 25, G = 9.8, T_MAX = 2 * V0 / G, S_MAX = V0 * V0 / (2 * G);
let selectedVehicle = { avg: "car", inst: "plane", uniform: "car" };

// ==================== FULLSCREEN ====================
function toggleFullscreen(btn) {
  const wrapper = btn.closest('.chart-wrapper');
  wrapper.classList.toggle('fullscreen');
  btn.textContent = wrapper.classList.contains('fullscreen') ? '✕' : '⛶';
  // re-render charts after toggle
  setTimeout(() => {
    [posTimeChart, velTimeChart, slopeChartInstance, uniformChartInstance, avgVelChartInstance].forEach(c => { if (c) c.resize(); });
  }, 100);
}
// ESC to exit fullscreen
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.chart-wrapper.fullscreen').forEach(w => {
      w.classList.remove('fullscreen');
      w.querySelector('.fullscreen-btn').textContent = '⛶';
    });
  }
});

// ==================== VEHICLE DRAWING ====================
function drawVehicle(ctx, x, y, angle, type, sz) {
  const s = sz || 14;
  ctx.save(); ctx.translate(x, y); ctx.rotate(angle);
  ctx.shadowColor = "rgba(0,0,0,0.35)"; ctx.shadowBlur = 6; ctx.shadowOffsetY = 2;
  if (type === "car") {
    ctx.fillStyle = "#22d3ee"; ctx.beginPath(); ctx.roundRect(-s * 1.4, -s * 0.5, s * 2.8, s, s * 0.3); ctx.fill();
    ctx.fillStyle = "#0e7490"; ctx.beginPath(); ctx.roundRect(-s * 0.8, -s * 0.85, s * 1.3, s * 0.5, s * 0.2); ctx.fill();
    ctx.fillStyle = "#1e293b";
    ctx.beginPath(); ctx.arc(-s * 0.8, s * 0.5, s * 0.3, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(s * 0.8, s * 0.5, s * 0.3, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#fbbf24"; ctx.beginPath(); ctx.arc(s * 1.3, 0, s * 0.15, 0, Math.PI * 2); ctx.fill();
  } else if (type === "ball") {
    ctx.rotate(-angle);
    ctx.fillStyle = "#f97316"; ctx.beginPath(); ctx.arc(0, 0, s * 0.7, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "#fff"; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(0, 0, s * 0.7, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-s * 0.7, 0); ctx.lineTo(s * 0.7, 0); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, -s * 0.7); ctx.lineTo(0, s * 0.7); ctx.stroke();
  } else if (type === "bicycle") {
    ctx.strokeStyle = "#a78bfa"; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(-s * 0.6, 0, s * 0.45, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc(s * 0.6, 0, s * 0.45, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-s * 0.6, 0); ctx.lineTo(0, -s * 0.5); ctx.lineTo(s * 0.6, 0); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, -s * 0.5); ctx.lineTo(-s * 0.2, -s * 0.9); ctx.stroke();
    ctx.fillStyle = "#a78bfa"; ctx.beginPath(); ctx.arc(0, -s * 0.5, s * 0.12, 0, Math.PI * 2); ctx.fill();
  } else if (type === "motorcycle") {
    ctx.fillStyle = "#ef4444"; ctx.beginPath(); ctx.roundRect(-s * 1, -s * 0.4, s * 2, s * 0.6, s * 0.2); ctx.fill();
    ctx.fillStyle = "#991b1b"; ctx.beginPath(); ctx.roundRect(-s * 0.2, -s * 0.85, s * 0.7, s * 0.55, s * 0.15); ctx.fill();
    ctx.fillStyle = "#1e293b";
    ctx.beginPath(); ctx.arc(-s * 0.7, s * 0.3, s * 0.35, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(s * 0.7, s * 0.3, s * 0.35, 0, Math.PI * 2); ctx.fill();
  } else if (type === "truck") {
    ctx.fillStyle = "#64748b"; ctx.beginPath(); ctx.roundRect(-s * 1.6, -s * 0.6, s * 3.2, s * 1.1, s * 0.2); ctx.fill();
    ctx.fillStyle = "#475569"; ctx.beginPath(); ctx.roundRect(-s * 1.6, -s * 0.9, s * 1, s * 0.5, s * 0.15); ctx.fill();
    ctx.fillStyle = "#1e293b";
    ctx.beginPath(); ctx.arc(-s * 1, s * 0.55, s * 0.35, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(s * 0.5, s * 0.55, s * 0.35, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(s * 1.1, s * 0.55, s * 0.35, 0, Math.PI * 2); ctx.fill();
  } else if (type === "plane") {
    ctx.fillStyle = "#38bdf8";
    ctx.beginPath(); ctx.moveTo(s * 1.5, 0); ctx.lineTo(-s * 0.5, -s * 0.3); ctx.lineTo(-s * 1.2, -s * 0.15); ctx.lineTo(-s * 1.2, s * 0.15); ctx.lineTo(-s * 0.5, s * 0.3); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#0284c7";
    ctx.beginPath(); ctx.moveTo(-s * 0.3, -s * 0.25); ctx.lineTo(-s * 0.8, -s * 0.9); ctx.lineTo(-s * 1, -s * 0.25); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(-s * 0.3, s * 0.25); ctx.lineTo(-s * 0.8, s * 0.9); ctx.lineTo(-s * 1, s * 0.25); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#0c4a6e";
    ctx.beginPath(); ctx.moveTo(-s * 1.1, 0); ctx.lineTo(-s * 1.3, -s * 0.35); ctx.lineTo(-s * 1.5, 0); ctx.lineTo(-s * 1.3, s * 0.35); ctx.closePath(); ctx.fill();
  } else if (type === "rocket") {
    ctx.fillStyle = "#f43f5e";
    ctx.beginPath(); ctx.moveTo(s * 1.3, 0); ctx.quadraticCurveTo(s * 0.8, -s * 0.4, -s * 0.8, -s * 0.35); ctx.lineTo(-s * 0.8, s * 0.35); ctx.quadraticCurveTo(s * 0.8, s * 0.4, s * 1.3, 0); ctx.fill();
    ctx.fillStyle = "#fbbf24";
    ctx.beginPath(); ctx.moveTo(-s * 0.8, -s * 0.15); ctx.lineTo(-s * 1.3, 0); ctx.lineTo(-s * 0.8, s * 0.15); ctx.fill();
    ctx.fillStyle = "#9f1239";
    ctx.beginPath(); ctx.moveTo(-s * 0.5, -s * 0.3); ctx.lineTo(-s * 0.8, -s * 0.7); ctx.lineTo(-s * 0.7, -s * 0.25); ctx.fill();
    ctx.beginPath(); ctx.moveTo(-s * 0.5, s * 0.3); ctx.lineTo(-s * 0.8, s * 0.7); ctx.lineTo(-s * 0.7, s * 0.25); ctx.fill();
  } else { // Default to person
    ctx.rotate(-angle);
    ctx.fillStyle = "#14b8a6"; ctx.beginPath(); ctx.arc(0, -s * 0.6, s * 0.35, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#0d9488"; ctx.beginPath(); ctx.roundRect(-s * 0.3, -s * 0.3, s * 0.6, s * 0.7, s * 0.15); ctx.fill();
    ctx.strokeStyle = "#0d9488"; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(-s * 0.15, s * 0.4); ctx.lineTo(-s * 0.3, s * 1); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(s * 0.15, s * 0.4); ctx.lineTo(s * 0.3, s * 1); ctx.stroke();
  }
  ctx.restore();
}

function setupVehicleGrid(containerId, stateKey) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.querySelectorAll('.vehicle-option').forEach(opt => {
    opt.addEventListener('click', () => {
      container.querySelectorAll('.vehicle-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      selectedVehicle[stateKey] = opt.dataset.vehicle;
      // Redraw
      if (stateKey === "avg") drawCarScene();
      if (stateKey === "inst") drawPlaneScene(0);
      if (stateKey === "uniform") { } // no canvas for uniform
    });
  });
}

// ==================== PHYSICS ====================
function recalcPhysics() {
  V0 = parseFloat(document.getElementById("inputV0").value) || 25;
  G = parseFloat(document.getElementById("inputG").value) || 9.8;
  if (V0 <= 0) V0 = 1; if (G <= 0) G = 0.1;
  T_MAX = 2 * V0 / G; S_MAX = V0 * V0 / (2 * G);
  const u = T[lang];
  document.getElementById("paramV0Val").textContent = V0 + " " + u.metersPerSec;
  document.getElementById("paramGVal").textContent = G + " m/s\u00B2";
  document.getElementById("paramSmaxVal").textContent = S_MAX.toFixed(2) + " " + u.meters;
  document.getElementById("paramTtotalVal").textContent = T_MAX.toFixed(2) + " " + u.seconds;
}
function posAtTime(t) { return V0 * t - 0.5 * G * t * t; }
function velAtTime(t) { return V0 - G * t; }

const PREFIXES = [
  { key: "T", exp: 12 }, { key: "G", exp: 9 }, { key: "M", exp: 6 }, { key: "k", exp: 3 },
  { key: "base", exp: 0 }, { key: "d", exp: -1 }, { key: "c", exp: -2 }, { key: "m_", exp: -3 },
  { key: "μ", exp: -6 }, { key: "n", exp: -9 }, { key: "p", exp: -12 }, { key: "f", exp: -15 }
];

// ==================== LANGUAGE ====================
function setLanguage(l) {
  lang = l;
  document.documentElement.lang = l === "ar" ? "ar" : "en";
  document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
  document.getElementById("langToggle").textContent = T[lang].langButton;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (T[lang][key]) el.textContent = T[lang][key];
  });
  populateSelects();
  if (currentTab === "converter") convertUnits();
  if (currentTab === "average") { readAvgParams(); calcAvgChartFullData(); drawCarScene(); initAvgChart(); }
  if (currentTab === "instantaneous") { recalcPhysics(); initInstantaneous(); }
  if (currentTab === "slope") renderSlopeFormula();
  if (currentTab === "avgCalc") renderAvgCalcFormula();
  if (currentTab === "uniform") renderUniformFormula();
}

// ==================== TABS ====================
function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
  document.querySelectorAll(".tab-content").forEach(s => s.classList.toggle("hidden", s.id !== "tab-" + tab));
  if (tab !== "average") { cancelAnimationFrame(carAnim.rafId); carAnim.running = false; }
  if (tab === "average") setTimeout(() => { readAvgParams(); sizeCarCanvas(); calcAvgChartFullData(); drawCarScene(); initAvgChart(); }, 50);
  if (tab === "instantaneous") setTimeout(() => { recalcPhysics(); initInstantaneous(); renderEquations(); }, 50);
  if (tab === "slope") setTimeout(renderSlopeFormula, 50);
  if (tab === "avgCalc") setTimeout(renderAvgCalcFormula, 50);
  if (tab === "uniform") setTimeout(() => { renderUniformFormula(); initUniformChart(); }, 50);
}

// ==================== UNIT CONVERTER ====================
function populateSelects() {
  const from = document.getElementById("fromUnit"), to = document.getElementById("toUnit");
  const sf = from.selectedIndex >= 0 ? from.selectedIndex : 3, st = to.selectedIndex >= 0 ? to.selectedIndex : 4;
  from.innerHTML = ""; to.innerHTML = "";
  T[lang].prefixes.forEach((n, i) => { from.add(new Option(n, i)); to.add(new Option(n, i)); });
  from.selectedIndex = sf; to.selectedIndex = st;
}
function convertUnits() {
  const val = parseFloat(document.getElementById("convertValue").value); if (isNaN(val)) return;
  const fi = parseInt(document.getElementById("fromUnit").value), ti = parseInt(document.getElementById("toUnit").value);
  const fe = PREFIXES[fi].exp, te = PREFIXES[ti].exp, res = val * Math.pow(10, fe - te);
  document.getElementById("convertResult").classList.remove("hidden");
  const fn = T[lang].prefixes[fi], tn = T[lang].prefixes[ti];
  document.getElementById("resultValue").innerHTML = `<span class="text-teal-300">${val} ${fn}</span> = <span class="text-cyan-300">${fmtSci(res)} ${tn}</span>`;
  const bv = val * Math.pow(10, fe);
  document.getElementById("resultSteps").innerHTML = `
    <p class="p-3 bg-slate-800/50 rounded-lg font-mono text-sm"><span class="text-slate-400">${T[lang].stepToBase}</span><br>${val} × 10<sup>${fe}</sup> = ${fmtSci(bv)} m</p>
    <p class="p-3 bg-slate-800/50 rounded-lg font-mono text-sm"><span class="text-slate-400">${T[lang].stepFromBase}</span><br>${fmtSci(bv)} ÷ 10<sup>${te}</sup> = ${fmtSci(res)} ${tn}</p>
    <p class="p-3 bg-teal-900/30 border border-teal-700/30 rounded-lg font-mono text-sm"><span class="text-teal-400">${T[lang].stepFinal}</span><br><strong>${val} ${fn} = ${fmtSci(res)} ${tn}</strong></p>`;
}
function fmtSci(n) { if (n === 0) return "0"; const a = Math.abs(n); if (a >= 0.001 && a < 1e6) return parseFloat(n.toPrecision(10)).toString(); return n.toExponential(4); }

// ==================== SLOPE CALCULATOR ====================
function renderSlopeFormula() {
  const el = document.getElementById("slopeFormula"); if (!el) return;
  if (typeof katex !== "undefined") { try { katex.render("\\text{slope}=\\frac{d_f-d_i}{t_f-t_i}", el, { throwOnError: false, displayMode: true }); } catch (e) { } }
  else { el.textContent = "slope = (df-di)/(tf-ti)"; setTimeout(renderSlopeFormula, 300); }
}
function calcSlopes() {
  const g = id => parseFloat(document.getElementById(id).value) || 0;
  const r1di = g("r1di"), r1df = g("r1df"), r1ti = g("r1ti"), r1tf = g("r1tf");
  const r1dd = r1df - r1di, r1dt = r1tf - r1ti, r1s = r1dt ? r1dd / r1dt : 0;
  document.getElementById("r1Steps").innerHTML = `
    <div class="p-3 bg-slate-800/50 rounded-lg font-mono"><span class="text-rose-400">${T[lang].slopeOfGraph}</span> = (d<sub>f</sub>-d<sub>i</sub>)/(t<sub>f</sub>-t<sub>i</sub>)</div>
    <div class="p-3 bg-slate-800/50 rounded-lg font-mono">= (${r1df}-${r1di})m / (${r1tf}-${r1ti})s</div>
    <div class="p-3 bg-rose-900/30 border border-rose-700/30 rounded-lg font-mono font-bold">= ${r1s.toFixed(1)} m/s</div>`;
  const r2di = g("r2di"), r2df = g("r2df"), r2ti = g("r2ti"), r2tf = g("r2tf");
  const r2dd = r2df - r2di, r2dt = r2tf - r2ti, r2s = r2dt ? r2dd / r2dt : 0;
  document.getElementById("r2Steps").innerHTML = `
    <div class="p-3 bg-slate-800/50 rounded-lg font-mono"><span class="text-cyan-400">${T[lang].slopeOfGraph}</span> = (d<sub>f</sub>-d<sub>i</sub>)/(t<sub>f</sub>-t<sub>i</sub>)</div>
    <div class="p-3 bg-slate-800/50 rounded-lg font-mono">= (${r2df}-${r2di})m / (${r2tf}-${r2ti})s</div>
    <div class="p-3 bg-cyan-900/30 border border-cyan-700/30 rounded-lg font-mono font-bold">= ${r2s.toFixed(1)} m/s</div>`;
  if (slopeChartInstance) slopeChartInstance.destroy();
  slopeChartInstance = new Chart(document.getElementById("slopeChart"), {
    type: "scatter", data: {
      datasets: [
        { label: lang === "ar" ? "العداء1" : "Runner1", data: [{ x: r1ti, y: r1di }, { x: r1tf, y: r1df }], showLine: true, borderColor: "#fb7185", borderWidth: 3, pointRadius: 6, pointBackgroundColor: "#fb7185", fill: false },
        { label: lang === "ar" ? "العداء2" : "Runner2", data: [{ x: r2ti, y: r2di }, { x: r2tf, y: r2df }], showLine: true, borderColor: "#22d3ee", borderWidth: 3, pointRadius: 6, pointBackgroundColor: "#22d3ee", fill: false }
      ]
    }, options: {
      responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: "#94a3b8" } } },
      scales: {
        x: { title: { display: true, text: T[lang].timeLabel, color: "#94a3b8" }, grid: { color: "rgba(148,163,184,0.08)" }, ticks: { color: "#94a3b8" } },
        y: { title: { display: true, text: T[lang].posLabel, color: "#94a3b8" }, grid: { color: "rgba(148,163,184,0.08)" }, ticks: { color: "#94a3b8" } }
      }
    }
  });
}

// ==================== AVG VELOCITY CALCULATOR ====================
function renderAvgCalcFormula() {
  const el = document.getElementById("avgCalcFormula"); if (!el) return;
  if (typeof katex !== "undefined") { try { katex.render("\\bar{v}=\\frac{\\Delta d}{\\Delta t}=\\frac{d_f-d_i}{t_f-t_i}", el, { throwOnError: false, displayMode: true }); } catch (e) { } }
  else { el.textContent = "v̄ = Δd/Δt"; setTimeout(renderAvgCalcFormula, 300); }
}
function calcAvgVelocity() {
  const g = id => parseFloat(document.getElementById(id).value) || 0;
  const di = g("avgDi"), df = g("avgDf"), ti = g("avgTi"), tf = g("avgTf");
  const dd = df - di, dt = tf - ti, vel = dt ? dd / dt : 0; const u = T[lang];
  document.getElementById("avgCalcResult").classList.remove("hidden");
  document.getElementById("avgEvaluation").classList.remove("hidden");
  document.getElementById("avgCalcSteps").innerHTML = `
    <div class="p-3 bg-slate-800/50 rounded-lg"><span class="text-teal-400">${u.step1Identify}</span><br><span class="font-mono">d<sub>i</sub>=${di}m, d<sub>f</sub>=${df}m, t<sub>i</sub>=${ti}s, t<sub>f</sub>=${tf}s</span></div>
    <div class="p-3 bg-slate-800/50 rounded-lg"><span class="text-teal-400">${u.step2Calc}</span><br><span class="font-mono">\u0394d = ${df} - ${di} = ${dd.toFixed(1)} m</span></div>
    <div class="p-3 bg-slate-800/50 rounded-lg"><span class="text-teal-400">${u.step3Time}</span><br><span class="font-mono">\u0394t = ${tf} - ${ti} = ${dt.toFixed(1)} s</span></div>
    <div class="p-3 bg-slate-800/50 rounded-lg"><span class="text-teal-400">${u.step4Apply}</span><br><span class="font-mono">v\u0305 = ${dd.toFixed(1)} / ${dt.toFixed(1)} = ${vel.toFixed(1)} m/s</span></div>
    <div class="p-3 bg-teal-900/30 border border-teal-700/30 rounded-lg font-mono font-bold">v\u0305 = ${vel.toFixed(1)} m/s ${vel >= 0 ? u.inPositiveDir : u.inNegativeDir}<br>${u.avgSpeedEquals} ${Math.abs(vel).toFixed(1)} m/s</div>`;
  document.getElementById("avgDisplacementVal").textContent = dd.toFixed(1) + " m";
  document.getElementById("avgTimeIntervalVal").textContent = dt.toFixed(1) + " s";
  document.getElementById("avgVelocityCalcVal").textContent = vel.toFixed(1) + " m/s";
  document.getElementById("avgEvalContent").innerHTML = `
    <div class="p-3 bg-slate-800/50 rounded-lg">\u2022 ${u.unitsCorrect}</div>
    <div class="p-3 bg-slate-800/50 rounded-lg">\u2022 ${u.signMeaning}</div>`;
}

// ==================== UNIFORM MOTION ====================
function renderUniformFormula() {
  const el = document.getElementById("uniformFormula"); if (!el) return;
  if (typeof katex !== "undefined") { try { katex.render("d=\\bar{v}\\cdot t+d_i", el, { throwOnError: false, displayMode: true }); } catch (e) { } }
  else { el.textContent = "d = v̄·t + di"; setTimeout(renderUniformFormula, 300); }
}
function initUniformChart() {
  const v = parseFloat(document.getElementById("uniformV").value) || 1.7;
  const di = parseFloat(document.getElementById("uniformDi").value) || 0;
  const tmax = parseFloat(document.getElementById("uniformTmax").value) || 10;
  const u = T[lang];
  document.getElementById("uniformVVal").textContent = v + " " + u.metersPerSec;
  document.getElementById("uniformDiVal").textContent = di + " " + u.meters;
  const data = []; for (let t = 0; t <= tmax; t += 0.1)data.push({ x: +t.toFixed(1), y: +(v * t + di).toFixed(2) });
  if (uniformChartInstance) uniformChartInstance.destroy();
  const tooltip = document.getElementById("uniformTooltip");
  uniformChartInstance = new Chart(document.getElementById("uniformChart"), {
    type: "scatter", data: { datasets: [{ label: "d(t)", data, showLine: true, borderColor: "#22d3ee", borderWidth: 3, pointRadius: 0, backgroundColor: "rgba(34,211,238,0.08)", fill: true, tension: 0 }] },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { mode: "nearest", axis: "x", intersect: false },
      onHover: (_e, els) => {
        if (els.length) {
          const pt = data[els[0].index];
          document.getElementById("uniformTVal").textContent = pt.x.toFixed(1) + " " + u.seconds;
          document.getElementById("uniformDVal").textContent = pt.y.toFixed(2) + " " + u.meters;
          if (tooltip) { tooltip.textContent = `t = ${pt.x.toFixed(1)}${u.seconds}  |  d = ${pt.y.toFixed(2)}${u.meters}`; tooltip.classList.add("visible"); }
        } else { if (tooltip) tooltip.classList.remove("visible"); }
      },
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      scales: {
        x: { title: { display: true, text: u.timeLabel, color: "#94a3b8" }, grid: { color: "rgba(148,163,184,0.08)" }, ticks: { color: "#94a3b8" } },
        y: { title: { display: true, text: u.posLabel, color: "#94a3b8" }, grid: { color: "rgba(148,163,184,0.08)" }, ticks: { color: "#94a3b8" } }
      }
    }
  });
  // Table
  const tbody = document.getElementById("uniformTableBody"); tbody.innerHTML = "";
  for (let t = 0; t <= tmax; t += 1) {
    const d = v * t + di; const tr = document.createElement("tr"); tr.className = "border-b border-slate-800 hover:bg-slate-800/30 transition-colors";
    tr.innerHTML = `<td class="py-2 px-3 font-mono text-center">${t}</td><td class="py-2 px-3 font-mono text-center text-teal-400">${d.toFixed(1)}</td><td class="py-2 px-3 font-mono text-center text-slate-400">${v}×${t}+${di}=${d.toFixed(1)}</td>`;
    tbody.appendChild(tr);
  }
}

// ==================== AVERAGE VELOCITY ANIMATION ====================
let carPath = [], carDists = [];
let avgUserSpeed = 50, avgCurvature = 0.6, avgTimeDuration = 5;
function readAvgParams() {
  avgUserSpeed = parseFloat(document.getElementById("avgSpeedInput").value) || 50;
  avgCurvature = (parseFloat(document.getElementById("avgCurveInput").value) || 60) / 100;
  avgTimeDuration = parseFloat(document.getElementById("avgTimeDuration").value) || 5;
  if (avgUserSpeed < 1) avgUserSpeed = 1;
  if (avgTimeDuration < 0.5) avgTimeDuration = 0.5;
}
function sizeCarCanvas() { const c = document.getElementById("carCanvas"), r = c.getBoundingClientRect(); c.width = r.width; c.height = r.height; generateCarPath(); }
function generateCarPath() {
  const c = document.getElementById("carCanvas"), w = c.width, h = c.height;
  const curve = avgCurvature;
  carPath = [];
  for (let i = 0; i <= 400; i++) {
    const t = i / 400;
    carPath.push({
      x: w * 0.06 + t * w * 0.88,
      y: h * 0.5 + Math.sin(t * Math.PI * 3) * h * 0.28 * curve + Math.sin(t * Math.PI * 1.3 + 1) * h * 0.12 * curve
    });
  }
  carDists = [0];
  for (let i = 1; i < carPath.length; i++) {
    const dx = carPath[i].x - carPath[i - 1].x, dy = carPath[i].y - carPath[i - 1].y;
    carDists.push(carDists[i - 1] + Math.sqrt(dx * dx + dy * dy));
  }
}
// Pre-calculate chart data for the FULL path
function calcAvgChartFullData() {
  if (!carPath.length || !carDists.length) return;
  const totalPixelDist = carDists[carDists.length - 1];
  const totalRealDist = avgUserSpeed * avgTimeDuration;
  const pixelToReal = totalRealDist / totalPixelDist;
  const N = 100;
  avgFullDistData = []; avgFullDispData = [];
  for (let i = 0; i <= N; i++) {
    const frac = i / N;
    const tNow = frac * avgTimeDuration;
    const idx = Math.min(Math.floor(frac * (carPath.length - 1)), carPath.length - 1);
    const dist = carDists[idx] * pixelToReal;
    const dx = carPath[idx].x - carPath[0].x, dy = carPath[idx].y - carPath[0].y;
    const disp = Math.sqrt(dx * dx + dy * dy) * pixelToReal;
    avgFullDistData.push({ x: +tNow.toFixed(2), y: +dist.toFixed(1) });
    avgFullDispData.push({ x: +tNow.toFixed(2), y: +disp.toFixed(1) });
  }
}
let avgFullDistData = [], avgFullDispData = [];
function drawCarScene() {
  const c = document.getElementById("carCanvas"), ctx = c.getContext("2d"), w = c.width, h = c.height;
  ctx.clearRect(0, 0, w, h); if (!carPath.length) return;
  // Road
  ctx.beginPath(); ctx.moveTo(carPath[0].x, carPath[0].y); for (let i = 1; i < carPath.length; i++)ctx.lineTo(carPath[i].x, carPath[i].y);
  ctx.strokeStyle = "rgba(34,211,238,0.25)"; ctx.lineWidth = 28; ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.stroke();
  ctx.setLineDash([12, 18]); ctx.strokeStyle = "rgba(148,163,184,0.2)"; ctx.lineWidth = 2; ctx.stroke(); ctx.setLineDash([]);
  const idx = Math.min(Math.floor(carAnim.progress * (carPath.length - 1)), carPath.length - 1);
  // Traced path
  if (idx > 0) { ctx.beginPath(); ctx.moveTo(carPath[0].x, carPath[0].y); for (let i = 1; i <= idx; i++)ctx.lineTo(carPath[i].x, carPath[i].y); ctx.strokeStyle = "#22d3ee"; ctx.lineWidth = 4; ctx.lineCap = "round"; ctx.stroke(); }
  // Displacement arrow
  if (idx > 0) drawArrow(ctx, carPath[0].x, carPath[0].y, carPath[idx].x, carPath[idx].y, "#fb7185", 3);
  // Vehicle
  const cp = carPath[idx], np = carPath[Math.min(idx + 1, carPath.length - 1)];
  const angle = Math.atan2(np.y - cp.y, np.x - cp.x);
  drawVehicle(ctx, cp.x, cp.y, angle, selectedVehicle.avg, 14);
  // Points
  drawDot(ctx, carPath[0].x, carPath[0].y, "#14b8a6", "A");
  if (idx >= carPath.length - 2) drawDot(ctx, carPath[carPath.length - 1].x, carPath[carPath.length - 1].y, "#f43f5e", "B");
  // Stats using real units
  const totalPixelDist = carDists[carDists.length - 1];
  const totalRealDist = avgUserSpeed * avgTimeDuration;
  const pixelToReal = totalRealDist / totalPixelDist;
  const dist = carDists[idx] * pixelToReal;
  const dx = carPath[idx].x - carPath[0].x, dy = carPath[idx].y - carPath[0].y;
  const disp = Math.sqrt(dx * dx + dy * dy) * pixelToReal;
  const elapsed = carAnim.progress * avgTimeDuration, u = T[lang];
  document.getElementById("distanceVal").textContent = dist.toFixed(1) + " " + u.meters;
  document.getElementById("displacementVal").textContent = disp.toFixed(1) + " " + u.meters;
  document.getElementById("avgSpeedVal").textContent = elapsed > 0 ? (dist / elapsed).toFixed(1) + " " + u.metersPerSec : "0 " + u.metersPerSec;
  document.getElementById("avgVelVal").textContent = elapsed > 0 ? (disp / elapsed).toFixed(1) + " " + u.metersPerSec : "0 " + u.metersPerSec;
  updateAvgChartProgress();
}
function drawArrow(ctx, x1, y1, x2, y2, c, lw) { const a = Math.atan2(y2 - y1, x2 - x1), l = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2); if (l < 5) return; ctx.save(); ctx.strokeStyle = c; ctx.fillStyle = c; ctx.lineWidth = lw; ctx.setLineDash([8, 6]); ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); ctx.setLineDash([]); ctx.beginPath(); ctx.moveTo(x2, y2); ctx.lineTo(x2 - 12 * Math.cos(a - 0.4), y2 - 12 * Math.sin(a - 0.4)); ctx.lineTo(x2 - 12 * Math.cos(a + 0.4), y2 - 12 * Math.sin(a + 0.4)); ctx.closePath(); ctx.fill(); ctx.restore(); }
function drawDot(ctx, x, y, c, l) { ctx.fillStyle = c; ctx.beginPath(); ctx.arc(x, y, 8, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = "#fff"; ctx.font = "bold 10px Inter,sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(l, x, y); }
function startCar() { if (carAnim.running) return; readAvgParams(); generateCarPath(); calcAvgChartFullData(); initAvgChart(); carAnim.running = true; carAnim.startTime = performance.now(); carAnim.progress = 0; document.getElementById("startBtn").classList.remove("pulse-animation"); animateCar(); }
function animateCar() { const e = (performance.now() - carAnim.startTime) / 1000; carAnim.progress = Math.min(e / avgTimeDuration, 1); drawCarScene(); if (carAnim.progress < 1) carAnim.rafId = requestAnimationFrame(animateCar); else carAnim.running = false; }
function resetCar() { cancelAnimationFrame(carAnim.rafId); carAnim.running = false; carAnim.progress = 0; document.getElementById("startBtn").classList.add("pulse-animation"); readAvgParams(); generateCarPath(); calcAvgChartFullData(); drawCarScene(); initAvgChart(); }

// ==================== AVG VELOCITY CHART ====================
function updateAvgChartProgress() {
  if (!avgVelChartInstance) return;
  avgVelChartInstance._progressFrac = carAnim.progress;
  avgVelChartInstance.update("none");
}
const avgChartProgressPlugin = {
  id: "avgProgress", afterDatasetsDraw(chart) {
    const frac = chart._progressFrac;
    if (frac == null || frac <= 0) return;
    const { ctx } = chart, xS = chart.scales.x;
    const tNow = frac * avgTimeDuration;
    const px = xS.getPixelForValue(tNow);
    // Vertical progress line
    ctx.save();
    ctx.beginPath(); ctx.moveTo(px, chart.scales.y.top); ctx.lineTo(px, chart.scales.y.bottom);
    ctx.strokeStyle = "#fbbf24"; ctx.lineWidth = 2; ctx.setLineDash([6, 3]); ctx.stroke(); ctx.setLineDash([]);
    // Dots on both curves at current time
    chart.data.datasets.forEach((ds, di) => {
      const idx = Math.round(frac * (ds.data.length - 1));
      const meta = chart.getDatasetMeta(di); if (!meta.data[idx]) return;
      const pt = meta.data[idx];
      ctx.beginPath(); ctx.arc(pt.x, pt.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = ds.borderColor; ctx.fill(); ctx.strokeStyle = "#fff"; ctx.lineWidth = 2; ctx.stroke();
    });
    ctx.restore();
  }
};
const avgChartHoverPlugin = {
  id: "avgHover", afterDatasetsDraw(chart) {
    const mp = chart._hoverIdx; if (mp == null) return;
    const { ctx } = chart;
    chart.data.datasets.forEach((ds, di) => {
      const meta = chart.getDatasetMeta(di); if (!meta.data[mp]) return;
      const pt = meta.data[mp];
      ctx.save();
      ctx.beginPath(); ctx.arc(pt.x, pt.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = ds.borderColor; ctx.globalAlpha = 0.7; ctx.fill();
      ctx.strokeStyle = "#fff"; ctx.lineWidth = 1.5; ctx.globalAlpha = 1; ctx.stroke();
      ctx.beginPath(); ctx.moveTo(pt.x, chart.scales.y.top); ctx.lineTo(pt.x, chart.scales.y.bottom);
      ctx.strokeStyle = "rgba(148,163,184,0.25)"; ctx.setLineDash([4, 4]); ctx.lineWidth = 1; ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    });
  }
};
function initAvgChart() {
  if (avgVelChartInstance) avgVelChartInstance.destroy();
  const u = T[lang], tooltip = document.getElementById("avgChartTooltip");
  avgVelChartInstance = new Chart(document.getElementById("avgVelChart"), {
    type: "scatter",
    data: {
      datasets: [
        { label: u.distanceTraveled, data: avgFullDistData.slice(), showLine: true, borderColor: "#22d3ee", borderWidth: 2.5, pointRadius: 0, backgroundColor: "rgba(34,211,238,0.06)", fill: true, tension: 0.3 },
        { label: u.displacement, data: avgFullDispData.slice(), showLine: true, borderColor: "#fb7185", borderWidth: 2.5, pointRadius: 0, backgroundColor: "rgba(251,113,133,0.06)", fill: true, tension: 0.3, borderDash: [6, 4] }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
      interaction: { mode: "nearest", axis: "x", intersect: false },
      onHover: (_e, els) => {
        if (els.length) {
          const i = els[0].index; avgVelChartInstance._hoverIdx = i;
          const dp = avgFullDistData[i], sp = avgFullDispData[i];
          if (dp && tooltip) {
            tooltip.textContent = `t=${dp.x.toFixed(1)}${u.seconds} | ${u.distanceTraveled}=${dp.y.toFixed(1)}${u.meters} | ${u.displacement}=${sp.y.toFixed(1)}${u.meters}`;
            tooltip.classList.add("visible");
          }
        } else { avgVelChartInstance._hoverIdx = null; if (tooltip) tooltip.classList.remove("visible"); }
        avgVelChartInstance.update("none");
      },
      plugins: { legend: { labels: { color: "#94a3b8", usePointStyle: true } }, tooltip: { enabled: false } },
      scales: {
        x: { title: { display: true, text: u.timeLabel, color: "#94a3b8" }, min: 0, max: avgTimeDuration, grid: { color: "rgba(148,163,184,0.08)" }, ticks: { color: "#94a3b8" } },
        y: { title: { display: true, text: u.distLabel || "Distance / Displacement (m)", color: "#94a3b8" }, min: 0, grid: { color: "rgba(148,163,184,0.08)" }, ticks: { color: "#94a3b8" } }
      }
    },
    plugins: [avgChartProgressPlugin, avgChartHoverPlugin]
  });
}

// ==================== INSTANTANEOUS VELOCITY ====================
let planeCanvasEl, planeCtx;
function sizePlaneCanvas() { planeCanvasEl = document.getElementById("planeCanvas"); const r = planeCanvasEl.getBoundingClientRect(); planeCanvasEl.width = r.width; planeCanvasEl.height = r.height; }
function drawPlaneScene(tC) {
  if (!planeCanvasEl) return; const ctx = planeCtx, w = planeCanvasEl.width, h = planeCanvasEl.height;
  ctx.clearRect(0, 0, w, h); const pX = 40, pY = 30, pW = w - 2 * pX, pH = h - 2 * pY;
  function toC(t, s) { return { x: pX + (t / T_MAX) * pW, y: h - pY - (s / (S_MAX * 1.15)) * pH }; }
  const gl = toC(0, 0); ctx.strokeStyle = "rgba(148,163,184,0.2)"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(pX, gl.y); ctx.lineTo(w - pX, gl.y); ctx.stroke();
  // Full trajectory (faded)
  ctx.beginPath(); for (let i = 0; i <= 200; i++) { const tt = (i / 200) * T_MAX, ss = posAtTime(tt), p = toC(tt, Math.max(ss, 0)); i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y); } ctx.strokeStyle = "rgba(56,189,248,0.2)"; ctx.lineWidth = 2; ctx.setLineDash([6, 6]); ctx.stroke(); ctx.setLineDash([]);
  // Traced path
  ctx.beginPath(); for (let i = 0; i <= 200; i++) { const tt = (i / 200) * tC, ss = posAtTime(tt), p = toC(tt, Math.max(ss, 0)); i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y); } ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 3; ctx.stroke();
  // Vehicle
  const sN = posAtTime(tC), pN = toC(tC, Math.max(sN, 0)), vN = velAtTime(tC);
  drawVehicle(ctx, pN.x, pN.y, Math.atan2(-vN, 10), selectedVehicle.inst, 14);
}
const tangentPlugin = { id: "tangentLine", afterDatasetsDraw(chart) { const tp = chart._tangentPoint; if (!tp) return; const { ctx } = chart, xS = chart.scales.x, yS = chart.scales.y, slope = velAtTime(tp.x), dt = 0.7, t1 = Math.max(tp.x - dt, 0), t2 = Math.min(tp.x + dt, T_MAX), s1 = tp.y + slope * (t1 - tp.x), s2 = tp.y + slope * (t2 - tp.x); ctx.save(); ctx.beginPath(); ctx.moveTo(xS.getPixelForValue(t1), yS.getPixelForValue(s1)); ctx.lineTo(xS.getPixelForValue(t2), yS.getPixelForValue(s2)); ctx.strokeStyle = "#fb7185"; ctx.lineWidth = 2.5; ctx.setLineDash([6, 4]); ctx.stroke(); ctx.setLineDash([]); ctx.beginPath(); ctx.arc(xS.getPixelForValue(tp.x), yS.getPixelForValue(tp.y), 6, 0, Math.PI * 2); ctx.fillStyle = "#fb7185"; ctx.fill(); ctx.strokeStyle = "#fff"; ctx.lineWidth = 2; ctx.stroke(); ctx.restore(); } };
const velMarkerPlugin = { id: "velMarker", afterDatasetsDraw(chart) { const tp = chart._markerPoint; if (!tp) return; const { ctx } = chart, xS = chart.scales.x, yS = chart.scales.y; ctx.save(); ctx.beginPath(); ctx.arc(xS.getPixelForValue(tp.x), yS.getPixelForValue(tp.y), 6, 0, Math.PI * 2); ctx.fillStyle = "#fb7185"; ctx.fill(); ctx.strokeStyle = "#fff"; ctx.lineWidth = 2; ctx.stroke(); ctx.restore(); } };

function initInstantaneous() {
  sizePlaneCanvas(); planeCtx = planeCanvasEl.getContext("2d");
  const posData = [], velData = [];
  for (let t = 0; t <= T_MAX; t += 0.05) { const s = posAtTime(t); if (s >= 0) posData.push({ x: +t.toFixed(2), y: +s.toFixed(2) }); velData.push({ x: +t.toFixed(2), y: +velAtTime(t).toFixed(2) }); }
  if (posTimeChart) posTimeChart.destroy(); if (velTimeChart) velTimeChart.destroy();
  const posTooltip = document.getElementById("posTooltip"), velTooltip = document.getElementById("velTooltip");
  function onHover(pt) {
    if (!pt) { if (posTimeChart) posTimeChart._tangentPoint = null; if (velTimeChart) velTimeChart._markerPoint = null; if (posTooltip) posTooltip.classList.remove("visible"); if (velTooltip) velTooltip.classList.remove("visible"); return; }
    const v = velAtTime(pt.x), s = Math.max(posAtTime(pt.x), 0), u = T[lang];
    document.getElementById("instTimeVal").textContent = pt.x.toFixed(2) + " " + u.seconds;
    document.getElementById("instPosVal").textContent = s.toFixed(2) + " " + u.meters;
    document.getElementById("instVelVal").textContent = v.toFixed(2) + " " + u.metersPerSec;
    if (posTimeChart) posTimeChart._tangentPoint = { x: pt.x, y: s };
    if (velTimeChart) velTimeChart._markerPoint = { x: pt.x, y: v };
    if (posTooltip) { posTooltip.textContent = `t=${pt.x.toFixed(2)}${u.seconds} | s=${s.toFixed(2)}${u.meters}`; posTooltip.classList.add("visible"); }
    if (velTooltip) { velTooltip.textContent = `t=${pt.x.toFixed(2)}${u.seconds} | v=${v.toFixed(2)}${u.metersPerSec}`; velTooltip.classList.add("visible"); }
    drawPlaneScene(pt.x);
  }
  const u = T[lang];
  const mkOpts = (tl, yl) => ({ responsive: true, maintainAspectRatio: false, animation: { duration: 600 }, interaction: { mode: "nearest", axis: "x", intersect: false }, plugins: { legend: { display: false }, tooltip: { enabled: false } }, scales: { x: { title: { display: true, text: tl, color: "#94a3b8" }, grid: { color: "rgba(148,163,184,0.08)" }, ticks: { color: "#94a3b8" } }, y: { title: { display: true, text: yl, color: "#94a3b8" }, grid: { color: "rgba(148,163,184,0.08)" }, ticks: { color: "#94a3b8" } } } });
  posTimeChart = new Chart(document.getElementById("posTimeChart"), { type: "scatter", data: { datasets: [{ data: posData, showLine: true, borderColor: "#22d3ee", borderWidth: 3, pointRadius: 0, pointHoverRadius: 0, backgroundColor: "rgba(34,211,238,0.08)", fill: true, tension: 0.4 }] }, options: { ...mkOpts(u.timeLabel, u.posLabel), scales: { ...mkOpts(u.timeLabel, u.posLabel).scales, y: { ...mkOpts(u.timeLabel, u.posLabel).scales.y, min: 0 } }, onHover: (_e, els) => { if (els.length) onHover(posData[els[0].index]); else onHover(null); posTimeChart.update("none"); if (velTimeChart) velTimeChart.update("none"); } }, plugins: [tangentPlugin] });
  velTimeChart = new Chart(document.getElementById("velTimeChart"), { type: "scatter", data: { datasets: [{ data: velData, showLine: true, borderColor: "#fb7185", borderWidth: 3, pointRadius: 0, pointHoverRadius: 0, backgroundColor: "rgba(251,113,133,0.08)", fill: true, tension: 0 }] }, options: { ...mkOpts(u.timeLabel, u.velLabel), onHover: (_e, els) => { if (els.length) onHover(velData[els[0].index]); else onHover(null); velTimeChart.update("none"); if (posTimeChart) posTimeChart.update("none"); } }, plugins: [velMarkerPlugin] });
  startPlaneAnimation(); renderEquations();
}
function startPlaneAnimation() { cancelAnimationFrame(planeAnim.rafId); const s = performance.now(); function tick() { const e = (performance.now() - s) / 1000, t = e % (T_MAX + 1); if (t <= T_MAX) drawPlaneScene(t); planeAnim.rafId = requestAnimationFrame(tick); } tick(); }

// ==================== EQUATIONS ====================
function renderEquations() {
  if (typeof katex === "undefined") { setTimeout(renderEquations, 200); return; }
  try {
    katex.render("s(t)=V_0\\cdot t-\\frac{1}{2}g\\cdot t^2", document.getElementById("eq1"), { throwOnError: false, displayMode: true });
    katex.render("v(t)=V_0-g\\cdot t", document.getElementById("eq2"), { throwOnError: false, displayMode: true });
    katex.render("s_{max}=\\frac{V_0^2}{2g}", document.getElementById("eq3"), { throwOnError: false, displayMode: true });
    katex.render("t_{total}=\\frac{2V_0}{g}", document.getElementById("eq4"), { throwOnError: false, displayMode: true });
  } catch (e) { document.getElementById("eq1").textContent = "s(t)=V₀t-½gt²"; document.getElementById("eq2").textContent = "v(t)=V₀-gt"; document.getElementById("eq3").textContent = "smax=V₀²/2g"; document.getElementById("eq4").textContent = "ttotal=2V₀/g"; }
}

// ==================== INIT ====================
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("langToggle").addEventListener("click", () => setLanguage(lang === "en" ? "ar" : "en"));
  document.querySelectorAll(".tab-btn").forEach(b => b.addEventListener("click", () => switchTab(b.dataset.tab)));
  document.getElementById("convertBtn").addEventListener("click", convertUnits);
  document.getElementById("convertValue").addEventListener("keyup", e => { if (e.key === "Enter") convertUnits(); });
  document.getElementById("startBtn").addEventListener("click", startCar);
  document.getElementById("resetBtn").addEventListener("click", resetCar);
  document.getElementById("applyParamsBtn").addEventListener("click", () => { recalcPhysics(); initInstantaneous(); });
  document.getElementById("calcSlopeBtn").addEventListener("click", calcSlopes);
  document.getElementById("calcAvgVelBtn").addEventListener("click", calcAvgVelocity);
  document.getElementById("uniformPlotBtn").addEventListener("click", initUniformChart);
  // Vehicle grids
  setupVehicleGrid("avgVehicles", "avg");
  setupVehicleGrid("instVehicles", "inst");
  window.addEventListener("resize", () => {
    if (currentTab === "average") { readAvgParams(); sizeCarCanvas(); calcAvgChartFullData(); drawCarScene(); initAvgChart(); }
    if (currentTab === "instantaneous") initInstantaneous();
  });
  setLanguage("en");
});
