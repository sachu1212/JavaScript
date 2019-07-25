function highest()
{
  var a= "";

  for (var i=0; i<arguments.length; i++)
  {
      if (arguments[i]>a)
      {
          a = arguments[i]
      }
  }
  console.log("Highest Number is " + a);
}

  highest(18,8,9,3);