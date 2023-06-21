function konversi() {
    var celsiusInput = document.getElementById("celsius");
    var resultFahrenheit = document.getElementById("result-fahrenheit");
    var steps = document.getElementById("steps");
    
    // Menghapus langkah-langkah sebelumnya
    steps.innerHTML = "";
    
    // Mengubah suhu dari Celsius ke Fahrenheit
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9/5) + 32;
    
    // Menampilkan hasil konversi suhu
    resultFahrenheit.innerText = "Fahrenheit: " + fahrenheit.toFixed(2) + " °F";
    
    // Menampilkan langkah-langkah konversi suhu
    steps.innerHTML += "Cara Konversi Celsius ke Fahrenheit:<br>";
    steps.innerHTML += "(" + celsius + " * 9/5) + 32 = " + fahrenheit.toFixed(2) + " °F";
  }
  
  function reverse() {
    var celsiusInput = document.getElementById("celsius");
    var resultFahrenheit = document.getElementById("result-fahrenheit");
    var steps = document.getElementById("steps");
    
    // Menghapus langkah-langkah sebelumnya
    steps.innerHTML = "";
    
    // Mengambil nilai suhu Fahrenheit
    var fahrenheit = parseFloat(resultFahrenheit.innerText.split(":")[1]);
    
    // Mengubah suhu dari Fahrenheit ke Celsius
    var celsius = (fahrenheit - 32) * 5/9;
    
    // Memperbarui nilai suhu Celsius pada input
    celsiusInput.value = celsius.toFixed(2);
    
    // Menampilkan langkah-langkah konversi suhu
    steps.innerHTML += "Cara Konversi Fahrenheit ke Celsius:<br>";
    steps.innerHTML += "(" + fahrenheit + " - 32) * 5/9 = " + celsius.toFixed(2) + " °C";
  }
  
  function reset() {
    var celsiusInput = document.getElementById("celsius");
    var resultFahrenheit = document.getElementById("result-fahrenheit");
    var steps = document.getElementById("steps");
    
    // Mengosongkan nilai input dan hasil konversi suhu
    celsiusInput.value = "";
    resultFahrenheit.innerText = "";
    steps.innerHTML = "";
  }