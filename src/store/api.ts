import { reactive } from 'vue';

import axios, { AxiosError } from 'axios';

import { Student } from '@/types/student';

const axiosInstance = axios.create({
    baseURL:
        (process.env as Record<string, string>).NODE_ENV === 'development'
            ? 'https://ff1exam.trebler.dev/api/v1'
            : '/api/v1',
    timeout: 5000,
});

export const student = reactive<Student>({
    name: '',
    tries: 0,
});

export const students = reactive<Student[]>([]);

export const availableExamPapers = reactive<number[]>([]);

export const updateStudent = async (): Promise<void> => {
    try {
        const { data } = await axiosInstance.get<Student>('/students/self');

        Object.assign(student, data);
    } catch (err: unknown) {
        console.error(err);
    }
};

export const takeExamPaper = async (): Promise<void> => {
    try {
        const { data } = await axiosInstance.patch<Student>('/students/self');

        Object.assign(student, data);
    } catch (err: unknown) {
        console.error(err);
    }
};

export const listStudents = async (): Promise<void> => {
    try {
        const { data } = await axiosInstance.get<Student[]>('/students');

        Object.assign(students, data);
    } catch (err: unknown) {
        console.error(err);
    }
};

export const listAvailableExamPapers = async (): Promise<void> => {
    try {
        const { data } = await axiosInstance.get<number[]>('/availableexampapers');

        Object.assign(availableExamPapers, data);
    } catch (err: unknown) {
        console.error(err);
    }
};
