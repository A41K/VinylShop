// Vinyl Shop JavaScript

// Sample vinyl record data
const vinylData = [
    {
        id: 1,
        title: "Dark Side of the Moon",
        artist: "Pink Floyd",
        price: 29.99,
        type: "buy",
        cover: "linear-gradient(135deg, #3e4a61 0%, #000000 75%, #3e4a61 100%)",
        coverImage: "images/dark-side.jpg", // Image path for album artwork
        labelColor: "#3e4a61",
        year: 1973,
        trackList: ["Speak to Me", "Breathe", "On the Run", "Time", "The Great Gig in the Sky", "Money", "Us and Them", "Any Colour You Like", "Brain Damage", "Eclipse"],
        audioSrc: "audio/dark-side.mp3",
        trackSrcs: ["audio/good kid.mp3", "audio/breathe.mp3", "audio/on-the-run.mp3", "audio/time.mp3", "audio/great-gig.mp3", "audio/money.mp3", "audio/us-and-them.mp3", "audio/any-colour.mp3", "audio/brain-damage.mp3", "audio/eclipse.mp3"]
    },
    {
        id: 2,
        title: "Thriller",
        artist: "Michael Jackson",
        price: 24.99,
        type: "buy",
        cover: "linear-gradient(45deg, #b82e1f 0%, #7a1c12 50%, #b82e1f 100%)",
        coverImage: "images/thriller.jpg",
        labelColor: "#b82e1f",
        year: 1982,
        trackList: ["Wanna Be Startin' Somethin'", "Baby Be Mine", "The Girl Is Mine", "Thriller", "Beat It", "Billie Jean", "Human Nature", "P.Y.T. (Pretty Young Thing)", "The Lady in My Life"],
        audioSrc: "audio/thriller.mp3",
        trackSrcs: ["audio/thriller.mp3", "audio/thriller.mp3", "audio/thriller.mp3", "audio/thriller.mp3", "audio/thriller.mp3", "audio/thriller.mp3", "audio/thriller.mp3", "audio/thriller.mp3", "audio/thriller.mp3"]
    },
    {
        id: 3,
        title: "Rumours",
        artist: "Fleetwood Mac",
        price: 27.99,
        type: "buy",
        cover: "linear-gradient(to right, #e6dfd9 0%, #c9c0b9 50%, #e6dfd9 100%)",
        labelColor: "#e6dfd9",
        year: 1977,
        trackList: ["Second Hand News", "Dreams", "Never Going Back Again", "Don't Stop", "Go Your Own Way", "Songbird", "The Chain", "You Make Loving Fun", "I Don't Want to Know", "Oh Daddy", "Gold Dust Woman"],
        audioSrc: "audio/rumours.mp3",
        coverImage: "images/rumours.jpg",
        trackSrcs: ["audio/rumours/second-hand-news.mp3", "audio/rumours/dreams.mp3", "audio/rumours/never-going-back.mp3", "audio/rumours/dont-stop.mp3", "audio/rumours/go-your-own-way.mp3", "audio/rumours/songbird.mp3", "audio/rumours/the-chain.mp3", "audio/rumours/you-make-loving-fun.mp3", "audio/rumours/i-dont-want-to-know.mp3", "audio/rumours/oh-daddy.mp3", "audio/rumours/gold-dust-woman.mp3"]
    },
    {
        id: 4,
        title: "Abbey Road",
        artist: "The Beatles",
        price: 9.99,
        type: "rent",
        cover: "linear-gradient(to bottom, #4a76ab 0%, #2c4566 75%, #4a76ab 100%)",
        labelColor: "#4a76ab",
        year: 1969,
        trackList: ["Come Together", "Something", "Maxwell's Silver Hammer", "Oh! Darling", "Octopus's Garden", "I Want You (She's So Heavy)", "Here Comes the Sun", "Because", "You Never Give Me Your Money", "Sun King", "Mean Mr. Mustard", "Polythene Pam", "She Came in Through the Bathroom Window", "Golden Slumbers", "Carry That Weight", "The End", "Her Majesty"],
        audioSrc: "audio/abbey-road.mp3",
        coverImage: "images/abbey-road.jpg",
        trackSrcs: ["audio/abbey-road/come-together.mp3", "audio/abbey-road/something.mp3", "audio/abbey-road/maxwell.mp3", "audio/abbey-road/oh-darling.mp3", "audio/abbey-road/octopus.mp3", "audio/abbey-road/i-want-you.mp3", "audio/abbey-road/here-comes-the-sun.mp3", "audio/abbey-road/because.mp3", "audio/abbey-road/money.mp3", "audio/abbey-road/sun-king.mp3", "audio/abbey-road/mr-mustard.mp3", "audio/abbey-road/polythene.mp3", "audio/abbey-road/bathroom-window.mp3", "audio/abbey-road/golden-slumbers.mp3", "audio/abbey-road/carry-that-weight.mp3", "audio/abbey-road/the-end.mp3", "audio/abbey-road/her-majesty.mp3"]
    },
    {
        id: 5,
        title: "Kind of Blue",
        artist: "Miles Davis",
        price: 8.99,
        type: "rent",
        cover: "linear-gradient(120deg, #304878 0%, #1a2940 50%, #304878 100%)",
        labelColor: "#304878",
        year: 1959,
        trackList: ["So What", "Freddie Freeloader", "Blue in Green", "All Blues", "Flamenco Sketches"],
        audioSrc: "audio/kind-of-blue.mp3",
        coverImage: "images/kind-of-blue.jpg",
        trackSrcs: ["audio/kind-of-blue/so-what.mp3", "audio/kind-of-blue/freddie.mp3", "audio/kind-of-blue/blue-in-green.mp3", "audio/kind-of-blue/all-blues.mp3", "audio/kind-of-blue/flamenco.mp3"]
    },
    {
        id: 6,
        title: "Back in Black",
        artist: "AC/DC",
        price: 22.99,
        type: "buy",
        cover: "linear-gradient(to right, #000000 0%, #333333 50%, #000000 100%)",
        labelColor: "#000000",
        year: 1980,
        trackList: ["Hells Bells", "Shoot to Thrill", "What Do You Do for Money Honey", "Given the Dog a Bone", "Let Me Put My Love into You", "Back in Black", "You Shook Me All Night Long", "Have a Drink on Me", "Shake a Leg", "Rock and Roll Ain't Noise Pollution"],
        audioSrc: "audio/back-in-black.mp3",
        coverImage: "images/back-in-black.jpg",
        trackSrcs: ["audio/back-in-black/hells-bells.mp3", "audio/back-in-black/shoot-to-thrill.mp3", "audio/back-in-black/money-honey.mp3", "audio/back-in-black/dog-bone.mp3", "audio/back-in-black/love-into-you.mp3", "audio/back-in-black/back-in-black.mp3", "audio/back-in-black/shook-me.mp3", "audio/back-in-black/drink.mp3", "audio/back-in-black/shake-leg.mp3", "audio/back-in-black/rock-and-roll.mp3"]
    },
    {
        id: 7,
        title: "Purple Rain",
        artist: "Prince",
        price: 7.99,
        type: "rent",
        cover: "linear-gradient(135deg, #6f4685 0%, #4a2e5c 50%, #6f4685 100%)",
        labelColor: "#6f4685",
        year: 1984,
        trackList: ["Let's Go Crazy", "Take Me with U", "The Beautiful Ones", "Computer Blue", "Darling Nikki", "When Doves Cry", "I Would Die 4 U", "Baby I'm a Star", "Purple Rain"],
        audioSrc: "audio/purple-rain.mp3",
        coverImage: "images/purple-rain.jpg",
        trackSrcs: ["audio/purple-rain/lets-go-crazy.mp3", "audio/purple-rain/take-me.mp3", "audio/purple-rain/beautiful-ones.mp3", "audio/purple-rain/computer-blue.mp3", "audio/purple-rain/darling-nikki.mp3", "audio/purple-rain/when-doves-cry.mp3", "audio/purple-rain/die-4-u.mp3", "audio/purple-rain/baby-star.mp3", "audio/purple-rain/purple-rain.mp3"]
    },
    {
        id: 8,
        title: "Nevermind",
        artist: "Nirvana",
        price: 19.99,
        type: "buy",
        cover: "linear-gradient(to bottom, #5a9bd5 0%, #3a6b9d 50%, #5a9bd5 100%)",
        labelColor: "#5a9bd5",
        year: 1991,
        trackList: ["Smells Like Teen Spirit", "In Bloom", "Come as You Are", "Breed", "Lithium", "Polly", "Territorial Pissings", "Drain You", "Lounge Act", "Stay Away", "On a Plain", "Something in the Way", "Endless, Nameless"],
        audioSrc: "audio/nevermind.mp3",
        coverImage: "images/nevermind.jpg",
        trackSrcs: ["audio/nevermind/teen-spirit.mp3", "audio/nevermind/in-bloom.mp3", "audio/nevermind/come-as-you-are.mp3", "audio/nevermind/breed.mp3", "audio/nevermind/lithium.mp3", "audio/nevermind/polly.mp3", "audio/nevermind/territorial.mp3", "audio/nevermind/drain-you.mp3", "audio/nevermind/lounge-act.mp3", "audio/nevermind/stay-away.mp3", "audio/nevermind/on-a-plain.mp3", "audio/nevermind/something.mp3", "audio/nevermind/endless.mp3"]
    },
    {
        id: 9,
        title: "The Chronic",
        artist: "Dr. Dre",
        price: 18.99,
        type: "buy",
        cover: "linear-gradient(45deg, #2e8b57 0%, #1a5733 50%, #2e8b57 100%)",
        labelColor: "#2e8b57",
        year: 1992,
        trackList: ["The Chronic (Intro)", "Nuthin' But a 'G' Thang", "Let Me Ride", "The Day the Niggaz Took Over", "Nuthin' but a 'G' Thang", "Deeez Nuuuts", "Lil' Ghetto Boy", "A Nigga Witta Gun", "Rat-Tat-Tat-Tat", "The $20 Sack Pyramid", "Lyrical Gangbang", "High Powered", "The Doctor's Office", "Stranded on Death Row", "The Roach (The Chronic Outro)", "Bitches Ain't Shit"],
        audioSrc: "audio/the-chronic.mp3",
        coverImage: "images/the-chronic.jpg",
        trackSrcs: ["audio/chronic/intro.mp3", "audio/chronic/g-thang.mp3", "audio/chronic/let-me-ride.mp3", "audio/chronic/took-over.mp3", "audio/chronic/g-thang-2.mp3", "audio/chronic/deeez-nuuuts.mp3", "audio/chronic/ghetto-boy.mp3", "audio/chronic/witta-gun.mp3", "audio/chronic/rat-tat.mp3", "audio/chronic/sack-pyramid.mp3", "audio/chronic/gangbang.mp3", "audio/chronic/high-powered.mp3", "audio/chronic/doctors-office.mp3", "audio/chronic/death-row.mp3", "audio/chronic/roach.mp3", "audio/chronic/aint-shit.mp3"]
    },
    {
        id: 10,
        title: "OK Computer",
        artist: "Radiohead",
        price: 26.99,
        type: "buy",
        cover: "linear-gradient(to right, #4c4c4c 0%, #2d2d2d 50%, #4c4c4c 100%)",
        labelColor: "#4c4c4c",
        year: 1997,
        trackList: ["Airbag", "Paranoid Android", "Subterranean Homesick Alien", "Exit Music (For a Film)", "Let Down", "Karma Police", "Fitter Happier", "Electioneering", "Climbing Up the Walls", "No Surprises", "Lucky", "The Tourist"],
        audioSrc: "audio/ok-computer.mp3",
        coverImage: "images/ok-computer.jpg",
        trackSrcs: ["audio/ok-computer/airbag.mp3", "audio/ok-computer/paranoid.mp3", "audio/ok-computer/alien.mp3", "audio/ok-computer/exit-music.mp3", "audio/ok-computer/let-down.mp3", "audio/ok-computer/karma-police.mp3", "audio/ok-computer/fitter.mp3", "audio/ok-computer/electioneering.mp3", "audio/ok-computer/climbing.mp3", "audio/ok-computer/no-surprises.mp3", "audio/ok-computer/lucky.mp3", "audio/ok-computer/tourist.mp3"]
    },
    {
        id: 11,
        title: "Blonde",
        artist: "Frank Ocean",
        price: 32.99,
        type: "buy",
        cover: "linear-gradient(135deg, #f5f5dc 0%, #e6e6c8 50%, #f5f5dc 100%)",
        labelColor: "#f5f5dc",
        year: 2016,
        trackList: ["Nikes", "Ivy", "Pink + White", "Be Yourself", "Solo", "Skyline To", "Self Control", "Good Guy", "Nights", "Solo (Reprise)", "Pretty Sweet", "Facebook Story", "Close to You", "White Ferrari", "Seigfried", "Godspeed", "Futura Free"],
        audioSrc: "audio/blonde.mp3",
        coverImage: "images/blonde.jpg",
        trackSrcs: ["audio/blonde/nikes.mp3", "audio/blonde/ivy.mp3", "audio/blonde/pink-white.mp3", "audio/blonde/be-yourself.mp3", "audio/blonde/solo.mp3", "audio/blonde/skyline.mp3", "audio/blonde/self-control.mp3", "audio/blonde/good-guy.mp3", "audio/blonde/nights.mp3", "audio/blonde/solo-reprise.mp3", "audio/blonde/pretty-sweet.mp3", "audio/blonde/facebook.mp3", "audio/blonde/close-to-you.mp3", "audio/blonde/white-ferrari.mp3", "audio/blonde/seigfried.mp3", "audio/blonde/godspeed.mp3", "audio/blonde/futura-free.mp3"]
    },
    {
        id: 12,
        title: "To Pimp a Butterfly",
        artist: "Kendrick Lamar",
        price: 29.99,
        type: "buy",
        cover: "linear-gradient(to bottom, #000000 0%, #333333 50%, #000000 100%)",
        coverImage: "images/TPAB.png",
        labelColor: "#333333",
        year: 2015,
        trackList: ["Wesley's Theory", "For Free? (Interlude)", "King Kunta", "Institutionalized", "These Walls", "u", "Alright", "For Sale? (Interlude)", "Momma", "Hood Politics", "How Much a Dollar Cost", "Complexion (A Zulu Love)", "The Blacker the Berry", "You Ain't Gotta Lie (Momma Said)", "i", "Mortal Man"],
        audioSrc: "audio/good kid.mp3",
        trackSrcs: [
            "audio/#12/Wesley's Theory.mp3",
            "audio/#12/For Free (Interlude).mp3",
            "audio/#12/King Kunta.mp3",
            "audio/#12/Institutionalized.mp3",
            "audio/#12/These Walls.mp3",
            "audio/#12/u.mp3",
            "audio/#12/Alright.mp3",
            "audio/#12/For Sale (Interlude).mp3",
            "audio/#12/Momma.mp3",
            "audio/#12/Hood Politics.mp3",
            "audio/#12/How Much A Dollar Cost.mp3",
            "audio/#12/Complexion (A Zulu Love).mp3",
            "audio/#12/The Blacker The Berry.mp3",
            "audio/#12/You Ain't Gotta Lie (Momma Said).mp3",
            "audio/#12/i.mp3",
            "audio/#12/Mortal Man.mp3"
          ]          
    }
];

