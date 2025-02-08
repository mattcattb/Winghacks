import {StateData} from '../types/state'

const statesArray: StateData[] = [
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
        "Alabama's policies ban abortion.",
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
        "Alaska's policies ban abortion.",
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
    restrictionLevel: 3,
    restrictionFacts: [
        "North Dakota has a 6-week abortion ban.",
        "There are mandatory waiting periods and counseling requirements.",
        "Parental consent required for minors"
    ],
  }
  
];

export default statesArray;