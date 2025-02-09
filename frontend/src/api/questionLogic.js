import {statesArray} from "../../../staticDB/states.js"

//ok, so I will match the state data given by the user with the data in our database

//then, i will return information, including whether or not an abortion in possible in the state. 

function questionLogic(state, weeks){
    console.log("QL called with:",state,weeks)
    const data = statesArray.find(s=>s.abbr===state);
    const avaAbort = weeks <= data.weeksBan;
    const aborMess = avaAbort 
    ? "You're still able to receive an abortion at this stage. Use the ClinicFinder to find the nearest clinic to you."
    : "Unfourtunatly, you cannot receive an abortion at this stage. Please use the ClinicFinder to locate a clinic near you outside of your state.";
    console.log("returning: ",{data,aborMess});
    return {data, aborMess};

}

export default questionLogic;
