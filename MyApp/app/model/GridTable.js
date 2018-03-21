/**
 * Created by vsand on 20.03.2018.
 */
Ext.define('MyApp.model.GridTable', {
    extend: 'MyApp.model.Base',
    storeId: 'simpsonsStore',
    fields:[ 'name', 'email', 'phone']

    // fields: [
    //     'checkbox', 'icon', 'boolean', 'date'
    // ]
});
