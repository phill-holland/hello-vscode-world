<b>Hello-NET-Core-World</b>

This application allows the compilation and execution
of a simple NET Core "Hello World" application.
To run;

<ul>
<li><b>Ensure project is open within the development container</b></li>
<li><b>Hit F5</b></li>
</ul>

NET Core is a coding framework developed by Microsoft, and not to be confused with the "NET Framework" (even though it's easy, given the names).  NET Core applications are substantially more portable than NET Framework applications.

The NET Core is often spoken and confused with the programming language often implementing such applications, in this case, C#.

This application demonstrates the following;

<ul>
<li>VS code debugging and breakpoint functionality</li>
<li>Docker development container configuration</li>
</ul>

Requirements;

The VSCode development container plugin is installed;

https://code.visualstudio.com/docs/remote/containers

Docker must also be installed;

https://docs.docker.com/get-docker/

This application, however is configured with linux based containers, and will not work correctly on Windows without modification.

For further information, go to;

https://dotnet.microsoft.com/download


If you wish to create a basic command line NET Core application, at the command prompt you can run;

dotnet new console