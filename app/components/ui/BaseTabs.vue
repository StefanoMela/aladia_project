<script setup>
const props = defineProps({
  tabs: {
    type: Array,
    required: true,
    validator: (value) =>
      value.every(
        (tab) =>
          typeof tab === 'object' &&
          tab !== null &&
          'id' in tab &&
          'label' in tab &&
          'heading' in tab &&
          'description' in tab
      )
  },
  modelValue: {
    type: [String, Number],
    default: null
  },
  imageAlt: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const activeId = computed({
  get: () => {
    const val = props.modelValue
    if (val !== null && val !== undefined) {
      return typeof val === 'number' ? props.tabs[val]?.id : String(val)
    }
    return props.tabs[0]?.id ?? null
  },
  set: (value) => emit('update:modelValue', value)
})

const activeTab = computed(
  () => props.tabs.find((t) => t.id === activeId.value) ?? props.tabs[0]?.id ?? null
)

function selectTab(id) {
  activeId.value = id
}

const isModalOpen = ref(false)
const isConfirmationToastOpen = ref(false)
const modalEmail = ref('')
const modalMessage = ref('')

function onSendClick() {
  isModalOpen.value = false
  isConfirmationToastOpen.value = true
}
</script>

<template>
  <div class="w-full">
    <!-- Tab Triggers - Pill style -->
    <div class="mb-10 flex items-center justify-center">
      <div
        role="tablist"
        aria-label="Tabs"
        class="inline-flex gap-4 rounded-xl border border-gray-200 bg-white p-1.5 shadow-sm"
      >
        <button
          v-for="(tab, index) in props.tabs"
          :key="index"
          type="button"
          role="tab"
          :aria-selected="activeId === tab.id"
          :aria-controls="`panel-${tab.id}`"
          :id="`tab-${tab.id}`"
          :tabindex="activeId === tab.id ? 0 : -1"
          class="flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
          :class="
            activeId === tab.id
              ? 'bg-black text-white shadow-sm'
              : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
          "
          @click="selectTab(tab.id)"
        >
          <Icon v-if="tab.icon" :name="tab.icon" class="size-4 shrink-0" aria-hidden="true" />
          <span class="hidden sm:inline">{{ tab.label }}</span>
        </button>
      </div>
    </div>

    <!-- Tab Content - Image + Text -->
    <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div class="flex flex-col md:flex-row">
        <!-- Image -->
        <div
          v-if="activeTab?.image"
          class="relative aspect-video w-full overflow-hidden md:aspect-auto md:w-1/2 lg:w-[55%]"
        >
          <div
            v-for="tab in props.tabs"
            :key="index"
            class="absolute inset-0 transition-opacity duration-500"
            :class="activeId === tab.id ? 'opacity-100' : 'pointer-events-none opacity-0'"
          >
            <NuxtImg
              v-if="tab.image"
              :src="tab.image"
              :alt="imageAlt || tab.heading"
              class="size-full object-cover"
              fit="cover"
            />
          </div>
        </div>

        <!-- Text -->
        <div class="relative min-h-[200px] flex-1 md:min-h-[280px]">
          <div
            v-for="tab in props.tabs"
            :key="index"
            :id="`panel-${tab.id}`"
            role="tabpanel"
            :aria-labelledby="`tab-${tab.id}`"
            class="p-8 md:p-12"
            :class="
              activeId === tab.id
                ? 'relative opacity-100'
                : 'pointer-events-none absolute inset-0 flex flex-col justify-center opacity-0'
            "
          >
            <div
              class="mb-4 inline-flex items-center gap-2 rounded-full border border-black/30 bg-black/5 px-3 py-1"
            >
              <Icon
                v-if="tab.icon"
                :name="tab.icon"
                class="size-3.5 shrink-0 text-black"
                aria-hidden="true"
              />
              <span class="text-xs font-medium uppercase tracking-wider text-black">
                {{ tab.label }}
              </span>
            </div>
            <h3 class="font-display text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
              {{ tab.heading }}
            </h3>
            <p class="mt-4 leading-relaxed text-gray-600 md:text-lg">
              {{ tab.description }}
            </p>
            <slot :name="`panel-${tab.id}`" :tab="tab" :is-active="activeId === tab.id">
              <BaseButton
                text="Discover more"
                size="md"
                variant="primary"
                class="mt-8"
                @click="isModalOpen = true"
              />
            </slot>
          </div>
          <BaseModal v-model="isModalOpen" :title="activeTab?.heading" :is-open="isModalOpen">
            <slot name="modal-content">
              <p>
                {{ activeTab?.description }}
              </p>
              <div class="mt-4 flex flex-col gap-4">
                <span class="mt-4 text-sm font-bold text-gray-500">Ask for more information</span>
                <BaseInput
                  v-model="modalEmail"
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email"
                  class="w-1/2"
                />
                <BaseTextarea
                  v-model="modalMessage"
                  placeholder="Enter your message"
                  aria-label="Message"
                  class="w-1/2"
                />
                <BaseButton text="Send" size="md" variant="primary" @click="onSendClick" />
              </div>
            </slot>
          </BaseModal>
          <BaseToast
            v-model="isConfirmationToastOpen"
            title="Confirmed"
            message="Your message has been sent."
            variant="success"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
