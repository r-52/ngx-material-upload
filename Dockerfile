FROM rm52/angular-13:latest as basic
RUN apt-get update && apt-get install -y git
EXPOSE 4200
EXPOSE 6006
WORKDIR /workspaces/
