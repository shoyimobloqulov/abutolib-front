<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-6 md:py-12">
    <div class="max-w-7xl mx-auto px-2 sm:px-4">
      <!-- Back Button -->
      <button 
        @click="goBack"
        class="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 font-medium transition"
      >
        <ArrowLeft class="w-5 h-5" />
        Fanlar ro'yxatiga qaytish
      </button>

      <!-- Subject Header -->
      <div class="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 mb-6 md:mb-8">
        <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <!-- Icon -->
          <div 
            class="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-lg"
            :style="{ backgroundColor: subject.color + '20', border: '3px solid ' + subject.color }"
          >
            <component :is="subject.icon" :style="{ color: subject.color }" class="w-8 h-8 md:w-10 md:h-10" />
          </div>

          <!-- Info -->
          <div class="flex-1">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{{ subject.name }}</h1>
            <p class="text-base md:text-lg text-gray-600 mb-4">{{ subject.description }}</p>
            
            <!-- Stats -->
            <div class="flex flex-wrap gap-4 text-sm">
              <div class="flex items-center gap-2">
                <FileText class="w-4 h-4 text-blue-600" />
                <span class="text-gray-700"><strong>{{ tests.length }}</strong> ta test</span>
              </div>
              <div class="flex items-center gap-2">
                <HelpCircle class="w-4 h-4 text-green-600" />
                <span class="text-gray-700"><strong>{{ subject.questionsCount }}</strong> savol</span>
              </div>
              <div class="flex items-center gap-2">
                <Users class="w-4 h-4 text-purple-600" />
                <span class="text-gray-700"><strong>{{ subject.studentsCount }}+</strong> o'quvchi</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Filters -->
      <div class="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-6">
        <div class="flex flex-col sm:flex-row gap-3 md:gap-4">
          <!-- Search -->
          <div class="flex-1 relative">
            <Search class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Test qidirish..." 
              class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <!-- Difficulty Filter -->
          <select 
            v-model="difficultyFilter"
            class="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="all">Barcha darajalar</option>
            <option value="easy">Oson</option>
            <option value="medium">O'rta</option>
            <option value="hard">Qiyin</option>
          </select>

          <!-- Sort -->
          <select 
            v-model="sortBy"
            class="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="newest">Eng yangi</option>
            <option value="popular">Ommabop</option>
            <option value="questions">Savollar soni</option>
          </select>
        </div>
      </div>

      <!-- Tests Table -->
      <div class="bg-white rounded-xl shadow-xl overflow-hidden">
        <!-- Desktop Table -->
        <div class="hidden md:block overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Test nomi
                </th>
                <th class="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Savollar
                </th>
                <th class="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Davomiyligi
                </th>
                <th class="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Qiyinlik
                </th>
                <th class="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  O'tganlar
                </th>
                <th class="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Harakat
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr 
                v-for="test in filteredTests" 
                :key="test.id"
                class="hover:bg-gray-50 transition cursor-pointer"
                @click="startTest(test.id)"
              >
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div 
                      class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      :style="{ backgroundColor: subject.color + '20' }"
                    >
                      <FileText :style="{ color: subject.color }" class="w-5 h-5" />
                    </div>
                    <div>
                      <div class="font-semibold text-gray-800">{{ test.name }}</div>
                      <div class="text-sm text-gray-500">{{ test.topic }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 text-center">
                  <span class="font-semibold text-gray-800">{{ test.questionsCount }}</span>
                </td>
                <td class="px-6 py-4 text-center">
                  <div class="flex items-center justify-center gap-1 text-gray-600">
                    <Clock class="w-4 h-4" />
                    <span>{{ test.duration }} min</span>
                  </div>
                </td>
                <td class="px-6 py-4 text-center">
                  <span 
                    class="px-3 py-1 rounded-full text-xs font-semibold"
                    :class="{
                      'bg-green-100 text-green-700': test.difficulty === 'easy',
                      'bg-yellow-100 text-yellow-700': test.difficulty === 'medium',
                      'bg-red-100 text-red-700': test.difficulty === 'hard'
                    }"
                  >
                    {{ getDifficultyText(test.difficulty) }}
                  </span>
                </td>
                <td class="px-6 py-4 text-center">
                  <div class="flex items-center justify-center gap-1 text-gray-600">
                    <Users class="w-4 h-4" />
                    <span>{{ test.completedBy }}</span>
                  </div>
                </td>
                <td class="px-6 py-4 text-center">
                  <button 
                    @click.stop="startTest(test.id)"
                    class="px-4 py-2 rounded-lg font-semibold text-sm transition-all"
                    :style="{ 
                      backgroundColor: subject.color,
                      color: 'white'
                    }"
                  >
                    Boshlash
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Mobile Cards -->
        <div class="md:hidden divide-y divide-gray-200">
          <div 
            v-for="test in filteredTests" 
            :key="test.id"
            class="p-4 hover:bg-gray-50 transition cursor-pointer"
            @click="startTest(test.id)"
          >
            <div class="flex items-start gap-3 mb-3">
              <div 
                class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                :style="{ backgroundColor: subject.color + '20' }"
              >
                <FileText :style="{ color: subject.color }" class="w-6 h-6" />
              </div>
              <div class="flex-1">
                <h3 class="font-semibold text-gray-800 mb-1">{{ test.name }}</h3>
                <p class="text-sm text-gray-500">{{ test.topic }}</p>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3 mb-3 text-sm">
              <div class="flex items-center gap-2 text-gray-600">
                <HelpCircle class="w-4 h-4" />
                <span>{{ test.questionsCount }} savol</span>
              </div>
              <div class="flex items-center gap-2 text-gray-600">
                <Clock class="w-4 h-4" />
                <span>{{ test.duration }} min</span>
              </div>
              <div class="flex items-center gap-2 text-gray-600">
                <Users class="w-4 h-4" />
                <span>{{ test.completedBy }} kishi</span>
              </div>
              <div>
                <span 
                  class="px-2 py-1 rounded-full text-xs font-semibold"
                  :class="{
                    'bg-green-100 text-green-700': test.difficulty === 'easy',
                    'bg-yellow-100 text-yellow-700': test.difficulty === 'medium',
                    'bg-red-100 text-red-700': test.difficulty === 'hard'
                  }"
                >
                  {{ getDifficultyText(test.difficulty) }}
                </span>
              </div>
            </div>

            <button 
              @click.stop="startTest(test.id)"
              class="w-full py-2.5 rounded-lg font-semibold text-sm transition-all"
              :style="{ 
                backgroundColor: subject.color,
                color: 'white'
              }"
            >
              Testni boshlash
            </button>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredTests.length === 0" class="p-12 text-center">
          <Search class="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 class="text-xl font-bold text-gray-800 mb-2">Test topilmadi</h3>
          <p class="text-gray-600">Qidiruv parametrlarini o'zgartiring</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { 
  ArrowLeft, 
  FileText, 
  Users, 
  Clock, 
  HelpCircle,
  Search,
  Calculator
} from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const searchQuery = ref('')
const difficultyFilter = ref('all')
const sortBy = ref('newest')

