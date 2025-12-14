# Implementation Guidelines

## Motion Design

- Transition duration: `300ms` standard across interactive elements.
- Easing: `ease-in-out` for page transitions and component interactions.
- Splash: `fade-in 300ms` → `pulse scale 1500ms` → `fade-out 300ms`.
- Loading: pulse animation bar for AI generation.

## Performance Considerations

- Persist onboarding data (`localStorage`) to avoid repeated prompts.
- Debounce search inputs where needed; current syllabus search filters on keystroke.
- Avoid heavy images; photo step stores blob URL and caps previews to 200×200 container.
- Prefer CSS animations to JS for smoothness (splash, pulse).

## Testing Scenarios

- First-time launch: Verify onboarding sequence and validation rules.
- Warm start: Ensure splash appears briefly and routes to `Entry`.
- Theme toggle: Verify light/dark classes applied (`html.dark`).
- Quick toggle: Confirm Teach/Study header actions route correctly and persist `lastMode`.
- Study Mode: Search filters topics; AI generation shows loading then output; handles error.
- Video Generation: Disabled state for Class 5–6 with tooltip/explanation text.

## QA Checklist

- Mobile-first layout: cards, inputs, grids render correctly at 360–414px widths.
- Accessibility: labels, `aria-*` attributes present; focusable controls; sufficient contrast.
- Navigation: No dead links; back/forward browser controls behave as expected.
- Persistence: `ob.*` keys and `onboardingComplete`/`lastMode` saved and read.

