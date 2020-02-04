var begin = document.getElementById("begin");
var partOne = document.getElementById("partOne");
var lottery = document.getElementById("lottery");

//these variables connect our code with the 'id' on the html
//we can then manipulate the variables and it will manipulate the html
var images = document.getElementById("images");
var text = document.getElementById("text");
var buttonBox = document.getElementById('buttonBox');
var input = document.getElementById('input');
var container = document.getElementById('container');

//this is the variable for the name of the character
var yourname;


function start() {
  begin.style.display = "none";
  lottery.style.display = "block";
  container.style.display = "none"
  
}

var changeText = function(words) {
  text.innerHTML = words.replace("Your Name", yourname);
};

//this takes the image link and puts it in the proper format, sending it to the html
var changeImage = function(img) {
  images.style.backgroundImage = "url(" + img + ")";
};


//this looks at the number of options we have set and creates enough buttons
var changeButtons = function(buttonList) {
  buttonBox.innerHTML = "";
  for (var i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  };
};

//this is what moves the game along
var advanceTo = function(s) {
  changeImage(s.image)
  changeText(s.text)
  changeButtons(s.buttons)
};


input.onkeypress = function(event) {
  console.log(input.value);
  if (event.key == "Enter" || event.keyCode == 13) {
    yourname =  input.value;
    input.parentNode.removeChild(input)
    advanceTo(scenario.one)
  }
};

function choice() {
  begin.style.display = "none";
  lottery.style.display = "none";
  partOne.style.display = "none";
  container.style.display = "block";

};


