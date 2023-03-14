export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("which of the following numbers is the largest")) {


    const a = query.split(":");
    const c = a[1].substring(1, a[1].length - 1);
    const b = c.split(", ");

    const i = parseInt(b[0]);
    const ii = parseInt(b[1]);
    const iii = parseInt(b[2]);


    if(i > ii && i > iii){
      return i + "";
    }
    if(ii > i && ii > iii){
      return ii + "";
    }
    if(iii > ii && iii > i){
      return iii + "";
    }


  }

  if (query.toLowerCase().includes("plus") && query.toLowerCase().includes("what is")) {


    const a = query.split(" ");

    return parseInt(a[2]) + parseInt(a[4].substring(0, a[4].length - 1)) + "";


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
