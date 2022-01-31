function convert_to_Tf (Tc)
{
  return (9/5)*Tc+32;
}

let first_Tc = -15;
let second_Tc = 0;
let third_Tc = 25;

console.log(convert_to_Tf(first_Tc));
console.log(convert_to_Tf(second_Tc));
console.log(convert_to_Tf(third_Tc));