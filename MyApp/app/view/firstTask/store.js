/**
 * Created by vsand on 21.03.2018.
 */
Ext.define('MyApp.view.firstTask.store', {
    extend: 'Ext.data.Store',

    model: 'MyApp.view.firstTask.post',
    storeId: 'postsStore',
    autoLoad: true,
    autoSync: true,
    loading: true,

    proxy: {
        type: 'ajax',

        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'PUT',
            destroy: 'DELETE'
        },

        api: {
            create: 'https://jsonplaceholder.typicode.com/posts',
            read: 'https://jsonplaceholder.typicode.com/posts',
            update: 'https://jsonplaceholder.typicode.com/posts',
            destroy: 'https://jsonplaceholder.typicode.com/posts'
        },

        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total',
            successProperty: 'success'
        },

        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            rootProperty: 'data'
        }
    }
});