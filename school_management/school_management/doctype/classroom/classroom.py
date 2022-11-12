# Copyright (c) 2022, shimna and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Classroom(Document):
		pass
	# def validate(self):
	# 	frappe.msgprint("hello from validate ")
	# def before_save(self):
	# 	frappe.throw("hello frappe from before save")

	# def before_insert(self):
	# 	frappe.throw("hello frappe from before insert")
	# def after_insert(self):
	# 	frappe.throw("hello frappe from after insert")
		
	# def on_update(self):
	# 	frappe.msgprint("hello frappe from on update")
		
	# def before_submit(self):
	# 	frappe.msgprint("hello frappe from before dsubmit event")
			
	# def on_submit(self):
	# 	frappe.msgprint("hello frappe from on submit event")
			

	# def on_cancel(self):
	# 	frappe.msgprint("hello frappe from on cancel event")
			
	# def after_delete(self):
	# 	frappe.msgprint("hello frappe from after delete event")
		

		# GET VALUE FRO DOCTYPE DOCUMENTS AND FIELD NAMEaccessing a single field value

		# def validate(self):
		# 	self.get_value()

		# def get_value(self):
		# 	classroom_id = frappe.db.get_value('Classroom','971e44e40c',['classroom_id'])
		# 	frappe.msgprint(("The class romm id is {0}").format(classroom_id))

		# SET A VALUE IN A FIELD NAME TO update or change value

		# def validate(self):
		#  	self.set_value()

		# def set_value(self):
		#  	frappe.db.set_value('Student','AAMIL','last_name','shijas')
		#  	# frappe.msgprint(("The class romm id is {0}").format(classroom_id))

		# FETCH ENTIRE DOCUMENT:FRAPPE.GET_DOC
#########################################################


		# def validate(self):
		# 	self.get_document()


		# def get_document(self):
		# 	doc = frappe.get_doc('Subject',self.subject_link)
		# 	frappe.msgprint(("The requirements is {0}").format(doc.requirements))


# CREATE NEW DOCUMENT

################################

		# def validate(self):
		# 	self.new_document()


		# def new_document(self):
		# 	doc = frappe.new_doc('Subject')
		# 	doc.subject_id = 2150
		# 	doc.max_capacity = 12
		# 	doc.requirements = 'Book'
		# 	doc.save()
		# 	doc.submit()


# DELETE A DOCUMENT
# #######################


		# def validate(self):
		# 	frappe.delete_doc('Subject',215)


# DOCUMENT METHODS
##################

# doc.insert


# def validate(self):
# 	self.new_document()


# def new_document(self):
# 	doc = frappe.new_doc('Student')
# 	doc.first_name = 'Anisha'
# 	doc.last_name = 'vasu'
# 	# doc.on_duty = True
# 	doc.insert()

#  doc.save

# def validate(self):
# 	self.save_document()


# def save_document(self):
# 	doc = frappe.new_doc('Student')
# 	doc.first_name = 'Anisha'
# 	doc.last_name = 'vasu'
# 	# doc.on_duty = True
# 	doc.save()


# doc.delete


# def validate(self):
# 	self.delete_document()

# def delete_document(self):
# 	doc = frappe.get_doc('Student', 'SEENA')
# 	doc.delete()


# doc.db_set



# LIST OF ENTIRE DOCUMENTS
# ##############################

def validate(self):
	self.get_list()



def get_list(self):
	doc = frappe.db.get_list('Teacher',
			filters={
				'first_name': 'DEVI'

			},
			fields=['full_name']

			)

	for d in doc:
		frappe.msgprint(_("the full name is {0}").format(d.full_name))


# CHECK WHETHER DATA BASE EXISTS
# FRAPPE.DB.EXISTS

# def validate(self):
# 	if frappe.db.exists('Student', 'AAMIL'):
# 		frappe.msgprint(_("The document is exists in data base"))
# 	else:
# 		frappe.msgprint(_("the document is not exists"))