# English Learning Game — Curriculum Outline & Roadmap

Live at: **https://teemac477.github.io/english-learning-game/**

**Status legend:** ✅ built · 🟡 partial · ⬜ planned

---

## Current build status (as of this review)

| Section | Status | Items |
|---|---|---|
| Prepositions (time/place/movement) | ✅ built | 108 questions |
| Vocabulary (7 topics, image + Russian) | ✅ built | 199 words |
| Sentence Builder (word rearranging) | ✅ built | 48 sentences |
| Grammar Lessons (3-phase: verbs → grammar → sentences) | ✅ built | 4 tenses, 6 lessons, 228 items |
| **Total content** | | **~583 items** |

Engine features already in place: auto-advance (2s countdown), review-missed-questions mode, best-score saving (localStorage), progress bars, phase tracker, three vocabulary modes (image/Russian/both).

---

## 1. Vocabulary — expand existing + new topics

**Existing topics need more rounds** (currently 1–4 rounds each, aim for 3+ each):
| Topic | Now | Target |
|---|---|---|
| Food & Drink | 4 rounds ✅ | — good coverage |
| Animals | 4 rounds ✅ | — good coverage |
| Body Parts | 2 rounds | 3 rounds |
| Clothes | 1 round | 2–3 rounds |
| House & Home | 1 round | 2–3 rounds |
| Transport | 1 round | 2 rounds |
| Weather | 1 round | 2 rounds |

**New topics to add:**
| Topic | Sample contents |
|---|---|
| Family Members | immediate, extended, in-laws, relationship words |
| Jobs & Occupations | common jobs, workplaces, job duties |
| Countries & Nationalities | country → nationality → language |
| School & Classroom | subjects, objects, classroom instructions |
| Sports & Hobbies | equipment, play/do/go collocations |
| Colours & Shapes | basic + advanced colours, 2D/3D shapes |
| Numbers & Time | cardinal, ordinal, telling the time, dates |
| Days & Months | days, months, ordinal dates |
| Nature & Places | landscape, city vs countryside, buildings |
| Technology | devices, internet, common tech verbs |
| Emotions & Feelings | basic, advanced, describing mood |

---

## 2. Grammar Lessons — more tenses + more lessons per tense

**Priority: add a 3rd lesson to each existing tense** (currently 1–2 lessons each) so repeat play stays fresh, matching the "3 playthroughs without repetition" goal.

**New tenses to add** (same 3-phase structure: learn verbs → grammar → sentences):
| Tense | Focus |
|---|---|
| Present Perfect | for/since · ever/never · just/already/yet |
| Present Perfect Continuous | duration · vs. present perfect |
| Past Perfect | sequencing two past events |
| Future — *will* | predictions, decisions, promises |
| Future — *going to* | plans, evidence-based predictions |
| Mixed Tense Review | choose the correct tense in context (combines all learned tenses) |

---

## 3. Grammar Structures (new section, non-tense)

| Category | Contents |
|---|---|
| Articles | a / an / the / zero article |
| Adjective Order | size, age, colour, origin, purpose |
| Comparatives & Superlatives | -er/-est · more/most · irregular (good/bad/far) |
| Adverbs of Frequency | always → never, position in sentence |
| Countable & Uncountable | some/any · much/many · a lot of |
| Modal Verbs | can/could · must/have to · should · may/might |
| Conditionals | zero · first · second |
| Passive Voice | present · past |
| Question Formation | wh- questions · yes/no |
| Plurals | regular · irregular · tricky spellings |

---

## 4. Phrasal Verbs (new section)

| Category | Sample contents |
|---|---|
| Daily Routine | get up, wake up, put on, take off |
| Travel & Movement | set off, get on/off, check in, drop off, pick up |
| Social & Relationships | get on with, break up, make up, hang out |
| Work & Study | fill in, hand in, carry on, put off, take over |
| Home & Objects | turn on/off, throw away, tidy up, run out of |
| Communication | call back, hang up, speak up, bring up |

