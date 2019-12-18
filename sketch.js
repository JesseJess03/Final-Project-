let x_position 
	let y_position = 0 
	let speed = 3
	let diameter = 0 
	let step = 0
	let song
	let currentlyric = ""

let fontBold



function preload() {
 sacrifices = loadSound("sacrifices.mp3")


}



function setup() {

	frameRate(3)

	textFont(210)
	fill(0)
		strokeWeight(5)
		textSize(50)
		textFont('Helvetica');
		text('Font Style Bold', 10, 70)
		textAlign(CENTER, CENTER)

}

function draw() {

	//Face outline 

	createCanvas(1000, 750) //Yellow Bachground 
	fill(255, 236, 0)
	rect(0, 0, 1400, 720)

	fill(0, 0, 0) //Lower beard 
	rect(1, 560, 50, 55)

	fill(145, 85, 17) //Chin skin 
	rect(1, 615, 50, 35)

	fill(0, 0, 0)
	rect(51, 560, 50, 35) //Lower beard

	fill(0, 0, 0)	
	rect(51, 488, 50, 72) //Mustache

	fill(0, 0, 0)
	rect(101, 526, 50, 69) //Mustache

	fill(0, 0, 0)
	rect(151, 491, 50, 35) //Right side of beard

	fill(0, 0, 0)
	rect(201, 218, 50, 275) //Sideburn mustache 

	fill(0, 0, 0)
	rect(250, 217, 36, 35)//Sideburn mustache

	fill(0, 0, 0)
	rect(151, 183, 100, 35) //Top black outline

	fill(0, 0, 0)
	rect(1, 147, 150, 35) //Top black outline

	fill(0, 0, 0)
	rect(35, 182, 30, 35) //Black hair on forheard 

	fill(0, 0, 0)
	rect(5, 217, 30, 35)

	fill(0, 0, 0)
	rect(251, 455, 35, 39) //Black hair right under ear

	//Face 

	fill(0, 0, 0)
	rect(1, 445, 50, 42) //mutache 

	fill(0, 0, 0)
	rect(52, 410, 30, 35) //Black bottom of the eye

	fill(126, 82, 30)
	rect(52, 375, 30, 35) //Brown part of eye 

	fill(255, 255, 255)
	rect(82, 375, 30, 70) //white part of eye 

	fill(0, 0, 0)
	rect(52, 315, 30, 60) //Top of black part of eye 

	fill(148, 147, 145)
	rect(82, 340, 30, 35) //Gray part of eye 

	fill(0, 0, 0)
	rect(82, 315, 30, 25) //Top black part of eye 

	fill(145, 85, 17)
	rect(1, 487, 51, 73) //Mouth skin 

	fill(145, 85, 17)
	rect(1, 182, 35, 35) //Top forhead skin

	fill(145, 85, 17)
	rect(1, 217, 4, 35) //Werid little block under forhead

	fill(129, 88, 31)
	rect(1, 252, 34, 35) //Top face shadow block 

	fill(145, 85, 17)
	rect(1, 287, 51, 158) //Middle of face skin 

	fill(129, 88, 17)
	rect(35, 217, 30, 35) //2nd top part of face shadow 

	fill(128, 88, 17)
	rect(65, 182, 35, 35) //3rd top part of face shadow 

	fill(145, 85, 17)
	rect(35, 252, 30, 35) //Brown skin 

	fill(145, 85, 17)
	rect(52, 287, 13, 28) //Small brown skin in middle of face

	fill(145, 85, 17)
	rect(65, 217, 35, 35) //Brown skin

	fill(145, 85, 17)
	rect(65, 252, 35, 35) //Brown skin 

	fill(145, 85, 17)
	rect(65, 287, 35, 28) //Brown Skin

	fill(145, 85, 17)
	rect(100, 182, 51, 36) //Brown skin forehead

	fill(145, 85, 17)
	rect(100, 217, 35, 35) //Brown skin 

	fill(145, 85, 17)
	rect(100, 252, 35, 35) //Brown skin 

	fill(145, 85, 17)
	rect(100, 287, 35, 28) //Brown skin 

	fill(145, 85, 17)
	rect(135, 217, 35, 35) //Brown skin 

	fill(145, 85, 17)
	rect(135, 252, 35, 35) //Brown skin 

	fill(145, 85, 17)
	rect(135, 287, 35, 28) //Brown skin 

	fill(145, 85, 17)
	rect(112, 315, 39, 35) //Brown skin

	fill(145, 85, 17)
	rect(112, 350, 39, 35) //Brown skin 

	fill(145, 85, 17)
	rect(112, 385, 39, 35) //Brown skin 

	fill(145, 85, 17)
	rect(112, 420, 39, 25) //Brown skin 

	fill(145, 85, 17)
	rect(51, 445, 50, 43) //Brown skin 

	fill(145, 85, 17)
	rect(101, 445, 50, 81) //Brown skin 

	fill(145, 85, 17)
	rect(151, 315, 19, 176) //Brown skin 

	fill(145, 85, 17)
	rect(170, 217, 31, 98) //Brown skin 

	fill(145, 85, 17)
	rect(170, 315, 31, 35) //Brown skin 

	fill(145, 85, 17)
	rect(170, 350, 31, 35) //Brown skin 

	fill(145, 85, 17)
	rect(170, 385, 31, 35) //Brown skin 

	fill(145, 85, 17)
	rect(170, 420, 31, 35) //Brown skin 

	fill(145, 85, 17)
	rect(170, 455, 31, 36) //Brown skin 

	//Hair 

	fill(86, 54, 27)
	rect(151, 526, 50, 40) //Bottom hair near beard 

	fill(86, 54, 27)
	rect(201, 493, 50, 40) //Bottom hair near beard  

	fill(86, 54, 27)
	rect(251, 420, 35, 35) //Hair right under the ear

	fill(145, 85, 17)
	rect(251, 327, 35, 93) //Ear 

	fill(86, 54, 27)
	rect(251, 252, 35, 75)

	fill(86, 54, 27)
	rect(286, 327, 35, 93) //Hair right next to ear 

	fill(86, 54, 27)
	rect(286, 217, 60, 70) //Hair near ear 

	fill(86, 54, 27)
	rect(346, 217, 30, 108) //Hair near ear 

	fill(86, 54, 27)
	rect(251, 183, 125, 34) //Hair 

	fill(86, 54, 27)
	rect(151, 147, 180 , 36) //Hair 

	fill(0, 0, 0)
	rect(330, 147, 46, 36) //Black part on top right hair 

	fill(0, 0, 0,)
	rect(151, 111, 179, 36) //Black part of hair 

	fill(86, 54, 27)
	rect(330, 111, 46, 37) //Hair 

	fill(86, 54, 27)
	rect(376, 111, 60, 73) //Hair

	fill(0, 0, 0)
	rect(111, 77, 40, 70) //Black part of hair 

	fill(86, 54, 27)
	rect(151, 77, 99, 34) //Hair 

	fill(0, 0, 0,)
	rect(250, 77, 40, 34) //Black part of hair 

	fill(86, 54, 27)
	rect(290, 77, 108, 34) //Hair 

	fill(86, 54, 27)
	rect(249, 9, 110, 68) //Hair 

	fill(86, 54, 27)
	rect(249, 0, 70, 9) //Hair on the very top

	fill(86, 54, 27)
	rect(111, 0, 40, 77) //Hair 

	fill(0, 0, 0)
	rect(151, 43, 98, 34) //Black hair very top 

	fill(0, 0, 0)
	rect(151, 0, 35, 43) //Black hair very top

	fill(86, 54, 27)
	rect(185, 0, 64, 43) //Hair 

	fill(86, 54, 27)
	rect(71, 40, 40, 107) //Hair 

	fill(0, 0, 0)
	rect(71, 0, 40, 40) //Black hair 

	fill(0, 0, 0)
	rect(36, 107, 35, 40) //Black hair 

	fill(86, 54, 27)
	rect(36, 0, 35, 107) //Hair top 

	fill(0, 0, 0)
	rect(0, 68, 36, 79) //Balck hair on top 

	fill(86, 54, 27)
	rect(0, 0, 36, 68)

		//Animation

	step += 1


	if(step == 1) {

		fill(80, 152, 235)
		rect(82, 445, 10, 10)

		fill(9, 62, 123)
		rect(102, 445, 10, 10)

		fill(13, 87, 175)
		rect(92, 445, 10, 10)

	}

	if(step == 2) {

		fill(80, 152, 235)
		rect(82, 445, 10, 10)

		fill(9, 62, 123)
		rect(102, 445, 10, 10)

		fill(13, 87, 175)
		rect(92, 445, 10, 10)

		//

		fill(80, 152, 235)
		rect(97, 455, 10, 10)

		fill(9, 62, 123)
		rect(87, 455, 10, 10)

	}

	if(step == 3) {

	fill(80, 152, 235)
	rect(82, 445, 10, 10)

	fill(9, 62, 123)
	rect(102, 445, 10, 10)

	fill(13, 87, 175)
	rect(92, 445, 10, 10)

			//

	fill(80, 152, 235)
	rect(97, 455, 10, 10)

	fill(9, 62, 123)
	rect(87, 455, 10, 10)

			//

	fill(80, 152, 235)
	rect(87, 465, 10, 10)

	} 

	if(step == 4) {

	fill(80, 152, 235)
	rect(82, 445, 10, 10)

	fill(9, 62, 123)
	rect(102, 445, 10, 10)

	fill(13, 87, 175)
	rect(92, 445, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 455, 10, 10)

	fill(9, 62, 123)
	rect(87, 455, 10, 10)

	//

	fill(80, 152, 235)
	rect(87, 465, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 475, 10, 10)

}

	if(step == 5) {

	fill(80, 152, 235)
	rect(82, 445, 10, 10)

	fill(9, 62, 123)
	rect(102, 445, 10, 10)

	fill(13, 87, 175)
	rect(92, 445, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 455, 10, 10)

	fill(9, 62, 123)
	rect(87, 455, 10, 10)

	//

	fill(80, 152, 235)
	rect(87, 465, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 475, 10, 10)

	//	

	fill(80, 152, 235)
	rect(87, 485, 10, 10)

	fill(9, 62, 123)
	rect(97, 485, 10, 10)
}

	if(step == 6) {

	fill(80, 152, 235)
	rect(82, 445, 10, 10)

	fill(9, 62, 123)
	rect(102, 445, 10, 10)

	fill(13, 87, 175)
	rect(92, 445, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 455, 10, 10)

	fill(9, 62, 123)
	rect(87, 455, 10, 10)

	//

	fill(80, 152, 235)
	rect(87, 465, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 475, 10, 10)

	//	

	fill(80, 152, 235)
	rect(87, 485, 10, 10)

	fill(9, 62, 123)
	rect(97, 485, 10, 10)

	//	

	fill(80, 152, 235)
	rect(97, 495, 10, 10)

	}

	if(step == 7) {

	fill(80, 152, 235)
	rect(82, 445, 10, 10)

	fill(9, 62, 123)
	rect(102, 445, 10, 10)

	fill(13, 87, 175)
	rect(92, 445, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 455, 10, 10)

	fill(9, 62, 123)
	rect(87, 455, 10, 10)

	//

	fill(80, 152, 235)
	rect(87, 465, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 475, 10, 10)

	//	

	fill(80, 152, 235)
	rect(87, 485, 10, 10)

	fill(9, 62, 123)
	rect(97, 485, 10, 10)

	//	

	fill(80, 152, 235)
	rect(97, 495, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 505, 10, 10)

	}

	if(step == 8) {

	fill(80, 152, 235)
	rect(82, 445, 10, 10)

	fill(9, 62, 123)
	rect(102, 445, 10, 10)

	fill(13, 87, 175)
	rect(92, 445, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 455, 10, 10)

	fill(9, 62, 123)
	rect(87, 455, 10, 10)

	//

	fill(80, 152, 235)
	rect(87, 465, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 475, 10, 10)

	//	

	fill(80, 152, 235)
	rect(87, 485, 10, 10)

	fill(9, 62, 123)
	rect(97, 485, 10, 10)

	//	

	fill(80, 152, 235)
	rect(97, 495, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 505, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 514, 10, 10)

	fill(9, 62, 123)
	rect(88, 514, 10, 10)

	}

if(step == 9) {

fill(80, 152, 235)
	rect(82, 445, 10, 10)

	fill(9, 62, 123)
	rect(102, 445, 10, 10)

	fill(13, 87, 175)
	rect(92, 445, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 455, 10, 10)

	fill(9, 62, 123)
	rect(87, 455, 10, 10)

	//

	fill(80, 152, 235)
	rect(87, 465, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 475, 10, 10)

	//	

	fill(80, 152, 235)
	rect(87, 485, 10, 10)

	fill(9, 62, 123)
	rect(97, 485, 10, 10)

	//	

	fill(80, 152, 235)
	rect(97, 495, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 505, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 514, 10, 10)

	fill(9, 62, 123)
	rect(88, 514, 10, 10)

	//

	fill(9, 62, 123)
	rect(98, 524, 10, 10)

}

if(step == 9) {

fill(80, 152, 235)
	rect(82, 445, 10, 10)

	fill(9, 62, 123)
	rect(102, 445, 10, 10)

	fill(13, 87, 175)
	rect(92, 445, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 455, 10, 10)

	fill(9, 62, 123)
	rect(87, 455, 10, 10)

	//

	fill(80, 152, 235)
	rect(87, 465, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 475, 10, 10)

	//	

	fill(80, 152, 235)
	rect(87, 485, 10, 10)

	fill(9, 62, 123)
	rect(97, 485, 10, 10)

	//	

	fill(80, 152, 235)
	rect(97, 495, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 505, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 514, 10, 10)

	fill(9, 62, 123)
	rect(88, 514, 10, 10)

	//

	fill(9, 62, 123)
	rect(98, 524, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 524, 10, 10)

	}

if(step == 10) {

fill(80, 152, 235)
	rect(82, 445, 10, 10)

	fill(9, 62, 123)
	rect(102, 445, 10, 10)

	fill(13, 87, 175)
	rect(92, 445, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 455, 10, 10)

	fill(9, 62, 123)
	rect(87, 455, 10, 10)

	//

	fill(80, 152, 235)
	rect(87, 465, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 475, 10, 10)

	//	

	fill(80, 152, 235)
	rect(87, 485, 10, 10)

	fill(9, 62, 123)
	rect(97, 485, 10, 10)

	//	

	fill(80, 152, 235)
	rect(97, 495, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 505, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 514, 10, 10)

	fill(9, 62, 123)
	rect(88, 514, 10, 10)

	//

	fill(9, 62, 123)
	rect(98, 524, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 524, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 534, 10, 10)

	}

if(step == 10) {

fill(80, 152, 235)
	rect(82, 445, 10, 10)

	fill(9, 62, 123)
	rect(102, 445, 10, 10)

	fill(13, 87, 175)
	rect(92, 445, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 455, 10, 10)

	fill(9, 62, 123)
	rect(87, 455, 10, 10)

	//

	fill(80, 152, 235)
	rect(87, 465, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 475, 10, 10)

	//	

	fill(80, 152, 235)
	rect(87, 485, 10, 10)

	fill(9, 62, 123)
	rect(97, 485, 10, 10)

	//	

	fill(80, 152, 235)
	rect(97, 495, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 505, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 514, 10, 10)

	fill(9, 62, 123)
	rect(88, 514, 10, 10)

	//

	fill(9, 62, 123)
	rect(98, 524, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 524, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 534, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 544, 10, 10)

	fill(9, 62, 123)
	rect(98, 544, 10, 10)

	}

if(step == 11) {

fill(80, 152, 235)
	rect(82, 445, 10, 10)

	fill(9, 62, 123)
	rect(102, 445, 10, 10)

	fill(13, 87, 175)
	rect(92, 445, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 455, 10, 10)

	fill(9, 62, 123)
	rect(87, 455, 10, 10)

	//

	fill(80, 152, 235)
	rect(87, 465, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 475, 10, 10)

	//	

	fill(80, 152, 235)
	rect(87, 485, 10, 10)

	fill(9, 62, 123)
	rect(97, 485, 10, 10)

	//	

	fill(80, 152, 235)
	rect(97, 495, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 505, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 514, 10, 10)

	fill(9, 62, 123)
	rect(88, 514, 10, 10)

	//

	fill(9, 62, 123)
	rect(98, 524, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 524, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 534, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 544, 10, 10)

	fill(9, 62, 123)
	rect(98, 544, 10, 10)

	//

	fill(9, 62, 123)
	rect(88, 554, 10, 10)

	}

if(step == 12) {

fill(80, 152, 235)
	rect(82, 445, 10, 10)

	fill(9, 62, 123)
	rect(102, 445, 10, 10)

	fill(13, 87, 175)
	rect(92, 445, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 455, 10, 10)

	fill(9, 62, 123)
	rect(87, 455, 10, 10)

	//

	fill(80, 152, 235)
	rect(87, 465, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 475, 10, 10)

	//	

	fill(80, 152, 235)
	rect(87, 485, 10, 10)

	fill(9, 62, 123)
	rect(97, 485, 10, 10)

	//	

	fill(80, 152, 235)
	rect(97, 495, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 505, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 514, 10, 10)

	fill(9, 62, 123)
	rect(88, 514, 10, 10)

	//

	fill(9, 62, 123)
	rect(98, 524, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 524, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 534, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 544, 10, 10)

	fill(9, 62, 123)
	rect(98, 544, 10, 10)

	//

	fill(9, 62, 123)
	rect(88, 554, 10, 10)


	//

	fill(80, 152, 235)
	rect(98, 554, 10, 10)

	}

if(step == 13) {

fill(80, 152, 235)
	rect(82, 445, 10, 10)

	fill(9, 62, 123)
	rect(102, 445, 10, 10)

	fill(13, 87, 175)
	rect(92, 445, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 455, 10, 10)

	fill(9, 62, 123)
	rect(87, 455, 10, 10)

	//

	fill(80, 152, 235)
	rect(87, 465, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 475, 10, 10)

	//	

	fill(80, 152, 235)
	rect(87, 485, 10, 10)

	fill(9, 62, 123)
	rect(97, 485, 10, 10)

	//	

	fill(80, 152, 235)
	rect(97, 495, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 505, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 514, 10, 10)

	fill(9, 62, 123)
	rect(88, 514, 10, 10)

	//

	fill(9, 62, 123)
	rect(98, 524, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 524, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 534, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 544, 10, 10)

	fill(9, 62, 123)
	rect(98, 544, 10, 10)

	//

	fill(9, 62, 123)
	rect(88, 554, 10, 10)


	//

	fill(80, 152, 235)
	rect(98, 554, 10, 10)


	// 

	fill(80, 152, 235)
	rect(88, 564, 10, 10)

}

if(step == 14) {

fill(80, 152, 235)
	rect(82, 445, 10, 10)

	fill(9, 62, 123)
	rect(102, 445, 10, 10)

	fill(13, 87, 175)
	rect(92, 445, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 455, 10, 10)

	fill(9, 62, 123)
	rect(87, 455, 10, 10)

	//

	fill(80, 152, 235)
	rect(87, 465, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 475, 10, 10)

	//	

	fill(80, 152, 235)
	rect(87, 485, 10, 10)

	fill(9, 62, 123)
	rect(97, 485, 10, 10)

	//	

	fill(80, 152, 235)
	rect(97, 495, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 505, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 514, 10, 10)

	fill(9, 62, 123)
	rect(88, 514, 10, 10)

	//

	fill(9, 62, 123)
	rect(98, 524, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 524, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 534, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 544, 10, 10)

	fill(9, 62, 123)
	rect(98, 544, 10, 10)

	//

	fill(9, 62, 123)
	rect(88, 554, 10, 10)


	//

	fill(80, 152, 235)
	rect(98, 554, 10, 10)


	// 

	fill(80, 152, 235)
	rect(88, 564, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 574, 10, 10)

}

if(step == 15) {

fill(80, 152, 235)
	rect(82, 445, 10, 10)

	fill(9, 62, 123)
	rect(102, 445, 10, 10)

	fill(13, 87, 175)
	rect(92, 445, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 455, 10, 10)

	fill(9, 62, 123)
	rect(87, 455, 10, 10)

	//

	fill(80, 152, 235)
	rect(87, 465, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 475, 10, 10)

	//	

	fill(80, 152, 235)
	rect(87, 485, 10, 10)

	fill(9, 62, 123)
	rect(97, 485, 10, 10)

	//	

	fill(80, 152, 235)
	rect(97, 495, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 505, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 514, 10, 10)

	fill(9, 62, 123)
	rect(88, 514, 10, 10)

	//

	fill(9, 62, 123)
	rect(98, 524, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 524, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 534, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 544, 10, 10)

	fill(9, 62, 123)
	rect(98, 544, 10, 10)

	//

	fill(9, 62, 123)
	rect(88, 554, 10, 10)


	//

	fill(80, 152, 235)
	rect(98, 554, 10, 10)


	// 

	fill(80, 152, 235)
	rect(88, 564, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 574, 10, 10)

	// 

	fill(80, 152, 235)
	rect(88, 584, 10, 10)

	}

if(step == 16) {

fill(80, 152, 235)
	rect(82, 445, 10, 10)

	fill(9, 62, 123)
	rect(102, 445, 10, 10)

	fill(13, 87, 175)
	rect(92, 445, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 455, 10, 10)

	fill(9, 62, 123)
	rect(87, 455, 10, 10)

	//

	fill(80, 152, 235)
	rect(87, 465, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 475, 10, 10)

	//	

	fill(80, 152, 235)
	rect(87, 485, 10, 10)

	fill(9, 62, 123)
	rect(97, 485, 10, 10)

	//	

	fill(80, 152, 235)
	rect(97, 495, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 505, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 514, 10, 10)

	fill(9, 62, 123)
	rect(88, 514, 10, 10)

	//

	fill(9, 62, 123)
	rect(98, 524, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 524, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 534, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 544, 10, 10)

	fill(9, 62, 123)
	rect(98, 544, 10, 10)

	//

	fill(9, 62, 123)
	rect(88, 554, 10, 10)


	//

	fill(80, 152, 235)
	rect(98, 554, 10, 10)


	// 

	fill(80, 152, 235)
	rect(88, 564, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 574, 10, 10)

	// 

	fill(80, 152, 235)
	rect(88, 584, 10, 10)


	//

	fill(9, 62, 123)
	rect(98, 584, 10, 10)

	fill(9, 62, 123)
	rect(88, 594, 10, 10)

}

if(step == 17) {

fill(80, 152, 235)
	rect(82, 445, 10, 10)

	fill(9, 62, 123)
	rect(102, 445, 10, 10)

	fill(13, 87, 175)
	rect(92, 445, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 455, 10, 10)

	fill(9, 62, 123)
	rect(87, 455, 10, 10)

	//

	fill(80, 152, 235)
	rect(87, 465, 10, 10)

	//

	fill(80, 152, 235)
	rect(97, 475, 10, 10)

	//	

	fill(80, 152, 235)
	rect(87, 485, 10, 10)

	fill(9, 62, 123)
	rect(97, 485, 10, 10)

	//	

	fill(80, 152, 235)
	rect(97, 495, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 505, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 514, 10, 10)

	fill(9, 62, 123)
	rect(88, 514, 10, 10)

	//

	fill(9, 62, 123)
	rect(98, 524, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 524, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 534, 10, 10)

	//

	fill(80, 152, 235)
	rect(88, 544, 10, 10)

	fill(9, 62, 123)
	rect(98, 544, 10, 10)

	//

	fill(9, 62, 123)
	rect(88, 554, 10, 10)


	//

	fill(80, 152, 235)
	rect(98, 554, 10, 10)


	// 

	fill(80, 152, 235)
	rect(88, 564, 10, 10)

	//

	fill(80, 152, 235)
	rect(98, 574, 10, 10)

	// 

	fill(80, 152, 235)
	rect(88, 584, 10, 10)


	//

	fill(9, 62, 123)
	rect(98, 584, 10, 10)

	fill(9, 62, 123)
	rect(88, 594, 10, 10)

//

fill(80, 152, 235)
rect(98, 604, 10, 10)

step = 0


}

////Botton 

fill(0, 0, 0)
rect(289, 551, 80, 80)

fill(255, 255, 255)
triangle(299, 564, 299, 614, 360, 592)

//Lyrics 

textAlign(LEFT)
drawWords(width * 0.25);

}