// User's collection of owned/rented vinyls
let userCollection = [];

// DOM Elements
const shopBtn = document.getElementById('shop-btn');
const playerBtn = document.getElementById('player-btn');
const settingsBtn = document.getElementById('settings-btn');
const sections = document.querySelectorAll('.section');
const vinylCollection = document.getElementById('vinyl-collection');
const filterBtns = document.querySelectorAll('.filter-btn');
const ownedVinyls = document.getElementById('owned-vinyls');
const currentVinyl = document.getElementById('current-vinyl');
const playBtn = document.getElementById('play-btn');
const stopBtn = document.getElementById('stop-btn');
const platter = document.querySelector('.platter');
const tonearm = document.querySelector('.tonearm');
const themeBtns = document.querySelectorAll('.theme-btn');
const qualityBtns = document.querySelectorAll('.quality-btn');
const volumeSlider = document.getElementById('volume-slider');
const volumeValue = document.getElementById('volume-value');

// Audio elements
const audioPlayer = new Audio();
const crackleSound = new Audio('audio/vinyl-crackle.mp3'); // Vinyl crackle sound effect

// Initialize the app
function init() {
    // Populate the shop with vinyl records
    displayVinyls();
    
    // Set up event listeners
    setupEventListeners();
    
    // Add some initial vinyls to user collection for demo purposes
    addToCollection(1); // Dark Side of the Moon
    addToCollection(12); // To Pimp a Butterfly
    
    // Update the player playlist
    updatePlaylist();
    
    // Preload audio files
    crackleSound.load();
    
    // Set up audio event listeners
    audioPlayer.addEventListener('ended', () => {
        // When track ends, check if there's a next track to play
        if (currentVinyl.dataset.vinylId && currentVinyl.dataset.currentTrack) {
            const vinylId = parseInt(currentVinyl.dataset.vinylId);
            const currentTrackIndex = parseInt(currentVinyl.dataset.currentTrack);
            const vinyl = vinylData.find(v => v.id === vinylId);
            
            // If there's a next track available, play it
            if (vinyl && vinyl.trackList && currentTrackIndex < vinyl.trackList.length - 1) {
                const nextTrackIndex = currentTrackIndex + 1;
                loadVinyl(vinyl, nextTrackIndex);
                startPlayback();
            } else {
                // If this was the last track, stop playback after a small delay
                setTimeout(stopPlayback, 1000);
            }
        } else {
            // If no track information is available, just stop playback
            setTimeout(stopPlayback, 1000);
        }
    });
}

