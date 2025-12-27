<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Test Started -->
    <div v-if="!showResults">
      <!-- Header with Timer -->
      <div class="bg-white shadow-lg sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-2 sm:px-4 py-4">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <!-- Test Info -->
            <div class="flex items-center gap-3">
              <div 
                class="w-10 h-10 rounded-lg flex items-center justify-center"
                :style="{ backgroundColor: testData.color + '20' }"
              >
                <FileText :style="{ color: testData.color }" class="w-5 h-5" />
              </div>
              <div>
                <h1 class="text-lg font-bold text-gray-800">{{ testData.name }}</h1>
                <p class="text-sm text-gray-500">{{ testData.subject }}</p>
              </div>
            </div>

            <!-- Timer -->
            <div class="flex items-center gap-4">
              <div 
                class="flex items-center gap-2 px-4 py-2 rounded-lg font-bold"
                :class="timeRemaining <= 60 ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'"
              >
                <Clock class="w-5 h-5" />
                <span class="text-lg">{{ formatTime(timeRemaining) }}</span>
              </div>
              <button 
                @click="finishTest"
                class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition text-sm"
              >
                Yakunlash
              </button>
            </div>
          </div>

          <!-- Progress Bar -->
          <div class="mt-4">
            <div class="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Jarayon: {{ answeredCount }}/{{ testData.questions.length }}</span>
              <span>{{ Math.round((answeredCount / testData.questions.length) * 100) }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div 
                class="h-2 rounded-full transition-all duration-300"
                :style="{ 
                  width: (answeredCount / testData.questions.length * 100) + '%',
                  backgroundColor: testData.color 
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Question Navigator -->
      <div class="bg-white shadow-md mb-4 sm:mb-6">
        <div class="max-w-7xl mx-auto px-2 sm:px-4 py-4">
          <div class="flex items-center gap-2 mb-2">
            <Grid3x3 class="w-4 h-4 text-gray-600" />
            <span class="text-sm font-semibold text-gray-700">Savollar:</span>
          </div>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="(q, index) in testData.questions"
              :key="index"
              @click="currentQuestion = index"
              class="w-10 h-10 rounded-lg font-bold text-sm transition-all"
              :class="{
                'bg-blue-600 text-white ring-2 ring-blue-300': currentQuestion === index,
                'bg-green-100 text-green-700': currentQuestion !== index && userAnswers[index] !== null,
                'bg-gray-100 text-gray-600 hover:bg-gray-200': currentQuestion !== index && userAnswers[index] === null
              }"
            >
              {{ index + 1 }}
            </button>
          </div>
        </div>
      </div>

      <!-- Question Content -->
      <div class="max-w-4xl mx-auto px-2 sm:px-4 pb-6">
        <div class="bg-white rounded-xl shadow-xl p-4 sm:p-6 md:p-8">
          <!-- Question Number -->
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3">
              <div 
                class="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg text-white"
                :style="{ backgroundColor: testData.color }"
              >
                {{ currentQuestion + 1 }}
              </div>
              <div>
                <div class="text-sm text-gray-500">Savol {{ currentQuestion + 1 }}/{{ testData.questions.length }}</div>
                <div class="text-xs text-gray-400">{{ currentQuestionData.topic }}</div>
              </div>
            </div>
            <button
              @click="toggleBookmark(currentQuestion)"
              class="p-2 rounded-lg hover:bg-gray-100 transition"
              :class="bookmarkedQuestions.includes(currentQuestion) ? 'text-yellow-500' : 'text-gray-400'"
            >
              <Bookmark 
                class="w-6 h-6" 
                :fill="bookmarkedQuestions.includes(currentQuestion) ? 'currentColor' : 'none'"
              />
            </button>
          </div>

          <!-- Question Text -->
          <div class="mb-8">
            <p class="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
              {{ currentQuestionData.question }}
            </p>
          </div>

          <!-- Question Image (if exists) -->
          <div v-if="currentQuestionData.image" class="mb-8">
            <img 
              :src="currentQuestionData.image" 
              :alt="`Question ${currentQuestion + 1}`"
              class="max-w-full h-auto rounded-lg shadow-md mx-auto"
            />
          </div>

          <!-- Answer Options -->
          <div class="space-y-3 mb-8">
            <button
              v-for="(option, index) in currentQuestionData.options"
              :key="index"
              @click="selectAnswer(index)"
              class="w-full p-4 rounded-xl border-2 text-left transition-all transform hover:scale-[1.02] flex items-start gap-3"
              :class="{
                'border-blue-600 bg-blue-50': userAnswers[currentQuestion] === index,
                'border-gray-200 hover:border-gray-300 hover:bg-gray-50': userAnswers[currentQuestion] !== index
              }"
            >
              <div 
                class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 transition-all"
                :class="{
                  'bg-blue-600 text-white': userAnswers[currentQuestion] === index,
                  'bg-gray-200 text-gray-600': userAnswers[currentQuestion] !== index
                }"
              >
                {{ String.fromCharCode(65 + index) }}
              </div>
              <span 
                class="flex-1 font-medium"
                :class="{
                  'text-blue-900': userAnswers[currentQuestion] === index,
                  'text-gray-700': userAnswers[currentQuestion] !== index
                }"
              >
                {{ option }}
              </span>
              <Check 
                v-if="userAnswers[currentQuestion] === index"
                class="w-5 h-5 text-blue-600 flex-shrink-0"
              />
            </button>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex items-center justify-between pt-6 border-t">
            <button
              @click="previousQuestion"
              :disabled="currentQuestion === 0"
              class="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition"
              :class="currentQuestion === 0 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
            >
              <ChevronLeft class="w-5 h-5" />
              Oldingi
            </button>

            <button
              v-if="currentQuestion === testData.questions.length - 1"
              @click="finishTest"
              class="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
            >
              Yakunlash
              <CheckCircle class="w-5 h-5" />
            </button>

            <button
              v-else
              @click="nextQuestion"
              class="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition"
              :style="{ 
                backgroundColor: testData.color,
                color: 'white'
              }"
            >
              Keyingi
              <ChevronRight class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Results Page -->
    <div v-else class="min-h-screen py-6 md:py-12">
      <div class="max-w-4xl mx-auto px-2 sm:px-4">
        <!-- Results Header -->
        <div class="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 mb-6 text-center">
          <div 
            class="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
            :class="getScoreClass()"
          >
            <Trophy v-if="scorePercentage >= 70" class="w-10 h-10" />
            <Frown v-else class="w-10 h-10" />
          </div>
          
          <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {{ getResultTitle() }}
          </h1>
          <p class="text-lg text-gray-600 mb-6">{{ testData.name }}</p>

          <!-- Score Circle -->
          <div class="flex justify-center mb-8">
            <div class="relative">
              <svg class="w-48 h-48 transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="#e5e7eb"
                  stroke-width="12"
                  fill="none"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  :stroke="getScoreColor()"
                  stroke-width="12"
                  fill="none"
                  :stroke-dasharray="552"
                  :stroke-dashoffset="552 - (552 * scorePercentage / 100)"
                  class="transition-all duration-1000"
                />
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center">
                <div class="text-5xl font-bold" :style="{ color: getScoreColor() }">
                  {{ scorePercentage }}%
                </div>
                <div class="text-sm text-gray-600 mt-1">
                  {{ correctAnswers }}/{{ testData.questions.length }}
                </div>
              </div>
            </div>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div class="bg-green-50 rounded-lg p-4">
              <CheckCircle class="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div class="text-2xl font-bold text-green-600">{{ correctAnswers }}</div>
              <div class="text-sm text-gray-600">To'g'ri</div>
            </div>
            <div class="bg-red-50 rounded-lg p-4">
              <XCircle class="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div class="text-2xl font-bold text-red-600">{{ wrongAnswers }}</div>
              <div class="text-sm text-gray-600">Noto'g'ri</div>
            </div>
            <div class="bg-gray-50 rounded-lg p-4">
              <HelpCircle class="w-8 h-8 text-gray-600 mx-auto mb-2" />
              <div class="text-2xl font-bold text-gray-600">{{ skippedAnswers }}</div>
              <div class="text-sm text-gray-600">O'tkazilgan</div>
            </div>
            <div class="bg-blue-50 rounded-lg p-4">
              <Clock class="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div class="text-2xl font-bold text-blue-600">{{ formatTime(timeTaken) }}</div>
              <div class="text-sm text-gray-600">Vaqt</div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              @click="reviewAnswers"
              class="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
            >
              <Eye class="w-5 h-5" />
              Javoblarni ko'rish
            </button>
            <button
              @click="retakeTest"
              class="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-semibold transition"
            >
              <RotateCcw class="w-5 h-5" />
              Qayta topshirish
            </button>
            <button
              @click="goToTests"
              class="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-semibold transition"
            >
              <Home class="w-5 h-5" />
              Testlarga qaytish
            </button>
          </div>
        </div>

        <!-- Detailed Results -->
        <div class="bg-white rounded-xl shadow-xl p-4 md:p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <List class="w-6 h-6" />
            Batafsil natijalar
          </h2>
          <div class="space-y-3">
            <div
              v-for="(question, index) in testData.questions"
              :key="index"
              class="p-4 rounded-lg border-2"
              :class="{
                'border-green-200 bg-green-50': userAnswers[index] === question.correctAnswer,
                'border-red-200 bg-red-50': userAnswers[index] !== null && userAnswers[index] !== question.correctAnswer,
                'border-gray-200 bg-gray-50': userAnswers[index] === null
              }"
            >
              <div class="flex items-start gap-3">
                <div 
                  class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0"
                  :class="{
                    'bg-green-600 text-white': userAnswers[index] === question.correctAnswer,
                    'bg-red-600 text-white': userAnswers[index] !== null && userAnswers[index] !== question.correctAnswer,
                    'bg-gray-400 text-white': userAnswers[index] === null
                  }"
                >
                  {{ index + 1 }}
                </div>
                <div class="flex-1">
                  <p class="font-medium text-gray-800 mb-2">{{ question.question }}</p>
                  <div class="text-sm space-y-1">
                    <div v-if="userAnswers[index] !== null" class="flex items-center gap-2">
                      <span class="text-gray-600">Sizning javobingiz:</span>
                      <span 
                        class="font-semibold"
                        :class="userAnswers[index] === question.correctAnswer ? 'text-green-600' : 'text-red-600'"
                      >
                        {{ String.fromCharCode(65 + userAnswers[index]) }}) {{ question.options[userAnswers[index]] }}
                      </span>
                    </div>
                    <div v-if="userAnswers[index] !== question.correctAnswer" class="flex items-center gap-2">
                      <span class="text-gray-600">To'g'ri javob:</span>
                      <span class="font-semibold text-green-600">
                        {{ String.fromCharCode(65 + question.correctAnswer) }}) {{ question.options[question.correctAnswer] }}
                      </span>
                    </div>
                    <div v-if="userAnswers[index] === null" class="text-gray-500 italic">
                      O'tkazib yuborilgan
                    </div>
                  </div>
                </div>
                <div class="flex-shrink-0">
                  <CheckCircle v-if="userAnswers[index] === question.correctAnswer" class="w-6 h-6 text-green-600" />
                  <XCircle v-else-if="userAnswers[index] !== null" class="w-6 h-6 text-red-600" />
                  <HelpCircle v-else class="w-6 h-6 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { 
  FileText, 
  Clock, 
  Grid3x3, 
  Bookmark, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle,
  Trophy,
  Frown,
  XCircle,
  HelpCircle,
  Eye,
  RotateCcw,
  Home,
  List
} from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

