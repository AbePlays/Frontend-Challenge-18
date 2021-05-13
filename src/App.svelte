<script lang="ts">
  import Tailwind from "./Tailwind.svelte";
  import Navbar from "./containers/Navbar";
  import Layout from "./components/Layout";
  import Intro from "./containers/Intro";
  import Content from "./containers/Content";
</script>

<Tailwind />
<Layout>
  <Navbar />
  <Intro />
  <Content />
</Layout>

<style>
</style>
