import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Force a single React instance to avoid "Cannot read properties of undefined (reading 'useState')"
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
      "react-dom/client": path.resolve(__dirname, "./node_modules/react-dom/client"),
    },
    dedupe: ["react", "react-dom"],
  },
  build: {
    // Target modern browsers for smaller bundles
    target: "esnext",
    // Enable minification
    minify: "esbuild",
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React runtime
          'react-vendor': ['react', 'react-dom'],
          // Router
          'router': ['react-router-dom'],
          // UI framework (Radix primitives used everywhere)
          'ui-vendor': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-select',
            '@radix-ui/react-tabs',
            '@radix-ui/react-accordion',
            '@radix-ui/react-popover',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-label',
            '@radix-ui/react-slot',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-separator',
            '@radix-ui/react-toggle',
            '@radix-ui/react-toggle-group',
          ],
          // Data fetching
          'query': ['@tanstack/react-query'],
          // Supabase client
          'supabase': ['@supabase/supabase-js'],
          // Stripe (only loaded on checkout)
          'stripe': ['@stripe/stripe-js', '@stripe/react-stripe-js'],
          // Icons - bundle all lucide together instead of individual chunks
          'icons': ['lucide-react'],
        },
      },
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "lucide-react"],
    exclude: [],
  },
}));
