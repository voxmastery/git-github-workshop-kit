# 4 · Pair project — build one site together

**Goal:** two people, one repo, four sections, zero fights.

**Teams of 2–4.** Sit together. At least two laptops per team; if you don't have one, you pair up with someone who does and drive for half the time.

## 4.0 One person makes the team repo (2 minutes)
1. Open https://github.com/voxmastery/git-workshop-team-template
2. Click the green **Use this template → Create a new repository**
3. Name it `team-<yourteamname>`, Public, **Create repository**
4. **Settings → Collaborators → Add people** → every teammate's GitHub username. Teammates: accept the invite from the 🔔 bell.

It's a small College Events site with four section files:

| File | Team of 4 | Team of 2 |
|------|-----------|-----------|
| `sections/navbar.js` | Member 1 | A |
| `sections/events.js` | Member 2 | A |
| `sections/contact.js` | Member 3 | B |
| `sections/footer.js` | Member 4 | B |

Each of you **only touches your own file(s)**. That's how teams avoid stepping on each other.

## 4.1 Everyone: clone the team repo
```bash
cd ~/Desktop
git clone <your-team-repo-url>
cd team-<yourteamname>
```
Open the folder in Antigravity (File → Open Folder). Open `index.html` in a browser. Four grey placeholder boxes.

## 4.2 Everyone: one branch per section
```bash
git switch -c feature/navbar     # whoever owns navbar
git switch -c feature/events     # whoever owns events
git switch -c feature/contact
git switch -c feature/footer
```

## 4.3 Build your section with the AI agent
Open the Antigravity agent panel and paste this, changing the file name and the section:

> You are editing ONLY the file `sections/navbar.js` in this repo. Do not touch any other file, and do not run any git commands. The file sets `document.getElementById("navbar").innerHTML` to a template string. Replace the placeholder inside the backticks with a clean, modern **navbar** for a college events website called "RUAS Campus Events": a logo text on the left, links to Events, Contact and Register on the right, and a subtle bottom border. Use inline `<style>` inside the string for anything beyond what `style.css` gives you. Keep it under 40 lines. Show me the final file.

Swap the bold part for your section:
- **events**: "a list of 3 upcoming campus events as cards, each with a title, date, one-line description and a 'Register' button"
- **contact**: "a contact section with the club name, an email link, an Instagram link and a one-line invitation to join"
- **footer**: "a footer with the club name, the year, and a small line that says 'built with Git & GitHub' "

Refresh the browser to check. If the agent touched another file, tell it to undo that.

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

## 4.6 Teams of 2: second file
Repeat 4.2–4.5 for your second section on a new branch. Aim for four merged PRs by 4:36.

## 4.7 Make it yours (if time)
One person, on a new branch, pastes into the agent:
> Edit ONLY `style.css`. Give the whole site a cohesive look: one accent colour, a readable font stack, consistent spacing between sections, and a light hover effect on links and buttons. Don't touch any other file, don't run git.

PR, review, merge. Now the whole team's work looks like one site.

## Stretch (if you finish early)
Both of you change the same line in `conflict-demo.txt` on different branches. Merge one PR, then open the second and see what a **merge conflict** looks like. We'll resolve it together in Part 2. Hint: `git pull origin main` on your branch, open the file, look for `<<<<<<<`.
