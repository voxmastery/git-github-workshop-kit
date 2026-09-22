# When the terminal goes red

| You see | What it means | Fix |
|---|---|---|
| `git: command not found` | Git isn't installed, or the terminal was open before install | Close and reopen the terminal. Still nothing → reinstall, or use Codespaces |
| `Please tell me who you are` | No name/email set | Run the two `git config --global user.*` lines |
| `Support for password authentication was removed` | You typed your GitHub password | Never do that. Windows: let the browser login pop up. Mac/Linux: ask for `gh auth login` |
| `src refspec main does not match any` | No commits yet, or your branch is `master` | `git commit` first; then `git branch -M main` |
| `rejected … (fetch first)` | GitHub has commits you don't | `git pull`, then `git push` |
| `You have divergent branches` | Git wants to know how to pull | `git config --global pull.rebase false`, then pull again |
| `fatal: not a git repository` | You're in the wrong folder | `cd` into the cloned repo (`ls` to look around) |
| `remote origin already exists` | You added the remote twice | `git remote set-url origin <url>` |
| `403` or `Permission denied` on push | You're not a collaborator, or a different GitHub account is cached | Accept the invite email. On Windows: Control Panel → Credential Manager → remove github.com, push again |
| A screen full of `~` and you can't type | Vim opened | Type `:q!` then Enter. Then set `core.editor` to VS Code |
| `<<<<<<< HEAD` inside a file | Merge conflict | Keep the lines you want, delete the `<<<<<<<`, `=======`, `>>>>>>>` markers, `git add`, `git commit` |
| Commits not showing on your profile | `user.email` doesn't match GitHub | Fix the config. New commits will count |
| Pages shows a blank page / 404 | File isn't `index.html` at the root | Rename/move it, push, wait a minute |
