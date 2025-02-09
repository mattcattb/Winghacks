

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
      return "text-red-700"; // Or bg-red-200 for background color
    case 4:
      return "text-orange-700";
    case 3:
      return "text-yellow-700";
    case 2:
      return "text-green-700";
    case 1:
      return "text-blue-700";
    default:
      return "text-gray-700"; // Default color
  }
};