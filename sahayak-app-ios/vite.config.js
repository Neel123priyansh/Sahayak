import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    fs: {
      strict: false,
      // Allow serving splash asset from sibling mobile project during dev
      allow: [
        'c:/Users/b2c2b/OCT/sahayak-app-ios',
        'C:/Users/b2c2b/OCT/sahayak-app-ios',
        'c:/Users/b2c2b/OCT/sahayak-mobile/assets',
        'C:/Users/b2c2b/OCT/sahayak-mobile/assets'
      ]
    }
  }
})
