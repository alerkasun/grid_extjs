/**
 * Created by vsand on 21.03.2018.
 */
Ext.define('MyApp.view.firstTask.testTask', {
    extend: 'Ext.grid.Panel',
    requires: [
        'MyApp.view.firstTask.store',
        'Ext.selection.Model',
        'MyApp.view.firstTask.postsController',
],
    // store: 'postsStore',
    store: Ext.data.StoreManager.lookup('postsStore'),
    controller: 'posts',
    //
    width: 900,
    height: 900,
    title: 'Posts',
    /*
    Uncomment to give this component an xtype
    xtype: 'testtask',
    */

    columns: [
        {
            text: 'Id',
            flex: 0.1,
            dataIndex: 'id',
            editor: 'numberfield'
        }, {
            text: 'User Id',
            flex: 0.3,
            dataIndex: 'userId',
            editor: 'numberfield'
        }, {
            text: 'Title',
            flex: 0.3,
            dataIndex: 'title',
            editor: 'textfield'
        }, {
            text: 'Body',
            flex: 0.3,
            dataIndex: 'body',
            editor: 'textfield'
        }],

    selType: 'rowmodel',
    plugins: [{
        ptype: 'rowediting',
        clicksToEdit: 1
    }],

    tbar: [{
        text: 'Add Post',
        handler: 'onAddClick'
    }]
});

