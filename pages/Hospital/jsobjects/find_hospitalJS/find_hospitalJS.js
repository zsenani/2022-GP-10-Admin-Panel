export default {
	findHospital: async () => {
		const result1 = await find_hospitalID.run() 
		const result2 = await find_hospital.run()
		if(result1.length == 0 && result2.length == 0){
			await add_hospital.run()
			closeModal('add_hospital_modal')
      get_hospital.run()
		}else{
			showAlert('The hospital is already exists')
		}
	}
}

