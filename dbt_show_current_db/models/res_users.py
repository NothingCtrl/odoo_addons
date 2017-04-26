# -*- encoding: utf-8 -*-
from openerp.http import request
from openerp import models, fields, api


class ResUsers(models.Model):
    _inherit = 'res.users'

    # Show current DB in debug mode
    def show_current_database(self, cr, uid,  *args, **kwargs):
        return request.debug and cr.dbname or ''
