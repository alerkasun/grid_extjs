/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.GridTable.List', {
    extend: 'Ext.grid.Panel',
    viewModel: 'main',
    requires: [
        'MyApp.store.GridTable',
        'Ext.selection.Model',
    ],

    store: {
        type: 'GridTable'
    },
    id: 'testGrid',
    title: 'Simpsons',

    selModel: {
        selType: 'checkboxmodel',
        checkOnly : true,
        injectCheckbox : 0 ,
        showHeaderCheckbox :false,
        listeners: {
            select: 'onItemSelected',
        }
    },

    buttons: [{
        text: 'Select All',
        handler: function () {
            debugger;
            Ext.getCmp('testGrid').getSelectionModel().selectAll();
        }
    }, {
        text: 'Deselect All',
        handler: function () {
            Ext.getCmp('testGrid').getSelectionModel().deselectAll();
        }
    },{
        text:'Print Selected Recod',
        handler:function(){
            var selection = Ext.getCmp('testGrid').getSelection();
            if(selection.length){
                let name='';
                selection.map(item=>{
                    name+=item.get('name')+'<br>';
            });
                Ext.Msg.alert('Selected Record',name);
            }else{
                Ext.Msg.alert('Error','Please select record');
            }
        }
    }],


    columns: [
        {
            text: 'Name',
            dataIndex: 'name'
        },
        {
            text: 'Email',
            dataIndex: 'email',
            flex: 1
        },
        { text: 'Phone',
            dataIndex: 'phone' }
    ],

    onItemSelected: function (sender, record) {
        console.log(`you select ${record.data.name}`);
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    listeners: {
        select: 'onItemSelected'
        // beforeselect: 'onBeforeselectSelected'
    }
});


