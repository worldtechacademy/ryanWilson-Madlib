var nouns = [];
var adjectives = [];
var adverbs = [];
var verbs = [];
console.log('nouns1:',nouns);
var story;

var backupNouns = ["parent", "car", "zebra", "incense"];
var backupAdjectives = ["blue", "lovely", "grainy", "black"];
var backupAdverbs = ["gracefully", "foolishly", "often", "obnoxiously"];
var backupVerbs = ["burp", "walk", "swing", "scream"];

function generateMadLib() {
	nouns = [];
	adjectives = [];
	adverbs = [];
	verbs = [];
	var addNouns = function() {
		var userNouns = document.getElementById('nouns').value;
		userNouns = userNouns.split(",");
		nouns = nouns.concat(userNouns);
		nouns.shift();
		console.log('nouns2:',nouns);
	};
	var addAdjectives = function() {
		var userAdjectives = document.getElementById('adjectives').value;
		userAdjectives = userAdjectives.split(",");
		adjectives = adjectives.concat(userAdjectives);
		adjectives.shift();
	};
	var addAdverbs = function() {
		var userAdverbs = document.getElementById('adverbs').value;
		userAdverbs = userAdverbs.split(",");
		adverbs = adverbs.concat(userAdverbs);
		adverbs.shift();
	};
	var addVerbs = function() {
		var userVerbs = document.getElementById('verbs').value;
		userVerbs = userVerbs.split(",");
		verbs = verbs.concat(userVerbs);
		verbs.shift();
	};
	removeStory();
	addNouns();
	addVerbs();
	addAdverbs();
	addAdjectives();
	addExtraWords();
	var radios = document.getElementsByName('select-lib');
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			setStory(radios[i].value);
		}
	}
	createStory();
	console.log('nouns4:',nouns);
	nouns = [];
	verbs = [];
	adverbs = [];
	adjectives = [];
	console.log('nouns4:',nouns);
};
function removeStory() {

}
function addExtraWords() {
	if (nouns.length < 4) {
		while (nouns.length !== 4) {
			var randomNumber = Math.floor(Math.random() * 4);
			var newWord = backupNouns[randomNumber];
			if (nouns.indexOf(newWord) === -1) {
				nouns.push(newWord);
			}
		}
		console.log('nouns3:',nouns);
	}
	if (adjectives.length < 4) {
		while (adjectives.length !== 4) {
			var randomNumber = Math.floor(Math.random() * 4);
			var newWord = backupAdjectives[randomNumber];
			if (adjectives.indexOf(newWord) === -1) {
				adjectives.push(newWord);
			}
		}
	}
	if (adverbs.length < 4) {
		while (adverbs.length !== 4) {
			var randomNumber = Math.floor(Math.random() * 4);
			var newWord = backupAdverbs[randomNumber];
			if (adverbs.indexOf(newWord) === -1) {
				adverbs.push(newWord);
			}
		}
	}
	if (verbs.length < 4) {
		while (verbs.length !== 4) {
			var randomNumber = Math.floor(Math.random() * 4);
			var newWord = backupVerbs[randomNumber];
			if (verbs.indexOf(newWord) === -1) {
				verbs.push(newWord);
			}
		}
	}
};

function setStory(radioValue) {
	var christmas = 'Every Christmas we ' + verbs[0] + ' to a ' + adjectives[0] + ' tree farm far away. This is not just any ' + adjectives[1] + ' tree farm. My dad and I ' + verbs[1] + ' onto the ' + nouns[0] + ' to ' + verbs[2] + ' for the perfect ' + nouns[1] + '.  Some people like them ' + adjectives[2] + ', but I prefer them ' + adjectives[3] + '. After  searching for hours I usually ' + adverbs[0] + ' exclaim "Dad! The perfect tree is over there!" Off we ' + verbs[3] + ' to get the tree. The problem is we always forget the ' + nouns[2] + ' and the ' + nouns[3] + '. But at the end of the day we ' + adverbs[1] + ' get the tree and head home ' + adverbs[2] + '. "I wish it was Christmas all year round"  I ' + adverbs[3] + ' think to myself."';
	var shopping = 'Today I went shopping. When I arrived at the store I saw a ' + adjectives[0] + ' ' + nouns[0] + ', who upon noticing me ' + adverbs[0] + ' said "I need to ' + verbs[0] + '". "Well, ' + 'that was ' + adjectives[1] + '" I thought to myself and walked in the store. The store had rearranged it\'s inventory, so I felt ' + adverbs[1] + ' lost. I ' +'walked up to store clerk and said ' + adverbs[2] + ' "I am looking for a ' + adjectives[2] + ' ' + nouns[1] + ' that doesn\'t ' + verbs[1] + ' as often as the last one I had." The store clerk ' + 'looked at me with a ' + adjectives[3] + ' look in his eye and said, "What you are looking for can be found by the ' + nouns[2] + ', if you see a ' + nouns[3] + ' that ' + adverbs[3] + ' can ' + verbs[2] + ', then you\'ve gone too far." As I tried to understand his directions, I thought to myself, "I should have just ordered it ' + 'on amazon.com, Their products seem to ' + verbs[3] + ' the perfect amount"';
	var brainstorm = 'Many say that brain storming is ' + adjectives[0] + ' and does not ' + verbs[0] + '.' + 'However, with the combination of the right computer and ' + nouns[1] + ' anyone '+ 'can lead a good ' + verbs[1] + '. When you have ' + adverbs[0] + ' pulled together a ' + adjectives[1] + ' ' + 'group of ' + nouns[0] + ' in a big room with lots of TV\'s then '+ 'magical things will happen. In the past we have ' + adverbs[1] + ' suggested ' + 'participants work together to find the most ' + adjectives[2] + ' solution. The '+ 'most difficult part is many ' + adjectives[3] + ' ' + nouns[2] + ' like to '+ verbs[2] + '. This has proved to be ' + adverbs[2] + ' problimatic. '+ 'But in the end the most important ' + nouns[3] + ' usually is brought to light. '+ 'Typically we try to encourage ideas to ' + verbs[3] + ', and never shut ideas '+ 'down. This concludes our instructions. Thanks for ' + adverbs[3] + ' listening!';
	if (radioValue === 'Christmas') {
		story = christmas;
	}
	if (radioValue === 'Shopping') {
		story = shopping;
	}
	if (radioValue === 'Brainstorm') {
		story = brainstorm;
	}
};

function createStory() {
	var storyWrapper = document.getElementById('story');
	storyWrapper.innerHTML = story;
};