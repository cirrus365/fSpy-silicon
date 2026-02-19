# Changelog - Apple Silicon Build

## [1.2.0] - 2026-02-19

### Added - Apple Silicon & Electron 33 Update
- ✅ **Native Apple Silicon support** (arm64 architecture)
- ✅ **Universal macOS binary** — single DMG for Intel + Apple Silicon
- ✅ **Electron 33.2.1** (upgraded from 16.0.5)
- ✅ **React 18.3.1** (upgraded from 17.0.2)
- ✅ **TypeScript 5.7.2** (upgraded from 4.5.4)
- ✅ **Webpack 5.97.1** (upgraded from 5.65.0)
- ✅ **All dependencies updated to 2026 versions**

### Security
- Updated all dependencies to fix known vulnerabilities
- Modern Electron with latest security patches
- Updated minimist to 1.2.8 (fixes prototype pollution vulnerabilities)

### Performance
- Native Apple Silicon execution (no Rosetta 2 emulation)
- Faster startup time with Electron 33
- Improved rendering performance with React 18

### Compatibility
- Fully backward compatible with existing `.fspy` project files
- HEIC image support maintained (from coryoso's fork)
- Cross-platform: macOS (Intel + Apple Silicon), Windows, Linux

---

## [1.1.0-coryoso] - 2022-05-22 (coryoso fork)

### Added
- Apple Silicon build target (arm64)
- Electron 16.0.5 (from 8.2.1)
- Webpack 5 (from 4)
- HEIC image format support
- React 17 (from 16)

### Changed
- Updated electron-builder to 22.14.5
- Updated all babel packages to @babel/* namespaced versions
- Modernized webpack configuration

---

## [1.1.0-beta.3] - 2022 (original fSpy)

Last release by original author before repository became inactive.

### Original Features (preserved in this fork)
- Cross-platform camera matching
- Vanishing point-based calibration
- `.fspy` project file format
- Blender integration via fSpy-Blender addon
- Support for common image formats (JPEG, PNG, etc.)
