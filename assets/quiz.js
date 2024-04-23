const Quiz = {
	MultipleChoice: 0,
	DropDown: 1,
	FillIn: 2,

	data: [],
	lessonNumber: -1,

	create: (lessonNumber, quizData) => {
		Quiz.data = quizData;
		Quiz.lessonNumber = lessonNumber;
		let html = '';
		for(let question_id in quizData) {
			let question = quizData[question_id];
			html += `<div class='question' id='q-${question_id}'><h3>${question.q}</h3>`;
			switch(question.t) {
				case Quiz.MultipleChoice:
					for(let option in question.o)
						html += `<input type='radio' name='${question_id}' value='${option}' qid='q-${question_id}' id='q-${question_id}-${option}'> <label for='q-${question_id}-${option}'>${question.o[option]}</label><br>`;
					break;
				case Quiz.DropDown:
					html += `<select qid='q-${question_id}'>`;
					for(let option in question.o)
						html += `<option value='${option}'> ${question.o[option]}</option>`;
					html += '</select>';
					break;
				case Quiz.FillIn:
					html += `<input placeholder='Type your answer here' qid='q-${question_id}'>`;
					break;
			}
			html += '</div>';
		}
		html += '<div id="quiz-feedback"></div><div><button id="grade-quiz">Submit</button></div>';
		$('.quiz').append(html);

		$('#grade-quiz').click(Quiz.grade);
	},

	grade: () => {
		let all_correct = true;
		for(let question_id in Quiz.data) {
			let question = Quiz.data[question_id];
			let correct = false;
			switch(question.t) {
				case Quiz.MultipleChoice:
					let checked = $(`input[qid='q-${question_id}']:checked`);
					if(checked.length == 0)
						break;
					correct = checked.val() == question.a;
					break;
				case Quiz.DropDown:
					correct = $(`select[qid='q-${question_id}']`).val() == question.a;
					break;
				case Quiz.FillIn:
					correct = $(`input[qid='q-${question_id}']`).val().toLowerCase() == question.a.toLowerCase();
					break;
			}
			$(`#q-${question_id}`).removeClass(!correct ? 'correct' : 'incorrect');
			$(`#q-${question_id}`).addClass(correct ? 'correct' : 'incorrect');
			all_correct &= correct;
		}
		$('#quiz-feedback').text(all_correct ? 'Congradulations, you have passed this lesson!' : 'Some questions are wrong, please correct them and submit again');
		
		let completed = localStorage.getItem('completed');
		if(completed == undefined)
			completed = [];
		else
			completed = JSON.parse(completed);
		
		if(!completed.includes(Quiz.lessonNumber))
			completed.push(Quiz.lessonNumber);
		localStorage.setItem('completed', JSON.stringify(completed));
	}
}