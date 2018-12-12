function describe(def, func, header = "h1") {
    document.getElementById('results').innerHTML += '<' + header + '>' + def + '</' + header + '>';
    return func();
}

const it = (def, func) => describe("\xa0\xa0" + def, func, 'h2');

const matchers = (exp) => ({
  toEqual: (value) =>  {
    if (exp === value) {
      document.getElementById('results').innerHTML += "<h3 style='color: green;'>\xa0\xa0\xa0\xa0Pass</h3><br>";
    } else {
      document.getElementById('results').innerHTML += "<h3 style='color: red;'>\xa0\xa0\xa0\xa0Fails Expected:" + value + " but got " + exp + "</h3><br>";
    }
  }
});

const expect = (exp) => matchers(exp);
