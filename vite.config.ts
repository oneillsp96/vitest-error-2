/// <reference types="vitest" />
import { defineConfig, splitVendorChunkPlugin } from "vite";
// import { inspectorServer } from "react-dev-inspector/plugins/vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // @ts-ignore
  test: {
    globals: true,
    environment: "jsdom",
  },
  plugins: [
    react(),
    splitVendorChunkPlugin(),

    /**
     * press ctlr+shift+cmd+c, then click a component to launch vscode directly to the file and line number where it appears
     * must set local environment variable REACT_EDITOR=<env variable that launches your editor>
     * for vscode, if you have "code" in your path, you can simply run "export REACT_EDITOR=code" in bash
     */
    // inspectorServer(),
  ],
  // instead of using the preprocessor options, we could also use the
  // a sass alias and import that file everywhere. That might be more performant
  // @use "sass:math"; is only used in some files, but @use statements MUST be there
  // first line in a file, so we cannot inject @import "scss/_aw-tools-and-vars-complete";
  // and still use the @use
  // css: {
  //     preprocessorOptions: {
  //         scss: {
  //             additionalData: `
  //             @use "sass:math";
  //             @import "scss/_aw-tools-and-vars-complete";
  //             `
  //         }
  //     }
  // },
  resolve: {
    alias: {
      "_aw-tools-and-vars-complete": path.resolve(__dirname, "./scss/_aw-tools-and-vars-complete.scss"),
    }
  },
  server: {
    port: 8080,
    strictPort: true,
  },
  build: {
    sourcemap: true,
  }
}

);