// Display vinyl records in the shop
function displayVinyls(filter = 'all') {
    vinylCollection.innerHTML = '';
    
    vinylData.forEach(vinyl => {
        if (filter === 'all' || vinyl.type === filter) {
            const vinylElement = document.createElement('div');
            vinylElement.className = 'vinyl-item';
            
            // Use cover image if available, otherwise use gradient
            const coverStyle = vinyl.coverImage ? 
                `background-image: url('${vinyl.coverImage}'); background-size: cover;` : 
                `background-image: ${vinyl.cover};`;
                
            vinylElement.innerHTML = `
                <div class="vinyl-cover" style="${coverStyle}"></div>
                <div class="vinyl-title">${vinyl.title}</div>
                <div class="vinyl-artist">${vinyl.artist} (${vinyl.year})</div>
                <div class="vinyl-price">$${vinyl.price.toFixed(2)}</div>
                <button class="vinyl-btn" data-id="${vinyl.id}">${vinyl.type === 'buy' ? 'Buy' : 'Rent'}</button>
            `;
            vinylCollection.appendChild(vinylElement);
            
            // Add a spinning animation on hover
            const vinylCover = vinylElement.querySelector('.vinyl-cover');
            vinylCover.addEventListener('mouseenter', () => {
                vinylCover.style.animation = 'spin 4s linear infinite';
            });
            vinylCover.addEventListener('mouseleave', () => {
                vinylCover.style.animation = 'none';
            });
        }
    });
    
    // Add event listeners to the buy/rent buttons
    document.querySelectorAll('.vinyl-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const vinylId = parseInt(e.target.dataset.id);
            addToCollection(vinylId);
            
            // Show a confirmation message
            const vinylItem = e.target.closest('.vinyl-item');
            const confirmMsg = document.createElement('div');
            confirmMsg.className = 'confirm-msg';
            confirmMsg.textContent = 'Added to collection!';
            confirmMsg.style.color = '#8e44ad';
            confirmMsg.style.fontWeight = 'bold';
            confirmMsg.style.marginTop = '10px';
            
            // Replace the button with the confirmation message
            e.target.replaceWith(confirmMsg);
            
            // Remove the confirmation message after 2 seconds
            setTimeout(() => {
                confirmMsg.remove();
                vinylItem.appendChild(e.target);
            }, 2000);
        });
    });
}

