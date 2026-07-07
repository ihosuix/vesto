import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        shop: './pages/shop.html',
        product: './pages/product.html',
        cart: './pages/cart.html',
        contact: './pages/contact.html',
      }
    }
  }
})