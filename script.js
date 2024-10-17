let currency = 5000;
let collection = {};
const cards = [
  {
    name: "Lionel Messi",
    team: "Inter Miami",
    country: "Argentina",
    position: "RW",
    img: "https://via.placeholder.com/80?text=Messi",
    stats: { pac: 85, sho: 92, pas: 91, dri: 95, def: 38, phy: 65 },
  },
  {
    name: "Cristiano Ronaldo",
    team: "Al Nassr",
    country: "Portugal",
    position: "ST",
    img: "Al-Nassr/ST - C. Ronaldo.png",
    stats: { pac: 88, sho: 94, pas: 85, dri: 90, def: 40, phy: 83 },
  },
  {
    name: "Neymar Jr.",
    team: "Al Hilal",
    country: "Brazil",
    position: "LW",
    img: "https://via.placeholder.com/80?text=Neymar",
    stats: { pac: 90, sho: 88, pas: 89, dri: 94, def: 42, phy: 67 },
  },
  {
    name: "Kylian Mbappé",
    team: "Paris Saint-Germain",
    country: "France",
    position: "ST",
    img: "https://via.placeholder.com/80?text=Mbappe",
  },
  {
    name: "Erling Haaland",
    team: "Manchester City",
    country: "Norway",
    position: "ST",
    img: "https://via.placeholder.com/80?text=Haaland",
  },
  {
    name: "Kevin De Bruyne",
    team: "Manchester City",
    country: "Belgium",
    position: "CAM",
    img: "Man City/CAM - De Bruyne.png",
  },
  {
    name: "Nathan Ake",
    team: "Manchester City",
    country: "Netherlands",
    position: "CB",
    img: "Man City/LB - Ake.png",
  },
  {
    name: "Mohamed Salah",
    team: "Liverpool",
    country: "Egypt",
    position: "RW",
    img: "https://via.placeholder.com/80?text=Salah",
  },
  {
    name: "Luka Modric",
    team: "Real Madrid",
    country: "Croatia",
    position: "CM",
    img: "https://via.placeholder.com/80?text=Modric",
  },
  {
    name: "Gianluigi Donnarumma",
    team: "Paris Saint-Germain",
    country: "Italy",
    position: "GK",
    img: "https://via.placeholder.com/80?text=Donnarumma",
  },
  {
    name: "Egy Maulana Vikri",
    team: "Dewa United",
    country: "Indonesia",
    position: "RW",
    img: "https://via.placeholder.com/80?text=Egy",
  },
];

const missions = [
  {
    id: 1,
    description: "Dapatkan 5 kartu",
    target: 5,
    reward: 10,
    completed: false,
  },
  {
    id: 2,
    description: "Dapatkan 1 kartu dari Inter Miami",
    target: 1,
    team: "Inter Miami",
    reward: 200,
    completed: false,
  },
  {
    id: 3,
    description: "Kumpulkan 6.000 koin",
    target: 6000,
    type: "currency",
    reward: 600,
    completed: false,
  },
  {
    id: 4,
    description: "Dapatkan 3 kartu dari Manchester City",
    target: 3,
    team: "Manchester City",
    reward: 300,
    completed: false,
  },
  {
    id: 5,
    description: "Dapatkan kartu Cristiano Ronaldo",
    target: 1,
    team: "Al Nassr",
    reward: 1000,
    completed: false,
  },
  {
    id: 6,
    description: "Dapatkan 2 kartu dari Manchester City",
    target: 2,
    team: "Manchester City",
    reward: 200,
    completed: false,
  },
  {
    id: 7,
    description: "Dapatkan 1 kartu dari Real Madrid",
    target: 1,
    team: "Real Madrid",
    reward: 100,
    completed: false,
  },
  {
    id: 8,
    description: "Dapatkan 2 kartu dari Real Madrid",
    target: 2,
    team: "Real Madrid",
    reward: 200,
    completed: false,
  },
  {
    id: 9,
    description: "Dapatkan 1 kartu dari Paris Saint-Germain",
    target: 1,
    team: "Paris Saint-Germain",
    reward: 100,
    completed: false,
  },
  {
    id: 10,
    description: "Dapatkan kartu posisi CB",
    target: 1,
    type: "position",
    reward: 100,
    completed: false,
  },
];

