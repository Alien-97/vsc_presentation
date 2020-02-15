function Person(firstName, lastName) {
  this.FirstName = firstName | "unknown";
  this.lastName = lastName | "unknown";
}

// IntelliSense with JSDoc Ex.1

/**
 * @type {{a:boolean,b:boolean,c:number}}
 */
var x = { a: true };
x.b = false;

// Una caracteristica de IntelliSense es que no infiere los tipos de parametros,
// no obstante, esto se puede hacer a través de comentarios JSDoc

// IntelliSense with JSDoc Ex.2
/**
 *
 * @param {string} param1 the first argument to this function
 */
function paramsConversion() {
  return (this.prop = param1);
}
