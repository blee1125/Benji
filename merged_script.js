const excuses = [
  "BRO THIS LAG SPIKE I SWEAR!",
  "My keyboard bugged out.",
  "I sneezed bro.",
  "I forgot to put down the curtains, it's too bright.",
  "My WiFi is on life support.",
  "I wasn't trying.",
  "This is my warm-up.",
  "Bro my mouse bugged out.",
  "Bro, this game is p2w.",
  "My power went out.",
  "My keyboard isn't keyboarding.",
  "I was too lazy to try.",
  "Dude, MY TEAMMATES ARE NONEXISTANT.",
  "Hold up, my friend texted me.",
  "Bro I swear this game is so no-skill.",
  "Controller player? Yeah, makes sense.",
  "My FPS dropped harder than my GPA.",
  "Nah, that guy is 100% hacking.",
  "My mom called me out for lunch, dang it.",
  "These randoms are unreal.",
  "My dad unplugged the cable to the router, its wraps bruh.",
  "Keyboard drift is wild rn.",
  "LOL this noob is so trash at the game.",
  "If I try, I can beat this game with no hands dawg."
];

// Generate a random excuse
function generateExcuse() {
  let randomIndex = Math.floor(Math.random() * excuses.length);
  return excuses[randomIndex];
}

// Listen for a request to get an excuse
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getExcuse") {
    sendResponse({ excuse: generateExcuse() });
  }
});
