# Zalora Entrance Assignment


## Table of Contents
<!-- TOC -->
  - [Description](#description)
  - [Getting Started](#getting-started)
      - [Prerequisites](#prerequisites)
      - [Installation](#installation)
      - [Usage](#usage)
          - [Running application](#running-application)
          - [Running the tests](#running-the-tests)
          - [Scan ESlint issues](#scan-eslint-issues)
          - [Build](#build)
<!-- /TOC -->
## Description
The product Tweeter allows users to post short messages limited to 50 characters each. Sometimes, users get excited and write messages longer than 50 characters. Instead of rejecting these messages, we would like to add a new feature that will split the message into parts and send multiple messages on the user's behalf, all of them meeting the 50 character requirement.


## Getting Started
***
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Install **Node LTS 8** 
  - Download: https://nodejs.org/en/download/
  - Installing on windows guide: https://nodesource.com/blog/installing-nodejs-tutorial-windows/


### Installation

  Install yarn as global packages if not ``` npm install -g yarn ```
```
    yarn install  
```

### Usage
***

#### Running application

```
  yarn start
```

Open browser with url http://localhost:3000


#### Running the tests

```
  yarn test
```

#### Scan ESlint issues

```
  yarn run lint-fix
```

### Build

```
  yarn run build
```
