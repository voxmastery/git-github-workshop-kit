# Team project — copy your block (teams of 2)

## Person A, first
Use this template → name `team-<name>` → Settings → Collaborators → add Person B → Code → copy URL → send it.
Person B: 🔔 bell → Accept invitation.

## Both
```bash
cd ~/Desktop
git clone PASTE-TEAM-URL-HERE
cd team-*
```

## 👤 Person A — NAVBAR, then EVENTS
```bash
git switch -c feature/navbar
```
Edit `sections/navbar.js` (CHANGE THIS lines) → save.
```bash
git add sections/navbar.js
git commit -m "Add navbar"
git push -u origin feature/navbar
```
PR → partner approves → merge → then:
```bash
git switch main
git pull
git switch -c feature/events
```
Edit `sections/events.js` → save.
```bash
git add sections/events.js
git commit -m "Add events"
git push -u origin feature/events
```

## 👤 Person B — CONTACT, then FOOTER
```bash
git switch -c feature/contact
```
Edit `sections/contact.js` (CHANGE THIS lines) → save.
```bash
git add sections/contact.js
git commit -m "Add contact"
git push -u origin feature/contact
```
PR → partner approves → merge → then:
```bash
git switch main
git pull
git switch -c feature/footer
```
Edit `sections/footer.js` → save.
```bash
git add sections/footer.js
git commit -m "Add footer"
git push -u origin feature/footer
```

## Both, on github.com, for every PR
Yellow bar → **Compare & pull request** → **Create**. Partner: **Files changed → Review changes → Approve → Submit**. You: **Merge → Confirm**.

## Both, after each merge
```bash
git switch main
git pull
```
Double-click `index.html`.
