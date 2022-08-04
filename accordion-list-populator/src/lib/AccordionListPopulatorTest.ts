import { AccordionListPopulator } from "./AccordionListPopulator";
import ITestable from "./ITestable";

/** @class AccordionListPopulatorTest */
export class AccordionListPopulatorTest implements ITestable {
    populator: AccordionListPopulator;
    constructor() {
        this.populator = new AccordionListPopulator( "http://mycustombusinessapp.com/wp-content/plugins/MCBA-Wordpress/runQuery.php" );
    }

    testMe(): void {
        this.populator.populate();
    }
}
