import axiosClient from "./axiosClient"

export const getNearbyClinics = async (lat, lng) => {
  const res = await axiosClient.get('/clinics/nearest', {
    params: {lat, lng}
  })

  return res.data.nearbyClinics; // should be an array
}