# 5 · Put it on the internet — GitHub Pages

**Goal:** a public URL for your `about-me` page.

1. On your `about-me` repo: **Settings** → **Pages** (left sidebar)
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Branch: `main`, folder: `/ (root)` → **Save**
4. Wait about a minute, refresh the page. A box appears: *Your site is live at* `https://YOUR-USERNAME.github.io/about-me/`
5. Open it. Send it to someone.

From now on, every `git push` to `main` updates the live site in a minute or two. That's a deploy pipeline, and you just set one up.

**Blank page?** Make sure the file is named exactly `index.html` and is in the root of the repo, not in a folder.
