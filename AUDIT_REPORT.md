# 🔍 AIDL-HCSY Website — Codebase Audit Report

**Date:** 15 February 2026  
**Prepared By:** Automated Code Audit  
**Stack:** React 19 + Vite 6 + Vanilla CSS + React Router 7

---

## 📊 Project Overview

| Metric | Value |
|---|---|
| **Framework** | React 19 (Vite 6) |
| **Pages** | 8 (Home, AboutThapar, AboutPatiala, Authors, Venue, OrgCom, SupCom, TPC) |
| **Reusable Components** | 6 (Header, Footer, PageHero, Section, MemberCard, CountdownTimer, Floater, ScrollToTop, HeaderSlideshow) |
| **CSS Files** | 11 |
| **Data Files** | 3 (conferenceData.js, Committees.js, Tracks.js) |
| **Routing** | React Router v7 (BrowserRouter) |
| **Icons** | FontAwesome (solid + brands) |

---

## ✅ What's Working Well

### 1. Architecture & Structure
- **Clean component hierarchy**: Reusable `Section`, `PageHero`, and `MemberCard` components avoid code duplication.
- **Centralized data**: `conferenceData.js` is an excellent single source of truth for conference info, dates, themes, sponsors, and keynotes.
- **Logical folder structure**: Components, Pages, info, and data directories are well-separated.

### 2. Design System
- **CSS Variables at `:root`** in `App.css` with a well-organized color palette (primary/accent/bg/text/border/shadow).
- **Consistent button styles** via global `button` and `.btn` classes.
- **Typography system** with Figtree (headings) and Inter (body).
- **Responsive breakpoints** are applied consistently across most CSS files.

### 3. UX & Interactivity
- Smart transparent-to-solid navbar transition on scroll (only on Home).
- Mobile hamburger menu with slide-in animation.
- Dropdown menus with smooth opacity transitions.
- `ScrollToTop` component for proper navigation behavior.
- Countdown timer in footer.
- Image carousel on Venue page.

---

## 🐛 Bugs & Issues

### Critical

| # | Issue | File(s) | Details |
|---|---|---|---|
| **B1** | **Year inconsistency — "2026" still appears** | `Authors.jsx:25, Authors.jsx:37` | `"Welcome to the Author's Area of AIDL-HCSY 2026"` and `"AIDL-HCSY 2026"` in Call for Papers section. The rest of the site uses **2027**. |
| **B2** | **Missing images — `thapar1.jpg`, `thapar2.jpg`, `patiala1.jpg`, `patiala2.jpg`** | `AboutThapar.jsx`, `AboutPatiala.jsx`, `Venue.jsx` | These files reference `/thapar1.jpg`, `/thapar2.jpg`, `/patiala1.jpg`, `/patiala2.jpg` but they **do not exist** in the `/public` directory. Only `TietTower.jpeg`, `patiala.jpeg`, and `ThaparVector.png` exist. This will result in broken images. |
| **B3** | **Unused dependency: `react-leaflet`** | `package.json:20` | `react-leaflet` v5.0.0 is still in dependencies but is **no longer imported anywhere** (replaced with Google Maps iframe on the Venue page). Adds unnecessary bundle size. |
| **B4** | **Registration link is not functional** | `Header.jsx:65` | `<li>Registration</li>` has no `<Link>` or `<a>` tag — it's just plain text. There is no Registration page/route. |

### Moderate

| # | Issue | File(s) | Details |
|---|---|---|---|
| **B5** | **`Section` component ignores `id` prop** | `Section.jsx:14` | The component receives `id` but doesn't pass it to the DOM element. Used in `AboutThapar.jsx` with `id="overview"` and `id="mission"` — these IDs won't appear in the HTML, breaking any anchor links. |
| **B6** | **`Section` component ignores `variant="full"`** | `Section.jsx:4-11` | `AboutThapar.jsx` passes `variant="full"` to Section, but no `full` variant is handled in the component code. Only `block` and `committee-grid` are handled. |
| **B7** | **Keynote speaker data inconsistency** | `conferenceData.js:125-149` | All 3 keynote speakers have `sessionDate: "28th February 2026"` — this is in the past and uses the old year (2026). |
| **B8** | **`London.png` file name misleading** | `Venue.jsx:82` | The world map image is named `London.png` but shows Patiala, India. Confusing for maintainability. |
| **B9** | **Footer social links are placeholder** | `Footer.jsx:19-26` | `mailto:contact@example.com`, `https://instagram.com`, and `https://facebook.com` are placeholder URIs, not actual conference links. |
| **B10** | **Empty `Keynotes` directory** | `src/Pages/Keynotes/` | This directory is empty — likely a leftover or unfinished feature. |

