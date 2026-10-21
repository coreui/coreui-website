# Compliance

> The WCAG 2.2 success criteria each CoreUI for Bootstrap component is tested against, whether the component meets them on its own, and how they are checked.

Each component below is tested against the WCAG 2.2 success criteria that apply to it. The list comes from the configuration of our automated conformance suite, which runs on every change: it renders the component's documented examples in Chromium, checks the criteria with [axe-core](https://github.com/dequelabs/axe-core) where a rule exists, and some of the others with scripted keyboard and focus steps. A criterion the component meets fully or in part fails the build when it regresses, where axe-core or a scripted step checks it; the others are reviewed by hand.

Conformance is a property of a whole page. A component that meets a criterion keeps meeting it only with the markup and texts its documentation asks for, and criteria marked as your responsibility depend on how you use the component. See the [overview](https://coreui.io/bootstrap/docs/accessibility/overview/) for what the components take care of and what stays with your markup.

## Statuses

## Summary

Components missing from this list have not been added to the conformance suite yet. Their pages still describe their accessibility.

## Components
