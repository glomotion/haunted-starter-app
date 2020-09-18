import { State } from 'haunted';
import { LitElement } from 'lit-element';

const defer = Promise.resolve().then.bind(Promise.resolve());

export type ChangePropertyValues = Map<PropertyKey, unknown>;

export class HauntedLitElement extends LitElement {
  constructor() {
    super();
    this.haunted = new State(() => this.requestUpdate(), this);
  }

  haunted: any;

  update(changes: ChangePropertyValues) {
    this.haunted.run(() => {
      super.update(changes);
    });
  }

  updated(changes: ChangePropertyValues) {
    super.updated(changes);
    this.haunted.runLayoutEffects();
    defer(() => this.haunted.runEffects());
  }

  disconnectedCallback() {
    this.haunted.teardown();
    super.disconnectedCallback();
  }
}
