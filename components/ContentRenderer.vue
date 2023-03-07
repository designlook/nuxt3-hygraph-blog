<template>
  <div>
    <template v-for="(element, index) in content" :key="index">
      <p v-if="element.type === 'paragraph'">
        <template
          v-for="(child, childIndex) in element.children"
          :key="childIndex"
        >
          <template v-if="child.type === 'link'">
            <nuxt-link
              class="link-primary"
              :href="child.href"
              target="_blank"
              >{{ child.children[0].text }}</nuxt-link
            >
          </template>
          <template v-else-if="child.type === 'code-block'">
            <div v-highlightjs>
              <pre
                class="language-javascript"
              ><code><template v-for="(codeChild, codeChildIndex) in child.children" :key="codeChildIndex"><template v-if="codeChild.type === 'paragraph'">{{ codeChild.children[0].text }}</template></template></code></pre>
            </div>
          </template>
          <template v-else>
            <span v-if="child.code">
              <code class="inline-code">{{ child.text }}</code></span
            >
            <template v-else>
              {{ child.text }}
            </template>
          </template>
        </template>
      </p>
      <template v-if="element.type === 'numbered-list'">
        <template v-if="element.children">
          <ol class="list-decimal">
            <ContentBlock :content="element.children" />
          </ol>
        </template>
      </template>
      <template v-if="element.type === 'list-item'">
        <template v-if="element.children">
          <li>
            <ContentBlock :content="element.children" />
          </li>
        </template>
      </template>
      <template v-if="element.type === 'list-item-child'">
        <template v-if="element.children">
          <ContentBlock :content="element.children" />
        </template>
      </template>
      <template v-if="element.type === 'code-block'">
        <div v-highlightjs>
          <pre
            class="language-javascript"
          ><code><template v-for="(codeChild, codeChildIndex) in element.children" :key="codeChildIndex">{{ codeChild?.text }}
<template v-if="codeChild.type === 'paragraph'">
{{ codeChild.children[0].text }}
</template></template></code></pre>
        </div>
      </template>
      <template v-else-if="element.type === 'image'">
        <img :src="element.src" :alt="element.title" />
      </template>
    </template>
  </div>
</template>

<script>
import "highlight.js/styles/monokai-sublime.css"

export default {
  name: "ContentBlock",
  props: {
    content: {
      type: Object,
      required: true,
    },
  }
}
</script>
<style scoped>
code.inline-code {
  color: rgb(148, 12, 201);
}
p {
  margin-top: 1rem;
}
ol.list-decimal {
  margin-left: 1.5rem;
}
</style>
