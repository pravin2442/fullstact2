// Use your OpenWeather API key here
const apiKey = 'cb192e21aa8d210821415fe93130dc68';  // Your OpenWeather API Key

// Function to fetch weather data
async function getWeather(city: string): Promise<void> {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error response:', errorData); // Log full error response from API
      throw new Error(errorData.message || 'City not found!');
    }

    const data = await response.json();
    console.log('Weather data:', data);  // Log the successful data response

    const temperature = data.main.temp;
    const weatherCondition = data.weather[0].description;
    const humidity = data.main.humidity;
    const cityName = data.name;

    // Update the UI with the weather data
    document.getElementById('city-name')!.textContent = cityName;
    document.getElementById('temperature')!.textContent = temperature.toFixed(1);
    document.getElementById('weather-condition')!.textContent = weatherCondition;
    document.getElementById('humidity')!.textContent = humidity.toString();

    // Show weather result and hide error message
    document.getElementById('weather-result')!.classList.remove('hidden');
    document.getElementById('error-message')!.classList.add('hidden');
  } catch (error) {
    console.error(error);  // Log error to console
    document.getElementById('error-message')!.classList.remove('hidden');
    document.getElementById('weather-result')!.classList.add('hidden');
  }
}

// Add event listener to the "Get Weather" button
document.getElementById('getWeatherBtn')?.addEventListener('click', () => {
  const city = (<HTMLInputElement>document.getElementById('city')).value.trim();
  
  if (city) {
    getWeather(city);  // Call getWeather function when city is provided
  } else {
    alert('Please enter a city name!');  // Show an alert if no city is entered
  }
});
