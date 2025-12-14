# Navigation Flow Documentation

## User Journey Map

- `Launch` → `Splash` (2500ms overlay)
- If `onboardingComplete !== true` → `Onboarding` (Basic → Photo → Language → Class)
- Else → `Entry` (Teach | Study; persists `lastMode`)
- Teach → existing Home/Dashboard (`/`)
- Study → `Study Mode` (`/study`) with class picker, syllabus, AI output

## State Transition Diagram

```
Start
  └── Splash [2.5s]
       ├── OnboardingComplete? ── yes ──► Entry
       │                               ├── Teach ─► Home (/)
       │                               └── Study ─► Study (/study)
       └── no ─► Onboarding
                 ├── Basic (/onboarding/basic)
                 ├── Photo (/onboarding/photo)
                 ├── Language (/onboarding/language)
                 └── Class (/onboarding/class) ─► set onboardingComplete=true ─► Entry
```

## Conditional Logic

- On mount, if `onboardingComplete` is not `true`, navigate to `/onboarding/basic`.
- After class confirmation, set `onboardingComplete=true` and go to `/entry`.
- At `Entry`, choosing Teach navigates to `/`, choosing Study navigates to `/study` and persists `lastMode`.