// Test Data (API dan keladi)
const testData = ref({
  id: 1,
  name: "Algebraik ifodalar",
  subject: "Matematika",
  color: "#3B82F6",
  duration: 30, // minutes
  questions: [
    {
      id: 1,
      topic: "Algebra",
      question: "2x + 5 = 15 tenglamani yeching. x ning qiymatini toping.",
      options: ["x = 5", "x = 10", "x = 7.5", "x = 2.5"],
      correctAnswer: 0,
      image: null
    },
    {
      id: 2,
      topic: "Algebra",
      question: "(x + 3)(x - 3) ifodaning natijasi nimaga teng?",
      options: ["x² - 9", "x² + 9", "x² - 6x + 9", "x² + 6x - 9"],
      correctAnswer: 0,
      image: null
    },
    {
      id: 3,
      topic: "Algebra",
      question: "Agar a = 2 va b = 3 bo'lsa, a² + 2ab + b² ning qiymatini hisoblang.",
      options: ["13", "25", "19", "21"],
      correctAnswer: 1,
      image: null
    },
    {
      id: 4,
      topic: "Algebra",
      question: "x² - 6x + 9 ifodani quyidagilardan qaysi biriga keltirish mumkin?",
      options: ["(x - 3)²", "(x + 3)²", "(x - 9)²", "x(x - 6)"],
      correctAnswer: 0,
      image: null
    },
    {
      id: 5,
      topic: "Algebra",
      question: "3x - 7 = 2x + 5 tenglamani yeching.",
      options: ["x = 12", "x = 10", "x = 8", "x = 15"],
      correctAnswer: 0,
      image: null
    }
  ]
})

