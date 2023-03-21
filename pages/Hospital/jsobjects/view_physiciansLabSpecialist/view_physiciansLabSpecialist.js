export default {
	viewPhysiciansLabSpecialist: async () => {
		
		showModal('ModalP')
		await get_physician.run()
		await get_physicianDetails.run()
		await get_labSpecialist.run()
		await get_labSpecialistDetails.run()
		
	}
}