async function loadDecades() {
  const response = await fetch('data/decades.json');
  const decades = await response.json();

  const grid = document.getElementById('decade-grid');

  decades.forEach(decade => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <h3>${decade.title}</h3>
      <p>${decade.count} concerts</p>
    `;

    grid.appendChild(card);
  });
}

loadDecades();
