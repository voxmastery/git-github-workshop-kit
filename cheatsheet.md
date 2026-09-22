# Git cheat sheet — the 20 commands that matter

## Once, ever
```bash
git config --global user.name "Your Name"
git config --global user.email "your-github-email"
git config --global init.defaultBranch main
git config --global pull.rebase false
```

## Start
```bash
git clone <url>          # copy a repo from GitHub to your laptop
git init                 # turn an existing folder into a repo (then add a remote)
git remote add origin <url>
```

## Every day
```bash
git status               # what changed?
git diff                 # show the exact changes (unstaged)
git add <file>           # stage one file
git add .                # stage everything
git commit -m "message"  # snapshot
git push                 # send to GitHub
git pull                 # get the latest from GitHub
git log --oneline        # history, one line each
```

## Branches
```bash
git branch                       # list (* = current)
git switch -c feature/name       # create + switch
git switch main                  # go back
git push -u origin feature/name  # push a new branch (first time)
git branch -d feature/name       # delete a merged branch
```

## Undo (safe ones)
```bash
git restore <file>           # throw away unstaged edits to a file
git restore --staged <file>  # unstage, keep edits
git commit --amend           # fix the last commit message (only before pushing)
git stash / git stash pop    # park work, get it back
```

## The loop
```
branch → edit → add → commit → push → PR → review → merge → pull
```

## Never
- Don't commit `.env`, passwords, API keys. They stay in history forever. Use `.gitignore`.
- Don't work directly on `main` in a team repo.
- Don't `git push --force` on a shared branch.
