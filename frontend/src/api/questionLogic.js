import {statesArray} from "../../../staticDB/states.js"

//ok, so I will match the state data given by the user with the data in our database

//then, i will return information, including whether or not an abortion in possible in the state. 

function questionLogic(state, weeks){

    let data = null;
    let avaAbort = false; 

    for(let i = 0 ; i < statesArray.length; i++){
        if (state === statesArray[i].abbr){
            //we found a match, store the match somewehre? 
            data = statesArray[i];
            console.log(data)
            if(weeks > data.weeksBan){
                //condition stating that a 
                avaAbort = false;
            } else{
                avaAbort = true;
            }
        }
    }

    let aborMess = '';

    if (avaAbort === true){
        aborMess = "You are still able to recieve an abortion at this stage! Use the ClinicFinder to find the nearest clinic"
    } else{
        aborMess = "Unfourtunatly, you cannot receive an abortion at this stage. Please use the ClinicFinder to locate a clinic near you outside of your state. "
    }

    return {data, aborMess};

}

export default questionLogic;
