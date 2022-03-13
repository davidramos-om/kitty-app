### React Scripts 5 Wepack issues (happends when using styled component with typescripts)

Install : 
```bash
npm i @emotion/styled
npm i @emotion/react
npm install --save-dev @types/styled-components
```

Add to tsconfig.json
```bash
 "paths": {
    "@mui/styled-engine": [
      "./node_modules/@mui/styled-engine"
    ]
  }
```