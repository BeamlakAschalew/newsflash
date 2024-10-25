export const parseDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toISOString();
};

export const removeHtmlTags = (input: string): string => {
  return input.replace(/<[^>]*>/g, "").trim();
};
