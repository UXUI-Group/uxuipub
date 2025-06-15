const isDevelopment = process.env.NODE_ENV !== 'production';

interface Config {
  basePath: string;
  // 추가 설정들...
}

export const config: Config = {
  basePath: isDevelopment ? '' : '/uxuipub',
};