// whenever you have the text 'Your Name' within the scenarios, it will populate the input name that was typed by the user before the story starts:
var scenario = {
  one: {
    image: "media/lottery.jpg",
    text: "Hi Your Name . Now that you have $60,000, what will be your first purchase?\n",
    buttons: [["A nice red 458 Ferrari", "advanceTo(scenario.lose)"],["Go on a shopping spree at the mall.", "advanceTo(scenario.shopping)"], ["Save it", "advanceTo(scenario.saveit)"]]
  },
  lose: {
    image: "media/ferrari.jpg",
    text: "CONGRATULATIONS Your Name ,you now have a nice red 458 Ferrari, but unfortunately you have spent all your money on a car.",
    buttons: [["Restart", "advanceTo(scenario.one)"]]
  },
  shopping: {
    image: "media/shopping-spree.jpg",
    text: "You just spent $5,000 at the mall.",
    buttons: [["Continue", "advanceTo(scenario.charity)"]]
  },
  saveit: {
    image: "media/piggy-bank.png",
    text: "We shall see what your next purchase will be.",
    buttons: [["Continue", "advanceTo(scenario.charity)"]]
  },
  charity: {
    image: "media/donation.jpg",
    text: "A charity company calls you and ask for a donation of $10,000.",
    buttons: [["ACCEPT", "advanceTo(scenario.acceptDonation)"],["DECLINE", "advanceTo(scenario.declineDonation)"]]
  },
  acceptDonation: {
    image: "media/donation.jpg",
    text: "CONGRATS you've done a good deed!",
    buttons: [["Continue", "advanceTo(scenario.youtube)"]]
  },
  declineDonation: {
    image: "media/donation.jpg",
    text: "Having a lot of money is cool, but be sure to give back to the less fortunate!",
    buttons: [["Continue", "advanceTo(scenario.youtube)"]]
  },
  youtube: {
    image: "media/stocks.jpg",
    text: "You see a YouTube video and it teaches you the fundamentals of dialy trading. Will you invest your time and energy to learn more about it?",
    buttons: [["Yes", "advanceTo(scenario.youtubeyes)"],["No", "advanceTo(scenario.youtubeno)"]]
  },
  youtubeyes: {
    image: "media/stocks.jpg",
    text: "It has been a month since you've been daily trading and you invested $10,000 into stocks, which now is equivalent to $20,000!",
    buttons: [["Continue", "advanceTo(scenario.coachella)"]]
  },
  youtubeno: {
    image: "media/stocks.jpg",
    text: "It has been a month since you won the lottery ticket and you've been relaxing at home, eating out constantly, and consuming a bunch of junk food. You spent $5,000 at home doing nothing.",
    buttons: [["Continue", "advanceTo(scenario.coachella)"]]
  },
  coachella: {
    image: "media/coachella.jpg",
    text: "All your friends just got tickets to the Coachella Music Festival and they invite you to go withem. There will be 250,000 people in attendance and all of your favorite celebrity musicians will be there. Are you going?",
    buttons: [["Yes", "advanceTo(scenario.coachellayes)"], ["No", "advanceTo(scenario.coachellano)"]]
  },
  coachellayes: {
    image: "media/coachella.jpg",
    text: "You just had the best weekend in California with your friends, but you spent a total of $3,000 on a planet ticket, tickets to the music festival, expenses on food, a place to stay.",
    buttons: [["Continue", "advanceTo(scenario.cat)"]]
  },
  coachellano: {
    image: "media/coachella.jpg",
    text: "You didn't get to experience the music festival, but you saved $3,000.",
    buttons: [["Continue", "advanceTo(scenario.cat)"]]
  },
  cat: {
    image: "media/serval-cat.jpg",
    text: "One of your friends has an investment idea to get a Serval cat to breed with his Savannah cat. The cost of it will be $5,000. Are you up to make some extra money?",
    buttons: [["Yes", "advanceTo(scenario.catyes)"], ["No", "advanceTo(scenario.catno)"]]
  },
  catyes: {
    image: "media/serval-cat.jpg",
    text: "You just trusted your friend with $5,000. The investment idea sounded good, but he had no experience with breeding cats. You now have lost $5,000.",
    buttons: [["Continue", "advanceTo(scenario.photography)"]]
  },
  catno: {
    image: "media/serval-cat.jpg",
    text: "You just saved yourself from losing $5,000!",
    buttons: [["Continue", "advanceTo(scenario.photography)"]]
  },
  photography: {
    image: "media/photography.jpg",
    text: "You're scrolling through Instagram one day, and is inspired by the concept of photography. The idea of making photography as a side hustle seems like a good idea. Will you invest your money into a nice camera?",
    buttons: [["Yes", "advanceTo(scenario.photographyyes)"], ["No", "advanceTo(scenario.photographyno)"]]
  },
  photographyyes: {
    image: "media/photography.jpg",
    text: "You've spent $3,000 on a nice camera and a high prouction lense. But you don't have any clientele. Keep working on your craft! You may turn this photography into a business ",
    buttons: [["Continue", "advanceTo(scenario.christmas)"]]
  },
  photographyno: {
    image: "media/photography.jpg",
    text: "You're scrolling through Instagram one day, and is inspired by the concept of photography. The idea of making photography as a side hustle seems like a good idea. Will you invest your money into a nice camera?",
    buttons: [["Continue", "advanceTo(scenario.christmas)"]]
  },
  christmas: {
    image: "media/christmas.jpg",
    text: "Christmas is coming up, will you be buying your loved ones gifts?",
    buttons: [["Yes", "advanceTo(scenario.christmasyes)"], ["No", "advanceTo(scenario.christmasno)"]]
  },
  christmasyes: {
    image: "media/christmas.jpg",
    text: "All your family members know you wont he lottery ticket. So they made you feel obligated to buy them gifts. You spent a total of $5,000.",
    buttons: [["Continue", "advanceTo(scenario.newyears)"]]
  },
  christmasno: {
    image: "media/christmas.jpg",
    text: "You saved $5,000 on buying gifts, but family members are upset and assume you are selfish.",
    buttons: [["Continue", "advanceTo(scenario.newyears)"], ]
  },
  newyears: {
    image: "media/new-york.jpg",
    text: "New Years is approaching and friends are inviting you to a trip to New York. Are you up for a fun time?",
    buttons: [["Yes", "advanceTo(scenario.newyearsyes)"], ["No", "advanceTo(scenario.newyearsno)"]]
  },
  newyearsyes: {
    image: "media/new-york.jpg",
    text: "You just spent a whole week in New York and had so much fun with your friends. The best part was that your friend paid for your whole New York trip.",
    buttons: [["Continue", "advanceTo(scenario.restaurant)"]]
  },
  newyearsno: {
    image: "media/new-york.jpg",
    text: "You missed out on a good time with your friends.",
    buttons: [["Continue", "advanceTo(scenario.restaurant)"]]
  },
  restaurant: {
    image: "media/mom-restaurant.jpg",
    text: "Your mom is thinking of opening a restaurant in the local area, but she needs help with money. With the remaining amount of money you have left, she will be able to open up a restaurant. Will you help your mom?",
    buttons: [["Yes", "advanceTo(scenario.restaurantyes)"], ["No", "advanceTo(scenario.restaurantno)"]]
  },
  restaurantyes: {
    image: "media/mom-restaurant.jpg",
    text: "Unfortuantely, you didn't ask enough questions when your mom wanted to borrwo your money to open a restaurant. Ad NEVER put all your eggs in one basket.",
    buttons: [["Continue", "advanceTo(scenario.savemoney)"]]
  },
  restaurantno: {
    image: "media/mom-restaurant.jpg",
    text: "Even though you disappointed your mom, by not letting her borrow money. You knew she wasn't experienced enough to dive right in to opening a restaurant of her own.",
    buttons: [["Continue", "advanceTo(scenario.savemoney)"]]
  },
  savemoney: {
    image: "media/save-money.jpg",
    text: "TAKE THIS GAME AS A LESSON LEARN. THINK BEFORE MAKING ANY ACTION!"
  }
};