// Add a vinyl to the user's collection
function addToCollection(vinylId) {
    // Check if the vinyl is already in the collection
    if (!userCollection.includes(vinylId)) {
        userCollection.push(vinylId);
        updatePlaylist();
    }
}

// Update the player playlist
function updatePlaylist() {
    ownedVinyls.innerHTML = '';
    
    userCollection.forEach(vinylId => {
        const vinyl = vinylData.find(v => v.id === vinylId);
        if (vinyl) {
            const playlistItem = document.createElement('li');
            playlistItem.className = 'playlist-item';
            playlistItem.dataset.id = vinyl.id;
            
            // Use cover image if available, otherwise use gradient
            const coverStyle = vinyl.coverImage ? 
                `background-image: url('${vinyl.coverImage}'); background-size: cover;` : 
                `background: ${vinyl.cover};`;
                
            playlistItem.innerHTML = `
                <div class="playlist-cover" style="${coverStyle}"></div>
                <div class="playlist-info">
                    <div class="playlist-title">${vinyl.title}</div>
                    <div class="playlist-artist">${vinyl.artist}</div>
                </div>
            `;
            ownedVinyls.appendChild(playlistItem);
            
            // Add click event to load the vinyl into the player
            playlistItem.addEventListener('click', () => {
                loadVinyl(vinyl);
                document.querySelectorAll('.playlist-item').forEach(item => {
                    item.classList.remove('active');
                });
                playlistItem.classList.add('active');
            });
        }
    });
    
    // Load the first vinyl by default if available
    if (userCollection.length > 0) {
        const firstVinyl = vinylData.find(v => v.id === userCollection[0]);
        if (firstVinyl) {
            loadVinyl(firstVinyl);
            document.querySelector('.playlist-item').classList.add('active');
        }
    }
}

