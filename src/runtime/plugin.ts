import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => document.addEventListener('touchstart', () => {}, { passive: true }))