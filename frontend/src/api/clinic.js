import axiosClient from "./axiosClient"

export const getNearbyClinics = async (lat, lng, maxDistance=5000) => {

  try {
    const res = await axiosClient.get('clinic/nearby/', {
      params: {lat, lng, maxDistance}
    })
    console.log(`response to nearby clinics: ${JSON.stringify(res.data)}`)
    return res.data.clinicsDistance; // should be an array

  } catch (error) {
    console.log(`An error occured... ${error}`)
    return error
  }

}

export const getAllClinics = async () => {
  try {
    const res = await axiosClient.get('clinic/');
    console.log(`response to getting all clinics: ${res.data}`)

    return res.data.clinics;

  } catch (error) {
    console.log(`An error occured getting all clinics: ${error}`)
    return error
  }
}