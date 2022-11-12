# Copyright (c) 2022, shimna and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Teacher(Document):
	pass
	# def before_save(self):
	# 	self.full_name = f'{self.first_name} {self.last_name or ""}'

	# def validate(self):
	# 	self.get_document()


	# def get_document(self):
	# 	fetch = frappe.get_doc('Salary Package',self.position)

	
	# 	frappe.msgprint(("employee level is {0}").format(fetch.position))
	# def validate(self):
	# 	self.get_value()

	# def get_value(self):
	# 	saalary = frappe.db.get_value('Salary Package','Principal',['salary'])
	# 	frappe.msgprint(("employee salary is {0}").format(saalary.salary))

	



