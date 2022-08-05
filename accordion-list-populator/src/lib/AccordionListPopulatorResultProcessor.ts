// eslint-disable-next-line import/order
import { AxiosResponse } from 'axios';
import { AccordionListPopulator } from './AccordionListPopulator';
import IQueryResultProcessor from './IQueryResultProcessor';
/** @class AccordionListPopulatorResultProcessor */
export class AccordionListPopulatorResultProcessor implements IQueryResultProcessor {
    calling_object: AccordionListPopulator;
    constructor( calling_objectArg: AccordionListPopulator ) {
        this.calling_object = calling_objectArg;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    processQueryResult( queryResultToBeProcessed: AxiosResponse< any >): void {
        for (const element of queryResultToBeProcessed.data) {
            this.calling_object.accordion_list.push( element.object_view_id );
        }
        console.log( "done." );
    }
}
