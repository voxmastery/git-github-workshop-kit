# Team project — copy your block

Find your section below. Copy the lines one at a time. The only thing you change is the team URL.

---

## Team leader (one person, first)
1. Open this repo → green **Use this template** → **Create a new repository** → name it `team-<name>` → **Create**
2. **Settings → Collaborators → Add people** → each teammate's GitHub username
3. Green **Code** button → copy the URL → paste it in your team's chat

Teammates: click the 🔔 bell on github.com → **Accept invitation**.

---

## 👤 Person 1 — NAVBAR
```bash
cd ~/Desktop
git clone PASTE-TEAM-URL-HERE
cd team-*
git switch -c feature/navbar
```
Open `sections/navbar.js` → change the `CHANGE THIS` lines → save.
```bash
git add sections/navbar.js
git commit -m "Add navbar"
git push -u origin feature/navbar
```

## 👤 Person 2 — EVENTS
```bash
cd ~/Desktop
git clone PASTE-TEAM-URL-HERE
cd team-*
git switch -c feature/events
```
Open `sections/events.js` → change the `CHANGE THIS` lines → save.
```bash
git add sections/events.js
git commit -m "Add events"
git push -u origin feature/events
```

## 👤 Person 3 — CONTACT
```bash
cd ~/Desktop
git clone PASTE-TEAM-URL-HERE
cd team-*
git switch -c feature/contact
```
Open `sections/contact.js` → change the `CHANGE THIS` lines → save.
```bash
git add sections/contact.js
git commit -m "Add contact"
git push -u origin feature/contact
```

## 👤 Person 4 — FOOTER
```bash
cd ~/Desktop
git clone PASTE-TEAM-URL-HERE
cd team-*
git switch -c feature/footer
```
Open `sections/footer.js` → change the `CHANGE THIS` lines → save.
```bash
git add sections/footer.js
git commit -m "Add footer"
git push -u origin feature/footer
```

**Team of 2?** Person 1 does NAVBAR then EVENTS. Person 2 does CONTACT then FOOTER. Before your second one, run the "after merge" lines below, then start from `git switch -c`.

---

## Everyone — on github.com
1. Your repo shows a yellow bar → **Compare & pull request** → **Create pull request**
2. Open a teammate's pull request → **Files changed** → **Review changes** → **Approve** → **Submit review**
3. Your own PR, once approved → **Merge pull request** → **Confirm merge**

## Everyone — after each merge
```bash
git switch main
git pull
```
Double-click `index.html`. The whole team's work is in it.

---

## Red text?
```bash
git status
```
Read the top line. Then raise the red sticky note.
