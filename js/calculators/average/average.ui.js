function renderAverageCalculator(container) {
  container.innerHTML = `
    <h2>Average Buying Price Calculator</h2>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody id="avg-rows"></tbody>
    </table>

    <div class="avg-summary">
      <p>Total Quantity: <strong id="totalQty">0</strong></p>
      <p>Average Price: <strong id="avgPrice">0</strong></p>
    </div>
  `;

  const rowsContainer = document.getElementById("avg-rows");
  const rowsData = [];

  for (let i = 1; i <= 10; i++) {
    rowsData.push({ qty: 0, price: 0 });

    rowsContainer.insertAdjacentHTML("beforeend", `
      <tr>
        <td>${i}</td>
        <td><input type="number" min="0" data-row="${i-1}" data-type="qty"></td>
        <td><input type="number" min="0" step="0.01" data-row="${i-1}" data-type="price"></td>
        <td class="row-total">0</td>
      </tr>
    `);
  }

  rowsContainer.addEventListener("input", e => {
    const rowIndex = e.target.dataset.row;
    const type = e.target.dataset.type;

    rowsData[rowIndex][type] = e.target.value;

    updateAverage(rowsData);
  });
}

function updateAverage(rowsData) {
  const result = calculateAverage(rowsData);

  document.getElementById("totalQty").textContent = result.totalQty;
  document.getElementById("avgPrice").textContent = result.averagePrice.toFixed(4);

  document.querySelectorAll("#avg-rows tr").forEach((row, i) => {
    const total = (rowsData[i].qty || 0) * (rowsData[i].price || 0);
    row.querySelector(".row-total").textContent = total.toFixed(2);
  });
}