Could reuse the 3-phase lesson structure: learn the phrasal verb (image + Russian) → grammar (pick correct form/preposition) → sentence building.

---

## 5. Everyday English Phrases by Situation (new section)

Each category = useful phrases + related vocabulary, ideal for practical/adult-beginner learners.

| Category | Example phrases | Related vocabulary |
|---|---|---|
| At a Restaurant | "A table for two", "I'll have…", "Could we get the bill?" | menu, starter, waiter, tip |
| At the Airport | "I'd like to check in", "Where's the gate?" | boarding pass, security, departure |
| At a Hotel | "I have a reservation", "What time is check-out?" | reception, key card, en suite |
| Shopping | "How much is this?", "Do you have this in a medium?" | size, receipt, refund |
| Directions | "How do I get to…?", "Turn left at the lights" | roundabout, crossroads |
| At the Doctor | "I've got a sore throat", "It hurts here" | symptoms, prescription |
| On the Phone | "Can I speak to…?", "Hold on a moment" | voicemail, signal |
| Making Plans | "Are you free on Friday?", "Shall we…?" | invite, cancel, reschedule |

---

## 6. Skills & Fun Modes (new section)

| Category | Contents |
|---|---|
| Listening | hear the word spoken aloud → click the image (Web Speech API — free) |
| Idioms & Proverbs | common idioms with meanings in context |
| Memory Match | flip-card style match word ↔ image pairs |
| Seasonal | Halloween, Christmas themed vocabulary sets |
| Mixed Quiz | random questions pulled from all built sections, for a final challenge |

---

## Recommended improvements (for review)

### High priority
1. **Add a 3rd lesson per grammar tense** — directly serves the "3 replays without repetition" goal; currently only 1–2 lessons exist per tense.
2. **Expand thin vocabulary rounds** (Clothes, House, Transport, Weather each have only 1 round) — same repetition concern as above.
3. **Mixed Tense Review** — once 5–6 tenses exist, a combined review round tests whether students can *choose* the right tense, which is the actual hard skill (not just conjugate one tense in isolation).

### Medium priority
4. **Difficulty / age modes** — a "Kids" mode (simpler words, more playful copy) vs "Adult" mode (practical, everyday vocabulary) was part of the original brief but hasn't been built. Could be a simple toggle that filters/reorders content rather than a full parallel content set.
5. **Audio pronunciation** — browser's built-in `speechSynthesis` API is free and needs no assets; would help both the Learn Verbs phase and vocabulary. Worth prototyping on one lesson before rolling out everywhere.
6. **Real images instead of emoji** — emoji work well for concrete nouns (animals, food) but are weaker for abstract concepts and for place/movement prepositions ("under", "opposite") where a real photo/illustration makes the relationship obvious. Flagged in an earlier review — still open.

### Lower priority / polish
7. **Overall progress dashboard** — a "My Progress" screen aggregating best scores across all rounds/lessons (data already saved in localStorage per round — just needs a view).
8. **Streak/motivation elements** — daily streak counter, or a badge for completing a full tense (all lessons + phases).
9. **Mobile testing pass** — responsive CSS exists but hasn't been tested on an actual small screen; touch-target sizing for the sentence-builder word chips is worth double-checking.
10. **Accessibility pass** — keyboard navigation for option buttons, ARIA labels, color-contrast check (currently relies on color alone for correct/incorrect in a couple of spots).

---

## Notes on scope/credits

Given the credit-conscious approach so far, suggested next batch (highest value per unit effort):
1. Fill in the 3rd lesson for each existing tense (reuses existing engines, pure content work)
2. Expand the 4 thin vocabulary topics to 2+ rounds each
3. Then decide: new grammar tenses vs. new sections (Phrasal Verbs / Everyday Phrases) vs. platform features (audio, difficulty modes)
