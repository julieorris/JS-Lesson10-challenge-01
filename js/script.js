const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");
const learning = {};
learning.topic = "JS";
learning.learningGoals = [
  "Build JS Programs",
  "Practice the JS Language",
  "Master Object Literals",
  "Create interactive websites"
];
learning.category = "Front End Development";
learning.topicImportance = "High";
//console.log(learning);

learning.topic = "Java script";
//console.log(learning.topic);

learning.learningGoals.splice(1, 1);

//console.log(learning.learningGoals);

topicElement.innerText = `I'm learning ${learning.topic}.`;
topicElement.classList.remove("hide");

countElement.innerText = `I have ${learning.learningGoals.length} learning goals`;
countElement.classList.remove("hide");
