export default function bodyMass(imc, age, sexo, weight) {
  let fatMassPercentage = 0;
  let fatMass = 0;
  let leanMass = 0;

  if (sexo === "Masculino") {
    fatMassPercentage = 1.2 * imc + 0.23 * Number(age) - 10.8 * 1 - 5.4;
  } else {
    fatMassPercentage = 1.2 * imc + 0.23 * Number(age) - 10.8 * 0 - 5.4;
  }
  fatMass = Number(weight) * (fatMassPercentage / 100);
  leanMass = Number(weight) - fatMass;

  return {
    fatMass: fatMass.toFixed(1),
    leanMass: leanMass.toFixed(1),
    fatMassPercentage: fatMassPercentage.toFixed(1),
  };
}
