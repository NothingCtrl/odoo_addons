# -*- coding: utf-8 -*-
##############################################################################
#
#   Show Current Database
#    @author NothingCtrl (http://camratus.com)
##############################################################################
{
    'name': "Show Current Database",

    'summary': """
        When active the developer mode, this module show current database in use next to debug icon""",

    'description': """
Show Current Database
==========================================
    """,

    'author': "NothingCtrl",
    'website': "http://camratus.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/master/openerp/addons/base/module/module_data.xml
    # for the full list
    'category': 'Web',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['web'],

    'data': [
        'views/res_users_view.xml',
    ],

    'qweb': [
        'static/src/xml/show_current_db.xml',
    ],
}