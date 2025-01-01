import vue from '@vitejs/plugin-vue'

import createAutoImport from './auto-import'
import createSvgIcon from './svg-icon'
import createCompression from './compression'
import createSetupExtend from './setup-extend'
import copy from 'vite-plugin-copy'

export default function createVitePlugins(viteEnv, isBuild = false) {
    const vitePlugins = [vue(),  copy([
        { src: 'path/to/your/file.txt', dest: '' }, // 将文件复制到根目录
      ])]
    vitePlugins.push(createAutoImport())
	vitePlugins.push(createSetupExtend())
    vitePlugins.push(createSvgIcon(isBuild))
	isBuild && vitePlugins.push(...createCompression(viteEnv))
    return vitePlugins
}
