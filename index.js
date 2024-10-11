let batteryBatches = [];

function calculateTotalBatteries() {
    return batteryBatches.reduce((accumulator, currentBatch) => {
        return accumulator + currentBatch; 
    }, 0);
}

function updateDisplay() {
    const totalBatteries = calculateTotalBatteries();
    document.getElementById('totalBatteriesDisplay').textContent = totalBatteries;

    const batchList = document.getElementById('batchList');
    batchList.innerHTML = ''; 
    batteryBatches.forEach(batch => {
        const listItem = document.createElement('li');
        listItem.textContent = batch;
        batchList.appendChild(listItem);
    });
}

document.getElementById('addBatchButton').addEventListener('click', () => {
    const inputField = document.getElementById('batteryBatchInput');
    const batchValue = parseInt(inputField.value, 10);

    if (isNaN(batchValue) || batchValue < 0) {
        alert('Please enter a valid number greater than or equal to 0.');
        return;
    }

    batteryBatches.push(batchValue); 
    inputField.value = ''; 
    updateDisplay(); 
});

document.getElementById('resetButton').addEventListener('click', () => {
    batteryBatches = []; 
    document.getElementById('batteryBatchInput').value = ''; 
    updateDisplay(); 
});

updateDisplay();
