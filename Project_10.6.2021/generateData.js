const faker = require("faker");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const NUM_OF_DOCS_TO_CREATE = 100;

const MONGO_URI = "mongodb://192.168.1.157:27017";
const DATABASE_NAME = "restoring_justice";
const COLLECTION_NAME = "clients";

mongoose.connect(`${MONGO_URI}/${DATABASE_NAME}`);
mongoose.connection.on("error", (error) => console.error(error));
mongoose.connection.once("open", () => console.log("Connected to Database"));
const mongo = mongoose.connection;

// becase no top-level async
(async () => {
  try {
    const docsToAdd = makeDocuments(NUM_OF_DOCS_TO_CREATE);
    const insertResult = await mongo.collection(COLLECTION_NAME).insertMany(docsToAdd);
    console.log("RESULT:", { insertedDocs: insertResult.insertedCount });
  } catch (e) {
    console.log("error inserting docs:", e);
    mongo.close();
    process.exit(1);
  }
  if (mongoose.connection) {
    mongoose.connection.close();
  }
})();

function makeDocuments(count = 0) {
  const socialServiceTypes = ["nutrition", "housing", "legal", "family services", "clothing", "transportation", "identification", "immigration", "anger management", "mental health", "drop-in centers", "disability services", "job training", "substance use disorder services", "other", "drug testing"];

  const output = [];
  for (let i = 0; i < count; i++) {
    output.push({
      caseManager: faker.name.firstName(),
      //"TST-776"
      caseNumber: `${faker.random.alpha({ upcase: true })}${faker.random.alpha({ upcase: true })}${faker.random.alpha({ upcase: true })}-${faker.datatype.number(9)}${faker.datatype.number(9)}${faker.datatype.number(9)}`,
      //"187642" 
      clientNumber: faker.phone.phoneNumber("######"),
      startDate: faker.date.past(),
      closeDate: faker.date.future(),
      lastUpdated: faker.date.past(),
      timeSpent: faker.datatype.number(99) * faker.datatype.number(10),
      managerNotes: faker.random.words(),
      generalInformation: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        birthDate: faker.date.past(),
        middleName: faker.name.middleName(),
        // Can use phone number formatting to acheive same thing
        SS: faker.phone.phoneNumber("###-##-####"),
        usCitizen: faker.datatype.boolean(),
        gender: faker.name.gender(),
        idDriverLicense: faker.phone.phoneNumber("########"), //"73182471",
      },
      residenceInformation: {
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
        county: faker.address.county(),
        heightWeight: `"${faker.datatype.number(9)}'${faker.datatype.number(12)} ${faker.datatype.number({ min: 175, max: 275 })}lb`, // "6'7 200lb",
        inCustody: faker.datatype.boolean(),
        ifYesLocation: null,
        adelphoi: faker.datatype.boolean(),
        adelphoiName: faker.random.word(),
        totalRent: faker.datatype.number({ min: 500, max: 5000 }),
        utilitiesIncluded: faker.datatype.boolean(),
        rentSubsidized: faker.datatype.boolean(),
        singleParent: faker.datatype.boolean(),
      },
      contactInformation: {
        homePhone: faker.phone.phoneNumber("###-###-####"),
        work: faker.phone.phoneNumber("###-###-####"),
        cell: faker.phone.phoneNumber("###-###-####"),
        other: faker.random.words(),
        personalEmail: faker.internet.email(),
        otherEmail: faker.internet.email(),
        maritalStatus: faker.helpers.randomize(["Single", "Married"]),
        language: faker.random.word(),
        ethnicity: faker.random.word(),
      },
      employmentInformation: {
        employmentLength: faker.datatype.number(),
        employer: faker.random.words(2),
        occupation: faker.name.jobType(),
        unemploymentLength: faker.datatype.number(),
        retirementLength: faker.datatype.number(),
        housewife: faker.datatype.boolean(),
      },
      educationInformation: {
        attendedSchool: faker.datatype.boolean(),
        lastGrade: faker.datatype.number(12),
        graduated: faker.random.word(),
        certifcation: faker.random.word(),
      },
      incomeInformation: {
        headHousehold: faker.datatype.boolean(),
        monthlyIncome: faker.datatype.number({ min: 30000, max: 1000000 }),
        otherIncome: faker.datatype.number(5000),
        spousalSupport: faker.datatype.number(),
        workerComp: faker.datatype.number(),
        childSupport: faker.datatype.number(),
        tanf: faker.datatype.number(),
        ssi: faker.datatype.number(),
        unemployment: faker.datatype.number(),
        socialSecurity: faker.datatype.number(),
        doYouNeed: faker.random.words(),
      },
      insuranceInformation: {
        healthInsurance: faker.datatype.boolean(),
        insuranceProvider: faker.company.companyName(),
        foodStamps: faker.datatype.boolean(),
        howMuch: faker.datatype.number(),
        whyNot: faker.random.words(),
      },
      substanceInformation: {
        use: faker.datatype.boolean(),
        whatHowMuch: faker.datatype.number(),
        treatment: faker.datatype.boolean(),
        notes: faker.random.words(),
        treatmentHistory: faker.random.words(),
      },
      legalInformation: {
        legalCaseNumber: faker.datatype.number(),
        mentalCompentency: faker.datatype.boolean(),
        fileDate: faker.date.past(),
        priorAttorneyName: faker.name.firstName(),
        priorAttorneyCaseload: faker.datatype.number(),
        charges: [...Array(faker.datatype.number(5))].map(() => ({
          charge: faker.random.word(),
          degree: faker.random.word(),
          punishmentRange: faker.random.word(),
          disposition: faker.random.words(10),
        })),
        case: {
          currentCourt: faker.random.word(),
          courtAddress: faker.address.streetAddress(),
          judgeName: faker.name.firstName(),
          courtType: faker.random.word(),
          caseCompletionDate: faker.date.past(),
          DefendentStatus: faker.random.word(),
          bondAmount: faker.commerce.price(),
          settlingDate: faker.date.past(),
        },
      },
      socialServiceReferrals: [...Array(faker.datatype.number(5))].map(() => ({
        type: socialServiceTypes[Math.floor(Math.random() * socialServiceTypes.length)],
        caseManagerName: `${faker.name.firstName()} ${faker.name.lastName()}`,
        notes: faker.random.words(100),
        date: faker.date.past(),
        timeSpent: faker.datatype.number(),
        isReferralUsed: faker.datatype.boolean(),
        isResolved: faker.datatype.boolean()
      })),
    });
  }
  return output;
}