function drawWords(x) {

fill(0)
text(currentlyric, 482, 36, 500)


}




function mouseClicked() {
	//Song plays 
	if (mouseX > 289 && mouseX < 369 && mouseY > 551 && mouseY < 551+80) {

		print('buttonpressed')

		sacrifices.play()

		setTimeout(lyric1, 1*1000)
		setTimeout(lyric2, 3*1000)
		setTimeout(lyric3, 4*1000)
		setTimeout(lyric4, 5*1000)
		setTimeout(lyric5, 6*1000)
		setTimeout(lyric6, 7*1000)
		setTimeout(lyric7, 8*1000)
		setTimeout(lyric8, 9*1000)
		setTimeout(lyric9, 12*1000)
		setTimeout(lyric10, 13*1000)
		setTimeout(lyric11, 16*1000)
		setTimeout(lyric12, 18*1000)
		setTimeout(lyric13, 19*1000)
		setTimeout(lyric14, 20*1000)
		setTimeout(lyric15, 21*1000)
		setTimeout(lyric16, 22*1000)
		setTimeout(lyric17, 23*1000)
		setTimeout(lyric18, 24*1000)
		setTimeout(lyric19, 25*1000)
		setTimeout(lyric20, 27*1000)
		setTimeout(lyric21, 29*1000)
		setTimeout(lyric22, 31*1000)
		setTimeout(lyric23, 32*1000)
		setTimeout(lyric24, 33*1000)
		setTimeout(lyric25, 36*1000)
		setTimeout(lyric26, 37*1000)
		setTimeout(lyric27, 38*1000)
		setTimeout(lyric28, 40*1000)
		setTimeout(lyric29, 42*1000)
		setTimeout(lyric30, 44*1000)
		setTimeout(lyric31, 46*1000)
		setTimeout(lyric32, 48*1000)
		setTimeout(lyric33, 50*1000)
		setTimeout(lyric34, 54*1000)
		setTimeout(lyric35, 57*1000)
		setTimeout(lyric36, 60*1000)
		setTimeout(lyric37, 63*1000)
		setTimeout(lyric38, 67*1000)
		setTimeout(lyric39, 73*1000)
		setTimeout(lyric40, 76*1000)
		setTimeout(lyric41, 78*1000)
		setTimeout(lyric42, 83*1000)
		setTimeout(lyric43, 88*1000)
		setTimeout(lyric44, 96*1000)
		setTimeout(lyric45, 102*1000)
		setTimeout(lyric46, 105*1000)




		



	} 


print(int(mouseX), int(mouseY))


	}

