// Your script here.
const synth = window.speechSynthesis;
const voicesDropdown = document.querySelector('#voice');
const voices = synth.getVoices();
voicesDropdown.innerHTML = voices
	.filter(voice => voice.lang.includes('en'))
	.map(voice => `<option value="${voice.name}">${voice.name}</option>`)
	.join('');

document.querySelector('#start').addEventListener('click', () => {
	const text = document.querySelector('#text').value;
    const voice = voices.find(voice => voice.name === voicesDropdown.value);
	const utterance = new SpeechSynthesisUtterance(text);
	utterance.voice = voice;
	synth.speak(utterance);
});

    // Stop speaking when the stop button is clicked
    document.querySelector('#stop').addEventListener('click', () => {
      synth.cancel();
    });