// Load a vinyl into the player
function loadVinyl(vinyl, trackIndex = 0) {
    // Update the vinyl appearance
    currentVinyl.style.backgroundColor = '#111';
    
    // Use cover image if available for the vinyl label
    if (vinyl.coverImage) {
        currentVinyl.querySelector('.vinyl-label').style.backgroundImage = `url('${vinyl.coverImage}')`;
        currentVinyl.querySelector('.vinyl-label').style.backgroundSize = 'cover';
        currentVinyl.querySelector('.vinyl-label').innerHTML = '';
    } else {
        currentVinyl.querySelector('.vinyl-label').style.backgroundImage = 'none';
        currentVinyl.querySelector('.vinyl-label').style.backgroundColor = vinyl.labelColor;
        currentVinyl.querySelector('.vinyl-label').innerHTML = `
            <div style="font-size: 8px; line-height: 1.2;">
                ${vinyl.title}<br>
                ${vinyl.artist}<br>
                <small>${vinyl.year}</small>
            </div>
        `;
    }
    
    // Stop playback if it's currently playing
    stopPlayback();
    
    // Set the audio source based on track index if available
    // Set up error handling for audio source
    try {
        if (vinyl.trackSrcs && vinyl.trackSrcs.length > trackIndex) {
            audioPlayer.src = vinyl.trackSrcs[trackIndex];
        } else if (vinyl.audioSrc && vinyl.audioSrc !== '#') {
            audioPlayer.src = vinyl.audioSrc;
        } else {
            audioPlayer.src = 'audio/default-track.mp3';
        }
        
        // Add error handling for audio loading
        audioPlayer.onerror = function() {
            console.log('Error loading audio source, falling back to default track');
            audioPlayer.src = 'audio/default-track.mp3';
        };
        
        audioPlayer.load();
    } catch (error) {
        console.error('Error setting audio source:', error);
        audioPlayer.src = 'audio/default-track.mp3';
        audioPlayer.load();
    }
    
    // Store the current vinyl and track index as global variables
    currentVinyl.dataset.vinylId = vinyl.id;
    currentVinyl.dataset.currentTrack = trackIndex;
    
    // Display track list if available
    if (vinyl.trackList && vinyl.trackList.length > 0) {
        const trackListContainer = document.createElement('div');
        trackListContainer.className = 'track-list-container';
        
        // Create track list with clickable items
        const trackListHTML = vinyl.trackList.map((track, index) => {
            const isActive = index === trackIndex ? 'class="active"' : '';
            return `<li data-track-index="${index}" ${isActive}>${track}</li>`;
        }).join('');
        
        trackListContainer.innerHTML = `
            <h4>Track List:</h4>
            <ol class="track-list">
                ${trackListHTML}
            </ol>
        `;
        
        // Check if track list already exists and remove it
        const existingTrackList = document.querySelector('.track-list-container');
        if (existingTrackList) {
            existingTrackList.remove();
        }
        
        // Add the track list to the player section
        document.querySelector('.playlist').appendChild(trackListContainer);
        
        // Add click event listeners to track items
        const trackItems = trackListContainer.querySelectorAll('.track-list li');
        trackItems.forEach(item => {
            item.addEventListener('click', () => {
                const clickedTrackIndex = parseInt(item.dataset.trackIndex);
                // Update active track styling
                trackItems.forEach(track => track.classList.remove('active'));
                item.classList.add('active');
                // Load and play the selected track
                loadVinyl(vinyl, clickedTrackIndex);
                startPlayback();
            });
        });
    }
}

