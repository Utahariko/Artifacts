(function () {
  function clamp(value, min = 0, max = 100) {
    return Math.max(min, Math.min(max, value));
  }

  function hasAny(flags, keys) {
    return keys.some((key) => flags[key]);
  }

  function high(value) {
    return value - 50;
  }

  function low(value) {
    return 50 - value;
  }

  function createInitialState() {
    return {
      currentScreenId: "ch0_start",
      chapterId: "ch0",
      environment: null,
      agency: 50,
      understanding: 50,
      integrity: 50,
      dependence: 50,
      efficiency: 50,
      pressure: 55,
      representation: 50,
      authorship: 50,
      verification: 50,
      reflection: 50,
      flags: {},
      chapterProfiles: {},
      decisionLog: [],
      feedback: null,
    };
  }

  function applyEffects(state, effects = {}) {
    const numericKeys = [
      "agency",
      "understanding",
      "integrity",
      "dependence",
      "efficiency",
      "pressure",
      "representation",
      "authorship",
      "verification",
      "reflection",
    ];

    numericKeys.forEach((key) => {
      if (typeof effects[key] === "number") {
        state[key] = clamp(state[key] + effects[key]);
      }
    });
  }

  function applyFlags(state, flags = {}) {
    Object.keys(flags).forEach((key) => {
      state.flags[key] = flags[key];
    });
  }

  function pushDecisionLog(state, screen, choice) {
    state.decisionLog.unshift({
      chapterId: screen.chapterId,
      screenTitle: screen.title,
      choiceLabel: choice.label,
    });
    state.decisionLog = state.decisionLog.slice(0, 6);
  }

  function getChapterProfile(chapterId, state) {
    if (chapterId === "ch1") {
      if (state.dependence >= 68 && state.understanding <= 50) {
        return {
          label: "Convenience-Led Starter",
          summary:
            "You used AI to move quickly into the reading, but the turn shows how easily a clear summary can stand in for understanding.",
          reflection:
            "What would you need to verify next time before a fluent summary starts feeling complete?",
        };
      }
      if (state.agency >= 58 && state.integrity >= 58 && state.verification >= 54) {
        return {
          label: "Checked Reader",
          summary:
            "You treated AI as a support layer rather than a substitute reader. The strongest move in this turn was keeping judgement tied to the text itself.",
          reflection:
            "Which checking move helped you most: reading first, marking uncertainty, or turning the output into questions?",
        };
      }
      return {
        label: "Reflective Beginner",
        summary:
          "You are beginning to notice that understanding depends on how you govern AI, not just whether you use it.",
        reflection:
          "Where did you still feel tempted to mistake speed for understanding?",
      };
    }

    const sharedProfiles = {
      ch2: {
        label:
          state.authorship >= 58 ? "Claim Keeper" : "Borrowed Voice Risk",
        summary:
          state.authorship >= 58
            ? "You held onto the core claim even when Aster offered smoother wording."
            : "This turn suggests that polish can quietly displace ownership when the learner stops checking what still sounds like them.",
        reflection:
          "Which sentence in your proposal still felt most clearly like yours?",
      },
      ch3: {
        label:
          state.verification >= 60 ? "Evidence Governor" : "Citation Mirage Risk",
        summary:
          state.verification >= 60
            ? "You treated references as claims that had to be checked, not decoration."
            : "The turn shows how easily academic formatting can create trust before evidence has been verified.",
        reflection:
          "What made a source feel trustworthy before you checked whether it was real and relevant?",
      },
      ch4: {
        label:
          state.representation >= 60
            ? "Frame Critic"
            : "Default Visibility Risk",
        summary:
          state.representation >= 60
            ? "You moved beyond asking whether AI was right, and started asking whose learning realities it left out."
            : "The group work still leaned toward the people and institutions that AI systems already make easiest to see.",
        reflection:
          "Which perspective stayed hidden until you actively changed the frame?",
      },
      ch5: {
        label:
          state.integrity >= 65 && state.agency >= 62
            ? "Accountable Finisher"
            : "Submission Under Strain",
        summary:
          state.integrity >= 65 && state.agency >= 62
            ? "Your final submission stayed tied to what you could actually explain, verify, and stand behind."
            : "The final turn shows how easily deadline pressure can pull responsibility away from the learner and toward the tool.",
        reflection:
          "What part of the final paper still depended most clearly on your judgement?",
      },
    };

    return (
      sharedProfiles[chapterId] || {
        label: "Turn Complete",
        summary: "The chapter is complete.",
        reflection: "What changed in how you governed AI during this turn?",
      }
    );
  }

  function getEnding(state) {
    const flags = state.flags || {};
    const evidenceRisk = hasAny(flags, [
      "bibliography_submitted_polished_mix",
      "false_confidence_after_first_hit",
      "ai_self_verification_attempted",
      "topic_match_only_logic",
      "uncertain_sources_formatted",
      "final_unverified_sources_kept",
      "source_scope_drift",
      "bibliography_copied_wholesale",
    ]);

    if (
      evidenceRisk &&
      (
        state.integrity <= 52 ||
        state.verification <= 52 ||
        (state.integrity <= 56 && state.verification <= 56)
      )
    ) {
      return {
        title: "Broken Citation",
        summary:
          "The final risk in your semester was not only that AI could hallucinate, but that scholarly-looking evidence began to travel further than you had truly checked it.",
        risk:
          "Without stronger verification habits, responsibility can quietly shift away from the learner while still appearing academically correct.",
      };
    }

    const strategicEligible = hasAny(flags, [
      "final_submission_accountable",
      "final_submission_paused_for_integrity",
      "final_note_specific",
      "final_note_generic",
      "final_weak_sources_removed",
      "final_claim_revised_to_fit_evidence",
      "final_conclusion_self_written",
    ]);

    const fluentEligible = hasAny(flags, [
      "full_draft_requested_early",
      "final_role_full_writer",
      "final_argument_outline_led",
      "final_argument_stitched",
      "final_submission_polished",
      "response_ai_drafted",
    ]);

    const borrowedEligible = hasAny(flags, [
      "proposal_submitted_polished",
      "rewrite_shift_accepted",
      "polished_generic_thesis_kept",
      "final_polish_shift_accepted",
      "final_role_full_writer",
      "final_submission_polished",
    ]);

    const endingScores = {
      "Strategic Co-Learner": strategicEligible
        ? high(state.agency) +
          high(state.understanding) +
          high(state.integrity) +
          high(state.authorship) +
          high(state.verification) -
          high(state.dependence) +
          (flags.final_submission_accountable ? 8 : 0) +
          (flags.final_note_specific ? 6 : 0)
        : -Infinity,
      "Fluent Passenger": fluentEligible
        ? high(state.efficiency) +
          high(state.dependence) +
          high(state.pressure) -
          high(state.agency) -
          high(state.integrity) +
          (flags.final_submission_polished ? 10 : 0) +
          (flags.final_role_full_writer ? 7 : 0) +
          (flags.full_draft_requested_early ? 5 : 0) +
          (flags.response_ai_drafted ? 4 : 0)
        : -Infinity,
      "Borrowed Voice": borrowedEligible
        ? high(state.dependence) +
          low(state.authorship) * 1.35 +
          high(state.efficiency) * 0.4 -
          high(state.integrity) * 0.5 +
          (flags.final_polish_shift_accepted ? 10 : 0) +
          (flags.rewrite_shift_accepted ? 7 : 0) +
          (flags.proposal_submitted_polished ? 6 : 0) +
          (flags.polished_generic_thesis_kept ? 5 : 0)
        : -Infinity,
      "Reflective Rebuilder":
        high(state.reflection) +
        high(state.agency) +
        high(state.integrity) +
        (flags.final_submission_paused_for_integrity ? 6 : 0) +
        (flags.final_note_specific ? 4 : 0) +
        (flags.qna_limits_admitted ? 3 : 0) +
        (flags.bibliography_limits_named ? 3 : 0),
    };

    const topEnding = Object.entries(endingScores).sort((a, b) => b[1] - a[1])[0][0];

    if (topEnding === "Strategic Co-Learner") {
      return {
        title: "Strategic Co-Learner",
        summary:
          "You did not refuse AI, and you did not surrender to it either. Across the semester you kept responsibility tied to your own judgement, evidence choices, and authorship.",
        risk:
          "Your main ongoing challenge is maintaining this balance under heavier future workloads.",
      };
    }

    if (topEnding === "Fluent Passenger") {
      return {
        title: "Fluent Passenger",
        summary:
          "You completed the semester through speed and surface fluency, but too many crucial decisions drifted toward AI before they became fully yours.",
        risk:
          "The risk is not just weak learning. It is losing the ability to explain why your own work says what it says.",
      };
    }

    if (topEnding === "Borrowed Voice") {
      return {
        title: "Borrowed Voice",
        summary:
          "Your work grew more polished as the semester went on, but the line between support and substitution became harder to see. By the end, fluency often arrived before ownership.",
        risk:
          "The risk here is subtle: the argument may remain defensible, but its voice no longer feels fully anchored to the learner.",
      };
    }

    return {
      title: "Reflective Rebuilder",
      summary:
        "You did not manage the semester perfectly, but you increasingly noticed where AI was beginning to replace rather than support your learning. That shift in awareness matters.",
      risk:
        "The next step is to make your reflective habits more consistent earlier in the task, before pressure narrows your choices.",
    };
  }

  window.WhoThinkingState = {
    clamp,
    createInitialState,
    applyEffects,
    applyFlags,
    pushDecisionLog,
    getChapterProfile,
    getEnding,
  };
})();
