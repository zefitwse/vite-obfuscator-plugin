1、这是一个基于 javascript-obfuscator 实现的 vite for vue3 的 js 混淆插件。This is a JavaScript obfuscator based implementation of vite for Vue3 JavaScript obfuscation plugin

2、使用案例：Use Cases

```js
//vite.config.ts
import obfuscatorPlugin from "vite-obfuscator-zznode";

export default {
    plugins: [
      ...,
      obfuscatorPlugin({
      	inputDir: "./dist/static/js", // 这是你打包后的js文件存放路径 This is the storage path for your packaged JavaScript file
      	outputDir: "./dist/static/js", // 这是你混淆后输出的js文件路径 This is the path to the JavaScript file that you output after confusion
      	options: { //这些都是配置。详见javascript-obfuscator 文档配置。直接搬运过来即刻。 These are all configurations. Please refer to the JavaScript obfuscator documentation for configuration details. Directly transport it over immediately
        	compact: true,
        	controlFlowFlattening: true,
        	controlFlowFlatteningThreshold: 0.75,
        	deadCodeInjection: true,
        	deadCodeInjectionThreshold: 0.4,
        	debugProtection: true,
        	debugProtectionInterval: true,
        	disableConsoleOutput: true,
      })
    ]
}


```
