<template>
  <transition name="slide">
    <section v-show="toggleBlogVisibility" class="bg-primary py-5" id="blog-section">
      <div class="container">
        <div
          class="card blog-background rounded-3 p-3 text-light mx-auto"
          style="max-width: 1000px"
        >
          <!-- Blog Article -->
          <div
            v-for="(article, index) in articles"
            :key="index"
            class="card bg-secondary rounded-3 text-light p-3 mx-auto mb-4"
            style="max-width: 900px"
          >
            <h3 class="text-center">{{ article.title }}</h3>
            <img class="card-img-top my-2" :src="article.imageSrc" :alt="article.imageAlt" />
            <p>{{ article.introduction }}</p>
            <p>{{ article.contents }}</p>
            <ul>
              <li v-for="(point, i) in article.points" :key="i">{{ point }}</li>
            </ul>
            <p>{{ article.conclusion }}</p>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'BlogSection',
  data() {
    return {
      isCartVisible: false,
      articles: [
        {
          title: 'Unleashing the Power: A Deep Dive into the Latest Graphics Cards',
          imageSrc: '/images/asus-rog-strix-4090-btf.png',
          imageAlt: 'Latest Graphics Cards',
          introduction:
            'Discover how the new generation of graphics cards elevates gaming and professional graphics work to a whole new level.',
          contents: `
              Leveraging breakthrough technologies like ray tracing and AI-driven enhancements, these cards redefine performance benchmarks.
              
              Ray Tracing: Experience the pinnacle of photo-realistic graphics with advanced ray tracing technology that mimics the complex interactions between light and materials.\n

              AI-Driven Enhancements: AI algorithms transform the graphical landscape through intelligent upscaling, dynamic performance tweaks, and efficient noise reduction techniques for pristine image quality.\n

              Redefining Performance Benchmarks: The integration of these cutting-edge technologies results in unprecedented leaps in performance, enabling new standards that push the boundaries of realism in digital content.
          `,
          points: [
            'Comprehensive reviews and benchmarks',
            'Insights into real-time ray tracing capabilities',
            'Comparison across brands and models',
            'Future-proofing your machine with the right card'
          ],
          conclusion:
            'Whether youre a dedicated gamer or a creative professional, find out which card suits your needs best.'
        },
        {
          title: 'The Heart of Your Machine: Choosing the Right CPU for Your Build',
          imageSrc: '/images/AMD Ryzen Threadripper 3960X.webp',
          imageAlt: 'Choosing the Right CPU',
          introduction:
            "Any PC builder knows the central role a processor plays in a system's performance. We discuss how to choose the best one for you.",
          contents: `
            The CPU is at the core of any build, dictating the performance and capabilities of your machine. Making the right choice involves understanding key factors:

            **Core Counts**: The number of cores in a CPU determines how it can handle multiple tasks. More cores mean better multitasking and improved performance in threaded applications.

            **Clock Speeds**: A CPU's clock speed measures its processing frequency; higher speeds translate to quicker execution of tasks.

            **Compatibility with Motherboards**: Ensuring that your CPU fits the socket on your motherboard is crucial, alongside verifying chipset compatibility for optimal performance.

            **Future-proofing**: With technology advancing rapidly, consider the upgrade path and longevity of the CPU in context of upcoming advancements.
          `,
          points: [
            'Finding the balance between price and power',
            'Analyzing the impact of cores and threads on multitasking',
            'Understanding compatibility with motherboards',
            "The future of computing: What's on the horizon for CPUs?"
          ],
          conclusion:
            "Explore our guide to making an informed decision that will drive your computer's performance for years."
        },
        {
          title: 'Speed Up Your Load Times: SSDs are the Game Changer',
          imageSrc: '/images/Samsung 980 PRO.webp',
          imageAlt: 'Solid State Drives',
          introduction: [
            'Gone are the days of lengthy load times. Solid-state drives (SSDs) have revolutionized data access speeds.',
            'We examine the technology behind SSDs and why they offer such a significant speed improvement over traditional hard drives.'
          ],
          contents: {
            sections: [
              {
                title: 'SSD vs HDD: Understanding the Technology',
                paragraphs: [
                  'Explore the fundamental differences between solid-state drives (SSDs) and hard disk drives (HDDs).',
                  "Learn how SSDs' lack of moving parts reduces wear and tear while allowing for faster data access."
                ]
              },
              {
                title: 'Benchmarking Load Times: Real-World Applications',
                paragraphs: [
                  'Discover how SSDs significantly reduce load times through various benchmarks and real-world scenarios.',
                  'See side-by-side comparisons that illustrate the time saved in everyday computing tasks.'
                ]
              },
              {
                title: 'How SSDs Can Extend the Life of Your Laptop',
                paragraphs: [
                  'Understand how upgrading to an SSD can rejuvenate aging laptops, offering better battery life and improved performance.',
                  'Consider how the durability and efficiency of SSDs contribute to a longer lifespan for your portable devices.'
                ]
              },
              {
                title: 'Installation Tips and Best Practices for Maintenance',
                paragraphs: [
                  'Get practical advice on how to properly install an SSD in your system without complications.',
                  'Learn about maintaining your SSD to ensure peak performance and longevity through best practices.'
                ]
              }
            ]
          },
          points: [
            'SSD vs HDD: Understanding the technology',
            'Benchmarking load times: Real-world applications',
            'How SSDs can extend the life of your laptop',
            'Installation tips and best practices for maintenance'
          ],
          conclusion:
            'Upgrade to an SSD and feel the difference in every task from booting up to shutting down.'
        }
      ]
    }
  },
  methods: {
    toggleBlogVisibility() {
      this.isBlogVisible = !this.isBlogVisible
    }
  }
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 0.5s,
    transform 0.5s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.card h3 {
  font-size: 1.5em;
}
.card p {
  font-size: 1.25em;
}
.card li {
  font-size: 1.25em;
}
.blog-background {
  background: linear-gradient(
    180deg,
    #161616 0%,
    #161616 10%,
    #0ee636 50%,
    #161616 90%,
    #161616 100%
  );
}
</style>
