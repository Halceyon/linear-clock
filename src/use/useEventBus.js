import { ref } from 'vue';

const useEventBus = () => {
  const events = ref({});

  const emitEvent = (eventName, data) => {
    if (!events.value[eventName]) return;
    events.value[eventName].forEach((callback) => callback(data));
  };

  const on = (eventName, callback) => {
    events.value[eventName] = events.value[eventName] || [];
    events.value[eventName].push(callback);
  };

  const off = (eventName, callback) => {
    if (!events.value[eventName]) return;
    events.value[eventName] = events.value[eventName].filter((cb) => cb !== callback);
  };

  return {
    emitEvent,
    on,
    off
  };
};

export { useEventBus };
