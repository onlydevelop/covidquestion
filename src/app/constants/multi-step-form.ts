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
]

const DISEASE_LIST = [
    { name: 'Cardio-Vascular Diseases (Heart Problem)', code: '1' },
    { name: 'Renal Diseases (Issues with Kidney)', code: '2' },
    { name: 'Diabetes', code: '3' },
    { name: 'Respiratory Disease Chronic Obstructive Pulomary Disease (Emphysema, Bronchitis) / Asthma,lung cancer', code: '4' },
    { name: 'Tuberculosis', code: '5' },
    { name: 'Cancer (in last 5 years) (Except lung cancer)', code: '6' },
    { name: 'Hypertension', code: '7' },
];

const GENDER_LIST = [
    { name: 'Female', code: '1' },
    { name: 'Male', code: '2' },
    { name: 'Other', code: '3' }
]

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
    { name: 'a little bit', code: '2' },
    { name: 'Very much', code: '1' }
];

const BE_LIST_2 = [
    { name: 'No', code: '3' },
    { name: 'May be', code: '2' },
    { name: 'Yes', code: '1' }
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
    { name: 'a) Both (b) & (c)', code: '4' },
    { name: 'b) I attended a public meeting / conference / religious congregation / party / wedding / any such mass gathering in the last 14 days', code: '3' },
    { name: 'c) I travelled in the last 14 days by air or train, or bus or public transport (Metro) or chauffeur driven car', code: '2' },
    { name: 'd) None of these', code: '1' }
];

const SOCIAL_POLICY_LIST = [
    { name: 'A very few people are following', code: '3' },
    { name: 'Some people are following', code: '2' },
    { name: 'Most of the people are following', code: '1' }
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

STEP_ITEMS.push({label: 'Personal Details: Name', data: {
    name: { type: 'text', validations: {}, errors: {}, placeholder: 'Name' }
    }
});

STEP_ITEMS.push({label: 'Personal Details: Age', data: {
    age: {
        type: 'radio',
        options: AGE_LIST,
        validations: {},
        errors: {},
        placeholder: 'Choose your age'
      }
    }
});

STEP_ITEMS.push({label: 'Personal Details: Diseases', data: {
    disease: {
        type: 'checkbox',
        options: DISEASE_LIST,
        validations: {},
        errors: {},
        placeholder: 'Existing Diseases'
      }
    }
});

STEP_ITEMS.push({label: 'Personal Details: Gender', data: {
    gender: {
        type: 'radio',
        options: GENDER_LIST,
        validations: {},
        errors: {},
        placeholder: 'Choose your gender'
      }
    }
});

STEP_ITEMS.push({label: 'Personal Details: Smoking Habits', data: {
    smoker: {
        type: 'radio',
        options: SMOKER_LIST,
        validations: {},
        errors: {},
        placeholder: 'Do you smoke?'
      }
    }
});

STEP_ITEMS.push({label: 'Beheavioral Details', data: {
    Be1: {
        type: 'radio',
        options: BE_LIST,
        validations: {},
        errors: {},
        placeholder: 'Do you use mask or cover your mouth and nose while sneezing or coughing?'
      }
    }
});

STEP_ITEMS.push({label: 'Beheavioral Details', data: {
    Be2: {
        type: 'radio',
        options: BE_LIST,
        validations: {},
        errors: {},
        placeholder: 'Do you wash your hands after coming home with soap?'
      }
    }
});

STEP_ITEMS.push({label: 'Beheavioral Details', data: {
    Be3: {
        type: 'radio',
        options: BE_LIST,
        validations: {},
        errors: {},
        placeholder: 'Do you sanitise your hand before touching eyes, nose and mouth?'
      }
    }
});

STEP_ITEMS.push({label: 'Beheavioral Details', data: {
    Be4: {
        type: 'radio',
        options: BE_LIST,
        validations: {},
        errors: {},
        placeholder: 'Do you follow the social distancing norm?'
      }
    }
});

STEP_ITEMS.push({label: 'Beheavioral Details', data: {
    Be5: {
        type: 'radio',
        options: BE_LIST_1,
        validations: {},
        errors: {},
        placeholder: 'How anxious are you about the current situation?'
      }
    }
});

STEP_ITEMS.push({label: 'Beheavioral Details', data: {
    Be6: {
        type: 'radio',
        options: BE_LIST_2,
        validations: {},
        errors: {},
        placeholder: 'Is the government capable of handing the COVID-19 outbreak?'
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
        options: SOCIAL_POLICY_LIST,
        validations: {},
        errors: {},
        placeholder: 'How effective is lockdown in your locality?'
      }     
    }
});

STEP_ITEMS.push({label: 'Social Policy', data: {
    SP2: {
        type: 'radio',
        options: SOCIAL_POLICY_LIST,
        validations: {},
        errors: {},
        placeholder: 'Are people wearing mask and following social distancing in your locality?'
      }     
    }
});

STEP_ITEMS.push({ label: 'Review & Submit', data: {} });

// const DATA_STEP_1 = {
//     language: {
//         type: 'select',
//         options: LANGUAGES_LIST,
//         validations: {},
//         errors: {},
//         placeholder: 'Choose your language'
//       }
// };
//   const DATA_STEP_1 = {
//     firstName: { type: 'text', validations: {}, errors: {}, placeholder: 'First Name' },
//     lastName: { type: 'text', validations: {}, errors: {}, placeholder: 'Last Name' },
//     dateOfBirth: {
//       type: 'date',
//       validations: {},
//       errors: {},
//       placeholder: 'Date of Birth'
//     }
//   };
  
//   const DATA_STEP_2 = {
//     address: { type: 'textarea', validations: {}, errors: {}, placeholder: 'Full Address' },
//     country: {
//       type: 'select',
//       options: LANGUAGES_LIST,
//       validations: {},
//       errors: {},
//       placeholder: 'Country'
//     }
//   };
  
//   const DATA_STEP_3 = {
//     phone: {
//       type: 'phone',
//       validations: {
//         pattern: /^\d{10}$/
//       },
//       errors: {
//         pattern: 'Please enter a valid phone number'
//       },
//       placeholder: 'Contact Number'
//     },
//     otp: {
//       type: 'number',
//       validations: {
//         required: true,
//         minLength: 4
//       },
//       errors: {
//         required: 'This field can not be left blank',
//         minlength: 'Minimum length should be 4 characters'
//       },
//       placeholder: 'One Time Password'
//     }
//   };
  
//   const STEP_ITEMS = [
//     { label: 'Step 1', data: DATA_STEP_1 },
//     { label: 'Step 2', data: DATA_STEP_2 },
//     { label: 'Step 3', data: DATA_STEP_3 },
//     { label: 'Review & Submit', data: {} }
//   ];
  
  export { STEP_ITEMS }