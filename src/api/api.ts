// eslint-disable-next-line import/prefer-default-export
export const fetcher = (url: string) => fetch(url).then((res) => res?.json());
