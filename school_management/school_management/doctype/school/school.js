// Copyright (c) 2022, shimna and contributors
// For license information, please see license.txt

frappe.ui.form.on('School', {
	refresh: function(frm) {
		frm.add_custom_button(__('Student'), function(){
			frappe.new_doc('Student', {
				Student: frm.doc.name
			})
			
		}, __("Get Access TO"));

		frm.add_custom_button(__('Teacher'), function(){
			frappe.new_doc('Teacher', {
				Teacher: frm.doc.name
			})
			
		}, __("Get Access TO"));

		frm.add_custom_button(__('Class'), function(){
			frappe.new_doc('Class', {
				Class: frm.doc.name
			})
			
		}, __("Get Access TO"));

		frm.add_custom_button(__('Fee'), function(){
			frappe.new_doc('Fee Structure', {
				Fee: frm.doc.name
			})
			
		}, __("Get Access TO"));

		frm.add_custom_button(__('Salary'), function(){
			frappe.new_doc('Salary Package', {
				Salary: frm.doc.name
			})
			
		}, __("Get Access TO"));
	}
});
