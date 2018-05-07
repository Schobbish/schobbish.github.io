$(document).ready(function() {
   /*

   define variables and functions for set up

   */

   var secondMode = false;
   var modeMode = false;
   var mathMode = false;
   var prbMode = false;
   var angleMode = false;
   var logMode = false;
   var trigMode = false;
   var useVarMode = false;
   var stoVarMode = false;
   // use mode 0 to set text and class to ids (defaults). use mode 1 to set text to classes.
   var textSetter = function(mode) {
      // mode 0 is for setting the text to the ids (defaults),
      // mode 1 is for setting the text to the classes.
      if(mode === 1) {
         $('#buttons tr td').each(function() {
            $(this).html($(this).attr('class'));
         });
      } else {
         $('#buttons tr td').each(function() {
            $(this).addClass($(this).attr('id'));
            $(this).html($(this).attr('id'));
         });
      }
      // the following are exceptions

      // default functions
      $('.second').html('2nd');
      $('.per').html('%');
      $('.del').html('del');
      $('.logMenu').html('log');
      $('.pi').html('&#960;');
      $('.tenUpB').html('A&#215;10<sup>B</sup>');
      $('.sqrt').html('&#8730;');
      $('.squ').html('<sup>2</sup>');
      $('.pow').html('A<sup>B</sup>');
      $('.div').html('A&#247;B');
      $('.mul').html('A&#215;B');
      $('.three').html('3');
      $('.sub').html('A&#8722;B');
      $('.dec').html('.');
      $('.add').html('A+B');
      $('.useAns').html('ans');
      // 2nd functions
      $('.toPer').html('&#9654;%');
      $('.delB').html('del B');
      $('.rec').html('1/x');
      $('.athRoot').html('<sup>A</sup>&#8730;B');
      $('.intDiv').html('A int B');
      $('.neg').html('(-)');
      // math functions
      $('.lcm').html('lcm(A,B)');
      $('.gcd').html('gcd(A,B)');
      $('.abs').html('|x|');
      $('.round').html('round()');
      $('.iPart').html('iPart()');
      $('.fPart').html('fPart()');
      $('.min').html('min(A,B)');
      $('.max').html('max(A,B)');
      $('.mod').html('A%B');
      // prb functions
      $('.randInt').html('randInt(A,B)');
      $('.factorial').html('x!');
      // log functions
      $('.exp').html('e<sup>x</sup>');
      $('.log').html('log()');
      $('.10upB').html('10<sup>x</sup>');
      $('.ln').html('ln()');
      // trig functions
      $('.asin').html('sin<sup>-1</sup>()');
      $('.acos').html('cos<sup>-1</sup>()');
      $('.atan').html('tan<sup>-1</sup>()');
      $('.sin').html('sin()');
      $('.cos').html('cos()');
      $('.tan').html('tan()');
      // useVar buttons
      $('.un').html('n');
      $('.um').html('m');
      $('.up').html('p');
      $('.ut').html('t');
      $('.uc').html('c');
      $('.ud').html('d');
      $('.ux').html('x');
      $('.uy').html('y');
      $('.uz').html('z');
      // stoVar buttons
      $('.sn').html('&rarr;n');
      $('.sm').html('&rarr;m');
      $('.sp').html('&rarr;p');
      $('.st').html('&rarr;t');
      $('.sc').html('&rarr;c');
      $('.sd').html('&rarr;d');
      $('.sx').html('&rarr;x');
      $('.sy').html('&rarr;y');
      $('.sz').html('&rarr;z');
   };
   // only used to set all the mode vars to false in functionChanger and .second case
   var falseSetto = function() {
      modeMode = false;
      mathMode = false;
      prbMode = false;
      angleMode = false;
      logMode = false;
      trigMode = false;
      useVarMode = false;
      stoVarMode = false;
   };
   // creates menus, basically
   var functionChanger = function(classes, modeVar) {
      if(modeVar === false) {
         falseSetto();
         $('#1, #2, #3, #4, #5, #6, #7, #8, #9').each(function() {
            $(this).removeClass($(this).attr('class'));
         });
         var counter = 0;
         var classArrayLength = classes.length;
         while (counter < classArrayLength) {
            counter += 1;
            $('#' + counter).addClass('' + classes[counter - 1] + '');
         }
         textSetter(1);
      } else {
         $('#1, #2, #3, #4, #5, #6, #7, #8, #9').each(function() {
            $(this).removeClass($(this).attr('class'));
         });
         textSetter(0);
      }
   };

   /*

   define functions and variables for event listeners

   */

   // strings are used for lastAction to make more sense in statements
   var lastAction = 'initial';
   var a = null;
   var b = null;
   var x = null;
   var y = null;
   var z = null;
   var t = null;
   var c = null;
   var d = null;
   var n = null;
   var m = null;
   var p = null;
   var ans = null;
   // for variableHandler()
   var tempVar = null;

   // for the number buttons
   var numberButton = function(n) {
      if(lastAction === 'focused on a' || lastAction === 'initial' || lastAction === 'computed') {
         a = $('#a').val();
         a = parseFloat(String(b) + String(n));
         $('#a').val(a);
         lastAction = 'focused on a';
      } else if(lastAction === 'focused on b') {
         b = $('#b').val();
         b = parseFloat(String(b) + String(n));
         $('#b').val(b);
         lastAction = 'focused on b';
      }
   };
   // use mode 0 for useVar and mode 1 for stoVar
   var variableHandler = function(mode, variable) {
      if(mode !== 1) {
         // if mode is 0 (or null or anything other than 1)
         tempVar = variable;
         if(lastAction === 'focused on a' || lastAction === 'computed' || lastAction === 'initial') {
            a = tempVar;
            $('#a').val(a);
         } else if(lastAction === 'focused on b') {
            b = tempVar;
            $('#b').val(b);
         }
      } else if(mode === 1) {
         if(lastAction === 'focused on a') {
            tempVar = $('#a').val();
         } else if(lastAction === 'focused on b') {
            tempVar = $('#b').val();
         }
      }
   };
   // basicFunctions runs doThis(a[, b]) and compute() somewhere in the code
   // vars should equal the number of arguments in doThis() (default: 1)
   // if allowRepeats is true (default), doThis() will run when lastAction === 'computed'.
   var basicFunctions = function(doThis, vars, allowRepeats) {
      if(vars !== 2) {
         // runs this if vars is 1 (or anything except 2)
         if(allowRepeats !== false) {
            // runs this if allowRepeats is true (or anything except false)
            if(lastAction === 'focused on a') {
               doThis(a);
               b = null;
            } else if(lastAction === 'focused on b') {
               doThis(b);
               a = null;
            } else if(lastAction === 'computed') {
               a = ans;
               b = null;
               doThis(ans);
            }
            compute();
         } else {
            // runs this if allowRepeats is false
            if(lastAction === 'focused on a') {
               doThis(a);
               compute();
            } else if(lastAction === 'focused on b') {
               doThis(b);
               compute();
            }
         }
      } else {
         // runs this if vars is 2
         if(allowRepeats !== false) {
            // runs this if allowRepeats is true (or anything except false)
            if(lastAction === 'focused on a' || lastAction === 'focused on b') {
               doThis(a, b);
            } else if(lastAction === 'computed') {
               a = ans;
               doThis(a, b);
            }
            compute();
         } else {
            // runs this if allowRepeats is false
            if(lastAction === 'focused on a' || lastAction === 'focused on b') {
               doThis(a, b);
               compute();
            }
         }
      }
   };
   var factorial = function(value) {
      var counter = 1;
      var result = 1;
      while(counter <= value) {
         result = result * counter;
         counter += 1;
      }
      return result;
   };
   // updates lastAction and all text fields
   var compute = function() {
      $('#a').val(a);
      $('#b').val(b);
      $('#ans').val(ans);
      lastAction = 'computed';
   };

   /*

   begin event listeners

   */

   // run textSetter to set up
   textSetter(0);
   // checks whenever the numbers are focused
   $('#a').focus(function() {
      lastAction = 'focused on a';
   });
   $('#b').focus(function() {
      lastAction = 'focused on b';
   });
   // updates a and b when their fields are changed
   $('#a').change(function() {
      a = $('#a').val();
      a = parseFloat(a);
   });
   $('#b').change(function() {
      b = $('#b').val();
      b = parseFloat(b);
   });
   // prevents the user from changing the #ans field
   $('#ans').change(function() {
      $('#ans').val(ans);
   });

   // main button function
   $('#buttons tr td').click(function() {
      switch ($(this).attr('class')) {

         // menu buttons
         case 'second':
            if(secondMode === false) {
               falseSetto();
               $('#buttons tr td').each(function() {
                  $(this).removeClass($(this).attr('class'));
               });
               $('#second').addClass('second');
               $('#mode').addClass('quit');
               $('#per').addClass('toPer');
               $('#tenUpB').addClass('rec');
               $('#sqrt').addClass('athRoot');
               $('#useVar').addClass('clrVar');
               $('#div').addClass('intDiv');
               $('#0').addClass('reset');
               $('#ans').addClass('neg');
               textSetter(1);
               secondMode = true;
            } else {
               $('#buttons tr td').each(function() {
                  $(this).removeClass($(this).attr('class'));
               });
               textSetter(0);
               secondMode = false;
            }
            break;
         case 'mode':
            functionChanger(['not', 'made', 'yet'], modeMode);
            if(modeMode === false) {
               modeMode = true;
            } else {
               modeMode = false;
            }
            break;
         case 'math':
            functionChanger(['lcm', 'gcd', 'abs', 'round', 'iPart', 'fPart', 'min', 'max', 'mod'], mathMode);
            if(mathMode === false) {
               mathMode = true;
            } else {
               mathMode = false;
            }
            break;
         case 'prb':
            functionChanger(['aPb', 'aCb', 'factorial', 'random', 'randInt'], prbMode);
            if(prbMode === false) {
               prbMode = true;
            } else {
               prbMode = false;
            }
            break;
         case 'logMenu':
            functionChanger(['log', '10upB', 'ln', 'exp'], logMode);
            if(logMode === false) {
               logMode = true;
            } else {
               logMode = false;
            }
            break;
         case 'trig':
            functionChanger(['sin', 'cos', 'tan', 'asin', 'acos', 'atan'], trigMode);
            if(trigMode === false) {
               trigMode = true;
            } else {
               trigMode = false;
            }
            break;
         case 'useVar':
            functionChanger(['ux', 'uy', 'uz', 'ut', 'uc', 'ud', 'un', 'um', 'up'], useVarMode);
            if(useVarMode === false) {
               useVarMode = true;
            } else {
               useVarMode = false;
            }
            break;
         case 'stoVar':
            functionChanger(['sx', 'sy', 'sz', 'st', 'sc', 'sd', 'sn', 'sm', 'sp'], stoVarMode);
            if(stoVarMode === false) {
               stoVarMode = true;
            } else {
               stoVarMode = false;
            }
            break;

         // number buttons
         case '1':
            numberButton(1);
            break;
         case '2':
            numberButton(2);
            break;
         case '3':
            numberButton(3);
            break;
         case '4':
            numberButton(4);
            break;
         case '5':
            numberButton(5);
            break;
         case '6':
            numberButton(6);
            break;
         case '7':
            numberButton(7);
            break;
         case '8':
            numberButton(8);
            break;
         case '9':
            numberButton(9);
            break;
         case '0':
            numberButton(0);
            break;

         // four basic operators
         case 'add':
            basicFunctions(function(x, y) {
               ans = x + y;
            }, 2, true);
            break;
         case 'sub':
            basicFunctions(function(x, y) {
               ans = x - y;
            }, 2, true);
            break;
         case 'mul':
            basicFunctions(function(x, y) {
               ans = x * y;
            }, 2, true);
            break;
         case 'div':
            basicFunctions(function(x, y) {
               ans = x / y;
            }, 2, true);
            break;

         // ans and del
         case 'useAns':
            if(ans !== null) {
               if(lastAction === 'focused on a' || lastAction === 'computed') {
                  a = ans;
                  $('#a').val(a);
                  //ans = null;
                  $('#ans').val(ans);
               } else if(lastAction === 'focused on b') {
                  b = ans;
                  $('#b').val(b);
                  //ans = null;
                  $('#ans').val(ans);
               }
            }
            break;
         case 'del':
            // preferably del would delete one character, but here it acts as clear
            if(lastAction === 'focused on a') {
               a = null;
               $('#a').val(a);
            } else if(lastAction === 'focused on b') {
               b = null;
               $('#b').val(b);
            }
            break;

         // variable buttons
         case 'ux':
            variableHandler(0, x);
            break;
         case 'uy':
            variableHandler(0, y);
            break;
         case 'uz':
            variableHandler(0, z);
            break;
         case 'ut':
            variableHandler(0, t);
            break;
         case 'uc':
            variableHandler(0, c);
            break;
         case 'ud':
            variableHandler(0, d);
            break;
         case 'un':
            variableHandler(0, n);
            break;
         case 'um':
            variableHandler(0, m);
            break;
         case 'up':
            variableHandler(0, p);
            break;
         case 'sx':
            variableHandler(1);
            x = tempVar;
            break;
         case 'sy':
            variableHandler(1);
            y = tempVar;
            break;
         case 'sx':
            variableHandler(1);
            z = tempVar;
            break;
         case 'st':
            variableHandler(1);
            t = tempVar;
            break;
         case 'sc':
            variableHandler(1);
            c = tempVar;
            break;
         case 'sd':
            variableHandler(1);
            d = tempVar;
            break;
         case 'sn':
            variableHandler(1);
            n = tempVar;
            break;
         case 'sm':
            variableHandler(1);
            m = tempVar;
            break;
         case 'sp':
            variableHandler(1);
            p = tempVar;
            break;

         // some default functions
         case 'per':
            basicFunctions(function(x) {
               ans = x / 100;
            }, 1, true);
            break;
         case 'pi':
            variableHandler(0, Math.PI);
            break;
         case 'tenUpB':
            basicFunctions(function(x, y) {
               ans = Math.pow(10, y) * a;
            }, 2, true);
            break;
         case 'sqrt':
            basicFunctions(function(x) {
               ans = Math.sqrt(x);
            }, 1, true);
            break;
         case 'squ':
            basicFunctions(function(x) {
               ans = Math.pow(x, 2);
            }, 1, true);
            break;
         case 'pow':
            basicFunctions(function(x, y) {
               ans = Math.pow(x, y);
            }, 2, true);
            break;
         case 'dec':

            break;
         // 2nd functions
         case 'quit':
            location.reload();
            break;
         case 'toPer':
            basicFunctions(function(x) {
               ans = x * 100;
            }, 1, true);
            break;
         case 'rec':
            basicFunctions(function(x) {
               ans = 1 / x;
            }, 1, true);
            break;
         case 'athRoot':
            basicFunctions(function(x, y) {
               ans = Math.pow(y, 1 / x);
            }, 2, true);
            break;
         case 'intDiv':

            break;
         case 'reset':
            location.reload(true);
            break;

         // math functions
         case 'min':
            basicFunctions(function(x, y) {
               ans = Math.min(x, y);
            }, 2, false);
            break;
         case 'max':
            basicFunctions(function(x, y) {
               ans = Math.max(x, y);
            }, 2, false);
            break;
         case 'mod':
            basicFunctions(function(x, y) {
               ans = x % y;
            }, 2, true);
            break;
         case 'round':
            basicFunctions(function(x) {
               ans = Math.round(x);
            }, 1, false);
            break;
         case 'iPart':
            basicFunctions(function(x) {
               // convert x to string and split it at the decimal
               x = String(x).split('.');
               // set ans to everything before the decimal (1st in arry)
               ans = x[0];
            }, 1, false);
            break;
         case 'fPart':
            basicFunctions(function(x) {
               var tempVar2 = false;
               if(x < 0) {
                  // stores the negativity of x
                  tempVar2 = true;
               }
               // convert x to a string and split it at the decimal
               x = String(x).split('.');
               // get the stuff after the decimal (2nd in array) and make a decimal
               x = '0.' + x[1];
               if(x === undefined) {
                  // if x is undefined set it to 0 (means there is no fPart)
                  x = 0;
               }
               if(tempVar2 === true) {
                  // gets the negativity of x from eariler
                  x = x * -1;
               }
               ans = x;
            }, 1, false);
            break;
         case 'lcm':

            break;
         case 'gcd':

            break;
         case 'abs':
            basicFunctions(function(x) {
               ans = Math.abs(x);
               console.log('hi');
            }, 1, true);
            break;

         // prb functions (allowRepeats set to false for safety for factorial functions)
         case 'aPb':
            basicFunctions(function(x, y) {
               ans = factorial(x) / factorial(x - y);
            }, 2, false);
            break;
         case 'aCb':
            basicFunctions(function(x, y) {
               ans = factorial(x) / (factorial(y) * factorial(x - y));
            }, 2, false);
            break;
         case 'factorial':
            basicFunctions(function(x) {
               ans = factorial(x);
            }, 1, false);
            break;
         case 'random':
            variableHandler(0, Math.random());
            break;
         case 'randInt':
            basicFunctions(function(x, y) {
               ans = Math.floor(Math.random() * y) + x;
            }, 2, false);
            break;

         // log functions
         case 'log':
            basicFunctions(function(x) {
               ans = Math.log(x) / Math.log(10);
            }, 1, true);
            break;
         case '10upB':
            basicFunctions(function(x) {
               ans = Math.pow(10, x);
            }, 1, false);
            break;
         case 'ln':
            basicFunctions(function(x) {
               ans = Math.log(x);
            }, 1, true);
            break;
         case 'exp':
            basicFunctions(function(x) {
               ans = Math.exp(x);
            }, 1, false);
            break;

         // trig functions (in radians)
         case 'sin':
            basicFunctions(function(x) {
               ans = Math.sin(x);
            }, 1, false);
            break;
         case 'cos':
            basicFunctions(function(x) {
               ans = Math.cos(x);
            }, 1, false);
            break;
         case 'tan':
            basicFunctions(function(x) {
               ans = Math.tan(x);
            }, 1, false);
            break;
         case 'asin':
            basicFunctions(function(x) {
               ans = Math.asin(x);
            }, 1, false);
            break;
         case 'acos':
            basicFunctions(function(x) {
               ans = Math.acos(x);
            }, 1, false);
            break;
         case 'atan':
            basicFunctions(function(x) {
               ans = Math.atan(x);
            }, 1, false);
            break;
         case undefined:
            // do nothing; it's probably one of the fields
            break;
         default:
            console.log('no script found for clicking .' + $(this).attr('class') + ' (not necessarily an error)');
      }
      /* BUTTONS DONE:
         all menus
         all number buttons
         all variable buttons
         all default functions except .dec
         all math functions except lcm and gcd
      */
      /* CASE SNIPPET:
         case 'class':
            basicFunctions(function(x) {
               ans = x;
            }, 1, false);
            break;
      */
      /* TODO:
         .lcm, .gcd, .dec
         degree and radian mode
      */
   });
}); // nothing past this line please
