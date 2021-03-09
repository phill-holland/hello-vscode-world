<b>Hello-C++-Cuda-World</b>

This application allows the compilation and execution
of a simple C++ and Cuda "Hello World" application.
To run;

<ul>
<li><b>Ensure project is open within the development container</b></li>
<li><b>Hit F5</b></li>
</ul>

CUDA is a programming language provided by Nvidia, which allows the implementation
of massively parallel programs, supported by the Nvidia GPU hardware.

It is a powerful tool for extreme code optimisations.

Whilst you may be able to compile code, it will not run without supported hardware,
an Nvidia GPU installed (GTX10xx Gen or Above)

This application demonstrates the following;

<ul>
<li>Cmake; a support system for compiling, linking and building applications</li>
<li>Simple Parallel program implementation in Cuda</li>
<li>VS code debugging and breakpoint functionality</li>
<li>Docker development container configuration</li>
</ul>

Requirements;

The VSCode development container plugin is installed;

https://code.visualstudio.com/docs/remote/containers

Docker must also be installed;

https://docs.docker.com/get-docker/

This application, however is configured with linux based containers, and will not work correctly on Windows without modification.

Cuda is available here;

https://developer.nvidia.com/cuda-downloads
