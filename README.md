# localbot

A simple Discord bot made in [Node.js](https://nodejs.org/en/)

## Getting Started

These instructions will show you how to set up and get localbot running

### Prerequisites

First, you need to install [Node.js](https://nodejs.org/en/).
After that, run following command in the command line to install forever

```
npm install forever -g
```
Next, you need [Mysql](https://www.mysql.com/).
Create a database and run following commands in mysql
```
CREATE TABLE chatfilter (id varchar(30) NOT NULL, filtered longtext NOT NULL);
CREATE TABLE bans (id varchar(30) NOT NULL, banned SMALLINT);
```

### Installing

Fill out the config.json
Open a command prompt, navigate to the folder where the bot is located in
Now install the needed stuff by running
```
npm install
```
To run the bot, use following command in the command line 
```
forever main.js start
```

## Built With

* [Node.js](https://nodejs.org/en/) - The server framework used
* [Forever](https://github.com/foreverjs/forever) - Used to not have to fix random crashes
* [Mysql](https://www.mysql.com/) - Database

## Authors

* **localhost#0001** - *throwing the thing together* - [localhost-0001](https://github.com/localhost-0001)

See also the list of [contributors](https://github.com/localhost-0001/localbot/contributors) who participated in this project.

## License

What license?

## Acknowledgments

* https://github.com/foreverjs/forever
* https://www.youtube.com/user/Zekrommaster110
* https://www.youtube.com/watch?v=qmTfNpOaGaQ
* http://anidiotsguide.gitbooks.io


