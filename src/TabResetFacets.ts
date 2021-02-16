import { $$, Component, IComponentBindings, ComponentOptions, IAttributeChangedEventArg } from 'coveo-search-ui';
import { lazyDependentComponent } from '@coveops/turbo-core';

export interface ITabResetFacetsOptions { }

@lazyDependentComponent('Facet')
export class TabResetFacets extends Component {
    static ID = 'TabResetFacets';

    static options: ITabResetFacetsOptions = {};

    constructor(public element: HTMLElement, public options: ITabResetFacetsOptions, public bindings: IComponentBindings) {
        super(element, TabResetFacets.ID, bindings);

        this.options = ComponentOptions.initComponentOptions(element, TabResetFacets, options);

        // State Events
        let changeTabEvtName = this.getStateEventName(Coveo.QueryStateModel.eventTypes.changeOne + Coveo.QueryStateModel.attributesEnum.t);

        this.bind.onRootElement(changeTabEvtName, (args: IAttributeChangedEventArg) => this.handleTabStateChanged(args));
    }

    private getStateEventName(event: string) {
        return Coveo.QueryStateModel.ID + ':' + event;
    }

    private resetCoveoFacets() {
        const facets = [
            ...$$(document.body).findClass('CoveoFacet'),
            ...$$(document.body).findClass('CoveoDynamicFacet'),
            ...$$(document.body).findClass('CoveoSimpleFilter'),
        ]

        facets.forEach(facet => {
            let facetObj = Component.get(facet);

            // Manually handling inconsistent API between filters and facets.

            if (facetObj && 'Facet' === facetObj.type) {
                (<Coveo.Facet>facetObj).reset();
            }

            if (facetObj && 'DynamicFacet' === facetObj.type) {
                (<Coveo.DynamicFacet>facetObj).reset();
            }

            if (facetObj && 'SimpleFilter' === facetObj.type) {
                (<Coveo.SimpleFilter>facetObj).resetSimpleFilter();
            }
        });
    }

    private handleTabStateChanged(args: IAttributeChangedEventArg) {
        this.resetCoveoFacets();
    }
}