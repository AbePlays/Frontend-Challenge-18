<script lang="ts">
  import LinkBox from "../../components/LinkBox";
  import Card from "../../components/Card";
  import ShortenLink from "../ShortenLink";
  import { statistics, fetchShortenedUrl } from "./helper";
  import type { Link } from "./types";
  import Layout from "../../components/Layout";

  let data: Link[] = [];

  const addLinkHandler = async (e: { detail: { url: string } }) => {
    const originalUrl = e.detail.url;
    const shortenedUrl = await fetchShortenedUrl(originalUrl);
    console.log(shortenedUrl);

    data = [...data, { originalUrl, shortenedUrl }];
  };
</script>

<div class="bg-light-gray pb-20">
  <Layout>
    <div class="transform md:-translate-y-16 -translate-y-20">
      <ShortenLink on:addLink={addLinkHandler} />
      <div class="mt-4 space-y-4">
        {#each data as item}
          <LinkBox url={item.originalUrl} shortenedUrl={item.shortenedUrl} />
        {/each}
      </div>
    </div>
    <div class="text-center">
      <h1 class="text-3xl text-dark-violet font-bold ">Advanced Statistics</h1>
      <p class="text-grayish-violet mt-4 max-w-lg mx-auto">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </div>

    <div class="md:flex md:gap-8 md:justify-between my-8">
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
  </Layout>
</div>