function lyric1() {

	currentlyric = "You can't be everything to everybody, I wanna be your lover"

}

function lyric2() {

	currentlyric = "You can't be everything to everybody, I wanna be your lover, your best friend,"

}

function lyric3() {

	currentlyric = "You can't be everything to everybody, I wanna be your lover, your best friend, your Batman,"

}

function lyric4() {

	currentlyric = "You can't be everything to everybody, I wanna be your lover, your best friend, your Batman, Spiderman"

}

function lyric5() {

	currentlyric = "Fight to polish who and now your rival's in"

}

function lyric6() {

	currentlyric = "I wanna damn near kill you to be the one that heal you up,"

}

function lyric7() {

	currentlyric = "I wanna damn near kill you to be the one that heal you up, I wanna be the one that feel you up,"

}

function lyric8() {

	currentlyric = "I wanna damn near kill you to be the one that heal you up, I wanna be the one that feel you up, on night when you need good :) to cheer you up"

}

function lyric9() {

	currentlyric = "I wanna be the one to build you up,"

}

function lyric10() {

	currentlyric = "I wanna be the one to build you up, a wall worth five billion bucks to keep out the rah-rah,"

}

function lyric11() {

	currentlyric = "I wanna be the one to build you up, a wall worth five billion bucks to keep out the rah-rah, and the blah-blah-blah so nobody try to steal your thunder"

}

