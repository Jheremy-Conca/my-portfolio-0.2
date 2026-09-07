import { ref, onMounted, onUnmounted } from 'vue'

const API_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=-11.88&longitude=-77.02&current=temperature_2m,wind_speed_10m'

const FALLBACK_IMAGE = '/manana.png'

export function useWeather() {
  const temperature = ref(null)
  const localTime = ref('')
  const weatherIcon = ref('❓')
  const stateImage = ref(FALLBACK_IMAGE)

  let timeTimer = null

  const updateTime = () => {
    localTime.value = new Date().toLocaleTimeString('es-ES', {
      timeZone: 'America/Lima',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const setWeatherIcon = () => {
    if (temperature.value == null) return
    if (temperature.value < 10) weatherIcon.value = '🥶'
    else if (temperature.value < 25) weatherIcon.value = '🌤️'
    else weatherIcon.value = '🔥'
  }

  const setStateImage = () => {
    const hour = new Date().getHours()
    if (hour < 4) stateImage.value = '/madrugada.png'
    else if (hour < 6) stateImage.value = '/amanecer.png'
    else if (hour < 12) stateImage.value = '/manana.png'
    else if (hour < 15) stateImage.value = '/mediodia.png'
    else if (hour < 18) stateImage.value = '/tarde.png'
    else if (hour < 19) stateImage.value = '/anochecer.png'
    else stateImage.value = '/noche.png'
  }

  // Si la imagen de estado no carga, caemos a una conocida.
  const useFallback = () => {
    if (stateImage.value !== FALLBACK_IMAGE) stateImage.value = FALLBACK_IMAGE
  }

  const fetchWeather = async () => {
    try {
      const res = await fetch(API_URL)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      temperature.value = data.current.temperature_2m
      updateTime()
      setWeatherIcon()
      setStateImage()
    } catch (error) {
      console.error('Error al obtener datos del clima:', error)
    }
  }

  onMounted(() => {
    fetchWeather()
    updateTime()
    timeTimer = setInterval(updateTime, 60000)
  })

  onUnmounted(() => {
    if (timeTimer) {
      clearInterval(timeTimer)
      timeTimer = null
    }
  })

  return {
    temperature,
    localTime,
    weatherIcon,
    stateImage,
    fetchWeather,
    useFallback,
  }
}
