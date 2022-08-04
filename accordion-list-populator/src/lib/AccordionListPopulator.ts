import { AccordionListPopulatorResultProcessor } from "./AccordionListPopulatorResultProcessor";
import IApiArgs from "./IApiArgs";
import OriginalQueryRunner from './OriginalQueryRunner';
/** @class AccordionListPopulator */
export class AccordionListPopulator {
    url: string;
    constructor( url: string ) {
        this.url = "http://mycustombusinessapp.com/wp-content/plugins/MCBA-Wordpress/runQuery.php";
        console.log( "initializing channel " + url + "..." );
    }
    populate( ) {
        const dataSource = new OriginalQueryRunner();
        dataSource.runQuery( {
            query: "select object_view_id from monitored_objects;",
            queryResultProcessor: new AccordionListPopulatorResultProcessor(),
            data: {},
            thisObject: this
        });
    }

    logObjectsLoaded( event: JQuery.Event, apiArgs: IApiArgs ) {
        console.log( "logObjectsLoaded " + event + " " + apiArgs);
        console.log( "examine output." );
    }
}


