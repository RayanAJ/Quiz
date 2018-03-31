
			function chart() {
				var ctx = document.getElementById("myChart").getContext('2d');
				var myChart = new Chart(ctx, {
					type: 'pie',
					data: {
						labels: [" Wrong Answer", "Correct Answer"],
						datasets: [{
							label: '# of Votes',
							data: [((querys.length - 1) - right_ans), right_ans],
							backgroundColor: [
								'rgba(255, 99, 132, 0.2)',
								'rgba(54, 162, 235, 0.2)',
								'rgba(255, 206, 86, 0.2)',
								'rgba(75, 192, 192, 0.2)',
								'rgba(153, 102, 255, 0.2)',
								'rgba(255, 159, 64, 0.2)'
							],
							borderColor: [
								'rgba(255,99,132,1)',
								'rgba(54, 162, 235, 1)',
								'rgba(255, 206, 86, 1)',
								'rgba(75, 192, 192, 1)',
								'rgba(153, 102, 255, 1)',
								'rgba(255, 159, 64, 1)'
							],
							borderWidth: 1
						}]
					},
					options: {
						scales: {
							yAxes: [{
								ticks: {
									beginAtZero: true
								}
							}]
						}
					}
				});

			}





			// set a timer  function   -----------
			function count_down(time, div) {
				var min = 0;
				var execute = document.getElementById(div);
				if (place >= (querys.length - 1)) {
					time = 0;
				}
				if (time == (-1)) {
					place = (querys.length - 1);
					clearTimeout(timer);
					alert("Time Up, Sorry !");
					repeatQuestion();
					return false;

				}
				execute.innerHTML = "Remaining Time: " + Math.floor(time / 60) + ' Min ' + time % 60 + " Seconds ";
				time--;

				var timer = setTimeout('count_down(' + time + ',"' + div + '")', 1000);
               // timer = window.timer;
			}
			//count_down(150, "timer");
			// Set timer Function -------------------
