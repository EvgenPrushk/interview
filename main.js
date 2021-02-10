// add(5)(9)(-4)(1) -> 11`

function add(x) {
   return function (y) {
       if (typeof y !== 'undefined') {
           return x = x + y
            return arguments.callee;
       }
       else {
           return x;
       }
   }
}