# Git & GitHub Workshop — The First Commit
**Cynergy Coding Club · Dept. of CSE · RUAS** · Tue 22 Sep 2026 · Room A206

**Follow this one page from top to bottom.** Everything else in this repo is either the site you'll build (`index.html`, `style.css`, `sections/`) or extra reading in `docs/` for later. You don't need to open anything else today.

How to read this: grey boxes are commands. Type one line, press Enter, wait, then the next. Lines starting with `#` are notes, don't type them. `YOUR-USERNAME` means your GitHub username.

**Stuck?** Red sticky note on your laptop lid. A volunteer comes to you.

---

## STEP 0 — Setup (before 2:30)

### 0.1 GitHub account
Go to https://github.com/signup. Pick a username you'd put on a resume. Verify the email. Stay logged in.

### 0.2 Install Git
- **Windows:** https://git-scm.com/download/win → run it → click Next on everything → Finish.
- **Mac:** open Terminal (Cmd+Space, type Terminal), type `git --version`. If it offers to install tools, click Install.
- **Linux:** `sudo apt install git -y`

### 0.3 Install an editor
**Antigravity** (AI editor, what we use): https://antigravity.google/download → install → sign in with Google.
Slow download or won't install? Use **VS Code** instead: https://code.visualstudio.com. Identical for today.

### 0.4 Open a terminal and check
- Windows: Start menu → type **Git Bash** → open it.
- Mac: Cmd+Space → **Terminal**.
- Or inside Antigravity / VS Code: menu **View → Terminal**.
```bash
git --version
```
Any version number = good. `command not found` = close the terminal, open again, retry. Still nothing → red sticky.

### 0.5 Tell Git who you are (same email as GitHub!)
```bash
git config --global user.name "Your Name"
git config --global user.email "the-email-on-your-github@example.com"
git config --global init.defaultBranch main
git config --global pull.rebase false
```

### 0.6 Nothing else. Logging in happens by itself the first time you push (a browser window opens).

**No Git at all on your laptop?** Green **Code** button on this repo → **Codespaces** → **Create codespace on main**. A terminal opens in your browser. Every command below works there.

---

## STEP 1 — Your first repository (2:50)

**What's happening:** your folder → `git add` (choose files) → `git commit` (take a snapshot) → `git push` (send to GitHub).

### 1.1 Create a repo on GitHub
github.com → **+** (top right) → **New repository** → Name: `about-me` → Public → tick **Add a README file** → **Create repository**.

### 1.2 Copy it to your laptop
On your repo page: green **Code** button → copy the HTTPS URL. In the terminal:
```bash
cd ~/Desktop
git clone https://github.com/YOUR-USERNAME/about-me.git
cd about-me
```

### 1.3 Open the folder in your editor
Antigravity / VS Code → **File → Open Folder** → Desktop → `about-me`. Then **View → Terminal** so the terminal is inside the folder.

### 1.4 Add two files
In the left panel, hover over `ABOUT-ME` → **New File** icon → name it `index.html`. Again for `style.css`.
Fill them: open [`starter/index.html`](starter/index.html) in this repo → **Raw** → Ctrl+A, Ctrl+C → paste into your `index.html`. Same for [`starter/style.css`](starter/style.css).
Change every line marked `CHANGE THIS`. **Save** (Ctrl+S).
Double-click `index.html` on your Desktop → it opens in the browser. That's your page.

### 1.5 Look at what Git sees
```bash
git status
```
Red file names = Git sees them but isn't tracking them yet.

### 1.6 Stage, commit, push
```bash
git add .
git commit -m "Add about-me page"
git push
```
First push: a browser window asks you to log in to GitHub. Do it. **Refresh your repo on github.com. Your files are there.**

### 1.7 One more change
Edit one line in `index.html` (favourite language). Save. Then:
```bash
git diff
git add .
git commit -m "Update favourite language"
git push
git log --oneline
```
Two commits. Click **2 commits** on github.com to see them.

---

## STEP 2 — Branches (3:20)

**What's happening:** a branch is a parallel copy. You work there; `main` stays clean.

### 2.1 Create a branch
```bash
git switch -c feature/projects
```

### 2.2 Make a change on it
In `index.html`, paste this just above `</main>` and save:
```html
<h2>Projects</h2>
<ul>
  <li>A thing I built</li>
  <li>A thing I'm building</li>
</ul>
```

### 2.3 Commit on the branch
```bash
git add .
git commit -m "Add projects section"
```

### 2.4 Watch it vanish and come back
```bash
git switch main
```
Look at `index.html`. The projects section is **gone**.
```bash
git switch feature/projects
```
It's **back**. Two versions, side by side. Nothing was lost.

### 2.5 Push the branch
```bash
git push -u origin feature/projects
```
Refresh github.com. A yellow bar offers **Compare & pull request**. Don't click yet.

---

## STEP 3 — Pull requests with your partner (3:50)

**What's happening:** a pull request asks "bring my branch into main", with a place for someone to review first.

### 3.1 Add your partner to your repo
Your repo → **Settings → Collaborators → Add people** → their username.
Partner: click the 🔔 bell on github.com → **Accept invitation**.

### 3.2 Open your pull request
Yellow bar → **Compare & pull request** → title `Add projects section` → one line of description → **Reviewers** (right side): your partner → **Create pull request**.

### 3.3 Review your partner's pull request
Their repo → **Pull requests** → their PR → **Files changed** → hover a line → **+** → write a comment → **Review changes** → **Approve** → **Submit review**.

### 3.4 Merge yours
Your PR → **Merge pull request** → **Confirm merge** → **Delete branch**.

### 3.5 Update your laptop
```bash
git switch main
git pull
```
The projects section is on `main` now, on GitHub and on your laptop.

