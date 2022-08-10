import { AccordionListPopulator } from "./AccordionListPopulator";
import ITestable from "./ITestable";

/** @class AccordionListPopulatorTest */
export class AccordionListPopulatorTest implements ITestable {
    populator: AccordionListPopulator;
    constructor() {
        const url      = "";
        this.populator = new AccordionListPopulator( url ); }

    testMe(): void { this.populator.populate(); }
}
