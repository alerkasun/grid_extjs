/**
 * Created by vsand on 21.03.2018.
 */
Ext.define('MyApp.view.GridTable.myController', {
    // extend: 'Ext.app.ViewController',
    // alias: 'controller.my',


    extend: 'Ext.app.ViewController',
    alias: 'controller.myController',

    onAddClick: function () {
        var view = this.getView(),
            rec = new MyApp.model.Post({
                id: 0,
                userId: 0,
                title: 'title',
                body: 'text'
            });

        view.store.insert(0, rec);
        view.getView().focusNode(rec);
        view.findPlugin('rowediting').startEdit(rec, 0);
    }



    /**
     * Called when the view is created
     */
    // init: function() {
    //
    // }
});