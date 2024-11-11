var x = 0;
function getQoutes() {
  console.log(x);

  var Qoutes = [
    "“If you tell the truth, you don't have to remember anything.”",
    "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
    "“Always forgive your enemies; nothing annoys them so much.”",
    "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    "“In three words I can sum up everything I've learned about life: it goes on.”",
    "“Be the change that you wish to see in the world.”",
  ];
  var Qoutes2 = [ "“Be the change that you wish to see in the world.”","“In three words I can sum up everything I've learned about life: it goes on.”",
    "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
      "“Always forgive your enemies; nothing annoys them so much.”",
      "“If you tell the truth, you don't have to remember anything.”",
      "“The best revenge is massive success.”"
   ]
  var auther = [
    "― Mark Twain",
    "― Maya Angelou",
    "― Oscar Wilde",
    "― Mahatma Gandhi",
    "― Robert Frost",
    "― Mahatma Gandhi",
  ];

  {
    var number = Math.floor(Math.random() * Qoutes.length);
    if (x !== number) {
      document.getElementById("qoute").innerHTML = Qoutes[number];
      document.getElementById("auther").innerHTML = auther[number];
    } else {
      document.getElementById("qoute").innerHTML = Qoutes2[number];
      document.getElementById("auther").innerHTML = `** ${auther[number]} **`;
    }
  }

  x = number;
}
