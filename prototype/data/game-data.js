(function () {
  const chapters = [
    {
      id: "ch0",
      weekLabel: "Week 0",
      title: "Prologue: Where You Begin",
      question:
        "You are not entering the semester in a vacuum. Which learning pressure will shape your first instinct toward AI?",
      cast: [
        { name: "Aster", role: "Always available study assistant." },
        { name: "Dr. Rao", role: "Course lecturer who allows AI but keeps responsibility with the student." },
      ],
      screens: [
        {
          id: "ch0_start",
          chapterId: "ch0",
          title: "Before The Semester",
          body: [
            "The night before classes begin, you open the course site for Digital Society and Knowledge.",
            "A new note sits above the reading list: generative AI may be used as a learning support tool, but students remain responsible for the accuracy, originality, evidence, and integrity of submitted work.",
            "Aster is already connected to the course page. It can summarize, draft, revise, and prepare. Before anything else happens, the system asks where you are beginning this semester from.",
          ],
          aster: {
            title: "Aster",
            body:
              "I can help you read, summarize, draft, revise, and prepare. How much of that help you accept will shape the rest of the semester.",
          },
          choiceHint:
            "Pick the starting condition that feels most like the learner you want to model.",
          choices: [
            {
              id: "env_overloaded",
              label:
                "The Overloaded Desk: everything is due at once, and AI looks like a way to survive the week.",
              effects: { efficiency: 4, dependence: 5, pressure: 8 },
              flags: { environment: "overloaded_desk" },
              feedbackTitle: "Starting Condition Set",
              feedbackBody:
                "This route begins under workload pressure. Convenience will feel highly persuasive early in the semester.",
              next: "ch1_policy_brief",
            },
            {
              id: "env_polished",
              label:
                "The Polished Screen: your ideas are real, but you worry they never sound academic enough.",
              effects: { authorship: -4, dependence: 4, pressure: 4 },
              flags: { environment: "polished_screen" },
              feedbackTitle: "Starting Condition Set",
              feedbackBody:
                "This route begins with writing anxiety. AI will feel useful not only for speed, but for confidence.",
              next: "ch1_policy_brief",
            },
            {
              id: "env_group_chat",
              label:
                "The Group Chat: everyone around you already treats AI use as normal study culture.",
              effects: { dependence: 5, integrity: -3, pressure: 5 },
              flags: { environment: "group_chat" },
              feedbackTitle: "Starting Condition Set",
              feedbackBody:
                "This route begins under peer pressure. The biggest risk is not only your own decision, but what starts to feel normal around you.",
              next: "ch1_policy_brief",
            },
            {
              id: "env_library",
              label:
                "The Quiet Library: you prefer to form your own view first, even when that costs time.",
              effects: { agency: 6, understanding: 4, dependence: -5, pressure: -2 },
              flags: { environment: "quiet_library" },
              feedbackTitle: "Starting Condition Set",
              feedbackBody:
                "This route begins with stronger independent habits. The challenge will be using AI strategically without rejecting useful support.",
              next: "ch1_policy_brief",
            },
            {
              id: "env_second_language",
              label:
                "The Second-Language Draft: you understand more than your academic English easily lets you show.",
              effects: {
                understanding: 3,
                authorship: 2,
                dependence: 3,
                pressure: 4,
              },
              flags: { environment: "second_language_draft" },
              feedbackTitle: "Starting Condition Set",
              feedbackBody:
                "This route begins with a real access question: when does AI support a learner's voice, and when does it start replacing it?",
              next: "ch1_policy_brief",
            },
          ],
        },
      ],
    },
    {
      id: "ch1",
      weekLabel: "Week 1",
      title: "The Shortcut",
      question:
        "When reading time collapses under pressure, what kind of shortcut are you willing to take?",
      cast: [
        { name: "Aster", role: "Offers summaries, reading plans, and concept explanations." },
        { name: "Maya", role: "Careful classmate who checks AI output against the source." },
        { name: "Jay", role: "Efficiency-first classmate who normalizes AI shortcuts." },
        { name: "Dr. Rao", role: "Seminar leader who pushes students to explain, not just repeat." },
      ],
      screens: [
        {
          id: "ch1_policy_brief",
          chapterId: "ch1",
          title: "Course Briefing",
          body: [
            "Week 1 arrives with a dense 30-page reading, a seminar discussion, and a short response due before class.",
            "Dr. Rao's announcement is direct: the course does not ban generative AI, but it expects accountable use.",
            "Aster is already active in the course interface. Before opening the article in full, you decide how seriously to read the AI policy itself.",
          ],
          choiceHint:
            "This is the first small signal of whether AI will be treated as governed support or ambient convenience.",
          choices: [
            {
              id: "ch1_policy_careful",
              label:
                "Read the AI policy carefully and note the phrases about evidence, originality, and responsibility.",
              effects: { integrity: 4, agency: 2, efficiency: -1, reflection: 2 },
              flags: { policy_read_carefully: true },
              feedbackTitle: "Policy Read Closely",
              feedbackBody:
                "You begin the semester by noticing that AI permission is not the same thing as permission to stop judging.",
              next: "ch1_group_chat",
            },
            {
              id: "ch1_policy_scan",
              label:
                "Scan quickly, keep the phrase 'AI may be used,' and move on to the reading.",
              effects: { efficiency: 2, integrity: -1 },
              flags: { policy_scanned_only: true },
              feedbackTitle: "Policy Reduced To Permission",
              feedbackBody:
                "You keep the practical headline, but much of the responsibility language drops into the background.",
              next: "ch1_group_chat",
            },
            {
              id: "ch1_policy_aster_summary",
              label:
                "Ask Aster to summarize the policy into a short checklist before you begin.",
              effects: { efficiency: 2, dependence: 2, integrity: 1 },
              flags: { policy_seen_through_aster: true },
              feedbackTitle: "Policy Mediated Through AI",
              feedbackBody:
                "This can still be useful, but the semester starts with AI already shaping how institutional guidance reaches you.",
              next: "ch1_group_chat",
            },
          ],
        },
        {
          id: "ch1_group_chat",
          chapterId: "ch1",
          title: "The Group Chat",
          body: [
            "The class chat is already alive. Jay shares an AI-generated summary screenshot and jokes that the reading is impossible without it.",
            "Maya messages you separately: she is using AI too, but only after checking the introduction against the article itself.",
            "You have not read enough to judge either person yet. What you do now will set the tone for the rest of the night.",
          ],
          choiceHint:
            "This moment is about peer norms as much as personal preference.",
          choices: [
            {
              id: "ch1_chat_use_jay",
              label:
                "Download Jay's summary and treat it as your starting point.",
              effects: { efficiency: 3, dependence: 4, pressure: -2 },
              flags: { jay_summary_downloaded: true },
              feedbackTitle: "Peer Shortcut Accepted",
              feedbackBody:
                "The turn now leans toward convenience. The question will be whether convenience quietly becomes authority.",
              next: "ch1_read_strategy",
            },
            {
              id: "ch1_chat_message_maya",
              label:
                "Message Maya and ask how she checks an AI summary without losing too much time.",
              effects: { agency: 2, verification: 3, understanding: 1 },
              flags: { maya_help_opened: true },
              feedbackTitle: "A More Deliberate Model",
              feedbackBody:
                "Instead of deciding whether AI is good or bad, you look for a better practice.",
              next: "ch1_read_strategy",
            },
            {
              id: "ch1_chat_ignore",
              label:
                "Mute the chat and open the article before anyone else's summary starts shaping your view.",
              effects: { agency: 3, dependence: -2, pressure: 1 },
              flags: { ignored_chat_norms: true },
              feedbackTitle: "You Pause The Noise",
              feedbackBody:
                "This preserves some independence, although it may also cost you time under pressure.",
              next: "ch1_read_strategy",
            },
          ],
        },
        {
          id: "ch1_read_strategy",
          chapterId: "ch1",
          title: "The Reading Opens",
          body: [
            "The article's title reads: Algorithmic Knowledge and the Changing Conditions of Learning.",
            "Aster offers three routes: a full summary, a concept explanation with uncertainty, or a reading plan. You can also ignore it and read on your own first.",
            "This is the first real decision about what role AI will play in your understanding.",
          ],
          aster: {
            title: "Aster's Offer",
            body:
              "I can summarize the whole article, explain key concepts, or help you read strategically. The role you choose for me will shape what kind of learner you are becoming in this turn.",
          },
          choices: [
            {
              id: "ch1_read_full_summary",
              label: "Ask for a full summary in simple language.",
              effects: { efficiency: 4, dependence: 4, understanding: -2 },
              flags: { used_full_summary: true },
              feedbackTitle: "Fast Access, Thin Control",
              feedbackBody:
                "A summary can make the article feel graspable before you actually know which concepts and evidence still need your own attention.",
              next: "ch1_output_handling",
            },
            {
              id: "ch1_read_plan",
              label:
                "Ask for a reading plan that separates argument, evidence, and limitations.",
              effects: { agency: 2, understanding: 2, efficiency: 1 },
              flags: { used_reading_plan: true },
              feedbackTitle: "AI As Study Planner",
              feedbackBody:
                "This keeps the article in front of you while still using AI to reduce cognitive friction.",
              next: "ch1_output_handling",
            },
            {
              id: "ch1_read_uncertainty",
              label:
                "Ask Aster to explain key concepts and name what it may still be uncertain about.",
              effects: { understanding: 2, verification: 2, dependence: 1 },
              flags: { uncertainty_prompt_used: true },
              feedbackTitle: "You Ask AI To Show Its Edges",
              feedbackBody:
                "This is one of the strongest habits in the whole artefact: using AI not only for answers, but for boundary-marking.",
              next: "ch1_output_handling",
            },
            {
              id: "ch1_read_no_ai",
              label:
                "Read the abstract, introduction, and conclusion yourself before using Aster at all.",
              effects: { agency: 3, understanding: 1, dependence: -2, efficiency: -1 },
              flags: { no_ai_yet: true },
              feedbackTitle: "Strategic Slowness",
              feedbackBody:
                "You do not reject AI outright. You simply refuse to let it be the first thing that organizes the text.",
              next: "ch1_output_handling",
            },
          ],
        },
        {
          id: "ch1_output_handling",
          chapterId: "ch1",
          title: "What Do You Do With The Output?",
          body: [
            "Whether Aster gave you a summary, a plan, or a concept explanation, you now have something easier to hold than the article itself.",
            "The crucial question is no longer whether AI was used. It is how you will handle what it just produced.",
          ],
          choices: [
            {
              id: "ch1_output_copy",
              label:
                "Copy the output directly into your notes and prepare to rely on it in the seminar.",
              effects: { dependence: 3, understanding: -2, agency: -2 },
              flags: { notes_directly_ai_shaped: true },
              feedbackTitle: "Overview Becomes Understanding",
              feedbackBody:
                "This is the moment where convenience most clearly risks becoming substitution.",
              next: "ch1_response",
            },
            {
              id: "ch1_output_mark_check",
              label:
                "Use the clearest parts, but mark the rest 'needs checking' before trusting them.",
              effects: { verification: 2, integrity: 1, agency: 1 },
              flags: { notes_marked_for_checking: true },
              feedbackTitle: "You Keep Friction In The Notes",
              feedbackBody:
                "Marking uncertainty keeps your notebook from pretending to be more complete than it is.",
              next: "ch1_response",
            },
            {
              id: "ch1_output_turn_to_questions",
              label:
                "Turn the output into two seminar questions instead of treating it as your final interpretation.",
              effects: { agency: 2, reflection: 2, understanding: 1 },
              flags: { output_turned_to_questions: true },
              feedbackTitle: "Output Becomes Inquiry",
              feedbackBody:
                "This is one of the best ways to keep AI from silently becoming authority.",
              next: "ch1_response",
            },
          ],
        },
        {
          id: "ch1_response",
          chapterId: "ch1",
          title: "The Reading Response",
          body: [
            "Before the seminar, a short response is due: What is one question this article raises for you?",
            "Aster offers to draft the paragraph from your notes. The task is small, but it will reveal what your notes are really doing for you.",
          ],
          choices: [
            {
              id: "ch1_response_ai_draft",
              label:
                "Let Aster draft the full response and submit a lightly edited version.",
              effects: { efficiency: 3, dependence: 2, authorship: -2, integrity: -1 },
              flags: { response_ai_drafted: true },
              feedbackTitle: "Fluency Before Ownership",
              feedbackBody:
                "The response may look finished, but the question inside it may no longer feel fully yours.",
              next: "ch1_seminar",
            },
            {
              id: "ch1_response_hybrid",
              label:
                "Write the core question yourself, then ask Aster to tighten the wording.",
              effects: { authorship: 2, agency: 1, efficiency: 1 },
              flags: { response_hybrid_written: true },
              feedbackTitle: "Meaning First, Polish Second",
              feedbackBody:
                "You keep the question as yours while still using AI to improve clarity.",
              next: "ch1_seminar",
            },
            {
              id: "ch1_response_self_write",
              label:
                "Write the response yourself, even if it stays rough and incomplete.",
              effects: { agency: 2, authorship: 2, efficiency: -1, reflection: 1 },
              flags: { response_self_written: true },
              feedbackTitle: "You Preserve The Rough Edge",
              feedbackBody:
                "Roughness is not always weakness. Sometimes it is the visible sign that learning is still happening.",
              next: "ch1_seminar",
            },
          ],
        },
        {
          id: "ch1_seminar",
          chapterId: "ch1",
          title: "The Seminar",
          body: [
            "Seminar begins. Dr. Rao writes three words on the board: Information. Judgement. Authority.",
            "Jay gives the easy answer first: AI is useful but risky. Dr. Rao nods, then turns to you.",
            "This is where the turn becomes public. Your private study choices now have to survive explanation.",
          ],
          choices: [
            {
              id: "ch1_seminar_repeat_summary",
              label:
                "Repeat the general point that AI is useful but risky, and hope that is enough.",
              effects: { understanding: -1, agency: -1 },
              flags: { seminar_surface_answer: true },
              feedbackTitle: "Too General To Hold",
              feedbackBody:
                "The seminar exposes the weakness of relying on broad language when the real issue is how AI reshapes judgement itself.",
              next: "ch1_principle",
            },
            {
              id: "ch1_seminar_question_difference",
              label:
                "Say you are trying to understand the difference between AI as support and AI as authority.",
              effects: { understanding: 2, integrity: 1, reflection: 2 },
              flags: { seminar_productive_uncertainty: true },
              feedbackTitle: "Productive Uncertainty",
              feedbackBody:
                "Dr. Rao treats this as a real opening: uncertainty becomes a sign that you are noticing the right problem.",
              next: "ch1_principle",
            },
            {
              id: "ch1_seminar_explain_judgement",
              label:
                "Argue that the article is really about students relying on AI to decide what counts as credible knowledge.",
              effects: { understanding: 3, agency: 2, integrity: 1 },
              flags: { seminar_judgement_claim: true },
              feedbackTitle: "You Name The Core Distinction",
              feedbackBody:
                "This is the strongest conceptual move in the turn: AI is no longer only about information access, but about outsourced judgement.",
              next: "ch1_principle",
            },
          ],
        },
        {
          id: "ch1_principle",
          chapterId: "ch1",
          title: "Responsible AI Use",
          body: [
            "Dr. Rao asks one final practical question: if you used AI last night, what would responsible use actually look like in this course?",
            "The room is quiet. This is no longer just about your own survival strategy. It is about a principle that could guide the rest of the semester.",
          ],
          choices: [
            {
              id: "ch1_principle_words_own",
              label:
                "Say AI use is fine as long as the final words are technically your own.",
              effects: { integrity: -2, reflection: -1 },
              flags: { principle_surface_authorship: true },
              feedbackTitle: "Too Thin A Rule",
              feedbackBody:
                "This principle reduces responsibility to wording, and misses the deeper question of judgement, evidence, and explanation.",
              next: "ch1_summary",
            },
            {
              id: "ch1_principle_verify_key_claims",
              label:
                "Say AI can help students enter the text, but key claims still have to be checked against the source.",
              effects: { integrity: 2, verification: 2, reflection: 1 },
              flags: { principle_verification_named: true },
              feedbackTitle: "A Strong Working Rule",
              feedbackBody:
                "You define AI literacy as verification practice rather than simple acceptance or rejection.",
              next: "ch1_summary",
            },
            {
              id: "ch1_principle_context_sensitive",
              label:
                "Say the responsible use of AI depends on whether the task is about speed, understanding, or assessment, and students must keep responsibility for the final judgement.",
              effects: { agency: 2, integrity: 2, reflection: 2 },
              flags: { principle_context_sensitive: true },
              feedbackTitle: "You Name Governance",
              feedbackBody:
                "This is the richest answer in the turn. It treats AI use as a governance question rather than a yes-or-no rule.",
              next: "ch1_summary",
            },
          ],
        },
        {
          id: "ch1_summary",
          chapterId: "ch1",
          title: "Week 1 Report",
          type: "summary",
          body: [],
          choices: [
            {
              id: "ch1_continue",
              label: "Continue to Week 3: The Voice That Sounds Better.",
              next: "ch2_brief",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      weekLabel: "Week 3",
      title: "The Voice That Sounds Better",
      question:
        "When AI makes a claim sound stronger, what still remains yours?",
      cast: [
        { name: "Aster", role: "Can draft, revise, sharpen, or challenge your proposal." },
        { name: "Maya", role: "Pushes you to define what your argument really claims." },
        { name: "Jay", role: "Thinks the polished version is usually good enough." },
        { name: "Dr. Rao", role: "Refuses to mistake a topic sentence for an actual claim." },
      ],
      screens: [
        {
          id: "ch2_brief",
          chapterId: "ch2",
          title: "Essay Proposal",
          body: [
            "Dr. Rao releases the first major assessment: an essay proposal on AI, knowledge, and society.",
            "The assignment asks for a working thesis, a short outline, and a note on meaningful AI assistance.",
            "This is where the semester shifts from reading into authorship. You can no longer rely on borrowed clarity alone.",
          ],
          choices: [
            {
              id: "ch2_brief_read_deep",
              label:
                "Read the brief closely and mark where it expects argument, evidence, and disclosure.",
              effects: { integrity: 2, agency: 1, reflection: 1 },
              flags: { proposal_brief_read_closely: true },
              feedbackTitle: "You Read The Task As A Structure",
              feedbackBody:
                "The proposal is not only a writing task. It is also a task about what you will own, justify, and disclose.",
              next: "ch2_blank_doc",
            },
            {
              id: "ch2_brief_aster_checklist",
              label:
                "Ask Aster to turn the proposal brief into a checklist before you begin.",
              effects: { efficiency: 1, dependence: 1 },
              flags: { proposal_brief_aster_checklist: true },
              feedbackTitle: "Useful, But Already Mediated",
              feedbackBody:
                "A checklist can help, but it also means the assignment enters your workflow through AI before your own interpretation does.",
              next: "ch2_blank_doc",
            },
            {
              id: "ch2_brief_start_writing",
              label:
                "Ignore the disclosure note for now and start chasing a strong-sounding thesis.",
              effects: { efficiency: 1, integrity: -1 },
              flags: { disclosure_deferred: true },
              feedbackTitle: "The Pressure Tilts Toward Polish",
              feedbackBody:
                "This move is common, but it leaves the ethics of AI use trailing behind the writing process itself.",
              next: "ch2_blank_doc",
            },
          ],
        },
        {
          id: "ch2_blank_doc",
          chapterId: "ch2",
          title: "The Blank Document",
          body: [
            "Your notes from Week 1 give you real material: information, judgement, authority, dependence.",
            "Still, the blank page makes all of that feel suddenly thin. The problem is no longer whether you have ideas, but whether they can become an argument.",
          ],
          choices: [
            {
              id: "ch2_blank_self_start",
              label:
                "Write an awkward first sentence in plain language before asking AI for anything.",
              effects: { agency: 2, authorship: 2, efficiency: -1 },
              flags: { plain_language_start: true },
              feedbackTitle: "Meaning Arrives Before Polish",
              feedbackBody:
                "A weak-looking first sentence can still be a strong sign of ownership.",
              next: "ch2_aster_role",
            },
            {
              id: "ch2_blank_aster_thesis",
              label:
                "Ask Aster to generate several thesis options and choose from them.",
              effects: { efficiency: 2, dependence: 2, authorship: -2 },
              flags: { ai_thesis_generated_first: true },
              feedbackTitle: "Speed With A Hidden Cost",
              feedbackBody:
                "The more the argument appears before your own sentence does, the harder it becomes to tell whether the claim is really yours.",
              next: "ch2_aster_role",
            },
            {
              id: "ch2_blank_course_notes",
              label:
                "Return to the course notes and pull out one tension you are genuinely trying to resolve.",
              effects: { understanding: 2, agency: 1, authorship: 1 },
              flags: { notes_revisited_for_claim: true },
              feedbackTitle: "You Start From The Course, Not The Tool",
              feedbackBody:
                "This route keeps the proposal anchored in the argument the course itself is building.",
              next: "ch2_aster_role",
            },
          ],
        },
        {
          id: "ch2_aster_role",
          chapterId: "ch2",
          title: "What Role Should Aster Play?",
          body: [
            "Aster can act like an author, an editor, a questioner, or a critic.",
            "The same tool can either narrow your role in the writing process or sharpen it. The difference is not the tool, but the role you allow it to occupy.",
          ],
          choices: [
            {
              id: "ch2_role_author",
              label:
                "Use Aster as a provisional author: let it write the first real thesis and outline.",
              effects: { efficiency: 2, dependence: 2, authorship: -3 },
              flags: { aster_as_author: true },
              feedbackTitle: "AI Moves Too Close To The Center",
              feedbackBody:
                "This can feel productive, but it carries the strongest borrowed-voice risk in the whole chapter.",
              next: "ch2_first_thesis",
            },
            {
              id: "ch2_role_editor",
              label:
                "Use Aster as an editor to tighten wording after you sketch the claim.",
              effects: { authorship: 1, efficiency: 1 },
              flags: { aster_as_editor: true },
              feedbackTitle: "Polish Stays Downstream",
              feedbackBody:
                "This preserves more ownership because AI is entering after meaning, not before it.",
              next: "ch2_first_thesis",
            },
            {
              id: "ch2_role_critic",
              label:
                "Use Aster as a critic that pushes back on weak or generic claims.",
              effects: { understanding: 2, agency: 1, reflection: 1 },
              flags: { aster_as_critic: true },
              feedbackTitle: "The Tool Becomes A Pressure Test",
              feedbackBody:
                "This is one of the strongest uses of AI in the chapter because it keeps judgement active on your side.",
              next: "ch2_first_thesis",
            },
          ],
        },
        {
          id: "ch2_first_thesis",
          chapterId: "ch2",
          title: "The First Thesis",
          body: [
            "Aster produces a polished line: Generative AI enhances student learning by improving efficiency and access to information, but universities must manage ethical risks through responsible use policies.",
            "It sounds academic. It is also broad, safe, and suspiciously ready-made.",
            "You now decide what to do with a sentence that sounds stronger than it really thinks.",
          ],
          choices: [
            {
              id: "ch2_thesis_accept",
              label:
                "Use the polished thesis almost unchanged because it sounds credible and balanced.",
              effects: { efficiency: 1, authorship: -2, understanding: -1 },
              flags: { polished_generic_thesis_kept: true },
              feedbackTitle: "Strong Tone, Weak Ownership",
              feedbackBody:
                "The risk here is not that the thesis is false, but that it is too generic to reveal a claim you can really defend.",
              next: "ch2_workshop",
            },
            {
              id: "ch2_thesis_rewrite_judgement",
              label:
                "Rewrite the thesis around judgement, credibility, and epistemic dependence.",
              effects: { understanding: 2, agency: 1, authorship: 2 },
              flags: { judgement_thesis_written: true },
              feedbackTitle: "The Claim Gets Sharper",
              feedbackBody:
                "Now the proposal begins to sound less like a topic and more like an argument.",
              next: "ch2_workshop",
            },
            {
              id: "ch2_thesis_counterargument",
              label:
                "Ask Aster for a counterargument, then reshape the thesis in response.",
              effects: { understanding: 2, reflection: 1, dependence: 1 },
              flags: { counterargument_route_used: true },
              feedbackTitle: "You Use AI To Pressure The Claim",
              feedbackBody:
                "This route is productive when AI becomes a challenge rather than a ghostwriter.",
              next: "ch2_workshop",
            },
          ],
        },
        {
          id: "ch2_workshop",
          chapterId: "ch2",
          title: "Peer Workshop Table",
          body: [
            "Jay says the thesis sounds exactly like what markers want. Maya asks whether it actually claims anything risky enough to be worth arguing.",
            "You can follow the comfort of polish, or the discomfort of sharper meaning.",
          ],
          choices: [
            {
              id: "ch2_workshop_follow_jay",
              label:
                "Trust Jay's response and keep the safe, polished version.",
              effects: { efficiency: 1, authorship: -1, agency: -1 },
              flags: { jay_validated_polish: true },
              feedbackTitle: "External Validation Replaces Internal Check",
              feedbackBody:
                "This turns social reassurance into a substitute for conceptual pressure.",
              next: "ch2_clinic",
            },
            {
              id: "ch2_workshop_follow_maya",
              label:
                "Follow Maya's question and force the proposal to state what it is really willing to argue.",
              effects: { agency: 2, understanding: 2, authorship: 1 },
              flags: { maya_claim_pressure_followed: true },
              feedbackTitle: "The Claim Becomes Defendable",
              feedbackBody:
                "A good proposal does not only sound academic. It risks saying something specific enough to be tested.",
              next: "ch2_clinic",
            },
            {
              id: "ch2_workshop_use_ai_questions",
              label:
                "Ask Aster to generate three questions that expose what is still vague in your thesis.",
              effects: { reflection: 2, understanding: 1, dependence: 1 },
              flags: { ai_questions_used_workshop: true },
              feedbackTitle: "AI As Question Generator",
              feedbackBody:
                "This is a stronger use than asking AI to replace the argument itself.",
              next: "ch2_clinic",
            },
          ],
        },
        {
          id: "ch2_clinic",
          chapterId: "ch2",
          title: "Proposal Clinic",
          body: [
            "In office hours, Dr. Rao reads the thesis and asks: this sounds like a topic. What is your claim? What would you be willing to be wrong about?",
            "The room suddenly strips away all decorative language. You need a claim that can survive explanation.",
          ],
          choices: [
            {
              id: "ch2_clinic_topic",
              label:
                "Defend the thesis as already balanced and nuanced enough.",
              effects: { understanding: -1, agency: -1 },
              flags: { clinic_defended_topic_sentence: true },
              feedbackTitle: "Balance Is Not Yet A Claim",
              feedbackBody:
                "The clinic exposes the difference between a respectable sentence and a real argument.",
              next: "ch2_rewrite",
            },
            {
              id: "ch2_clinic_judgement_claim",
              label:
                "Say the paper will argue that AI changes students' judgement, not only their access to information.",
              effects: { understanding: 3, agency: 2, authorship: 1 },
              flags: { clinic_judgement_claim_named: true },
              feedbackTitle: "You Finally Name The Paper",
              feedbackBody:
                "This is the strongest move in the turn because it reveals what the paper is actually about.",
              next: "ch2_rewrite",
            },
            {
              id: "ch2_clinic_keep_questioning",
              label:
                "Admit the thesis is still unclear and ask what would count as a stronger claim.",
              effects: { integrity: 1, reflection: 2 },
              flags: { clinic_admitted_uncertainty: true },
              feedbackTitle: "Uncertainty Becomes Direction",
              feedbackBody:
                "You do not leave with a perfect answer, but you do leave with a better problem.",
              next: "ch2_rewrite",
            },
          ],
        },
        {
          id: "ch2_rewrite",
          chapterId: "ch2",
          title: "The Rewrite Problem",
          body: [
            "You write a rough sentence about AI changing students' relationship to evidence. Aster rewrites it into something smoother, but the meaning shifts toward generic accessibility language.",
            "The sentence now sounds more academic and less like what you meant.",
          ],
          choices: [
            {
              id: "ch2_rewrite_accept",
              label:
                "Accept the smoother version because it sounds more convincing.",
              effects: { authorship: -2, dependence: 2 },
              flags: { rewrite_shift_accepted: true },
              feedbackTitle: "Polish Displaces Meaning",
              feedbackBody:
                "This is the quietest risk in the chapter: the text improves on the surface while the claim weakens underneath.",
              next: "ch2_submit",
            },
            {
              id: "ch2_rewrite_compare",
              label:
                "Compare the AI revision line by line and keep only what preserves the meaning.",
              effects: { authorship: 2, integrity: 1, reflection: 1 },
              flags: { rewrite_compared_line_by_line: true },
              feedbackTitle: "You Edit The Edit",
              feedbackBody:
                "This is one of the healthiest authorship moves in the whole design: revision without surrender.",
              next: "ch2_submit",
            },
            {
              id: "ch2_rewrite_own_words",
              label:
                "Discard the AI version and rewrite the sentence in simpler language that still feels true.",
              effects: { agency: 2, authorship: 2, efficiency: -1 },
              flags: { rewrite_returned_to_own_words: true },
              feedbackTitle: "Clarity Without Displacement",
              feedbackBody:
                "Academic writing is not only about polish. It is also about being able to stand behind what the sentence means.",
              next: "ch2_submit",
            },
          ],
        },
        {
          id: "ch2_submit",
          chapterId: "ch2",
          title: "Submission Stance",
          body: [
            "The proposal is due. You now decide what kind of document you are actually submitting: the most polished version, the most owned version, or the most transparent version.",
          ],
          choices: [
            {
              id: "ch2_submit_polished",
              label:
                "Submit the strongest-sounding version, even if AI shaped the thesis heavily.",
              effects: { efficiency: 1, authorship: -2, dependence: 1 },
              flags: { proposal_submitted_polished: true },
              feedbackTitle: "Aesthetic Confidence, Uneven Ownership",
              feedbackBody:
                "The proposal may read well, but the chapter ends with the question of whether the argument still belongs to the learner.",
              next: "ch2_summary",
            },
            {
              id: "ch2_submit_owned",
              label:
                "Submit the version whose claim you can fully explain, even if it sounds less polished.",
              effects: { agency: 2, authorship: 2, integrity: 1 },
              flags: { proposal_submitted_owned: true },
              feedbackTitle: "Meaning Over Display",
              feedbackBody:
                "This choice is not anti-AI. It is pro-accountability.",
              next: "ch2_summary",
            },
            {
              id: "ch2_submit_transparent",
              label:
                "Submit a strong version plus a brief transparent note on how AI shaped drafting and revision.",
              effects: { integrity: 2, reflection: 2 },
              flags: { proposal_submitted_transparent: true },
              feedbackTitle: "Authorship Meets Disclosure",
              feedbackBody:
                "This move treats academic integrity as accountable process, not just invisible compliance.",
              next: "ch2_summary",
            },
          ],
        },
        {
          id: "ch2_summary",
          chapterId: "ch2",
          title: "Week 3 Report",
          type: "summary",
          body: [],
          choices: [
            {
              id: "ch2_continue",
              label: "Continue to Week 5: The Perfect Evidence.",
              next: "ch3_feedback",
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      weekLabel: "Week 5",
      title: "The Perfect Evidence",
      question:
        "When evidence looks scholarly, what makes it trustworthy?",
      cast: [
        { name: "Aster", role: "Can generate references, search terms, and citation formatting." },
        { name: "Maya", role: "Encourages claim-source checking rather than decorative citation." },
        { name: "Jay", role: "Pushes short cuts under deadline pressure." },
        { name: "Dr. Rao", role: "Insists that the proposal needs evidence that truly fits the claim." },
      ],
      screens: [
        {
          id: "ch3_feedback",
          chapterId: "ch3",
          title: "Proposal Returned",
          body: [
            "Dr. Rao's note is blunt: your paper cannot be supported by sources that merely mention AI. You need sources that speak to judgement, credibility, evidence, or learner agency.",
            "The feedback narrows the search and raises the stakes. What looks like a good source now has to be truly relevant, not merely adjacent.",
          ],
          choices: [
            {
              id: "ch3_feedback_parse",
              label:
                "Read the note closely and identify what kinds of evidence the claim actually requires.",
              effects: { integrity: 2, understanding: 1, verification: 1 },
              flags: { evidence_feedback_parsed: true },
              feedbackTitle: "You Read For Evidence Fit",
              feedbackBody:
                "This move keeps the search tied to the argument instead of drifting toward whatever looks scholarly.",
              next: "ch3_search",
            },
            {
              id: "ch3_feedback_ai_checklist",
              label:
                "Ask Aster to translate the feedback into a fast search checklist.",
              effects: { efficiency: 1, dependence: 1 },
              flags: { evidence_feedback_ai_checklist: true },
              feedbackTitle: "Useful, But One Step Further From The Teacher",
              feedbackBody:
                "AI can help operationalize feedback, but it should not become the final interpreter of what the assignment means.",
              next: "ch3_search",
            },
            {
              id: "ch3_feedback_ignore_nuance",
              label:
                "Start gathering any AI-in-education source that looks useful.",
              effects: { integrity: -2, understanding: -1, efficiency: 1 },
              flags: { source_scope_drift: true },
              feedbackTitle: "Topic Match Starts Replacing Claim Match",
              feedbackBody:
                "This is the first step toward a bibliography that looks relevant without really being evidence.",
              next: "ch3_search",
            },
          ],
        },
        {
          id: "ch3_search",
          chapterId: "ch3",
          title: "Three Speeds On One Screen",
          body: [
            "You now have the library portal, Google Scholar, and Aster open at the same time.",
            "The screen offers three kinds of speed: AI speed, search speed, and judgement speed. Only the first two can be automated.",
          ],
          choices: [
            {
              id: "ch3_search_aster_refs",
              label:
                "Ask Aster to generate a complete scholarly reference list first.",
              effects: { efficiency: 3, dependence: 3, verification: -1 },
              flags: { aster_ref_list_requested: true },
              feedbackTitle: "A Fast Start With A Hidden Trap",
              feedbackBody:
                "The list looks impressive immediately, which is exactly what makes it dangerous.",
              next: "ch3_reference_list",
            },
            {
              id: "ch3_search_terms_only",
              label:
                "Ask Aster only for search terms, then search databases yourself.",
              effects: { verification: 2, agency: 1, efficiency: 1 },
              flags: { aster_terms_only: true },
              feedbackTitle: "AI As Search Assistant, Not Source Authority",
              feedbackBody:
                "This preserves more control while still reducing some of the search burden.",
              next: "ch3_reference_list",
            },
            {
              id: "ch3_search_library_first",
              label:
                "Start with the library database and use Aster only if the search stalls.",
              effects: { integrity: 2, understanding: 1, efficiency: -1 },
              flags: { library_first_in_evidence_turn: true },
              feedbackTitle: "The Search Starts In A Verifiable Space",
              feedbackBody:
                "This move costs time, but it keeps authority tied to sources you can actually inspect.",
              next: "ch3_reference_list",
            },
          ],
        },
        {
          id: "ch3_reference_list",
          chapterId: "ch3",
          title: "Aster's Reference List",
          body: [
            "Aster produces a polished APA-style list. Some entries look exactly right. One seems almost too perfectly aligned to your claim.",
            "The problem is that good formatting can make even a hallucinated source feel plausible.",
          ],
          aster: {
            title: "Aster's List",
            body:
              "Several references appear highly relevant. Some are real, some are weakly matched, and some may not exist at all. The interface deliberately leaves this ambiguous until you verify them.",
          },
          choices: [
            {
              id: "ch3_list_copy_all",
              label:
                "Copy the whole list into your working bibliography so you can sort it later.",
              effects: { efficiency: 2, integrity: -2, dependence: 2 },
              flags: { bibliography_copied_wholesale: true },
              feedbackTitle: "Scholarly Form Replaces Scholarly Checking",
              feedbackBody:
                "You now have a polished list, but not yet a responsible one.",
              next: "ch3_verify",
            },
            {
              id: "ch3_list_tag_status",
              label:
                "Tag each source as found, not found, or uncertain before keeping it.",
              effects: { verification: 3, integrity: 2, efficiency: -1 },
              flags: { source_status_tagged: true },
              feedbackTitle: "Triage Before Trust",
              feedbackBody:
                "This slows you down, but it stops a formatted list from becoming evidence by default.",
              next: "ch3_verify",
            },
            {
              id: "ch3_list_ask_if_real",
              label:
                "Ask Aster whether the references are real before checking them yourself.",
              effects: { dependence: 2, integrity: -1 },
              flags: { ai_self_verification_attempted: true },
              feedbackTitle: "The Tool Is Asked To Judge Itself",
              feedbackBody:
                "This is exactly the kind of epistemic shortcut the artefact is trying to expose.",
              next: "ch3_verify",
            },
          ],
        },
        {
          id: "ch3_verify",
          chapterId: "ch3",
          title: "The First Verification",
          body: [
            "The first source you check is real. That is dangerous in its own way, because a single verified source can make the rest of the list feel more trustworthy than it is.",
          ],
          choices: [
            {
              id: "ch3_verify_stop_early",
              label:
                "Because the first source was real, assume the rest are probably acceptable too.",
              effects: { verification: -2, integrity: -2, dependence: 1 },
              flags: { false_confidence_after_first_hit: true },
              feedbackTitle: "Partial Verification Becomes Confidence",
              feedbackBody:
                "This is one of the key traps in the whole artefact. One true citation can make a mixed list feel legitimate.",
              next: "ch3_evidence_matrix",
            },
            {
              id: "ch3_verify_systematic",
              label:
                "Keep checking source by source using abstracts, DOIs, and database records.",
              effects: { verification: 3, integrity: 2, efficiency: -1 },
              flags: { systematic_verification_used: true },
              feedbackTitle: "You Keep Going After The First Success",
              feedbackBody:
                "This is what evidence accountability looks like in practice.",
              next: "ch3_evidence_matrix",
            },
            {
              id: "ch3_verify_replace",
              label:
                "Delete anything unverifiable and replace it, even if that makes the list shorter.",
              effects: { integrity: 2, agency: 1, efficiency: -1 },
              flags: { unverifiable_sources_replaced: true },
              feedbackTitle: "A Shorter List, A Stronger One",
              feedbackBody:
                "The bibliography becomes less decorative and more defensible.",
              next: "ch3_evidence_matrix",
            },
          ],
        },
        {
          id: "ch3_evidence_matrix",
          chapterId: "ch3",
          title: "Evidence Or Decoration",
          body: [
            "Even a real source is not automatically good evidence. Some sources only mention AI in passing. Others are background, not support.",
            "The literature review now becomes a judgement task, not just a collection task.",
          ],
          choices: [
            {
              id: "ch3_matrix_topic_match",
              label:
                "Keep any source that mentions AI in the abstract somewhere.",
              effects: { understanding: -1, integrity: -1 },
              flags: { topic_match_only_logic: true },
              feedbackTitle: "Topic Match Is Not Claim Support",
              feedbackBody:
                "This creates the appearance of relevance while leaving the argument weak underneath.",
              next: "ch3_deadline",
            },
            {
              id: "ch3_matrix_build_matrix",
              label:
                "Build a simple claim-source-relevance matrix before keeping a citation.",
              effects: { understanding: 2, integrity: 2, verification: 1 },
              flags: { evidence_matrix_built: true },
              feedbackTitle: "The Claim Finally Governs The Sources",
              feedbackBody:
                "This is the most rigorous evidence move in the chapter.",
              next: "ch3_deadline",
            },
            {
              id: "ch3_matrix_trim_claim",
              label:
                "Trim the thesis so it only claims what your verified sources can really support.",
              effects: { integrity: 2, agency: 1, understanding: 1 },
              flags: { claim_trimmed_to_match_sources: true },
              feedbackTitle: "Argument Narrows, Credibility Improves",
              feedbackBody:
                "This treats narrowing as intellectual honesty, not as losing ambition.",
              next: "ch3_deadline",
            },
          ],
        },
        {
          id: "ch3_deadline",
          chapterId: "ch3",
          title: "Deadline Pressure",
          body: [
            "Jay says that if two sources are real, the rest are probably fine. Maya shares a rough evidence matrix instead.",
            "Aster offers to instantly format everything into APA. Pressure and polish arrive together.",
          ],
          choices: [
            {
              id: "ch3_deadline_format_all",
              label:
                "Let Aster format the full list now, even if some sources remain uncertain.",
              effects: { efficiency: 3, integrity: -2, dependence: 1 },
              flags: { uncertain_sources_formatted: true },
              feedbackTitle: "Formatting Outruns Verification",
              feedbackBody:
                "A polished bibliography now risks hiding unresolved uncertainty.",
              next: "ch3_help",
            },
            {
              id: "ch3_deadline_verified_only",
              label:
                "Format only the sources you have actually verified.",
              effects: { integrity: 2, verification: 1 },
              flags: { only_verified_formatted: true },
              feedbackTitle: "You Refuse To Let The Format Lie",
              feedbackBody:
                "The list stays smaller, but it stays more honest too.",
              next: "ch3_help",
            },
            {
              id: "ch3_deadline_follow_jay",
              label:
                "Take Jay's shortcut because the list already looks complete.",
              effects: { dependence: 2, integrity: -2, pressure: -1 },
              flags: { jay_deadline_shortcut_followed: true },
              feedbackTitle: "Social Pressure Resolves The Ambiguity For You",
              feedbackBody:
                "This relieves stress in the short term while increasing risk later.",
              next: "ch3_help",
            },
          ],
        },
        {
          id: "ch3_help",
          chapterId: "ch3",
          title: "Help Route",
          body: [
            "You can still ask for help before the annotated bibliography goes in. The question is what kind of help keeps responsibility with you.",
          ],
          choices: [
            {
              id: "ch3_help_librarian",
              label:
                "Ask the librarian how to verify a doubtful citation trail.",
              effects: { verification: 2, agency: 1, integrity: 1 },
              flags: { librarian_help_used: true },
              feedbackTitle: "Institutional Help Strengthens Judgement",
              feedbackBody:
                "This is self-regulation, not weakness. The learner stays responsible while using expert support.",
              next: "ch3_submit",
            },
            {
              id: "ch3_help_instructor",
              label:
                "Email Dr. Rao to ask whether a source belongs in background rather than evidence.",
              effects: { integrity: 2, reflection: 1 },
              flags: { instructor_help_on_evidence: true },
              feedbackTitle: "You Ask About Use, Not Just Existence",
              feedbackBody:
                "This is a mature evidence question: not only 'is it real?' but 'what can it justifiably do here?'",
              next: "ch3_submit",
            },
            {
              id: "ch3_help_no_one",
              label:
                "Avoid asking for help and trust your current bibliography as good enough.",
              effects: { efficiency: 1, integrity: -1 },
              flags: { help_avoided_evidence_turn: true },
              feedbackTitle: "The Semester Moves On With Some Risk Still Buried",
              feedbackBody:
                "Silence can feel efficient, but it often leaves uncertainty in place for the final submission to inherit.",
              next: "ch3_submit",
            },
          ],
        },
        {
          id: "ch3_submit",
          chapterId: "ch3",
          title: "Annotated Bibliography",
          body: [
            "The annotated bibliography is due. What you submit now is not only a list of sources, but a record of what you chose to trust.",
          ],
          choices: [
            {
              id: "ch3_submit_polished_mix",
              label:
                "Submit the polished full list because it looks impressive and complete.",
              effects: { integrity: -2, dependence: 1 },
              flags: { bibliography_submitted_polished_mix: true },
              feedbackTitle: "A Bibliography That Looks Stronger Than It Is",
              feedbackBody:
                "The chapter ends with a risk that may come back in Week 10 when every citation matters again.",
              next: "ch3_summary",
            },
            {
              id: "ch3_submit_verified",
              label:
                "Submit only verified sources, even if the list is narrower than you hoped.",
              effects: { integrity: 2, verification: 1, agency: 1 },
              flags: { bibliography_submitted_verified_only: true },
              feedbackTitle: "Evidence Before Appearance",
              feedbackBody:
                "This is the clearest sign in the chapter that you are learning how to govern evidence.",
              next: "ch3_summary",
            },
            {
              id: "ch3_submit_limits",
              label:
                "Submit a verified list and explicitly note what remains uncertain or beyond scope.",
              effects: { integrity: 2, reflection: 2 },
              flags: { bibliography_limits_named: true },
              feedbackTitle: "Uncertainty Becomes Accountable",
              feedbackBody:
                "Rather than hiding limitations, you turn them into part of your academic judgement.",
              next: "ch3_summary",
            },
          ],
        },
        {
          id: "ch3_summary",
          chapterId: "ch3",
          title: "Week 5 Report",
          type: "summary",
          body: [],
          choices: [
            {
              id: "ch3_continue",
              label: "Continue to Week 7: The Neutral Machine.",
              next: "ch4_group_brief",
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      weekLabel: "Week 7",
      title: "The Neutral Machine",
      question:
        "When AI sounds neutral, whose knowledge is missing?",
      cast: [
        { name: "Aster", role: "Generates smooth overviews and mainstream case examples." },
        { name: "Maya", role: "Pushes the group to notice missing voices and hidden conditions." },
        { name: "Jay", role: "Prefers a clear, balanced slide deck over deeper critique." },
        { name: "Dr. Rao", role: "Presses the group to justify its own framing choices." },
      ],
      screens: [
        {
          id: "ch4_group_brief",
          chapterId: "ch4",
          title: "Group Briefing",
          body: [
            "The group presentation topic is AI and educational inequality.",
            "Dr. Rao adds one instruction that changes everything: do not only ask whether AI works. Ask who it works for, under what conditions, and whose learning problems become invisible.",
          ],
          choices: [
            {
              id: "ch4_brief_conditions",
              label:
                "Highlight the phrases about who benefits, under what conditions, and who becomes invisible.",
              effects: { understanding: 1, representation: 2, integrity: 1 },
              flags: { framing_instruction_marked: true },
              feedbackTitle: "The Brief Already Contains The Critique",
              feedbackBody:
                "You begin the chapter by treating framing as part of the task, not an optional extra.",
              next: "ch4_overview",
            },
            {
              id: "ch4_brief_aster",
              label:
                "Ask Aster to summarize the presentation brief before the group meets.",
              effects: { efficiency: 1, dependence: 1 },
              flags: { group_brief_seen_through_ai: true },
              feedbackTitle: "The Task Enters Through AI Again",
              feedbackBody:
                "This may still be useful, but it means AI is shaping not only answers, but how the assignment itself is interpreted.",
              next: "ch4_overview",
            },
            {
              id: "ch4_brief_speed_split",
              label:
                "Split the task quickly with Jay so slide production can start immediately.",
              effects: { efficiency: 2, agency: -1 },
              flags: { group_speed_split: true },
              feedbackTitle: "Production Starts Before Framing Is Settled",
              feedbackBody:
                "This is how narrow cases often get locked in before anyone decides they are narrow.",
              next: "ch4_overview",
            },
          ],
        },
        {
          id: "ch4_overview",
          chapterId: "ch4",
          title: "Aster's Neutral Overview",
          body: [
            "Aster generates a neat opening frame: AI can personalize learning, improve access, and reduce administrative burden, but it also raises concerns about bias, privacy, and academic integrity.",
            "None of this is obviously wrong. It is simply too smooth, too balanced, and too familiar.",
          ],
          aster: {
            title: "Aster's Overview",
            body:
              "The default answer looks neutral because it includes both benefits and risks. The chapter asks whether balance in tone can still hide a narrow frame.",
          },
          choices: [
            {
              id: "ch4_overview_keep_skeleton",
              label:
                "Use the overview as the presentation skeleton because it already looks balanced.",
              effects: { efficiency: 2, representation: -2, dependence: 1 },
              flags: { neutral_overview_adopted: true },
              feedbackTitle: "Balanced Language, Narrow Frame",
              feedbackBody:
                "This is the representational version of a polished thesis: it sounds safe before you ask what it leaves out.",
              next: "ch4_examples",
            },
            {
              id: "ch4_overview_mark_gaps",
              label:
                "Annotate the overview with what feels missing, flattened, or over-generalized.",
              effects: { representation: 2, understanding: 1 },
              flags: { overview_gaps_marked: true },
              feedbackTitle: "You Treat Neutrality As A Claim",
              feedbackBody:
                "This is the turn where AI output stops being merely information and becomes a framing device to inspect.",
              next: "ch4_examples",
            },
            {
              id: "ch4_overview_ask_absent",
              label:
                "Ask Aster directly which learners or conditions may be absent from its answer.",
              effects: { representation: 1, dependence: 1, reflection: 1 },
              flags: { ai_asked_about_absence: true },
              feedbackTitle: "A Better Prompt, Still Not The Last Word",
              feedbackBody:
                "Prompting can widen the frame, but it cannot substitute for independent searching and judgement.",
              next: "ch4_examples",
            },
          ],
        },
        {
          id: "ch4_examples",
          chapterId: "ch4",
          title: "Example Selection",
          body: [
            "Aster's examples mostly involve elite universities, English-language tools, and well-resourced platforms.",
            "The problem is not that these cases are false. The problem is that they are the easiest lives for AI systems to see.",
          ],
          choices: [
            {
              id: "ch4_examples_keep_mainstream",
              label:
                "Keep the mainstream examples because they are easiest to verify and present.",
              effects: { efficiency: 2, representation: -2 },
              flags: { mainstream_examples_kept: true },
              feedbackTitle: "Visibility Follows Infrastructure",
              feedbackBody:
                "The presentation now risks reproducing the same narrow attention it hopes to criticize.",
              next: "ch4_group_tension",
            },
            {
              id: "ch4_examples_token",
              label:
                "Add one more diverse example without changing the overall frame.",
              effects: { representation: 0, integrity: -1 },
              flags: { token_diversity_case_added: true },
              feedbackTitle: "Diversity Added As Decoration",
              feedbackBody:
                "The frame remains the same, even though it now looks more inclusive on the surface.",
              next: "ch4_group_tension",
            },
            {
              id: "ch4_examples_search_beyond",
              label:
                "Search for local, low-resource, multilingual, or access-limited cases.",
              effects: { representation: 3, understanding: 1, efficiency: -1 },
              flags: { low_resource_cases_found: true },
              feedbackTitle: "You Force New Cases Into View",
              feedbackBody:
                "This is the chapter's equivalent of source verification: you verify not only accuracy, but representational range.",
              next: "ch4_group_tension",
            },
          ],
        },
        {
          id: "ch4_group_tension",
          chapterId: "ch4",
          title: "Group Tension",
          body: [
            "Jay wants a clean, benefits-versus-risks slide deck. Maya says that format still centers the institutions already most visible to AI systems.",
            "You have to choose what kind of disagreement this presentation is willing to hold.",
          ],
          choices: [
            {
              id: "ch4_tension_follow_jay",
              label:
                "Follow Jay's cleaner structure so the deck stays easy to understand.",
              effects: { efficiency: 1, representation: -1, agency: -1 },
              flags: { jay_frame_kept: true },
              feedbackTitle: "Clarity Wins, At A Cost",
              feedbackBody:
                "The deck may become easier to present, but the chapter's deeper question stays muted.",
              next: "ch4_local_search",
            },
            {
              id: "ch4_tension_follow_maya",
              label:
                "Follow Maya's critique and treat missing voices as part of the analysis itself.",
              effects: { representation: 2, agency: 1, integrity: 1 },
              flags: { maya_frame_kept: true },
              feedbackTitle: "The Frame Widens",
              feedbackBody:
                "You move from asking whether AI is useful to asking which lives it notices first.",
              next: "ch4_local_search",
            },
            {
              id: "ch4_tension_ai_as_object",
              label:
                "Use Aster's first answer as an example of how neutral outputs can still hide bias.",
              effects: { representation: 2, understanding: 2, reflection: 1 },
              flags: { ai_output_used_as_object_of_critique: true },
              feedbackTitle: "The Tool Becomes The Case Study",
              feedbackBody:
                "This is the strongest critical move in the turn.",
              next: "ch4_local_search",
            },
          ],
        },
        {
          id: "ch4_local_search",
          chapterId: "ch4",
          title: "Searching Beyond Default Visibility",
          body: [
            "You now have to decide where to look for cases the default AI answer did not foreground.",
          ],
          choices: [
            {
              id: "ch4_search_english_only",
              label:
                "Stay in English-language databases because they feel fastest and safest.",
              effects: { efficiency: 1, representation: -2 },
              flags: { english_only_case_search: true },
              feedbackTitle: "Familiar Search, Narrow World",
              feedbackBody:
                "Speed and confidence stay high, but representational range remains limited.",
              next: "ch4_framing",
            },
            {
              id: "ch4_search_local_bilingual",
              label:
                "Search local policy, bilingual materials, and institution-specific examples.",
              effects: { representation: 3, understanding: 1 },
              flags: { local_bilingual_examples_added: true },
              feedbackTitle: "The Case Set Gets Closer To Actual Conditions",
              feedbackBody:
                "The presentation starts to move away from generic AI discourse and toward situated learning conditions.",
              next: "ch4_framing",
            },
            {
              id: "ch4_search_accessibility",
              label:
                "Look specifically for cases involving disability, access barriers, or low-connectivity learning environments.",
              effects: { representation: 2, integrity: 1, reflection: 1 },
              flags: { accessibility_cases_added: true },
              feedbackTitle: "Inequality Becomes More Than A Buzzword",
              feedbackBody:
                "The group's idea of educational inequality becomes materially sharper.",
              next: "ch4_framing",
            },
          ],
        },
        {
          id: "ch4_framing",
          chapterId: "ch4",
          title: "Slide Framing",
          body: [
            "The evidence is now gathered. The final choice is conceptual: what is this presentation actually saying AI is?",
          ],
          choices: [
            {
              id: "ch4_frame_solution",
              label:
                "Frame AI mainly as a solution that can reduce educational inequality.",
              effects: { understanding: -1, representation: -1 },
              flags: { final_frame_solution: true },
              feedbackTitle: "The Tool Is Centered, The Conditions Fade",
              feedbackBody:
                "This frame is easy to present but tends to smooth away unequal infrastructures.",
              next: "ch4_qna",
            },
            {
              id: "ch4_frame_risk",
              label:
                "Frame AI mainly as a risk that can worsen educational inequality.",
              effects: { understanding: 1 },
              flags: { final_frame_risk: true },
              feedbackTitle: "Clear, But Still Somewhat Binary",
              feedbackBody:
                "The critique lands, but it may still flatten the complexity of uneven support.",
              next: "ch4_qna",
            },
            {
              id: "ch4_frame_uneven_infrastructure",
              label:
                "Frame AI as uneven infrastructure that benefits some learners more than others.",
              effects: { understanding: 2, representation: 2, agency: 1 },
              flags: { final_frame_uneven_infrastructure: true },
              feedbackTitle: "The Framing Finally Matches The Theme",
              feedbackBody:
                "This is the most postgraduate-level frame in the turn: structural, situated, and analytically flexible.",
              next: "ch4_qna",
            },
          ],
        },
        {
          id: "ch4_qna",
          chapterId: "ch4",
          title: "Presentation Q and A",
          body: [
            "After the presentation, Dr. Rao asks a pointed question: if your group argues that AI can reproduce inequality, how did you make sure your own examples did not reproduce the same narrow view?",
          ],
          choices: [
            {
              id: "ch4_qna_defend",
              label:
                "Defend the examples as good enough and move on.",
              effects: { integrity: -1, representation: -1 },
              flags: { qna_defensive: true },
              feedbackTitle: "The Critique Stops One Step Too Early",
              feedbackBody:
                "You can critique AI and still reproduce its limits if you never turn that critique back on your own frame.",
              next: "ch4_reflection",
            },
            {
              id: "ch4_qna_admit_limits",
              label:
                "Acknowledge the limits of the case set and explain how the group tried to search beyond AI defaults.",
              effects: { integrity: 2, reflection: 2, representation: 1 },
              flags: { qna_limits_admitted: true },
              feedbackTitle: "Public Accountability",
              feedbackBody:
                "This is not a weaker answer. It is a stronger one because it shows that critique includes your own methods too.",
              next: "ch4_reflection",
            },
            {
              id: "ch4_qna_ai_object",
              label:
                "Explain that Aster's first answer became part of the group's analysis, not the unquestioned frame.",
              effects: { understanding: 1, representation: 2 },
              flags: { qna_ai_object_explained: true },
              feedbackTitle: "You Show How The Tool Was Governed",
              feedbackBody:
                "The question shifts from what AI said to how the group responded to what AI said.",
              next: "ch4_reflection",
            },
          ],
        },
        {
          id: "ch4_reflection",
          chapterId: "ch4",
          title: "Group Reflection",
          body: [
            "After class, you write a short reflection on how AI shaped what the group first considered relevant.",
          ],
          choices: [
            {
              id: "ch4_reflect_neutral",
              label:
                "Say Aster provided a useful neutral starting point for the group.",
              effects: { reflection: 0, representation: -1 },
              flags: { reflection_neutral_starting_point: true },
              feedbackTitle: "Neutrality Stays Unquestioned",
              feedbackBody:
                "This reflection preserves usefulness but leaves framing power underexamined.",
              next: "ch4_summary",
            },
            {
              id: "ch4_reflect_visibility",
              label:
                "Say Aster made some groups visible quickly while making others harder to notice.",
              effects: { reflection: 2, representation: 1 },
              flags: { reflection_visibility_named: true },
              feedbackTitle: "The Turn's Core Lesson Lands",
              feedbackBody:
                "This captures the chapter's central move from accuracy checking to visibility checking.",
              next: "ch4_summary",
            },
            {
              id: "ch4_reflect_prompting_limits",
              label:
                "Say prompting widened the answer, but the group still had to search beyond AI to change the frame.",
              effects: { reflection: 2, understanding: 1 },
              flags: { reflection_prompting_limits_named: true },
              feedbackTitle: "Prompting Helps, But Governance Matters More",
              feedbackBody:
                "This is one of the strongest reflective outcomes in the whole prototype.",
              next: "ch4_summary",
            },
          ],
        },
        {
          id: "ch4_summary",
          chapterId: "ch4",
          title: "Week 7 Report",
          type: "summary",
          body: [],
          choices: [
            {
              id: "ch4_continue",
              label: "Continue to Week 10: The Final Submission.",
              next: "ch5_deadline",
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      weekLabel: "Week 10",
      title: "The Final Submission",
      question:
        "Under pressure, who remains responsible for the final work?",
      cast: [
        { name: "Aster", role: "Can plan, draft, critique, polish, and generate the final note." },
        { name: "Dr. Rao", role: "Her earlier prompts now return as internal pressure on the final submission." },
      ],
      screens: [
        {
          id: "ch5_deadline",
          chapterId: "ch5",
          title: "The Deadline Window",
          body: [
            "It is Week 10. The final paper is due in 36 hours.",
            "You have proposal notes, annotated bibliography work, group presentation reflections, and multiple Aster outputs. You also have fatigue.",
          ],
          choices: [
            {
              id: "ch5_deadline_triage",
              label:
                "Make a triage plan for claim, evidence, draft, and AI-use note before doing anything else.",
              effects: { agency: 2, reflection: 2, pressure: -2 },
              flags: { final_triage_plan_made: true },
              feedbackTitle: "Planning Becomes Part Of Governance",
              feedbackBody:
                "This does not make the deadline easier, but it stops pressure from dictating every next decision.",
              next: "ch5_aster_role",
            },
            {
              id: "ch5_deadline_aster_plan",
              label:
                "Ask Aster to plan the remaining 36 hours for you.",
              effects: { efficiency: 2, dependence: 1 },
              flags: { final_time_plan_by_ai: true },
              feedbackTitle: "AI Starts Managing The Pace",
              feedbackBody:
                "This may help, but it also means AI is now shaping not only content but your sense of urgency and order.",
              next: "ch5_aster_role",
            },
            {
              id: "ch5_deadline_full_draft_now",
              label:
                "Request a full draft immediately so you have something polished to work from.",
              effects: { efficiency: 3, dependence: 3, authorship: -2 },
              flags: { full_draft_requested_early: true },
              feedbackTitle: "The Final Shortcut Appears",
              feedbackBody:
                "This is the strongest temptation in the entire artefact because it arrives after a semester of real work.",
              next: "ch5_aster_role",
            },
          ],
        },
        {
          id: "ch5_aster_role",
          chapterId: "ch5",
          title: "What Can Aster Do Here?",
          body: [
            "Aster offers to generate a complete draft based on everything you have built so far.",
            "The issue is no longer whether AI can help. It is whether the role it plays still leaves enough of the paper under your control.",
          ],
          choices: [
            {
              id: "ch5_role_full_writer",
              label:
                "Let Aster act as a full writer for the first complete version.",
              effects: { efficiency: 2, dependence: 3, authorship: -3, agency: -1 },
              flags: { final_role_full_writer: true },
              feedbackTitle: "The Tool Moves To The Center",
              feedbackBody:
                "This does not erase your earlier effort, but it does change who is now shaping the paper's language and emphasis.",
              next: "ch5_argument",
            },
            {
              id: "ch5_role_architect",
              label:
                "Use Aster only as an architect for section order and structure.",
              effects: { efficiency: 1, agency: 1 },
              flags: { final_role_architect: true },
              feedbackTitle: "Structure Support Without Full Substitution",
              feedbackBody:
                "This keeps AI influential, but not in direct control of the final meaning-bearing sentences.",
              next: "ch5_argument",
            },
            {
              id: "ch5_role_critic",
              label:
                "Use Aster as a critic to pressure weak transitions and missing counterarguments.",
              effects: { understanding: 2, agency: 1, reflection: 1 },
              flags: { final_role_critic: true },
              feedbackTitle: "AI As Final Stress Test",
              feedbackBody:
                "This is one of the strongest responsible-use patterns in the final turn.",
              next: "ch5_argument",
            },
          ],
        },
        {
          id: "ch5_argument",
          chapterId: "ch5",
          title: "Building The Argument",
          body: [
            "The draft still needs a center. You now decide whether the paper will be led by claim, by outline, or by a stitched together sense of what sounds complete.",
          ],
          choices: [
            {
              id: "ch5_argument_claim_led",
              label:
                "Build the paper around your core claim about judgement, evidence, and learner agency.",
              effects: { agency: 2, understanding: 1, authorship: 1 },
              flags: { final_argument_claim_led: true },
              feedbackTitle: "The Paper Has A Center",
              feedbackBody:
                "A strong argument is easier to govern because it gives the draft a principle stronger than polish.",
              next: "ch5_evidence",
            },
            {
              id: "ch5_argument_ai_outline_led",
              label:
                "Follow the cleanest AI-generated outline because it already sounds coherent.",
              effects: { efficiency: 1, dependence: 1, agency: -1 },
              flags: { final_argument_outline_led: true },
              feedbackTitle: "Coherence Without Full Ownership",
              feedbackBody:
                "The draft may read smoothly while still drifting away from what you most needed to argue.",
              next: "ch5_evidence",
            },
            {
              id: "ch5_argument_stitch_sections",
              label:
                "Stitch together the strongest paragraphs from multiple AI-assisted versions.",
              effects: { efficiency: 2, authorship: -2, dependence: 2 },
              flags: { final_argument_stitched: true },
              feedbackTitle: "The Paper Starts To Sound Finished Before It Is Integrated",
              feedbackBody:
                "Stitching can create fluency quickly, but it can also hollow out your sense of why the structure hangs together.",
              next: "ch5_evidence",
            },
          ],
        },
        {
          id: "ch5_evidence",
          chapterId: "ch5",
          title: "Evidence Audit",
          body: [
            "The reference list from Chapter 3 returns. Some sources are solid. Others still carry uncertainty or only partial relevance.",
            "You have time to fix this only if you choose to see it clearly now.",
          ],
          choices: [
            {
              id: "ch5_evidence_keep_full",
              label:
                "Keep the full bibliography because removing sources will make the paper look thinner.",
              effects: { integrity: -2, verification: -2 },
              flags: { final_unverified_sources_kept: true },
              feedbackTitle: "Appearance Beats Evidence Governance",
              feedbackBody:
                "This is the Broken Citation pathway reappearing at the end of the semester.",
              next: "ch5_voice",
            },
            {
              id: "ch5_evidence_remove_weak",
              label:
                "Remove anything unverifiable or weakly matched, even if the reference list gets shorter.",
              effects: { integrity: 2, verification: 2, efficiency: -1 },
              flags: { final_weak_sources_removed: true },
              feedbackTitle: "The Paper Gets Leaner And Stronger",
              feedbackBody:
                "You let the evidence govern the paper instead of letting the paper's appearance govern the evidence.",
              next: "ch5_voice",
            },
            {
              id: "ch5_evidence_revise_claim",
              label:
                "Revise the claim so every remaining source truly fits the final paper.",
              effects: { integrity: 2, agency: 1, understanding: 1 },
              flags: { final_claim_revised_to_fit_evidence: true },
              feedbackTitle: "Final Integrity Through Alignment",
              feedbackBody:
                "This is a strong scholarly move because it links evidence and argument rather than treating them as separate repairs.",
              next: "ch5_voice",
            },
          ],
        },
        {
          id: "ch5_voice",
          chapterId: "ch5",
          title: "Voice And Meaning",
          body: [
            "Aster improves the introduction and conclusion. The prose is better. The emphasis is not necessarily better.",
            "One version shifts the paper from learner judgement toward generic policy management. It sounds stronger while meaning something slightly different.",
          ],
          choices: [
            {
              id: "ch5_voice_accept_polish",
              label:
                "Accept the polished version because it reads more like publishable academic prose.",
              effects: { authorship: -2, dependence: 1 },
              flags: { final_polish_shift_accepted: true },
              feedbackTitle: "Fluency Quietly Moves The Argument",
              feedbackBody:
                "This is the final return of Chapter 2's authorship problem.",
              next: "ch5_bias",
            },
            {
              id: "ch5_voice_compare_claim",
              label:
                "Compare each revision against the paper's core claim before keeping it.",
              effects: { agency: 1, integrity: 1, authorship: 1 },
              flags: { final_rewrite_checked_against_claim: true },
              feedbackTitle: "You Edit For Meaning, Not Only Tone",
              feedbackBody:
                "This is what a governed final draft looks like.",
              next: "ch5_bias",
            },
            {
              id: "ch5_voice_own_words",
              label:
                "Rewrite the conclusion yourself in plainer language so the meaning stays yours.",
              effects: { agency: 2, authorship: 2, efficiency: -1 },
              flags: { final_conclusion_self_written: true },
              feedbackTitle: "Plain Language, Strong Ownership",
              feedbackBody:
                "A final paragraph can be less polished and still be more defensible because it remains genuinely yours.",
              next: "ch5_bias",
            },
          ],
        },
        {
          id: "ch5_bias",
          chapterId: "ch5",
          title: "Bias And Framing Check",
          body: [
            "The case set still leans toward English-language universities and better-resourced institutions unless you actively interrupt it.",
            "This is the last moment to decide whether the paper will only be accurate, or whether it will also be representationally aware.",
          ],
          choices: [
            {
              id: "ch5_bias_keep_cases",
              label:
                "Keep the existing examples because the draft already feels coherent.",
              effects: { representation: -2, efficiency: 1 },
              flags: { final_narrow_cases_kept: true },
              feedbackTitle: "Coherence Wins, Visibility Narrows",
              feedbackBody:
                "The paper may still be strong in other ways, but it carries Chapter 4's unresolved framing risk into the ending.",
              next: "ch5_note",
            },
            {
              id: "ch5_bias_add_case",
              label:
                "Add one well-supported local or low-resource case before submitting.",
              effects: { representation: 2, integrity: 1, efficiency: -1 },
              flags: { final_local_case_added: true },
              feedbackTitle: "The Frame Widens Before The End",
              feedbackBody:
                "This is a small but meaningful correction of default AI visibility.",
              next: "ch5_note",
            },
            {
              id: "ch5_bias_name_limits",
              label:
                "Keep the cases but explicitly name the limits of the paper's framing.",
              effects: { integrity: 1, reflection: 2, representation: 1 },
              flags: { final_framing_limits_named: true },
              feedbackTitle: "Limitation Becomes Accountability",
              feedbackBody:
                "Naming a limit does not fully solve it, but it does change the ethics of how the paper presents itself.",
              next: "ch5_note",
            },
          ],
        },
        {
          id: "ch5_note",
          chapterId: "ch5",
          title: "AI-Use Note",
          body: [
            "The final submission requires a short AI-use note. This is not a confession. It is a way of making the process accountable.",
          ],
          choices: [
            {
              id: "ch5_note_none",
              label:
                "Skip the note because the final wording is mostly yours anyway.",
              effects: { integrity: -1 },
              flags: { final_note_skipped: true },
              feedbackTitle: "Silence Keeps The Process Hidden",
              feedbackBody:
                "The absence of a note may feel harmless, but it weakens the paper's accountability structure.",
              next: "ch5_submit",
            },
            {
              id: "ch5_note_generic",
              label:
                "Write a generic note saying AI was used for planning and editing.",
              effects: { integrity: 0, reflection: 0 },
              flags: { final_note_generic: true },
              feedbackTitle: "Disclosure Happens, But Thinly",
              feedbackBody:
                "This is better than silence, but it still hides where judgement stayed with you and where it did not.",
              next: "ch5_submit",
            },
            {
              id: "ch5_note_specific",
              label:
                "Write a specific note explaining how AI supported planning, critique, language support, and source leads while you retained responsibility for claims and citations.",
              effects: { integrity: 3, reflection: 2 },
              flags: { final_note_specific: true },
              feedbackTitle: "The Process Becomes Legible",
              feedbackBody:
                "This is the strongest transparency move in the prototype.",
              next: "ch5_submit",
            },
          ],
        },
        {
          id: "ch5_submit",
          chapterId: "ch5",
          title: "Submit Or Pause",
          body: [
            "There are only minutes left. The paper is not perfect. It may never feel perfect.",
            "The final question is no longer whether AI helped you finish. It is whether you can still explain and defend what you are about to submit.",
          ],
          choices: [
            {
              id: "ch5_submit_polished",
              label:
                "Submit the most polished AI-shaped version now.",
              effects: { efficiency: 1, dependence: 1, integrity: -1 },
              flags: { final_submission_polished: true },
              feedbackTitle: "Completion Wins The Moment",
              feedbackBody:
                "The ending will now read how much of that completion still remained accountable.",
              next: "ending",
            },
            {
              id: "ch5_submit_accountable",
              label:
                "Submit the version you can honestly explain, verify, and stand behind.",
              effects: { agency: 2, integrity: 2, authorship: 1 },
              flags: { final_submission_accountable: true },
              feedbackTitle: "The Semester Comes Back To Judgement",
              feedbackBody:
                "This is the clearest pathway toward critical agency rather than mere AI competence.",
              next: "ending",
            },
            {
              id: "ch5_submit_pause",
              label:
                "Pause to fix citations or authorship problems, even if that costs you time.",
              effects: { integrity: 2, efficiency: -2, agency: 1 },
              flags: { final_submission_paused_for_integrity: true },
              feedbackTitle: "You Refuse A False Finish",
              feedbackBody:
                "The ending will read this as a costly but meaningful choice about what can and cannot be handed away.",
              next: "ending",
            },
          ],
        },
      ],
    },
  ];

  const endingScreen = {
    id: "ending",
    chapterId: "ending",
    title: "Semester Report",
    type: "ending",
    body: [],
    choices: [
      {
        id: "restart",
        label: "Restart the semester from the beginning.",
        next: "ch0_start",
        effects: {},
        flags: { restart_requested: true },
        feedbackTitle: "Restarting",
        feedbackBody:
          "The prototype resets so you can explore a different pattern of AI use.",
      },
    ],
  };

  window.WhoThinkingGameData = {
    title: "Who Is Thinking?",
    chapters,
    endingScreen,
  };
})();
