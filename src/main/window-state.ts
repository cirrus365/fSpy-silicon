/**
 * Simple window state manager - replacement for electron-window-state
 * to avoid webpack bundling compatibility issues
 */

import { app, BrowserWindow, screen } from 'electron'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

interface WindowState {
  x?: number
  y?: number
  width: number
  height: number
  isMaximized?: boolean
}

export default function windowStateKeeper(options: {
  defaultWidth: number
  defaultHeight: number
}) {
  const userDataPath = app.getPath('userData')
  const stateFile = join(userDataPath, 'window-state.json')

  let state: WindowState = {
    width: options.defaultWidth,
    height: options.defaultHeight,
  }

  // Load saved state
  try {
    if (existsSync(stateFile)) {
      const data = readFileSync(stateFile, 'utf-8')
      const savedState = JSON.parse(data)

      // Validate saved state is still valid
      const { width, height } = screen.getPrimaryDisplay().workAreaSize
      if (
        savedState.width <= width &&
        savedState.height <= height &&
        savedState.width > 0 &&
        savedState.height > 0
      ) {
        state = savedState
      }
    }
  } catch (e) {
    // Ignore errors, use defaults
  }

  // Create manage function
  const manage = (window: BrowserWindow) => {
    const saveBounds = () => {
      if (window.isMaximized()) {
        state.isMaximized = true
      } else {
        state.isMaximized = false
        const bounds = window.getBounds()
        state.x = bounds.x
        state.y = bounds.y
        state.width = bounds.width
        state.height = bounds.height
      }

      try {
        const dir = join(userDataPath)
        if (!existsSync(dir)) {
          mkdirSync(dir, { recursive: true })
        }
        writeFileSync(stateFile, JSON.stringify(state))
      } catch (e) {
        // Ignore save errors
      }
    }

    // Save state on resize/move
    window.on('resize', saveBounds)
    window.on('move', saveBounds)
    window.on('close', saveBounds)

    // Restore maximized state
    if (state.isMaximized) {
      window.maximize()
    }
  }

  return {
    x: state.x,
    y: state.y,
    width: state.width,
    height: state.height,
    manage,
  }
}
