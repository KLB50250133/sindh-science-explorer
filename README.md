# Sindh Science Explorer — Starter Project

A beginner-friendly, offline-first Progressive Web App (PWA) for science quizzes for Classes 6–8, with English/Sindhi interface and rule-based revision suggestions.

## Current features
- Class 6, 7, 8 quiz sets (5 sample questions per class)
- English and Sindhi text for the interface and sample questions
- Immediate scoring and explanations
- Local progress saved with `localStorage`
- Rule-based topic recommendations based on mistakes
- Service worker cache for offline use
- PWA manifest and app icons

## AI transparency
The revision recommendations in this starter version are rule-based personalization, not a trained AI model. Quiz scoring is ordinary program logic. The app does not call an AI API and does not need an internet connection once cached. This is intentionally reliable for an offline demonstration.

## Important educational note
The sample questions are general science practice questions and should be checked against the exact provincial textbook/curriculum before claiming curriculum alignment. Have a fluent Sindhi speaker review translations before competition submission.

## Test locally
A PWA service worker requires HTTPS or localhost. Opening `index.html` directly as a `file://` URL will not enable offline caching. Use a static host such as GitHub Pages, Cloudflare Pages, or Netlify.

## Free hosting on GitHub Pages
1. Create/sign in to GitHub.
2. Create a public repository named `sindh-science-explorer`.
3. Upload all project files and folders from this directory to the repository root.
4. Open repository **Settings → Pages**.
5. Under build/deployment, choose **Deploy from a branch**.
6. Select `main` and `/ (root)`, then Save.
7. Wait for the published URL shown in Pages settings. It will resemble `https://YOUR-USERNAME.github.io/sindh-science-explorer/`.
8. Open the HTTPS URL on your Android phone, use the app once while online, then test offline.
9. In Chrome, use the menu → **Add to Home screen** or **Install app** if available.

## Phone-only upload tip
On GitHub mobile web, use **Add file → Upload files** where available. If uploading many files on a phone is awkward, create files in a mobile code editor or use GitHub's web editor. Keep the filenames exactly as supplied. Avoid adding the ZIP itself as the only repository file: the app needs the individual files at the repository root.

## Offline test checklist
- Load the hosted app while online and wait a few seconds.
- Open each class quiz and finish it.
- Open the revision plan and verify weak topics appear.
- Close the tab, enable airplane mode, then reopen the app from the Home screen or browser.
- Confirm the app shell and quizzes still load.
- Confirm scores remain on the same browser/device.
- If updates don't appear after changing code, close the app and reload online; the service worker cache version can be incremented in `sw.js` (`sse-cache-v1`) after a release.

## Privacy and limitations
Progress is stored only in this browser/device using `localStorage`; it is not uploaded to a server. Clearing browser data can erase it. The app has no student accounts or cloud leaderboard yet. The app is not a native APK; it is a PWA that can be installed from a browser on supported Android devices.
