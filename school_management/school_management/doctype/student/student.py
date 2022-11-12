# Copyright (c) 2022, shimna and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from dateutil import relativedelta
from datetime import datetime

class Student(Document):

	def validate(self):
		self.create_paid()
		self.before_save
		self.create_pending()
	
	def before_save(self):
      		  self.full_name = f'{self.first_name} {self.last_name or ""}'
	@frappe.whitelist()
	def get_age(self):
		if(self.dob):
			today = datetime.now()
			dob = datetime.strptime(self.dob, '%Y-%m-%d')
			t = relativedelta.relativedelta(today, dob)
			return t.years
	
	# def validate(self):
	# 	self.get_document()

	# def get_document(self):
	# 	doc = frappe.get_doc('Fee stucture', self.year_group)
	# 	frappe.msgprint(__("the  fee structure for year {0}").format(doc.total))
	# #def set_document(self):

	# def on_update(self):
	# 	frappe.msgprint("Hello Frappe")
	


	def create_paid(self):
		if self.payment == 'Paid' and not self.student_id:
			doc = frappe.get_doc({
				"doctype": "Registered",
				"reg_name": self.full_name,
				"team":self.school_team,
				"date_of_birth":self.dob,
				"fee":self.total_fee,
			})
			doc.insert(ignore_permissions=True, ignore_mandatory=True)
			self.student_id = doc.name


	def create_pending(self):
		if self.payment == 'Pending' and not self.student_id:
			doc = frappe.get_doc({
				"doctype": "Waiting",
				"reg_name": self.full_name,
				"team":self.school_team,
				"date_of_birth":self.dob,
				"fee":self.total_fee,
			})
			doc.insert(ignore_permissions=True, ignore_mandatory=True)
			self.student_id = doc.name