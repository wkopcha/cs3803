const Nav = {
	github_link: 'https://github.com/siddhantdubey/MultithreadingInstructionalCapstone',

	gen: (pathToRoot) => {
		$('nav.navbar').html(
			`<div class='title'>Multithreading</div>
			<div class='spacer'></div>
			<div><a href='${pathToRoot}index.html'>Home</a></div>
			<div class='spacer'></div>
			<div><a href='${pathToRoot}lessons.html'>Instructionals</a></div>
			<div class='spacer'></div>
			<div><a href='${Nav.github_link}' target='_tab'>Capstone Project</a></div>
			<div class='spacer'></div>
			<div><a href='${pathToRoot}resources.html'>Resources</a></div>`
		);
	}
}