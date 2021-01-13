<template>
    <div class="student">
        <div class="columns is-centered is-vcentered full-height">
            <div class="column is-11">
                <div class="box">
                    <div class="mb-3">Здравствуйте, уважаемая Светлана Моисеевна!</div>

                    Билеты на столе:
                    <div class="box mt-1 mb-3">
                        <div class="columns is-vcentered">
                            <div class="column is-9">
                                <div class="tags">
                                    <span
                                        v-for="(examPaper, index) in availableExamPapers"
                                        :key="index"
                                        class="tag is-primary"
                                        >{{ examPaper }}</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>

                    Студенты:
                    <div class="box mt-1">
                        <div class="columns is-vcentered">
                            <div class="column is-9">
                                <div v-for="(student, index) in students" :key="index">
                                    <span class="tag is-secondary">{{ student.name }}</span>
                                    тянул(а) билет
                                    <span class="tag is-warning">{{ student.tries }} раз(а)</span>.
                                    <span v-if="student.examPaper">
                                        Билет:
                                        <span class="tag is-success">{{ student.examPaper }} </span
                                        >.</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, onMounted } from 'vue';
import { dynamic } from 'set-interval-async';

import { students, listStudents, listAvailableExamPapers, availableExamPapers } from '@/store/api';

const fetchAll = () => Promise.all([listStudents(), listAvailableExamPapers()]);

onBeforeMount(fetchAll);

onMounted(() => dynamic.setIntervalAsync(fetchAll, 1000));
</script>

<style lang="scss" scoped>
.admin {
    position: fixed;
    height: 50%;
    width: 50%;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
</style>
