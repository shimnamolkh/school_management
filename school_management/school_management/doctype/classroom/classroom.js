// Copyright (c) 2022, shimna and contributors
// For license information, please see license.txt


// ###################################################################
// ########################################################################
// CLIENT SIDE Event

// ###################################################################
// ########################################################################
frappe.ui.form.on('Classroom', {


	// refresh: function(frm) {
	// 	frappe.msgprint("Hello World")

	// }
	// onload: function(frm) {
	// 	frappe.msgprint("on load")

	// }
	// validate: function(frm) {
	// 	frappe.throw("Hello validate event")

	// }
	// before_save: function(frm) {
	// 	frappe.msgprint("Hello World from before-save")

	// }
	// after_save: function(frm) {
	// 	frappe.msgprint("Hello World after save")

	// }
// 	DOC FIELD EVENTS
// 	###################################################################
// // ########################################################################

// enable:function(frm) {
// 	frappe.msgprint("hello world from enable event")

// }
	// capacity:function(frm) {
	// 	frappe.msgprint("hello world from capacity event")
	
	// }

	// ON SUBMITTABLE DOCTYPES
	// ###################################################################
// // #######################################################################

	// before_submit:function(frm) {
	// 	frappe.throw("hello world from before submit  event")
		
	// }
	// on_submit:function(frm) {
	// 	frappe.msgprint("hello world from on submit event")
		
	// }
	// after_cancel:function(frm) {
	// 	frappe.msgprint("hello world from cancel event event")
		
	// }

// 	FETCHING  DATA FIELD VALUE FEOM DOCUMENT
// 	##################################################################
// // // #######################################################################



// 	after_save: function(frm) {
// 		 	frappe.msgprint(__("THE CAPACITY IS {0}",[frm.doc.capacity]))
// 	}
	
	
	



// });
// CUSTOMISED MSG PRINTING
// ##################################################################
// after_save: function(frm) {
	
// 		 	frappe.msgprint({
// 				title:__("Notification"),
// 				indicator:'red',
// 				message:__("hello world")
// 			})
		
// 		}

// SETTING INTRO FOR A NEW Form 
// ##################################################################
	// refresh:function(frm){

	// 	if(frm.is_new()){
	// 		frm.set_intro('now add a new class room')


	// 	}
		
	// }
// SET  A DOCFIELD VALUE 
// ##################################################################
// ##################################################################
	
// 	validate:function(frm) {
// 		frm.set_value('full_name',frm.doc.first_name + " " + frm.doc.last_name)

// 	}

// });	
// SETTING DOC FIELD VALUES USING DIALOGUE BOX 
// #################################################################################
// #######################################################################
// 	refresh:function(frm){
// 		if(frm.is_new()){

// 			let d = new frappe.ui.Dialog({
// 				title:'Enter the details',
// 				fields:[{
// 					label:'Capacity',
// 					fieldname:'capacity',
// 					fieldtype:'Int'
// 				},
		
// 				{
// 					label:'Classroom Id',
// 					fieldname:'classroom_id',
// 					fieldtype:'Int'
// 				},
		
// 				{
// 					label:'Type',
// 					fieldname:'type',
// 					fieldtype:'Select'
				
		
// 				}],
// 				primary_action_label:'submit',
// 				primary_action(values){
// 					frm.set_value('capacity',values.capacity)
// 					frm.set_value('classroom_id',values.classroom_id)
// 					frm.set_value('type',values.type)
// 				d.hide()
// 			}
// 		});
// 		d.show();
		
		
	
	
// 		}
		

// 	}


		









// });






// NORMAL BUTTON
// ##################################################################
// ########################################################
		
		// refresh:function(frm) {

		// 	frm.add_custom_button('my button', () =>{
		// 		frappe.msgprint(__('you clicked my button !!'));
	
		// 	})
	

		// }
// DROPE DOWN BUTTON INCLUDES ONCLICK NEW FILE EVENT
// ###########################
// refresh: function(frm) {
// 	frm.add_custom_button(__('Student'), function(){
// 		frappe.new_doc('Student', {
// 			Student: frm.doc.name
// 		})
		
// 	}, __("Get Access TO"));

// 	frm.add_custom_button(__('Teacher'), function(){
// 		frappe.new_doc('Teacher', {
// 			Teacher: frm.doc.name
// 		})
		
// 	}, __("Get Access TO"));

// 	frm.add_custom_button(__('Class'), function(){
// 		frappe.new_doc('Class', {
// 			Class: frm.doc.name
// 		})
		
// 	}, __("Get Access TO"));

// 	frm.add_custom_button(__('Fee'), function(){
// 		frappe.new_doc('Fee Structure', {
// 			Fee: frm.doc.name
// 		})
		
// 	}, __("Get Access TO"));

// 	frm.add_custom_button(__('Salary'), function(){
// 		frappe.new_doc('Salary Package', {
// 			Salary: frm.doc.name
// 		})
		
// 	}, __("Get Access TO"));
// }

// TRIGGERING
// ###################
// ####################


// refresh:function(frm){
// 	if(!frm.is_new()){
// 		frm.trigger('enable');


// 	}

// },

// enable:function(frm){
	
// 	frappe.msgprint(__('the event is triggered'))

// }






// frappe.ui.form.on('Library Membership', {
// 	refresh: function(frm) {
// 		frm.add_custom_button('create Transaction', () => {
// 			frappe.new_doc('Library Transaction', {
// 				library_member:frm.doc.name

// 			})
// 		})
// 	}
// });





});