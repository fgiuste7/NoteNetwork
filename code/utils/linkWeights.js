export function linkWeights(A, B) {
  	// A and B are notes with attribute encounterDate
  	A = new Date(A);
  	B = new Date(B);
  	strength = Math.abs(A.encounterDate - B.encounterDate);
  	strength = Math.round(strength/100000000);
  	return(strength);
  }



