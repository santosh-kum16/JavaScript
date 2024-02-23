// "throw" statement to throw an exception

function add(x, y) 
{
    if (typeof x !== 'number') {
      throw 'The first argument must be a number';
    }
    if (typeof y !== 'number') {
      throw 'The second argument must be a number';
    }
  
    return x + y;
  }
  
  const result = add(8,'9');
  console.log(result);

  // throw statement to throw an instance of the Error class
  function add(x, y) {
    if (typeof x !== 'number') {
      throw new Error('The first argument must be a number');
    }
    if (typeof y !== 'number') {
      throw new Error('The second argument must be a number');
    }
  
    return x + y;
  }
  
  try {
    const result = add('a', 10);
    console.log(result);
  } catch (e) {
    console.log(e.name, ':', e.message);
  }
  
  // throw statement to throw a user-defined exception

  /*want to throw a custom error rather than the built-in Error. To do that, you can define a custom error class that 
    extends the Error class and throw a new instance of that class. For example:

    First, define the NumberError that extends the Error class:
  class NumberError extends Error {
    constructor(value) {
      super(`"${value}" is not a valid number`);
      this.name = 'InvalidNumber';
    }
  }

  
function add(x, y) {
    if (typeof x !== 'number') {
      throw new NumberError(x);
    }
    if (typeof y !== 'number') {
      throw new NumberError(y);
    }
  
    return x + y;
  }