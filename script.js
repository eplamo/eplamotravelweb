// DATABASE DESTINASI WISATA LENGKAP
const DESTINATIONS = [
  // --- YOGYAKARTA (6 Destinasi) ---
  {
    id: 'yog-1', city: 'Yogyakarta', name: 'Candi Prambanan & Taman Wisata', category: 'Sejarah & Edukasi',
    priceAdult: 50000, priceKid: 25000, parking: 10000, distance: '17 km dari Malioboro',
    facilities: ['stroller', 'mushola', 'kuliner'], facilityLabels: ['Ramah Stroller', 'Mushola Luas', 'Area Kuliner'],
    desc: 'Kompleks candi megah dengan area taman luas dan kereta wisata keliling.'
  },
  {
    id: 'yog-2', city: 'Yogyakarta', name: 'Taman Pintar Yogyakarta', category: 'Edukasi Anak',
    priceAdult: 24000, priceKid: 14000, parking: 5000, distance: '0.8 km dari Malioboro',
    facilities: ['stroller', 'mushola', 'kuliner'], facilityLabels: ['Akses Stroller', 'Mushola', 'Ruang Menyusui'],
    desc: 'Wahana sains interaktif di pusat kota untuk liburan edukatif bersama anak.'
  },
  {
    id: 'yog-3', city: 'Yogyakarta', name: 'HeHa Sky View Gunungkidul', category: 'Pemandangan & Kuliner',
    priceAdult: 25000, priceKid: 25000, parking: 10000, distance: '19 km dari Pusat Kota',
    facilities: ['mushola', 'kuliner'], facilityLabels: ['Mushola', 'Resto Keluarga', 'Toilet Bersih'],
    desc: 'Spot pemandangan kota Jogja dari ketinggian dengan restoran keluarga lengkap.'
  },
  {
    id: 'yog-4', city: 'Yogyakarta', name: 'Gembira Loka Zoo', category: 'Kebun Binatang',
    priceAdult: 60000, priceKid: 60000, parking: 10000, distance: '5 km dari Pusat Kota',
    facilities: ['stroller', 'mushola', 'kuliner'], facilityLabels: ['Ramah Stroller', 'Mushola', 'Kereta Keliling'],
    desc: 'Kebun binatang terawat dengan transportasi internal agar anak tidak lelah.'
  },
  {
    id: 'yog-5', city: 'Yogyakarta', name: 'Keraton Ngayogyakarta Hadiningrat', category: 'Budaya & Sejarah',
    priceAdult: 15000, priceKid: 10000, parking: 5000, distance: '1.5 km dari Malioboro',
    facilities: ['mushola', 'kuliner'], facilityLabels: ['Mushola', 'Pemandu Wisata', 'Area Istirahat'],
    desc: 'Istana resmi Kesultanan Ngayogyakarta Hadiningrat yang sarat nilai sejarah.'
  },
  {
    id: 'yog-6', city: 'Yogyakarta', name: 'Pantai Drini Gunungkidul', category: 'Wisata Alam',
    priceAdult: 10000, priceKid: 5000, parking: 5000, distance: '60 km dari Pusat Kota',
    facilities: ['mushola', 'kuliner'], facilityLabels: ['Mushola', 'Warung Seafood', 'Gazebo Pantai'],
    desc: 'Pantai eksotis dengan pulau karang kecil di tengahnya dan ombak yang relatif aman.'
  },

  // --- BANDUNG (6 Destinasi) ---
  {
    id: 'bdg-1', city: 'Bandung', name: 'Farmhouse Susu Lembang', category: 'Wisata Keluarga',
    priceAdult: 35000, priceKid: 35000, parking: 10000, distance: '14 km dari Gedung Sate',
    facilities: ['stroller', 'mushola', 'kuliner'], facilityLabels: ['Ramah Stroller', 'Mushola', 'Tukar Susu Gratis'],
    desc: 'Wisata ala pedesaan Eropa dengan mini zoo dan penukaran tiket susu murni.'
  },
  {
    id: 'bdg-2', city: 'Bandung', name: 'Dusun Bambu Lembang', category: 'Alam & Kuliner',
    priceAdult: 30000, priceKid: 30000, parking: 15000, distance: '18 km dari Pusat Kota',
    facilities: ['stroller', 'mushola', 'kuliner'], facilityLabels: ['Shuttle Gratis', 'Mushola', 'Resto Saung'],
    desc: 'Kawasan wisata alam tertata rapi dengan shuttle buggy untuk kenyamanan keluarga.'
  },
  {
    id: 'bdg-3', city: 'Bandung', name: 'Floating Market Lembang', category: 'Kuliner & Wahana',
    priceAdult: 35000, priceKid: 35000, parking: 10000, distance: '15 km dari Pusat Kota',
    facilities: ['stroller', 'mushola', 'kuliner'], facilityLabels: ['Jalur Rata Stroller', 'Mushola Besar', 'Pasar Kuliner'],
    desc: 'Pusat jajanan tradisional di atas perahu dan wahana permainan tepi danau.'
  },
  {
    id: 'bdg-4', city: 'Bandung', name: 'Trans Studio Bandung', category: 'Theme Park Indoor',
    priceAdult: 200000, priceKid: 175000, parking: 15000, distance: '5 km dari Pusat Kota',
    facilities: ['stroller', 'mushola', 'kuliner'], facilityLabels: ['Indoor AC', 'Mushola Luas', 'Food Court'],
    desc: 'Pusat hiburan dalam ruangan terbesar dengan berbagai wahana seru anti-panas.'
  },
  {
    id: 'bdg-5', city: 'Bandung', name: 'Kawah Putih Ciwidey', category: 'Wisata Alam',
    priceAdult: 30000, priceKid: 30000, parking: 15000, distance: '45 km dari Pusat Kota',
    facilities: ['mushola', 'kuliner'], facilityLabels: ['Mushola', 'Shuttle Ontang-Anting', 'Warung Hangat'],
    desc: 'Danau vulkanik dengan air berwarna putih kehijauan yang sangat ikonik.'
  },
  {
    id: 'bdg-6', city: 'Bandung', name: 'Saung Angklung Udjo', category: 'Edukasi & Seni Budaya',
    priceAdult: 80000, priceKid: 50000, parking: 5000, distance: '7 km dari Pusat Kota',
    facilities: ['mushola', 'kuliner'], facilityLabels: ['Mushola', 'Pertunjukan Interaktif', 'Souvenir Shop'],
    desc: 'Pusat pentas seni angklung interaktif yang mendidik dan menghibur anak-anak.'
  },

  // --- MALANG (6 Destinasi) ---
  {
    id: 'mlg-1', city: 'Malang', name: 'Jatim Park 2 (Batu Secret Zoo)', category: 'Taman Satwa & Museum',
    priceAdult: 140000, priceKid: 140000, parking: 10000, distance: '18 km dari Stasiun Malang',
    facilities: ['stroller', 'mushola', 'kuliner'], facilityLabels: ['Akses Stroller & Kursi Roda', 'Mushola', 'Food Court'],
    desc: 'Kebun binatang modern dan Museum Satwa dengan jalur landai ramah keluarga.'
  },
  {
    id: 'mlg-2', city: 'Malang', name: 'Museum Angkut Batu', category: 'Museum & Atraksi',
    priceAdult: 110000, priceKid: 110000, parking: 10000, distance: '20 km dari Pusat Kota',
    facilities: ['stroller', 'mushola', 'kuliner'], facilityLabels: ['Lift & Ramp Stroller', 'Mushola', 'Pasar Apung'],
    desc: 'Koleksi transportasi klasik hingga modern dalam ruangan megah.'
  },
  {
    id: 'mlg-3', city: 'Malang', name: 'Flora Wisata San Terra', category: 'Taman Bunga',
    priceAdult: 35000, priceKid: 35000, parking: 10000, distance: '24 km dari Pusat Kota',
    facilities: ['mushola', 'kuliner'], facilityLabels: ['Mushola', 'Kafe Keluarga', 'Spot Foto'],
    desc: 'Taman bunga warna-warni dengan udara sejuk pegunungan Pujon.'
  },
  {
    id: 'mlg-4', city: 'Malang', name: 'Selecta Botanical Garden', category: 'Taman Legendaris',
    priceAdult: 40000, priceKid: 40000, parking: 10000, distance: '22 km dari Pusat Kota',
    facilities: ['stroller', 'mushola', 'kuliner'], facilityLabels: ['Kolam Renang', 'Mushola', 'Taman Bunga'],
    desc: 'Taman rekreasi legendaris penuh bunga dan kolam renang air sumber alami.'
  },
  {
    id: 'mlg-5', city: 'Malang', name: 'Coban Rondo & Labirin', category: 'Air Terjun & Wahana',
    priceAdult: 35000, priceKid: 25000, parking: 10000, distance: '23 km dari Pusat Kota',
    facilities: ['mushola', 'kuliner'], facilityLabels: ['Mushola', 'Taman Labirin', 'Warung Kuliner'],
    desc: 'Air terjun alami berudara sejuk dilengkapi wahana taman labirin seru.'
  },
  {
    id: 'mlg-6', city: 'Malang', name: 'Malang Night Paradise', category: 'Taman Lampu Malam',
    priceAdult: 65000, priceKid: 55000, parking: 10000, distance: '8 km dari Pusat Kota',
    facilities: ['mushola', 'kuliner'], facilityLabels: ['Mushola', 'Lampu LED Spektakuler', 'Food Court'],
    desc: 'Wisata malam hari dengan pemandangan lampu lampion dan wahana keluarga.'
  },

  // --- BALI (6 Destinasi) ---
  {
    id: 'bli-1', city: 'Bali', name: 'Bali Safari & Marine Park', category: 'Taman Satwa',
    priceAdult: 175000, priceKid: 135000, parking: 10000, distance: '22 km dari Kuta',
    facilities: ['stroller', 'mushola', 'kuliner'], facilityLabels: ['Ramah Stroller', 'Mushola', 'Bus Safari'],
    desc: 'Pengalaman melihat satwa dari dekat menggunakan bus khusus yang nyaman.'
  },
  {
    id: 'bli-2', city: 'Bali', name: 'Garuda Wisnu Kencana (GWK)', category: 'Budaya & Taman',
    priceAdult: 125000, priceKid: 100000, parking: 10000, distance: '12 km dari Bandara',
    facilities: ['stroller', 'mushola', 'kuliner'], facilityLabels: ['Shuttle Buggy', 'Mushola', 'Resto Keluarga'],
    desc: 'Taman budaya ikonik dengan patung megah dan fasilitas buggy car.'
  },
  {
    id: 'bli-3', city: 'Bali', name: 'Pantai Pandawa', category: 'Pantai Keluarga',
    priceAdult: 15000, priceKid: 10000, parking: 5000, distance: '18 km dari Kuta',
    facilities: ['mushola', 'kuliner'], facilityLabels: ['Akses Mobil Langsung', 'Mushola', 'Warung Pantai'],
    desc: 'Pantai berpasir putih bersih dengan ombak tenang untuk anak bermain air.'
  },
  {
    id: 'bli-4', city: 'Bali', name: 'Waterbom Bali Kuta', category: 'Waterpark',
    priceAdult: 350000, priceKid: 290000, parking: 10000, distance: '2 km dari Kuta Center',
    facilities: ['stroller', 'mushola', 'kuliner'], facilityLabels: ['Penyewaan Loker & Handuk', 'Mushola', 'Restoran'],
    desc: 'Taman rekreasi air kelas dunia di tengah rimbunnya taman tropis Bali.'
  },
  {
    id: 'bli-5', city: 'Bali', name: 'Bali Bird Park Gianyar', category: 'Taman Burung',
    priceAdult: 150000, priceKid: 75000, parking: 5000, distance: '20 km dari Denpasar',
    facilities: ['stroller', 'mushola', 'kuliner'], facilityLabels: ['Ramah Pejalan Kaki', 'Mushola', 'Teater Burung'],
    desc: 'Koleksi ratusan spesies burung langka dalam habitat hutan buatan yang teduh.'
  },
  {
    id: 'bli-6', city: 'Bali', name: 'Pura Uluwatu', category: 'Pura & Sunset View',
    priceAdult: 50000, priceKid: 30000, parking: 5000, distance: '25 km dari Kuta',
    facilities: ['mushola', 'kuliner'], facilityLabels: ['Pemandangan Laut', 'Penyewaan Selendang', 'Pentas Tari'],
    desc: 'Pura luhur di atas tebing curam dengan pemandangan matahari terbenam spektakuler.'
  }
];

