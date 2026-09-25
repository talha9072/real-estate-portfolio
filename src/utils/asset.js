// Resolves '/src/assets/...' paths to the real URL Vite generates at build time.
// Plain string paths only work in `npm run dev`; in production the /src folder
// doesn't exist, so every image/video path must go through this helper.
const files = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg,webp,gif,svg,avif,mp4,webm}', {
  eager: true,
  query: '?url',
  import: 'default',
})

export function asset(path) {
  if (!path || typeof path !== 'string') return path
  if (!path.startsWith('/src/assets/')) return path // external URLs, imports, etc.
  return files[path] ?? path
}
