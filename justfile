default:
    just --list

frontend_docker_build:
    docker build --file ./frontend/Dockerfile -t bite-frontend .

backend_docker_build:
    docker build -t bite-backend .

frontend_docker_run:
    docker run -p 3000:3000 --rm bite-frontend

backend_docker_run:
    docker run -p 8080:8080 --rm bite-backend

up-development: ## Build the development docker image.
	docker compose up

down-development: ## Start the development docker container.
	docker compose down
