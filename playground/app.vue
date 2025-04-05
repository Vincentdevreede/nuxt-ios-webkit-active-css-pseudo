<template>
  <div>
    <h1>Nuxt iOS WebKit Active CSS Pseudo</h1>
    <button @click="onClick">
      Button
    </button>
  </div>
</template>

<script setup>
const onClick = () => console.log('Button was clicked!')
</script>

<style>
* {
  touch-action: manipulation;
  -webkit-user-select: none;
  user-select: none;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  height: calc(100dvh - 3px);
  text-align: center;
  justify-content: center;
  align-items: center;
  background: black;
  border-bottom: 3px solid #00DC82;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 1rem;
  font-weight: 300;
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
}

button {
  background: linear-gradient(90deg, #00DC82, #00C58E);
  color: white;
  font-size: 1.2rem;
  padding: 2rem 8rem;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 8px 25px rgba(0, 220, 130, 0.25);
  -webkit-tap-highlight-color: transparent;
}

button:active {
  animation: pulse 0.2s;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
</style>
