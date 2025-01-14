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

  if (query.toLowerCase().includes("multiplied") && query.toLowerCase().includes("what is")) {


    const a = query.split(" ");

    return parseInt(a[2]) * parseInt(a[5].substring(0, a[5].length - 1)) + "";


  }

  if (query.toLowerCase().includes("minus") && query.toLowerCase().includes("what is")) {


    const a = query.split(" ");

    return parseInt(a[2]) - parseInt(a[4].substring(0, a[4].length - 1)) + "";


  }

  if (query.toLowerCase().includes("power") && query.toLowerCase().includes("what is")) {


    const a = query.split(" ");

    return Math.pow(parseInt(a[2]), parseInt(a[7].substring(0, a[7].length - 1))) + "";


  }


  if (query.toLowerCase().includes("hich of the following numbers is both a square and a cube")) {

    var result = "";

    var added = false;
    const a = query.split(":");
    const c = a[1].substring(1, a[1].length - 1);
    const b = c.split(", ");

    const i = parseInt(b[0]);
    const ii = parseInt(b[1]);
    const iii = parseInt(b[2]);
    const i4 = parseInt(b[3]);
    const i5 = parseInt(b[4]);
    const i6 = parseInt(b[5]);
    const i7 = parseInt(b[6]);

    if(Math.sqrt(i) * Math.sqrt(i) == i && Math.cbrt(i)*Math.cbrt(i)*Math.cbrt(i) == i){
      if(!added){
        result+=i;
      added = true;
    }
      else{
        result += ", " + i;
      }
    }
    if(Math.sqrt(ii) * Math.sqrt(ii) == ii && Math.cbrt(ii)*Math.cbrt(ii)*Math.cbrt(ii) == ii){
      
      if(!added){
        result+=ii;
      added = true;
    }
      else{
        result += ", " + ii;
      }

    }
    if(Math.sqrt(iii) * Math.sqrt(iii) == iii && Math.cbrt(iii)*Math.cbrt(iii)*Math.cbrt(iii) == iii){
      if(!added){
        result+=iii;
      added = true;
    }
      else{
        result += ", " + iii;
      }

    }
    if(Math.sqrt(i4) * Math.sqrt(i4) == i4 && Math.cbrt(i4)*Math.cbrt(i4)*Math.cbrt(i4) == i4){
      if(!added){
        result+=i4;
      added = true;
    }
      else{
        result += ", " + i4;
      }

    }
    if(Math.sqrt(i5) * Math.sqrt(i5) == i5 && Math.cbrt(i5)*Math.cbrt(i5)*Math.cbrt(i5) == i5){
      if(!added){
        result+=i5;
      added = true;
    }
      else{
        result += ", " + i5;
      }

    }
    if(Math.sqrt(i6) * Math.sqrt(i6) == i6 && Math.cbrt(i6)*Math.cbrt(i6)*Math.cbrt(i6) == i6){
      if(!added){
        result+=i6;
      added = true;
    }
      else{
        result += ", " + i6;
      }

    }
    if(Math.sqrt(i7) * Math.sqrt(i7) == i7 && Math.cbrt(i7)*Math.cbrt(i7)*Math.cbrt(i7) == i7){
      if(!added){
        result+=i7;
      added = true;
    }
      else{
        result += ", " + i7;
      }

    }
    return result;

  }



























  return "";



}
