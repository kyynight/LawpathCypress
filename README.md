<h1>Setup</h1>

    1. Git clone source files

    2. Install dependencies
	$cd into project directory
    $npm install
    
    3. Run tests
	non GUI
    $./node_modules/.bin/cypress run

    or with GUI
	$./node_modules/.bin/cypress open
	
    4. View test video files inside folder (optional)
    $./cypress/videos
    
<h1>Project structure</h1>
Tests are run using [Cypress framework](https://www.cypress.io/). Source files are located inside `cypress/integration` folder
