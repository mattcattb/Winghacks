import phone from '../assets/phone.svg';
import EmbreCanvas from "../threemodels/Embre.jsx";
import { InputPicker, InputNumber } from 'rsuite';
import { useState , useEffect} from 'react';
import questionLogic from '../api/questionLogic.js';
import 'rsuite/InputPicker/styles/index.css';
import statesArray from '../../../staticDB/states.js';


export default function EmbreChat(){


    //on close, pass the label into array to keep hold of for time being

    const [state, setState] = useState('');
    const [weeks, setWeeks] = useState('');
    const [showBubble, setBubble] = useState(0);
    const [aborMess, setAborMess] = useState('error'); // state to hold the abortion message
    const [matchedState, setMatchedState] = useState(null);

    const handleStateSelect =(selectedValue) =>{
        console.log(selectedValue);

        setState(selectedValue); //passes in an abbriviation
<<<<<<< HEAD
    
    };
    
    
    const handleWeeks = (value) =>{
        if (value !== null && !isNaN(value)) {
            console.log("Weeks selected:", value);  // Debugging log
            setWeeks(value);  // Store the selected number
        }
    };
=======

    }


    const handleWeeks = (label, item) =>{
        setWeeks(item.label);
    }
>>>>>>> 4e490c033d548f2df6f27c59af9f53ca73e16f71

    const handleNextStep = () => {
        setBubble(prevStep => prevStep + 1);
        if (showBubble === 1) {
            const { data, aborMess } = questionLogic(state, weeks);
            setMatchedState(data);
            setAborMess(aborMess);
            console.log(aborMess)
        }

    };


    // useEffect(() => {
    //     if (state && weeks) {
    //         const { data, aborMess } = questionLogic(state, weeks);
    //         setMatchedState(data); // Store the matched state data
    //         setAborMess(aborMess); // Set the abortion message
    //     }
<<<<<<< HEAD
    // }, [state, weeks]); 
    
    return <div>
        <div className= "phone-container">
            <div className={`bubble-container ${ showBubble ===  0 ? "fade-in" :"fade-out"}`}>
                <div className="bubble-left">
=======
    // }, [state, weeks]);

    return <div className="flex flex-row-reverse"> {/* You might want to Tailwind-ify EmbreChat's positioning later if needed */}
            <div className="phone-container relative w-full max-w-[440px] h-[800px] mx-auto">
              <img src={phone} alt="phone" className='phone w-full h-auto'/>
            <div className={`bubble-container absolute top-[20%] left-0 right-0 w-[240px] translate-x-[42%] flex flex-col items-start justify-start gap-2.5 transition-opacity duration-500 ease-out transition-transform duration-500 ease-out ${ showBubble==  0 ? "fade-in" :"fade-out"}`}>
                <div className="bubble-left max-w-[40%] p-2.5 px-5 bg-[#F4D7E3] text-black rounded-xl text-base break-words ml-2.5 mr-2.5 self-start">