---

## ⚠️ Code Quality Issues

### 1. Inconsistent Data Usage
| Issue | Details |
|---|---|
| **Hardcoded content vs. data files** | `Authors.jsx` hardcodes conference themes, guidelines, evaluation criteria, and fee tables directly in JSX — even though this data already exists in `conferenceData.js` (`conferenceThemes`, `submissionGuidelines`, `evaluationCriteria`, `registrationFees`). This creates duplication and inconsistency risk. |
| **`Tracks.js` vs `conferenceThemes`** | `Tracks.js` and `conferenceData.js → conferenceThemes` contain overlapping but different data about conference tracks/themes. Consider consolidating. |
| **Unused data exports** | `submissionGuidelines`, `evaluationCriteria`, and `registrationFees` from `conferenceData.js` are not imported/used by any component. |

### 2. CSS Issues
| Issue | Details |
|---|---|
| **Legacy alias variables** | `App.css:48-53` has `--primary2`, `--lbg`, `--lbg2`, `--sec` with a `TODO: Remove if unused` comment. These are also never used in the codebase. |
| **`--accent-blue` mapped to gold** | `App.css:19-20` — `--accent-blue` is aliased to `--accent-gold`. This is semantically confusing. Used in `Floater.css:40`. |
| **Typo: `seperator`** | `CountdownTimer.jsx:44,51,58` and `Footer.css:50` — should be `separator`. |
| **`react-parallax` is in dependencies but unused** | `package.json:21` — `react-parallax` v3.5.2 is installed but not imported anywhere. |
| **`About.css` `imageWrapper` is hidden on tablet** | `About.css` sets `display: none` on `.imageWrapper` for screens ≤ 1024px. This completely hides the mission image instead of reflowing. |

### 3. Component Quality
| Issue | Details |
|---|---|
| **No error boundary** | No React Error Boundary component exists. A crash in any component will unmount the entire site. |
| **No 404 page** | No catch-all route for undefined paths. Users visiting wrong URLs see a blank page. |
| **`CountdownTimer` has stale closure** | `useEffect` has empty deps `[]` but references `calculateTimeLeft` which closes over `targetDate`. Since `targetDate` never changes this works, but ESLint would flag it. |
| **No PropTypes / TypeScript** | Despite having `@types/react` as a devDependency, no TypeScript is used. No PropTypes validation exists on any component. |
| **Inconsistent export styles** | Some components use `export default function X()` while others use `const X = () => {}; export default X;`. |

---

## 🔒 Security Observations

| Area | Status | Details |
|---|---|---|
| **External Images** | ⚠️ Warning | Keynote speaker images are loaded from external URLs (`about.uq.edu.au`, `rgstatic.net`, `declercq.gatech.edu`). If these go down, images break. Consider hosting locally. |
| **Google Maps iframe** | ✅ OK | Uses `referrerPolicy="no-referrer-when-downgrade"` and `loading="lazy"`. |
| **`rel="noreferrer"`** | ✅ OK | External links properly use `rel="noreferrer"` or `rel="noopener noreferrer"`. |
| **No sensitive data exposed** | ✅ OK | No API keys, secrets, or credentials in the codebase. |

---

## 🌐 SEO Analysis