// State
const currentQuestion = ref(0)
const userAnswers = ref(Array(testData.value.questions.length).fill(null))
const bookmarkedQuestions = ref([])
const timeRemaining = ref(testData.value.duration * 60) // seconds
const showResults = ref(false)
const timeTaken = ref(0)

let timerInterval = null

// Computed
const currentQuestionData = computed(() => testData.value.questions[currentQuestion.value])

const answeredCount = computed(() => {
  return userAnswers.value.filter(answer => answer !== null).length
})

const correctAnswers = computed(() => {
  return userAnswers.value.filter((answer, index) => 
    answer === testData.value.questions[index].correctAnswer
  ).length
})

const wrongAnswers = computed(() => {
  return userAnswers.value.filter((answer, index) => 
    answer !== null && answer !== testData.value.questions[index].correctAnswer
  ).length
})

const skippedAnswers = computed(() => {
  return userAnswers.value.filter(answer => answer === null).length
})

const scorePercentage = computed(() => {
  return Math.round((correctAnswers.value / testData.value.questions.length) * 100)
})

// Methods
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

const selectAnswer = (optionIndex) => {
  userAnswers.value[currentQuestion.value] = optionIndex
}

const toggleBookmark = (questionIndex) => {
  const index = bookmarkedQuestions.value.indexOf(questionIndex)
  if (index > -1) {
    bookmarkedQuestions.value.splice(index, 1)
  } else {
    bookmarkedQuestions.value.push(questionIndex)
  }
}

