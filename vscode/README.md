# Aweshelf (aweshelf-ext)

Browse, search, edit, and resume aweshelf AI coding session bookmarks from VS Code and Cursor.

## Installation

### From VS Code Marketplace

1. Open VS Code or Cursor
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for **aweshelf-ext**
4. Click **Install**

### From VSIX file

1. Download the `.vsix` file from [GitHub Releases](https://github.com/mugpeng/aweshelf-extension/releases)
2. In VS Code / Cursor: Ctrl+Shift+P → **Extensions: Install from VSIX...**
3. Select the downloaded `.vsix` file

Or via command line:

```bash
code --install-extension aweshelf-ext-0.0.2.vsix
```

## Requirements

- Python `aweshelf` CLI installed and available on `PATH`, or configure `aweshelf.commandPath`.
- Optional: `aweswitch` for Claude profile-based resume.

## Features

### Sidebar

- Bookmark tree view grouped by category
- Search bookmarks by title, category, session ID, project, or profile
- Sort by ID or recent
- Filter by provider or category
- Auto-refresh on bookmark store changes

### Bookmark Actions (right-click menu)

- Show bookmark details as Markdown
- Edit title, category, and aweswitch profile
- Resume normally, resume raw, or resume with a selected profile
- Copy session ID or resume command
- Open the bookmarked project path
- Remove bookmarks with confirmation

### Session Management

- Bookmark a discovered session through QuickPick

## Settings

| Setting | Default | Description |
|---------|---------|-------------|
| `aweshelf.commandPath` | `aweshelf` | Path to the aweshelf executable |
| `aweshelf.configPath` | `""` | Optional `AWESHELF_CONFIG` path. Leave empty to use `~/.config/aweshelf/bookmarks.json` |

## Development

```bash
npm install
npm run compile
```

Open this folder in VS Code and run **Run Aweshelf Extension** from the Run and Debug view.

### Package

```bash
npm run package
```

This creates a `.vsix` file for distribution.
