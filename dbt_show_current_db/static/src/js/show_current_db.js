odoo.define('web.dbt_show_current_db',function (require) {

    "use strict";

    var Widget = require('web.Widget');
    var SystrayMenu = require('web.SystrayMenu');
    var web_client = require('web.web_client');
    var Model = require('web.Model');

    /***************************************************************************
    Create an new 'SwitchCompanyWidget' widget that allow users to switch
    from a company to another more easily.
    ***************************************************************************/
    var DBTShowCurrentDB = Widget.extend({

        template:'dbt_show_current_db.DBInfoWidget',

        /***********************************************************************
        Overload section
        ***********************************************************************/

        /**
         * Overload 'init' function to initialize the values of the widget.
         */
        init: function(parent){
            this._super(parent);
            this.dbt_current_db = '';
        },

        /**
         * Overload 'start' function to load datas from DB.
         */
        start: function () {
            this._super();
            this._load_data();
        },

        /***********************************************************************
        Custom section
        ***********************************************************************/

        /**
         * helper function to load data from the server
         */
        _fetch: function(model, fields, domain, ctx){
            return new Model(model).query(fields).filter(domain).context(ctx).all();
        },

        /**
         * - Load data of the companies allowed to the current users;
         * - Launch the rendering of the current widget;
         */
        _load_data: function(){
            var self = this;
            // Request for current users information
            var Users = new Model('res.users');
            Users.call('show_current_database').then(function (result) {
                self.dbt_current_db = result;
                self.renderElement();
            })
        },

    });

SystrayMenu.Items.push(DBTShowCurrentDB);

});
