# Setup a node project
- create a folder for backend ex: api (here)
- go inside api using below
```
cd api
```
- Now use below command to generate package.json

```
npm init -y
```
### Import required libraries or dependencies

- express
- typescript 
- tsx 
- @types/express
- many more ....

```cmd
npm install express

```
- here -D flag add these into dev dependencies
```cmd
npm install -D typescript tsx @types/express
```

### Create tsconfig.json file
- use below command 

```
npx tsc --init
```


- below kind of tsconfig file will be generated 

```json

{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    // File Layout
    // "rootDir": "./src",
    // "outDir": "./dist",

    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    "module": "nodenext",
    "target": "esnext",
    "types": [],
    // For nodejs:
    // "lib": ["esnext"],
    // "types": ["node"],
    // and npm install -D @types/node

    // Other Outputs
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    // Stricter Typechecking Options
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    // Style Options
    // "noImplicitReturns": true,
    // "noImplicitOverride": true,
    // "noUnusedLocals": true,
    // "noUnusedParameters": true,
    // "noFallthroughCasesInSwitch": true,
    // "noPropertyAccessFromIndexSignature": true,

    // Recommended Options
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true,
  }
}

```

### Modify package.json Script section

- Add this in script section.
- it will execute ts directly 
- also no need of nodemon watch flag will auto restart server when changes happens
- here index.ts is the actual file from where server is running



```json
  "dev": "tsx watch src/index.ts",
```

- To run our project use 
```
npm run dev
```

- add this build in script 
- it will build project using tsconfig.json file and convert into js 
```json
"build": "tsc",
```

- To build our project use :
```
npm run build
```
## Initalise Git
- to initialise git in project
```git
git init
```

- create a file named <mark> .gitignore </mark>

- add the files and folder names that you downt want to push into github

```
node_modules
.env
dist
```
