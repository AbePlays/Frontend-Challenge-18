<script>
  import Hero from "../../assets/illustration-working.svg";
  import Button from "../../components/Button";
</script>

<main
  class="md:flex md:flex-row-reverse md:gap-4 md:items-center md:pt-8 md:pb-36 pb-28 px-4"
>
  <div class="max-w-md mx-auto md:max-w-full">
    <img src={Hero} alt="person sitting on a desk and working" />
  </div>
  <div class="text-center md:text-left space-y-4 my-8 md:my-0">
    <h1
      class="font-bold text-4xl md:text-5xl lg:text-6xl md:leading-tight lg:leading-snug text-dark-violet"
    >
      More than just shorter links
    </h1>
    <p class="text-grayish-violet max-w-md mx-auto md:mx-0">
      Build your brand’s recognition and get detailed insights on how your links
      are performing.
    </p>
    <Button content="Get Started" shape="pill" variant="filled" />
  </div>
</main>
