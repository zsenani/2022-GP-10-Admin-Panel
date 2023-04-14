export default {
	checkEmail: async () => {
		try {
			await update_labSpecialist.run()
			closeModal('Modal4')
      get_labSpecialist.run()
		} catch (err){
			showAlert('The email is already exists')
			closeModal('Modal4')
		}
	}
}