// Copyright (c) 2022, shimna and contributors
// For license information, please see license.txt

frappe.ui.form.on('Student', {
	// refresh: function(frm) {

	// }

	dob: function (frm) {
		frappe.call({
		  doc:frm.doc,
		  method:'get_age',
		  callback:function(r){
			let doc = frm.doc
			doc.age = r.message
			frm.refresh_field('age')
		  }
		})
	},


    // refresh: function(frm) {
		
	// 	if(frm.is_new()){
	// 		frm.trigger('make payment');
	// 	}
	// },
	// make_payment:function(frm){
		
	// 	frappe.msgprint(__("payment success..!!  click for student Id"))


	// }
	

		

	// 		 })
	// 	})
		

	//  }
	



	// refresh:function(frm){

	// 	if(frm.is_new()){
	// 		let d = new frappe.ui.Dialog({
	// 			titile:'Payment Successful',
	// 			fields:[{
	// 				label:'First Name',
	// 				fieldname:'first_name',
	// 				fieldtype:'Data'
	// 			},
	// 			{
	// 				label:'Age',
	// 				fieldname:'age',
	// 				fieldtype:'int'
				
	// 			}],
	// 			primary_action_label:'Submit',
	// 			primary_action(values){
	// 				frm.set_value('first_name',values.first_name)
	// 				frm.set_value('age',values.age)
	// 			d.hide()
	
	// 		}
	// 	})
	// 	d.show();
	
	// 	}
	

	// }
	// fee_stucture_link: function(frm) {
	// 	frappe.call({
	// 		method: "frappe.client.get",
	// 		args: {
	// 			doctype:"Fee Stucture",
	// 			name:frm.doc.fee_stucture_link

	// 		},
	// 		callback: (r) => {
	// 			if (r.message) {
	// 				frm.set_value('year',r.message.fee_stucture_link_year_group)
					
	// 			}
	// 		}

	// 	});
	// },
	fee_stucture_link_field: function(frm) {
		frappe.call({
			method: "frappe.client.get",
			args: {
				doctype:"Fee Stucture",
				name:frm.doc.fee_stucture_link_field,

			},
			callback: (r) => {
				if (r.message) {
					frm.set_value('total_fee',r.message.total)
					frm.set_value('year',r.message.year_group)
				}
			}

		});
	}

	
});