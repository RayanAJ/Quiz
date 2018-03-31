
			// Variables -----------

			function _(x) {
				return document.getElementById(x);
			}
			var option_A, option_B, option_C, place = 0,
				gr1_r8 = 0,
				gr2_r8 = 0,
				gr3_r8 = 0,
				gr1_wrng = 0,
				gr2_wrng = 0,
				gr3_wrng = 0,
				wrong_attempt = 0,
				query = "",
				ques_option, chosen_option, right_ans = 0,
				ckbox = 5,
				myvar = "";
			var querys = [
				["02+02 = ? ", "1", "4", "3", "radio"],
				["02+11 = ? ", "1", "13", "3", "radio"],
				["20+61 = ? ", "1", "2", "81", "radio"],
				["33+06	= ? ", "39", "2", "3", "radio"],
				["26-10 = ? ", "1", "16", "3", "radio"],
				["20+40 = ? ", "1", "55+5", "60", "checkbox"],
				["20+10 = ? ", "1", "2+28", "30", "checkbox"],
				["07+13 = ? ", "1", "20", "3+17", "checkbox"],
				["Which one is correct : I __ go now  ? ", "Should", "Could", "Might", "dnd"],
				["Which one is correct : I __ go now  ? ", "Should", "Could", "Might", "dnd"],
				["B", "B", "C", "A", "B", "BC", "BC", "BC", "A", "B"]
			]


			function repeatQuestion() {
				// Conditions --------- 
				if (place >= (querys.length - 1)) {
					// Test purpose --------
					_("demo_div").innerHTML = "<p> <h3>You scored " + right_ans + " out of " + (querys.length - 1) +
						".<br> Percentage: " + (right_ans * 100 / 10) + " % </h3><br>" + "Group-1 Correct Answers:  " + gr1_r8 + " Wrong Answers:" + (5 -
							gr1_r8) + " Percentage: " + Math.round((gr1_r8 * 100 / 5)) + " %<br>" + "Group-2 Correct Answers:  " + gr2_r8 +
						" Wrong Answers:" + (3 - gr2_r8) + " Percentage: " + Math.round((gr2_r8 * 100 / 3)) + " %<br>" + "Group-3 Correct Answers:  " +
						gr3_r8 + " Wrong Answers:" + (2 - gr3_r8) + " Percentage: " + (gr3_r8 * 100 / 2) + " %" + "Wrong Attempt :" +
						wrong_attempt + "</p>";
					var ret_main = '<button type="submit"><a href="index.html">Return to Mian page </a></button>'
					document.getElementById("return_main").innerHTML = ret_main;
                    document.getElementById("drag_btn").innerHTML  = "";
					chart();
                    var Percent = (right_ans * 100 / 10);
                    var g1_wrongAnswers = (5-gr1_r8);
                    var g2_wrongAnswers = (3-gr2_r8);
                    var g3_wrongAnswers = (2-gr3_r8);

					// Mail result ------------

					var from_name = "Quizes System";
                    
                    
					emailjs.send("quiz_result", "quiz_result", {
						"mail_to": mail,
                        "username": username,
                        "from_name": from_name,
                        "right_ans": right_ans,
                        "Percent": Percent,
                        "g1_wrongAnswers": g1_wrongAnswers,
                        "g2_wrongAnswers": g2_wrongAnswers,
                        "g3_wrongAnswers": g3_wrongAnswers,
                        "gr1_r8": gr1_r8,
                        "gr2_r8": gr2_r8,
                        "gr3_r8": gr3_r8
					});



					return false;
				}
				if (place == 9) {
					final();
					return false;
				}


				checkbox_value = _("demo_div");
				query = querys[place][0];
				option_A = querys[place][1];
				option_B = querys[place][2];
				option_C = querys[place][3];

				checkbox_value.innerHTML = "<h3>Question no:" + (place + 1) + " of " + (querys.length - 1) + "</h3> <br> ";
				checkbox_value.innerHTML += "Question is : " + query + " <br> ";
				checkbox_value.innerHTML += '<input type="' + querys[place][4] +
					'" name="Options" value="A" id="" class="option_calss">' + option_A +
					'<br>';
				checkbox_value.innerHTML += '<input type="' + querys[place][4] +
					'" name="Options" value="B" id="" class="option_calss">' + option_B +
					'<br>';
				checkbox_value.innerHTML += '<input type="' + querys[place][4] +
					'" name="Options" value="C" id="" class="option_calss">' + option_C +
					'<br><br>';
				checkbox_value.innerHTML += '<input type="submit" value="Previous Question" onclick="check_box_previous()">';
				checkbox_value.innerHTML += '<input type="submit" value="Submit Answer" onclick="check_box_answer()">';
				checkbox_value.innerHTML += '<input type="submit" value="Next Question" onclick="check_box_next()">';
			}


			// Radio And CheckBox ----------------------------------------------------
			// Printing function for all types of question ---------------------------
			function check_box_answer() {
				// When Question type is radio ---------------------------------------
				if (querys[place][4] == "radio") {
					ques_option = document.getElementsByName("Options");
					for (var i = 0; i < ques_option.length; i++) {
						if ((ques_option[i].checked)) {
							ques_option = ques_option[i].value;
						} 

					}

					// If Radio Answer is currect ------------------------------------
					if (ques_option == querys[(querys.length - 1)][place]) {
						right_ans++;
						gr1_r8++;
					}
					place++;
                    if(place == 5)
                    {
                        document.getElementById("timer").innerHTML = "Refreshing Time"
                        document.getElementById("timer").setAttribute("id", "timer2");
                        var timer = setTimeout('count_down(' + 600 + ',"' + "timer2" + '")', 1000);
                    }
					repeatQuestion();


					// When Question type is checkBox ------------------------------------
				} 
                else if (querys[place][4] == "checkbox") {
					var user_checked = document.getElementsByName("Options");
					var str = "";

					// Mining Values from checkbox -----------------------------------
					function checkboxFunction() {

						for (var i = 0; i < user_checked.length; i++) {
							if (user_checked[i].checked === true) {
								str += user_checked[i].value;
							}
						}
						if (str == querys[(querys.length - 1)][ckbox]) {
							right_ans++; // Plus one number for each negetive checkbox Answer------
							gr2_r8++;
							ckbox++;
							place++;
							if (place <= 7) {
								repeatQuestion();
							} else {
                                document.getElementById("timer2").innerHTML = "Refreshing Time"
                                document.getElementById("timer2").setAttribute("id", "timer3");
                                var timer = setTimeout('count_down(' + 240 + ',"' + "timer3" + '")', 1000);
								final()
							}

						} else {
							if (!str == "") {
								right_ans--; // Minus one for each nagetive checkbox answer -------
							}
							ckbox++;
							place++;
							if (place <= 7) {
								repeatQuestion();
							} else {
                                document.getElementById("timer2").innerHTML = "Refreshing Time"
                                document.getElementById("timer2").setAttribute("id", "timer3");
                                var timer = setTimeout('count_down(' + 240 + ',"' + "timer3" + '")', 1000);
								final();
							}
						}
						str = "";


					}
					checkboxFunction();
				} else if (querys[place][4] == "dnd") {
					final();
					return false;
				}
			}
			// ------

			// Return To Previous ----------
			function check_box_previous() {
				if (querys[place - 1][4] == querys[place][4] && place >= 1) {
					// when the position is bigger or equal to 1
					place = place - 1;
				} else {
					alert("Not possible");
					return false;
				}
				repeatQuestion();
			}

			// Go forward ------------
			function check_box_next() {
				if (querys[place][4] == querys[place + 1][4]) {
					place = place + 1;
					if (place <= 7) {
						repeatQuestion();
					} else {
						final();

					}

				} else {
					alert("Not possible to jump another group ");
					return false;
				}

				repeatQuestion();

			}
