# Pattern Library System

#### About these Notes

The notes described here are mainly for my personal use. The goal is to keep a log of the steps taken to build the project and to share my experience with others that might have the same needs or interest.

***

## Executive Summary

One of the biggest challenges in any software design/development environment is how to maintain the level of consistency and collaboration between designers and developers.

A pattern library system is a central web repository where designers and developers can collaborate and gather design and front-end development assets.


## Key Assumptions

### AngularJS

I've chosen to use [AngularJS](http://angularjs.org/) to build this app, the main reason is that Angular does not rely on a database, as I'd like to keep the library as portable as possible.

The [Angular tutorial](http://docs.angularjs.org/tutorial) on how to build an Angular app seems to be a perfect foundation for this type of library system, which includes all elements I have envisioned:

- Grid Style
- Live Search
- Sorting 
- Multiple photo assets
- Detail page

With these ingredients in place, the development process will be much shorter.

### Git on Mac/Linux
I'll be using my Mac as the dev environment. If you are on Windows, the [Angular tutorial](http://docs.angularjs.org/tutorial) has instructions for Windows.

***

## Getting Started
This tutorial relies on the use of Git versioning system for source code management. You don't need to know anything about Git to follow the tutorial. 

If you are intersted on learning more about Git, make sure to checkout my [Git-101](https://github.com/mpaiva-tr/Modern-Web/blob/master/GIT-101.md) page.

### 1. Git
Make sure you have Git installed by using the following command line on your **Terminal** app:

	git --version
	
If you need to **install Git** enter the following:

	sudo port install git-core +svn +doc +bash_completion +gitweb

### 2. Node & Karma

You will need [Node.js](http://nodejs.org/) and Karma to run unit tests, so please verify that you have Node.js v0.8 or better installed and that the node executable is on your PATH by running the following command in a terminal window:

	node --version

Additionally install [Karma](http://karma-runner.github.io/) if you don't have it already:

	npm install -g karma

### 3. Cloning Angular's PhoneCat app

Clone the angular-phonecat repository located at Github by running the following command:

	git clone git://github.com/angular/angular-phonecat.git 

This command creates the angular-phonecat directory in your current directory.

Change your current directory to angular-phonecat:

	cd angular-phonecat

The tutorial instructions assume you are running all commands from the angular-phonecat directory.

You will need an http server running on your system. Mac and Linux machines typically have Apache pre-installed, but If you don't already have one installed, you can use node to run scripts/web-server.js, a simple bundled http server.
