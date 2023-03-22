Consola

npm init -y

npm i -D @types/node nodemon ts-node typescript rimraf

npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowjs true --noImplicitAny true

Package.json

"scripts": {
    "build":"rimraf ./build && tsc",
    "dev": "nodemon",
    "start": "node build/index.js",
    "start:prod":"npm run buil && node buil/index.js",
    "tsNode": "cd src && ts-node index.ts",
    "transpilation": "tsc"
  },

nodemon.json

{
  "watch":["src"],
  "ext":".ts, .js",
  "ignore":[],
  "exec":"ts-node ./src/index.ts"
}