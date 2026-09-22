# 6 · Take-home: your profile README

**Goal:** your GitHub profile page shows a real intro, not an empty box. Deadline: post the link in the WhatsApp group within 3 days.

GitHub treats one repo specially: a **public repo named exactly your username**. Its README appears at the top of your profile.

## 6.1 Create it
1. github.com → **New repository**
2. Name: your username, exactly (if you're `priya-sharma`, the repo is `priya-sharma`)
3. Public, tick **Add a README file**
4. GitHub shows a green box: *"You found a secret!"* That's the confirmation.

## 6.2 Do it the way we learned (this is the actual homework)
```bash
git clone https://github.com/YOUR-USERNAME/YOUR-USERNAME.git
cd YOUR-USERNAME
git switch -c feature/profile
code README.md
```
Write your intro, commit, push, **open a PR, merge it yourself**. Then check your profile page.

## 6.3 Starter content
Paste this into `README.md` and change the obvious bits:
```markdown
# Hi, I'm Your Name 👋

B.Tech AI/ML @ RUAS · Cynergy Coding Club

- 🔭 Currently building: something
- 🌱 Learning: Git, obviously
- 📫 Reach me: you@example.com

![Typing SVG](https://readme-typing-svg.herokuapp.com?lines=B.Tech+AI%2FML+%40+RUAS;Building+things+that+work)

![Stats](https://github-readme-stats.vercel.app/api?username=YOUR-USERNAME&show_icons=true&theme=tokyonight)
![Streak](https://streak-stats.demolab.com?user=YOUR-USERNAME&theme=tokyonight)

### Tools
![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?logo=visualstudiocode&logoColor=white)
```
More badges: https://shields.io · More ideas: search "awesome github profile readme".

## 6.4 Post it
Profile link in the group. Not a screenshot; we want to see the commit history.
