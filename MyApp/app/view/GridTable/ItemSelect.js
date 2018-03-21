/**
 * Created by vsand on 20.03.2018.
 */
Ext.define('MyApp.view.GridTable.ItemSelect', {
    extend: 'Ext.app.Controller',
    // alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            alert('yes');
        }else{
            alert('no');
        }
    },

    init: function() {

    }
});

