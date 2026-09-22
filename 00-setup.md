# 0 · Setup

Do these in order. Ten minutes, once, ever.

## 0.1 Create a GitHub account
1. Go to https://github.com/signup
2. Use a username you'd put on a resume (`priya-sharma`, not `xXcoder99Xx`).
3. Use an email you can access right now; you'll verify it.
4. Stay logged in in your browser.

## 0.2 Install Git

**Windows**
1. Download from https://git-scm.com/download/win and run the installer.
2. Click **Next** on everything. The defaults include *Git Credential Manager*, which handles login for you.
3. When it finishes, open **Git Bash** from the Start menu (not Command Prompt).

**macOS**
- Open **Terminal** and type `git --version`. If it isn't installed, macOS will offer to install the developer tools; click **Install** and wait.
- Or, if you have Homebrew: `brew install git`

**Linux (Ubuntu/Debian)**
```bash
sudo apt update && sudo apt install git -y
```

## 0.3 Install your editor: Antigravity (or VS Code)
We use **Google Antigravity**, a free AI editor built on VS Code. Same terminal, same Git, plus an AI agent panel for building the site.

1. https://antigravity.google/download → download for your OS (about 200 MB).
2. Install, open it, **sign in with your Google account**.
3. Open the terminal inside it: **View → Terminal** (or `` Ctrl+` ``). Every command in this kit runs there.

**If the download is slow or the install fails**, don't wait: install **VS Code** instead (https://code.visualstudio.com), it's identical for everything in this kit except the AI panel, and your teammate's Antigravity can build the site. Codespaces (0.7) is the fallback after that.

**One rule with the AI agent:** it will offer to run `git` commands for you. **Say no.** You type the Git commands yourself today; that's the whole point. Use the agent for HTML and CSS only.

## 0.4 Check it worked
Open a terminal:
- **Windows:** Start menu → type **Git Bash** → open it
- **Mac:** Cmd+Space → type **Terminal** → Enter
- **Linux:** Ctrl+Alt+T

Then type this and press Enter:
```bash
git --version
```
You should see something like `git version 2.4x.x`. Any number is fine. If you see "command not found", close the terminal, reopen it, try again. Still nothing → red sticky note.

## 0.5 Tell Git who you are
Use the **same email as your GitHub account**, or your commits won't show on your profile.
```bash
git config --global user.name "Your Name"
git config --global user.email "the-email-on-your-github@example.com"
git config --global init.defaultBranch main
git config --global pull.rebase false
git config --global core.editor "code --wait"
```
Check:
```bash
git config --list
```

## 0.6 Logging in (authentication)
GitHub does **not** accept your account password in the terminal. Nothing to do now:
- **Windows:** the first time you `git push`, a browser window opens. Log in there. Done forever.
- **Mac/Linux:** same browser prompt on first push. If it asks for a password in the terminal instead, tell a volunteer; they'll set up GitHub CLI (`gh auth login`).

## 0.7 If Git won't install (locked college laptop, etc.)
Use **Codespaces**, a VS Code in your browser:
1. Open the repo on github.com
2. Click the green **Code** button → **Codespaces** → **Create codespace on main**
3. A terminal appears at the bottom. Every command in this kit works there exactly the same.
