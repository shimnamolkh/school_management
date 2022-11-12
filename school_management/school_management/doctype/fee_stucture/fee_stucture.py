# Copyright (c) 2022, shimna and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class FeeStucture(Document):
        pass
    # def validate(self):
    #     self.sql()


    # def sql(self):

    #     data = frappe.db.sql("""
    #                             SELECT
    #                                 first_name
                                    
    #                             FROM
    #                                 `tabStudent`
    #                             WHERE
    #                                 school_team = 'Jupiter'
    #                         """, as_dict=1)
    #     for d in data:
    #         frappe.msgprint(("The first name of students in Jupiter team is {0}").format(d.first_name))