| Factor | Status | Details |
|---|---|---|
| **Title tag** | ✅ Good | `"AIDL-HCSY 2027 | International Conference on AI & Deep Learning | Thapar Institute"` |
| **Meta description** | ✅ Good | Comprehensive, keyword-rich |
| **Keywords** | ✅ Good | Relevant and comprehensive |
| **Canonical URL** | ✅ Present | `https://aidlhcsy-thapar.edu/` |
| **Open Graph** | ✅ Complete | Title, description, type, url, site_name, locale |
| **Twitter Card** | ✅ Present | Summary large image with title and description |
| **Robots** | ✅ Set | `index, follow` |
| **og:image / twitter:image** | ❌ Missing | No social sharing preview image is specified |
| **Structured Data (JSON-LD)** | ❌ Missing | No schema.org markup for Event, Organization, or Conference |
| **Per-page titles** | ❌ Missing | SPA only has one `<title>` tag. Consider using `react-helmet` for per-page SEO. |
| **Alt text** | ⚠️ Partial | Some images have good alt text, but `London.png` has misleading alt ("World Map Location") |
| **Semantic HTML** | ✅ Good | Proper use of `<main>`, `<article>`, `<aside>`, `<nav>`, `<section>`, `<header>`, `<footer>` |
| **ARIA labels** | ✅ Good | Hamburger menu, social links, and scroll indicator have aria-labels |
| **Heading hierarchy** | ⚠️ | Some pages use `<h3>` in Section component when content is the primary heading after `<h1>` hero. |

---

## ⚡ Performance Observations

| Factor | Status | Details |
|---|---|---|
| **Image sizes** | ❌ Critical | `header/3.jpg` is **15.6 MB**! Other header images are 2-3 MB each. `TietTower.jpeg` is 3.2 MB. These are extremely large and will severely impact load times. **Compress and convert to WebP.** |
| **Font loading** | ⚠️ | Three Google Font families loaded (Figtree, Inter, Lato) with many weights. Consider loading only the weights actually used. |
| **Code splitting** | ❌ Missing | No lazy loading on routes. All pages are bundled together. Use `React.lazy()` and `Suspense` for route-based code splitting. |
| **Unused packages** | ⚠️ | `react-leaflet` and `react-parallax` are installed but unused — inflating `node_modules` and potentially the bundle. |
| **Image lazy loading** | ⚠️ Partial | Google Maps iframe has `loading="lazy"` but page images (sponsors, carousel, etc.) do not. |
| **Memoization** | ✅ Good | `Home.jsx` uses `useMemo` for theme items and sponsor logos. |

---

## ♿ Accessibility

| Factor | Status | Details |
|---|---|---|
| **Keyboard navigation** | ⚠️ | Dropdown menus only work on `:hover`, not on keyboard focus or click. Inaccessible for keyboard users. |
| **Focus indicators** | ❌ Missing | No visible focus styles defined. The global `button:active` removes transform but no focus-visible ring. |
| **Skip navigation link** | ❌ Missing | No "Skip to main content" link for screen readers. |
| **Color contrast** | ⚠️ | `--text-muted: #718096` on white background may not meet WCAG AA for small text (contrast ratio ~4.2:1). |
| **Touch targets** | ✅ Good | Footer social icons have `min-width: 44px; min-height: 44px`. |
| **ARIA regions** | ✅ Good | Main content uses landmarks (`<main>`, `<nav>`, `<aside>`, `<footer>`). |

---

## 📋 Recommendations (Prioritized)

### 🔴 High Priority (Fix Now)
1. **Fix year inconsistency**: Change all "2026" references in `Authors.jsx` to "2027".
2. **Add missing images**: Add `thapar1.jpg`, `thapar2.jpg`, `patiala1.jpg`, `patiala2.jpg` to `/public`, or update file references to existing images.
3. **Compress header images**: Especially `header/3.jpg` (15.6 MB!) — compress to <500 KB and consider WebP format.
4. **Fix `Section` component**: Pass through `id` and handle `variant="full"`.
5. **Remove unused npm packages**: Uninstall `react-leaflet` and `react-parallax`.

### 🟡 Medium Priority (Next Sprint)
6. **Use centralized data in Authors page**: Replace hardcoded content with imports from `conferenceData.js`.
7. **Add a 404 page**: Create a catch-all route with proper messaging.
8. **Make Registration link functional**: Either link to a page, external URL, or disable with a tooltip.
9. **Add per-page `<title>` tags**: Use `react-helmet-async` for dynamic SEO.
10. **Add `og:image`**: Create a social sharing preview image and add to meta tags.
11. **Fix keyboard accessibility on dropdowns**: Add `onClick` / `onKeyDown` handlers.
12. **Update keynote dates**: Fix the "28th February 2026" date on all keynotes.

