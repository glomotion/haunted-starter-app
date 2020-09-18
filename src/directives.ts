import { directive } from "lit-html";

// @NOTE: add a custom "ref" directive for use with lit-html
export const domRef = directive((refInstance): any => (part: any) => {
  refInstance.current = part.element;
});
