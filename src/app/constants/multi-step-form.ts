//import { states } from './states.json';
import { states } from './pincode.json';
const LANGUAGES_LIST = [
    { name: 'English', code: 'english' },
    { name: 'मराठी', code: 'marathi' },
    { name: 'മലയാളം', code: 'malayalam' }
];

const AGE_LIST = [
    { name: '80 and above', code: '7' },
    { name: '70 - 79', code: '6' },
    { name: '60 - 69', code: '5' },
    { name: '50 - 59', code: '4' },
    { name: '40 - 49', code: '3' },
    { name: '10 - 39', code: '2' },
    { name: '0 - 9', code: '1' },
];

const GENDER_LIST = [
    { name: 'Female', code: '1' },
    { name: 'Male', code: '2' },
    { name: 'Other', code: '3' }
];

const DISEASE_LIST = [
    { name: 'Cardio-Vascular Diseases (Heart Problem)', code: '1', lexical: 'CVD' },
    { name: 'Renal Diseases (Issues with Kidney)', code: '2', lexical: 'RENAL'},
    { name: 'Diabetes', code: '3', lexical: 'DIAB'},
    { name: 'Respiratory Disease Chronic Obstructive Pulomary Disease (Emphysema, Bronchitis) / Asthma,lung cancer', code: '4', lexical: 'RESP'},
    { name: 'Tuberculosis', code: '5', lexical: 'TBCL'},
    { name: 'Cancer (in last 5 years) (Except lung cancer)', code: '6', lexical: 'CANC'},
    { name: 'Hypertension', code: '7', lexical: 'HYPRTNSN'},
    { name: 'None of these', code: '8', lexical: 'None'},
];

const SMOKER_LIST = [
    { name: 'No', code: '1' },
    { name: 'Yes', code: '2' }
];

const BE_LIST = [
    { name: 'No', code: '3' },
    { name: 'Sometimes', code: '2' },
    { name: 'Yes', code: '1' }
];

const BE_LIST_1 = [
    { name: 'Not very', code: '3' },
    { name: 'A little bit', code: '2' },
    { name: 'Very much', code: '1' }
];

const BE_LIST_2 = [
    { name: 'No', code: '3' },
    { name: 'May be', code: '2' },
    { name: 'Yes', code: '1' }
];

const BE_LIST_3 = [
    { name: 'No', code: '3' },
    { name: 'Only when I see others wearing mask', code: '2' },
    { name: 'Yes', code: '1' }
];

const BE_LIST_4 = [
    { name: 'Never', code: '3' },
    { name: 'Only after returning home', code: '2' },
    { name: 'Every time I come back home from outside or touch facilities in a public place, or touch currency', code: '1' }
];

const BE_LIST_5 = [
    { name: 'Never', code: '3' },
    { name: 'Sometimes, I touch unknowingly ', code: '2' },
    { name: 'Always', code: '1' }
];

const BE_LIST_6 = [
    { name: 'Never', code: '3' },
    { name: 'Only when I see others following ', code: '2' },
    { name: 'Always', code: '1' }
];

const BE_LIST_7 = [
    { name: 'A little worried, as my district has no reported case', code: '3' },
    { name: 'Not very worried, as number of cases are low in my district', code: '2' },
    { name: 'Very much worried, as positive COVID-19 cases have been reported in my locality', code: '1' }
];

const BE_LIST_8 = [
    { name: 'Need new measures to bring it under control', code: '3' },
    { name: 'The current measures will bring it under control', code: '2' },
    { name: 'The situation is under control', code: '1' }
];

const EXPOSURE_STAY_LIST = [
    { name: 'Informal settlement', code: '4' },
    { name: 'Mohalla / Chawl / Shared Accommodation (Hostels, PGs)', code: '3' },
    { name: 'High Rise Complexes', code: '2' },
    { name: 'Detached Houses (Bungalows)', code: '1' }
];

const EXPOSURE_OCCUPATION_LIST = [
    { name: 'Medical / Emergency Personnel', code: '4' },
    { name: 'I am a law & order personnel', code: '3' },
    { name: 'I am an essential commodities / services provider', code: '2' },
    { name: 'Others', code: '1' }
];

const EXPOSURE_CONTAGION_LIST = [
    { name: 'a) I attended a public meeting / conference / religious congregation / party / wedding / any such mass gathering in the last 14 days', code: '3' },
    { name: 'b) I travelled in the last 14 days by air or train, or bus or public transport (Metro) or chauffeur driven car', code: '2' },
    { name: 'c) Both (a) & (b)', code: '4' },
    { name: 'd) None of these', code: '1' }
];

const SOCIAL_POLICY_LIST = [
    { name: 'A very few people are following', code: '3' },
    { name: 'Some people are following', code: '2' },
    { name: 'Most of the people are following', code: '1' }
];

const SOCIAL_POLICY_LIST_1 = [
    { name: 'All shops are open and public gatherings are allowed', code: '3' },
    { name: 'Essential services and shops are open, no restriction for community mobility ', code: '2' },
    { name: 'Only essential services available and restricted community mobility', code: '1' }
];

const SOCIAL_POLICY_LIST_2 = [
    { name: 'Most people are following (more than 80%)', code: '3' },
    { name: 'Some people are following (between 50 to 80%) ', code: '2' },
    { name: 'Most people are following (more than 80%)', code: '1' }
];

