How to run

Prerequisities
1. Some terminal or command line tool
2. Nodejs
3. Java (be able to do java --version in your terminal)

Steps:
1. Download repo
2. Unzip
3. execute the following inside the folder
`java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.4.0.jar`
4. Open Chrome and type chrome://version into the bar. Find the path under Profile Path and copy this. We will refer to this as the DATAPATH
5. Open another terminal and execute the following inside the folder
`node app.js --size "<YOUR SIZE. EG US 10>" --url "<THE URL OF YOUR NIKE SHOE>" --dataDir "<DATAPATH FROM BEFORE>"`

6. It should wait until the size and checkout buttons are available and visible. Then it picks your size and goes to checkout if all goes well.
7. Feel free to test this with any available nike shoe url and shoes
