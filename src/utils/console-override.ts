/**
 * Override console methods to do nothing
 * This is useful for production builds or when you want to suppress console output
 */

export function overrideConsole() {
  // Store original methods in case you want to restore them later
  const originalConsole = {
    log: console.log,
    info: console.info,
    warn: console.warn,
    error: console.error,
    debug: console.debug
  }

  // Override all console methods to do nothing
  console.log = function () {}
  console.info = function () {}
  console.warn = function () {}
  console.error = function () {}
  console.debug = function () {}

  // Return original methods for potential restoration
  return originalConsole
}

export function restoreConsole(originalConsole: typeof console) {
  console.log = originalConsole.log
  console.info = originalConsole.info
  console.warn = originalConsole.warn
  console.error = originalConsole.error
  console.debug = originalConsole.debug
}

// Auto-override when this module is imported
overrideConsole()
