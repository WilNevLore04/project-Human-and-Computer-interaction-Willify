document.addEventListener('DOMContentLoaded', () => {
    const songListElement = document.getElementById('song-list');
    const recommendedSongsElement = document.getElementById('recommended-songs');
    const topSongsElement = document.getElementById('top-songs');

    const songs = [
        {
            id: 1,
            title: "I'm Missing You - Sunjae (선재)",
            image: "../images/songs2.jpg",
            description: "I'm Missing You oleh Sunjae dirilis pada tanggal 15 Februari 2020.",
            audio: "../audios/Sunjae-Im-Missing-You.mp3"
        },
        {
            id: 2,
            title: "Fall In You - Ha SungWoon",
            image: "../images/songs1.jpg",
            description: "Fall In You oleh Ha SungWoon Dirilis pada tanggal 5 Maret 2021.",
            audio: "../audios/HA SUNG WOON - Fall in You (OST True Beauty Part.6).mp3"
        },
        {
            id: 3,
            title: "Sacrifice - Han Seung-Woo (한승우)",
            image: "../images/fame.jpg",
            description: "Sacrifice oleh Han Seung-Woo (한승우) dirilis pada tanggal 10 Agustus 2020.",
            audio: "../audios/Han Seung Woo (한승우) - Sacrifice [129 kbps] (1).mp3"
        },
        {
            id: 4,
            title: "UN Village - Baekhyun (백현)",
            image: "../images/citylight.jpg",
            description: "UN Village oleh Baekhyun (백현) dirilis pada tanggal 10 Juli 2019.",
            audio: "../audios/Baekhyun 백현 EXO - UN Village.mp3"
        },
        {
            id: 5,
            title: "HEAVEN - AB6IX (에이비식스)",
            image: "../images/salute.jpg",
            description: "HEAVEN oleh AB6IX (에이비식스) dirilis pada 21 November 2022.",
            audio: "../audios/AB6IX - HEAVEN [320 kbps].mp3"
        },
        {
            id: 6,
            title: "Wishes - Jamie Miller",
            image: "../images/song3.jpg",
            description: "Wishes  oleh Jamie Miller dirilis pada tanggal 12 Maret 2021.",
            audio: "../audios/Jamie Miller - Wishes (Snowdrop OST Part.4) [320 kbps].mp3"
        },
        {
            id: 7,
            title: "SURREAL(Alternative Rock Mix) - AB6IX (에이비식스)",
            image: "../images/newhope.jpg",
            description: "SURREAL(Alternative Rock Mix) oleh AB6IX (에이비식스) dirilis pada tanggal 5 Mei 2024....",
            audio: "../audios/AB6IX - (SURREAL) (Alternative Rock Mix.) [320 kbps].mp3.mp3"
        },
        {
            id: 8,
            title: "SALUTE - AB6IX (에이비식스)",
            image: "../images/salute.jpg",
            description: "SALUTE oleh AB6IX (에이비식스) dirilis pada tanggal 29 Juni 2020.",
            audio: "../audios/AB6IX - SALUTE [320 kbps].mp3"
        },
        {
            id: 9,
            title: "Not Too Late - ATEEZ (에이티즈)",
            image: "../images/zeropart3.jpg",
            description: "Not Too Late oleh ATEEZ (에이티즈) dirilis pada tanggal 28 Januari 2023.",
            audio: "../audios/ATEEZ - 밤하늘 (Not Too Late) [320 kbps].mp3"
        },
        {
            id: 10,
            title: " Eternal Sunshine - ATEEZ(에이티즈)",
            image: "../images/zeropart3.jpg",
            description: " Eternal Sunshine - ATEEZ (에이티즈) dirilis pada tanggal 28 Januari 2023.",
            audio: "audios/ATEEZ - Eternal Sunshine [320 kbps].mp3"
        },
        {  
            id: 11,
            title: "All For You - CIX (씨아이엑스)",
            image: "../images/CIXAllForYou.jpg",
            description: "All For You oleh CIX (씨아이엑스) dirilis pada tanggal 23 Agustus 2021....",
            audio: "../audios/CIX - All For You [129 kbps].mp3"
        },
    ];

    function createSongCard(song) {
        const card = document.createElement('div');
        card.classList.add('song-card');
        card.dataset.songId = song.id;

        const img = document.createElement('img');
        img.src = song.image;
        img.alt = `${song.title} Image`;

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const title = document.createElement('h3');
        title.textContent = song.title;

        const description = document.createElement('p');
        description.textContent = song.description;

        cardContent.appendChild(title);
        cardContent.appendChild(description);
        card.appendChild(img);
        card.appendChild(cardContent);

        card.addEventListener('click', () => {
            window.location.href = `songDetail.html?songId=${song.id}`;
        });

        return card;
    }

    songs.forEach(song => {
        const songCard = createSongCard(song);
        if (songListElement) songListElement.appendChild(songCard);
        if (recommendedSongsElement) recommendedSongsElement.appendChild(songCard.cloneNode(true));
        if (topSongsElement) topSongsElement.appendChild(songCard.cloneNode(true));
    });

    const songCards = document.querySelectorAll('.song-card');
    songCards.forEach(card => {
        card.addEventListener('click', () => {
            const songId = card.getAttribute('data-song-id');
            window.location.href = `songDetail.html?songId=${songId}`;
        });
    });
});
