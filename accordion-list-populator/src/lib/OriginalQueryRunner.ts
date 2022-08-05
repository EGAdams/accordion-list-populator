/* eslint-disable import/order */
import axios from "axios";
import IApiArgs from "./IApiArgs";
import IQueryRunner from "./IQueryRunner";
import ITestable from './ITestable';

/**
 * @description
 *
 * Sends the results of a query to the query result processor pointed to by the api argument object.
 *
 *  In order to send the query, we use axios to establish communication.
 *  An object of this class uses axios to fire off the query that is included in the passed in api arguments.
 *  What is done with this data is determined by the queryResultProcessor that is sent in the api arguments.
 *
 *  This is begging to be turned into a more generic class or interface.  The only thing specific about
 *  this class is the fact that it is using the jewelry machine for communication.
 *
 * @export
 * @class OriginalQueryRunner
 * @implements {IQueryRunner}
 * @implements {ITestable}
 */
export default class OriginalQueryRunner implements IQueryRunner, ITestable {
    url = "http://mycustombusinessapp.com/wp-content/plugins/MCBA-Wordpress/runQuery.php";
    constructor() { console.log( 'constructing OriginalQueryRunner object...' ); }
    /**
     *
     *
     * @param {IApiArgs} apiArguments
     * @return {*}  {Promise<void>}
     * @memberof OriginalQueryRunner
     */
    async runQuery ( apiArguments: IApiArgs ): Promise< void > {
        const queryResults = await axios.get( this.url, { params: { sql: apiArguments.query }});
        apiArguments.queryResultProcessor.processQueryResult( queryResults );
    }

    testMe (): void { console.log( 'testing OriginalQueryRunner...' ); }
}

if ( typeof process != "undefined" ) {  // node runner.js testMe
    const theArguments = process.argv.slice( 2 );
    if ( theArguments.includes( "testMe" ) ) {
        const runner = new OriginalQueryRunner();
        runner.testMe();
    }
}
