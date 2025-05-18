// Vinyl Shop JavaScript

// Sample vinyl record data
const vinylData = [
    {
        id: 1,
        title: "",
        artist: "",
        price: 0,
        type: "buy",
        cover: "linear-gradient(135deg, #3e4a61 0%, #000000 75%, #3e4a61 100%)",
        coverImage: "",
        labelColor: "#3e4a61",
        year: 1,
        trackList: [],
        audioSrc: "",
        trackSrcs: []
    },
    {
        id: 2,
        title: "",
        artist: "",
        price: 0,
        type: "buy",
        cover: "linear-gradient(45deg, #b82e1f 0%, #7a1c12 50%, #b82e1f 100%)",
        coverImage: "",
        labelColor: "#b82e1f",
        year: 2,
        trackList: [],
        audioSrc: "",
        trackSrcs: []
    },
    {
        id: 3,
        title: "",
        artist: "",
        price: 0,
        type: "buy",
        cover: "linear-gradient(to right, #e6dfd9 0%, #c9c0b9 50%, #e6dfd9 100%)",
        labelColor: "#e6dfd9",
        year: 3,
        trackList: [],
        audioSrc: "",
        coverImage: "",
        trackSrcs: []
    },
    {
        id: 4,
        title: "",
        artist: "",
        price: 0,
        type: "rent",
        cover: "linear-gradient(to bottom, #4a76ab 0%, #2c4566 75%, #4a76ab 100%)",
        labelColor: "#4a76ab",
        year: 4,
        trackList: [],
        audioSrc: "",
        coverImage: "",
        trackSrcs: [""]
    },
    {
        id: 5,
        title: "",
        artist: "",
        price: 0,
        type: "rent",
        cover: "linear-gradient(120deg, #304878 0%, #1a2940 50%, #304878 100%)",
        labelColor: "#304878",
        year: 5,
        trackList: [],
        audioSrc: "",
        coverImage: "",
        trackSrcs: []
    },
    {
        id: 6,
        title: "",
        artist: "",
        price: 0,
        type: "buy",
        cover: "linear-gradient(to right, #000000 0%, #333333 50%, #000000 100%)",
        labelColor: "#000000",
        year: 6,
        trackList: [],
        audioSrc: "",
        coverImage: "",
        trackSrcs: []
    },
    {
        id: 7,
        title: "",
        artist: "",
        price: 0,
        type: "rent",
        cover: "linear-gradient(135deg, #6f4685 0%, #4a2e5c 50%, #6f4685 100%)",
        labelColor: "#6f4685",
        year: 7,
        trackList: [],
        audioSrc: "",
        coverImage: "",
        trackSrcs: []
    },
    {
        id: 8,
        title: "",
        artist: "",
        price: 0,
        type: "buy",
        cover: "linear-gradient(to bottom, #5a9bd5 0%, #3a6b9d 50%, #5a9bd5 100%)",
        labelColor: "#5a9bd5",
        year: 8,
        trackList: [],
        audioSrc: "",
        coverImage: "",
        trackSrcs: []
    },
    {
        id: 9,
        title: "IGOR",
        artist: "Tyler, The Creator",
        price: 19.99,
        type: "buy",
        cover: "linear-gradient(45deg, #2e8b57 0%, #1a5733 50%, #2e8b57 100%)",
        labelColor: "#2e8b57",
        year: 2019,
        trackList: ["IGOR'S THEME", "EARFQUAKE", "I THINK", "EXACTLY WHAT YOU RUN FROM YOU END UP CHASING", "RUNNING OUT OF TIME", "NEW MAGIC WAND", "A BOY IS A GUN", "PUPPET", "WHAT'S GOOD", "GONE, GONE / THANK YOU", "I DON'T LOVE YOU ANYMORE", "ARE WE STILL FRIENDS" ],
        audioSrc: "audio/igor.mp3",
        coverImage: "images/Igor.jpg",
        trackSrcs: [
            "audio/album9/IGOR'S THEME.mp3",
            "audio/album9/EARFQUAKE.mp3",
            "audio/album9/I THINK.mp3",
            "audio/album9/EXACTLY WHAT YOU RUN FROM YOU END UP CHASING.mp3",
            "audio/album9/RUNNING OUT OF TIME.mp3",
            "audio/album9/NEW MAGIC WAND.mp3",
            "audio/album9/A BOY IS A GUN.mp3",
            "audio/album9/PUPPET.mp3",
            "audio/album9/WHAT'S GOOD.mp3",
            "audio/album9/GONE, GONE + THANK YOU.mp3",
            "audio/album9/I DON'T LOVE YOU ANYMORE.mp3",
            "audio/album9/ARE WE STILL FRIENDS.mp3"
        ]
    },
    {
        id: 10,
        title: "Sonder Son",
        artist: "Brent Faiyaz",
        price: 29.99,
        type: "buy",
        cover: "linear-gradient(to right, #4c4c4c 0%, #2d2d2d 50%, #4c4c4c 100%)",
        labelColor: "#4c4c4c",
        year: 2017,
        trackList: ["Home", "Gang Over Luv", "Burn One (Interlude)","First World Problemz/Nobody Carez", "Missin Out", "Stay Down", "L.A.", "Talk 2 U", "Sonder Son (Interlude)", "So Far Gone/Fast Life Bluez", "Needed", "All I Want" ],
        audioSrc: "audio/SonderSon.mp3",
        coverImage: "images/SonderSon.jpg",
        trackSrcs: [
            "audio/album10/Home.mp3",
            "audio/album10/Gang Over Luv.mp3",
            "audio/album10/Burn One (Interlude).mp3",
            "audio/album10/First Worl Problemz + Nobody Carez.mp3",
            "audio/album10/Missin Out.mp3",
            "audio/album10/Stay Down.mp3",
            "audio/album10/L.A..mp3",
            "audio/album10/Talk 2 U.mp3",
            "audio/album10/Sonder Son (Interlude).mp3",
            "audio/album10/So Far Gone + Fast Life Bluez.mp3",
            "audio/album10/Needed.mp3",
            "audio/album10/All I Want.mp3"
        ]
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
        coverImage: "images/Blonde.jpg",
        trackSrcs: [
            "audio/album11/Nikes.mp3",
            "audio/album11/Ivy.mp3",
            "audio/album11/Pink + White.mp3",
            "audio/album11/Be Yourself.mp3",
            "audio/album11/Solo.mp3",
            "audio/album11/Skyline To.mp3",
            "audio/album11/Self Control.mp3",
            "audio/album11/Good Guy.mp3",
            "audio/album11/Nights.mp3",
            "audio/album11/Solo (Reprise).mp3",
            "audio/album11/Pretty Sweet.mp3",
            "audio/album11/Facebook Story.mp3",
            "audio/album11/Close to You.mp3",
            "audio/album11/White Ferrari.mp3",
            "audio/album11/Seigfried.mp3",
            "audio/album11/Godspeed.mp3",
            "audio/album11/Futura Free.mp3",
        ]
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
        audioSrc: "audio/TPAB.mp3",
        trackSrcs: [
            "audio/album12/Wesley's Theory.mp3",
            "audio/album12/For Free (Interlude).mp3",
            "audio/album12/King Kunta.mp3",
            "audio/album12/Institutionalized.mp3",
            "audio/album12/These Walls.mp3",
            "audio/album12/u.mp3",
            "audio/album12/Alright.mp3",
            "audio/album12/For Sale (Interlude).mp3",
            "audio/album12/Momma.mp3",
            "audio/album12/Hood Politics.mp3",
            "audio/album12/How Much A Dollar Cost.mp3",
            "audio/album12/Complexion (A Zulu Love).mp3",
            "audio/album12/The Blacker The Berry.mp3",
            "audio/album12/You Ain't Gotta Lie (Momma Said).mp3",
            "audio/album12/i.mp3",
            "audio/album12/Mortal Man.mp3"
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

// Helper function to get the current active filter
function getActiveFilter() {
    const activeFilterBtn = document.querySelector('.filter-btn.active');
    return activeFilterBtn ? activeFilterBtn.dataset.filter : 'all';
}

// Initialize the app
function init() {
    // Load user collection from local storage
    const storedCollection = localStorage.getItem('userCollection');
    if (storedCollection) {
        userCollection = JSON.parse(storedCollection);
    }

    // Load audio settings from local storage
    const storedVolume = localStorage.getItem('volume');
    const storedQuality = localStorage.getItem('audioQuality');

    // Set volume
    if (storedVolume) {
        volumeSlider.value = storedVolume;
        volumeValue.textContent = `${storedVolume}%`;
        audioPlayer.volume = 0.8 * (storedVolume / 100);
        crackleSound.volume = 0.2 * (storedVolume / 100);
    }

    // Set audio quality
    if (storedQuality) {
        qualityBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.quality === storedQuality);
        });
    }

    // Populate the shop with vinyl records
    displayVinyls();
    
    // Set up event listeners
    setupEventListeners();
    
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
    vinylCollection.innerHTML = ''; // Clear existing items to prevent duplicates on re-render

    vinylData.forEach(vinyl => {
        if (filter === 'all' || vinyl.type === filter) {
            const vinylElement = document.createElement('div');
            vinylElement.className = 'vinyl-item';

            const coverStyle = vinyl.coverImage ?
                `background-image: url('${vinyl.coverImage}'); background-size: cover;` :
                `background-image: ${vinyl.cover};`; // Assuming vinyl.cover is a gradient string

            let buttonHtml;
            if (vinyl.type === 'buy' && userCollection.includes(vinyl.id)) {
                buttonHtml = `<button class="vinyl-btn owned" data-id="${vinyl.id}" disabled>Owned</button>`;
            } else {
                buttonHtml = `<button class="vinyl-btn" data-id="${vinyl.id}">${vinyl.type === 'buy' ? 'Buy' : 'Rent'}</button>`;
            }

            vinylElement.innerHTML = `
                <div class="vinyl-cover" style="${coverStyle}"></div>
                <div class="vinyl-title">${vinyl.title}</div>
                <div class="vinyl-artist">${vinyl.artist} (${vinyl.year})</div>
                <div class="vinyl-price">$${vinyl.price.toFixed(2)}</div>
                ${buttonHtml}
            `;
            vinylCollection.appendChild(vinylElement);

            const vinylCover = vinylElement.querySelector('.vinyl-cover');
            if (vinylCover) { // Ensure vinylCover exists before adding listeners
                vinylCover.addEventListener('mouseenter', () => {
                    vinylCover.style.animation = 'spin 4s linear infinite';
                });
                vinylCover.addEventListener('mouseleave', () => {
                    vinylCover.style.animation = 'none';
                });
            }
        }
    });

    // Add event listeners to buy/rent buttons that are not disabled
    document.querySelectorAll('.vinyl-btn:not([disabled])').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const vinylId = parseInt(e.target.dataset.id);
            const clickedButton = e.target; // Store reference to the clicked button

            addToCollection(vinylId); // Adds to collection if not already present and updates playlist

            // Show confirmation message
            const vinylItem = clickedButton.closest('.vinyl-item');
            if (vinylItem) { // Ensure vinylItem exists
                const confirmMsg = document.createElement('div');
                confirmMsg.className = 'confirm-msg';
                confirmMsg.textContent = 'Added to collection!';
                confirmMsg.style.color = '#8e44ad';
                confirmMsg.style.fontWeight = 'bold';
                confirmMsg.style.marginTop = '10px';

                clickedButton.replaceWith(confirmMsg); // Replace button with message

                setTimeout(() => {
                    confirmMsg.remove();
                    // Re-render the vinyls to update button states (e.g., "Buy" to "Owned")
                    displayVinyls(getActiveFilter());
                }, 2000);
            }
        });
    });
}

