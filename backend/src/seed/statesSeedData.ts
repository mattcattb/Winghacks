import {StateData} from '../types/state'

const statesArray: StateData[] = [
  {
    name: "Florida",
    restrictionLevel: "Extremely Restrictive",
    restrictionFacts: [
      "Florida has a 6-week abortion ban.",
      "There are mandatory waiting periods and counseling requirements.",
      "Access to medication abortion may be limited."
    ],
    weeksBan: 6,
    abbr: "FL",
  },
  {
    name: "California",
    restrictionLevel: "Extremely Protected",
    restrictionFacts: [
      "California has strong protections for abortion access.",
      "There are no significant restrictions on abortion.",
      "The state funds abortion services for low-income individuals."
    ],
    weeksBan: 40, // Or whatever the limit is
    abbr: "CA",
  },
  {
    name: "Georgia",
    restrictionLevel: "Highly Restrictive", // Added restriction level
    restrictionFacts: [
      "Georgia has a gestational age ban (typically around 6 weeks).",
      "There are exceptions for the life of the pregnant person.",
      "Laws are subject to legal challenges."
    ],
    weeksBan: 6, // Or the actual number
    abbr: "GA",
  },
  {
    name: "Texas",
    restrictionLevel: "Extremely Restrictive",
    restrictionFacts: [
      "Texas has a near-total abortion ban.",
      "Private citizens can sue anyone who performs or aids an abortion.",
      "Access to abortion care is severely limited."
    ],
    weeksBan: 0,
    abbr: "TX",
  },
  {
    name: "New York",
    restrictionLevel: "Protected",
    restrictionFacts: [
      "New York has strong protections for abortion rights.",
      "Abortion is legal throughout pregnancy.",
      "The state has expanded access to abortion care."
    ],
    weeksBan: 40, // Or whatever the limit is
    abbr: "NY",
  },
  {
    name: "Wyoming",
    restrictionLevel: "Highly Restrictive",
    restrictionFacts: [
        "Wyoming has a near-total abortion ban.",
        "There are very limited exceptions.",
        "Access to abortion care is extremely difficult."
    ],
    weeksBan: 0,
    abbr: "WY"
  },
    {
    name: "Arizona",
    restrictionLevel: "Highly Restrictive",
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
    restrictionLevel: "Moderately Restrictive",
    restrictionFacts: [
        "Pennsylvania has some restrictions on abortion, including waiting periods.",
        "Access to abortion care varies across the state.",
        "Laws are subject to change."
    ],
    weeksBan: 24, // Or the actual number
    abbr: "PA"
  },
  {
    name: "Colorado",
    restrictionLevel: "Protected",
    restrictionFacts: [
        "Colorado has no gestational age limit on abortion.",
        "There are strong protections for abortion access.",
        "The state has laws to protect access to reproductive healthcare."
    ],
    weeksBan: 40, // Or whatever the limit is
    abbr: "CO"
  },
  {
    name: "Illinois",
    restrictionLevel: "Protected",
    restrictionFacts: [
        "Illinois has strong protections for abortion rights.",
        "Abortion is legal throughout pregnancy.",
        "The state has expanded access to reproductive healthcare."
    ],
    weeksBan: 40, // Or whatever the limit is
    abbr: "IL"
  },
  // ... Add more states here
];

export default statesArray;