// Start playback
function startPlayback() {
    platter.classList.add('playing');
    tonearm.classList.add('playing');
    playBtn.disabled = true;
    stopBtn.disabled = false;
    
    // Start the vinyl crackle sound (looped)
    crackleSound.loop = true;
    crackleSound.volume = 0.2 * (volumeSlider.value / 100);
    crackleSound.play();
    
    // Add a slight delay before starting the music (simulating the needle drop)
    setTimeout(() => {
        audioPlayer.volume = 0.8 * (volumeSlider.value / 100);
        audioPlayer.play().catch(error => {
            console.log('Audio playback error:', error);
            // If audio fails to play, still keep the visual effects
        });
    }, 1500);
    
    // Add a subtle wobble effect to the platter
    platter.style.animationDuration = '1.98s';
    
    // Visual feedback
    currentVinyl.classList.add('playing');
    
    // Highlight the currently playing track in the track list if available
    if (currentVinyl.dataset.currentTrack) {
        const trackIndex = parseInt(currentVinyl.dataset.currentTrack);
        const trackItems = document.querySelectorAll('.track-list li');
        if (trackItems.length > 0) {
            trackItems.forEach(item => item.classList.remove('active'));
            if (trackItems[trackIndex]) {
                trackItems[trackIndex].classList.add('active');
            }
        }
    }
}

