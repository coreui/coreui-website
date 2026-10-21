# Agent Skills

> Step-by-step playbooks that teach AI coding agents to install, migrate and theme CoreUI, shipped in the @coreui/coreui-pro package.

## Introduction

Agent skills are `SKILL.md` files in the [Agent Skills](https://skills.sh) format. Each one is a focused playbook for one task: installing CoreUI, migrating a project, or customizing colors. The skill's `description` tells your agent when it applies, and its steps keep the agent on the documented path instead of on stale training data.

The skills ship inside the `@coreui/coreui-pro` npm package, in its `skills/` folder, so they always match the version you installed. The [MCP Server](https://coreui.io/bootstrap/docs/ai-tools/mcp/) and [LLMs.txt](https://coreui.io/bootstrap/docs/ai-tools/llms-txt/) answer questions about the docs; the skills walk an agent through a whole change. Always review an agent's changes against the matching documentation page.

## Install

Sync the skills from the packages your project already depends on:

```sh
npm install -D skills
npx skills experimental_sync -y
```

The [Skills CLI](https://www.npmjs.com/package/skills) scans your dependencies, finds the `skills/` folder in `@coreui/coreui-pro` and links each skill into your agent, so the skills update with the package. The sync command is marked experimental by the CLI.

To install from the repository instead:

```sh
npx skills add coreui/coreui-pro#v6-dev
```

To use one skill without the CLI, point your agent at its file, for example `node_modules/@coreui/coreui-pro/skills/coreui-v6-install/SKILL.md`, and describe what you want to do.

## Skills

| Skill | Use it when | Guide |
| --- | --- | --- |
| `coreui-v6-install` | Adding CoreUI to a project and setting up its CSS, JavaScript and build: CDN, npm with the Sass CLI, Vite, Webpack or Parcel. | [Install](https://coreui.io/bootstrap/docs/getting-started/install/) |
| `coreui-v5-v6-migration` | Upgrading a project from CoreUI v5 to v6: dependencies, Sass, classes, data attributes, markup and JavaScript. | [Migration to v6](https://coreui.io/bootstrap/docs/migration/v6/) |
| `coreui-v4-v6-migration` | Upgrading a CoreUI v4 project straight to v6: the v4 to v5 changes first, then the v5 to v6 skill, with the names that change twice. | [Migration to v6](https://coreui.io/bootstrap/docs/migration/v6/) |
| `coreui-v4-v5-migration` | Upgrading a project from CoreUI v4 to v5: dependencies, Sass, the dark theme, classes, custom properties and JavaScript. | [Migration to v5](https://coreui.io/bootstrap/docs/migration/v5/) |
| `coreui-from-bootstrap` | Moving a Bootstrap 5 or Bootstrap 6 project to CoreUI. | [Introduction](https://coreui.io/bootstrap/docs/getting-started/introduction/) |
| `coreui-theme-colors` | Changing theme colors, adding a brand theme, recoloring a component or setting up color modes, in vanilla, React and Vue projects. | [Theme](https://coreui.io/bootstrap/docs/customize/theme/) |
| `coreui-utility-api` | Adding, changing or removing utility classes, enabling responsive, state and print variants, or trimming the generated utility CSS. | [Utility API](https://coreui.io/bootstrap/docs/utilities/api/) |
| `coreui-component` | Building your own component's CSS and markup on CoreUI tokens, theme slots, cascade layers and mixins. | [Components](https://coreui.io/bootstrap/docs/customize/components/) |
| `coreui-component-js` | Writing your own JavaScript plugin on `BaseComponent`, or driving CoreUI plugins from your code through instances, events and methods. | [JavaScript](https://coreui.io/bootstrap/docs/getting-started/javascript/) |