function rollGacha() {
  if (currency < 20) {
    alert("Koin Anda tidak cukup untuk melakukan gacha.");
    return;
  }

  // Kurangi 20 koin untuk gacha
  currency -= 20;
  document.getElementById("currencyAmount").textContent = currency;

  // Ambil kartu acak
  const randomCard = cards[Math.floor(Math.random() * cards.length)];

  // Periksa apakah kartu sudah ada di koleksi berdasarkan tim
  if (
    collection[randomCard.team] &&
    collection[randomCard.team].some((card) => card.name === randomCard.name)
  ) {
    document.getElementById("result").innerHTML = `
            <p>Anda sudah memiliki kartu:</p>
            <div class="card">
                <img src="${randomCard.img}" alt="${randomCard.name}">
                <p>${randomCard.name}</p>
                <p>${randomCard.team}</p>
            </div>
        `;
  } else {
    // Tambahkan kartu ke koleksi berdasarkan tim
    if (!collection[randomCard.team]) {
      collection[randomCard.team] = [];
    }
    collection[randomCard.team].push(randomCard);
    updateCollection();
    showCardAnimation(randomCard);
    updateMissions(randomCard);
  }
}

function showCardAnimation(card) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
        <div class="fade-in" id="team">${card.team}</div>
        <div class="fade-in" id="country">${card.country}</div>
        <div class="fade-in" id="position">${card.position}</div>
        <div class="fade-in" id="card" style="display: none;">
            <div class="card">
                <img src="${card.img}" alt="${card.name}">
                <p>${card.name}</p>
                <p>${card.team}</p>
            </div>
        </div>
    `;

  // Menampilkan animasi secara berurutan
  setTimeout(() => {
    document.getElementById("team").classList.add("show");
  }, 500);

  setTimeout(() => {
    document.getElementById("country").classList.add("show");
  }, 1500);

  setTimeout(() => {
    document.getElementById("position").classList.add("show");
  }, 2500);

  setTimeout(() => {
    const cardDiv = document.getElementById("card");
    cardDiv.style.display = "block";
    cardDiv.classList.add("show");
  }, 4500);
}

function updateCollection() {
  const collectionDiv = document.getElementById("collection");
  collectionDiv.innerHTML = "<h2>Koleksi Kartu</h2>";
  Object.keys(collection).forEach((team) => {
    const teamGroup = document.createElement("div");
    teamGroup.className = "team-group";
    const teamTitle = document.createElement("h3");
    teamTitle.textContent = team;
    teamGroup.appendChild(teamTitle);
    const teamCardsDiv = document.createElement("div");
    teamCardsDiv.className = "team-cards";
    collection[team].forEach((card) => {
      const cardDiv = document.createElement("div");
      cardDiv.className = "card";
      cardDiv.innerHTML = `<img src="${card.img}" alt="${card.name}">`;
      cardDiv.addEventListener("click", () => showPlayerStats(card));
      teamCardsDiv.appendChild(cardDiv);
    });
    teamGroup.appendChild(teamCardsDiv);
    collectionDiv.appendChild(teamGroup);
  });
}

function updateMissions(card) {
  missions.forEach((mission) => {
    if (!mission.completed) {
      if (mission.type === "currency" && currency >= mission.target) {
        mission.completed = true;
        currency += mission.reward; // Tambah koin untuk misi yang selesai
        alert(
          `Misi selesai: ${mission.description}! Anda mendapatkan ${mission.reward} koin.`
        );
      } else if (mission.team === card.team && !mission.completed) {
        const teamCount = collection[card.team]
          ? collection[card.team].length
          : 0;
        if (teamCount >= mission.target) {
          mission.completed = true;
          currency += mission.reward; // Tambah koin untuk misi yang selesai
          alert(
            `Misi selesai: ${mission.description}! Anda mendapatkan ${mission.reward} koin.`
          );
        }
      } else if (mission.type === "position" && card.position === "CB") {
        mission.completed = true;
        currency += mission.reward; // Tambah koin untuk misi yang selesai
        alert(
          `Misi selesai: ${mission.description}! Anda mendapatkan ${mission.reward} koin.`
        );
      }
    }
  });
  updateMissionDisplay();
}

function showPlayerStats(card) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
      <div class="card-details">
          <h3>${card.name} (${card.position})</h3>
          <img src="${card.img}" alt="${card.name}">
          <p>Team: ${card.team}</p>
          <p>Country: ${card.country}</p>
          <div class="stats">
              <div><strong>PAC:</strong> ${card.stats.pac}</div>
              <div><strong>SHO:</strong> ${card.stats.sho}</div>
              <div><strong>PAS:</strong> ${card.stats.pas}</div>
              <div><strong>DRI:</strong> ${card.stats.dri}</div>
              <div><strong>DEF:</strong> ${card.stats.def}</div>
              <div><strong>PHY:</strong> ${card.stats.phy}</div>
          </div>
      </div>
  `;
  resultDiv.style.display = "block";
}

