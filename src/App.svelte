<script lang="ts">
  import Tailwind from "./Tailwind.svelte";
  import Navbar from "./containers/Navbar";
  import Intro from "./containers/Intro";
  import Content from "./containers/Content";
  import Footer from "./containers/Footer";
  import SubContent from "./containers/SubContent";
</script>

<Tailwind />
<div class="max-w-screen-2xl mx-auto">
  <Navbar />
  <Intro />
  <Content />
  <SubContent />
  <Footer />
</div>
