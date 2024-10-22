const batteryBatches = [4, 5, 3, 7, 8, 4];  

function calculateTotalBatteries(batches) {
  return batches.reduce((total, batch) => total + batch, 0);
}

function displayTotalBatteries(total) {
  const batteryCountElement = document.getElementById('battery-count');
  
  if (batteryCountElement) {
    batteryCountElement.innerText = `Total Batteries: ${total}`;
  } else {
    console.error('Battery count element not found.');
  }
}

const totalBatteries = calculateTotalBatteries(batteryBatches);
displayTotalBatteries(totalBatteries);

console.log(`Total Batteries: ${totalBatteries}`);
