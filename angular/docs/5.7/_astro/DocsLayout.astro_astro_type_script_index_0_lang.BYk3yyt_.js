function e(e,t){return t?e.replace(/@coreui\/angular(?=['"/])/g,`@coreui/angular-pro`):e}function t(e){let t=new Set,n=/(?:from|import|require)\s*\(?\s*['"]([^'"]+)['"]/g,r;for(;r=n.exec(e);){let e=r[1];e.startsWith(`.`)||e.startsWith(`/`)||e.startsWith(`@angular/`)||t.add(e.startsWith(`@`)?e.split(`/`).slice(0,2).join(`/`):e.split(`/`)[0])}return[...t]}function n(e){let t=e.match(/selector:\s*['"]([^'"]+)['"]/);return t?t[1]:`app-example`}function r(e){return`./${e.replace(/\.ts$/,``)}`}function i(i){let{code:a,name:o,componentName:s=`Angular Example`,pro:c=!1,files:l}=i,u=c?`@coreui/coreui-pro`:`@coreui/coreui`,d=l?.length?l.map(t=>({...t,code:e(t.code,c)})):[{name:`example.component.ts`,code:e(a,c),lang:`ts`}],f=d.find(e=>e.name.endsWith(`.ts`)&&/@Component\s*\(/.test(e.code))??d.find(e=>e.name.endsWith(`.ts`))??d[0],p=n(f.code),m=d.map(e=>e.code).join(`
`),h={"@angular/animations":`latest`,"@angular/common":`latest`,"@angular/compiler":`latest`,"@angular/core":`latest`,"@angular/forms":`latest`,"@angular/platform-browser":`latest`,"@angular/router":`latest`,[u]:`latest`,rxjs:`latest`,tslib:`latest`,"zone.js":`latest`};for(let e of t(m))e in h||(h[e]=`latest`);let g=JSON.stringify({name:o.toLowerCase(),private:!0,scripts:{ng:`ng`,start:`ng serve`,build:`ng build`},dependencies:h,devDependencies:{"@angular/build":`latest`,"@angular/cli":`latest`,"@angular/compiler-cli":`latest`,typescript:`^6`}},null,2),_=/@coreui\/[a-z-]*chartjs/.test(m);_&&(h[`@coreui/chartjs`]=`latest`);let v=JSON.stringify({$schema:`./node_modules/@angular/cli/lib/config/schema.json`,version:1,newProjectRoot:`projects`,projects:{demo:{projectType:`application`,root:``,sourceRoot:`src`,prefix:`app`,schematics:{"@schematics/angular:component":{style:`scss`}},architect:{build:{builder:`@angular/build:application`,options:{browser:`src/main.ts`,index:`src/index.html`,outputPath:`dist/demo`,polyfills:[`zone.js`],tsConfig:`tsconfig.app.json`,styles:[`src/scss/styles.scss`,..._?[`node_modules/@coreui/chartjs/dist/css/coreui-chartjs.min.css`]:[]],stylePreprocessorOptions:{sass:{silenceDeprecations:[`import`]}}},configurations:{development:{optimization:!1,sourceMap:!0},production:{optimization:!0,outputHashing:`all`}}},serve:{builder:`@angular/build:dev-server`,defaultConfiguration:`development`,configurations:{development:{buildTarget:`demo:build:development`},production:{buildTarget:`demo:build:production`}}}}}}},null,2),y=JSON.stringify({compileOnSave:!1,compilerOptions:{outDir:`./dist/out-tsc`,strict:!0,skipLibCheck:!0,isolatedModules:!0,esModuleInterop:!0,experimentalDecorators:!0,moduleResolution:`bundler`,importHelpers:!0,target:`ES2022`,module:`preserve`,useDefineForClassFields:!1,lib:[`ES2022`,`dom`]},angularCompilerOptions:{strictInjectionParameters:!0,strictTemplates:!0,strictStandalone:!0}},null,2),b=JSON.stringify({extends:`./tsconfig.json`,compilerOptions:{outDir:`./out-tsc/app`,types:[]},files:[`src/main.ts`],include:[`src/**/*.d.ts`]},null,2),x=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${s}</title>
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
`,S=`@use '${u}/scss/coreui' as * with (
  $enable-deprecation-messages: false
);
`,C=`import { Component } from '@angular/core'
import { ${o} } from '${r(f.name)}'

@Component({
  selector: 'app-root',
  imports: [${o}],
  template: '<${p} />',
  host: { class: 'd-block p-3' }
})
export class AppComponent {}
`,w={};for(let e of d)w[`src/app/${e.name}`]=e.code;return{title:s,description:`CoreUI for Angular — ${s} example`,template:`node`,files:{"package.json":g,"angular.json":v,"tsconfig.json":y,"tsconfig.app.json":b,"src/index.html":x,"src/main.ts":`import '@angular/compiler'

import { provideHttpClient, withFetch } from '@angular/common/http'
import { bootstrapApplication } from '@angular/platform-browser'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { provideRouter } from '@angular/router'

import { AppComponent } from './app/app.component'

bootstrapApplication(AppComponent, {
  providers: [provideAnimationsAsync(), provideRouter([]), provideHttpClient(withFetch())]
}).catch((err) => console.error(err))
`,"src/scss/styles.scss":S,"src/app/app.component.ts":C,...w},dependencies:h,openFile:`src/app/${f.name}`}}window.coreuiDocsSandbox=i,window.coreuiDocsSandboxTargets=[`stackblitz`];