const TRANSPORT_RATES = {
  pesawat: { name: 'Pesawat Terbang (PP)', costPerPerson: 900000 },
  kereta: { name: 'Kereta Api Eksekutif (PP)', costPerPerson: 350000 },
  bus: { name: 'Bus Pariwisata AC (PP)', costPerPerson: 200000 },
  pribadi: { name: 'Kendaraan Pribadi (BBM & Tol PP)', costPerPerson: 120000 }
};

const HOTEL_RATES = {
  bintang4: { name: 'Hotel Bintang 4', costPerNight: 750000 },
  bintang3: { name: 'Hotel Bintang 3', costPerNight: 450000 },
  homestay: { name: 'Homestay / Villa Keluarga', costPerNight: 300000 }
};

const state = {
  currentUser: null,
  city: 'Yogyakarta',
  days: 2,
  adults: 2,
  kids: 1,
  targetBudget: 3500000,
  transportType: 'kereta',
  hotelType: 'bintang3',
  selectedIds: ['yog-1', 'yog-2'],
  foodBudget: 400000,
  souvenirBudget: 300000,
  paymentMethod: 'BCA Virtual Account',
  customer: { name: '', phone: '', email: '', date: '' },
  timerInterval: null
};

function formatRupiah(num) {
  return 'Rp ' + Math.round(num).toLocaleString('id-ID');
}

