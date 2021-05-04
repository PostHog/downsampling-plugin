# PostHog Plugin Advanced Kit: Hello World

[![npm package](https://img.shields.io/npm/v/posthog-plugin-hello-world?style=flat-square)](https://www.npmjs.com/package/posthog-plugin-hello-world)
[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg?style=flat-square)](https://opensource.org/licenses/MIT)

This is an exemplary PostHog plugin. It adds property `"greeting"` to every event, with a configurable value (by default: `"Hello world!"`).

Use it as a base for your own plugins!

## Goodies included

-   TypeScript for best reliability and development experience
-   Jest for convenient testing
-   Prettier and ESLint for code style and best practices – both handled by pre-commit hooks
-   GitHub Actions set up to run code quality and functionality tests in pull requests, and also to publish a new npm release when the package version is incremented in `main` (the latter requires an automation type npm access token to be set with a repo secret `NPM_TOKEN`)

Want to simply get started, without the above bloat? [PostHog Plugin Starter Kit](https://github.com/PostHog/posthog-plugin-starter-kit) should be just the right fit for you – only the essentials needed to get off the ground.

## Installation

1. Open PostHog.
1. Head to the Plugins page from the sidebar.
1. Either install Hello World from Available plugins, or install from URL using this repository's URL.

## Questions?

### [Join our Slack community.](https://join.slack.com/t/posthogusers/shared_invite/enQtOTY0MzU5NjAwMDY3LTc2MWQ0OTZlNjhkODk3ZDI3NDVjMDE1YjgxY2I4ZjI4MzJhZmVmNjJkN2NmMGJmMzc2N2U3Yjc3ZjI5NGFlZDQ)

We're here to help you with anything PostHog!
