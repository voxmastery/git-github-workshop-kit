# 3 · Pull requests and review

**Goal:** open a PR, have your partner review it, merge it. Then do it for them.

A pull request is a request to bring your branch into `main`, with a place to discuss it first. Every real team works this way.

## 3.1 Add your partner as a collaborator
On your repo: **Settings → Collaborators → Add people** → their GitHub username.
They get an email and a notification (the 🔔 bell on github.com). They must click **Accept invitation**, or the next steps won't work for them.

## 3.2 Open the PR
1. On github.com click **Compare & pull request** (or **Pull requests → New**).
2. Title: `Add projects section`
3. Description: what you changed and why. One or two lines is fine.
4. **Reviewers** (right side): pick your partner.
5. **Create pull request**

## 3.3 Review your partner's PR
Open their repo → **Pull requests** → their PR → **Files changed**.
- Hover a line → click the **+** → leave a comment (ask for a change or say something nice).
- Top right: **Review changes** → choose **Request changes** or **Approve** → **Submit review**.

## 3.4 Fix what they asked for
Back on your laptop, still on your branch:
```bash
# make the change in VS Code
git add .
git commit -m "Address review comments"
git push
```
The PR updates itself. Your partner approves.

## 3.5 Merge
On the PR: **Merge pull request → Confirm merge**. Then **Delete branch** (the button appears; branches are disposable).

## 3.6 Update your laptop
```bash
git switch main
git pull
```
Your projects section is now on `main`, on GitHub and on your laptop.

## What we just did
```
branch → commit → push → PR → review → fix → approve → merge → pull
```
That loop is the job. Everything else is detail.
