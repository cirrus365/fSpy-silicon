# fSpy Apple Silicon — Build Instructions

## Prerequisites

### Required Software
- **Node.js 18+** (tested with 18.x and 20.x)
- **Yarn** (npm install -g yarn)
- **Git**

### macOS Specific (for DMG builds)
- **Xcode Command Line Tools** (`xcode-select --install`)
- macOS 10.15+ recommended

### Windows Specific (for .exe builds)
- **Visual Studio Build Tools** or **Visual Studio 2019+**

### Linux Specific (for AppImage builds)
- Standard build tools (`build-essential` on Debian/Ubuntu)

---

## Quick Start

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd fspy-silicon

# 2. Install dependencies
yarn install

# 3. Build the production app
yarn build-dist

# 4. Create distributable packages
yarn dist
```

The built binaries will be in the `dist/` folder:
- **macOS:** `fSpy-1.2.0-universal.dmg` (works on Intel + Apple Silicon)
- **Windows:** `fSpy Setup 1.2.0.exe` (64-bit) and 32-bit builds
- **Linux:** `fSpy-1.2.0.AppImage`

---

## Development Mode

```bash
# Terminal 1: Start webpack dev server (hot reload)
yarn dev-server

# Terminal 2: Build development bundle
yarn build-dev

# Terminal 3: Launch Electron in dev mode
yarn electron-dev
```

Changes to GUI code (React components) will hot-reload automatically.
Changes to main process code require restarting the Electron process (re-run `yarn electron-dev`).

---

## Build Outputs

### macOS Universal Binary

The macOS build creates a **universal DMG** containing both architectures:
- `x86_64` (Intel Macs)
- `arm64` (Apple Silicon: M1, M2, M3, M4)

This means one DMG works on ALL Macs (2015+).

The DMG includes:
- Application bundle (`fSpy.app`)
- Code signing (if certificates configured)
- Background image and custom icons
- Drag-to-Applications shortcut

### Windows Installers

Windows builds create:
- **NSIS installer** (.exe) — full install wizard
- **Portable ZIP** — extract and run, no install required

Both 64-bit (`x64`) and 32-bit (`ia32`) versions are built.

### Linux AppImage

A portable AppImage that runs on most Linux distributions without installation.
Just download, `chmod +x`, and run.

---

## Build Scripts Reference

| Command | Description |
|---|---|
| `yarn install` | Install all dependencies |
| `yarn build-dev` | Build development bundle (with sourcemaps) |
| `yarn build-dist` | Build production bundle (minified, optimized) |
| `yarn dist` | Create distributable packages for all platforms |
| `yarn dist-preview` | Create unpacked distributable (faster, for testing) |
| `yarn dev-server` | Start webpack dev server for hot reload |
| `yarn electron-dev` | Launch Electron in development mode |
| `yarn test` | Run Jest test suite |

---

## Troubleshooting

### Error: "Cannot find module 'electron'"
```bash
# Delete node_modules and reinstall
rm -rf node_modules yarn.lock
yarn install
```

### Error: "webpack command not found"
```bash
# Ensure webpack-cli is installed
yarn add -D webpack-cli
```

### macOS: "fSpy.app is damaged and can't be opened"
This happens when running unsigned builds on macOS. To bypass Gatekeeper:
```bash
xattr -cr /Applications/fSpy.app
```

Or right-click → Open (first time only).

### Windows: Build hangs during packaging
Try building without code signing:
```bash
# Edit package.json build section, remove "certificateFile" references
yarn dist
```

### Linux: AppImage won't run
```bash
# Make executable
chmod +x fSpy-1.2.0.AppImage

# Run with FUSE if sandboxed
./fSpy-1.2.0.AppImage --no-sandbox
```

---

## Code Signing (Optional)

### macOS Code Signing
1. Get an Apple Developer account ($99/year)
2. Create a Developer ID Application certificate
3. Set environment variables:
```bash
export CSC_LINK=/path/to/certificate.p12
export CSC_KEY_PASSWORD=your_certificate_password
```
4. Build: `yarn dist`

### Windows Code Signing
1. Obtain a code signing certificate (Sectigo, DigiCert, etc.)
2. Configure in `package.json`:
```json
"win": {
  "certificateFile": "path/to/cert.pfx",
  "certificatePassword": "env:WIN_CSC_KEY_PASSWORD"
}
```
3. Build: `yarn dist`

---

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Build fSpy

on: [push, pull_request]

jobs:
  build:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [macos-latest, ubuntu-latest, windows-latest]

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: yarn install
      - run: yarn build-dist
      - run: yarn dist
      - uses: actions/upload-artifact@v3
        with:
          name: fspy-${{ matrix.os }}
          path: dist/*
```

---

## Dependencies Overview

| Package | Version | Purpose |
|---|---|---|
| electron | 33.2.1 | Cross-platform desktop framework |
| react | 18.3.1 | UI framework |
| redux | 5.0.1 | State management |
| konva | 9.3.18 | Canvas rendering for image annotations |
| webpack | 5.97.1 | Module bundler |
| typescript | 5.7.2 | Type-safe JavaScript |
| electron-builder | 25.1.8 | Packaging and distribution |

---

## Known Issues

### React 18 Warnings
You may see warnings about deprecated lifecycle methods from `react-konva` or `react-measure`. These are harmless and will be resolved when those libraries update to React 18.

### Webpack Dev Server Hot Reload
Hot reloading only works for GUI code (React components). Main process changes require manual restart.

### Windows 32-bit Build
Windows ia32 builds may fail on ARM64 Windows. Remove ia32 target from `package.json` if not needed.

---

## Getting Help

- **Original fSpy Issues:** https://github.com/stuffmatic/fSpy/issues
- **Electron Docs:** https://electronjs.org/docs
- **electron-builder Docs:** https://www.electron.build

---

## License

GPL-3.0 — see LICENSE file for full text.
