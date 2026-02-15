const courses = [
  // Web Development
  {
    id: 1,
    title: 'Web Development',
    description: 'Web Development course for beginners',
    image: 'https://picsum.photos/id/1/1920/1080',
    tags: ['Web Development']
  },
  {
    id: 2,
    title: 'React Fundamentals',
    description: 'Build modern UIs with React',
    image: 'https://picsum.photos/id/2/1920/1080',
    tags: ['Web Development']
  },
  {
    id: 3,
    title: 'Node.js & Backend',
    description: 'Server-side JavaScript and APIs',
    image: 'https://picsum.photos/id/3/1920/1080',
    tags: ['Web Development']
  },
  {
    id: 4,
    title: 'Full Stack with Vue',
    description: 'Complete Vue.js applications',
    image: 'https://picsum.photos/id/4/1920/1080',
    tags: ['Web Development']
  },
  {
    id: 5,
    title: 'CSS & Animations',
    description: 'Modern CSS and motion design',
    image: 'https://picsum.photos/id/5/1920/1080',
    tags: ['Web Development']
  },
  {
    id: 6,
    title: 'TypeScript Essentials',
    description: 'Type-safe JavaScript development',
    image: 'https://picsum.photos/id/6/1920/1080',
    tags: ['Web Development']
  },
  // Data & AI
  {
    id: 7,
    title: 'Data Science',
    description: 'Data Science course for beginners',
    image: 'https://picsum.photos/id/7/1920/1080',
    tags: ['Data & AI']
  },
  {
    id: 8,
    title: 'Machine Learning',
    description: 'Machine Learning course for beginners',
    image: 'https://picsum.photos/id/8/1920/1080',
    tags: ['Data & AI']
  },
  {
    id: 9,
    title: 'AI Development',
    description: 'Build AI-powered applications',
    image: 'https://picsum.photos/id/9/1920/1080',
    tags: ['Data & AI']
  },
  {
    id: 10,
    title: 'Data Analytics',
    description: 'Analyze and visualize data',
    image: 'https://picsum.photos/id/10/1920/1080',
    tags: ['Data & AI']
  },
  {
    id: 11,
    title: 'Python for Data',
    description: 'Python scripting and data pipelines',
    image: 'https://picsum.photos/id/11/1920/1080',
    tags: ['Data & AI']
  },
  {
    id: 12,
    title: 'Deep Learning',
    description: 'Neural networks and transformers',
    image: 'https://picsum.photos/id/12/1920/1080',
    tags: ['Data & AI']
  },
  {
    id: 13,
    title: 'NLP Fundamentals',
    description: 'Natural Language Processing basics',
    image: 'https://picsum.photos/id/13/1920/1080',
    tags: ['Data & AI']
  },
  // Cybersecurity
  {
    id: 14,
    title: 'Cybersecurity',
    description: 'Cybersecurity fundamentals',
    image: 'https://picsum.photos/id/14/1920/1080',
    tags: ['Cybersecurity']
  },
  {
    id: 15,
    title: 'Ethical Hacking',
    description: 'Penetration testing and security audits',
    image: 'https://picsum.photos/id/15/1920/1080',
    tags: ['Cybersecurity']
  },
  {
    id: 16,
    title: 'Network Security',
    description: 'Secure network design and monitoring',
    image: 'https://picsum.photos/id/16/1920/1080',
    tags: ['Cybersecurity']
  },
  {
    id: 17,
    title: 'Cloud Security',
    description: 'AWS, Azure and GCP security best practices',
    image: 'https://picsum.photos/id/17/1920/1080',
    tags: ['Cybersecurity']
  },
  {
    id: 18,
    title: 'Secure Coding',
    description: 'Write secure applications from the start',
    image: 'https://picsum.photos/id/18/1920/1080',
    tags: ['Cybersecurity']
  }
]

export function useCourses() {
  const coursesByTag = () => {
    const map = {}
    for (const course of courses) {
      for (const tag of course.tags || []) {
        if (!map[tag]) map[tag] = []
        if (!map[tag].some((c) => c.id === course.id)) {
          map[tag].push(course)
        }
      }
    }
    return Object.keys(map)
      .sort()
      .map((tag) => ({ tag, courses: map[tag] }))
  }

  return {
    courses,
    coursesByTag,
    getCourseById(id) {
      return courses.find((c) => c.id === Number(id))
    }
  }
}
