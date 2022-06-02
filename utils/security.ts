import CryptoJS from "crypto-js";

const NEXT_PUBLIC_ENCRYPTION_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;

type Obj = Record<string, unknown>;

export const encrypt = (obj: Obj | Obj[]) => {
  const text = JSON.stringify(obj);
  const cipher = CryptoJS.AES.encrypt(
    text,
    NEXT_PUBLIC_ENCRYPTION_KEY,
  ).toString();
  return encodeURIComponent(cipher);
};

export const decrypt = (cipher: string, fallback: [] | null = []) => {
  try {
    const decodedCypher = decodeURIComponent(cipher);
    const bytes = CryptoJS.AES.decrypt(
      decodedCypher,
      NEXT_PUBLIC_ENCRYPTION_KEY,
    );
    const text = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(text);
  } catch (e) {
    return fallback;
  }
};
