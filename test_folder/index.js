'use strict';
const { Tester } = require( "../accordion-list-populator/build/main/lib/Tester" );
const { AccordionListPopulator } = require( "../accordion-list-populator/build/main/lib/AccordionListPopulator" );
let processor = new AccordionListPopulator( ) 
console.log( "creating new tester..." );
const tester = new Tester([ "AccordionListPopulatorTest" ]);
console.log( "tester created." );
console.log( "starting test..." );
tester.start();
console.log( "end testing testable objects." );
