dbt_show_current_db
=======================

This module extend web backend and allow developer to view which database in use by create a widget next to debug icon.

Usage
=====

Functionality:
--------------

* Install module;
* Current database will show in the top right
* You can click on module widget to toggle between debug / non-debug mode

Config:
-------
* Add to app config file attribute: is_production_instance (if this config attribute not available, widget will alway active)
* Set attribute = True: turn off widget
* Set attribute = False: turn on widget
