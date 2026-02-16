# Aladia Project

Modular frontend project built with Nuxt 4, featuring a reusable UI component library with TailwindCSS, ESLint, and Prettier.

## Setup

```bash
npm install
npm run dev
```

## Tech Stack

- **Nuxt 4** – Vue 3 framework
- **TailwindCSS** – Styling
- **ESLint + Prettier** – Linting and formatting
- **@nuxt/icon** – Icon system (Phosphor)
- **@nuxt/image** – Image optimization

---

## UI Component Library

All components use Vue 3 Composition API with `<script setup>`, support props, slots, and events, and include accessibility (ARIA) and responsive behavior.

### 1. BaseButton

**Path:** `app/components/ui/buttons/BaseButton.vue`

| Prop      | Type   | Default   | Description              |
|-----------|--------|-----------|--------------------------|
| `size`    | String | —         | `sm`, `md`, `lg`, `xl`   |
| `text`    | String | —         | Default slot content     |
| `variant` | String | `primary` | `primary`, `secondary`, `outline` |
| `ariaLabel` | String | —       | Accessibility label      |

**Slots:** `default` (fallback: `text` prop)

**Events:** `@click`

```vue
<BaseButton text="Submit" size="md" variant="primary" @click="handleSubmit" />
<BaseButton variant="secondary">
  <Icon name="ph:check" /> Custom content
</BaseButton>
```

---

### 2. BaseCard

**Path:** `app/components/ui/cards/BaseCard.vue`

| Prop          | Type   | Required | Description                                  |
|---------------|--------|----------|----------------------------------------------|
| `title`       | String | ✓        | Card title                                   |
| `description` | String | ✓        | Card body text                               |
| `image`       | String | ✓        | Image URL                                    |
| `loading`     | String | —        | `eager`, `lazy`

**Slots:** `image`, `header`, `description`, `default`

**Events:** `@click` (keyboard: Enter, Space)

**Accessibility:** `role="button"`, `tabindex="0"`, `aria-labelledby`, `aria-describedby`

```vue
<BaseCard
  title="Course 1"
  description="Description here"
  image="/image.jpg"
  @click="navigateTo('/courses/1')"
/>
```

---

### 3. BaseModal

**Path:** `app/components/ui/modals/BaseModal.vue`

| Prop         | Type    | Default  | Description      |
|--------------|---------|----------|------------------|
| `modelValue` | Boolean | `false`  | Open/close state |
| `title`      | String  | `''`     | Header title     |

**Slots:** `header`, `default`, `footer`

**Events:** `update:modelValue` (v-model)

**Accessibility:** `role="dialog"`, `aria-modal`, `aria-labelledby`, `aria-describedby`, Escape to close

```vue
<BaseModal v-model="isOpen" title="Confirm">
  <p>Content here</p>
  <template #footer>
    <BaseButton text="Close" @click="isOpen = false" />
  </template>
</BaseModal>
```

---

### 4. BaseInput

**Path:** `app/components/ui/inputs/BaseInput.vue`

| Prop            | Type           | Default   | Description                    |
|-----------------|----------------|-----------|--------------------------------|
| `modelValue`    | String, Number | `''`      | Input value                    |
| `type`          | String         | `text`    | Input type                     |
| `placeholder`   | String         | `''`      | Placeholder                    |
| `ariaLabel`     | String         | `''`      | Accessibility                  |
| `ariaDescribedby` | String       | `''`      | Described by ID                |
| `variant`       | String         | `default` | `default` (bordered), `ghost` (transparent, for dark headers) |

**Slots:** `prefix`, `suffix`

**Events:** `update:modelValue`, `input`

```vue
<BaseInput
  v-model="email"
  type="email"
  placeholder="Enter email"
  aria-label="Email"
/>
<BaseInput v-model="search" variant="ghost" placeholder="Cerca...">
  <template #prefix>
    <Icon name="ph:magnifying-glass" />
  </template>
</BaseInput>
```

---

### 5. BaseTabs

**Path:** `app/components/ui/BaseTabs.vue`

| Prop         | Type           | Default | Description          |
|--------------|----------------|---------|----------------------|
| `tabs`       | Array          | —       | Tab definitions      |
| `modelValue` | String, Number | `null`  | Active tab (id or index) |
| `imageAlt`   | String         | `''`    | Image alt override   |

Each tab: `{ id, label, heading, description, icon?, image? }`

**Slots:** `panel-{tabId}` (e.g. `#panel-spaces`)

**Events:** `update:modelValue`

```vue
<BaseTabs v-model="activeTab" :tabs="tabs">
  <template #panel-spaces>Content 1</template>
  <template #panel-courses>Content 2</template>
</BaseTabs>
```

---

## Additional Components

- **BaseToast** – Notifications (`ui/modals/BaseToast.vue`)
- **BaseCarousel** – Image carousel (`ui/BaseCarousel.vue`)
- **BaseTextarea** – Text area (`ui/inputs/BaseTextarea.vue`)
- **SearchBar** – Search input built on BaseInput with `variant="ghost"` and prefix icon (`ui/inputs/SearchBar.vue`)

### SearchBar

**Path:** `app/components/ui/inputs/SearchBar.vue`

| Prop         | Type   | Default | Description   |
|--------------|--------|---------|---------------|
| `modelValue` | String | `''`    | Search query  |

**Events:** `update:modelValue`, `@search` (on form submit / Enter)

**Usage:** Wraps BaseInput with `prefix` slot for icon. Responsive: parent container uses `max-w-[140px]` (mobile), `max-w-[200px]` (sm), `max-w-md` (md+).

```vue
<SearchBar v-model="search" @search="onSearch" />
```

---

## Project Structure

```
app/
├── components/
│   ├── ui/
│   │   ├── buttons/BaseButton.vue
│   │   ├── cards/BaseCard.vue
│   │   ├── inputs/BaseInput.vue, BaseTextarea.vue, SearchBar.vue
│   │   ├── modals/BaseModal.vue, BaseToast.vue
│   │   ├── BaseTabs.vue
│   │   └── BaseCarousel.vue
│   ├── AppHeader.vue
│   └── AppFooter.vue
├── composables/
│   └── useCourses.js
├── layouts/
│   ├── default.vue
│   └── courses.vue
├── pages/
│   ├── index.vue
│   └── courses/
│       ├── index.vue
│       └── [id].vue
└── utils/constants/
    ├── button-variants.js
    └── toast-variants.js
```

---

## Composables

### useCourses

**Path:** `app/composables/useCourses.js`

- `courses` – Array of course objects (`id`, `title`, `description`, `image`, `tags`)
- `coursesByTag()` – Returns sections grouped by tag: `[{ tag, courses }]`
- `getCourseById(id)` – Returns course by id

Courses are grouped into three tags: **Web Development**, **Data & AI**, **Cybersecurity**.

---

## Pages & Layouts

- **Layouts** use `min-h-screen flex flex-col` and `main` has `flex-1` for full viewport height and no white space on short pages.
- **Courses index** (`/courses`) – Card sections by tag with horizontal scroll, snap, and thin scrollbar.

---

## Scripts

| Command   | Description        |
|-----------|--------------------|
| `npm run dev`   | Development server |
| `npm run build` | Production build   |
| `npm run lint`  | ESLint             |
| `npm run format`| Prettier           |
