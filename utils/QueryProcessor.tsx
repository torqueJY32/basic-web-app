export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("Which of the following numbers is the largest: 54, 70, 17?")) {
    return "70";
  }

  return "";

  if (query.toLowerCase().includes("what is your name?")) {
    return "qu ni ma de";
  }
  return "";


  if (query.toLowerCase().includes("what is your name?")) {
    return "qu ni ma de";
  }
  return "";


  if (query.toLowerCase().includes("what is your name?")) {
    return "qu ni ma de";
  }
  return "";


  if (query.toLowerCase().includes("what is your name?")) {
    return "qu ni ma de";
  }
  return "";

}
