// Copyright (c) 2022, shimna and contributors
// For license information, please see license.txt

frappe.ui.form.on('Teacher', {
	salary_package_link_field: function(frm) {
		frappe.call({
			method: "frappe.client.get",
			args: {
				doctype:"Salary Package",
				name:frm.doc.salary_package_link_field,

			},
			callback: (r) => {
				if (r.message) {
					frm.set_value('position',r.message.eposition)
					frm.set_value('saalary',r.message.salary)
				}
			}

		});
	}
		
	
});