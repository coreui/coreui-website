# MCP Server

> Bring the CoreUI Angular Data Grid documentation into your AI coding assistant with the @coreui/docs-mcp Model Context Protocol server.

## Introduction

[Model Context Protocol (MCP)](https://modelcontextprotocol.io) is an open standard that lets AI assistants connect to external tools and data sources. The **`@coreui/docs-mcp`** server gives your assistant direct access to the official CoreUI documentation, so it answers from the current docs instead of relying on stale training data.

Point it at the CoreUI Angular Data Grid docs with the `--base-path` option shown below.

It provides:

- **Documentation pages** — getting started, features, columns, and API reference.
- **Live content** — read on demand from `coreui.io`, always matching the latest release.
- **Structured API** — options, events, and methods for the grid.

The server runs locally over stdio via `npx` — no global install required.

## Installation

### Claude Code

Add the server with the CLI, then start a new session and run `/mcp` to verify the connection:

```bash
claude mcp add coreui-data-grid -s user -- npx -y @coreui/docs-mcp --framework angular --base-path /data-grid/angular/docs
```

### Cursor

Create `.cursor/mcp.json` in your project (or `~/.cursor/mcp.json` for global configuration):

```json
{
  "mcpServers": {
    "coreui-data-grid": {
      "command": "npx",
      "args": ["-y", "@coreui/docs-mcp", "--framework", "angular", "--base-path", "/data-grid/angular/docs"]
    }
  }
}
```

### VS Code

Create `.vscode/mcp.json` in your project. Note that VS Code uses the `servers` key:

```json
{
  "servers": {
    "coreui-data-grid": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@coreui/docs-mcp", "--framework", "angular", "--base-path", "/data-grid/angular/docs"]
    }
  }
}
```

### Windsurf

Edit `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "coreui-data-grid": {
      "command": "npx",
      "args": ["-y", "@coreui/docs-mcp", "--framework", "angular", "--base-path", "/data-grid/angular/docs"]
    }
  }
}
```

### Claude Desktop

Edit `claude_desktop_config.json` (Settings → Developer → Edit Config):

```json
{
  "mcpServers": {
    "coreui-data-grid": {
      "command": "npx",
      "args": ["-y", "@coreui/docs-mcp", "--framework", "angular", "--base-path", "/data-grid/angular/docs"]
    }
  }
}
```

### OpenAI Codex

Add it with the CLI, or edit `~/.codex/config.toml` directly:

```bash
codex mcp add coreui-data-grid -- npx -y @coreui/docs-mcp --framework angular --base-path /data-grid/angular/docs
```

```toml
[mcp_servers.coreui-data-grid]
command = "npx"
args = ["-y", "@coreui/docs-mcp", "--framework", "angular", "--base-path", "/data-grid/angular/docs"]
```

## Tools

Once connected, your assistant can call the following tools:

| Tool | Description |
| --- | --- |
| `list_components` | List documentation pages, optionally filtered by section or a substring. |
| `search_docs` | Search the documentation and return the best matching pages. |
| `get_doc_page` | Fetch the full Markdown of a page by slug or URL. |
| `get_component_api` | Get the structured API (options, events, methods) for the grid. |

## Configuration

| Flag | Environment variable | Default | Description |
| --- | --- | --- | --- |
| `--framework <list>` | `COREUI_DOCS_FRAMEWORKS` | `bootstrap,react,vue` | Enabled editions (comma-separated). The first is the default for tools. |
| `--base-url <url>` | `COREUI_DOCS_BASE_URL` | `https://coreui.io` | Origin of the CoreUI site. Override only for a staging or self-hosted mirror. |
| `--base-path <tmpl>` | `COREUI_DOCS_BASE_PATH` | `/{framework}/docs` | Path after the origin where the docs live; `{framework}` is substituted. |
| `--docs-path <map>` | `COREUI_DOCS_PATHS` | — | Per-framework path overrides, `fw=path` comma-separated. |
| `--ttl <minutes>` | `COREUI_DOCS_TTL_MINUTES` | `360` | Cache freshness window. |
| — | `COREUI_DOCS_CACHE_DIR` | OS cache directory | On-disk cache location. |

## Example prompts

Once installed, try asking your AI assistant:

- "How do I enable row selection in CoreUI Angular Data Grid?"
- "What options does CoreUI Angular Data Grid accept?"
- "Show me the CoreUI Angular Data Grid pagination documentation."
- "How do I export CoreUI Angular Data Grid data to CSV?"

The package is open source and published as [`@coreui/docs-mcp`](https://www.npmjs.com/package/@coreui/docs-mcp).
