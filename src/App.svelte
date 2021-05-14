<script lang="ts">
  import Tailwind from "./Tailwind.svelte";
  import Navbar from "./containers/Navbar";
  import Layout from "./components/Layout";
  import Intro from "./containers/Intro";
  import Content from "./containers/Content";
  import Footer from "./containers/Footer";
  import SubContent from "./containers/SubContent";
</script>

<Tailwind />
<Layout>
  <Navbar />
  <Intro />
  <Content />
  <SubContent />
  <Footer />
</Layout>

<style>
</style>
