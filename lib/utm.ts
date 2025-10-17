export const withUTM = (url: string, src='website') => `${url}${url.includes('?')?'&':'?'}utm_source=${encodeURIComponent(src)}&utm_medium=cta`;
