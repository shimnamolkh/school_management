// Copyright (c) 2022, shimna and contributors
// For license information, please see license.txt

frappe.ui.form.on('Class', {
	subject_link_field: function(frm) {
		frappe.call({
			method: "frappe.client.get",
			args: {
				doctype:"Subject",
				name:frm.doc.subject_link_field,

			},
			callback: (r) => {
				if (r.message) {
					frm.set_value('subject_id',r.message.subject_id)
				}
			}

		});
	},
	
	teacher_link_field: function(frm) {
		frappe.call({
			method: "frappe.client.get",
			args: {
				doctype:"Teacher",
				name:frm.doc.teacher_link_field,

			},
			callback: (r) => {
				if (r.message) {
					frm.set_value('teacher_id',r.message.teacher_id)
				}
			}

		});
	}
});
