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

async function displayRandomText(): Promise<void> {
    const randomTextElement = document.getElementById('randomText');
    if (randomTextElement) {
        var text = getRandomText();
        for (let i = 0; i <= text.length; i++) {
            randomTextElement.innerText = text.slice(0, i);
            await sleep(50); // Adjust the speed of streaming
        }
        // randomTextElement.innerText = text;
    }
}

// Display random text when the page loads
displayRandomText();