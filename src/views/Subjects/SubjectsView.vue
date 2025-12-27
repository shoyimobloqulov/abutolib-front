<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-6 md:py-12">
    <div class="max-w-7xl mx-auto px-2 sm:px-4">
      <!-- Header -->
      <div class="text-center mb-8 md:mb-12">
        <div class="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <BookOpen class="w-4 h-4 inline mr-2" />
          Test fanlar
        </div>
        <h1 class="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Fanlar</h1>
        <p class="text-base md:text-xl text-gray-600">O'zingizga kerakli fanni tanlang va testlarni boshlang</p>
      </div>

      <!-- Stats Bar -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12">
        <div class="bg-white rounded-xl p-4 shadow-lg text-center">
          <div class="text-2xl md:text-3xl font-bold text-blue-600">{{ subjects.length }}</div>
          <div class="text-xs md:text-sm text-gray-600">Fanlar</div>
        </div>
        <div class="bg-white rounded-xl p-4 shadow-lg text-center">
          <div class="text-2xl md:text-3xl font-bold text-green-600">1,234</div>
          <div class="text-xs md:text-sm text-gray-600">Testlar</div>
        </div>
        <div class="bg-white rounded-xl p-4 shadow-lg text-center">
          <div class="text-2xl md:text-3xl font-bold text-purple-600">45K+</div>
          <div class="text-xs md:text-sm text-gray-600">Savollar</div>
        </div>
        <div class="bg-white rounded-xl p-4 shadow-lg text-center">
          <div class="text-2xl md:text-3xl font-bold text-orange-600">10K+</div>
          <div class="text-xs md:text-sm text-gray-600">O'quvchilar</div>
        </div>
      </div>

      <!-- Subjects Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        <div 
          v-for="subject in subjects" 
          :key="subject.id"
          class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden group"
          @click="goToSubject(subject.id)"
        >
          <!-- Image with Gradient Overlay -->
          <div class="relative h-48 overflow-hidden">
            <img 
              :src="subject.image" 
              :alt="subject.name" 
              class="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            
            <!-- Icon Badge -->
            <div class="absolute top-4 left-4">
              <div 
                class="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm"
                :style="{ backgroundColor: subject.color + '20', border: '2px solid ' + subject.color }"
              >
                <component :is="subject.icon" :style="{ color: subject.color }" class="w-6 h-6" />
              </div>
            </div>

            <!-- Tests Count Badge -->
            <div class="absolute top-4 right-4">
              <span class="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                {{ subject.testsCount }} ta test
              </span>
            </div>

            <!-- Subject Name Overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-xl font-bold text-white mb-1">{{ subject.name }}</h3>
            </div>
          </div>

          <!-- Content -->
          <div class="p-4 md:p-5">
            <p class="text-sm text-gray-600 mb-4 line-clamp-2">{{ subject.description }}</p>

            <!-- Stats -->
            <div class="grid grid-cols-2 gap-3 mb-4">
              <div class="flex items-center gap-2 text-xs text-gray-600">
                <div class="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                  <FileText class="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div class="font-semibold text-gray-800">{{ subject.questionsCount }}</div>
                  <div class="text-xs">Savol</div>
                </div>
              </div>
              <div class="flex items-center gap-2 text-xs text-gray-600">
                <div class="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                  <Users class="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div class="font-semibold text-gray-800">{{ subject.studentsCount }}+</div>
                  <div class="text-xs">O'quvchi</div>
                </div>
              </div>
            </div>

            <!-- Difficulty Level -->
            <div class="mb-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-600">Qiyinlik darajasi</span>
                <span class="text-xs font-semibold" :style="{ color: subject.color }">
                  {{ subject.difficulty }}
                </span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  class="h-1.5 rounded-full transition-all duration-500"
                  :style="{ 
                    width: subject.difficultyPercent + '%',
                    backgroundColor: subject.color 
                  }"
                ></div>
              </div>
            </div>

            <!-- Action Button -->
            <button 
              class="w-full py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all"
              :style="{ 
                backgroundColor: subject.color + '15',
                color: subject.color 
              }"
              @click.stop="goToSubject(subject.id)"
            >
              Testlarni boshlash
              <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { 
  BookOpen, 
  Calculator, 
  Atom, 
  FlaskConical, 
  Globe, 
  BookMarked,
  Laptop,
  Languages,
  FileText,
  Users,
  ArrowRight,
  Beaker,
  Earth,
  Binary
} from 'lucide-vue-next'

const router = useRouter()

const subjects = ref([
  {
    id: 1,
    name: "Matematika",
    description: "Algebra, geometriya va matematik tahlil bo'yicha testlar",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=400&fit=crop",
    icon: Calculator,
    color: "#3B82F6",
    testsCount: 145,
    questionsCount: "5.2K",
    studentsCount: "3.5K",
    difficulty: "O'rta",
    difficultyPercent: 60
  },
  {
    id: 2,
    name: "Fizika",
    description: "Mexanika, elektrodinamika va molekulyar fizika testlari",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=600&h=400&fit=crop",
    icon: Atom,
    color: "#8B5CF6",
    testsCount: 128,
    questionsCount: "4.8K",
    studentsCount: "2.8K",
    difficulty: "Qiyin",
    difficultyPercent: 80
  },
  {
    id: 3,
    name: "Kimyo",
    description: "Organik, noorganik va analitik kimyo bo'yicha savollar",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
    icon: FlaskConical,
    color: "#10B981",
    testsCount: 112,
    questionsCount: "4.2K",
    studentsCount: "2.3K",
    difficulty: "O'rta",
    difficultyPercent: 65
  },
  {
    id: 4,
    name: "Ingliz tili",
    description: "Grammatika, lug'at va o'qish ko'nikmalari testlari",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=400&fit=crop",
    icon: Languages,
    color: "#F59E0B",
    testsCount: 198,
    questionsCount: "7.5K",
    studentsCount: "5.2K",
    difficulty: "Oson",
    difficultyPercent: 40
  },
  {
    id: 5,
    name: "Biologiya",
    description: "Anatomiya, genetika va ekologiya bo'yicha testlar",
    image: "https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?w=600&h=400&fit=crop",
    icon: Beaker,
    color: "#14B8A6",
    testsCount: 95,
    questionsCount: "3.8K",
    studentsCount: "2.1K",
    difficulty: "O'rta",
    difficultyPercent: 55
  },
  {
    id: 6,
    name: "Geografiya",
    description: "Umumiy geografiya va O'zbekiston geografiyasi testlari",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&h=400&fit=crop",
    icon: Earth,
    color: "#06B6D4",
    testsCount: 87,
    questionsCount: "3.2K",
    studentsCount: "1.8K",
    difficulty: "Oson",
    difficultyPercent: 45
  },
  {
    id: 7,
    name: "Informatika",
    description: "Dasturlash, algoritm va ma'lumotlar bazasi testlari",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    icon: Laptop,
    color: "#EC4899",
    testsCount: 156,
    questionsCount: "6.1K",
    studentsCount: "4.3K",
    difficulty: "Qiyin",
    difficultyPercent: 75
  },
  {
    id: 8,
    name: "Tarix",
    description: "Jahon tarixi va O'zbekiston tarixi bo'yicha savollar",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=600&h=400&fit=crop",
    icon: BookMarked,
    color: "#EF4444",
    testsCount: 102,
    questionsCount: "4.5K",
    studentsCount: "2.6K",
    difficulty: "O'rta",
    difficultyPercent: 50
  }
])

const goToSubject = (id) => {
  router.push(`/subjects/${id}/tests`)
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>