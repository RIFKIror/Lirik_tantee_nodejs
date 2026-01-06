import chalk from "chalk";
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function typeText(text, speed = 50, color = (t) => t) {
  for (const char of text) {
    process.stdout.write(color(char));
    await sleep(speed);
  }
  process.stdout.write("\n");
}

async function runLyrics() {
  console.clear();

  const lines = [
  { text: "Temanku semua pada jahat tantee..", color: chalk.cyanBright },
  { text: "Aku lagi susah mereka ga ada......", color: chalk.yellowBright },
  { text: "Coba kalo lagi jayaaa....", color: chalk.magentaBright },
  { text: "Aku dipuja pujanya tanteeeeeee........", color: chalk.bold.greenBright },
  { text: "Sudah terbiasa terjadi tanteee.....", color: chalk.bold.hex("#ff6f61") },
  { text: "Teman datang ketika lagi butuh sajaaa.....", color: chalk.blueBright },
  { text: "Coba kalo lagi susah....", color: chalk.italic.whiteBright },
  { text: "Mereka semua menghilangggggggggggg............", color: chalk.bold.redBright },
];

  const teksDelay = 90;  // Delay per teks 
  const barisDelay = 1000;  // Delay antar baris 

  for (const line of lines) {
    await typeText(line.text, teksDelay, line.color);
    await sleep(barisDelay);
  }

  await sleep(500);
  console.log(chalk.greenBright("\nScript by KyynXz"));
}

runLyrics();
