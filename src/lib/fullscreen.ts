export async function requestTheater() {
  const root = document.documentElement
  if (root.requestFullscreen) {
    try {
      await root.requestFullscreen()
    } catch {
      /* Fullscreen can be denied; the theater layout still fills the viewport. */
    }
  }
}

export async function leaveTheater() {
  if (document.fullscreenElement) {
    try {
      await document.exitFullscreen()
    } catch {
      /* ignore */
    }
  }
}
