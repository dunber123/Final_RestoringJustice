//CIS 4339 Sec 14075
//Group 17
//Madalyn Peden #1642371
//Victor Nguyen
//Rhahan Sarwar

const mongoose = require("mongoose");
const mongooseHistory = require("mongoose-history");
const Schema = mongoose.Schema;

//schema for client information
let clientSchema = new Schema(
  {
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
    },
    startDate: {
      type: Date,
      required: true,
    },
    closeDate: {
      type: Date,
    },
    lastUpdated: {
      //This can be handled by front end, I think
      type: Date,
    },
    timeSpent: {
      //Time spent by caseManager. Multiple case managers?
      type: String,
    },
    managerNotes: {
      type: String,
    },
    generalInformation: {
      //general information section of intake form
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
      },
      birthDate: {
        type: Date,
        required: true,
      },
      SS: {
        type: String,
        required: true,
      },
      usCitizen: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        required: true,
      },
      idDriverLicense: {
        type: String,
        required: true,
      },
    },
    residenceInformation: {
      //address and housing information section of intake form
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zip: {
        type: String,
        required: true,
      },
      county: {
        type: String,
        required: true,
      },
      heightWeight: {
        type: String,
        required: true,
      },
      inCustody: {
        type: String,
        required: true,
      },
      ifYesLocation: {
        type: String,
      },
      adelphoi: {
        type: Boolean,
        required: true,
      },
      adelphoiName: {
        type: String,
      },
      totalRent: {
        type: String,
        required: true,
      },
      utilitiesIncluded: {
        type: Boolean,
        
      },
      rentSubsidized: {
        type: Boolean,
       
      },
      singleParent: {
        type: Boolean,
      },
    },
    contactInformation: {
      //contact information and demographics from intake form
      homePhone: {
        type: String,
        required: true,
      },
      work: {
        type: String,
      },
      cell: {
        type: String,
      },
      other: {
        type: String,
      },
      personalEmail: {
        type: String,
        required: true,
      },
      otherEmail: {
        type: String,
      },
      maritalStatus: {
        type: String,
        required: true,
      },
      language: {
        type: String,
        required: true,
      },
      ethnicity: {
        type: String,
        required: true,
      },
    },
    employmentInformation: {
      //employment information and history
      employmentLength: {
        type: String,
      },
      employer: {
        type: String,
      },
      occupation: {
        type: String,
      },
      unemploymentLength: {
        type: String,
      },
      retirementLength: {
        type: String,
      },
      housewife: {
        type: Boolean,
      },
    },
    educationInformation: {
      attendedSchool: {
        type: Boolean,
        required: true,
      },
      school: {
        type: String,
      },
      lastGrade: {
        type: String,
      },
      graduated: {
        type: String,
      },
      certification: {
        type: String,
      },
    },
    incomeInformation: {
      //income information with payment amounts
      headHousehold: {
        type: Boolean,
        required: true,
      },
      monthlyIncome: {
        type: Number,
        required: true,
      },
      otherIncome: {
        type: Number,
      },
      spousalSupport: {
        type: Number,
      },
      workerComp: {
        type: Number,
      },
      childSupport: {
        type: Number,
      },
      tanf: {
        type: Number,
      },
      ssi: {
        type: Number,
      },
      unemployment: {
        type: Number,
      },
      socialSecurity: {
        type: Number,
      },
      doYouNeed: {
        type: String,
      },
    },
    insuranceInformation: {
      //info regarding health insurance and food stamps
      healthInsurance: {
        type: Boolean,
        required: true,
      },
      insuranceProvider: {
        type: String,
      },
      foodStamps: {
        type: Boolean,
        required: true,
      },
      howMuch: {
        type: Number,
      },
      whyNot: {
        type: String,
      },
    },
    substanceInformation: {
      //information regarding substance use and treatment
      use: {
        type: Boolean,
        required: true,
      },
      whatHowMuch: {
        type: String,
      },
      treatment: {
        type: Boolean,
        required: true,
      },
      notes: {
        type: String,
      },
      treatmentHistory: {
        type: String,
      },
    },
    legalInformation: [{
      //legal information regarding previous cases and their outcomes
      legalCaseNumber: {
        type: Number,
        required: true,
      },
      mentalCompetency: {
        type: Boolean,
        required: true,
      },
      fileDate: {
        type: Date,
        required: true,
      },
      priorAttorneyName: {
        type: String,
        required: true,
      },
      priorAttorneyCaseload: {
        type: Number,
      },
      charges: [
        {
          //subcategory for each case's information
          charge: {
            type: String,
          },
          degree: {
            type: String,
          },
          punishmentRange: {
            type: String,
          },
          disposition: {
            type: String,
          },
        },
      ],
      currentCourt: {
        type: String,
        required: true,
      },
      courtAddress: {
        type: String,
        required: true,
      },
      judgeName: {
        type: String,
        required: true,
      },
      courtType: {
        type: String,
        required: true,
      },
      caseCompletionDate: {
        type: Date,
        required: true,
      },
      defendentStatus: {
        type: String,
      },
      bondAmount: {
        type: Number,
      },
      settlingDate: {
        type: Date,
        required: true,
      },
    }],
    socialServiceReferrals: [
      {
        type: {
          type: String,
          enum: ["nutrition", "housing", "legal", "family services", "clothing", "transportation", "identification", "immigration", "anger management", "mental health", "drop-in centers", "disability services", "job training", "substance use disorder services", "other", "drug testing"],
          required: true,
        },
        caseManagerName: String,
        notes: {
          type: String,
          trim: true,
          maxlength: 140, // Idk how many characters "short notes" is
        },
        date: { 
            type: Date 
        },
        timeSpent: { 
            type: Number 
        },
        isReferralUsed: { 
            type: Boolean 
        },
        isResolved: { 
            type: Boolean 
        },
      },
    ],
    changeHistory: {
      //monitors and logs change history for schema
      type: String,
    },
  },
  {
    collection: "clients", //identifies as belonging to the client collection
  }
);

// add mongoose-history to our schema
clientSchema.plugin(mongooseHistory);

module.exports = mongoose.model("clients", clientSchema); //sends schema to mongoose
