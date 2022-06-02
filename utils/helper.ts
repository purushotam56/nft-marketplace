export const isServer = typeof window === "undefined";

export const isProduction = process.env.NODE_ENV === "production";

export const isObjEmpty = (obj) => Object.getOwnPropertyNames(obj).length === 0;
