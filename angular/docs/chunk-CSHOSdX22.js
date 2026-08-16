import{$t as Uv,An as aM,Br as kw,Fi as v,K as Hy,Nt as Rs,T as D_,Ut as Td,_i as qv,ar as fv,i as $v,kt as RM,qn as cv,qr as lv,ta as zv,ui as pN,ur as gd}from"./chunk-D4QfcjgQ.js";import{t as At}from"./chunk-BwrHBgAX.js";import"./chunk-CUBvct6a.js";import{Ui as nr,Xi as y,jt as Tp}from"./main-CRW2IFLY.js";import{t as f}from"./chunk-CircK-BE.js";import"./chunk-PIxlJhxX.js";function T(o,r){o&1&&fv(0,7)}function O(o,r){o&1&&fv(0)}function U(o,r){o&1&&fv(0,7)}function A(o,r){o&1&&fv(0,7)}function z(o,r){o&1&&fv(0,7)}function R(o,r){o&1&&fv(0,7)}function W(o,r){o&1&&fv(0,7)}function G(o,r){o&1&&fv(0,7)}function B(o,r){o&1&&(Rs(0,`c-callout`,8)(1,`p`)(2,`strong`),RM(3,`Heads up!`),gd(),lv(4,`br`),RM(5,` Since `),Rs(6,`code`),RM(7,`@coreui/coreui`),gd(),RM(8,` v5.3.0 and `),Rs(9,`code`),RM(10,`@coreui/coreui-pro`),gd(),RM(11,` v5.10.0, we support Sass modules. `),gd(),Rs(12,`p`),RM(13,` You can now use the modern `),Rs(14,`code`),RM(15,`@use`),gd(),RM(16,` and `),Rs(17,`code`),RM(18,`@forward`),gd(),RM(19,` rules instead of `),Rs(20,`code`),RM(21,`@import`),gd(),RM(22,`, which is deprecated and will be removed in Dart Sass 3.0.0. Using `),Rs(23,`code`),RM(24,`@import`),gd(),RM(25,` will result in a compilation warning. You can learn more about this transition `),Rs(26,`a`,9),RM(27,`here`),gd(),RM(28,`. `),gd()())}function q(o,r){o&1&&(Rs(0,`c-callout`,10)(1,`p`)(2,`strong`),RM(3,` Sass `),Rs(4,`code`),RM(5,`@import`),gd(),RM(6,` are deprecated and will be removed in Dart Sass 3.0.0.! `),gd()(),Rs(7,`p`),RM(8,` You can also use `),Rs(9,`code`),RM(10,`@import`),gd(),RM(11,` rules, but please be aware that they are deprecated and will be removed in Dart Sass 3.0.0, resulting in a compilation warning. You can learn more about this deprecation `),Rs(12,`a`,9),RM(13,`here`),gd(),RM(14,`. `),gd()())}var _=class o{constructor(){this.headService=v(y);this.name=`Sass`;this.title=`Sass`;this.description=`Utilize CoreUI source Sass files to take advantage of variables, maps, mixins, and functions to help you build faster and customize your project.`}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description})}static{this.ɵfac=function(u){return new(u||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-customize-sass`]],decls:123,vars:31,consts:[[`dartSassModules`,``],[`dartSassDeprecations`,``],[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[`markdown`,``,1,`highlight`],[`ngSkipHydration`,``,4,`ngTemplateOutlet`],[4,`ngTemplateOutlet`],[`ngSkipHydration`,``],[`color`,`info`,`ngSkipHydration`,``,1,`docs-callout`,`docs-callout-info`],[`href`,`https://sass-lang.com/documentation/breaking-changes/import/`,`target`,`_blank`,`rel`,`noreferrer`],[`color`,`warning`,`ngSkipHydration`,``,1,`docs-callout`,`docs-callout-warning`]],template:function(u,y){if(u&1&&(Rs(0,`h1`,2),RM(1),gd(),Rs(2,`p`,3),RM(3),gd(),lv(4,`docs-ads-carbon-loader`),Rs(5,`markdown`),RM(6,`

  `),lv(7,`br`),RM(8,`

  ## File structure

  Whenever possible, avoid modifying CoreUI core files. For Sass, that means creating your own stylesheet that imports
  CoreUI for Bootstrap so you can modify and extend it. Assuming you're using a package manager like npm, you'll have a
  file structure that looks like this:
`),gd(),Rs(9,`pre`,4),RM(10,`  \`\`\`text
  your-project/
  \u251C\u2500\u2500 ...
  \u251C\u2500\u2500 node_modules/
  \u2502   \u251C\u2500\u2500 @coreui/coreui
  \u2502   \u2502   \u251C\u2500\u2500 scss
  \u2502   \u2502   \u2514\u2500\u2500 ...
  \u2502   \u2514\u2500\u2500 @coreui/angular
  \u2502        \u2514\u2500\u2500 ...
  \u251C\u2500\u2500 src
  \u2502   \u2514\u2500\u2500 scss
  \u2502       \u251C\u2500\u2500 _custom.scss
  \u2502       \u251C\u2500\u2500 ...
  \u2502       \u251C\u2500\u2500 _variables.scss
  \u2502       \u2514\u2500\u2500 styles.scss
  \u2514\u2500\u2500 ...
  \`\`\`
`),gd(),Rs(11,`markdown`),RM(12,`
  If you've downloaded our source files and aren't using a package manager, you'll want to manually create something
  similar to that structure, keeping CoreUI source files separate from your own.
`),gd(),Rs(13,`pre`,4),RM(14,`  \`\`\`
  your-project/
  \u251C\u2500\u2500 scss
  \u2502   \u2514\u2500\u2500 custom.scss
  \u2514\u2500\u2500 @coreui/coreui/
      \u251C\u2500\u2500 js
      \u2514\u2500\u2500 scss
  \`\`\`
`),gd(),Rs(15,`markdown`),RM(16,`
  `),lv(17,`br`),RM(18,`

  ## Importing

  In your \`custom.scss\`, you'll import CoreUI source Sass files. You have two options: include all of CoreUI, or pick
  the parts you need. We encourage the latter, though be aware there are some requirements and dependencies across our
  components. You also will need to include some JavaScript for our plugins.
`),gd(),Hy(19,T,1,0,`ng-container`,5),Rs(20,`pre`,4),RM(21,`  \`\`\`scss
  // Custom.scss
  // Option A: Include all of CoreUI

  @use "@coreui/coreui/scss/coreui";

  // Then add additional custom code here
  \`\`\`

  \`\`\`scss
  // Custom.scss
  // Option B: Include parts of CoreUI

  // 1. Include
  @use "@coreui/coreui/scss/root";

  // 2. Optionally include any other parts as needed
  @use "@coreui/coreui/scss/utilities";
  @use "@coreui/coreui/scss/reboot";
  @use "@coreui/coreui/scss/type";
  @use "@coreui/coreui/scss/images";
  @use "@coreui/coreui/scss/containers";
  @use "@coreui/coreui/scss/grid";
  @use "@coreui/coreui/scss/helpers";

  // 3. Optionally include utilities API last to generate classes based on the Sass map in \`_utilities.scss\`
  @use "@coreui/coreui/scss/utilities/api";

  // 4. Add additional custom code here
  \`\`\`
`),gd(),Hy(22,O,1,0,`ng-container`,6),Rs(23,`pre`,4),RM(24,`  \`\`\`scss
  // Custom.scss
  // Option A: Include all of CoreUI

  @import "@coreui/coreui/scss/coreui";

  // Then add additional custom code here
  \`\`\`

  \`\`\`scss
  // Custom.scss
  // Option B: Include parts of CoreUI

  // 1. Include functions first (so you can manipulate colors, SVGs, calc, etc)
  @import "@coreui/coreui/scss/functions";

  // 2. Include any default variable overrides here

  // 3. Include remainder of required CoreUI stylesheets
  @import "@coreui/coreui/scss/variables";

  // 4. Include any default map overrides here

  // 5. Include remainder of required parts
  @import "@coreui/coreui/scss/maps";
  @import "@coreui/coreui/scss/mixins";
  @import "@coreui/coreui/scss/root";

  // 6. Optionally include any other parts as needed
  @import "@coreui/coreui/scss/utilities";
  @import "@coreui/coreui/scss/reboot";
  @import "@coreui/coreui/scss/type";
  @import "@coreui/coreui/scss/images";
  @import "@coreui/coreui/scss/containers";
  @import "@coreui/coreui/scss/grid";
  @import "@coreui/coreui/scss/helpers";

  // 7. Optionally include utilities API last to generate classes based on the Sass map in \`_utilities.scss\`
  @import "@coreui/coreui/scss/utilities/api";

  // 8. Add additional custom code here
  \`\`\`
`),gd(),Rs(25,`markdown`),RM(26,`
  `),lv(27,`br`),RM(28,`

  With that setup in place, you can begin to modify any of the Sass variables and maps in your \`custom.scss\`. You can
  also start to add parts of CoreUI for Bootstrap under the \`Optional\` section as needed. We suggest using the full
  import stack from our \`coreui.scss\` file as your starting point.

  `),lv(29,`br`),RM(30,"\n\n  ## Variable defaults\n\n  Every Sass variable in CoreUI for Bootstrap includes the `!default` flag allowing you to override the variable's default value in your own Sass without modifying CoreUI's source code. Copy and paste variables as needed, modify their values, and remove the `!default` flag. If a variable has already been assigned, then it won't be re-assigned by the default values in Bootstrap.\n\n  You will find the complete list of CoreUI's variables in `@coreui/coreui/scss/_variables.scss`. Some variables are set to `null`, these variables don't output the property unless they are overridden in your configuration.\n\n  Variable overrides must come after our functions are imported, but before the rest of the imports.\n\n  Here's an example that changes the `background-color` and `color` for the `body` when importing and compiling CoreUI for Bootstrap via npm:\n\n"),gd(),Hy(31,U,1,0,`ng-container`,5),Rs(32,`pre`,4),RM(33,`  \`\`\`scss
  @use "@coreui/coreui/scss/coreui" with (
    $body-bg: #000,
    $body-color: #111
  )
  \`\`\`
`),gd(),Hy(34,A,1,0,`ng-container`,5),Rs(35,`pre`,4),RM(36,`  \`\`\`scss
  // Required
  @import "@coreui/coreui/scss/functions";

  // Default variable overrides
  $body-bg: #000;
  $body-color: #111;

  // Required
  @import "@coreui/coreui/scss/variables";
  @import "@coreui/coreui/scss/maps";
  @import "@coreui/coreui/scss/mixins";
  @import "@coreui/coreui/scss/root";

  // Optional CoreUI components here
  @import "@coreui/coreui/scss/reboot";
  @import "@coreui/coreui/scss/type";
  // etc
  \`\`\`
`),gd(),Rs(37,`markdown`),RM(38,`
  Repeat as necessary for any variable in CoreUI, including the global options below.

  `),lv(39,`br`),RM(40,`

  ## Maps and loops

  CoreUI for Bootstrap includes a handful of Sass maps, key value pairs that make it easier to generate families of related CSS. We use Sass maps for our colors, grid breakpoints, and more. Just like Sass variables, all Sass maps include the \`!default\` flag and can be overridden and extended.

  Some of our Sass maps are merged into empty ones by default. This is done to allow easy expansion of a given Sass map, but comes at the cost of making _removing_ items from a map slightly more difficult.

  `),lv(41,`br`),RM(42,`

  ### Modify map

  All variables in the \`$theme-colors\` map are defined as standalone variables. To modify an existing color in our \`$theme-colors\` map, add the following to your custom Sass file:
`),gd(),Rs(43,`pre`,4),RM(44,`  \`\`\`scss
  @use "sass:color";
  @use "sass:map";
  @use "@coreui/coreui/scss/variables" as *;

  $danger: color.scale($danger, $lightness: 45%);
  $primary: #0074d9;
  \`\`\`
`),gd(),Rs(45,`markdown`),RM(46,`
  Later on, these variables are set in CoreUI's \`$theme-colors\` map:
`),gd(),Rs(47,`pre`,4),RM(48,`  \`\`\`scss
  $theme-colors: map.merge($theme-colors, (
    "danger": $danger,
    "primary": $primary
  ));
  \`\`\`
`),gd(),Rs(49,`markdown`),RM(50,`
  `),lv(51,`br`),RM(52,`

  ### Add to map

  Add new colors to \`$theme-colors\`, or any other map, by creating a new Sass map with your custom values and merging it with the original map. In this case, we'll create a new \`$custom-colors\` map and merge it with \`$theme-colors\`.

`),gd(),Hy(53,z,1,0,`ng-container`,5),Rs(54,`pre`,4),RM(55,`  \`\`\`scss
  @use "sass:map";
  @use "@coreui/coreui/scss/variables" as *;

  $custom-colors: (
    "custom-color": #900
  );

  $theme-colors: map.merge($theme-colors, $custom-colors);

  @use "@coreui/coreui/scss/coreui";
  \`\`\`
`),gd(),Hy(56,R,1,0,`ng-container`,5),Rs(57,`pre`,4),RM(58,`
  \`\`\`scss
  // Create your own map
  $custom-colors: (
    "custom-color": #900
  );

  // Merge the maps
  $theme-colors: map-merge($theme-colors, $custom-colors);
  \`\`\`
`),gd(),Rs(59,`markdown`),RM(60,`
  `),lv(61,`br`),RM(62,`

  ### Remove from map

  To remove colors from \`$theme-colors\`, or any other map, use \`map-remove\`. Be aware you must insert it between our requirements and options:

`),gd(),Hy(63,W,1,0,`ng-container`,5),Rs(64,`pre`,4),RM(65,`
    \`\`\`scss
    @use "sass:map";
    @use "@coreui/coreui/scss/variables" as *;
    @use "@coreui/coreui/scss/maps" as *;

    $theme-colors: map-remove($theme-colors, "info", "light", "dark");
    $theme-colors-border-subtle: map.remove($theme-colors-border-subtle, "info", "light", "dark");

    @use "@coreui/coreui/scss/coreui";
    \`\`\`
`),gd(),Hy(66,G,1,0,`ng-container`,5),Rs(67,`pre`,4),RM(68,`  \`\`\`scss
  // Required
  @import "@coreui/coreui/scss/functions";
  @import "@coreui/coreui/scss/variables";
  @import "@coreui/coreui/scss/maps";
  @import "@coreui/coreui/scss/mixins";
  @import "@coreui/coreui/scss/root";

  $theme-colors: map-remove($theme-colors, "info", "light", "dark");

  // Optional
  @import "@coreui/coreui/scss/reboot";
  @import "@coreui/coreui/scss/type";
  // etc
  \`\`\`
  `),gd(),Rs(69,`markdown`),RM(70,`
  `),lv(71,`br`),RM(72,`

  ## Required keys

  CoreUI for Bootstrap assumes the presence of some specific keys within Sass maps as we used and extend these ourselves. As you customize the included maps, you may encounter errors where a specific Sass map's key is being used.

  For example, we use the \`primary\`, \`success\`, and \`danger\` keys from \`$theme-colors\` for links, buttons, and form states. Replacing the values of these keys should present no issues, but removing them may cause Sass compilation issues. In these instances, you'll need to modify the Sass code that makes use of those values.

  `),lv(73,`br`),RM(74,`

  ## Functions

  `),lv(75,`br`),RM(76,`

  ### Colors

  Next to the [Sass maps](https://coreui.io/docs/customize/color#color-sass-maps") we have, theme colors can also be used as standalone variables, like \`$primary\`.
  `),gd(),Rs(77,`pre`,4),RM(78),gd(),Rs(79,`markdown`),RM(80,"\n  You can lighten or darken colors with CoreUI `tint-color()` and `shade-color()` functions. These functions will mix colors with black or white, unlike Sass' native `lighten()` and `darken()` functions which will change the lightness by a fixed amount, which often doesn't lead to the desired effect.\n  "),gd(),Rs(81,`pre`,4),RM(82),gd(),Rs(83,`markdown`),RM(84,`
  In practice, you'd call the function and pass in the color and weight parameters.
  `),gd(),Rs(85,`pre`,4),RM(86),gd(),Rs(87,`markdown`),RM(88,`
  `),lv(89,`br`),RM(90,"\n\n  ### Color contrast\n\n  In order to meet the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG/) contrast requirements, authors **must** provide a minimum [text color contrast of 4.5:1](https://www.w3.org/TR/WCAG/#contrast-minimum) and a minimum [non-text color contrast of 3:1](https://www.w3.org/TR/WCAG/#non-text-contrast), with very few exceptions.\n\n  An additional function we include in CoreUI for Bootstrap is the color contrast function, `color-contrast`. It utilizes the [WCAG 2.0 algorithm](https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests) for calculating contrast thresholds based on [relative luminance](https://www.w3.org/WAI/GL/wiki/Relative_luminance) in a `sRGB` colorspace to automatically return a light (`#fff`), dark (`#212529`) or black (`#000`) contrast color based on the specified base color. This function is especially useful for mixins or loops where you're generating multiple classes.\n\n  For example, to generate color swatches from our `$theme-colors` map:\n  "),gd(),Rs(91,`pre`,4),RM(92),gd(),Rs(93,`markdown`),RM(94,`

  It can also be used for one-off contrast needs:
  `),gd(),Rs(95,`pre`,4),RM(96),gd(),Rs(97,`markdown`),RM(98,`

  You can also specify a base color with our color map functions:
  `),gd(),Rs(99,`pre`,4),RM(100),gd(),Rs(101,`markdown`),RM(102,`
  `),lv(103,`br`),RM(104,"\n\n  ### Escape SVG\n\n  We use the `escape-svg` function to escape the `<`, `>` and `#` characters for SVG background images. When using the `escape-svg` function, data URIs must be quoted.\n\n  "),lv(105,`br`),RM(106,'\n\n  ### Add and Subtract\n\n  We use the `add` and `subtract` functions to wrap the CSS `calc` function. The primary purpose of these functions is to avoid errors when a "unitless" `0` value is passed into a `calc` expression. Expressions like `calc(10px - 0)` will return an error in all browsers, despite being mathematically correct.\n\n  Example where the calc is valid:\n  '),gd(),Rs(107,`pre`,4),RM(108),gd(),Rs(109,`markdown`),RM(110,`
  Example where the calc is invalid:
  `),gd(),Rs(111,`pre`,4),RM(112),gd(),Rs(113,`markdown`),RM(114,`
  `),lv(115,`br`),RM(116,`

  ## Mixins

  Our \`@coreui/coreui/scss/mixins/\` directory has a ton of mixins that power parts of CoreUI and can also be used across your own project.

  ### Color schemes

  A shorthand mixin for the \`prefers-color-scheme\` media query is available with support for \`light\`, \`dark\`, and custom color schemes.
    `),gd(),Rs(117,`pre`,4),RM(118),gd(),Hy(119,B,29,0,`ng-template`,null,0,pN)(121,q,15,0,`ng-template`,null,1,pN)),u&2){let m=aM(120),d=aM(122);kw(),Uv(y.title),kw(2),Uv(y.description),kw(16),cv(`ngTemplateOutlet`,m),kw(3),cv(`ngTemplateOutlet`,d),kw(9),cv(`ngTemplateOutlet`,m),kw(3),cv(`ngTemplateOutlet`,d),kw(19),cv(`ngTemplateOutlet`,m),kw(3),cv(`ngTemplateOutlet`,d),kw(7),cv(`ngTemplateOutlet`,m),kw(3),cv(`ngTemplateOutlet`,d),kw(12),Td("  ```scss\n  .custom-element ",`{`,`
    color: $gray-100;
    background-color: $dark;
  }
  \`\`\`
  `),kw(4),qv("  ```scss\n  // Tint a color: mix a color with white\n  @function tint-color($color, $weight) ",`{`,`
    @return mix(white, $color, $weight);
  }

  // Shade a color: mix a color with black
  @function shade-color($color, $weight) `,`{`,`
    @return mix(black, $color, $weight);
  }

  // Shade the color if the weight is positive, else tint it
  @function shift-color($color, $weight) `,`{`,`
    @return if($weight > 0, shade-color($color, $weight), tint-color($color, -$weight));
  }
  \`\`\`
  `),kw(4),$v(`  \`\`\`scss
  @use "@coreui/coreui/scss/functions/color" as *;

  .custom-element `,`{`,`
    color: tint-color($primary, 10%);
  }

  .custom-element-2 `,`{`,`
    color: shade-color($danger, 30%);
  }
  \`\`\`
  `),kw(6),qv(`  \`\`\`scss
  @use "@coreui/coreui/scss/functions/color-contrast" as *;

  @each $color, $value in $theme-colors `,`{`,`
    .swatch-#`,`{`,`$color} `,`{`,`
      color: color-contrast($value);
    }
  }
  \`\`\`
  `),kw(4),Td(`  \`\`\`scss
  @use "@coreui/coreui/scss/functions/color-contrast" as *;

  .custom-element `,`{`,"\n    color: color-contrast(#000); // returns `color: #fff`\n  }\n  ```\n  "),kw(4),Td(`  \`\`\`scss
  @use "@coreui/coreui/scss/functions/color-contrast" as *;

  .custom-element `,`{`,"\n    color: color-contrast($dark); // returns `color: #fff`\n  }\n  ```\n  "),kw(8),$v(`  \`\`\`scss
  @use "@coreui/coreui/scss/functions/math" as *;

  $border-radius: .25rem;
  $border-width: 1px;

  .element `,`{`,`
    // Output calc(.25rem - 1px) is valid
    border-radius: calc($border-radius - $border-width);
  }

  .element `,`{`,`
    // Output the same calc(.25rem - 1px) as above
    border-radius: subtract($border-radius, $border-width);
  }
  \`\`\`
`),kw(4),$v(`  \`\`\`scss
  @use "@coreui/coreui/scss/functions/math" as *;

  $border-radius: .25rem;
  $border-width: 0;

  .element `,`{`,`
    // Output calc(.25rem - 0) is invalid
    border-radius: calc($border-radius - $border-width);
  }

  .element `,`{`,`
    // Output .25rem
   border-radius: subtract($border-radius, $border-width);
  }
  \`\`\`
  `),kw(6),zv("  ```scss\n  @mixin color-scheme($name) ",`{`,`
    @media (prefers-color-scheme: #`,`{`,`$name}) `,`{`,`
      @content;
    }
  }
  \`\`\`

  \`\`\`scss
  @use "@coreui/coreui/scss/mixins/color-scheme" as *;

  .custom-element `,`{`,`
    @include color-scheme(dark) `,`{`,`
      // Insert dark mode styles here
    }

    @include color-scheme(custom-named-scheme) `,`{`,`
      // Insert custom color scheme styles here
    }
  }
  \`\`\`
`)}},dependencies:[f,nr,Tp,At],encapsulation:2})}};export{_ as CustomizeSassComponent};