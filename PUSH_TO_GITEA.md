# Push fSpy Silicon to git.adminforge.de

## Quick Guide

Since I don't have your Gitea credentials, here's how to push this repo yourself:

### Step 1: Create the Repo on Gitea

1. Go to https://git.adminforge.de
2. Log in as `cmos`
3. Click the **+** icon → **New Repository**
4. Settings:
   - **Owner:** cmos
   - **Repository Name:** fspy-silicon
   - **Description:** fSpy camera matching tool - Native Apple Silicon support with Electron 33
   - **Visibility:** ✅ Private
   - **Initialize Repository:** ❌ **UNCHECK THIS** (we already have code)
   - **Default Branch:** main
5. Click **Create Repository**

### Step 2: Push the Code

The git remote is already configured. Just push:

```bash
cd /workspace/group/fspy-silicon

# Push to Gitea
git push -u origin main
```

When prompted for credentials:
- **Username:** cmos
- **Password:** [your Gitea password or personal access token]

### Step 3: Verify

Visit https://git.adminforge.de/cmos/fspy-silicon to see your repo!

---

## Alternative: Use SSH Key

If you have SSH keys set up:

```bash
cd /workspace/group/fspy-silicon

# Change remote to SSH
git remote set-url origin git@git.adminforge.de:cmos/fspy-silicon.git

# Push
git push -u origin main
```

---

## What's Already Done

✅ Git repository initialized
✅ All changes committed
✅ Remote URL configured to `https://git.adminforge.de/cmos/fspy-silicon.git`
✅ Branch renamed to `main`

You just need to create the empty repo on Gitea and push!

---

## If You Get Errors

### "Repository not found"
→ Make sure you created the repo on Gitea first (Step 1)

### "Authentication failed"
→ Use a Personal Access Token instead of password:
1. Gitea → Settings → Applications → Generate New Token
2. Scopes: `repo` (all permissions)
3. Use token as password when pushing

### "Repository already exists"
→ Good! It means the repo is already there. Just push:
```bash
git push -u origin main
```

---

## Repository Contents

This repo includes:
- ✅ Full fSpy source code with Apple Silicon support
- ✅ Electron 33.2.1 + React 18.3.1 + TypeScript 5.7.2
- ✅ Universal macOS build configuration (Intel + ARM64)
- ✅ Comprehensive documentation (README_SILICON.md, BUILD_INSTRUCTIONS.md)
- ✅ Git history with proper attribution

Once pushed, you'll have a private backup of the entire codebase on your own Gitea instance!
