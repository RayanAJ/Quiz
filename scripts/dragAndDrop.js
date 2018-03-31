
			function final() {
                
				if (place == 8) {
					myvar = '<h3>Question 9 of 10 </h3><div id="demo_div">' +
						'            \'I talked to <p id="question1" class="droppable">  </p> employee about <p id="question2" class="droppable"> </p> citeria of <p id="question3" class="droppable"> </p> company\'s employment' +
						'        </div>' +
						'        <p id="name"  class="option">a</p>' +
						'        <p id="age"  class="option">an</p>' +
						'        <p id="country"  class="option">a</p>';

					checkbox_value.innerHTML = myvar + "<br>";
					
					// checkbox_value.innerHTML += '<input type="submit" value="Submit Answer" onclick="check_box_answer()">';
					



					$(document).ready(function () {

						$(".option").draggable({
							helper: "clone"
						});
						$("#question1").droppable({
							drop: function (event, ui) {
								$("#question1").append($("<p></p>")).text(ui.draggable.text())
							}
						});
						$("#question2").droppable({
							drop: function (event, ui) {
								$("#question2").append($("<p></p>")).text(ui.draggable.text())
							}
						});
						$("#question3").droppable({
							drop: function (event, ui) {
								$("#question3").append($("<p></p>")).text(ui.draggable.text())
							}
						});

					})
					var drag_btn = '<button onclick="calculate()">Submit Answer</button>';
                    document.getElementById("drag_btn").innerHTML = '<input type="submit" value="Previous Question" onclick="check_box_previous()">';
					document.getElementById("drag_btn").innerHTML += drag_btn;
                    document.getElementById("drag_btn").innerHTML += '<input type="submit" value="Next Question" onclick="check_box_next()">';
				} else if (place == 9) {
					var myvar2 = '<h3>Question 10 of 10 </h3><div id="demo_div">' +
						'            \'The capital of Saudi Arabia is <p id="question1" class="droppable" class="ddque">  </p>. The name of its king is <p id="question2" class="droppable"> </p>. It is <p id="question3" class="droppable"> </p> leargest country of asia' +
						'        </div>' +
						'        <p id="name"  class="option">Riyadh</p>' +
						'        <p id="age"  class="option">Salman</p>' +
						'        <p id="country"  class="option">fifth</p>';

					checkbox_value.innerHTML = myvar2 + "<br>";
					$(document).ready(function () {
						$(".option").draggable({
							helper: "clone"
						});
						$("#question1").droppable({
							drop: function (event, ui) {
								$("#question1").append($("<p></p>")).text(ui.draggable.text())
							}
						});
						$("#question2").droppable({
							drop: function (event, ui) {
								$("#question2").append($("<p></p>")).text(ui.draggable.text())
							}
						});
						$("#question3").droppable({
							drop: function (event, ui) {
								$("#question3").append($("<p></p>")).text(ui.draggable.text())
							}
						});

					})
					var drag_btn = '<button onclick="calculate()">Submit Answer</button>';
					document.getElementById("drag_btn").innerHTML = '<input type="submit" value="Previous Question" id="Pre">';
					document.getElementById("drag_btn").innerHTML += drag_btn;
                    $(document).ready(function() {

		              $("#Pre").click(function() {
                        place = 8;
                        final();
                    });
	               });
                    
				} //finished-----------
			}
			var correct = 0;
			var incorrect = 0;
			var ans = "";
			// Calculate ans -------
			function calculate() {
				ans = document.getElementById("question1").innerHTML;
				ans += document.getElementById("question2").innerHTML;
				ans += document.getElementById("question3").innerHTML;
				if (ans == "anaa") {

					right_ans++;
					gr3_r8++
					place++;
					final();
				} else if (ans == "RiyadhSalmanfifth") {
					right_ans++;
					gr3_r8++;
					place++;
					final();
				} else {
					alert("Incorrect Answer! you have " + (4 - incorrect) + " Attempt(s) left");
					right_ans--;
					wrong_attempt++;
					incorrect++;
					if (incorrect == 5) {
						place++;
						incorrect = 0;
						if (place == 9 || place == 10) {
							repeatQuestion();
						}
					}
					return false;
				}

				repeatQuestion();
			}

			// refresh -------
