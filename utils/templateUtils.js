/* *
 * Template Util Functions

 * */

const Util = {
    randomNumber: (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  
    randomId: () => {
      const currentTime = new Date().getTime();
      const randomNumber = Util.randomNumber(100, 999);
      return `${currentTime}-${randomNumber}`;
    },
  
    getQueryString: (url, parameter) => {
      const myParameter = parameter.replace(/[[\]]/g, '\\$&');
      const regex = new RegExp(`[?&]${myParameter}(=([^&#]*)|&|#|$)`);
      const results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    },
  
    mapOrder: (array, order, key) => {
      const arr = [];
      order.map((item) => arr.push(item.id));
      array.sort((a, b) => {
        const A = a[key],
          B = b[key];
  
        if (arr.indexOf(A) > arr.indexOf(B)) {
          return 1;
        } else {
          return -1;
        }
      });
  
      return array;
    },
  
    editable: () => {
      window.location.pathname.replace('/', '');
  
      return true;
    },
  };
  
  export default Util;
  