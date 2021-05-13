<script lang="ts">
  export let id: number;
  export let title: string;
  export let content: string;
  export let imgSrc: string;
</script>

<div
  class="{'md:translate-y-' +
    (id - 1) *
      8} bg-white rounded shadow p-6 pt-0 text-center max-w-sm md:text-left mx-auto md:transform "
>
  <div
    class="bg-dark-violet rounded-full flex justify-center items-center w-max p-4 mx-auto md:mx-0 transform -translate-y-10"
  >
    <img src={imgSrc} alt="icon" />
  </div>
  <h1 class="text-xl text-very-dark-blue font-bold ">{title}</h1>
  <p class="text-grayish-violet mt-4">{content}</p>
</div>
