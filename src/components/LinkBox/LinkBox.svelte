<script lang="ts">
  import Button from "../Button";
  import { copyText } from "./helper";

  export let url: string;
  export let shortenedUrl: string;
  let copyOperationCompleted = false;

  let onPress = async () => {
    copyOperationCompleted = await copyText(
      copyOperationCompleted,
      shortenedUrl
    );
  };
</script>

<div
  class="bg-white rounded-lg sm:flex sm:justify-between sm:items-center sm:gap-4"
>
  <p class="text-very-dark-violet px-4 py-2 sm:flex-1">{url}</p>
  <div
    class="border-t border-light-gray p-4 pt-2 sm:flex sm:justify-end sm:items-center sm:gap-4 sm:pt-4 sm:flex-1"
  >
    <p class="text-cyan mb-2 sm:mb-0">{shortenedUrl}</p>
    <div>
      <Button
        content={copyOperationCompleted ? "Copied!" : "Copy"}
        variant="filled"
        shape="normal"
        width="full"
        {onPress}
      />
    </div>
  </div>
</div>