function closeDetails() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  resultDiv.style.display = "none";
}

function updateMissionDisplay() {
  const missionsDiv = document.getElementById("missions");
  missionsDiv.innerHTML = "";

  missions.forEach((mission) => {
    const missionDiv = document.createElement("div");
    missionDiv.className = "mission" + (mission.completed ? " completed" : "");
    missionDiv.textContent =
      mission.description + (mission.completed ? " (Selesai)" : "");
    missionsDiv.appendChild(missionDiv);
  });
}

// Inisialisasi tampilan misi
updateMissionDisplay();

const logos = {
  teams: {
    "Manchester City":
      "https://upload.wikimedia.org/wikipedia/id/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png",
    Liverpool:
      "https://upload.wikimedia.org/wikipedia/id/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png",
    "Inter Miami":
      "https://upload.wikimedia.org/wikipedia/id/thumb/5/5c/Inter_Miami_CF_logo.svg/1200px-Inter_Miami_CF_logo.svg.png",
    "Al Nassr":
      "https://upload.wikimedia.org/wikipedia/id/4/43/Al-Nassr_fc.png",
    "Al Hilal":
      "https://upload.wikimedia.org/wikipedia/commons/5/55/Al_Hilal_SFC_Logo.svg",
    "Paris Saint-Germain":
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/800px-Paris_Saint-Germain_F.C..svg.png",
    "Real Madrid":
      "https://upload.wikimedia.org/wikipedia/id/8/8b/Real_Madrid_Club_de_F%C3%BAtbol.png",
    "Manchester United":
      "https://upload.wikimedia.org/wikipedia/id/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png",
    Barcelona:
      "https://upload.wikimedia.org/wikipedia/id/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
    "Bayern Munich":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShKS4K89JmfRERPMQ-4sbJRmy1JkfPGSHaMA&s",
    "Dewa United":
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Dewa_United_Esports.png/1200px-Dewa_United_Esports.png",
  },
  countries: {
    Argentina:
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
    Portugal:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1200px-Flag_of_Portugal.svg.png",
    Brazil:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
    France:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_France_official.svg/1200px-Flag_of_France_official.svg.png",
    Norway:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/640px-Flag_of_Norway.svg.png",
    Belgium:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1200px-Flag_of_Belgium.svg.png",
    Netherlands:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png",
    Egypt:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/1200px-Flag_of_Egypt.svg.png",
    Croatia:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/800px-Flag_of_Croatia.svg.png",
    Italy: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    Indonesia:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1200px-Flag_of_Indonesia.svg.png",
  },
  positions: {
    ST: "Posisi/ST.png",
    RW: "Posisi/RW.png",
    LW: "Posisi/LW.png",
    CAM: "Posisi/CAM.png",
    CDM: "Posisi/CDM.png",
    RM: "Posisi/RM.png",
    LM: "Posisi/LM.png",
    CM: "Posisi/CM.png",
    RB: "Posisi/RB.png",
    LB: "Posisi/LB.png",
    CB: "Posisi/CB.png",
    GK: "Posisi/GK.png",
  },
};

