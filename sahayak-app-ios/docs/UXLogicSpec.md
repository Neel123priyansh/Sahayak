# UX Logic Specification

## Component Reuse Matrix

- Cards: `surface-card` + `ios-shadow` reused across onboarding, entry, study.
- Class Cards: unified style used in OnboardingClass and StudyMode class picker.
- Header Actions: theme toggle and Teach/Study quick toggle persist selections.
- Inputs: rounded `input` and `select` fields with consistent borders and backgrounds.

## Edge Case Handling

- Basic Details: Name ≥ 3 chars; Teacher ID numeric; Continue disabled until valid.
- Photo: Continue always enabled; default avatar if no file chosen.
- Language: Minimum 3 languages; preselect English/Hindi; max 5 enforced.
- Class: Single selection required; Confirm disabled until chosen.
- Study Mode: Class picker shown until a class is stored; search filters topics live.

## Loading and Error States

- AI generation: Shows button loading state and a pulse progress bar for ~3.5s.
- Error: Displays a message if generation fails; user can retry.

## Localization Requirements

- Language selections saved to `localStorage` (`ob.langs`) for future content personalization.
- UI labels prepared for translation by avoiding hard-coded concatenations and keeping short phrases.

