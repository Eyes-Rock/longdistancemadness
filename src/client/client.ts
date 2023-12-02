import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const textList: string[] = [
    "\"Distance means so little when someone means so much.\" - Unknown",
    "\"Love knows not its own depth until the hour of separation.\" - Kahlil Gibran",
    "\"Distance isn't an issue because in the end, I have you.\" - Unknown",
    "\"The longer the wait, the sweeter the kiss.\" - Unknown",
    "\"Distance is not for the fearful, it's for the bold. It's for those who are willing to spend a lot of time alone in exchange for a little time with the one they love.\" - Meghan Daum",
    "\"In true love, the smallest distance is too great, and the greatest distance can be bridged.\" - Hans Nouwens",
    "\"Absence makes the heart grow fonder, but it sure makes the rest of you lonely.\" - Charles M. Schulz",
    "\"The simple lack of her is more to me than others' presence.\" - Edward Thomas",
    "\"Distance means so little when someone means so much to you.\" - Tom McNeal",
    "\"Love will travel as far as you let it. It has no limits.\" - Dee Waldeck",
    "\"Our hours in love have wings; in absence, crutches.\" - Colley Cibber",
    "\"The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.\" - Helen Keller",
    "\"I carry your heart with me (I carry it in my heart).\" - E.E. Cummings",
    "\"The scariest thing about distance is that you don't know whether they'll miss you or forget you.\" - Nicholas Sparks",
    "\"Distance does not break off the friendship absolutely, but only the activity of it.\" - Aristotle",
    "\"No measure of time with you will be long enough, but let's start with forever.\" - Unknown",
    "\"Love is missing someone whenever you're apart, but somehow feeling warm inside because you're close in heart.\" - Kay Knudsen",
    "\"Distance means you're out of sight, but never out of mind.\" - Unknown",
    "\"Being close is the first and last desire of lovers, but being far and loving each other without an inch's difference is the characteristic of real love.\" - Senora Ray",
    "\"If you found that one person who is really worth the sacrifices, pain, and hardships, then your efforts will not go to waste.\" - Anna Agoncillo",
];

function getRandomText(): string {
    const randomIndex = Math.floor(Math.random() * textList.length);
    return textList[randomIndex];
}

function displayRandomText(): void {
    const randomTextElement = document.getElementById('randomText');
    if (randomTextElement) {
        randomTextElement.innerText = getRandomText();
    }
}

// Display random text when the page loads
displayRandomText();