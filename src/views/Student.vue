<template>
    <div class="student">
        <div class="columns is-centered is-vcentered full-height">
            <div class="column is-11">
                <div class="box has-text-centered">
                    <div class="">Здравствуйте, {{ student.name }}!</div>
                    <button
                        class="mt-3 button is-light is-outlined"
                        :class="{ 'is-warning': student.tries, 'is-success': !student.tries }"
                        @click="takeExamPaper()"
                    >
                        <span>{{
                            `${student.tries > 0 ? 'Поменять билет' : 'Тянуть билет'}`
                        }}</span>
                        <span class="icon is-small">
                            <font-awesome-icon icon="ticket-alt" />
                        </span>
                    </button>
                    <div class="mt-3">Вы тянули билет {{ student.tries }} раз</div>
                    <div v-if="student.examPaper" class="mt-3">
                        Ваш билет <span class="has-text-primary">№{{ student.examPaper }}</span
                        >. Удачи!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { student, updateStudent, takeExamPaper } from '@/store/api';

onBeforeMount(() => updateStudent());
</script>

<style lang="scss" scoped>
.student {
    position: fixed;
    height: 50%;
    width: 50%;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
</style>
