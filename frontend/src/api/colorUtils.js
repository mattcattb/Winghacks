

export const getStateFill = (restrictionLevel) => {
  switch (restrictionLevel) {
    case 5: 
      return "fill-[#D52D00]";
    case 4: 
      return "fill-[#EF7627]";
    case 3:
      return "fill-[#FF9A56]";
    case 2:
      return "fill-[#D162A4]";
    case 1:
      return "fill-[#B55690]";
    default:
      return "fill-gray-700";
  }
}

export const getRestrictionColor = (level) => {
  switch (level) {
    case 5:
      return "text-[#D52D00]"; // Or bg-red-200 for background color
    case 4:
      return "text-[#EF7627]";
    case 3:
      return "text-[#FF9A56]";
    case 2:
      return "text-[#D162A4]";
    case 1:
      return "text-[#B55690]";
    default:
      return "text-gray-700"; // Default color
  }
};