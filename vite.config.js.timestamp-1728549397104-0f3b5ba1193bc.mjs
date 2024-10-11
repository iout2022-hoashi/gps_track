// vite.config.js
import { defineConfig } from "file:///mnt/c/Users/HoshiDai/gps_tracking/traccar-web/traccar-web/node_modules/vite/dist/node/index.js";
import react from "file:///mnt/c/Users/HoshiDai/gps_tracking/traccar-web/traccar-web/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///mnt/c/Users/HoshiDai/gps_tracking/traccar-web/traccar-web/node_modules/vite-plugin-svgr/dist/index.js";
import { VitePWA } from "file:///mnt/c/Users/HoshiDai/gps_tracking/traccar-web/traccar-web/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = defineConfig(() => ({
  server: {
    port: 3e3,
    open: false,
    proxy: {
      "/api/socket": "ws://localhost:8082",
      "/api": "http://localhost:8082"
    }
  },
  build: {
    outDir: "build"
  },
  plugins: [
    svgr(),
    react(),
    VitePWA({
      includeAssets: ["favicon.ico", "apple-touch-icon-180x180.png"],
      workbox: {
        navigateFallbackDenylist: [/^\/api/],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
        globPatterns: ["**/*.{js,css,html,woff,woff2,mp3}"]
      },
      manifest: {
        short_name: "${title}",
        name: "${description}",
        theme_color: "${colorPrimary}",
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png"
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    })
  ]
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvSG9zaGlEYWkvZ3BzX3RyYWNraW5nL3RyYWNjYXItd2ViL3RyYWNjYXItd2ViXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvbW50L2MvVXNlcnMvSG9zaGlEYWkvZ3BzX3RyYWNraW5nL3RyYWNjYXItd2ViL3RyYWNjYXItd2ViL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9tbnQvYy9Vc2Vycy9Ib3NoaURhaS9ncHNfdHJhY2tpbmcvdHJhY2Nhci13ZWIvdHJhY2Nhci13ZWIvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHN2Z3IgZnJvbSAndml0ZS1wbHVnaW4tc3Zncic7XHJcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnO1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdGVtcGxhdGUtY3VybHktaW4tc3RyaW5nICovXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoKSA9PiAoe1xyXG4gIHNlcnZlcjoge1xyXG4gICAgcG9ydDogMzAwMCxcclxuICAgIG9wZW46IGZhbHNlLFxyXG4gICAgcHJveHk6IHtcclxuICAgICAgJy9hcGkvc29ja2V0JzogJ3dzOi8vbG9jYWxob3N0OjgwODInLFxyXG4gICAgICAnL2FwaSc6ICdodHRwOi8vbG9jYWxob3N0OjgwODInLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6ICdidWlsZCcsXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICBzdmdyKCksXHJcbiAgICByZWFjdCgpLFxyXG4gICAgVml0ZVBXQSh7XHJcbiAgICAgIGluY2x1ZGVBc3NldHM6IFsnZmF2aWNvbi5pY28nLCAnYXBwbGUtdG91Y2gtaWNvbi0xODB4MTgwLnBuZyddLFxyXG4gICAgICB3b3JrYm94OiB7XHJcbiAgICAgICAgbmF2aWdhdGVGYWxsYmFja0RlbnlsaXN0OiBbL15cXC9hcGkvXSxcclxuICAgICAgICBtYXhpbXVtRmlsZVNpemVUb0NhY2hlSW5CeXRlczogMTAgKiAxMDI0ICogMTAyNCxcclxuICAgICAgICBnbG9iUGF0dGVybnM6IFsnKiovKi57anMsY3NzLGh0bWwsd29mZix3b2ZmMixtcDN9J10sXHJcbiAgICAgIH0sXHJcbiAgICAgIG1hbmlmZXN0OiB7XHJcbiAgICAgICAgc2hvcnRfbmFtZTogJyR7dGl0bGV9JyxcclxuICAgICAgICBuYW1lOiAnJHtkZXNjcmlwdGlvbn0nLFxyXG4gICAgICAgIHRoZW1lX2NvbG9yOiAnJHtjb2xvclByaW1hcnl9JyxcclxuICAgICAgICBpY29uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICdwd2EtNjR4NjQucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICc2NHg2NCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiAncHdhLTE5MngxOTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICdwd2EtNTEyeDUxMi5wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSBtYXNrYWJsZScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG59KSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1csU0FBUyxvQkFBb0I7QUFDN1gsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLGVBQWU7QUFHeEIsSUFBTyxzQkFBUSxhQUFhLE9BQU87QUFBQSxFQUNqQyxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxlQUFlO0FBQUEsTUFDZixRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxLQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixlQUFlLENBQUMsZUFBZSw4QkFBOEI7QUFBQSxNQUM3RCxTQUFTO0FBQUEsUUFDUCwwQkFBMEIsQ0FBQyxRQUFRO0FBQUEsUUFDbkMsK0JBQStCLEtBQUssT0FBTztBQUFBLFFBQzNDLGNBQWMsQ0FBQyxtQ0FBbUM7QUFBQSxNQUNwRDtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
