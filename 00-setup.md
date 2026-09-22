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

## 0.3 Install VS Code
https://code.visualstudio.com — download, install, open once.
On Windows, during install tick **"Add to PATH"** if you see it.

## 0.4 Check it worked
Open a terminal (Git Bash on Windows, Terminal on Mac/Linux):
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
