<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Button from "../../components/Button";
  import { isValidLink } from "./helper";

  let linkInput = "";
  let valid = true;
  const dispatch = createEventDispatcher();

  const submitHandler = () => {
    valid = isValidLink(linkInput);
    console.log(linkInput, valid);

    if (valid) {
      dispatch("addLink", { url: linkInput });
    }
  };
</script>

<div
  class="bg-dark-violet p-10 rounded-lg bg-shorten-box-pattern bg-no-repeat bg-cover"
>
  <div class="md:flex md:justify-between md:gap-6">
    <div class="w-full">
      <input
        type="url"
        class="
        rounded-lg flex-1 p-2 h-14 pl-6 mb-2 md:mb-0 md:p-3 md:pl-8 w-full outline-none placeholder-opacity-50
        {!valid
          ? 'placeholder-red text-red border-2 border-red'
          : 'placeholder-grayish-violet text-grayish-violet'}
      "
        placeholder="Shorten a link here..."
        bind:value={linkInput}
      />
      {#if !valid}
        <p class="text-red italic text-sm mb-4 md:mt-2">Please add a link</p>
      {/if}
    </div>

    <div class="bg-white h-14 w-full md:w-40 mx-auto rounded-lg">
      <Button
        content="Shorten it!"
        variant="filled"
        width="full"
        height="full"
        onPress={submitHandler}
      />
    </div>
  </div>
</div>
