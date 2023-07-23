FROM ubuntu:latest
RUN apt-get update && apt-get install build-essential wget -y
RUN apt-get update && apt-get install git -y
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install gdb -y
WORKDIR /init
RUN wget -c https://go.dev/dl/go1.20.6.linux-amd64.tar.gz -O - | tar -xz -C /usr/local
ENV PATH="/usr/local/go/bin:${PATH}"
RUN go install -v github.com/go-delve/delve/cmd/dlv@latest
RUN go install -v golang.org/x/tools/gopls@latest
RUN go install -v github.com/ramya-rao-a/go-outline@v0.0.0-20210608161538-9736a4bde949
