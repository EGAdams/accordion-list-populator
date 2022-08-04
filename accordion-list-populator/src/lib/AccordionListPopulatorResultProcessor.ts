import IQueryResultProcessor from './IQueryResultProcessor';
/** @class AccordionListPopulatorResultProcessor */
export class AccordionListPopulatorResultProcessor implements IQueryResultProcessor {
    processQueryResult( queryResultToBeProcessed: unknown ): void {
        console.log( "processing: " + queryResultToBeProcessed );
    }
}
