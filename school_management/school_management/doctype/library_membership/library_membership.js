// Copyright (c) 2022, shimna and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Membership', {
	refresh: function(frm) {
		frm.add_custom_button('create Transaction', () => {
			frappe.new_doc('Library Transaction', {
				library_member:frm.doc.name

			})
		})
	}
});
