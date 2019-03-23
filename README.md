# Webcomponents Playground

My playground and starter-project for experimenting with the latest web-standards like Webcomponents and Shadow-DOM.

## Usage

Assuming you have [browser-sync](https://browsersync.io/) installed, you can do:

    git clone https://github.com/38leinaD/webstandards.git
    cd webstandards
    browser-sync src -f src --cors --no-notify

## Details

The default config uses unpkg to import webcomponents which works nice for local dev with browser-sync.

Additionally, I played around with different approaches to import webcomponents and still having a browser-sync-like development approach.

I tried:

* webpack-dev-server
* polymer-cli
* owc-dev-server

You find the commands to have live-reloading in the package.json.

owc-dev-server seems the most lightweight alternative.

## Links

* lit-html: https://polymer.github.io/lit-html/guide
* LitElement: https://github.com/Polymer/lit-element
* CSS: https://bulma.io/documentation/components/