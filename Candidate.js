class Candidate{

constructor(){

    this.name = null
    this.score = 0
    this.time = 0
    this.count=0
  

}
getCount(){
    var playerCountRef = database.ref('candidateCount');
    playerCountRef.on("value",(data)=>{
      candidateCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      candidateCount: count
    });
  }

update(){


    var canIndex = "candidates/candidate"+ candidateCount
    database.ref(canIndex).set({

        name: this.name
    })
}


questions(){
    gameState=2;
    var ele1 = createElement('h3');
    
    var button1 = createRadio();
    button1.position(100,300)

    var button2 = createRadio();
    button2.position(100,350)

    var button3 = createRadio();
    button3.position(100,400)

    var button4 = createRadio();
    button4.position(100,450)

    var submitButton= createButton("Submit")
submitButton.position(200,500)

    this.count = this.count+1
    console.log("the count:"+this.count)
    switch(this.count){

case 1 :
  ele1.html("What is the minimum age for driving a motorcycle without gear?")
  ele1.position(150, 150)
button1.option("16 years")
button2.option("18 years")
button3.option("21 years")
correct[this.count] = "16 years"

break;

case 2:
  ele1.html("What should you do when you see a traffic sign of a school nearby?")
  ele1.position(150, 150)
button1.option("Stop the vehicle")
button2.option("Slow down and proceed carefully")
button3.option("Press horn and proceed in the same speed")
correct[this.count]="Slow down and proceed carefully"

break;

case 3:
  ele1.html("Before you overtake a vehicle what should you keep in mind?")
  ele1.position(150, 150)
button1.option("The road ahead should be clearly visible and overtaking should be safe");
button2.option("The road is not safe");
button3.option("There are no vehicles ahead");
correct[this.count]="The road ahead should be clearly visible and overtaking should be safe"

break;

case 4:
  ele1.html("If a driver sees the sign for ‘slippery road ahead’, he/she must")
  ele1.position(150, 150)
button1.option("Drive faster")
button2.option("Change gear and reduce speed")
button3.option("Apply brake but proceed in the same speed")
correct[this.count]="Change gear and reduce speed"

break;

case 5 :
  ele1.html("A passenger may not be carried on a motorcycle unless it has…?")
  ele1.position(150, 150)
button1.option("Mudguards")
button2.option("A large engine")
button3.option("Wide tires")
button4.option("Proper foot rests")
correct[this.count] = "Proper foot rests"

break;

case 6:
  ele1.html("Overspeeding is...")
  ele1.position(150, 150)
button1.option("Not an offence and can be neglected")
button2.option("Is an offence but no charges are pressed against you")
button3.option("an offence that could lead to your driving licence being cancelled or suspended")
correct[this.count]="an offence that could lead to your driving licence being cancelled or suspended"

break;

case 7 :
  ele1.html("In case you see a vehicle that has met with an accident with injured passengers inside, you should")
  ele1.position(150, 150)
button1.option("Stop your vehicle and report the matter to the nearest police station")
button2.option("Take the vehicle to the closest police station and report the accident")
button3.option("Take measures to secure medical attention to those injured and report the accident to the closest police station within a period of 24 hours")
correct[this.count] = "Take measures to secure medical attention to those injured and report the accident to the closest police station within a period of 24 hours"

break;

case 8 :
  ele1.html("The only vehicle which is allowed to drive at a speed of 60km/ hour is")
  ele1.position(150, 150)
button1.option("Motor car")
button2.option("Heavy bus/trucks")
button3.option("All of the above")
correct[this.count] = "Motor car"

break;

case 9 :
  ele1.html("Suppose you are driving on a road with two lanes. The vehicle to the front of you is driving slowly and the road ahead is clear and safe to overtake. What should you do?")
  ele1.position(150, 150)
button1.option("Overtake the vehicle from the left side of the vehicle ahead")
button2.option("Overtake the vehicle from the right side of the vehicle ahead")
button3.option("Overtake if the road is wide enough")
correct[this.count] = "Overtake the vehicle from the right side of the vehicle ahead"

break;

case 10 :
  ele1.html("If you see a yellow light at the traffic signal, you should")
  ele1.position(150, 150)
button1.option("Reduce your vehicle speed and proceed with caution")
button2.option("Slow the vehicle")
button3.option("Stop the vehicle")
correct[this.count] = "Reduce your vehicle speed and proceed with caution"

break;

case 11 :
  ele1.html("Be careful while overtaking vehicles marked with ‘L’( learner driver) because")
  ele1.position(150, 150)
button1.option("You might crash into them")
button2.option("You might crash into people on the road")
button3.option("The learner driver might get nervous and make a mistake")
correct[this.count] = "The learner driver might get nervous and make a mistake"

break;

case 12 :
  ele1.html("If a vehicle is parked on the side of a road at night")
  ele1.position(150, 150)
button1.option("The vehicle should be locked")
button2.option("Park light should remain on")
button3.option("All of the above")
correct[this.count] = "All of the above"

break;

case 13 :
  ele1.html("You should never try to overtake a cyclist when")
  ele1.position(150, 150)
button1.option("Driving on a narrow road and just before you are about to turn left")
button2.option("On a crowded street")
button3.option("All of the above")
correct[this.count] = "Driving on a narrow road and just before you are about to turn left"

break;

case 14 :
  ele1.html("Fog lamps should be used when")
  ele1.position(150, 150)
button1.option("There is mist")
button2.option("At night")
button3.option("When the vehicle opposite is not using the dim light")
correct[this.count] = "There is mist"

break;

case 15 :
  ele1.html("If an ambulance is approaching")
  ele1.position(150, 150)
button1.option("No preference should be given")
button2.option("Provide passage if there are no vehicles on the other side")
button3.option("Allow free passage by moving to the side of the road")
correct[this.count] = "Allow free passage by moving to the side of the road"

break;

case 16 :
  ele1.html("When you are moving off from behind a parked car, you should")
  ele1.position(150, 150)
button1.option("Give a signal, check your rear and side mirrors to back out carefully")
button2.option("Move your vehicle as soon as possible")
button3.option("Just give signals and proceed to move")
correct[this.count] = "Give a signal, check your rear and side mirrors to back out carefully"

break;

case 17 :
  ele1.html("When should you stop your vehicle?")
  ele1.position(150, 150)
button1.option("When approaching the red traffic light")
button2.option("When signaled by a police officer or involved in an accident")
button3.option("All of the above")
correct[this.count] = "All of the above"

break;

case 18 :
  ele1.html("From which of these vehicles may a passenger disembark while it is still moving?")
  ele1.position(150, 150)
button1.option("A public transport vehicle")
button2.option("None of them")
button3.option("A medium-sized passenger vehicle")
button4.option("A motorized rickshaw")
correct[this.count] = "None of them"

break;

case 19 :
ele1.html("What distance should you keep from the vehicle in front when driving at 45 km/h?")
ele1.position(150, 150)
button1.option("3 seconds")
button2.option("1 second")
button3.option("4 seconds")
button4.option("2 seconds")
correct[this.count] = "2 seconds"

break;

case 20 :
ele1.html("What signals should you make if you are going straight across at a roundabout?")
ele1.position(150, 150)
button1.option("Nothing on entry, left on exit")
button2.option("Left on entry, nothing on exit")
button3.option("Nothing on entry, right on exit")
button4.option("Left on entry, right on exit")
correct[this.count] = "Nothing on entry, left on exit"

break;

case 21 :
  ele1.html("Traveling at 60 km/h, how far will your vehicle travel in a single second?")
  ele1.position(150, 150)
button1.option("16.6 m")
button2.option("12.2 m")
button3.option("8.6 m")
button4.option("4.3 m")
correct[this.count] = "16.6 m"

break;

case 22 :
  ele1.html("A PUCC (Pollution Under Control Certificate) is valid for how long from the date of issue?")
  ele1.position(150, 150)
button1.option("Twenty months")
button2.option("Four months")
button3.option("Twelve months")
button4.option("Eight months")
correct[this.count] = "Twelve months"

break;

case 23 :
  ele1.html("You are parking your vehicle facing downhill. How should you set your wheels?")
  ele1.position(150, 150)
button1.option("Turned away from the curb or edge of the road")
button2.option("Facing straight downhill")
button3.option("Turned towards the curb or edge of the road")
button4.option("However they were positioned when you stopped")
correct[this.count] = "Turned towards the curb or edge of the road"

break;

case 24 :
  ele1.html("If you're involved in a motor accident, how long do you have to report it to the nearest police station?")
  ele1.position(150, 150)
button1.option("72 hours")
button2.option("48 hours")
button3.option("24 hours")
button4.option("12 hours")
correct[this.count] = "24 hours"

break;

case 25 :
  ele1.html("You are driving on a dark road at night when you see another vehicle approaching. What should you do?")
  ele1.position(150, 150)
button1.option("Switch to high beam headlights")
button2.option("Switch to low beam headlights")
button3.option("Turn off your headlights")
button4.option("Sound your horn long and hard")
correct[this.count] = "Switch to low beam headlights"

break;

case 26 :
  ele1.html("If you drive while drunk, you can face a term of imprisonment of up to…?")
  ele1.position(150, 150)
button1.option("One months")
button2.option("Four months")
button3.option("Six months")
button4.option("Three months")
correct[this.count] = "Six months"

break;

case 27 :
  ele1.html("You see a blind person holding up their white cane at the roadside. What should you do?")
  ele1.position(150, 150)
button1.option("Shout a warning from your window")
button2.option("Stop and let them cross")
button3.option("Move to the other side of the road to avoid them")
button4.option("Accelerate to get past them quickly")
correct[this.count] = "Stop and let them cross"

break;

case 28 :
  ele1.html("If an ambulance or fire service vehicle approaches you from behind with siren on or lights flashing, what must you do?")
  ele1.position(150, 150)
button1.option("Slow down and activate your hazard lights")
button2.option("Maintain your current course and speed")
button3.option("Accelerate")
button4.option("Pull over as soon as it is safe to do so")
correct[this.count] = "Pull over as soon as it is safe to do so"

break;

case 29 :
  ele1.html("What color are the number plates for private car and motorised two-wheeler owners?")
  ele1.position(150, 150)
button1.option("Black letters, white background")
button2.option("Black letters, yellow background")
button3.option("Yellow letters, black background")
button4.option("White letters, blue background")
correct[this.count] = "Black letters, white background"

break;

case 30 :
  ele1.html("When pulling away from the curb, what should you do?")
  ele1.position(150, 150)
button1.option("Pull out at the sharpest angle possible")
button2.option("Wait for a gap in the traffic then pull away with caution")
button3.option("Pull out as quickly as possible")
button4.option("Sound your horn as a warning")
correct[this.count] = "Wait for a gap in the traffic then pull away with caution"

break;

case 31 :
  ele1.html("You see a pedestrian waiting at a crossing ahead. You should…?")
  ele1.position(150, 150)
button1.option("Hoot to warn them not to cross")
button2.option("Come to a complete stop and wait for them to cross")
button3.option("Speed up to be past as quickly as possible")
button4.option("Slow down and wave them across")
correct[this.count] = "Come to a complete stop and wait for them to cross"

break;

case 32 :
  
  ele1.html("End Of Quiz")
  ele1.position(600, 150)

  submitButton.hide()

  if(score > 1900){

    var ele2 = createElement('h3')
    ele2.html("Let’s do the “you passed” dance! No? You don’t want to do it? Fine, I’ll just do it myself, then. You passed! You passed! Oh yeah!")
    ele2.position(200, 300)

  } else {
    
    var ele2 = createElement('h3')
    ele2.html("Don’t even worry about this result. That’s all it is, a result. You didn’t get enough for the pass but you’ll pull through next time.")
    ele2.position(200, 300)

  }
break;

default:text("Add more quest",100,100)
break;
}

submitButton.mousePressed(()=>{
    
  ans[this.count]=button1.value()
   console.log("Your and is: "+ans) 
  ele1.hide()
   button1.hide()
   button2.hide()
   button3.hide()
   button4.hide()
  submitButton.hide()
  
   if(correct[this.count]===ans[this.count]){
    score = score + 100
    console.log(score)
    gameState=1
  }
 else{gameState = 1}
})




}
}