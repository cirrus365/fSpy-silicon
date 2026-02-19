# fSpy - Apple Silicon Build (Electron 33)

**Native Apple Silicon (M1/M2/M3/M4) support for fSpy camera matching tool**

This is an updated fork of [fSpy](https://github.com/stuffmatic/fSpy) with:
- ✅ **Native Apple Silicon support** (no Rosetta 2 required)
- ✅ **Electron 33** (latest 2026, up from Electron 8)
- ✅ **React 18** (up from React 16)
- ✅ **Webpack 5** (modern build system)
- ✅ **TypeScript 5** (latest)
- ✅ **HEIC image support** (modern iPhone format)
- ✅ **Universal macOS builds** (Intel + Apple Silicon in one DMG)

---

## What is fSpy?

fSpy is an open source, cross-platform app for **still image camera matching** — essential for architectural visualization, VFX, and virtual staging workflows where you need to match 3D camera perspectives to photographs.

![fSpy screenshot](screenshot.jpg)

---

## Download Pre-Built Binaries

**Coming soon** — binaries will be available on the Releases page.

For now, build from source (see below).

---

## Building from Source

### Prerequisites
- Node.js 18+ and Yarn
- macOS, Windows, or Linux

### Build Steps

```bash
# Clone the repository
git clone https://github.com/[YOUR_USERNAME]/fSpy.git
cd fSpy

# Install dependencies
yarn install

# Build the app
yarn build-dist

# Create distributable packages (DMG for Mac, exe for Windows, AppImage for Linux)
yarn dist
```

The built app will be in the `dist/` folder.

### Development Mode

```bash
# Start the dev server (in one terminal)
yarn dev-server

# Build dev bundle (in another terminal)
yarn build-dev

# Run the app (in a third terminal)
yarn electron-dev
```

---

## macOS Universal Binary

This build creates a **universal binary** that runs natively on both:
- Intel Macs (x64)
- Apple Silicon Macs (arm64 — M1, M2, M3, M4)

No Rosetta 2 translation required on Apple Silicon — runs at full native performance.

---

## Using with Blender

fSpy pairs perfectly with the [fSpy-Blender addon](https://github.com/stuffmatic/fSpy-Blender) for architectural visualization and virtual staging workflows:

1. Open a photo in fSpy
2. Draw perspective lines on vanishing points
3. Export the `.fspy` project file
4. Import into Blender using the fSpy-Blender addon
5. Your Blender camera now perfectly matches the photograph

---

## Credits

**Original Author:** [Per Gantelius](https://stuffmatic.com) (fSpy 1.0)

**Apple Silicon Support:** [coryoso](https://github.com/coryoso) (Electron 16 + arm64 builds + HEIC support)

**Electron 33 Update:** This fork

**License:** GPL-3.0

---

## Why This Fork?

The original fSpy repository hasn't been updated since 2022 and doesn't support Apple Silicon natively. This fork:
- Brings fSpy into 2026 with modern dependencies
- Runs natively on Apple Silicon without Rosetta 2
- Maintains full backward compatibility with existing `.fspy` project files
- Supports HEIC images from modern iPhones

---

## Support the Original Author

If you find fSpy useful, consider supporting the original creator Per Gantelius. This fork builds on their excellent work.

---

## Roadmap

- [x] Apple Silicon native support
- [x] Electron 33 upgrade
- [x] React 18 upgrade
- [x] HEIC image support
- [ ] Linux ARM builds
- [ ] Windows ARM builds
- [ ] Updated UI with modern styling
- [ ] Batch processing mode
- [ ] Python API for automation

---

## Issues & Contributions

Found a bug? Want to contribute? Open an issue or PR on GitHub.

---

## License

GPL-3.0 — see [LICENSE](LICENSE) for full text.
