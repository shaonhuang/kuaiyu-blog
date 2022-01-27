import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const isProduction = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  base: isProduction ? "./" : "",
  // 配置中指明将会把 serve 和 build 时的模式都覆盖掉,serve 时默认 'development'，build 时默认 'production'
  mode: "development",
  publicDir: "assets",
  resolve: {
    // 目录别名
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  define: {
    "process.env": {}
  },
  server: {
    // 是否自动打开浏览器
    open: true,
    // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
    host: "0.0.0.0",
    // 服务器端口号
    port: 56438,
    // 设为 true ,若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: false,
    // 为开发服务器配置 CORS
    cors: true,
    // 设置为 true 强制使依赖预构建
    force: true,
    // 代理
    proxy: {
      "/api": {
        target: "http://xxx.xxx.xx",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },
  build: {
    // 压缩
    minify: "esbuild",
    assetsDir: "",
    outDir: `./dist`,
    // 进行压缩计算
    brotliSize: false
  },
  plugins: [vue()]
});