**The loop you just did:** branch → commit → push → PR → review → merge → pull. That's the job.

---

## STEP 4 — Team site (4:15)

Teams of 2. One site, two files each, nobody edits the other person's files.

### 4.1 Person A only
1. Open **this repo** → green **Use this template** → **Create a new repository** → name `team-<yourname>` → Public → **Create**.
2. **Settings → Collaborators → Add people** → Person B's username.
3. Green **Code** → copy URL → send it to Person B.
Person B: 🔔 bell on github.com → **Accept invitation**.

### 4.2 Who does what

| | First file | Then |
|---|---|---|
| **Person A** | `sections/navbar.js` on branch `feature/navbar` | `sections/events.js` on `feature/events` |
| **Person B** | `sections/contact.js` on branch `feature/contact` | `sections/footer.js` on `feature/footer` |

### 4.3 Both — clone the team repo
```bash
cd ~/Desktop
git clone PASTE-TEAM-URL-HERE
cd team-*
```
Open the folder in your editor (File → Open Folder → Desktop → `team-…`), then View → Terminal.

### 4.4 Person A — navbar
```bash
git switch -c feature/navbar
```
Open `sections/navbar.js`. Change the `CHANGE THIS` lines. Save. Double-click `index.html` to check.
```bash
git add sections/navbar.js
git commit -m "Add navbar"
git push -u origin feature/navbar
```

### 4.4 Person B — contact (at the same time)
```bash
git switch -c feature/contact
```
Open `sections/contact.js`. Change the `CHANGE THIS` lines. Save. Double-click `index.html` to check.
```bash
git add sections/contact.js
git commit -m "Add contact"
git push -u origin feature/contact
```

*Optional, if you have Antigravity:* agent panel → *"Edit ONLY sections/navbar.js (or your file). Don't touch other files, don't run git. Replace the placeholder HTML with a modern version of this section for a college events site."*

### 4.5 Both — pull request, review each other, merge
- **You:** github.com → yellow bar → **Compare & pull request** → **Create pull request**.
- **Your partner:** open your PR → **Files changed** → **Review changes** → **Approve** → **Submit review**.
- **You:** **Merge pull request** → **Confirm merge**.
Do it for both PRs.

### 4.6 Both — get each other's work
```bash
git switch main
git pull
```
Double-click `index.html`. Both sections are there. Neither of you touched the other's file.

### 4.7 Second file — same thing again
**Person A**
```bash
git switch -c feature/events
```
Edit `sections/events.js` → save → check.
```bash
git add sections/events.js
git commit -m "Add events"
git push -u origin feature/events
```
**Person B**
```bash
git switch -c feature/footer
```
Edit `sections/footer.js` → save → check.
```bash
git add sections/footer.js
git commit -m "Add footer"
git push -u origin feature/footer
```
Then 4.5 and 4.6 again. Four merged PRs = a finished site.

### 4.8 If you finish early
One of you: `git switch -c feature/style`, change the colours at the top of `style.css`, PR, partner approves, merge. Now it looks like one site.

---

## STEP 5 — Put it on the internet (4:40)

On your `about-me` repo: **Settings → Pages** → Source: **Deploy from a branch** → Branch `main`, folder `/ (root)` → **Save**.
Wait a minute, refresh. *Your site is live at* `https://YOUR-USERNAME.github.io/about-me/`. Open it. Send it to someone.
From now on, every `git push` updates the live site.

---

## STEP 6 — Take-home: your profile README (post the link in the group within 3 days)

A public repo named **exactly your username** shows its README on your profile.
1. github.com → **New repository** → Name: your username → Public → tick **Add a README** → **Create**. (GitHub says "You found a secret!")
2. Do it the way we learned:
```bash
cd ~/Desktop
git clone https://github.com/YOUR-USERNAME/YOUR-USERNAME.git
cd YOUR-USERNAME
git switch -c feature/profile
```
3. Edit `README.md`. Starter:
```markdown
# Hi, I'm Your Name 👋
B.Tech AI/ML @ RUAS · Cynergy Coding Club

- 🔭 Building: something
- 🌱 Learning: Git
- 📫 Reach me: you@example.com

![Stats](https://github-readme-stats.vercel.app/api?username=YOUR-USERNAME&show_icons=true&theme=tokyonight)
![Streak](https://streak-stats.demolab.com?user=YOUR-USERNAME&theme=tokyonight)
```
4. Commit, push, **open a PR, merge it yourself**. Check your profile page.

---

## When the terminal goes red

| You see | Do this |
|---|---|
| `Please tell me who you are` | The two `git config --global user.*` lines from 0.5 |
| `Support for password authentication was removed` | Never type your GitHub password. Let the browser window log you in |
| `src refspec main does not match any` | You haven't committed yet. `git add .` then `git commit -m "..."` |
| `rejected … (fetch first)` | `git pull` then `git push` |
| `You have divergent branches` | `git config --global pull.rebase false` then `git pull` |
| `fatal: not a git repository` | Wrong folder. `cd` into the repo |
| `403` / `Permission denied` on push | You didn't accept the collaborator invite (🔔 bell) |
| A screen full of `~` you can't escape | Vim opened. Type `:q!` then Enter |
| Pages shows 404 | File must be `index.html` at the top level of the repo |

---

## After today
- **GitHub Student Developer Pack** (free GitHub Pro, Copilot, more): https://education.github.com/pack — apply tonight, verification takes days.
- **GitHub Skills** (free guided practice): https://skills.github.com
- **Part 2, October:** a one-day hackathon on GitHub. Profile README posted = first pick of teams.
- Longer reference pages: [`docs/`](docs/)

**Registration & updates:** https://git-workshop-site.vercel.app/
