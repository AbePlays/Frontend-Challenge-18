<script>
  import Button from "../../components/Button";
  import Logo from "../../assets/logo.svg";
  import { NavbarItems } from "./helper";

  let isMobileNavbarOpen = false;

  const toggleNavbar = () => {
    isMobileNavbarOpen = !isMobileNavbarOpen;
  };
</script>

<nav class="my-8 px-4">
  <div class="flex justify-between items-center">
    <div class="flex items-center">
      <img src={Logo} class="cursor-pointer" alt="logo" />
      <ul class="hidden md:block md:ml-8 space-x-4 text-grayish-violet">
        {#each NavbarItems as item}
          <li
            class="inline-block hover:text-very-dark-violet transition-colors duration-300"
          >
            <a href="/">
              {item}
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <div>
      <svg
        class="w-10 cursor-pointer md:hidden text-grayish-violet"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        on:click={toggleNavbar}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <div class="hidden md:block space-x-4">
        <Button content="Login" />
        <Button content="Sign Up" variant="filled" shape="pill" />
      </div>
    </div>
  </div>
  {#if isMobileNavbarOpen}
    <div
      class="bg-dark-violet p-8 rounded-lg mt-6 divide-y divide-white divide-opacity-20 md:hidden"
    >
      <ul class="space-y-8 text-center text-white">
        {#each NavbarItems as item}
          <li
            class="w-min mx-auto hover:text-grayish-violet transition-colors duration-300"
          >
            <a href="/">
              {item}
            </a>
          </li>
        {/each}
      </ul>
      <div class="flex flex-col space-y-6 pt-6 mt-6">
        <div class="w-min mx-auto">
          <Button content="Login" />
        </div>
        <div class="bg-white rounded-full">
          <Button
            content="Sign Up"
            variant="filled"
            shape="pill"
            width="full"
          />
        </div>
      </div>
    </div>
  {/if}
</nav>
