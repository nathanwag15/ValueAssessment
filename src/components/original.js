let currentPosition = 0;
const valueName_div = document.getElementById("value-name");
const main_div = document.querySelector("Main");
const instructions = document.querySelector("instructions");
const num1_div = document.getElementById("1");
const num2_div = document.getElementById("2");
const num3_div = document.getElementById("3");
const num4_div = document.getElementById("4");
const num5_div = document.getElementById("5");
var values = ("Accountability Achievement Adventure Assertiveness Authenticity Authority Balance Beauty Career Caring Challenge Compassion Connection Contribution Cooperation Courage Creativity Curiosity Efficiency Encouragement Equality Excitement Faith Fitness Flexibility Freedom Friendliness Forgiveness Fun Generosity Gratitude Honesty Humility Independence Integrity Intimacy Justice Kindness Learning Legacy Loyalty Love Mindfulness Organized Open-mindedness Passion Patience Persistence Quality Recognition Respect Risk-Taking Romance Safety Self-awareness Self-development Self-control Sensuality Skillfulness Spirituality Supportive Trust Urgency Wealth").split(" ")
var valuesNumber = [];
var firstValues = [];

function all_num(key) {
    var list_of_num = []
    for (var i=0; i < values.length; i++) {
        if (valuesNumber[i] == key) {
            list_of_num.push(values[i]);
        }
    }
    return list_of_num;
}

var sortstring = function (a, b)    {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

function findFirstValues() {
  console.log(values.length + " vs " + valuesNumber.length);
  if (list_of_num.length < 7) {
    list_of_num = firstValues.concat(all_num(5));
  }
  if (firstValues.length < 7) {
    for(var j=4; j > 0; j--) {
      firstValues = firstValues.concat(all_num(j));
      if (firstValues.length >= 7) {
        break;
      }
    }
  }
  firstValues.sort(sortstring);
  console.log(firstValues);
}

function next(number) {
  if (valuesNumber.length != values.length) {
    valuesNumber.push(number);
  }
  if (valuesNumber.length < values.length) {
    currentPosition++;
    valueName_div.innerHTML = values[currentPosition]
  } else {
      findFirstValues();
      window.location.replace("index2.html");
      option1.innerHTML = firstValues[0]
      option2.innerHTML = firstValues[1]
  }

}

function main() {
  num1_div.addEventListener('click', function() {
    next(1)
  })

  num2_div.addEventListener('click', function() {
    next(2)
  })

  num3_div.addEventListener('click', function() {
    next(3)
  })

  num4_div.addEventListener('click', function() {
    next(4)
  })

  num5_div.addEventListener('click', function() {
    next(5)
  })
}



main();
