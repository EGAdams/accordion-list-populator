/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line import/order
import { AxiosResponse } from 'axios';
import { AccordionListPopulator } from './AccordionListPopulator';
import FreshToolBox from "./FreshToolBox";
import IQueryResultProcessor from './IQueryResultProcessor';
/**
 * @export
 * @class AccordionListPopulatorResultProcessor
 * @implements {IQueryResultProcessor}
 */
export class AccordionListPopulatorResultProcessor implements IQueryResultProcessor {
    calling_object: AccordionListPopulator;
    constructor( calling_objectArg: AccordionListPopulator ) { this.calling_object = calling_objectArg; }
    /**
     * @method processQueryResult
     * @description
     * The calling object has a list of strings in an array called accordion_list.  This method
     * adds a section string id to the accordion_list array if it is not already in the array.
     * @param {AxiosResponse< any >} queryResultToBeProcessed
     * @return { void }
     * @memberof AccordionListPopulatorResultProcessor
     */
    processQueryResult( queryResultToBeProcessed: AxiosResponse< any >): void {
        for ( const element of queryResultToBeProcessed.data ) {
            element.id = element.object_view_id;  // the fresh tool box will use this as the id.
            if ( !FreshToolBox.isInArray( element, this.calling_object.accordion_list )) {
                this.calling_object.accordion_list.push( element.object_view_id ); }}}
}
