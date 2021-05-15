export const copyText = async (
  copyOperationCompleted: boolean,
  shortenedUrl: string
): Promise<boolean> => {
  copyOperationCompleted = false;
  try {
    await navigator.clipboard.writeText(shortenedUrl);
    copyOperationCompleted = true;
  } catch (error) {
    console.log(error);
  }

  return copyOperationCompleted;
};