function lyric12() {

	currentlyric = "Pull you under,"

}

function lyric13() {

	currentlyric = "Pull you under, toss my hopes out,"

}

function lyric14() {

	currentlyric = "Pull you under, toss my hopes out, royal rumble,"

}

function lyric15() {

	currentlyric = "Pull you under, toss my hopes out, royal rumble, we done moved out the Boondocks,"

}

function lyric16() {

	currentlyric = "Pull you under, toss my hopes out, royal rumble, we done moved out the Boondocks, built a big house,"

}

function lyric17() {

	currentlyric = "Pull you under, toss my hopes out, royal rumble, we done moved out the Boondocks, built a big house, there he wonders,"

}

function lyric18() {

	currentlyric = "Pull you under, toss my hopes out, royal rumble, we done moved out the Boondocks, built a big house, there he wonders, how somewhere along the way,"

}

function lyric19() {

	currentlyric = "Pull you under, toss my hopes out, royal rumble, we done moved out the Boondocks, built a big house, there he wonders, how somewhere along the way, he went from Huey to Eddie Wuncler"

}

function lyric20() {

	currentlyric = "I've been so disconnected, my perspective is ignortant"

}

function lyric21() {

	currentlyric = "I've been so disconnected, my perspective is ignortant, When you rich, niggas don't wanna correct you"

}

