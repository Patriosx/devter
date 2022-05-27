//Para darle legibilidad al codigo de los estilos
export const addOpacityColor = (color, opacity) => {
  //calculo de la opacidad de hexadecimal
  const opacityHex = Math.round(opacity * 255).toString(16);
  return `${color}${opacityHex}`;
};
