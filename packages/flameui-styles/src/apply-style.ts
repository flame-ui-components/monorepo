import * as CSS from 'csstype';

export type HTMLStyle = CSS.Properties<string | number>;

export const UnitlessProperties = new Set([
  'animation-iteration-count',
  'border-image-outset',
  'border-image-slice',
  'border-image-width',
  'box-flex',
  'box-flex-group',
  'box-ordinal-group',
  'column-count',
  'fill-opacity',
  'flex',
  'flex-grow',
  'flex-positive',
  'flex-shrink',
  'flex-negative',
  'font-weight',
  'line-clamp',
  'line-height',
  'opacity',
  'order',
  'orphans',
  'stop-opacity',
  'stroke-dashoffset',
  'stroke-opacity',
  'stroke-width',
  'tab-size',
  'widows',
  'z-index',
  'zoom',
]);

/**
 * Applies style properties to an HTML element.
 * 
 * @param element - The HTML element to apply styles to.
 * @param styles - An object containing the style properties to apply.
 * @param remove - If true, style properties with undefined or null values will be removed from element.style.
 * @returns The HTML element with applied styles.
 */
export default function applyStyle<Element extends HTMLElement>(
  element: Element,
  styles: HTMLStyle,
  remove = true
): Element {
  if (!element?.style) {
    return element;
  }

  Object.keys(styles).forEach((key) => {
    const value = styles[key as keyof HTMLStyle];

    try {
      if (value === undefined || value === null) {
        remove && element.style.removeProperty(key);
        return;
      }
  
      if (typeof value === "number") {
        if (!UnitlessProperties.has(key)) {
          element.style.setProperty(key, `${value}px`);
        } else {
          element.style.setProperty(key, String(value));
        }
        return;
      }
  
      element.style.setProperty(key, value);
    } catch {}
  });

  return element;
}