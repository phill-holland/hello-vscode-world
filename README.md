<b>Hello "VSCode" World</b>

Archive of common vscode setups and example
"hello world" code for a variety of different languages.

It's a common occurrance that whilst VScode can be
used to write code, it's often not setup correctly and
lacks breakpoint functionality, which can often be irritating
to setup.  This repo. attempts to rectify this common problem
and provide pre-built .vscode files and devcontainer files.

Devcontainers are useful, as they establish a common development
environment and standards for all developers during a project, removing
the worry that bugs due to compiler version mismatches may occur.  It
also means you have the correct setup and reduces the need for a local
environment setup of your systems (i.e. no dependencies beyond a Docker
installation)

Includes;

<ul>
<li>Dev Containers</li>
<li>Working breakpoints!</li>
<li>One click "F5" build and running</li>
</ul>

Languages Included;

<ul>
<li>C++</li>
<li>C++ and Cuda</li>
<li>Node (multiply devcontainers, with docker compose and database)</li>
<li>Net Core</li>
<li>React</li>
<li>Swift</li>
<li>Python</li>
<li>Cobol</li>
</ul>

<b>When opening project directories in VSCode you should be prompted
to open in development container, say yes to the prompt!</b>

All projects have linux based dev containers (which should work
on a mac, and require no additional software installed and running)

Pre-requisites;

<ul>
<li>Needs docker installed</li>
<li>VSCode installed</li>
<li>Remote containers Plug-in to be installed</li>
</ul>