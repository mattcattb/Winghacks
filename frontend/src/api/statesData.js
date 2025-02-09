import axiosClient from "./axiosClient"


export const getAllStatesData = async () => {
  try {
    const res = await axiosClient.get('stateData/');
    console.log(`Response to get all states: ${JSON.stringify(res)}`)
    return res.data.statesData;

  } catch (error) {
    console.log(`Error getting all states data: ${error}`)
  }

}


export const getStateData = async (abbr) => {
  try {
    const res = await axiosClient.get('stateData/', {
      params: {abbr: abbr}
    })
    return res.data.stateData
  } catch (error) {
    console.log(`Error getting specific state: ${error}`)
  }
}

