

## Build image

`docker build -t mount-volume:0.1 .`

## Run container

`docker run -d -p 8282:8181 -v ~/dev/test/docker/mount-volume:/opt/app --name=mountvolume mount-volume:0.1`