function lyric22() {

	currentlyric = "I've been so disconnected, my perspective is ignortant, When you rich, niggas don't wanna correct you, say something crazy, they wont interject"

}

function lyric23() {

	currentlyric = "Do every drug that you want, they gon' let you,"

}

function lyric24() {

	currentlyric = "Do every drug that you want, they gon' let you, dangerous when it's nobody to check you"

}

function lyric25() {

	currentlyric = "Do every drug that you want, they gon' let you, dangerous when it's nobody to check you, I be havin' to check myself"

}

function lyric26() {

	currentlyric = "Nigga, stop holding that money, you you got plenty,"

}

function lyric27() {

	currentlyric = "Nigga, stop holding that money, you you got plenty, I be havin' to spread my wealth"

}

function lyric28() {

	currentlyric = "I used to be at at the crib myself,"

}

function lyric29() {

	currentlyric = "I used to be at at the crib myself, seven years old, off of Bragg Boulevard, where they bag up the raw,"

}

function lyric30() {

	currentlyric = "I used to be at at the crib myself, seven years old, off of Bragg Boulevard, where they bag up the raw, they gon' stand on the corner, one hand on they balls"

}

function lyric31() {

	currentlyric = "I used to be at at the crib myself, seven years old, off of Bragg Boulevard, where they bag up the raw, they gon' stand on the corner, one hand on they balls, and they ran when the cops come, there go the laws"

}

