declare const ENV_IS_PROD: boolean;
declare const ENV_PUBLIC_URL: string;

export const IS_PROD: boolean = ENV_IS_PROD;
export const PUBLIC_URL: string = ENV_PUBLIC_URL;

console.log(`env:IS_PROD<${typeof IS_PROD}> = `, IS_PROD);
console.log(`env:PUBLIC_URL<${typeof PUBLIC_URL}> = `, PUBLIC_URL);
