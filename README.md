# bull-demo

Minimal demo project for [Bull](https://github.com/OptimalBits/bull).

## Setup

### Node

Node is the runtime for the job runner.

Pick your [favorite way](https://gist.github.com/flushentitypacket/1ccacde6e06e8750398402f9ce99e4f0) to install Node.

### Redis

Redis is the backend for job runner.

#### Install via Homebrew

```sh
brew install redis
```

## Usage

You'll need to run two daemons. Easiest is to create two separate shell sessions to run them.

```sh
yarn start:backend
```

```sh
yarn start:runner
```

Now, you have a job runner daemon ready to consume jobs from Redis.

Next, you need to create some jobs!

```sh
JOB_MESSAGE='hi, mom!' yarn createJob
```

You should see something like the following:

```sh
$ yarn start:runner
yarn run v1.9.4
$ node daemon.js
Processing from mainQueue
Received job 8 with data { message: 'hi, mom!' }
```
