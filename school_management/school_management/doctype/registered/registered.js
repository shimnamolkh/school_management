// Copyright (c) 2022, shimna and contributors
// For license information, please see license.txt

		frappe.ui.form.on('Registered', {
			refresh: function(frm) {
				frm.add_custom_button('Get Library Membership', () => {
					frappe.new_doc('Library Membership', {
						library_member:frm.doc.name
		
					})
				})
			}
		});
		



