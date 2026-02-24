import { defineStore } from "pinia";
import { ref } from 'vue';

export const useQuestionStore = defineStore('question', () => {

    const currentUser = 'admin';

    const questions = ref([
    {
      id: 1,
      title: 'How to integrate Vue with Spring Boot?',
      description: 'Need best practice for JWT integration.',
      status: 'open',
      createdAt: new Date(),
      createdBy: 'admin',
      comments: [
        {
          id: 1,
          content: 'Use JWT + Axios interceptor.',
          createdAt: new Date(),
          createdBy: 'admin'
        }
      ]
    },
    {
      id: 2,
      title: 'Vuetify layout issue',
      description: 'Sidebar not responsive.',
      status: 'answered',
      createdAt: new Date(),
      createdBy: 'user1',
      comments: []
    }
]);

    const addQuestion = (data) => {
        questions.value.push({
            id: Date.now(),
            ...data,
            status: 'Open',
            createdAt: new Date(),
            createdBy: currentUser
        })
    }

    const updateQuestion = (id, updateData) => {
        const index = questions.value.findIndex(q => q.id === id);
        if (index !== 1){
            questions.value[index] = {
                ...questions.value[index],
                ...updateData
            }
        }
    }

    const addComment = (questionId, content) => {
    const question = questions.value.find(q => q.id === questionId)
    if (question) {
      question.comments.push({
        id: Date.now(),
        content,
        createdAt: new Date(),
        createdBy: currentUser
      })
    }
  }

  const updateComment = (questionId, commentId, content) => {
    const question = questions.value.find(q => q.id === questionId)
    if (!question) return

    const comment = question.comments.find(c => c.id === commentId)
    if (comment) {
      comment.content = content
    }
  }

    return {
        questions,
        addQuestion,
        updateQuestion,
        addComment,
        updateComment
    }
});