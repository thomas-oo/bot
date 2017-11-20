Download my code to your Desktop and unzip it in desktop. After unzipping there should be a folder called bot-master

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

`brew cask install java`

`brew install node`

cd ~/Desktop

ls

cd bot-master

`java -jar -Dwebdriver.chrome.driver=./chromedriver selenium-server-standalone-3.4.0.jar`

now open chrome and type in `chrome://version` in the address bar. Under Profile Path, there is a path. For me it is `/Users/thomas/Library/Application Support/Google/Chrome/Default`. Copy yours, this is the dataDir that we will use later.

open a new terminal window and in the new terminal window

cd ~/Desktop

cd bot-master

`node app.js --size "<YOUR SIZE. EG US 10>" --url "<THE URL OF YOUR NIKE SHOE>" --dataDir "<DATAPATH FROM BEFORE>"`

for example I will be copping the AJ1s in size US 11 so my command is

`node app.js --size "US 11" --url https://store.nike.com/ca/en_gb/pd/zoom-all-out-low-2-running-shoe/pid-12046503/pgid-12082855 --dataDir "/Users/thomas/Library/Application Support/Google/Chrome/Default"`

GOOD LUCK!