// Stop playback
function stopPlayback() {
    platter.classList.remove('playing');
    tonearm.classList.remove('playing');
    playBtn.disabled = false;
    stopBtn.disabled = true;
    
    // Stop all audio
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    crackleSound.pause();
    crackleSound.currentTime = 0;
    
    // Remove visual effects
    currentVinyl.classList.remove('playing');
}

// Set up event listeners
function setupEventListeners() {
    // Navigation
    shopBtn.addEventListener('click', () => switchSection('shop'));
    playerBtn.addEventListener('click', () => switchSection('player'));
    settingsBtn.addEventListener('click', () => switchSection('settings'));
    
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayVinyls(btn.dataset.filter);
        });
    });
    
    // Player controls
    playBtn.addEventListener('click', startPlayback);
    stopBtn.addEventListener('click', stopPlayback);
    
    // Theme settings
    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            themeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            if (btn.dataset.theme === 'dark') {
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
            }
        });
    });
    
    // Quality settings
    qualityBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            qualityBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // In a real app, this would adjust audio quality
        });
    });
    
    // Volume slider
    volumeSlider.addEventListener('input', () => {
        const value = volumeSlider.value;
        volumeValue.textContent = `${value}%`;
        
        // Adjust audio volume
        audioPlayer.volume = 0.8 * (value / 100);
        crackleSound.volume = 0.2 * (value / 100);
    });
}

// Switch between sections
function switchSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
    // Update navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`${sectionId}-btn`).classList.add('active');
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);