<script>
  import Card from "../../components/Card";
  import { statistics } from "./helper";
</script>

<div class="bg-light-gray px-4 py-20">
  <div class="text-center">
    <h1 class="text-3xl text-dark-violet font-bold ">Advanced Statistics</h1>
    <p class="text-grayish-violet mt-4 max-w-lg mx-auto">
      Track how your links are performing across the web with our advanced
      statistics dashboard.
    </p>
  </div>

  <div class="md:flex md:gap-8 md:justify-between">
    {#each statistics as statistic}
      <div class="mt-20">
        <Card
          id={statistic.id}
          title={statistic.title}
          content={statistic.content}
          imgSrc={statistic.imgSrc}
        />
      </div>
    {/each}
  </div>
</div>
