# @flameui/styles

## Installation

```sh
npm i -g @flameui/styles
```

OR

```sh
yarn add @flameui/styles
```

## Functions

```ts
function applyStyle<Element extends HTMLElement>(element: Element, styles: HTMLStyle, remove = true): Element
```

This function applies the style properties specified in the `styles` object to `element.style`.

If the `remove` parameter is set to `true`, style properties with `undefined` or `null` values will be removed from `element.style`.
