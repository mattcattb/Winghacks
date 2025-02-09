import {StateData} from '../types/state'


export const statesArray: StateData[] = [
  {
    name: "Florida",

    restrictionLevel: 4,
    restrictionFacts: [
      "Florida has a 6-week abortion ban.",
      "There are mandatory waiting periods and counseling requirements.",
      "Access to medication abortion may be limited.", 
      "Abortions for pregnancies involving rape/ incest are allowed up to 15 weeks."
    ],
    weeksBan: 6,
    abbr: "FL",
  },
  {
    name: "California",
    restrictionLevel: 1,
    restrictionFacts: [
      "California has strong protections for abortion access.",
      "There are no significant restrictions on abortion.",
      "The state funds abortion services for low-income individuals.",
      "Has explicit abortion and contraception rights in its constitution"
    ],
    weeksBan: 24, // Or whatever the limit is
    abbr: "CA",
  },
  {
    name: "Georgia",
    restrictionLevel: 4, // Added restriction level
    restrictionFacts: [
      "Georgia has a gestational age ban (typically around 6 weeks).",
      "There are exceptions for the life of the pregnant person and/ or cases of rape and incest.",
      "State law typlically requires parent/ legal guardian to be notified"
    ],
    weeksBan: 6, // Or the actual number
    abbr: "GA",
  },
  {
    name: "Texas",
    restrictionLevel: 5,
    restrictionFacts: [
      "Texas has a near-total abortion ban.",
      "No laws that express any protections for abortion.",
      "Civil and criminal penalties"
    ],
    weeksBan: 0,
    abbr: "TX",
  },
  {
    name: "New York",
    restrictionLevel: 1,
    restrictionFacts: [
      "New York has strong protections for abortion rights.",
      "New York law prohibits discrimination based on preganancy outcomes.",
      "The state has expanded access to abortion care."
    ],
    weeksBan: 24, // Or whatever the limit is
    abbr: "NY",
  },
  {
    name: "Wyoming",
    restrictionLevel: 5,
    restrictionFacts: [
        "Wyoming has a near-total abortion ban,.",
        "There are exceptions for the life of the pregnant person and/ or cases of rape and incest.", 
        "No abortion protections."
    ],
    weeksBan: 0,
    abbr: "WY"
  },
    {
    name: "Arizona",
    restrictionLevel: 2,
    restrictionFacts: [
        "Arizona's laws are complex and subject to change.",
        "There are restrictions on medication abortion.",
        "Legal challenges have impacted the enforcement of some laws."
    ],
    weeksBan: 15, // Or the actual number
    abbr: "AZ"
  },
  {
    name: "Pennsylvania",
    restrictionLevel: 4,
    restrictionFacts: [
        "Abortion remains accessible in Pennsylvania, but without protections.",
        "A number of restrictions make access to abortion care difficult.",
        "Must go through a mandatory waiting period"
    ],
    weeksBan: 24, // Or the actual number
    abbr: "PA"
  },
  {
    name: "Colorado",
    restrictionLevel: 2,
    restrictionFacts: [
        "Colorado has no gestational age limit on abortion.",
        "There are strong protections for abortion access.",
        "The state has laws to protect access to reproductive healthcare."
    ],
    weeksBan: 22, // Or whatever the limit is
    abbr: "CO"
  },
  {
    name: "Illinois",
    restrictionLevel: 1,
    restrictionFacts: [
        "Illinois has strong protections for abortion rights.",
        "The state has expanded access to reproductive healthcare.",
        "Illinois provides public funding for necessary abortions."
    ],
    weeksBan: 24, // Or whatever the limit is
    abbr: "IL"
  },
  // ... Add more states here
  {
    name: "Alabama",
    restrictionLevel: 5,
    restrictionFacts: [
        "Alabama's policies bans abortion.",
        "There is one exception in cases to protect the mother.",
        "Enforces a total abortion ban."
    ],
    weeksBan: 0, // Or whatever the limit is
    abbr: "AL"
  },
  {
    name: "Alaska",
    restrictionLevel: 2,
    restrictionFacts: [
        "Abortion remains legal in Alaska",
        "Has constitutional protections for abortion.",
        "No gestational limits on abortion."
    ],
    weeksBan: 40, // Or whatever the limit is
    abbr: "AK"
  },
  {
    name: "Arkansas",
    restrictionLevel: 5,
    restrictionFacts: [
        "Alaska's policies bans abortion.",
        "There is one exception in cases to protect the mother.",
        "Enforces a total abortion ban."
    ],
    weeksBan: 0, // Or whatever the limit is
    abbr: "AR"
  },
  {
    name: "Connecticut",
    restrictionLevel: 1,
    restrictionFacts: [
        "Abortion remains legal in Connecticut",
        "Additional laws allow for increased access to abortion care",
        "Increased protections"
    ],
    weeksBan: 28, // Or whatever the limit is
    abbr: "CT"
  },
  {
    name: "Delaware",
    restrictionLevel: 2,
    restrictionFacts: [
        "Abortion remains legal in Delaware",
        "State laws protect abortion",
        "Generally requires a guardian to be notifiedin cases of a minor."
    ],
    weeksBan: 24, // Or whatever the limit is
    abbr: "DE"
  },
  {
    name: "Hawaii",
    restrictionLevel: 1,
    restrictionFacts: [
        "Abortion remains legal in Hawaii",
        "State laws protect abortion",
        "Hawaii provides funding for abortion care."
    ],
    weeksBan: 24, // Or whatever the limit is
    abbr: "HI"
  },
  {
    name: "Idaho",
    restrictionLevel: 5,
    restrictionFacts: [
        "Idaho's policies bans abortion.",
        "There are exception in cases to protect the mother and/or cases of rape and incest",
        "Idaho Supreme Court stated that access to abortion is not a fundamental right in their state constitution"
    ],
    weeksBan: 40, // Or whatever the limit is
    abbr: "ID"
  },
  {
    name: "Indiana",
    restrictionLevel: 5,
    restrictionFacts: [
        "Indiana's policies bans abortion.",
        "There are exception in cases to protect the mother and/or cases of rape and incest",
        "Indiana maintains targeted regulation for abortion providers laws"
    ],
    weeksBan: 40, // Or whatever the limit is
    abbr: "IN"
  },
  {
    name: "Iowa",
    restrictionLevel: 4,
    restrictionFacts: [
        "Currently, Iowa is heading towards a total abortion ban.",
        "Iowa limits public funding",
        "Iowa maintains targeted regulation for abortion providers laws"
    ],
    weeksBan: 6, // Or whatever the limit is
    abbr: "ID"
  },
  {
    name: "Kansas",
    restrictionLevel: 2,
    restrictionFacts: [
        "Currently, abortion remains legal.",
        "There are many restrictions, but the highest court decided on it is the choice of the mother is protected.",
        "Kansas maintains targeted regulation for abortion providers laws"
    ],
    weeksBan: 22, // Or whatever the limit is
    abbr: "KS"
  },
  {
    name: "Kentucky",
    restrictionLevel: 5,
    restrictionFacts: [
        "Kentucky's policies bans abortion.",
        "Civil and criminal penalties",
        "Indiana maintains targeted regulation for abortion providers laws."
    ],
    weeksBan: 0, // Or whatever the limit is
    abbr: "KY"
  },
  {
    name: "Louisiana",
    restrictionLevel: 5,
    restrictionFacts: [
        "Kentucky's policies bans abortion.",
        "Civil and criminal penalties",
        "Louisiana limits public funding."
    ],
    weeksBan: 0, // Or whatever the limit is
    abbr: "LA"
  },
  {
    name: "Maine",
    restrictionLevel: 2,
    restrictionFacts: [
        "Abortion remains legal in Maine",
        "As of 2023, abortion care post 24 weeks is allowed depending on physician",
        "Maine expresses numerous protections for abortion."
    ],
    weeksBan: 24, // Or whatever the limit is
    abbr: "ME"
  },
  {
    name: "Maryland",
    restrictionLevel: 1,
    restrictionFacts: [
        "Abortion remains legal in Maryland",
        "Parental notification is required regarding cases for minors",
        "Maryland expresses numerous protections for abortion."
    ],
    weeksBan: 40, // Or whatever the limit is
    abbr: "MD"
  },
  {
    name: "Massachusetts",
    restrictionLevel: 2,
    restrictionFacts: [
        "Abortion remains legal in Massachusetts",
        "Protects the right to abortion under its consititution",
        "Constitutional protections for abortion."
    ],
    weeksBan: 24, // Or whatever the limit is
    abbr: "MA"
  },
  {
    name: "Michigan",
    restrictionLevel: 2,
    restrictionFacts: [
        "Abortion remains legal in Michigan",
        "Reduced barriers to abortion access and reproductive freedom",
        "Constitutional protections for abortion."
    ],
    weeksBan: 40, // Or whatever the limit is
    abbr: "MI"
  },
  {
    name: "Minnesota",
    restrictionLevel: 1,
    restrictionFacts: [
        "Abortion remains legal in Minnesota",
        "Reduced barriers to abortion access and reproductive freedom",
        "Constitutional protections for abortion."
    ],
    weeksBan: 40, // Or whatever the limit is
    abbr: "MI"
  },
  {
    name: "New Jersey",
    restrictionLevel: 1,
    restrictionFacts: [
        "Abortion remains legal in New Jersey",
        "Reduced barriers to abortion access and reproductive freedom",
        "Constitutional protections for abortion."
    ],
    weeksBan: 40, // Or whatever the limit is
    abbr: "NJ"
  },
  {
    name: "New Mexico",
    restrictionLevel: 3,
    restrictionFacts: [
        "Abortion remains accessible",
        "New Mexico courts have not decided on whether the state will portect abortion.",
        "Indiana maintains targeted regulation for abortion providers laws"
    ],
    weeksBan: 40, // Or whatever the limit is
    abbr: "NM"
  },
  {
    name: "North Carolina",
    restrictionLevel: 4,
    restrictionFacts: [
        "North Carolina has a 12-week abortion ban.",
        "There are mandatory 72-hour waiting periods and counseling requirements.",
        "Abortion pills avaliable by mail from providers outside of North Carolina", 
        "Parental consent required for minors",
        ],
    weeksBan: 12,
    abbr: "NC",
  },
  {
    name: "North Dakota",
    restrictionLevel: 4,
    restrictionFacts: [
        "North Dakota has a 6-week abortion ban",
        "There are only exceptions: to save the pregnant person's life, to preserve the pregnant person's physical health, If the pregnancy is a result of rape and/or incest .",
        "There are mandatory waiting periods and counseling requirements.",
        "Parental consent required for minors"
    ],
    weeksBan: 6,
    abbr: "ND",
  },
  {
    name: "Ohio",
    restrictionLevel: 2,
    restrictionFacts: [
        "Ohio has a 20-week abortion ban.",
        "Parental consent required for minors"
    ],
    weeksBan: 20,
    abbr: "OH",
  },
  {
    name: "Oklahoma",
    restrictionLevel: 5,
    restrictionFacts: [
        "Oklahoma has a near-total abortion ban.",
        "There are no exceptions to this rule",
    ],
    weeksBan: 0,
    abbr: "OK",
  },
  {
    name: "Oregon",
    restrictionLevel: 1,
    restrictionFacts: [
        "Oregon has strong protections for abortion rights.",
        "The state has expanded access to reproductive healthcare.",
        "Parental Consent required for minors"
    ],
    weeksBan: 24,
    abbr: "OR",
  },
  {
    name:"Rhode Island",
    restrictionLevel: 1,
    restrictionFacts: [
        "Rhode Island has strong protections for abortion rights.",
        "The state has expanded access to reproductive healthcare.",
        "Parental consent required for minors"
    ],
    weeksBan: 24,
    abbr: "RI",
  },
  {
    name: "South Carolina",
    restrictionLevel: 4,
    restrictionFacts: [
        "South Carolina has a 6-week abortion ban.",
        "There are mandatory waiting periods and counseling requirements.",
        "Parental consent required for minors",
        "After 6 weeks, only exceptions are to save the pregnant person's life, to preserve the pregnant person's physical health, ff the pregnancy is a result of incest/rape, or if the fetus has a low chance of survival."
    ],
    weeksBan: 6,
    abbr: "SC",
  },
  {
    name: "South Dakota",
    restrictionLevel: 5,
    restrictionFacts: [
      "Exceptions are very limited and include: To save the pregnant person's life, to preserve the pregnant person's physical health, or if the fetus is not expected to survive the pregnancy",
    ],
    weeksBan: 0,
    abbr: "SD",
  },
  {
    name: "Tennessee",
    restrictionLevel: 5,
    restrictionFacts: [
        "Exceptions are very limited and include: To save the pregnant person's life, to preserve the pregnant person's physical health, or if the fetus is not expected to survive the pregnancy",
    ],
    weeksBan: 0,
    abbr: "TN",
  },
  {
    name: "Utah",
    restrictionLevel: 4,
    restrictionFacts: [
        "Utah has a 18-week abortion ban.",
        "Parental consent required for minors",
        "72 hour waiting period is required before an abortion can be performed"
    ],
    weeksBan: 18,
    abbr: "UT",
  },
  {
    name: "Vermont",
    restrictionLevel: 1,
    restrictionFacts: [
        "Vermont has strong protections for abortion rights.",
        "The state has expanded access to reproductive healthcare.",
        "Parental consent is not required for minors"
    ],
    weeksBan: 24,
    abbr: "VT",
  },
  {
    name: "Virginia",
    restrictionLevel: 2,
    restrictionFacts: [
        "Few restrictions on abortion access.",
        "Parental consent required for minors"
    ],
    weeksBan: 24,
    abbr: "VA",
  },
  {
    name: "Washington",
    restrictionLevel: 1,
    restrictionFacts: [
        "Washington has strong protections for abortion rights.",
        "The state has expanded access to reproductive healthcare.",
        "Parental consent is not required for minors"
    ],
    weeksBan: 24,
    abbr: "WA",
  },
  {
    name: "West Virginia",
    restrictionLevel: 5,
    restrictionFacts: [
        "West Virginia has a near-total abortion ban.",
        "Exceptions are very limited and include: To save the pregnant person's life, to preserve the pregnant person's physical health, or if the fetus is not expected to survive the pregnancy",
      ],
    weeksBan: 0,
    abbr: "WV",
  },
  {
    name: "Wisconsin",
    restrictionLevel: 4,
    restrictionFacts: [
        "Wisconsin has a 20-week abortion ban.",
        "Parental consent required for minors",
        "24 hour waiting period is required before an abortion can be performed",
    ],
    weeksBan: 20,
    abbr: "WI",
  }
  
];