# Copyright (c) 2022, shimna and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator

class School(WebsiteGenerator):
	def validate(self):
		self.sql()
	def sql(self):
		data = frappe.db.sql("""
                                SELECT
                                    full_name
                                    
                                FROM
                                    `tabTeacher`
                                WHERE
                                    on_duty = 1
                            """, as_dict=1)
		for d in data:
			frappe.msgprint(("The Teachers on duty {0}").format(d.full_name))



