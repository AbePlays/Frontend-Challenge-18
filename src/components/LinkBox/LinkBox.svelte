<script lang="ts">
  import { slide } from "svelte/transition";
  import Button from "../Button";
  import { copyText } from "./helper";

  export let url: string;
  export let shortenedUrl: string;
  let copyOperationCompleted = false;

  const onPress = async () => {
    copyOperationCompleted = await copyText(
      copyOperationCompleted,
      shortenedUrl
    );
    if (copyOperationCompleted) {
      setTimeout(() => {
        copyOperationCompleted = false;
      }, 3000);
    }
  };
</script>

<div
  transition:slide
  class="bg-white rounded-lg sm:flex sm:justify-between sm:items-center sm:gap-4 p-4"
>
  <p class="text-very-dark-violet mb-4 sm:mb-0 sm:flex-1">{url}</p>
  <div
    class="border-t border-light-gray sm:border-none pt-4 sm:pt-0 sm:flex-1 sm:flex sm:justify-end sm:items-center sm:gap-4"
  >
    <p class="text-cyan mb-2 sm:mb-0 sm:inline sm:break-all ">
      {shortenedUrl}
    </p>
    <Button
      content={copyOperationCompleted ? "Copied!" : "Copy"}
      variant="filled"
      shape="normal"
      twClass="w-full sm:w-auto {copyOperationCompleted
        ? 'bg-dark-violet'
        : ''}"
      {onPress}
    />
  </div>
</div>
