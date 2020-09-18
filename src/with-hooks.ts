import { HauntedLitElement } from './haunted-lit-element';

// @NOTE: the code below is derived from:
// https://github.com/jdin/haunted-lit-element/blob/master/src/component.js
export function componentWithHooks({
  renderer,
  baseClass = HauntedLitElement,
  props = {},
}: {
  renderer: any,
  baseClass?: any,
  props?: {},
}) {
  const outputClass = class extends baseClass {
    render() {
      return renderer.call(this, this);
    }
  };
  Object.entries(props).forEach(([key, val]) => {
    return outputClass[key] = val;
  });
  return outputClass as any;
}
