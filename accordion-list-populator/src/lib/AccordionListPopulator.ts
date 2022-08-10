import { AccordionListPopulatorResultProcessor } from "./AccordionListPopulatorResultProcessor";
import OriginalQueryRunner from './OriginalQueryRunner';
/** @class AccordionListPopulator */
export class AccordionListPopulator {
    url: string;
    accordion_list: Array< string >;
    constructor( urlArg: string ) {
        this.url = urlArg;
        this.url = "https://mycustombusinessapp.com/wp-content/plugins/MCBA-Wordpress/runRawQuery.php";
        this.accordion_list = [];
        console.log( "initializing channel " + this.url + "..." ); }

    populate() {
        console.log( "constructing data source..." );
        const dataSource = new OriginalQueryRunner( this.url );
        dataSource.runQuery({
            query: "select object_view_id from monitored_objects",
            queryResultProcessor: new AccordionListPopulatorResultProcessor( this ),
            data: {},
        }); }

    getAccordionList(): Array< string > { return this.accordion_list; }
}
