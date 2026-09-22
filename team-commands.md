# Team project — exact commands, per person

Replace `<team-repo-url>` with your team's URL and `<section>` with **your** file: `navbar`, `events`, `contact` or `footer`.
Everything below runs in the terminal, one line at a time.

## Everyone, once
```bash
cd ~/Desktop
git clone <team-repo-url>
cd team-*
git switch -c feature/<section>
```
Check you're on your branch (the `*` line):
```bash
git branch
```

## Edit your file
Open `sections/<section>.js`. Change only the HTML inside the backticks. Save.
Open `index.html` in the browser to check.

## Save and send your work
```bash
git status
git add sections/<section>.js
git commit -m "Add <section> section"
git push -u origin feature/<section>
```

## Open your PR (on github.com)
Repo page → yellow bar **Compare & pull request** → title `Add <section> section` → Reviewers: a teammate → **Create pull request**.

## Review a teammate's PR
Their PR → **Files changed** → hover a line → **+** → comment → **Review changes** → **Approve** → **Submit**.

## Merge (the PR author, after approval)
**Merge pull request** → **Confirm merge** → **Delete branch**.

## Everyone, after each merge
```bash
git switch main
git pull
```
Refresh `index.html`. Your teammates' sections appear.

## Next file (teams of 2)
```bash
git switch main
git pull
git switch -c feature/<second-section>
```
…then repeat from **Edit your file**.

## If something goes red
```bash
git status               # where am I, what changed?
git branch               # am I on my branch?
git pull                 # someone merged before me
```
Still red → red sticky note.
