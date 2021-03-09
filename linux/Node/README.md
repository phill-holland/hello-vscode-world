<b>Hello-Node-World</b>

This application will insert "Hello World" into a mongo database each time the website is visited, and then output all the occurances of "Hello World" within the database, when the webpage is visited, incrementing the total number of "Hello World" records within the database.

This application consists of two development containers with;

Node
MongoDB

And demonstrates how to configure vscode how to use a docker-compose.yaml file. (see inside the .devcontainer folder)

To run;

<ul>
<li><b>Ensure project is open within the development container</b></li>
<li><b>Hit F5</b></li>
<li><b>navigate to http://localhost:8081</b></li>
</ul>

This application demonstrates the following;

<ul>
<li>The Koa Framework for handling web requests and routes</li>
<li>The Mongoose Framework and Mongo database</li>
<li>Debugging Node Applications within VSCode</li>
<li>How to specify a docker-compose.yaml for multiply development containers</li>
<li>VSCode debugging and breakpoint functionality</li>
</ul>

Requirements;

The VSCode development container plugin is installed;

https://code.visualstudio.com/docs/remote/containers

Docker must also be installed;

https://docs.docker.com/get-docker/

This application, however is configured with linux based containers, and will not work correctly on Windows without modification.


