import axiosClient from "./axiosClient"


export const getAllStatesData = () => {
  const res = axiosClient.get('/stateData/');

  return res.statesData;
}


export const getStateData = (abbr) => {
  const res = axiosClient.get('/stateData/', {
    params: {}
  })
  return res.stateData
}

