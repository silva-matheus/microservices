# MIcroservices with Node.js

This project aims to develop an application with Micro Services from scratch, applying the concepts of the proposed architecture and best programming practices. The following project stands out as a Proof of Concept, not taking into account a series of issues, and therefore shouldn't be used in a production environment.

# What is Microservices?

Microservices - also known as the microservice architecture - is an architectural style that structures an application as a collection of services that are

- Highly maintainable and testable
- Loosely coupled
- Independently deployable
- Organized around business capabilities
- Owned by a small team

The microservice architecture enables the rapid, frequent and reliable delivery of large, complex applications. It also enables an organization to evolve its technology stack.

**Fonte: <https://microservices.io/>**

# Used Technologies

- Kafka:
  - Kafka.js;
- Node.js:
  - Fastify;
  - ExpressJs;
  - Nestjs;
- Docker;
- Kubernates:
  - MiniKube;
  - Kubctl;


# Docker

## Useful Docker Commands

- docker ps => Show running containers;
- docker run -p <porta_pc>:<porta_docker> <nome_do_container> => run a container in an specific port
- docker kill <codigo_container> => Kill a running container;
- docker build -t <account/container_name> <path_to_docker_file> => Builds a Docker image so it can be used;

## Docker File
https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/
https://dev.to/abbasogaji/how-to-dockerize-your-nestjs-app-for-production-2lmf
https://blog.logrocket.com/containerized-development-nestjs-docker/

## Docker Compose
https://docs.docker.com/compose/startup-order/
https://docs.docker.com/compose/gettingstarted/

## Kubernates

Kubernates is a container orchestrator used to manage and facilitate distributed systems.
- Minikube => Localhost development environment do Kubernates(used for dev and tests);
- Kubctl => comand line tool for Cluster Kubernates; 

# Application Flow

The application has 4 distinct REST APIs, each built with a different framework, in order to emulate a system for invoice issuing in addition to a Log API.

Each request made by the user results in the emission of an event, through Apache Kafka, so that a log is generated in the corresponding API.