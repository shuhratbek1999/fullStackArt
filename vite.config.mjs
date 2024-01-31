import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import {resolve,dirname} from 'node:path'
import vue from '@vitejs/plugin-vue';
import VueI18nPlugin from "@intlify/unplugin-vue-i18n"
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({ 
    plugins: [
      vue()
    ],
    resolve: {  
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      } 
    }
  });
}
