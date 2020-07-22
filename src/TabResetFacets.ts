import { $$, Component, IComponentBindings, ComponentOptions, IAttributeChangedEventArg, Facet, QueryStateModel, DynamicFacet } from 'coveo-search-ui';
import { lazyComponent } from '@coveops/turbo-core';

export interface ITabResetFacetsOptions { }

@lazyComponent
export class TabResetFacets extends Component {
    static ID = 'TabResetFacets';
    static options: ITabResetFacetsOptions = {};

    constructor(public element: HTMLElement, public options: ITabResetFacetsOptions, public bindings: IComponentBindings) {
        super(element, TabResetFacets.ID, bindings);
        this.options = ComponentOptions.initComponentOptions(element, TabResetFacets, options);

        // State Events
        let changeTabEvtName = this.getStateEventName(QueryStateModel.eventTypes.changeOne + QueryStateModel.attributesEnum.t);

        this.bind.onRootElement(changeTabEvtName, (args: IAttributeChangedEventArg) => this.handleTabStateChanged(args));
    }

    private getStateEventName(event: string) {
        return QueryStateModel.ID + ':' + event;
    }

    private resetCoveoFacets() {
        const facets = [
            ...$$(document.body).findClass(`Coveo${DynamicFacet.ID}`),
            ...$$(document.body).findClass(`Coveo${Facet.ID}`),
        ]

        facets.forEach(facet => {
            // The DynamicFacet and Facet don't directly share the same interface so casting for basic.
            let facetObj = <Facet>Component.get(facet);

            if (facetObj) {
                facetObj.reset();
            }
        });
    }

    private handleTabStateChanged(args: IAttributeChangedEventArg) {
        this.resetCoveoFacets();
    }
}