// Add a vinyl to the user's collection
function addToCollection(vinylId) {
    // Check if the vinyl is already in the collection
    if (!userCollection.includes(vinylId)) {
        userCollection.push(vinylId);
        // Save updated collection to local storage
        localStorage.setItem('userCollection', JSON.stringify(userCollection));
        updatePlaylist();
    }
}

// Remove a vinyl from the user's collection
function removeFromCollection(vinylId) {
    const index = userCollection.indexOf(vinylId);
    if (index > -1) {
        userCollection.splice(index, 1);
        // Save updated collection to local storage
        localStorage.setItem('userCollection', JSON.stringify(userCollection));
        updatePlaylist();
        displayVinyls(getActiveFilter()); // Re-render shop to update button states
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
                <button class="remove-btn" data-id="${vinyl.id}">Remove</button>
            `;
            ownedVinyls.appendChild(playlistItem);
            
            // Add click event to load the vinyl into the player
            playlistItem.querySelector('.playlist-cover, .playlist-info').addEventListener('click', () => {
                loadVinyl(vinyl);
                document.querySelectorAll('.playlist-item').forEach(item => {
                    item.classList.remove('active');
                });
                playlistItem.classList.add('active');
            });

            // Add click event to remove the vinyl from the collection
            const removeBtn = playlistItem.querySelector('.remove-btn');
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent playlist item click event from firing
                removeFromCollection(vinyl.id);
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
            console.log('Attempting to load audio source:', audioPlayer.src);
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
            const quality = btn.dataset.quality;
            localStorage.setItem('audioQuality', quality);
            
            // Adjust audio quality by setting bitrate
            if (quality === 'high') {
                audioPlayer.mozPreservesPitch = true; // Better quality pitch preservation
                if (audioPlayer.src) {
                    const currentTime = audioPlayer.currentTime;
                    audioPlayer.load(); // Reload with new quality settings
                    audioPlayer.currentTime = currentTime;
                    if (!audioPlayer.paused) audioPlayer.play();
                }
            } else {
                audioPlayer.mozPreservesPitch = false;
                if (audioPlayer.src) {
                    const currentTime = audioPlayer.currentTime;
                    audioPlayer.load(); // Reload with new quality settings
                    audioPlayer.currentTime = currentTime;
                    if (!audioPlayer.paused) audioPlayer.play();
                }
            }
        });
    });
    
    // Volume slider
    volumeSlider.addEventListener('input', () => {
        const value = volumeSlider.value;
        volumeValue.textContent = `${value}%`;
        
        // Adjust audio volume
        audioPlayer.volume = 0.8 * (value / 100);
        crackleSound.volume = 0.2 * (value / 100);
        
        // Save volume setting to local storage
        localStorage.setItem('volume', value);
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