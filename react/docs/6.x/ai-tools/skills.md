# Agent Skills

> Step-by-step playbooks that teach AI coding agents to install CoreUI for React and migrate to v6, shipped in the @coreui/react-pro package.

## Introduction

Agent skills are `SKILL.md` files in the [Agent Skills](https://skills.sh) format. Each one is a focused playbook for one task: installing CoreUI for React, or migrating a project to v6. The skill's `description` tells your agent when it applies, and its steps keep the agent on the documented path instead of on stale training data.

The skills ship inside the `@coreui/react-pro` npm package, in its `skills/` folder, so they always match the version you installed. The [MCP Server](https://coreui.io/react/docs/ai-tools/mcp/) and [LLMs.txt](https://coreui.io/react/docs/ai-tools/llms-txt/) answer questions about the docs; the skills walk an agent through a whole change. Always review an agent's changes against the matching documentation page.

## Install

Sync the skills from the packages your project already depends on:

```sh
npm install -D skills
npx skills experimental_sync -y
```

The [Skills CLI](https://www.npmjs.com/package/skills) scans your dependencies, finds the `skills/` folder in `@coreui/react-pro` and links each skill into your agent, so the skills update with the package. The sync command is marked experimental by the CLI.

`@coreui/react-pro` also points the CLI at the skills of `@coreui/coreui-pro`, which it installs as a dependency. They cover the stylesheet side: `coreui-theme-colors` (theme colors, brand themes, color modes), `coreui-v6-install` (Sass builds), `coreui-v5-v6-migration` and `coreui-v4-v5-migration` (classes, Sass and tokens), `coreui-utility-api`, `coreui-component` and `coreui-from-bootstrap`.

To use one skill without the CLI, point your agent at its file, for example `node_modules/@coreui/react-pro/skills/coreui-react-v6-install/SKILL.md`, and describe what you want to do.

## Skills

| Skill | Use it when | Guide |
| --- | --- | --- |
| `coreui-react-v6-install` | Adding CoreUI for React to a project and setting up its styles, the unstyled entry, color modes and the build. | [Install](https://coreui.io/react/docs/getting-started/install/) |
| `coreui-react-v5-v6-migration` | Upgrading a project from `@coreui/react-pro` 5.x to 6.x: dependencies, stylesheets, components, props and events. | [Migration to v6](https://coreui.io/react/docs/migration/v6/) |
| `coreui-react-v4-v6-migration` | Upgrading a `@coreui/react-pro` 4.x project straight to 6.x: the 4.x to 5.x changes first, then the 5.x to 6.x skill, with the props that change twice. | [Migration to v6](https://coreui.io/react/docs/migration/v6/) |
| `coreui-react-v4-v5-migration` | Upgrading a project from `@coreui/react-pro` 4.x to 5.x: dependencies, renamed components and props, events and callbacks. | [Migration to v5](https://coreui.io/react/docs/migration/v5/) |
