# 1 · Your first repository

**Goal:** a repo on your GitHub profile with two real commits and a page inside it.

## 1.1 The idea, in one picture
```
your folder  --git add-->  staging area  --git commit-->  history (on your laptop)  --git push-->  GitHub
```
- `add` chooses what goes in the next snapshot
- `commit` takes the snapshot with a message
- `push` sends your snapshots to GitHub

## 1.2 Create the repo on GitHub
1. github.com → **+** (top right) → **New repository**
2. Name: `about-me`
3. Public
4. Tick **Add a README file**
5. **Create repository**

## 1.3 Clone it to your laptop
Click the green **Code** button → copy the **HTTPS** URL. Then, in your terminal:
```bash
cd ~/Desktop
git clone https://github.com/YOUR-USERNAME/about-me.git
cd about-me
```
(Replace `YOUR-USERNAME`. Tab-completion works on the folder name.)

## 1.4 Open it in VS Code
```bash
code .
```
If that says `command not found` (common on Mac): open VS Code yourself → **File → Open Folder…** → pick the `about-me` folder on your Desktop. Same result.

Then open VS Code's own terminal: **View → Terminal** (or `` Ctrl+` ``). It's already inside the right folder. Use that for every command from here on.

## 1.5 Add the page
In VS Code's left panel, hover over `ABOUT-ME` → click the **New File** icon → name it `index.html`. Repeat for `style.css`.

Fill them with the starter content:
- Open [`starter/index.html`](starter/index.html) in this repo → click **Raw** (top right) → Ctrl+A, Ctrl+C → paste into your `index.html`.
- Same for [`starter/style.css`](starter/style.css).

Change the name and the three interests to yours. **Save** (Ctrl+S). Files with a white dot on the tab are not saved yet.

Open `index.html` in your browser (double-click it) to see it.

## 1.6 See what Git sees
```bash
git status
```
Both files show in red: *untracked*. Git knows they exist but isn't tracking them yet.

## 1.7 Stage, commit, push
```bash
git add .
git status
```
Now they're green: *staged*. Take the snapshot:
```bash
git commit -m "Add about-me page"
```
Send it to GitHub:
```bash
git push
```
First time: a browser window opens asking you to log in. Do it. **Refresh your repo on github.com. Your files are there.**

## 1.8 One more commit
Change one line in `index.html` (your favourite language, say). Then:
```bash
git diff
```
Red = removed, green = added. That's what will be committed. Then:
```bash
git add .
git commit -m "Update favourite language"
git push
git log --oneline
```
Two commits. Click **commits** on github.com to see them.

## Commit message rule
Short, present tense, says *what* changed: `Add contact section`, `Fix broken link`. Not `update`, not `asdf`, not `final final`.