>>>>>>> 4e490c033d548f2df6f27c59af9f53ca73e16f71
                    Hello! I hope you are doing well. Please select what state you are in so I can help you!
                </div>
                <div className="bubble-right max-w-[40%] p-2.5 px-5 bg-[#F4D7E3] text-black rounded-xl text-base break-words ml-2.5 mr-2.5 self-end">
                    <InputPicker data={[
                        {label: 'Alabama', value: 'AL'},
                        {label: 'Alaska', value: 'AK'},
                        {label: 'Arizona', value: 'AZ'},
                        {label: 'Arkansas', value: 'AR'},
                        {label: 'California', value: 'CA'},
                        {label: 'Colorado', value: 'CO'},
                        {label: 'Connecticut', value: 'CT'},
                        {label: 'Delaware', value: 'DE'},
                        {label: 'Florida', value: 'FL'},
                        {label: 'Georgia', value: 'GA'},
                        {label: 'Hawaii', value: 'HI'},
                        {label: 'Idaho', value: 'ID'},
                        {label: 'Illinois', value: 'IL'},
                        {label: 'Indiana', value: 'IN'},
                        {label: 'Iowa', value: 'IA'},
                        {label: 'Kansas', value: 'KS'},
                        {label: 'Kentucky', value: 'KY'},
                        {label: 'Louisiana', value: 'LA'},
                        {label: 'Maine', value: 'ME'},
                        {label: 'Maryland', value: 'MD'},
                        {label: 'Massachusetts', value: 'MA'},
                        {label: 'Michigan', value: 'MI'},
                        {label: 'Minnesota', value: 'MN'},
                        {label: 'Mississippi', value: 'MS'},
                        {label: 'Missouri', value: 'MO'},
                        {label: 'Montana', value: 'MT'},
                        {label: 'Nebraska', value: 'NE'},
                        {label: 'Nevada', value: 'NV'},
                        {label: 'New Hampshire', value: 'NH'},
                        {label: 'New Jersey', value: 'NJ'},
                        {label: 'New Mexico', value: 'NM'},
                        {label: 'New York', value: 'NY'},
                        {label: 'North Carolina', value: 'NC'},
                        {label: 'North Dakota', value: 'ND'},
                        {label: 'Ohio', value: 'OH'},
                        {label: 'Oklahoma', value: 'OK'},
                        {label: 'Oregon', value: 'OR'},
                        {label: 'Pennsylvania', value: 'PA'},
                        {label: 'Rhode Island', value: 'RI'},
                        {label: 'South Carolina', value: 'SC'},
                        {label: 'South Dakota', value: 'SD'},
                        {label: 'Tennessee', value: 'TN'},
                        {label: 'Texas', value: 'TX'},
                        {label: 'Utah', value: 'UT'},
                        {label: 'Vermont', value: 'VT'},
                        {label: 'Virginia', value: 'VA'},
                        {label: 'Washington', value: 'WA'},
                        {label: 'West Virginia', value: 'WV'},
                        {label: 'Wisconsin', value: 'WI'},
                        {label: 'Wyoming', value: 'WY'},
                    ]}
                        value={state}
                        onChange={handleStateSelect}
<<<<<<< HEAD
                        
                        />
                </div>
                <button onClick= {handleNextStep}>:D</button>
            </div> 
            <div className={`bubble-container ${showBubble === 1 ? "fade-in" : "fade-out"}`} >
                <div className='bubble-left'>
                    Thank you! Now, if you don't mind me asking, how many weeks ago was your last period?
                </div>
                <div className='bubble-right'>
                    <InputNumber 
                    max={30}
                    onChange={handleWeeks}
                    />
                </div>
                <button onClick= {handleNextStep} style={{"marginTop": "10%"}}>:D</button>
            </div> 
            <div className={`bubble-container ${showBubble === 2 ? 'fade-in' : 'fade-out'}`}>
                    <div className='bubble-left'>
                        {aborMess}
                    </div>
=======

                    />
                </div>
                <button onClick= {handleNextStep}>:D</button>
            </div>
            <div className={`bubble-container absolute top-[20%] left-0 right-0 w-[240px] translate-x-[42%] flex flex-col items-start justify-start gap-2.5 transition-opacity duration-500 ease-out transition-transform duration-500 ease-out ${showBubble ==1 ? "fade-in" : "fade-out"}`} >
                <div className='bubble-left max-w-[40%] p-2.5 px-5 bg-[#F4D7E3] text-black rounded-xl text-base break-words ml-2.5 mr-2.5 self-start'>
                    Thank you! Now, if you don't mind me asking, how many weeks ago was your last period?
                </div>
                <div className='bubble-right max-w-[40%] p-2.5 px-5 bg-[#F4D7E3] text-black rounded-xl text-base break-words ml-2.5 mr-2.5 self-end'>
                    <InputNumber
                        max={30}
                        onChange={handleWeeks}
                    />
                </div>
                <button onClick= {handleNextStep} className="mt-[10%]">:D</button>
            </div>
            <div className={`bubble-container absolute top-[20%] left-0 right-0 w-[240px] translate-x-[42%] flex flex-col items-start justify-start gap-2.5 transition-opacity duration-500 ease-out transition-transform duration-500 ease-out ${showBubble == 2 ? 'fade-in' : 'fade-out'}`}>
                <div className='bubble-left max-w-[40%] p-2.5 px-5 bg-[#F4D7E3] text-black rounded-xl text-base break-words ml-2.5 mr-2.5 self-start'>
                    {aborMess}
                </div>
>>>>>>> 4e490c033d548f2df6f27c59af9f53ca73e16f71
            </div>
        </div>
        <EmbreCanvas className="EmbreChat"/> {/* You might want to Tailwind-ify EmbreCanvas's positioning later if needed */}
    </div>


}
