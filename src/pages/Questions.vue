<template>
    <v-main>
        <v-container>

            <v-row class="mb-4">
                <v-col>
                    <h2>Questions</h2>
                </v-col>
                <v-col class="text-right">
                    <v-btn color="primary" @click="openDialog()">
                        New Question
                    </v-btn>
                </v-col>
            </v-row>

            <v-card v-for="question in store.questions" :key="question.id" class="mb-4" rounded="xl" elevation="4">
                <v-card-title class="d-flex justify-space-between">
                    {{ question.title }}
                    <v-chip :color="statusColor(question.status)" size="small">
                        {{ question.status }}
                    </v-chip>
                </v-card-title>

                <v-card-text>
                    <div>{{ question.description }}</div>
                    <div class="text-caption mt-2">
                        Created: {{ formatDate(question.createdAt) }}
                    </div>
                    <!-- comments section in here-->
                    <h4 class="mb-2">Comments</h4>
                    <v-card v-for="comment in question.comments" :key="comment.id" class="mb-2" variant="outlined">
                        <v-card-text class="d-flex justify-space-between align-center">
                            <div>
                                <div>{{ comment.content }}</div>
                                <div class="text-caption">
                                    {{ formatDate(comment.createdAt) }}
                                </div>
                            </div>

                            <v-btn size="small" variant="text" @click="openEditComment(question.id, comment)">
                                Edit
                            </v-btn>
                        </v-card-text>
                    </v-card>

                    <!-- Add Comment -->
                    <v-text-field v-model="newComments[question.id]" label="Add comment" density="compact"
                        class="mt-2" />

                    <v-btn size="small" color="primary" @click="submitComment(question.id)">
                        Add Comment
                    </v-btn>

                </v-card-text>

                <v-card-actions>
                    <v-btn size="small" @click="openDialog(question)">Edit</v-btn>

                    <v-select :items="['open', 'answered', 'closed']" v-model="question.status" density="compact"
                        style="max-width:150px" @update:modelValue="updateStatus(question)" />
                </v-card-actions>
            </v-card>

            <!-- Dialog -->
            <v-dialog v-model="dialog" max-width="500">
                <v-card>
                    <v-card-title>
                        {{ editing ? 'Edit Question' : 'New Question' }}
                    </v-card-title>

                    <v-card-text>
                        <v-text-field v-model="form.title" label="Title" />
                        <v-textarea v-model="form.description" label="Description" />
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer />
                        <v-btn text @click="dialog = false">Cancel</v-btn>
                        <v-btn color="primary" @click="saveQuestion">
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

        </v-container>
    </v-main>
</template>

<script setup>
import { ref } from 'vue'
import { useQuestionStore } from '@/stores/questionStore'

const store = useQuestionStore()

const dialog = ref(false)
const editing = ref(false)
const selectedId = ref(null)

const newComments = ref({})

const form = ref({
    title: '',
    description: ''
})

const submitComment = (questionId) => {
  const content = newComments.value[questionId]
  if (!content) return

  store.addComment(questionId, content)
  newComments.value[questionId] = ''
}

const openEditComment = (questionId, comment) => {
  const updated = prompt('Edit comment:', comment.content)
  if (updated) {
    store.updateComment(questionId, comment.id, updated)
  }
}

const openDialog = (question = null) => {
    dialog.value = true

    if (question) {
        editing.value = true
        selectedId.value = question.id
        form.value = {
            title: question.title,
            description: question.description
        }
    } else {
        editing.value = false
        form.value = { title: '', description: '' }
    }
}

const saveQuestion = () => {
    if (editing.value) {
        store.updateQuestion(selectedId.value, form.value)
    } else {
        store.addQuestion(form.value)
    }
    dialog.value = false
}

const updateStatus = (question) => {
    store.updateQuestion(question.id, { status: question.status })
}

const formatDate = (date) => {
    return new Date(date).toLocaleString()
}

const statusColor = (status) => {
    if (status === 'open') return 'blue'
    if (status === 'answered') return 'green'
    if (status === 'closed') return 'grey'
}
</script>