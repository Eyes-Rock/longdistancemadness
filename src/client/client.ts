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

function updateBackgroundBasedOnDate() {
    // let shand = document.getElementsByClassName('s-hand') as HTMLCollectionOf<HTMLElement>;
    let bg_image = document.getElementsByClassName("background-container") as HTMLCollectionOf<HTMLElement>;
    const currentDate = new Date();
    // const dayOfMonth = currentDate.getDate();
    const month = currentDate.getMonth()
    // console.log(dayOfMonth)
    // console.log(month)
    // Define the base path for your background images
    const imagePath = './data/old_paper.png';

    let imageName: string;

    // Determine the background image based on the day of the month
    if (month == 11) {
        imageName = "url('./data/christmas_bg.png')";
    } else {
        imageName = "url('./data/old_paper.png')";
    }

    if (bg_image.length != 0){
        bg_image[0].style.backgroundImage = imageName
    }
}

async function displayRandomText(): Promise<void> {
    const randomTextElement = document.getElementById('randomText');
    if (randomTextElement) {
        var text = getRandomText();
        for (let i = 0; i <= text.length; i++) {
            randomTextElement.innerText = text.slice(0, i);
            await sleep(50); // Adjust the speed of streaming
        }
    }
}

// update background image by date
updateBackgroundBasedOnDate()
// Display random text when the page loads
displayRandomText();