const subject = ref({
  id: 1,
  name: "Matematika",
  description: "Algebra, geometriya va matematik tahlil bo'yicha testlar",
  icon: Calculator,
  color: "#3B82F6",
  questionsCount: "5.2K",
  studentsCount: "3.5K"
})

const tests = ref([
  {
    id: 1,
    name: "Algebraik ifodalar",
    topic: "Algebra",
    questionsCount: 25,
    duration: 30,
    difficulty: "easy",
    completedBy: 1234
  },
  {
    id: 2,
    name: "Kvadrat tenglamalar",
    topic: "Algebra",
    questionsCount: 30,
    duration: 40,
    difficulty: "medium",
    completedBy: 987
  },
  {
    id: 3,
    name: "Trigonometriya asoslari",
    topic: "Trigonometriya",
    questionsCount: 35,
    duration: 45,
    difficulty: "hard",
    completedBy: 654
  },
  {
    id: 4,
    name: "Uchburchaklar va ularning xossalari",
    topic: "Geometriya",
    questionsCount: 28,
    duration: 35,
    difficulty: "medium",
    completedBy: 876
  },
  {
    id: 5,
    name: "Funksiyalar va grafiklar",
    topic: "Algebra",
    questionsCount: 32,
    duration: 40,
    difficulty: "hard",
    completedBy: 543
  },
  {
    id: 6,
    name: "Sonlar nazariyasi",
    topic: "Arifmetika",
    questionsCount: 20,
    duration: 25,
    difficulty: "easy",
    completedBy: 1567
  },
  {
    id: 7,
    name: "Aylanalar va doiralar",
    topic: "Geometriya",
    questionsCount: 26,
    duration: 35,
    difficulty: "medium",
    completedBy: 765
  },
  {
    id: 8,
    name: "Limitlar va hosilalar",
    topic: "Matematik tahlil",
    questionsCount: 40,
    duration: 50,
    difficulty: "hard",
    completedBy: 432
  }
])

const filteredTests = computed(() => {
  let result = tests.value

  // Search filter
  if (searchQuery.value) {
    result = result.filter(test => 
      test.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      test.topic.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  // Difficulty filter
  if (difficultyFilter.value !== 'all') {
    result = result.filter(test => test.difficulty === difficultyFilter.value)
  }

  // Sort
  if (sortBy.value === 'popular') {
    result = [...result].sort((a, b) => b.completedBy - a.completedBy)
  } else if (sortBy.value === 'questions') {
    result = [...result].sort((a, b) => b.questionsCount - a.questionsCount)
  }

  return result
})

const getDifficultyText = (difficulty) => {
  const map = {
    easy: 'Oson',
    medium: "O'rta",
    hard: 'Qiyin'
  }
  return map[difficulty] || difficulty
}

const goBack = () => {
  router.push('/subjects')
}

const startTest = (testId) => {
  router.push(`/test/${testId}/start`)
}

onMounted(() => {
  // Bu yerda API dan fan ma'lumotlarini yuklaymiz
  console.log('Subject ID:', route.params.id)
})
</script>