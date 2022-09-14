export const colors = {
    orange: '#EF9039',
    blue: '#4267b2',
    red: '#FF6961',
    yellow: '#FFDD36',
    darkYellow: '#FFBE61',
    green: '#8DB48E',
    lightBlue: '#6A8CAF',
    white: '#ffffff',
    lightBrown: '#DEB992',
    fontGray: '#4A4A4A',
    grey:"#c2c2c2"
  };
  
  export function hexToRgbA(hex, opacity = 1) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
      return (
        'rgba(' +
        [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
        `,${opacity})`
      );
    }
    throw new Error('Bad Hex');
  }
  