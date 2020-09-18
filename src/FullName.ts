import { useState, useEffect } from "haunted";
import { css, html } from 'lit-element';
import { componentWithHooks } from './with-hooks';

const styles = css`
  :host {
    background: gold;
  }
  .container {
    border: none;
    display: grid;
    grid-template-columns: 20% 80%;
  }

  input {
    border: 1px solid #e5e5e5;
    padding: 6px 10px;
    margin-bottom: 1em;
  }
`;

function FullName(el) {
  const [first, setFirst] = useState("Happy");
  const [last, setLast] = useState("Halloween 🎃");

  useEffect(() => {
    const event = new CustomEvent("change", {
      detail: `${first} ${last}`,
    });
    this.dispatchEvent(event);
  }, [first, last]);

  return html`
    <div class="container">
      <label for="first-name">First</label>
      <input
        value=${first}
        @keyup=${(ev) => setFirst(ev.target.value)}
        type="text"
        name="first"
        id="first-name"
      />

      <label for="last-name">Last</label>
      <input
        value=${last}
        @keyup=${(ev) => setLast(ev.target.value)}
        type="text"
        name="last"
        id="last-name"
      />
    </div>
  `;
}

customElements.define("full-name", componentWithHooks({
  renderer: FullName,
  props: {
    properties: {},
    styles,
  },
}));