### 🟢 Low Priority (Polish)
13. **Code consistency**: Standardize export style (prefer named function exports).
14. **Remove legacy CSS variables**: Delete `--primary2`, `--lbg`, `--lbg2`, `--sec`, `--accent-blue`.
15. **Fix typo**: Rename `seperator` → `separator` in CountdownTimer and Footer.css.
16. **Add React Error Boundary**: Wrap routes in an error boundary component.
17. **Lazy load routes**: Use `React.lazy()` for code splitting.
18. **Rename `London.png`**: Change to `world-map.png` or `india-location.png`.
19. **Host keynote images locally**: Download and serve from `/public` to avoid external dependency.
20. **Add JSON-LD structured data**: Add Event schema markup for better search engine understanding.
21. **Update social media links**: Replace placeholder URLs in Footer.
22. **Clean up empty directories**: Remove empty `Keynotes` folder or implement the feature.

---

## 📁 File Inventory

```
aidlhcsy-thapar-main/
├── index.html                          ✅ SEO optimized
├── package.json                        ⚠️ Unused deps
├── public/
│   ├── header/  (1.jpg – 4.jpg)        ⚠️ Very large files
│   ├── tiet.png, tslas.png, IEEE.webp  ✅ Logo files
│   ├── London.png                      ⚠️ Misleading name
│   ├── patiala.jpeg                    ✅ OK
│   ├── TietTower.jpeg                  ⚠️ 3.2 MB, unused
│   ├── dummy.jpg                       ✅ Fallback image
│   ├── *.jpeg (member photos)          ✅ OK
│   └── vite.svg                        ✅ Favicon
└── src/
    ├── App.jsx                         ✅ Clean routing
    ├── App.css                         ⚠️ Legacy vars
    ├── main.jsx                        ✅ Standard entry
    ├── Components/
    │   ├── Common/
    │   │   ├── Section.jsx             ⚠️ Missing id/variant support
    │   │   ├── PageHero.jsx            ✅ Clean component
    │   │   ├── MemberCard.jsx          ✅ Dual-variant support
    │   │   └── ScrollToTop.jsx         ✅ Router integration
    │   ├── Header/
    │   │   ├── Header.jsx              ⚠️ Registration not linked
    │   │   └── HeaderSlideShow.jsx     ✅ Auto-carousel
    │   └── Footer/
    │       ├── Footer.jsx              ⚠️ Placeholder links
    │       └── CountdownTimer.jsx      ✅ Working timer
    ├── Pages/
    │   ├── Home.jsx                    ✅ Well-structured
    │   ├── AboutThapar.jsx             ✅ Refactored with components
    │   ├── AboutPatiala.jsx            ⚠️ References missing images
    │   ├── Floater.jsx                 ✅ Sticky sidebar
    │   ├── Authors/Authors.jsx         ⚠️ Hardcoded data, wrong year
    │   ├── Venue/Venue.jsx             ✅ Google Maps embedded
    │   ├── OrgCom/OrgCom.jsx           ✅ Clean, search removed
    │   ├── OrgCom/SupCom.jsx           ✅ Clean, search removed
    │   ├── OrgCom/TPC.jsx              ✅ Track display working
    │   └── Keynotes/                   ⚠️ Empty directory
    ├── data/conferenceData.js          ⚠️ Partially used
    └── info/
        ├── Committees.js               ✅ Full data
        └── Tracks.js                   ✅ Track data
```

---

## Summary Score

| Category | Score | Notes |
|---|---|---|
| **Architecture** | 8/10 | Clean component structure, good data centralization |
| **Code Quality** | 6/10 | Inconsistencies, unused code, missing error handling |
| **Visual Design** | 8/10 | Modern, premium UI with CSS variables system |
| **SEO** | 7/10 | Good basics, missing per-page and structured data |
| **Performance** | 4/10 | Oversized images are the biggest issue |
| **Accessibility** | 5/10 | Good semantic HTML, but keyboard and focus support lacking |
| **Security** | 9/10 | No exposed secrets, proper link attributes |
| **Overall** | **6.7/10** | Solid foundation with clear areas for improvement |
