"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[4787],{9063:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(45392),a=t(2784);function o(e){const n=Object.assign({p:"p",h2:"h2",a:"a",span:"span",pre:"pre",code:"code",em:"em",h3:"h3",strong:"strong"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.p,null,"Utilize our source Sass files to take advantage of variables, maps, mixins, and more."),"\n",a.createElement(n.h2,{id:"file-structure",style:{position:"relative"}},"File structure",a.createElement(n.a,{href:"#file-structure","aria-label":"file structure permalink",className:"anchor-link after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(n.p,null,"Whenever possible, avoid modifying CoreUI's core files. For Sass, that means creating your own stylesheet that imports CoreUI for Bootstrap so you can modify and extend it. Assuming you're using a package manager like npm, you'll have a file structure that looks like this:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-text"},"your-project/\n├── scss\n│   └── custom.scss\n└── node_modules/\n    └── @coreui/coreui\n        ├── js\n        └── scss\n")),"\n",a.createElement(n.p,null,"If you've downloaded our source files and aren't using a package manager, you'll want to manually create something similar to that structure, keeping CoreUI's source files separate from your own."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-text"},"your-project/\n├── scss\n│   └── custom.scss\n└── @coreui/coreui/\n    ├── js\n    └── scss\n")),"\n",a.createElement(n.h2,{id:"importing",style:{position:"relative"}},"Importing",a.createElement(n.a,{href:"#importing","aria-label":"importing permalink",className:"anchor-link after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(n.p,null,"In your ",a.createElement(n.code,null,"custom.scss"),", you'll import CoreUI's source Sass files. You have two options: include all of CoreUI, or pick the parts you need. We encourage the latter, though be aware there are some requirements and dependencies across our components. You also will need to include some JavaScript for our plugins."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-scss"},'// Custom.scss\n// Option A: Include all of CoreUI\n\n@import "../node_modules/@coreui/coreui/scss/coreui";\n\n// Then add additional custom code here\n')),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-scss"},'// Custom.scss\n// Option B: Include parts of CoreUI\n\n// 1. Include functions first (so you can manipulate colors, SVGs, calc, etc)\n@import "../node_modules/@coreui/coreui/scss/functions";\n\n// 2. Include any default variable overrides here\n\n// 3. Include remainder of required CoreUI stylesheets\n@import "../node_modules/@coreui/coreui/scss/variables";\n\n// 4. Include any default map overrides here\n\n// 5. Include remainder of required parts\n@import "../node_modules/@coreui/coreui/scss/maps";\n@import "../node_modules/@coreui/coreui/scss/mixins";\n@import "../node_modules/@coreui/coreui/scss/root";\n\n// 6. Optionally include any other parts as needed\n@import "../node_modules/@coreui/coreui/scss/utilities";\n@import "../node_modules/@coreui/coreui/scss/reboot";\n@import "../node_modules/@coreui/coreui/scss/type";\n@import "../node_modules/@coreui/coreui/scss/images";\n@import "../node_modules/@coreui/coreui/scss/containers";\n@import "../node_modules/@coreui/coreui/scss/grid";\n@import "../node_modules/@coreui/coreui/scss/helpers";\n\n// 7. Optionally include utilities API last to generate classes based on the Sass map in `_utilities.scss`\n@import "../node_modules/@coreui/coreui/scss/utilities/api";\n\n// 8. Add additional custom code here\n')),"\n",a.createElement(n.p,null,"With that setup in place, you can begin to modify any of the Sass variables and maps in your ",a.createElement(n.code,null,"custom.scss"),". You can also start to add parts of CoreUI for Bootstrap under the ",a.createElement(n.code,null,"// Optional")," section as needed. We suggest using the full import stack from our ",a.createElement(n.code,null,"coreui.scss")," file as your starting point."),"\n",a.createElement(n.h2,{id:"variable-defaults",style:{position:"relative"}},"Variable defaults",a.createElement(n.a,{href:"#variable-defaults","aria-label":"variable defaults permalink",className:"anchor-link after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(n.p,null,"Every Sass variable in CoreUI for Bootstrap includes the ",a.createElement(n.code,null,"!default")," flag allowing you to override the variable's default value in your own Sass without modifying CoreUI's source code. Copy and paste variables as needed, modify their values, and remove the ",a.createElement(n.code,null,"!default")," flag. If a variable has already been assigned, then it won't be re-assigned by the default values in Bootstrap."),"\n",a.createElement(n.p,null,"You will find the complete list of CoreUI's variables in ",a.createElement(n.code,null,"@coreui/coreui/scss/_variables.scss"),". Some variables are set to ",a.createElement(n.code,null,"null"),", these variables don't output the property unless they are overridden in your configuration."),"\n",a.createElement(n.p,null,"Variable overrides must come after our functions are imported, but before the rest of the imports."),"\n",a.createElement(n.p,null,"Here's an example that changes the ",a.createElement(n.code,null,"background-color")," and ",a.createElement(n.code,null,"color")," for the ",a.createElement(n.code,null,"<body>")," when importing and compiling CoreUI for Bootstrap via npm:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-scss"},'// Required\n@import "../node_modules/@coreui/coreui/scss/functions";\n\n// Default variable overrides\n$body-bg: #000;\n$body-color: #111;\n\n// Required\n@import "../node_modules/@coreui/coreui/scss/variables";\n@import "../node_modules/@coreui/coreui/scss/maps";\n@import "../node_modules/@coreui/coreui/scss/mixins";\n@import "../node_modules/@coreui/coreui/scss/root";\n\n// Optional CoreUI components here\n@import "../node_modules/@coreui/coreui/scss/reboot";\n@import "../node_modules/@coreui/coreui/scss/type";\n// etc\n')),"\n",a.createElement(n.p,null,"Repeat as necessary for any variable in CoreUI, including the global options below."),"\n",a.createElement(n.h2,{id:"maps-and-loops",style:{position:"relative"}},"Maps and loops",a.createElement(n.a,{href:"#maps-and-loops","aria-label":"maps and loops permalink",className:"anchor-link after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(n.p,null,"CoreUI for Bootstrap includes a handful of Sass maps, key value pairs that make it easier to generate families of related CSS. We use Sass maps for our colors, grid breakpoints, and more. Just like Sass variables, all Sass maps include the ",a.createElement(n.code,null,"!default")," flag and can be overridden and extended."),"\n",a.createElement(n.p,null,"Some of our Sass maps are merged into empty ones by default. This is done to allow easy expansion of a given Sass map, but comes at the cost of making ",a.createElement(n.em,null,"removing")," items from a map slightly more difficult."),"\n",a.createElement(n.h3,{id:"modify-map",style:{position:"relative"}},"Modify map",a.createElement(n.a,{href:"#modify-map","aria-label":"modify map permalink",className:"anchor-link after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(n.p,null,"All variables in the ",a.createElement(n.code,null,"$theme-colors")," map are defined as standalone variables. To modify an existing color in our ",a.createElement(n.code,null,"$theme-colors")," map, add the following to your custom Sass file:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-scss"},"$primary: #0074d9;\n$danger: #ff4136;\n")),"\n",a.createElement(n.p,null,"Later on, these variables are set in CoreUI's ",a.createElement(n.code,null,"$theme-colors")," map:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-scss"},'$theme-colors: (\n  "primary": $primary,\n  "danger": $danger\n);\n')),"\n",a.createElement(n.h3,{id:"add-to-map",style:{position:"relative"}},"Add to map",a.createElement(n.a,{href:"#add-to-map","aria-label":"add to map permalink",className:"anchor-link after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(n.p,null,"Add new colors to ",a.createElement(n.code,null,"$theme-colors"),", or any other map, by creating a new Sass map with your custom values and merging it with the original map. In this case, we'll create a new ",a.createElement(n.code,null,"$custom-colors")," map and merge it with ",a.createElement(n.code,null,"$theme-colors"),"."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-scss"},'// Create your own map\n$custom-colors: (\n  "custom-color": #900\n);\n\n// Merge the maps\n$theme-colors: map-merge($theme-colors, $custom-colors);\n')),"\n",a.createElement(n.h3,{id:"remove-from-map",style:{position:"relative"}},"Remove from map",a.createElement(n.a,{href:"#remove-from-map","aria-label":"remove from map permalink",className:"anchor-link after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(n.p,null,"To remove colors from ",a.createElement(n.code,null,"$theme-colors"),", or any other map, use ",a.createElement(n.code,null,"map-remove"),". Be aware you must insert it between our requirements and options:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-scss"},'// Required\n@import "../node_modules/@coreui/coreui/scss/functions";\n@import "../node_modules/@coreui/coreui/scss/variables";\n@import "../node_modules/@coreui/coreui/scss/maps";\n@import "../node_modules/@coreui/coreui/scss/mixins";\n@import "../node_modules/@coreui/coreui/scss/root";\n\n$theme-colors: map-remove($theme-colors, "info", "light", "dark");\n\n// Optional\n@import "../node_modules/@coreui/coreui/scss/reboot";\n@import "../node_modules/@coreui/coreui/scss/type";\n// etc\n')),"\n",a.createElement(n.h2,{id:"required-keys",style:{position:"relative"}},"Required keys",a.createElement(n.a,{href:"#required-keys","aria-label":"required keys permalink",className:"anchor-link after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(n.p,null,"CoreUI for Bootstrap assumes the presence of some specific keys within Sass maps as we used and extend these ourselves. As you customize the included maps, you may encounter errors where a specific Sass map's key is being used."),"\n",a.createElement(n.p,null,"For example, we use the ",a.createElement(n.code,null,"primary"),", ",a.createElement(n.code,null,"success"),", and ",a.createElement(n.code,null,"danger")," keys from ",a.createElement(n.code,null,"$theme-colors")," for links, buttons, and form states. Replacing the values of these keys should present no issues, but removing them may cause Sass compilation issues. In these instances, you'll need to modify the Sass code that makes use of those values."),"\n",a.createElement(n.h2,{id:"functions",style:{position:"relative"}},"Functions",a.createElement(n.a,{href:"#functions","aria-label":"functions permalink",className:"anchor-link after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(n.h3,{id:"colors",style:{position:"relative"}},"Colors",a.createElement(n.a,{href:"#colors","aria-label":"colors permalink",className:"anchor-link after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(n.p,null,"Next to the ",a.createElement(n.a,{href:"https://coreui.io/docs/customize/color#color-sass-maps%22",target:"_blank",rel:"nofollow"},"Sass maps")," we have, theme colors can also be used as standalone variables, like ",a.createElement(n.code,null,"$primary"),"."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-scss"},".custom-element {\n  color: $gray-100;\n  background-color: $dark;\n}\n")),"\n",a.createElement(n.p,null,"You can lighten or darken colors with CoreUI's ",a.createElement(n.code,null,"tint-color()")," and ",a.createElement(n.code,null,"shade-color()")," functions. These functions will mix colors with black or white, unlike Sass' native ",a.createElement(n.code,null,"lighten()")," and ",a.createElement(n.code,null,"darken()")," functions which will change the lightness by a fixed amount, which often doesn't lead to the desired effect."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-scss"},"// Tint a color: mix a color with white\n@function tint-color($color, $weight) {\n  @return mix(white, $color, $weight);\n}\n\n// Shade a color: mix a color with black\n@function shade-color($color, $weight) {\n  @return mix(black, $color, $weight);\n}\n\n// Shade the color if the weight is positive, else tint it\n@function shift-color($color, $weight) {\n  @return if($weight > 0, shade-color($color, $weight), tint-color($color, -$weight));\n}\n")),"\n",a.createElement(n.p,null,"In practice, you'd call the function and pass in the color and weight parameters."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-scss"},".custom-element {\n  color: tint-color($primary, 10%);\n}\n\n.custom-element-2 {\n  color: shade-color($danger, 30%);\n}\n")),"\n",a.createElement(n.h3,{id:"color-contrast",style:{position:"relative"}},"Color contrast",a.createElement(n.a,{href:"#color-contrast","aria-label":"color contrast permalink",className:"anchor-link after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(n.p,null,"In order to meet the ",a.createElement(n.a,{href:"https://www.w3.org/TR/WCAG/",target:"_blank",rel:"nofollow"},"Web Content Accessibility Guidelines (WCAG)")," contrast requirements, authors ",a.createElement(n.strong,null,"must")," provide a minimum ",a.createElement(n.a,{href:"https://www.w3.org/TR/WCAG/#contrast-minimum",target:"_blank",rel:"nofollow"},"text color contrast of 4.5:1")," and a minimum ",a.createElement(n.a,{href:"https://www.w3.org/TR/WCAG/#non-text-contrast",target:"_blank",rel:"nofollow"},"non-text color contrast of 3:1"),", with very few exceptions."),"\n",a.createElement(n.p,null,"An additional function we include in CoreUI for Bootstrap is the color contrast function, ",a.createElement(n.code,null,"color-contrast"),". It utilizes the ",a.createElement(n.a,{href:"https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests",target:"_blank",rel:"nofollow"},"WCAG 2.0 algorithm")," for calculating contrast thresholds based on ",a.createElement(n.a,{href:"https://www.w3.org/WAI/GL/wiki/Relative_luminance",target:"_blank",rel:"nofollow"},"relative luminance")," in a ",a.createElement(n.code,null,"sRGB")," colorspace to automatically return a light (",a.createElement(n.code,null,"#fff"),"), dark (",a.createElement(n.code,null,"#212529"),") or black (",a.createElement(n.code,null,"#000"),") contrast color based on the specified base color. This function is especially useful for mixins or loops where you're generating multiple classes."),"\n",a.createElement(n.p,null,"For example, to generate color swatches from our ",a.createElement(n.code,null,"$theme-colors")," map:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-scss"},"@each $color, $value in $theme-colors {\n  .swatch-#{$color} {\n    color: color-contrast($value);\n  }\n}\n")),"\n",a.createElement(n.p,null,"It can also be used for one-off contrast needs:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-scss"},".custom-element {\n  color: color-contrast(#000); // returns `color: #fff`\n}\n")),"\n",a.createElement(n.p,null,"You can also specify a base color with our color map functions:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-scss"},".custom-element {\n  color: color-contrast($dark); // returns `color: #fff`\n}\n")),"\n",a.createElement(n.h3,{id:"escape-svg",style:{position:"relative"}},"Escape SVG",a.createElement(n.a,{href:"#escape-svg","aria-label":"escape svg permalink",className:"anchor-link after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(n.p,null,"We use the ",a.createElement(n.code,null,"escape-svg")," function to escape the ",a.createElement(n.code,null,"<"),", ",a.createElement(n.code,null,">")," and ",a.createElement(n.code,null,"#")," characters for SVG background images. When using the ",a.createElement(n.code,null,"escape-svg")," function, data URIs must be quoted."),"\n",a.createElement(n.h3,{id:"add-and-subtract-functions",style:{position:"relative"}},"Add and Subtract functions",a.createElement(n.a,{href:"#add-and-subtract-functions","aria-label":"add and subtract functions permalink",className:"anchor-link after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(n.p,null,"We use the ",a.createElement(n.code,null,"add")," and ",a.createElement(n.code,null,"subtract")," functions to wrap the CSS ",a.createElement(n.code,null,"calc"),' function. The primary purpose of these functions is to avoid errors when a "unitless" ',a.createElement(n.code,null,"0")," value is passed into a ",a.createElement(n.code,null,"calc")," expression. Expressions like ",a.createElement(n.code,null,"calc(10px - 0)")," will return an error in all browsers, despite being mathematically correct."),"\n",a.createElement(n.p,null,"Example where the calc is valid:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-scss"},"$border-radius: .25rem;\n$border-width: 1px;\n\n.element {\n  // Output calc(.25rem - 1px) is valid\n  border-radius: calc($border-radius - $border-width);\n}\n\n.element {\n  // Output the same calc(.25rem - 1px) as above\n  border-radius: subtract($border-radius, $border-width);\n}\n")),"\n",a.createElement(n.p,null,"Example where the calc is invalid:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-scss"},"$border-radius: .25rem;\n$border-width: 0;\n\n.element {\n  // Output calc(.25rem - 0) is invalid\n  border-radius: calc($border-radius - $border-width);\n}\n\n.element {\n  // Output .25rem\n  border-radius: subtract($border-radius, $border-width);\n}\n")),"\n",a.createElement(n.h2,{id:"mixins",style:{position:"relative"}},"Mixins",a.createElement(n.a,{href:"#mixins","aria-label":"mixins permalink",className:"anchor-link after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(n.p,null,"Our ",a.createElement(n.code,null,"@coreui/coreui/scss/mixins/")," directory has a ton of mixins that power parts of CoreUI and can also be used across your own project."),"\n",a.createElement(n.h3,{id:"color-schemes",style:{position:"relative"}},"Color schemes",a.createElement(n.a,{href:"#color-schemes","aria-label":"color schemes permalink",className:"anchor-link after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(n.p,null,"A shorthand mixin for the ",a.createElement(n.code,null,"prefers-color-scheme")," media query is available with support for ",a.createElement(n.code,null,"light"),", ",a.createElement(n.code,null,"dark"),", and custom color schemes."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-scss"},"@mixin color-scheme($name) {\n  @media (prefers-color-scheme: #{$name}) {\n    @content;\n  }\n}\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-scss"},".custom-element {\n  @include color-scheme(dark) {\n    // Insert dark mode styles here\n  }\n\n  @include color-scheme(custom-named-scheme) {\n    // Insert custom color scheme styles here\n  }\n}\n")))}var l=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?a.createElement(n,e,a.createElement(o,e)):o(e)},s=t(1017),c=t(18722);const i=e=>{let{children:n}=e;return a.createElement(r.Zo,{components:{ScssDocs:e=>a.createElement(c.Jw,e),strong:e=>{if("em"==e.children.type){const n=e.children.props.children.includes("Deprecated")?"warning":"primary";return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement(s.C_,Object.assign({},e.children.props,{color:n})))}return a.createElement("strong",null,e.children)},pre:e=>a.createElement(c.dn,e),table:e=>{const n=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return a.createElement(s.Sx,Object.assign({responsive:!0},e,{className:"table "+(n&&" table-striped table-api")}))},Callout:e=>{const{children:n,title:t,...r}=e;return a.createElement(c.UW,r,t&&a.createElement("h5",null,t),n)},Example:e=>{const{children:n,...t}=e;return a.createElement(c.en,t,a.Children.map(n,(e=>{if(a.isValidElement(e))return a.cloneElement(e)})))}}},n)};function m(e){return a.createElement(i,e,a.createElement(l,e))}i.displayName="MdxLayout"},45392:function(e,n,t){t.d(n,{Zo:function(){return s},ah:function(){return o}});var r=t(2784);const a=r.createContext({});function o(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||l:o(e),r.createElement(a.Provider,{value:s},n)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-customize-sass-mdx-f8408347b63e7add9b0d.js.map