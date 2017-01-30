So this is a web page that will check to see if you can drink legally

*Still under development

*CSS- bootstrap
*Html - {
  <body>
  <div id="blurred_bckgrd">
    <div id="header">
      <h1>Are you old enough to drink ?</h1>
    </div>
    <div>
      <form>
        <p>Which year were you born in ? </p>
        <input type="number" name="yourbirthyr">
        <button onclick="myFunction()" class="btn btn-default">Let's See</button>
      </form>
    </div>

    <div><p id="demo"></p></div>
  </div>
</body>
}

*JS  
{
  /*  1. take input and subtract input from current year.
      2. if the product is => 21 return yup go ahead
      3. else return nope you have _________ till you can drink
     -Ramblings - on click [takes input and runs a function]
                - function = minus ur birth year from current
                  date, if results => 21/remainder put stuff in demo that says yes drink else nope
  */

  function myFunction() {
    var today = new Date();
    var year = today.getFullYear();
    var remainder = 21;
    if /*input*/ ;

      document.getElementById("demo").innerHTML = "Hello World";
  }

}
