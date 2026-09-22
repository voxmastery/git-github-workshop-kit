# 2 · Branches

**Goal:** make a change on a branch, watch it disappear from `main` and come back.

A branch is a parallel copy of your project. You work there, and `main` stays clean until you're ready.

## 2.1 Create a branch and switch to it
```bash
git switch -c feature/projects-section
```
(`-c` = create. `git branch` lists your branches; the `*` shows where you are.)

## 2.2 Make a change
In `index.html`, paste this just above `</main>`, then save:
```html
<h2>Projects</h2>
<ul>
  <li>A thing I built</li>
  <li>A thing I'm building</li>
</ul>
```
Refresh the page in your browser to see it.

## 2.3 Commit it on the branch
```bash
git add .
git commit -m "Add projects section"
```

## 2.4 The moment that makes branches click
```bash
git switch main
```
Look at `index.html` in VS Code. **Your projects section is gone.** Now:
```bash
git switch feature/projects-section
```
**It's back.** Nothing was lost; `main` and your branch are two versions living side by side.

## 2.5 Push the branch
```bash
git push -u origin feature/projects-section
```
(`-u` the first time; after that just `git push`.)

Refresh github.com. A yellow bar says your branch was pushed and offers **Compare & pull request**. That's step 3.

## Naming
`feature/…` for new things, `fix/…` for bugs, `docs/…` for text. Lowercase, hyphens, no spaces.
