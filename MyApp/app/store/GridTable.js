/**
 * Created by vsand on 20.03.2018.
 */
Ext.define('MyApp.store.GridTable', {
    extend: 'Ext.data.Store',

    alias: 'store.GridTable',

    model: 'MyApp.model.GridTable',

    // data: { items: [
    //         { checkbox: 'Yes', icon: "1", boolean: "Yes", date: '2018-02-02' },
    //         { checkbox: 'No',  icon: "2", boolean: "No",  date: '2017-12-02' },
    //         { checkbox: 'Yes', icon: "3", boolean: "No",  date: '2017-06-02' },
    //         { checkbox: 'Yes', icon: "", boolean: "No",  date: '2016-11-11' },
    //     ]},

    // data: [
    //     { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
    //     { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
    //     { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
    //     { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
    // ],

    // proxy: {
    //     type: 'memory',
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'items'
    //     }
    // }

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
