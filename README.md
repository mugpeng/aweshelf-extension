# aweshelf-extension

Official extensions for [aweshelf](https://github.com/Webioinfo01/aweshelf) — session bookmark manager for AI coding agents.

## Extensions

| Extension | Description | Install |
|-----------|-------------|---------|
| [vscode](./vscode) | Browse, search, edit, and resume bookmarks from VS Code | [Marketplace](https://marketplace.visualstudio.com/items?itemName=webioinfo.aweshelf) · [VSIX](https://github.com/Webioinfo01/aweshelf-extension/releases) |

## Install VSIX manually

Download the `.vsix` file from [Releases](https://github.com/Webioinfo01/aweshelf-extension/releases), then:

```bash
code --install-extension aweshelf-<version>.vsix
```

Or in VS Code: Ctrl+Shift+P → **Extensions: Install from VSIX...**

## Development

Each extension has its own directory with independent build and test setup. See the README in each extension directory for details.

## License

[MPL-2.0](LICENSE)
