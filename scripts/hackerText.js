
export class HackerText{

  constructor(width,height){
      this.width = width;
      this.hackTextHeight = height - 10;
      this.paneHeight = height;
      this.lineCounter = 0;
      this.scorePos = 36;
      this.text = new Array(this.hackTextHeight);
      for(let i = 0; i < height; i++){
          this.text[i] = new Array(width);
          for (let j = 0; j < width; j++) {
              this.text[i][j] = " ";
          }
      }
      this.sampleText = "for (let i = 0; i < userFiles.length; i++) {\n" +
          "    hack(userFiles[i]);\n" +
          "}\n" +
          "~\n" +
          "userData.forEach(element => console.log(BankPASSWORD));\n" +
          "~\n" +
          "Source(){\n" +
          "    crack(Hash512.TOTP);\n" +
          "}\n" +
          "~\n" +
          "PasswordHasher(pass){\n" +
          "    Source(virusMasher);\n" +
          "}\n" +
          "~\n" +
          "ConnectHost(){\n" +
          "    fetch(AvastAntiVirus, process.restart);\n" +
          "}\n" +
          "~\n" +
          "ArraySpace (Vector3 bankCrack){\n" +
          "    acquire(NigerianCurrency);\n" +
          "}\n" +
          "~\n" +
          "Map<Buyer, List<Transaction>> salesByBuyer\n" +
          "     = txns.parallelStream()\n" +
          "        .collect(Collectors.groupingBy(Transaction::getBuyer));\n" +
          "~\n" +
          "List<Name,Password> getPwned\n" +
          "        = UnrealEngineLEAK();\n" +
          "~\n" +
          "func HashMyCash = (int X -> {Object y = new Backdoor; return y.hasher(Cash mc)};\n" +
          "~\n" +
          "#ALERT(CrashStockMarket);;;\n" +
          "~\n" +
          "recycle.Backdoor(Time.now);\n" +
          "~\n" +
          "autoHacker.enable('Brute Force').all();\n" +
          "~\n" +
          "DDoS_blocker x => x.restart()\n" +
          "~\n" +
          "RSA.encrypt('end-to-end').userProtect;\n" +
          "~\n" +
          "decryptWannaCry.FBI\n" +
          "~\n" +
          "$ sudo ./superExploit.BLOCK\n" +
          "~\n" +
          "POST /path/script.cgi HTTP/1.2\n" +
          "From: virus_smash@avast.edu\n" +
          "User-Agent: HTTPTool/1.0\n" +
          "Content-Type: application/x-www-form-urlencoded\n" +
          "Content-Length: 1024\n" +
          "~\n" +
          "infosecExam.pass()\n" +
          "~\n" +
          "metaData.delete(reason = \"lulz\");\n" +
          "~\n" +
          "eve.interceptBOB(Source alice);\n" +
          "~\n" +
          "if(opsec.mastered()==True){\n" +
          "    return checkMAC(String mac_id) ? pass(mac_id) : block(mac_id);\n" +
          "}\n" +
          "~\n" +
          "SHA-512(password.plaintext).promise\n" +
          "~\n" +
          "if(pwnerCheck(email)){\n" +
          "    alert(\"YOU HAVE BEEN PWNED\")\n" +
          "} else {\n" +
          "    alert(\"safe boi\")\n" +
          "}\n" +
          "~\n" +
          "transmission = true;\n" +
          "console.log(\"Ransomware Blocked\");\n" +
          "~\n" +
          "f rcheck(hash1): rainbow(hash1) ? rcheck(newHash()) _ hash1;\n" +
          "~\n" +
          "System.warn(\"Script-kiddie detected\")\n" +
          "~\n" +
          "./kernel-check\n" +
          "rm rootkit\n" +
          "~\n" +
          "wireshark ciscodump | >dumpInfo.txt\n" +
          "analyze dumpInfo.txt | list\n" +
          "purge list\n" +
          "~\n" +
          "ghidra da ILOVEYOU\n" +
          "alert(\"Hidden Threat\")\n" +
          "~\n" +
          "r2 CryptoLocker\n" +
          "shred CryptoLocker\n" +
          "~\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "Avoid suspicious links\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "~\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "Lock your device with a passcode\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "~\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "Update your software immediately\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "~\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "Use unique passwords for EVERY account online\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "~\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "Use a VPN on open Wi-Fi networks\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "~\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "Download apps from reputable app stores\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "~\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "Backup your data to the cloud\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "~\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "Enable remote wiping of your phone\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "~\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "Use a security app\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "~\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "Upgrade your Wi-Fi security\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "~\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "Use stronger logins with strong passwords\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "~\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n" +
          "Use 2-factor authentication\n" +
          "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";

      this.sampleTextArr = this.sampleText.split("\n~\n");
      this.hackIndex = 0;
  }

