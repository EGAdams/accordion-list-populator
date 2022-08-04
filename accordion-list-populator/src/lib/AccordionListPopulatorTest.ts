import { AccordionListPopulator } from "./AccordionListPopulator";
import ITestable from "./ITestable";

/** @class AccordionListPopulatorTest */
export class AccordionListPopulatorTest implements ITestable {
    populator: AccordionListPopulator;
    url:       "http://mycustombusinessapp.com/wp-content/plugins/MCBA-Wordpress/runQuery.php";
    constructor() { this.populator = new AccordionListPopulator( this.url ); }

    testMe(): void { this.populator.populate(); }
}