function showCardAnimation(card) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
      <div class="fade-in" id="country"><img src="${
        logos.countries[card.country]
      }" alt="${card.country}" class="logo"></div>
      <div class="fade-in" id="team"><img src="${
        logos.teams[card.team]
      }" alt="${card.team}" class="logo"></div>
      <div class="fade-in" id="position"><img src="${
        logos.positions[card.position]
      }" alt="${card.position}" class="logo"></div>
      <div class="fade-in" id="card" style="display: none;">
          <div class="card">
              <img src="${card.img}" alt="${card.name}">
              <p>${card.name}</p>
              <p>${card.team}</p>
          </div>
      </div>
  `;

  // Menampilkan animasi secara berurutan
  setTimeout(() => {
    document.getElementById("country").classList.add("show");
  }, 500);

  setTimeout(() => {
    document.getElementById("team").classList.add("show");
  }, 1500);

  setTimeout(() => {
    document.getElementById("position").classList.add("show");
  }, 2500);

  setTimeout(() => {
    const cardDiv = document.getElementById("card");
    cardDiv.style.display = "block";
    cardDiv.classList.add("show");
  }, 4500);
}

function updateCollection() {
  const collectionDiv = document.getElementById("collection");
  collectionDiv.innerHTML = "<h2>Koleksi Kartu</h2>";
  Object.keys(collection).forEach((team) => {
    const teamGroup = document.createElement("div");
    teamGroup.className = "team-group";
    const teamTitle = document.createElement("h3");
    teamTitle.textContent = team;
    teamGroup.appendChild(teamTitle);
    const teamCardsDiv = document.createElement("div");
    teamCardsDiv.className = "team-cards";
    collection[team].forEach((card) => {
      const cardDiv = document.createElement("div");
      cardDiv.className = "card card-draggable";
      cardDiv.draggable = true;
      cardDiv.innerHTML = `<img src="${card.img}" alt="${card.name}">`;
      cardDiv.addEventListener("dragstart", (e) => handleDragStart(e, card));
      cardDiv.addEventListener("click", () => showPlayerStats(card));
      teamCardsDiv.appendChild(cardDiv);
    });
    teamGroup.appendChild(teamCardsDiv);
    collectionDiv.appendChild(teamGroup);
  });
}

function handleDragStart(e, card) {
  e.dataTransfer.setData("card", JSON.stringify(card));
}

function setupDragAndDrop() {
  const positions = document.querySelectorAll(".formation-433 .position");
  positions.forEach((position) => {
    position.addEventListener("dragover", (e) => e.preventDefault());
    position.addEventListener("drop", (e) => handleDrop(e, position));
  });
}

function handleDrop(e, position) {
  const cardData = e.dataTransfer.getData("card");
  const card = JSON.parse(cardData);

  // Display the card in the dropped position
  position.innerHTML = `<img src="${card.img}" alt="${card.name}">`;

  // Optional: Store the player's position in a squad object if needed
  const positionKey = position.getAttribute("data-position");
  squad[positionKey] = card;
}

const squad = {
  GK: null,
  LB: null,
  CB1: null,
  CB2: null,
  RB: null,
  LM: null,
  CM: null,
  RM: null,
  LW: null,
  ST: null,
  RW: null,
};

setupDragAndDrop();
