# Compliance

> How the accessibility of CoreUI for React components is checked, and where each component documents its own.

The automated conformance suite runs on the vanilla JavaScript components. On every change it renders their documented examples in Chromium, checks the WCAG 2.2 success criteria each component claims with [axe-core](https://github.com/dequelabs/axe-core) where a rule exists, and with scripted keyboard and focus steps where it does not. The React components follow the markup, roles and keyboard models of the vanilla ones, but the suite does not run on them yet, so this page lists no results for them.

Conformance is a property of a whole page. A component keeps its accessibility only with the markup and texts its documentation asks for. See the [overview](https://coreui.io/react/docs/accessibility/overview/) for what the components take care of and what stays with your markup.

## Components

Each of these components documents its roles, states, keyboard and what your markup has to add:
