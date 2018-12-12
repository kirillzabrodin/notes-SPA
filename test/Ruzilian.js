function describe(def, func) {
    document.getElementById('results').innerHTML += '<h3>' + def + '</h3>';
    return func();
}

const it = (def, func) => describe("\xa0\xa0" + def, func);

const matchers = (exp) => ({
  toEqual: (value) =>  {
    if (exp === value) {
      document.getElementById('results').innerHTML += "<h3 style='color: green;'>\xa0\xa0\xa0\xa0Pass</h3><br>";
    } else {
      document.getElementById('results').innerHTML += "<h3 style='color: red;'>\xa0\xa0\xa0\xa0Fails<br>Expected:" + exp + " but got " + value + "</h3><br>";
      // document.getElementById('results').innerHTML += console.trace(exp);
    }
  }
});

const expect = (exp) => matchers(exp);
