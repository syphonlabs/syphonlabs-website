# Google Analytics Tracking Implementation

## Overview
This document outlines all the custom Google Analytics events implemented across the Syphon Labs website to track user interest in Draft and Recruiter products, as well as demo engagement.

## Event Categories

### 1. CTA (Call-to-Action) Events
Track when users click on important buttons and links.

#### Landing Page
- **Event**: `click`
- **Category**: `CTA`
- **Action**: `Try Syphon Draft`
- **Value**: `1`

#### Draft Page
- **Event**: `click`
- **Category**: `Draft CTA`
- **Actions**: 
  - `Try Draft for Free`
  - `GitHub Repository`
- **Value**: `1`

#### Recruiter Page
- **Event**: `click`
- **Category**: `Recruiter CTA`
- **Actions**: 
  - `Starter — Automate the Busywork - Contact Sales`
  - `Professional — Hire Smarter, Not Just Faster - Contact Sales`
  - `Enterprise — Build a World-Class Talent Machine - Contact Sales`
- **Value**: `1`

### 2. Demo Engagement Events
Track user interaction with demo sections and components.

#### Draft Demo
- **Event**: `engagement`
- **Category**: `Draft Demo`
- **Actions**:
  - `Demo Section Viewed` (on mouse enter)
  - `Demo Loaded` (when demo finishes loading)
  - `Open Demo in New Tab` (when user opens demo in new tab)
- **Value**: `1`

#### Recruiter Demo
- **Event**: `click`
- **Category**: `Recruiter Demo`
- **Actions**:
  - `Pause Demo` / `Play Demo` (toggle demo playback)
  - `Resume Analysis - [Candidate Name]` (when user clicks on a resume)
- **Value**: `1`

### 3. Scroll Depth Tracking
Track how much of demo sections users are viewing.

#### Draft Demo Section
- **Event**: `engagement`
- **Category**: `Scroll Depth`
- **Actions**:
  - `draft-demo-section - 25%`
  - `draft-demo-section - 50%`
  - `draft-demo-section - 75%`
  - `draft-demo-section - 100%`
- **Value**: `threshold percentage`

### 4. Time Spent Tracking
Track how long users spend on demo sections.

#### Draft Demo
- **Event**: `engagement`
- **Category**: `Time Spent`
- **Actions**:
  - `Draft Demo - 30s`
  - `Draft Demo - 60s`
  - `Draft Demo - 120s`
  - `Draft Demo - 300s`
- **Value**: `time in seconds`

## Implementation Details

### Files Modified
1. `app/layout.tsx` - Added Google Analytics integration
2. `hooks/use-analytics.ts` - Custom analytics hook
3. `hooks/use-scroll-tracking.ts` - Scroll depth tracking
4. `hooks/use-time-tracking.ts` - Time spent tracking
5. `app/page.tsx` - Landing page CTA tracking
6. `app/draft/page.tsx` - Draft page tracking
7. `app/recruiter/page.tsx` - Recruiter page tracking
8. `components/draft-demo-embed.tsx` - Demo embed tracking
9. `components/recruiter/recruiter-pricing.tsx` - Pricing CTA tracking
10. `components/recruiter/resume-analysis-showcase.tsx` - Demo interaction tracking

### Environment Variables
- `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-HNJK6DFVFZ`

## Google Analytics Reports

### Key Metrics to Monitor

#### Product Interest
- **Draft Interest**: Track CTA clicks on Draft-related buttons
- **Recruiter Interest**: Track CTA clicks on Recruiter-related buttons
- **Demo Engagement**: Track demo section views and interactions

#### User Engagement
- **Scroll Depth**: See how much of demo sections users view
- **Time Spent**: Understand how long users engage with demos
- **Interaction Rate**: Track clicks and interactions within demos

#### Conversion Funnel
1. **Landing Page CTA** → **Draft Page Visit**
2. **Draft Page CTA** → **Demo Interaction**
3. **Demo Engagement** → **Pricing Interest**

### Custom Reports to Create
1. **Product Interest Comparison**: Compare Draft vs Recruiter engagement
2. **Demo Engagement Funnel**: Track user progression through demo sections
3. **Time-based Engagement**: Analyze how engagement varies by time spent
4. **Scroll Depth Analysis**: Understand which parts of demos get most attention

## Testing
To verify tracking is working:
1. Open Google Analytics Real-Time reports
2. Visit your website and interact with elements
3. Check that events appear in Real-Time → Events
4. Verify event parameters are correct

## Future Enhancements
- Add tracking for newsletter signups
- Track form submissions (contact forms)
- Add e-commerce tracking for pricing plans
- Implement user journey tracking across multiple sessions
