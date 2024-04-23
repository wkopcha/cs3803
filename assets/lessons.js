const Lessons = {
	list: [
		'Lesson 1: What is Multithreading?',
		'Lesson 2: Multithreading in Java Basics',
		'Lesson 3: Thread Lifecycle in Java',
		'Lesson 4: Interthread Communication',
		'Lesson 5: The Producer Consumer Problem',
		'Capstone Project',
		'Further Reading'
	],

	genHTMLList: (pathToRoot, currentLesson) => {
		let completed = localStorage.getItem('completed');
		if(completed == undefined)
			completed = [];
		else
			completed = JSON.parse(completed);

		for(let lesson in Lessons.list) {
			lesson = parseInt(lesson);
			let lessonPath;
			if (Lessons.list[lesson] === 'Capstone Project') {
				lessonPath = 'https://github.com/siddhantdubey/MultithreadingInstructionalCapstone\' target=\'_tab';
			} else if (Lessons.list[lesson] === 'Further Reading') {
				lessonPath = `${pathToRoot}resources.html`;
			} else {
				lessonPath = `${pathToRoot}lesson/${lesson + 1}.html`;
			}
			$('.lessons').append(`<a href='${lessonPath}' class='w-100'><div class='w-100 dark ${lesson == currentLesson ? 'current' : (completed.includes(lesson + 1) ? 'complete' : '')}'>${Lessons.list[lesson]}</div></a>`);
		}
	}
}