// Copyright (c) 2022, shimna and contributors
// For license information, please see license.txt

frappe.ui.form.on('Subject', {
	refresh: function(frm) {
		if(frm.is_new()){
			frm.set_intro('Add New Subject to the Curriculum')
		}
		

	},
	on_submit: function(frm) {
		frappe.throw(" is added a new Subject")

	}
});
