// src/scripts/useWeatherChat.js
import { ref, onMounted, watch } from "vue";

export function useWeatherChat() {
  // Clima
  const temperature = ref(null);
  const weatherCondition = ref("");
  const localTime = ref("");
  const weatherIcon = ref("❓");
  const backgroundClass = ref("morning");
  const stateImage = ref("");

  const apiUrl =
    "https://api.open-meteo.com/v1/forecast?latitude=-11.88&longitude=-77.02&current=temperature_2m,wind_speed_10m";

  const fetchWeather = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      temperature.value = data.current.temperature_2m;
      updateTime();
      setWeatherCondition();
      setBackground();
    } catch (error) {
      console.error("Error al obtener datos del clima:", error);
    }
  };

  const updateTime = () => {
    const now = new Date();
    localTime.value = now.toLocaleTimeString("es-ES", {
      timeZone: "America/Lima",
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const setWeatherCondition = () => {
    if (temperature.value < 10) {
      weatherCondition.value = "Frío";
      weatherIcon.value = "🥶";
    } else if (temperature.value < 25) {
      weatherCondition.value = "Templado";
      weatherIcon.value = "🌤️";
    } else {
      weatherCondition.value = "Caluroso";
      weatherIcon.value = "🔥";
    }
  };

  const setBackground = () => {
    const hour = new Date().getHours();
    if (hour < 4) {
      backgroundClass.value = "night";
      stateImage.value = "/madrugada.png";
    } else if (hour < 6) {
      backgroundClass.value = "sunrise";
      stateImage.value = "/amanecer.png";
    } else if (hour < 12) {
      backgroundClass.value = "morning";
      stateImage.value = "/manana.png";
    } else if (hour < 15) {
      backgroundClass.value = "noon";
      stateImage.value = "/mediodia.png";
    } else if (hour < 18) {
      backgroundClass.value = "afternoon";
      stateImage.value = "/tarde.png";
    } else if (hour < 19) {
      backgroundClass.value = "sunset";
      stateImage.value = "/anochecer.png";
    } else {
      backgroundClass.value = "night";
      stateImage.value = "/noche.png";
    }
  };

  // Chatbot
  const isOpen = ref(false);
  const editableInput = ref(null);
  const userInput = ref("");
  const messages = ref([
    { sender: "bot", text: "Hola, soy Jheremy Clone, ¿Qué te gustaría saber?" },
  ]);

  const closeChat = () => {
    isOpen.value = false;
    messages.value = [
      {
        sender: "bot",
        text: "Hola, soy Jheremy Clone, ¿Qué te gustaría saber?",
      },
    ];
  };

  const updateInput = () => {
    if (editableInput.value) {
      userInput.value = editableInput.value.innerText.trim();
    }
  };

  const resizeInput = () => {
    if (editableInput.value) {
      editableInput.value.style.height = "auto";
      editableInput.value.style.height =
        Math.min(editableInput.value.scrollHeight, 200) + "px";
    }
  };

  const sendMessage = async () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
      addMessage(userMessage, true, messages);
      userInput.value = "";
      try {
        const botMessage = await generateResponse(userMessage);
        addMessage(cleanMarkdown(botMessage), false, messages);
      } catch (error) {
        console.error("Error:", error);
        addMessage(
          "Lo siento, ocurrió un error. Intenta nuevamente.",
          false,
          messages
        );
      }
      if (editableInput.value) editableInput.value.innerText = "";
    }
  };

  watch(isOpen, (newVal) => {
    document.body.style.overflow = newVal ? "hidden" : "";
  });

  onMounted(() => {
    fetchWeather();
    updateTime();
    setInterval(updateTime, 60000);
  });

  return {
    temperature,
    weatherCondition,
    localTime,
    weatherIcon,
    backgroundClass,
    stateImage,
    isOpen,
    editableInput,
    userInput,
    messages,
    fetchWeather,
    updateTime,
    setWeatherCondition,
    setBackground,
    closeChat,
    updateInput,
    resizeInput,
    sendMessage,
  };
}
