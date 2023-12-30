// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { textList } from './quotes'; 

function getRandomText(): string {
    const randomIndex = Math.floor(Math.random() * textList.length);
    return textList[randomIndex];
}

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function updateBackgroundBasedOnDate(currentDate: Date) {
    // let shand = document.getElementsByClassName('s-hand') as HTMLCollectionOf<HTMLElement>;
    let bg_image = document.getElementsByClassName("background-container") as HTMLCollectionOf<HTMLElement>;
    // const dayOfMonth = currentDate.getDate();
    const month = 0; // currentDate.getMonth()
    // console.log(dayOfMonth)
    // console.log(month)
    // Define the base path for your background images

    let imageName: string;

    // Determine the background image based on the day of the month
    if (month == 0 || month == 1) {
        imageName = "url('./data/background-tet.jpeg')";
    } else if (month == 11) {
        imageName = "url('./data/christmas_bg.png')";
    } else {
        imageName = "url('./data/old_paper.png')";
    }

    if (bg_image.length != 0){
        bg_image[0].style.backgroundImage = imageName
    }
}

async function displayRandomText(currentDate: Date): Promise<void> {
    let text_bg = document.getElementsByClassName('streaming-text') as HTMLCollectionOf<HTMLElement>;

    const month = 0; // currentDate.getMonth()
    const randomTextElement = document.getElementById('randomText');
    if (randomTextElement) {
        if (month == 0 || month == 1){
            if (text_bg.length != 0) {
                text_bg[0].style.background = "rgba(188, 37, 40, 0.6)";
            }
            var text = "Happy new year darling! 😚\nThis is your year, my little dragon.\nI am lucky to have you in my life.\n" + getRandomText();
        } else if (month == 11) {
            if (text_bg.length != 0) {
                text_bg[0].style.background = "rgba(241, 241, 241, 0.4)";
            }
            var text = getRandomText();
        } else {
            if (text_bg.length != 0) {
                text_bg[0].style.background = "rgba(241, 202, 29, 0.1)";
            }
            var text = getRandomText();
        }
        
        for (let i = 0; i <= text.length; i++) {
            randomTextElement.innerText = text.slice(0, i);
            await sleep(50); // Adjust the speed of streaming
        }
    }
}

const currentDate = new Date();
// update background image by date
updateBackgroundBasedOnDate(currentDate)
// Display random text when the page loads
displayRandomText(currentDate);