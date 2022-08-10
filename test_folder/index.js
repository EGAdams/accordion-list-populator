'use strict';
const { Tester } = require( "./node_modules/list-populator/build/main/lib/Tester" );
console.log( "creating new tester..." );
const tester = new Tester([ "AccordionListPopulatorTest" ]);
console.log( "tester created." );
console.log( "starting test..." );
tester.start();
console.log( "end testing testable objects." );