const STEP_ITEMS = [];

STEP_ITEMS.push({label: 'Select Language', data: {
    language: {
        type: 'radio',
        options: LANGUAGES_LIST,
        validations: {},
        errors: {},
        placeholder: 'Choose your language'
      }
    }
});
// var stateList = states.map(state => {
//     return state.state;
// });
var stateList = Object.keys(states);
var finalStates = [];

stateList.forEach(state => {
    if(state && state !== 'NULL'){
        finalStates.push(state);
    }
});
STEP_ITEMS.push({label: 'Select State', data: {
    state: {
        type: 'select',
        options: finalStates,
        validations: {},
        errors: {},
        placeholder: 'Choose your state'
      }
    }
});

STEP_ITEMS.push({label: 'Select District', data: {
    district: {
        type: 'select',

        validations: {},
        errors: {},
        placeholder: 'Choose your district'
      }
    }
});

STEP_ITEMS.push({label: 'Pincode', data: {
    pincode: { type: 'select', validations: {}, errors: {}, placeholder: 'Pincode' }
    }
});

STEP_ITEMS.push({label: 'Personal Details: Name', data: {
    name: { type: 'text', validations: {}, errors: {}, placeholder: 'Name' }
    }
});

STEP_ITEMS.push({label: 'Personal Details: Age', data: {
    A: {
        type: 'radio',
        options: AGE_LIST,
        validations: {},
        errors: {},
        placeholder: 'Choose your age'
      }
    }
});

STEP_ITEMS.push({label: 'Personal Details: Gender', data: {
    G: {
        type: 'radio',
        options: GENDER_LIST,
        validations: {},
        errors: {},
        placeholder: 'Choose your gender'
      }
    }
});

STEP_ITEMS.push({label: 'Personal Details: Smoking Habits', data: {
    Sm: {
        type: 'radio',
        options: SMOKER_LIST,
        validations: {},
        errors: {},
        placeholder: 'Do you smoke?'
      }
    }
});

STEP_ITEMS.push({label: 'Personal Details: Diseases', data: {
    Cm: {
        type: 'checkbox',
        options: DISEASE_LIST,
        validations: {},
        errors: {},
        placeholder: 'Existing Diseases'
      }
    }
});

STEP_ITEMS.push({label: 'Beheavioral Details', data: {
    Be1: {
        type: 'radio',
        options: BE_LIST_3,
        validations: {},
        errors: {},
        placeholder: 'Do you wear mask while going out of your house?'
      }
    }
});

STEP_ITEMS.push({label: 'Beheavioral Details', data: {
    Be2: {
        type: 'radio',
        options: BE_LIST_4,
        validations: {},
        errors: {},
        placeholder: 'When do you sanities your hands?'
      }
    }
});

STEP_ITEMS.push({label: 'Beheavioral Details', data: {
    Be3: {
        type: 'radio',
        options: BE_LIST_5,
        validations: {},
        errors: {},
        placeholder: 'Do you sanitise your hand before touching eyes, nose and mouth?'
      }
    }
});

STEP_ITEMS.push({label: 'Beheavioral Details', data: {
    Be4: {
        type: 'radio',
        options: BE_LIST_6,
        validations: {},
        errors: {},
        placeholder: 'Do you follow the physical distancing norms in public places?'
      }
    }
});

STEP_ITEMS.push({label: 'Beheavioral Details', data: {
    Be5: {
        type: 'radio',
        options: BE_LIST_7,
        validations: {},
        errors: {},
        placeholder: 'How anxious are you about the current situation?'
      }
    }
});

STEP_ITEMS.push({label: 'Beheavioral Details', data: {
    Be6: {
        type: 'radio',
        options: BE_LIST_8,
        validations: {},
        errors: {},
        placeholder: 'Which of these describes the current COVID-19 response?'
      }     
    }
});

STEP_ITEMS.push({label: 'Exposure', data: {
    Ex1: {
        type: 'radio',
        options: EXPOSURE_STAY_LIST,
        validations: {},
        errors: {},
        placeholder: 'Where do you stay?'
      }     
    }
});

STEP_ITEMS.push({label: 'Exposure', data: {
    Ex2: {
        type: 'radio',
        options: EXPOSURE_OCCUPATION_LIST,
        validations: {},
        errors: {},
        placeholder: 'What is your occupation?'
      }     
    }
});

STEP_ITEMS.push({label: 'Exposure', data: {
    Ex3: {
        type: 'radio',
        options: EXPOSURE_CONTAGION_LIST,
        validations: {},
        errors: {},
        placeholder: 'Is any of this true in your case?'
      }     
    }
});

STEP_ITEMS.push({label: 'Social Policy', data: {
    SP1: {
        type: 'radio',
        options: SOCIAL_POLICY_LIST_1,
        validations: {},
        errors: {},
        placeholder: 'How effective is lockdown in your locality?'
      }     
    }
});

STEP_ITEMS.push({label: 'Social Policy', data: {
    SP2: {
        type: 'radio',
        options: SOCIAL_POLICY_LIST_2,
        validations: {},
        errors: {},
        placeholder: 'Are people wearing mask and following social distancing in your locality?'
      }     
    }
});

STEP_ITEMS.push({ label: 'Review & Submit', data: {} });

export { STEP_ITEMS }