(()=>{"use strict";const e=['"Love knows not its own depth until the hour of separation." - Kahlil Gibran','"Distance isn\'t an issue because in the end, I have you." - Unknown','"The longer the wait, the sweeter the kiss." - Unknown',"\"Distance is not for the fearful, it's for the bold. It's for those who are willing to spend a lot of time alone in exchange for a little time with the one they love.\" - Meghan Daum",'"In true love, the smallest distance is too great, and the greatest distance can be bridged." - Hans Nouwens','"Absence makes the heart grow fonder, but it sure makes the rest of you lonely." - Charles M. Schulz','"The simple lack of her is more to me than others\' presence." - Edward Thomas','"Distance means so little when someone means so much to you." - Tom McNeal','"Love will travel as far as you let it. It has no limits." - Dee Waldeck','"Our hours in love have wings; in absence, crutches." - Colley Cibber','"The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart." - Helen Keller','"I carry your heart with me (I carry it in my heart)." - E.E. Cummings',"\"The scariest thing about distance is that you don't know whether they'll miss you or forget you.\" - Nicholas Sparks",'"Distance does not break off the friendship absolutely, but only the activity of it." - Aristotle','"No measure of time with you will be long enough, but let\'s start with forever." - Unknown',"\"Love is missing someone whenever you're apart, but somehow feeling warm inside because you're close in heart.\" - Kay Knudsen",'"Distance means you\'re out of sight, but never out of mind." - Unknown','"Being close is the first and last desire of lovers, but being far and loving each other without an inch\'s difference is the characteristic of real love." - Senora Ray','"If you found that one person who is really worth the sacrifices, pain, and hardships, then your efforts will not go to waste." - Anna Agoncillo','"Distance is not an obstacle, but a beautiful reminder of how strong true love can be." - Unknown','"Our love is like the wind; I can\'t see it, but I can feel it." - Nicholas Sparks','"True love doesn\'t mean being inseparable; it means being separated and nothing changes." - Unknown','"Distance teaches us to appreciate the days that we are able to spend together." - Unknown','"Love bridges any distance and breaches any barriers. Our connection is unbreakable." - Unknown',"\"In every hello, there's a promise of a goodbye. But in every goodbye, there's a promise of a hello.\" - Unknown",'"Miles apart, but close at heart." - Unknown','"Distance is just a test to see how far love can travel." - Unknown','"Every night, I talk to the stars, pretending they\'re you. It acts like the connection we have; mysterious, yet beautiful." - Unknown','"Love knows not the rules of space and time, for love is an endless journey that only grows stronger with each passing day." - Unknown','"Distance means nothing when someone means everything." - Unknown','"Distance gives us a reason to love harder." - Unknown','"No matter where I am, you\'re always in my heart." - Unknown','"Our love is a journey that starts at forever and ends at never." - Unknown','"Absence sharpens love, presence strengthens it." - Thomas Fuller','"The greater the obstacle, the more glory in overcoming it." - Molière','"Love will find a way through paths where wolves fear to prey." - Lord Byron','"Two souls with but a single thought, two hearts that beat as one." - John Keats','"The simple lack of her is more to me than others\' presence." - Edward Thomas','"Distance is to love like wind is to fire—it extinguishes the small and kindles the great!" - Roger de Bussy-Rabutin',"\"Love doesn't make the world go 'round. Love is what makes the ride worthwhile.\" - Franklin P. Jones",'"Distance is not a hindrance, but a reminder of how strong our connection is." - Unknown','"The longer the wait, the sweeter the reunion." - Unknown','"Our love is like a compass. No matter where you are, it will always point you towards me." - Unknown','"Absence is to love what wind is to fire; it extinguishes the small, it inflames the great." - Roger de Bussy-Rabutin','"True love is not about perfection; it is hidden in flaws and grows despite distance." - Unknown','"When two hearts are meant for each other, no distance is too far, no time too long." - Unknown','"Distance is not measured in miles but in affection. Every moment, no matter the distance, is filled with love." - Unknown','"The art of love is largely the art of persistence." - Albert Ellis','"No matter how far apart we are, you\'ll always be in my thoughts and in my heart." - Unknown',"\"Distance can't stop what's meant to be.\" - Unknown",'"Distance is just a reminder of how strong true love can be." - Unknown','"The pain you feel today is the strength you feel tomorrow. For every challenge encountered, there is an opportunity for growth." - Unknown','"Love is an endless mystery, for it has nothing else to explain it." - Rabindranath Tagore','"You are my today and all of my tomorrows." - Leo Christopher','"Distance means opportunity. Opportunity to prove to each other that what we have is real." - Unknown',"\"Love is not finding someone to live with; it's finding someone you can't imagine living without.\" - Unknown",'"The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart." - Helen Keller','"Love is composed of a single soul inhabiting two bodies." - Aristotle','"True love is not about being inseparable; it\'s about being separated and nothing changes." - Unknown','"No matter how far apart we are, my love for you will always be a constant in my heart." - Unknown','"Love will find a way, even through the longest distance." - Unknown','"Distance means so little when someone means so much." - Unknown'];function n(e){return new Promise((n=>setTimeout(n,e)))}!function(){let e=document.getElementsByClassName("background-container");const n=new Date,t=n.getDate(),o=n.getMonth();let a;console.log(t),console.log(o),a=t<=10?"url('./data/old_paper.png')":"url('./data/christmas_bg.png')",0!=e.length&&(e[0].style.backgroundImage=a)}(),function(){var t,o,a,s;t=this,o=void 0,s=function*(){const t=document.getElementById("randomText");if(t){var o=function(){const n=Math.floor(Math.random()*e.length);return e[n]}();for(let e=0;e<=o.length;e++)t.innerText=o.slice(0,e),yield n(50)}},new((a=void 0)||(a=Promise))((function(e,n){function i(e){try{h(s.next(e))}catch(e){n(e)}}function r(e){try{h(s.throw(e))}catch(e){n(e)}}function h(n){var t;n.done?e(n.value):(t=n.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,r)}h((s=s.apply(t,o||[])).next())}))}()})();