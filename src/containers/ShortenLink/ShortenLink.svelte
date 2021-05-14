<script>
  import Button from "../../components/Button";

  let linkInput = "";

  const submitHanlder = () => {
    console.log(linkInput);
  };
</script>

<div
  class="bg-dark-violet p-10 rounded bg-shorten-box-pattern bg-no-repeat bg-cover transform md:-translate-y-16 -translate-y-20"
>
  <div class="md:flex md:justify-between md:gap-6 max-w-screen-lg mx-auto">
    <input
      type="text"
      class="rounded flex-1 p-2 pl-6 w-full mb-2 md:mb-0 md:p-3"
      placeholder="Shorten a link here..."
      bind:value={linkInput}
    />

    <div>
      <Button
        content="Shorten it!"
        variant="filled"
        width="full"
        height="full"
        onPress={submitHanlder}
      />
    </div>
  </div>
</div>
