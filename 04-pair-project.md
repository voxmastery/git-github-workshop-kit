# 4 · Pair project — build one site together

**Goal:** two people, one repo, four sections, zero fights.

Your pair has a starter repo (`cynergy-ruas/team-XX`). Both of you are already collaborators. It's a small College Events site with four section files:

| File | Who |
|------|-----|
| `sections/navbar.js` | Partner A |
| `sections/events.js` | Partner A |
| `sections/contact.js` | Partner B |
| `sections/footer.js` | Partner B |

Each of you **only touches your own files**. That's how teams avoid stepping on each other.

## 4.1 Both: clone the team repo
```bash
cd ~/Desktop
git clone https://github.com/cynergy-ruas/team-XX.git
cd team-XX
code .
```
Open `index.html` in a browser. Four grey placeholder boxes.

## 4.2 Both: one branch per section
```bash
git switch -c feature/navbar        # A
git switch -c feature/contact       # B
```

## 4.3 Build your section
Open your file. Replace the placeholder HTML inside the backticks with real content (a nav with 3 links, a list of 3 events, a contact line, a footer). Refresh the browser to check.

## 4.4 Commit, push, PR
```bash
git add .
git commit -m "Add navbar section"
git push -u origin feature/navbar
```
Open the PR on github.com. Reviewer: your partner.

## 4.5 Review each other, merge both
Approve, merge, delete branch. Then both:
```bash
git switch main
git pull
```
Refresh `index.html`. **Both sections are there.** Neither of you touched the other's work.

## 4.6 Second file
Repeat 4.2–4.5 for your second section on a new branch (`feature/events`, `feature/footer`). Aim for four merged PRs by 4:36.

## Stretch (if you finish early)
Both of you change the same line in `conflict-demo.txt` on different branches. Merge one PR, then open the second and see what a **merge conflict** looks like. We'll resolve it together in Part 2. Hint: `git pull origin main` on your branch, open the file, look for `<<<<<<<`.