const nextQuestion = () => {
  if (currentQuestion.value < testData.value.questions.length - 1) {
    currentQuestion.value++
  }
}

const previousQuestion = () => {
  if (currentQuestion.value > 0) {
    currentQuestion.value--
  }
}

const finishTest = () => {
  if (confirm('Testni yakunlamoqchimisiz?')) {
    timeTaken.value = (testData.value.duration * 60) - timeRemaining.value
    clearInterval(timerInterval)
    showResults.value = true
    window.scrollTo(0, 0)
  }
}

const getResultTitle = () => {
  if (scorePercentage.value >= 90) return "A'lo natija!"
  if (scorePercentage.value >= 70) return "Yaxshi natija!"
  if (scorePercentage.value >= 50) return "O'rtacha natija"
  return "Qayta urinib ko'ring"
}

const getScoreColor = () => {
  if (scorePercentage.value >= 70) return "#10B981"
  if (scorePercentage.value >= 50) return "#F59E0B"
  return "#EF4444"
}

const getScoreClass = () => {
  if (scorePercentage.value >= 70) return "bg-green-100 text-green-600"
  if (scorePercentage.value >= 50) return "bg-yellow-100 text-yellow-600"
  return "bg-red-100 text-red-600"
}

const reviewAnswers = () => {
  // Scroll to detailed results
  document.querySelector('.space-y-3').scrollIntoView({ behavior: 'smooth' })
}

const retakeTest = () => {
  if (confirm('Testni qaytadan boshlamoqchimisiz?')) {
    currentQuestion.value = 0
    userAnswers.value = Array(testData.value.questions.length).fill(null)
    bookmarkedQuestions.value = []
    timeRemaining.value = testData.value.duration * 60
    showResults.value = false
    timeTaken.value = 0
    startTimer()
  }
}

const goToTests = () => {
  router.push('/subjects/1/tests')
}

const startTimer = () => {
  timerInterval = setInterval(() => {
    if (timeRemaining.value > 0) {
      timeRemaining.value--
    } else {
      finishTest()
    }
  }, 1000)
}

// Lifecycle
onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval)
  }
})
</script>