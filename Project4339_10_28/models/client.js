//CIS 4339 Sec 14075
//Group 17
//Madalyn Peden #1642371
//Victor Nguyen
//Rhahan Sarwar

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema for client information
let clientSchema = new Schema({
    caseNumber: { 
        type: String,
        required: true,
        unique: true
    },
    clientNumber: {
        type: Number,
        required: true,
        unique: true
    },
    caseManager: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    closeDate: {
        type: Date
    },
    lastUpdated: {//This can be handled by front end, I think
        type: Date
    },
    timeSpent: {//Time spent by caseManager. Multiple case managers?
        type: Number
    },
    managerNotes: {
        type: String
    },
    generalInformation: { //general information section of intake form
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        middleName: {
            type: String
        },
        birthDate: {
            type: Date,
            required: true
        },
        SS: {
            type: String,
            required: true
        },
        usCitizen: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        idDriverLicense: {
            type: String,
            required: true
        }
    },
    residenceInformation: { //address and housing information section of intake form
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zip: {
            type: String,
            required: true
        },
        county: {
            type: String,
            required: true
        },
        heightWeight: {
            type: String,
            required: true
        },
        inCustody: {
            type: String,
            required: true
        },
        ifYesLocation: {
            type: String
        },
        adelphoi: {
            type: Boolean,
            required: true
        },
        adelphoiName: {
            type: String
        },
        totalRent: {
            type: String,
            required: true
        },
        utilitiesIncluded: {
            type: Boolean,
            required: true
        },
        rentSubsidized: {
            type: Boolean,
            required: true
        },
        singleParent: {
            type: Boolean,
            required: true
        }
    },
    contactInformation: { //contact information and demographics from intake form
        homePhone: {
            type: String,
            required: true
        },
        work: {
            type: String
        },
        cell: {
            type: String
        },
        other: {
            type: String
        },
        personalEmail: {
            type: String,
            required: true
        },
        otherEmail: {
            type: String
        },
        maritalStatus: {
            type: String,
            required: true
        },
        language: {
            type: String,
            required: true
        },
        ethnicity: {
            type: String,
            required: true
        }
    },
    employmentInformation: { //employment information and history 
        employmentLength: {
            type: String
        },
        employer: {
            type: String
        },
        occupation: {
            type: String
        },
        unemploymentLength: {
            type: String
        },
        retirementLength: {
            type: String
        },
        housewife: {
            type: Boolean
        }
    },
    educationInformation: {
        attendedSchool: {
            type: Boolean,
            required: true
        },
        school: {
            type: String
        },
        lastGrade: {
            type: String
        },
        graduated: {
            type: String,
            required: true
        },
        certification: {
            type: String
        }
    },
    incomeInformation: { //income information with payment amounts
        headHousehold: {
            type: Boolean,
            required: true
        },
        monthlyIncome: {
            type: Number,
            required: true
        },
        otherIncome: {
            type: Number
        },
        spousalSupport: {
            type: Number
        },
        workerComp: {
            type: Number
        },
        childSupport: {
            type: Number
        },
        tanf: {
            type: Number
        },
        ssi: {
            type: Number
        },
        unemployment: {
            type: Number
        },
        socialSecurity: {
            type: Number
        },
        doYouNeed: {
            type: String
        },
    },
    insuranceInformation: { //info regarding health insurance and food stamps
        healthInsurance: {
            type: Boolean,
            required: true
        },
        insuranceProvider: {
             type: String
        },
        foodStamps: {
            type: Boolean,
            required: true
        },
        howMuch: {
            type: Number
        },
        whyNot: {
            type: String
        }
    },
    substanceInformation: { //information regarding substance use and treatment
        use: {
            type: Boolean,
            required: true
        },
        whatHowMuch: {
            type: String
        },
        treatment: {
            type: Boolean,
            required: true
        },
        notes: {
            type: String
        },
        treatmentHistory: {
            type: String
        }
    },
    legalInformation:{ //legal information regarding previous cases and their outcomes
        legalCaseNumber: {
            type: Number
        },
        mentalCompetency: {
            type: Boolean
        },
        fileDate: {
            type: Date
        },
        priorAttorneyName: {
            type: String
        },
        priorAttorneyCaseload: {
            type: Number
        },
        case: { //subcategory for each case's information
            charge: {
                type: String
            },
            degree: {
                type: String
            },
            punishmentRange: {
                type: String
            },
            disposition: {
                type: String
            }
        },
        currentCourt: {
            type: String
        },
        courtAddress: {
            type: String
        },
        judgeName: {
            type: String
        },
        courtType: {
            type: String
        },
        caseCompletionDate: {
            type: Date
        },
        DefendentStatus: {
            type: String
        },
        bondAmount: {
            type: Number
        },
        settlingDate: {
            type: Date
        }
    },
    // I feel like this could be an array but not sure?
    socialServiceInformation: [{//Tracks the client's referrals to any social service
        nutrition: [{
            referredTo: {//Tracks who they were referred to. NULL for no referral.
                type: String
            },
            followThrough: {//The client either followed through, or didn't
                type: Boolean
            },
            resolution: {//Picks resolution to the referral
                type: String
            }
        }],
        housing: [{
            referredTo: {
                type: String
            },
            followThrough: {
                type: Boolean
            },
            resolution: {
                type: String
            }
        }],
        legal: [{
            referredTo: {
                type: String
            },
            followThrough: {
                type: Boolean
            },
            resolution: {
                type: String
            }
        }],
        familyServices: [{
            referredTo: {
                type: String
            },
            followThrough: {
                type: Boolean
            },
            resolution: {
                type: String
            }
        }],
        clothing: [{
            referredTo: {
                type: String
            },
            followThrough: {
                type: Boolean
            },
            resolution: {
                type: String
            }
        }],
        transportation: [{
            referredTo: {
                type: String
            },
            followThrough: {
                type: Boolean
            },
            resolution: {
                type: String
            }
        }],
        identification: [{
            referredTo: {
                type: String
            },
            followThrough: {
                type: Boolean
            },
            resolution: {
                type: String
            }
        }],
        immigration: [{
            referredTo: {
                type: String
            },
            followThrough: {
                type: Boolean
            },
            resolution: {
                type: String
            }
        }],
        angerManagement: [{
            referredTo: {
                type: String
            },
            followThrough: {
                type: Boolean
            },
            resolution: {
                type: String
            }
        }],
        mentalHealth: [{
            referredTo: {
                type: String
            },
            followThrough: {
                type: Boolean
            },
            resolution: {
                type: String
            }
        }],
        dropInCenter: [{
            referredTo: {
                type: String
            },
            followThrough: {
                type: Boolean
            },
            resolution: {
                type: String
            }
        }],
        disability: [{
            referredTo: {
                type: String
            },
            followThrough: {
                type: Boolean
            },
            resolution: {
                type: String
            }
        }],
        jobTraining: [{
            referredTo: {
                type: String
            },
            followThrough: {
                type: Boolean
            },
            resolution: {
                type: String
            }
        }],
        substanceServices: [{
            referredTo: {
                type: String
            },
            followThrough: {
                type: Boolean
            },
            resolution: {
                type: String
            }
        }],
        other: [{
            referredTo: {
                type: String
            },
            followThrough: {
                type: Boolean
            },
            resolution: {
                type: String
            }
        }],
        drugTesting: [{
            referredTo: {
                type: String
            },
            followThrough: {
                type: Boolean
            },
            resolution: {
                type: String
            }
        }]
    }], 
    changeHistory: { //monitors and logs change history for schema
        type: String
    }
 },
   {
    collection: 'clients' //identifies as belonging to the client collection
});

module.exports = mongoose.model('clients', clientSchema) //sends schema to mongoose
