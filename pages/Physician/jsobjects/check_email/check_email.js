export default {
	checkEmail: async () => {
		try {
			await update_physician.run()
			closeModal('Modal4')
      get_physician.run()
		} catch (err){
			showAlert('The email is already exists')
			closeModal('Modal4')
		}
	}
}