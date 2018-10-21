import { html, LitElement } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

export default class AHello extends LitElement {

    static get properties() {
        return {
            name: { type: String }
        };
    }

    constructor() {
        super();
        this.name = undefined;
    }

    onKeyDown(event) {
        if (event.code === 'Enter') {
            this.name = event.target.value;
        }
    }

    style() {
        return html`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css">
        `
    }

    render() {
        return /*html*/html`
            ${this.style()}
            <div>A minimalist example how to use LitElement. Type your name and press Enter.</div>
            <input type='text' class="input" placeholder="Your name" @keydown='${this.onKeyDown}'/>
            <div>${this.name
                ? html`Hello ${this.name}!`
                : html`---`
            }</div>
        `;
    }
}

customElements.define('a-hello', AHello);