export default {
	checkEmail: async () => {
		try {
			await update_patient.run()
			closeModal('Modal4')
      get_patient.run()
		} catch (err){
			showAlert('The email is already exists')
			closeModal('Modal4')
		}
	}
}