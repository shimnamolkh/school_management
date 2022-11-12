// Copyright (c) 2022, shimna and contributors
// For license information, please see license.txt

frappe.ui.form.on('Fee Stucture', {
	before_save: function(frm) {
		frm.set_value('total',frm.doc.admission_fee  +frm.doc.causion_deposit + frm.doc.tution_fee + frm.doc.lab_fee)

	}
});

