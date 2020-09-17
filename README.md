# TabResetFacets

Resets the state of the search interface when a tab is selected.

The component will find all [`Facet`](https://coveo.github.io/search-ui/components/facet.html) and [`DynamicFacet`](https://coveo.github.io/search-ui/components/dynamicfacet.html) components on the page and trigger their respective [`reset`](https://coveo.github.io/search-ui/components/facet.html#reset) method.

Disclaimer: This component was built by the community at large and is not an official Coveo JSUI Component. Use this component at your own risk.

## Getting Started

1. Install the component into your project.

```
npm i @coveops/tab-reset-facets
```

2. Use the Component or extend it

Typescript:

```javascript
import { TabResetFacets, ITabResetFacetsOptions } from '@coveops/tab-reset-facets';
```

Javascript

```javascript
const TabResetFacets = require('@coveops/tab-reset-facets').TabResetFacets;
```

3. You can also expose the component alongside other components being built in your project.

```javascript
export * from '@coveops/tab-reset-facets'
```

4. Or for quick testing, you can add the script from unpkg

```html
<script src="https://unpkg.com/@coveops/tab-reset-facets@latest/dist/index.min.js"></script>
```

> Disclaimer: Unpkg should be used for testing but not for production.

5. Include the component in your template as follows:

Place the component after the `CoveoSearchInterface` initialization.

```html
<div class="CoveoTabResetFacets"></div>
```

Example:

```html
 <div id="search" class="CoveoSearchInterface" data-enable-history="true">
    <div class="CoveoTabResetFacets"></div>
```

## Extending

Extending the component can be done as follows:

```javascript
import { TabResetFacets, ITabResetFacetsOptions } from "@coveops/tab-reset-facets";

export interface IExtendedTabResetFacetsOptions extends ITabResetFacetsOptions {}

export class ExtendedTabResetFacets extends TabResetFacets {}
```

## Contribute

1. Clone the project
2. Copy `.env.dist` to `.env` and update the COVEO_ORG_ID and COVEO_TOKEN fields in the `.env` file to use your Coveo credentials and SERVER_PORT to configure the port of the sandbox - it will use 8080 by default.
3. Build the code base: `npm run build`
4. Serve the sandbox for live development `npm run serve`