function showScreen(screenId, stepNum = null) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');

  const header = document.getElementById('main-header');
  if (screenId === 'splash-screen' || screenId === 'auth-screen') {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }

  if (stepNum) {
    document.querySelectorAll('.step').forEach(el => {
      const s = parseInt(el.dataset.step, 10);
      el.classList.remove('active', 'done');
      if (s === stepNum) el.classList.add('active');
      if (s < stepNum) el.classList.add('done');
    });
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getStoredUsers() {
  try { return JSON.parse(localStorage.getItem('eplamo_users')) || []; } catch (e) { return []; }
}
function saveStoredUsers(users) { localStorage.setItem('eplamo_users', JSON.stringify(users)); }

function showAuthAlert(message, type = 'error') {
  const alertBox = document.getElementById('auth-alert');
  alertBox.textContent = message;
  alertBox.className = `auth-alert ${type}`;
  alertBox.classList.remove('hidden');
}
function hideAuthAlert() { document.getElementById('auth-alert').classList.add('hidden'); }

function completeAuthentication(user) {
  state.currentUser = user;
  localStorage.setItem('eplamo_session', JSON.stringify(user));
  document.getElementById('header-user-name').textContent = user.name.split(' ')[0];
  state.customer.name = user.name;
  state.customer.email = user.email;
  state.customer.phone = user.phone || '';
  showScreen('explore-screen', 1);
  renderCatalog();
}

function calculateCosts() {
  const selectedDests = DESTINATIONS.filter(d => state.selectedIds.includes(d.id));
  const totalPeople = state.adults + state.kids;

  const transportRate = TRANSPORT_RATES[state.transportType].costPerPerson;
  const mainTransportTotal = transportRate * totalPeople;

  const nights = Math.max(1, state.days - 1);
  const hotelRate = HOTEL_RATES[state.hotelType].costPerNight;
  const hotelTotal = hotelRate * nights;

  let ticketTotal = 0;
  let parkingTotal = 0;
  selectedDests.forEach(d => {
    ticketTotal += (d.priceAdult * state.adults) + (d.priceKid * state.kids);
    parkingTotal += d.parking;
  });

  const grandTotal = mainTransportTotal + hotelTotal + ticketTotal + parkingTotal + state.foodBudget + state.souvenirBudget;
  const perPerson = totalPeople > 0 ? grandTotal / totalPeople : grandTotal;
  const onlinePayNow = mainTransportTotal + hotelTotal + ticketTotal;

  return {
    selectedDests,
    mainTransportTotal,
    hotelTotal,
    nights,
    ticketTotal,
    parkingTotal,
    grandTotal,
    perPerson,
    totalPeople,
    onlinePayNow
  };
}

function renderCatalog() {
  const cityDests = DESTINATIONS.filter(d => d.city === state.city);
  document.getElementById('catalog-title').textContent = `Rekomendasi Wisata di ${state.city} (${cityDests.length} Pilihan)`;

  const grid = document.getElementById('destination-grid');
  grid.innerHTML = '';

  cityDests.forEach((dest, idx) => {
    const isSelected = state.selectedIds.includes(dest.id);
    const estFamilyTicket = (dest.priceAdult * state.adults) + (dest.priceKid * state.kids);
    const card = document.createElement('div');
    card.className = `dest-card ${isSelected ? 'selected' : ''}`;

    const bannerClass = idx % 3 === 1 ? 'alt-1' : (idx % 3 === 2 ? 'alt-2' : 'alt-3');

    card.innerHTML = `
      <div class="dest-banner ${bannerClass}">
        <span class="dest-tag">${dest.category}</span>
        <span class="dest-distance">📍 ${dest.distance}</span>
      </div>
      <div class="dest-body">
        <h4>${dest.name}</h4>
        <p class="dest-desc">${dest.desc}</p>
        <div class="facility-badges">
          ${dest.facilityLabels.map(lbl => `<span class="f-badge">✓ ${lbl}</span>`).join('')}
        </div>
        <div class="dest-footer">
          <div class="price-info">
            <span>Tiket (${state.adults + state.kids} org)</span>
            <strong>${formatRupiah(estFamilyTicket)}</strong>
          </div>
          <button type="button" class="btn-select-dest" data-id="${dest.id}">
            ${isSelected ? '✓ Terpilih' : '+ Tambah'}
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  document.querySelectorAll('.btn-select-dest').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      if (state.selectedIds.includes(id)) {
        state.selectedIds = state.selectedIds.filter(item => item !== id);
      } else {
        state.selectedIds.push(id);
      }
      renderCatalog();
      updateFloatingBar();
    });
  });

  updateFloatingBar();
}

function updateFloatingBar() {
  const { selectedDests, grandTotal, totalPeople } = calculateCosts();
  document.getElementById('selected-count').textContent = selectedDests.length;
  document.getElementById('f-participants').textContent = totalPeople;
  document.getElementById('f-total-cost').textContent = formatRupiah(grandTotal);

  const badge = document.getElementById('f-budget-badge');
  if (grandTotal <= state.targetBudget) {
    badge.className = 'badge-safe';
    badge.textContent = 'Aman dalam budget';
  } else {
    badge.className = 'badge-over';
    badge.textContent = 'Melebihi budget';
  }
  document.getElementById('btn-to-planner').disabled = selectedDests.length === 0;
}

function autoPlanByBudget() {
  const cityDests = DESTINATIONS.filter(d => d.city === state.city);
  const sorted = [...cityDests].sort((a, b) => a.priceAdult - b.priceAdult);

  state.foodBudget = Math.min(1500000, Math.max(200000, Math.round((state.targetBudget * 0.2) / 50000) * 50000));
  state.souvenirBudget = Math.min(1000000, Math.max(150000, Math.round((state.targetBudget * 0.15) / 50000) * 50000));
  document.getElementById('slider-food').value = state.foodBudget;
  document.getElementById('slider-souvenir').value = state.souvenirBudget;

  state.selectedIds = [];
  const maxSpots = state.days * 2;

  for (const dest of sorted) {
    if (state.selectedIds.length >= maxSpots) break;
    state.selectedIds.push(dest.id);
    const check = calculateCosts();
    if (check.grandTotal > state.targetBudget && state.selectedIds.length > 1) {
      state.selectedIds.pop();
      break;
    }
  }

  document.getElementById('budget-status-hint').textContent =
    `✨ Paket otomatis disusun (${state.selectedIds.length} destinasi) sesuai batas ${formatRupiah(state.targetBudget)}.`;
  renderCatalog();
}

function renderPlanner() {
  const { selectedDests, mainTransportTotal, hotelTotal, nights, ticketTotal, grandTotal, perPerson, totalPeople, onlinePayNow } = calculateCosts();

  const daysContainer = document.getElementById('itinerary-days-container');
  daysContainer.innerHTML = '';

  const perDay = Math.ceil(selectedDests.length / state.days);
  for (let d = 1; d <= state.days; d++) {
    const startIdx = (d - 1) * perDay;
    const dayItems = selectedDests.slice(startIdx, startIdx + perDay);

    const dayBlock = document.createElement('div');
    dayBlock.className = 'day-block';
    dayBlock.innerHTML = `<div class="day-title">Hari ke-${d} • Eksplorasi ${state.city}</div>`;

    if (dayItems.length === 0) {
      dayBlock.innerHTML += `<p style="font-size:0.88rem; color:#64748b; padding:8px;">Waktu bebas / istirahat keluarga di hotel.</p>`;
    } else {
      dayItems.forEach((item, i) => {
        const sessionTime = i === 0 ? '09.00 - 12.00 WIB (Sesi Pagi)' : '13.30 - 16.30 WIB (Sesi Sore)';
        const itemCost = (item.priceAdult * state.adults) + (item.priceKid * state.kids);
        dayBlock.innerHTML += `
          <div class="timeline-item">
            <div class="t-info">
              <span>${sessionTime}</span>
              <strong>${item.name}</strong>
              <span>Fasilitas: ${item.facilityLabels.join(', ')}</span>
            </div>
            <div class="t-price">${formatRupiah(itemCost)}</div>
          </div>
        `;
      });
    }
    daysContainer.appendChild(dayBlock);
  }

  document.getElementById('calc-used').textContent = formatRupiah(grandTotal);
  document.getElementById('calc-target').textContent = formatRupiah(state.targetBudget);

  document.getElementById('detail-transport-main').textContent = `${TRANSPORT_RATES[state.transportType].name} (${totalPeople} Orang)`;
  document.getElementById('cost-main-transport').textContent = formatRupiah(mainTransportTotal);

  document.getElementById('detail-hotel-cost').textContent = `${HOTEL_RATES[state.hotelType].name} (${nights} Malam)`;
  document.getElementById('cost-hotel').textContent = formatRupiah(hotelTotal);

  document.getElementById('detail-ticket-desc').textContent = `${selectedDests.length} Destinasi Wisata`;
  document.getElementById('cost-tickets').textContent = formatRupiah(ticketTotal);

  document.getElementById('cost-food').textContent = formatRupiah(state.foodBudget);
  document.getElementById('cost-souvenir').textContent = formatRupiah(state.souvenirBudget);

  document.getElementById('calc-grand-total').textContent = formatRupiah(grandTotal);
  document.getElementById('calc-per-person').textContent = `${formatRupiah(perPerson)} / org (${totalPeople} org)`;
  document.getElementById('calc-pay-now').textContent = formatRupiah(onlinePayNow);

  const pct = Math.min(100, (grandTotal / state.targetBudget) * 100);
  const bar = document.getElementById('budget-progress-bar');
  const warnText = document.getElementById('budget-warning-text');

  bar.style.width = `${pct}%`;
  if (grandTotal <= state.targetBudget) {
    bar.classList.remove('over');
    warnText.classList.remove('over');
    warnText.textContent = `Aman! Tersisa ${formatRupiah(state.targetBudget - grandTotal)} dari batas budget Anda.`;
  } else {
    bar.classList.add('over');
    warnText.classList.add('over');
    warnText.textContent = `Peringatan: Melebihi budget sebesar ${formatRupiah(grandTotal - state.targetBudget)}. Sesuaikan slider atau destinasi.`;
  }
}

function renderCheckout() {
  const { selectedDests, mainTransportTotal, hotelTotal, nights, ticketTotal, onlinePayNow } = calculateCosts();
  const list = document.getElementById('checkout-items-list');
  list.innerHTML = '';

  list.innerHTML += `
    <div class="checkout-list-item">
      <span>Transport: ${TRANSPORT_RATES[state.transportType].name} (${state.adults + state.kids} pax)</span>
      <strong>${formatRupiah(mainTransportTotal)}</strong>
    </div>
    <div class="checkout-list-item">
      <span>Hotel: ${HOTEL_RATES[state.hotelType].name} (${nights} Malam)</span>
      <strong>${formatRupiah(hotelTotal)}</strong>
    </div>
  `;

  selectedDests.forEach(d => {
    const cost = (d.priceAdult * state.adults) + (d.priceKid * state.kids);
    list.innerHTML += `
      <div class="checkout-list-item">
        <span>Tiket Wisata: ${d.name}</span>
        <strong>${formatRupiah(cost)}</strong>
      </div>
    `;
  });

  const pocketMoney = state.foodBudget + state.souvenirBudget;
  document.getElementById('checkout-total-pay').textContent = formatRupiah(onlinePayNow);
  document.getElementById('checkout-pocket-money').textContent = formatRupiah(pocketMoney);

  if (state.currentUser) {
    document.getElementById('cust-name').value = state.currentUser.name || '';
    document.getElementById('cust-email').value = state.currentUser.email || '';
    document.getElementById('cust-phone').value = state.currentUser.phone || '';
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  document.getElementById('cust-date').value = tomorrow.toISOString().split('T')[0];
}

function startPaymentGateway() {
  const { onlinePayNow } = calculateCosts();
  const orderId = 'EPL-' + Math.floor(100000 + Math.random() * 900000);

  document.getElementById('pg-method-title').textContent = state.paymentMethod;
  document.getElementById('pg-order-id').textContent = orderId;
  document.getElementById('pg-amount').textContent = formatRupiah(onlinePayNow);

  if (state.paymentMethod === 'QRIS') {
    document.getElementById('va-display-box').classList.add('hidden');
    document.getElementById('qris-display-box').classList.remove('hidden');
  } else {
    document.getElementById('va-display-box').classList.remove('hidden');
    document.getElementById('qris-display-box').classList.add('hidden');
    const prefix = state.paymentMethod.includes('BCA') ? '88010' : '89022';
    document.getElementById('pg-va-number').textContent = `${prefix} ${state.customer.phone || '0812 8899 1122'}`;
  }

  clearInterval(state.timerInterval);
  let seconds = 15 * 60 - 1;
  state.timerInterval = setInterval(() => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    document.getElementById('payment-timer').textContent = `${m}:${s}`;
    if (seconds > 0) seconds--;
  }, 1000);

  showScreen('payment-gateway-screen', 3);
}

function renderVoucher() {
  clearInterval(state.timerInterval);
  const { selectedDests, mainTransportTotal, hotelTotal, nights } = calculateCosts();

  document.getElementById('v-cust-name').textContent = state.customer.name;
  document.getElementById('v-booking-code').textContent = 'EPL-2026-' + Math.floor(100 + Math.random() * 900);
  document.getElementById('v-trip-date').textContent = state.customer.date;
  document.getElementById('v-participants').textContent = `${state.adults} Dewasa, ${state.kids} Anak`;

  const thList = document.getElementById('v-transport-hotel-list');
  thList.innerHTML = `
    <div class="v-ticket-row">
      <span>🚗 <strong>Transport:</strong> ${TRANSPORT_RATES[state.transportType].name}</span>
      <span style="color:#059669; font-weight:700;">CONFIRMED</span>
    </div>
    <div class="v-ticket-row">
      <span>🏨 <strong>Hotel:</strong> ${HOTEL_RATES[state.hotelType].name} (${nights} Malam)</span>
      <span style="color:#059669; font-weight:700;">PAID</span>
    </div>
  `;

  const list = document.getElementById('v-itinerary-list');
  list.innerHTML = '';
  selectedDests.forEach((d, idx) => {
    list.innerHTML += `
      <div class="v-ticket-row">
        <span>📍 <strong>Wisata #${idx + 1}:</strong> ${d.name} (${state.city})</span>
        <span style="color:#059669; font-weight:700;">LUNAS</span>
      </div>
    `;
  });

  document.getElementById('v-pocket-food').textContent = formatRupiah(state.foodBudget);
  document.getElementById('v-pocket-souvenir').textContent = formatRupiah(state.souvenirBudget);

  showScreen('voucher-screen', 4);
}

document.addEventListener('DOMContentLoaded', () => {
  // TOGGLE THEME LOGIC
  const themeToggleBtn = document.getElementById('btn-theme-toggle');
  const savedTheme = localStorage.getItem('eplamo_theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeToggleBtn) themeToggleBtn.textContent = '☀️';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
      localStorage.setItem('eplamo_theme', isDark ? 'dark' : 'light');
    });
  }

  document.getElementById('btn-start').addEventListener('click', () => {
    const savedSession = localStorage.getItem('eplamo_session');
    if (savedSession) {
      completeAuthentication(JSON.parse(savedSession));
    } else {
      hideAuthAlert();
      showScreen('auth-screen');
    }
  });

  document.getElementById('back-to-splash').addEventListener('click', () => { showScreen('splash-screen'); });
  document.getElementById('logo-home').addEventListener('click', () => { showScreen('explore-screen', 1); renderCatalog(); });

  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.target).classList.add('active');
      hideAuthAlert();
    });
  });

  document.querySelectorAll('.toggle-pw').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.input);
      if (input.type === 'password') { input.type = 'text'; btn.textContent = 'Sembunyi'; }
      else { input.type = 'password'; btn.textContent = 'Lihat'; }
    });
  });

  document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim().toLowerCase();
    const phone = document.getElementById('signup-phone').value.trim();
    const password = document.getElementById('signup-password').value;

    const users = getStoredUsers();
    if (users.some(u => u.email === email)) {
      showAuthAlert('Email sudah terdaftar. Silakan login.', 'error');
      return;
    }
    const newUser = { name, email, phone, password };
    users.push(newUser);
    saveStoredUsers(users);
    completeAuthentication(newUser);
  });

  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;

    const users = getStoredUsers();
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (!foundUser) {
      showAuthAlert('Email atau kata sandi salah.', 'error');
      return;
    }
    completeAuthentication(foundUser);
  });

  document.getElementById('btn-demo-login').addEventListener('click', () => {
    completeAuthentication({ name: 'Keysha Andini Zahidah', email: 'keysha@eplamo.id', phone: '081234567890' });
  });

  document.getElementById('btn-logout').addEventListener('click', () => {
    localStorage.removeItem('eplamo_session');
    state.currentUser = null;
    hideAuthAlert();
    showScreen('auth-screen');
  });

  document.getElementById('filter-city').addEventListener('change', (e) => {
    state.city = e.target.value;
    state.selectedIds = [];
    renderCatalog();
  });

  document.getElementById('filter-days').addEventListener('change', (e) => {
    state.days = parseInt(e.target.value, 10);
    updateFloatingBar();
  });

  document.getElementById('filter-adults').addEventListener('input', (e) => {
    state.adults = Math.max(1, parseInt(e.target.value, 10) || 1);
    renderCatalog();
  });

  document.getElementById('filter-kids').addEventListener('input', (e) => {
    state.kids = Math.max(0, parseInt(e.target.value, 10) || 0);
    renderCatalog();
  });

  document.getElementById('filter-budget').addEventListener('input', (e) => {
    state.targetBudget = Math.max(500000, parseInt(e.target.value, 10) || 500000);
    updateFloatingBar();
  });

  document.getElementById('select-transport').addEventListener('change', (e) => {
    state.transportType = e.target.value;
    updateFloatingBar();
  });

  document.getElementById('select-hotel').addEventListener('change', (e) => {
    state.hotelType = e.target.value;
    updateFloatingBar();
  });

  document.getElementById('btn-auto-plan').addEventListener('click', autoPlanByBudget);

  document.getElementById('btn-to-planner').addEventListener('click', () => {
    renderPlanner();
    showScreen('planner-screen', 2);
  });

  document.getElementById('btn-back-explore').addEventListener('click', () => { showScreen('explore-screen', 1); });

  document.getElementById('slider-food').addEventListener('input', (e) => {
    state.foodBudget = parseInt(e.target.value, 10);
    renderPlanner();
  });

  document.getElementById('slider-souvenir').addEventListener('input', (e) => {
    state.souvenirBudget = parseInt(e.target.value, 10);
    renderPlanner();
  });

  document.getElementById('btn-to-checkout').addEventListener('click', () => {
    renderCheckout();
    showScreen('checkout-screen', 3);
  });

  document.getElementById('btn-back-planner').addEventListener('click', () => { showScreen('planner-screen', 2); });

  document.querySelectorAll('.payment-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      const radio = opt.querySelector('input[type="radio"]');
      radio.checked = true;
      state.paymentMethod = radio.value;
    });
  });

  document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    state.customer.name = document.getElementById('cust-name').value.trim();
    state.customer.phone = document.getElementById('cust-phone').value.trim();
    state.customer.email = document.getElementById('cust-email').value.trim();
    state.customer.date = document.getElementById('cust-date').value;
    startPaymentGateway();
  });

  document.getElementById('btn-copy-va').addEventListener('click', () => {
    const vaNumber = document.getElementById('pg-va-number').textContent;
    navigator.clipboard.writeText(vaNumber).then(() => {
      const btn = document.getElementById('btn-copy-va');
      btn.textContent = 'Berhasil Disalin!';
      setTimeout(() => { btn.textContent = 'Salin'; }, 2000);
    });
  });

  document.getElementById('btn-confirm-paid').addEventListener('click', () => {
    renderVoucher();
  });

  document.getElementById('btn-cancel-pg').addEventListener('click', () => {
    showScreen('checkout-screen', 3);
  });

  document.getElementById('btn-new-plan').addEventListener('click', () => {
    state.selectedIds = ['yog-1', 'yog-2'];
    showScreen('explore-screen', 1);
    renderCatalog();
  });

  // Cek sesi login saat halaman pertama kali dimuat
  const existingSession = localStorage.getItem('eplamo_session');
  if (existingSession) {
    try {
      const user = JSON.parse(existingSession);
      state.currentUser = user;
      document.getElementById('header-user-name').textContent = user.name.split(' ')[0];
      state.customer.name = user.name;
      state.customer.email = user.email;
      state.customer.phone = user.phone || '';
      showScreen('explore-screen', 1);
      renderCatalog();
    } catch (e) {
      localStorage.removeItem('eplamo_session');
      showScreen('splash-screen');
    }
  } else {
    showScreen('splash-screen');
  }
});
