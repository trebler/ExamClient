import { ref, readonly, computed } from 'vue';

const _errorMessage = ref('');

export const errorMessage = readonly(_errorMessage);
export const errorMessageVisible = computed(() => _errorMessage.value !== '');

export const showErrorMessage = (message: string): void => void (_errorMessage.value = message);
export const hideErrorMessage = (): void => void (_errorMessage.value = '');
