(function () {
  const { chapters, endingScreen } = window.WhoThinkingGameData;
  const stateApi = window.WhoThinkingState;
  let state = stateApi.createInitialState();

  const chapterMap = new Map(chapters.map((chapter) => [chapter.id, chapter]));
  const screenMap = new Map();

  const chapterUI = {
    ch0: {
      accent: "#d8a560",
      glow: "rgba(216, 165, 96, 0.12)",
      tension: "Context shapes how AI first starts to feel reasonable.",
      roleRisk: "AI enters first as ambient convenience.",
    },
    ch1: {
      accent: "#d8a560",
      glow: "rgba(216, 165, 96, 0.12)",
      tension: "Convenience versus understanding.",
      roleRisk: "AI as shortcut reader.",
    },
    ch2: {
      accent: "#b36d57",
      glow: "rgba(179, 109, 87, 0.12)",
      tension: "Polish versus authorship.",
      roleRisk: "AI as argument shaper.",
    },
    ch3: {
      accent: "#79b7ad",
      glow: "rgba(121, 183, 173, 0.14)",
      tension: "Scholarly appearance versus evidence responsibility.",
      roleRisk: "AI as citation authority.",
    },
    ch4: {
      accent: "#9cb57e",
      glow: "rgba(156, 181, 126, 0.12)",
      tension: "Accuracy versus representational range.",
      roleRisk: "AI as neutral frame.",
    },
    ch5: {
      accent: "#c88f6f",
      glow: "rgba(200, 143, 111, 0.14)",
      tension: "Completion versus accountable submission.",
      roleRisk: "AI as final author.",
    },
    ending: {
      accent: "#e0c28b",
      glow: "rgba(224, 194, 139, 0.14)",
      tension: "The semester is now being interpreted as a pattern.",
      roleRisk: "Ending logic reads how governance held or slipped.",
    },
  };

  const environmentLabels = {
    overloaded_desk: "Overloaded Desk",
    polished_screen: "Polished Screen",
    group_chat: "Group Chat",
    quiet_library: "Quiet Library",
    second_language_draft: "Second-Language Draft",
  };

  chapters.forEach((chapter) => {
    chapter.screens.forEach((screen) => {
      screenMap.set(screen.id, screen);
    });
  });
  screenMap.set(endingScreen.id, endingScreen);

  const els = {
    chapterLabel: document.getElementById("chapter-label"),
    screenTitle: document.getElementById("screen-title"),
    turnQuestion: document.getElementById("turn-question"),
    chapterTimeline: document.getElementById("chapter-timeline"),
    screenBody: document.getElementById("screen-body"),
    aiPanel: document.getElementById("ai-panel"),
    aiPanelTitle: document.getElementById("ai-panel-title"),
    aiPanelBody: document.getElementById("ai-panel-body"),
    feedbackPanel: document.getElementById("feedback-panel"),
    feedbackTitle: document.getElementById("feedback-title"),
    feedbackBody: document.getElementById("feedback-body"),
    choicesGrid: document.getElementById("choices-grid"),
    weekPill: document.getElementById("week-pill"),
    chapterPill: document.getElementById("chapter-pill"),
    meters: document.getElementById("meters"),
    signalChips: document.getElementById("signal-chips"),
    currentPressure: document.getElementById("current-pressure"),
    pressureBand: document.getElementById("pressure-band"),
    castList: document.getElementById("cast-list"),
    decisionLog: document.getElementById("decision-log"),
    choiceHint: document.getElementById("choice-hint"),
    chapterTension: document.getElementById("chapter-tension"),
    chapterRoleRisk: document.getElementById("chapter-role-risk"),
    chapterPattern: document.getElementById("chapter-pattern"),
    chapterOutput: document.getElementById("chapter-output"),
    environmentChip: document.getElementById("environment-chip"),
    profileChip: document.getElementById("profile-chip"),
  };

  const visibleMeters = [
    ["agency", "Agency"],
    ["understanding", "Understanding"],
    ["integrity", "Integrity"],
    ["dependence", "Dependence"],
  ];

  const signalKeys = [
    ["verification", "Verification"],
    ["authorship", "Authorship"],
    ["representation", "Representation"],
    ["reflection", "Reflection"],
  ];

  function getScreen(screenId) {
    return screenMap.get(screenId);
  }

  function getChapter(screen) {
    return chapterMap.get(screen.chapterId);
  }

  function resetState() {
    state = stateApi.createInitialState();
  }

  function getThemeConfig(chapterId) {
    return chapterUI[chapterId] || chapterUI.ending;
  }

  function applyTheme(chapterId) {
    const theme = getThemeConfig(chapterId);
    document.documentElement.style.setProperty("--chapter-accent", theme.accent);
    document.documentElement.style.setProperty("--chapter-accent-soft", `${theme.accent}22`);
    document.documentElement.style.setProperty("--chapter-glow", theme.glow);
  }

  function ensureChapterProfile(chapterId) {
    if (!state.chapterProfiles[chapterId]) {
      state.chapterProfiles[chapterId] = stateApi.getChapterProfile(chapterId, state);
    }
    return state.chapterProfiles[chapterId];
  }

  function getCurrentPattern() {
    const strongest = [
      ["agency", "Self-directed judgement is leading the turn."],
      ["dependence", "AI convenience is starting to pull decisions inward."],
      ["integrity", "Accountability is staying visible in the workflow."],
      ["understanding", "Conceptual control is stronger than surface fluency."],
    ].sort((a, b) => state[b[0]] - state[a[0]]);

    return strongest[0][1];
  }

  function renderTimeline(activeChapterId) {
    els.chapterTimeline.innerHTML = "";
    chapters.forEach((chapter) => {
      const item = document.createElement("div");
      item.className = "timeline-item";
      if (chapter.id === activeChapterId) item.classList.add("active");
      const currentIndex = chapters.findIndex((c) => c.id === activeChapterId);
      const itemIndex = chapters.findIndex((c) => c.id === chapter.id);
      if (itemIndex < currentIndex) item.classList.add("done");

      item.innerHTML = `
        <p class="timeline-kicker">${chapter.weekLabel}</p>
        <p class="timeline-title">${chapter.title}</p>
      `;
      els.chapterTimeline.appendChild(item);
    });
  }

  function createParagraph(text) {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
  }

  function createReportCard(block) {
    const card = document.createElement("article");
    card.className = `report-card ${block.variant || ""}`.trim();
    const label = document.createElement("p");
    label.className = "report-card-label";
    label.textContent = block.label;
    card.appendChild(label);

    if (block.title) {
      const title = document.createElement("h3");
      title.className = "report-card-title";
      title.textContent = block.title;
      card.appendChild(title);
    }

    if (block.body) {
      const body = document.createElement("p");
      body.className = "report-card-body";
      body.textContent = block.body;
      card.appendChild(body);
    }

    if (Array.isArray(block.metrics) && block.metrics.length) {
      const metricGrid = document.createElement("div");
      metricGrid.className = "report-metrics";
      block.metrics.forEach((metric) => {
        const item = document.createElement("div");
        item.className = "mini-metric";
        item.innerHTML = `
          <p class="mini-metric-label">${metric.label}</p>
          <p class="mini-metric-value">${metric.value}</p>
        `;
        metricGrid.appendChild(item);
      });
      card.appendChild(metricGrid);
    }

    return card;
  }

  function getSummaryBlocks(chapterId) {
    const profile = ensureChapterProfile(chapterId);
    return [
      {
        type: "report",
        label: "Chapter Profile",
        title: profile.label,
        body: profile.summary,
        variant: "primary",
      },
      {
        type: "report",
        label: "Reflection Prompt",
        body: profile.reflection,
      },
      {
        type: "report",
        label: "Current State Snapshot",
        metrics: [
          { label: "Agency", value: state.agency },
          { label: "Understanding", value: state.understanding },
          { label: "Integrity", value: state.integrity },
          { label: "Dependence", value: state.dependence },
        ],
      },
    ];
  }

  function getEndingBlocks() {
    const ending = stateApi.getEnding(state);
    return [
      {
        type: "report",
        label: "Semester Ending",
        title: ending.title,
        body: ending.summary,
        variant: "primary",
      },
      {
        type: "report",
        label: "Residual Risk",
        body: ending.risk,
      },
      {
        type: "report",
        label: "Final State Snapshot",
        metrics: [
          { label: "Agency", value: state.agency },
          { label: "Integrity", value: state.integrity },
          { label: "Authorship", value: state.authorship },
          { label: "Representation", value: state.representation },
        ],
      },
    ];
  }

  function renderBody(screen) {
    els.screenBody.innerHTML = "";

    if (screen.type === "summary" || screen.type === "ending") {
      const wrapper = document.createElement("div");
      wrapper.className = "body-report-grid";
      const blocks =
        screen.type === "summary"
          ? getSummaryBlocks(screen.chapterId)
          : getEndingBlocks();

      blocks.forEach((block) => {
        wrapper.appendChild(createReportCard(block));
      });
      els.screenBody.appendChild(wrapper);
      return;
    }

    screen.body.forEach((text) => {
      els.screenBody.appendChild(createParagraph(text));
    });
  }

  function renderAiPanel(screen) {
    if (screen.aster) {
      els.aiPanel.classList.remove("hidden");
      els.aiPanelTitle.textContent = screen.aster.title;
      els.aiPanelBody.textContent = screen.aster.body;
      return;
    }

    if (screen.type === "ending") {
      const ending = stateApi.getEnding(state);
      els.aiPanel.classList.remove("hidden");
      els.aiPanelTitle.textContent = "Learner Report";
      els.aiPanelBody.textContent = `${ending.title}: ${ending.summary}`;
      return;
    }

    els.aiPanel.classList.add("hidden");
  }

  function renderFeedback() {
    if (!state.feedback) {
      els.feedbackPanel.classList.add("hidden");
      return;
    }

    els.feedbackPanel.classList.remove("hidden");
    els.feedbackTitle.textContent = state.feedback.title;
    els.feedbackBody.textContent = state.feedback.body;
  }

  function renderChoices(screen) {
    els.choicesGrid.innerHTML = "";
    els.choiceHint.textContent =
      screen.choiceHint ||
      "Your choices do not only change what happens next. They also change how the semester reads your learning habits.";

    screen.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.className = "choice-btn";
      button.innerHTML = `
        <span class="choice-prefix">${String.fromCharCode(65 + index)}</span>
        <span class="choice-text">${choice.label}</span>
      `;
      button.addEventListener("click", () => handleChoice(screen, choice));
      els.choicesGrid.appendChild(button);
    });
  }

  function renderStatus(screen) {
    els.meters.innerHTML = "";
    visibleMeters.forEach(([key, label]) => {
      const meter = document.createElement("div");
      meter.className = "meter";
      meter.innerHTML = `
        <div class="meter-row">
          <span>${label}</span>
          <span>${state[key]}</span>
        </div>
        <div class="meter-track"><div class="meter-fill" style="width:${state[key]}%"></div></div>
      `;
      els.meters.appendChild(meter);
    });

    els.signalChips.innerHTML = "";
    signalKeys.forEach(([key, label]) => {
      const chip = document.createElement("div");
      chip.className = "signal-chip";
      chip.textContent = `${label}: ${state[key]}`;
      els.signalChips.appendChild(chip);
    });

    const pressureText =
      state.pressure >= 72
        ? "High pressure: speed is now directly competing with judgement."
        : state.pressure >= 56
          ? "Moderate pressure: you still have room to govern the turn, but deadlines are narrowing it."
          : "Managed pressure: there is still space to decide how AI should enter the work.";
    els.currentPressure.textContent = pressureText;
    els.pressureBand.style.opacity = String(Math.max(0.45, state.pressure / 100));

    const cast = screen.type === "ending" ? [] : getChapter(screen).cast;
    els.castList.innerHTML = "";
    cast.forEach((person) => {
      const item = document.createElement("div");
      item.className = "cast-item";
      item.innerHTML = `
        <p class="cast-name">${person.name}</p>
        <p class="cast-role">${person.role}</p>
      `;
      els.castList.appendChild(item);
    });

    if (!cast.length) {
      els.castList.innerHTML = `<div class="cast-item"><p class="cast-role">The semester is being interpreted through the accumulated pattern of your choices.</p></div>`;
    }

    els.chapterOutput.innerHTML = "";
    const completedChapterIds = Object.keys(state.chapterProfiles);
    if (!completedChapterIds.length) {
      els.chapterOutput.innerHTML = `<div class="chapter-output-card"><p class="chapter-output-body">No chapter profile yet. The first report will appear after Week 1.</p></div>`;
    } else {
      const lastChapterId = completedChapterIds[completedChapterIds.length - 1];
      const profile = state.chapterProfiles[lastChapterId];
      els.chapterOutput.innerHTML = `
        <div class="chapter-output-card">
          <p class="chapter-output-title">${profile.label}</p>
          <p class="chapter-output-body">${profile.summary}</p>
        </div>
      `;
    }

    els.decisionLog.innerHTML = "";
    if (!state.decisionLog.length) {
      els.decisionLog.innerHTML = `<div class="log-item"><p class="log-meta">No decisions recorded yet. The first turn starts with your initial environment.</p></div>`;
      return;
    }

    state.decisionLog.forEach((entry) => {
      const item = document.createElement("div");
      item.className = "log-item";
      item.innerHTML = `
        <p class="log-title">${entry.choiceLabel}</p>
        <p class="log-meta">${entry.screenTitle}</p>
      `;
      els.decisionLog.appendChild(item);
    });
  }

  function renderHeaderSignals(screen) {
    const theme = getThemeConfig(screen.type === "ending" ? "ending" : screen.chapterId);
    els.chapterTension.textContent = theme.tension;
    els.chapterRoleRisk.textContent = theme.roleRisk;
    els.chapterPattern.textContent = getCurrentPattern();

    const envText = state.environment
      ? `Environment: ${environmentLabels[state.environment] || state.environment}`
      : "Environment pending";
    els.environmentChip.textContent = envText;

    const completedChapterIds = Object.keys(state.chapterProfiles);
    if (!completedChapterIds.length) {
      els.profileChip.textContent = "Profile emerging";
    } else {
      const lastChapterId = completedChapterIds[completedChapterIds.length - 1];
      els.profileChip.textContent = state.chapterProfiles[lastChapterId].label;
    }
  }

  function renderScreen() {
    const screen = getScreen(state.currentScreenId);
    if (!screen) return;

    const chapter = screen.type === "ending" ? null : getChapter(screen);
    const chapterId = chapter ? chapter.id : "ending";
    const chapterTitle = chapter ? chapter.title : "Semester Report";
    const weekLabel = chapter ? chapter.weekLabel : "Final";
    const turnQuestion = chapter
      ? chapter.question
      : "The final report reads the pattern of your semester, not only your last decision.";

    applyTheme(chapterId);
    els.chapterLabel.textContent = weekLabel;
    els.screenTitle.textContent = screen.title;
    els.turnQuestion.textContent = turnQuestion;
    els.weekPill.textContent = weekLabel;
    els.chapterPill.textContent = chapterTitle;

    renderHeaderSignals(screen);
    renderTimeline(chapter ? chapter.id : chapters[chapters.length - 1].id);
    renderBody(screen);
    renderAiPanel(screen);
    renderFeedback();
    renderChoices(screen);
    renderStatus(screen);
  }

  function handleChoice(screen, choice) {
    if (choice.id === "restart") {
      resetState();
      state.feedback = {
        title: choice.feedbackTitle,
        body: choice.feedbackBody,
      };
      renderScreen();
      return;
    }

    if (choice.flags && choice.flags.environment) {
      state.environment = choice.flags.environment;
    }

    stateApi.applyEffects(state, choice.effects);
    stateApi.applyFlags(state, choice.flags);
    stateApi.pushDecisionLog(state, screen, choice);

    if (screen.type === "summary") {
      ensureChapterProfile(screen.chapterId);
    }

    state.feedback = {
      title: choice.feedbackTitle,
      body: choice.feedbackBody,
    };

    const nextScreen = getScreen(choice.next);
    if (nextScreen) {
      state.currentScreenId = choice.next;
      state.chapterId = nextScreen.chapterId;
      if (nextScreen.type === "summary") {
        ensureChapterProfile(nextScreen.chapterId);
      }
    }

    renderScreen();
  }

  function renderGameToText() {
    const screen = getScreen(state.currentScreenId);
    const chapter =
      screen.type === "ending"
        ? { id: "ending", title: "Semester Report" }
        : getChapter(screen);
    return JSON.stringify({
      chapter: chapter.title,
      screen: screen.title,
      tension: getThemeConfig(screen.type === "ending" ? "ending" : screen.chapterId).tension,
      metrics: {
        agency: state.agency,
        understanding: state.understanding,
        integrity: state.integrity,
        dependence: state.dependence,
      },
      secondary: {
        verification: state.verification,
        authorship: state.authorship,
        representation: state.representation,
        reflection: state.reflection,
      },
      environment: state.environment,
      flags: state.flags,
      recentChoices: state.decisionLog.slice(0, 3),
    });
  }

  window.render_game_to_text = renderGameToText;
  window.advanceTime = function advanceTime() {
    return renderGameToText();
  };

  renderScreen();
})();