  Start(startString) {
      startString = startString || " ";
      console.log(startString);
      let start2DArr = this.stringTo2DCharArr(startString);
      this.lineCounter += start2DArr.length;
      for (let i = 0; i < start2DArr.length; i++) {
          for (let j = 0; j < start2DArr[0].length; j++) {
              this.text[i][j] = start2DArr[i][j];
          }
      }
  }

  shiftUp(){
      //shifts all text one line upwards
      for(let i = 0; i < this.hackTextHeight - 1; i++){
          for(let j = 0; j < this.width; j++){
              this.text[i][j] = this.text[i+1][j];
          }
      }
      for(let j = 0; j < this.width; j++){
          this.text[this.hackTextHeight-1][j] = " ";
      }
  }

  stringToCharArr(string){
      return Array.from(string);
  }

  //!!!!!!! check cuz might not work
  stringTo2DCharArr(x){
      console.log(x);
      return (x.split(/\r?\n/)).map(this.stringToCharArr);
  }

  shuffle(array) {
      let counter = array.length;

      // While there are elements in the array
      while (counter > 0) {
          // Pick a random index
          let index = Math.floor(Math.random() * counter);

          // Decrease counter by 1
          counter--;

          // And swap the last element with it
          let temp = array[counter];
          array[counter] = array[index];
          array[index] = temp;
      }

      return array;
  }

  Update(dt ,score){
      //leave new line between old code and new code
      if(this.lineCounter >= this.hackTextHeight) {
          this.shiftUp();
      } else {
          this.lineCounter++;
      }

      if(this.hackIndex % this.sampleTextArr.length == 0){
          this.sampleTextArr = this.shuffle(this.sampleTextArr);
      }
      this.hackIndex++;

      let hack = this.sampleTextArr[this.hackIndex % this.sampleTextArr.length].split("\n");


      for (let i = 0; i < hack.length; i++) {

          // for (let j = 0; j < Math.min(this.width, hack[i].width); j++) {
          //     this.text[Math.min(this.lineCounter,this.height-1)][j] = hack[i][j];
          // }

          this.insertText(hack[i].substring(0,Math.min(this.width, hack[i].length)));

          if(hack[i].length > this.width){
              // for (let j = 0; j < hack.width - this.width, hack[i].length; j++) {
              //     this.text[Math.min(this.lineCounter,this.height-1)][j] = hack[i][this.width + j];
              // }

              this.insertText(hack[i].substring(this.width, hack[i].length))
          }
      }
      this.showScore(score);
  }

  showScore(score){
      this.insertTextFixed(`Score ${score}`, this.scorePos);
  }

  insertTextFixed(string, line) {

      for (let i = 0; i < Math.min(string.length, this.width); i++) {
          this.text[Math.min(line, this.paneHeight - 1)][i] = string[i];
      }
      for (let i = Math.min(string.length, this.width); i < this.width; i++) {
          this.text[Math.min(line, this.paneHeight - 1)][i] = " ";
      }


  }

  insertText(string) {
      //leave new line between old code and new code
      if(this.lineCounter >= this.hackTextHeight - 1) {
          this.shiftUp();
      } else {
          this.lineCounter++;
      }

      for (let i = 0; i < Math.min(string.length,this.width); i++) {
          this.text[Math.min(this.lineCounter,this.hackTextHeight-1)][i] = string[i];
      }
      for (let i = Math.min(string.length,this.width); i < this.width; i++) {
          this.text[Math.min(this.lineCounter,this.hackTextHeight-1)][i] = " ";
      }


  }

  getText(){
      return this.text;
  }

}