function lyric32() {

	currentlyric = "Then I packed up a bag and I trapped up North on the path of a star,"

}

function lyric33() {

	currentlyric = "Then I packed up a bag and I trapped up North on the path of a star, and I ran into you like I met you before, now damn, me and you goin' half on a boy, sing"

}

function lyric34() {

	currentlyric = "Huggin' the block, huggin' the block all day,"

}

function lyric35() {

	currentlyric = "Huggin' the block, huggin' the block all day, I had nowhere esle to go, she gave me a place to stay,"

}

function lyric36() {

	currentlyric = "Huggin' the block, huggin' the block all day, I had nowhere esle to go, she gave me a place to stay, she gave me a heart to hold, I still got that shit to this day,"

}

function lyric37() {

	currentlyric = "Huggin' the block, huggin' the block all day, I had nowhere esle to go, she gave me a place to stay, she gave me a heart to hold, I still got that shit to this day, she ridin' with me on the road, she ridin' with me in the A"

}

function lyric38() {

	currentlyric = "Huggin' the block, huggin' the block okay, she gave me the gift of my son, and plus we got one on the way"

}

function lyric39() {

	currentlyric = "She have me a family to love, for that, I can never repay"

}

function lyric40() {

	currentlyric = "I'm crying while writing these words,"

}

function lyric41() {

	currentlyric = "I'm crying while writing these words, the tears, they feel good on my face, hey"

}

function lyric42() {

	currentlyric = "And yesterday coud feel just like a waste"

}

function lyric43() {

	currentlyric = "Yeah, if I dont love you, how I'm supposed to?"

}

function lyric44() {

	currentlyric = "And yesterday coud feel just like a waste yeah,"

}

function lyric45() {

	currentlyric = "And yesterday coud feel just like a waste yeah, if I dont love you,"

}

function lyric46() {

	currentlyric = "And yesterday coud feel just like a waste yeah, if I dont love you, how I'm supposed to?"

}













