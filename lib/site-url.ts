const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://daridarom.github.io/alexblagov/";

export const siteUrl = `${configuredSiteUrl.replace(/\/+$/, "")}/`;
