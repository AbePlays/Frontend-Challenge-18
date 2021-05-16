<script lang="ts">
  export let content: string;
  export let shape: "pill" | "normal" = "normal";
  export let variant: "plain" | "filled" = "plain";
  export let twClass: string = "";
  export let isDisabled: boolean = false;
  export let onPress = () => {};

  $: bgColor = variant === "filled" ? "bg-cyan px-6 py-2" : "";
  $: textColor = variant === "filled" ? "text-white" : "text-grayish-violet";
  $: roundedNess = shape === "pill" ? "rounded-full" : "rounded-md";
</script>

<button
  class="hover:opacity-50 transition-opacity duration-300 focus:outline-none {[
    bgColor,
    textColor,
    roundedNess,
    twClass,
  ].join(' ')}"
  on:click={onPress}
  disabled={isDisabled}
>
  {content}
</button>
